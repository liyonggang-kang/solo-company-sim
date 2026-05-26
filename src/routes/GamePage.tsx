import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { useUIStore } from '../store/uiStore';
import { useSaveStore } from '../store/saveStore';
import type { EventChoice } from '../engine/types';
import { INDUSTRIES } from '../engine/data/industries';
import {
  sfxChoiceMade, sfxPositive, sfxNegative, sfxSocialEvent,
  sfxEnding, sfxSadEnding, sfxEventNew, sfxOpenTab, sfxClick,
  isSfxEnabled, isMusicEnabled, toggleSfx, toggleMusic,
} from '../utils/audio';
import ResourceBar from '../components/game/ResourceBar';
import RolePanel from '../components/game/RolePanel';
import EventCard from '../components/game/EventCard';
import OutcomeModal from '../components/game/OutcomeModal';
import SocialEventModal from '../components/game/SocialEventModal';
import EventLog from '../components/game/EventLog';
import SkillTreePanel from '../components/game/SkillTreePanel';
import NewsTicker from '../components/game/NewsTicker';

export default function GamePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const state = useGameStore();
  const {
    makeChoice, nextTurn, loadState,
    phase, turn, industryId, resources, roles, currentEvent,
    pendingSocialEvent, unlockedSkills, skillPoints,
    lastDelta, eventHistory, endingTriggered, flags,
    loan, loanInterest, missedPayments,
  } = state;

  const { activeTab, setActiveTab } = useUIStore();
  const saveStore = useSaveStore();

  const [lastOutcome, setLastOutcome] = useState<{ text: string; delta: typeof lastDelta } | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [sfxOn, setSfxOn] = useState(isSfxEnabled());
  const [musicOn, setMusicOn] = useState(isMusicEnabled());
  const prevEventId = useRef<string | null>(null);

  // Play event sound when new event appears
  useEffect(() => {
    if (currentEvent && currentEvent.id !== prevEventId.current) {
      prevEventId.current = currentEvent.id;
      sfxEventNew();
    }
  }, [currentEvent?.id]);

  // Load save if requested
  useEffect(() => {
    const loadSlot = searchParams.get('load');
    if (loadSlot) {
      const data = saveStore.loadSlot(parseInt(loadSlot));
      if (data) {
        loadState(data);
      }
    }
    if (!industryId && !searchParams.get('load')) {
      navigate('/select');
    }
  }, []);

  // Show social event when triggered
  useEffect(() => {
    if (pendingSocialEvent) {
      sfxSocialEvent();
      setShowSocial(true);
    }
  }, [pendingSocialEvent]);

  // Navigate to ending
  useEffect(() => {
    if (phase === 'ending' && endingTriggered) {
      if (['back_to_village', 'early_death'].includes(endingTriggered)) {
        sfxSadEnding();
      } else {
        sfxEnding();
      }
      navigate(`/ending/${endingTriggered}`);
    }
  }, [phase, endingTriggered]);

  // Auto-save
  const handleAutoSave = useCallback(() => {
    if (industryId && turn > 1) {
      const indName = INDUSTRIES[industryId]?.name || '未知';
      saveStore.autoSave(state, indName);
    }
  }, [industryId, turn, state]);

  const handleChoice = useCallback((choice: EventChoice) => {
    sfxChoiceMade();
    const ending = makeChoice(choice);
    // 如果触发了结局，直接跳转，不等 useEffect
    if (ending) {
      if (['back_to_village', 'early_death', 'money_crisis', 'health_crisis', 'energy_crisis', 'reputation_crisis', 'total_collapse', 'money_health_zero', 'loan_crisis'].includes(ending)) {
        sfxSadEnding();
      } else {
        sfxEnding();
      }
      handleAutoSave();
      navigate(`/ending/${ending}`);
      return;
    }
    setLastOutcome({
      text: choice.outcomeText,
      delta: { ...state.resources },
    });
    setShowOutcome(true);
    handleAutoSave();
  }, [makeChoice, state.resources, handleAutoSave, navigate]);

  const handleOutcomeContinue = useCallback(() => {
    setShowOutcome(false);
    if (lastOutcome?.delta) {
      const netChange = (state.resources.money - lastOutcome.delta.money) +
        (state.resources.energy - lastOutcome.delta.energy) +
        (state.resources.reputation - lastOutcome.delta.reputation) +
        (state.resources.health - lastOutcome.delta.health);
      if (netChange >= 0) sfxPositive();
      else sfxNegative();
    }
    // nextTurn 内部会检查结局，如果在 advanceTurn 中触发结局，从这里处理
    const ending = nextTurn();
    if (ending) {
      if (['back_to_village', 'early_death', 'money_crisis', 'health_crisis', 'energy_crisis', 'reputation_crisis', 'total_collapse', 'money_health_zero', 'loan_crisis'].includes(ending)) {
        sfxSadEnding();
      } else {
        sfxEnding();
      }
      handleAutoSave();
      navigate(`/ending/${ending}`);
    }
  }, [nextTurn, lastOutcome, state.resources, handleAutoSave, navigate]);

  const handleSocialChoice = useCallback((choice: EventChoice) => {
    sfxChoiceMade();
    const ending = makeChoice(choice);
    if (ending) {
      if (['back_to_village', 'early_death', 'money_crisis', 'health_crisis', 'energy_crisis', 'reputation_crisis', 'total_collapse', 'money_health_zero', 'loan_crisis'].includes(ending)) {
        sfxSadEnding();
      } else {
        sfxEnding();
      }
      handleAutoSave();
      navigate(`/ending/${ending}`);
      return;
    }
    setLastOutcome({
      text: choice.outcomeText,
      delta: null,
    });
    setShowSocial(false);
    setShowOutcome(true);
    handleAutoSave();
  }, [makeChoice, handleAutoSave, navigate]);

  const handleSave = () => {
    if (industryId) {
      const indName = INDUSTRIES[industryId]?.name || '未知';
      saveStore.saveSlot(1, state, indName);
    }
  };

  const handleQuit = () => {
    handleSave();
    navigate('/');
  };

  if (!industryId || phase === 'ending') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-text-muted">加载中...</p>
      </div>
    );
  }

  const industry = INDUSTRIES[industryId];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-dark-card border-b border-dark-border">
        <div className="flex items-center gap-2">
          <span className="text-xl">{industry.icon}</span>
          <div>
            <div className="text-sm font-bold text-text-primary">{industry.name}</div>
            <div className="text-xs text-text-muted">
              第 {turn} / 24 个月
              {loan > 0 && (
                <span className="ml-2 text-resource-danger">
                  💳 贷{loan}万
                  {missedPayments > 0 && <span> 逾期{missedPayments}次</span>}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => { const v = toggleSfx(); setSfxOn(v); sfxClick(); }}
            className={`text-xs px-1.5 py-1 rounded-lg ${sfxOn ? 'text-text-secondary' : 'text-text-muted opacity-50'}`}
            title="音效开关"
          >
            {sfxOn ? '🔊' : '🔇'}
          </button>
          <button
            onClick={() => { const v = toggleMusic(); setMusicOn(v); }}
            className={`text-xs px-1.5 py-1 rounded-lg ${musicOn ? 'text-text-secondary' : 'text-text-muted opacity-50'}`}
            title="音乐开关"
          >
            {musicOn ? '🎵' : '🎵'}
          </button>
          <button
            onClick={handleSave}
            className="text-xs px-2 py-1 rounded-lg border border-dark-border text-text-secondary"
          >
            存档
          </button>
          <button
            onClick={handleQuit}
            className="text-xs px-2 py-1 rounded-lg border border-dark-border text-text-muted"
          >
            退出
          </button>
        </div>
      </div>

      {/* Resource bars */}
      <ResourceBar {...resources} />

      {/* Role panel */}
      <RolePanel roles={roles} />

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 0 && currentEvent && (
          <EventCard
            event={currentEvent}
            resources={resources}
            roles={roles}
            unlockedSkills={unlockedSkills}
            onChoice={handleChoice}
          />
        )}
        {activeTab === 1 && (
          <EventLog history={eventHistory} />
        )}
        {activeTab === 2 && (
          <SkillTreePanel
            unlockedSkills={unlockedSkills}
            skillPoints={skillPoints}
          />
        )}
        {activeTab === 3 && (
          <NewsTicker turn={turn} industryId={industryId} />
        )}
      </div>

      {/* Bottom navigation */}
      <div className="flex border-t border-dark-border bg-dark-card">
        {['📋事件', '📜记录', '🌳技能', '📰新闻'].map((label, i) => (
          <button
            key={i}
            onClick={() => { if (activeTab !== i) sfxOpenTab(); setActiveTab(i); }}
            className={`flex-1 py-3 text-xs font-medium transition-colors ${
              activeTab === i
                ? 'text-accent border-t-2 border-accent'
                : 'text-text-muted'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Outcome modal */}
      <OutcomeModal
        open={showOutcome}
        outcomeText={lastOutcome?.text || ''}
        delta={lastOutcome?.delta ? {
          money: resources.money - (lastOutcome.delta.money || 0),
          energy: resources.energy - (lastOutcome.delta.energy || 0),
          reputation: resources.reputation - (lastOutcome.delta.reputation || 0),
          health: resources.health - (lastOutcome.delta.health || 0),
        } : null}
        onContinue={handleOutcomeContinue}
      />

      {/* Social event modal */}
      {pendingSocialEvent && (
        <SocialEventModal
          open={showSocial}
          event={pendingSocialEvent}
          resources={resources}
          roles={roles}
          unlockedSkills={unlockedSkills}
          onChoice={handleSocialChoice}
        />
      )}
    </div>
  );
}
