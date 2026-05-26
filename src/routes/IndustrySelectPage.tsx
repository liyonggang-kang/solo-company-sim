import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INDUSTRIES } from '../engine/data/industries';
import type { IndustryId } from '../engine/types';
import { useGameStore } from '../store/gameStore';
import { sfxConfirm, sfxClick } from '../utils/audio';

const industryList = Object.values(INDUSTRIES);

export default function IndustrySelectPage() {
  const navigate = useNavigate();
  const initNewGame = useGameStore((s) => s.initNewGame);
  const [selected, setSelected] = useState<IndustryId | null>(null);

  const industry = selected ? INDUSTRIES[selected] : null;

  const handleConfirm = () => {
    if (!selected) return;
    sfxConfirm();
    initNewGame(selected);
    navigate('/game');
  };

  const handleCardClick = (id: IndustryId) => {
    sfxClick();
    setSelected(id);
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate('/')} className="text-text-muted text-lg">←</button>
        <h2 className="text-lg font-bold">选择你的赛道</h2>
      </div>

      <p className="text-xs text-text-muted mb-4">
        每个行业有独特的市场逻辑和事件链。选一个你感兴趣的方向开始创业之旅。
      </p>

      {/* Grid of industries */}
      <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto">
        {industryList.map((ind) => (
          <button
            key={ind.id}
            onClick={() => handleCardClick(ind.id)}
            className={`p-3 rounded-xl border text-left transition-all ${
              selected === ind.id
                ? 'border-accent bg-dark-card-hover'
                : 'border-dark-border bg-dark-card card-hover'
            }`}
          >
            <div className="text-2xl mb-1">{ind.icon}</div>
            <div className="text-sm font-bold text-text-primary">{ind.name}</div>
            <div className="text-xs text-text-secondary mt-0.5">{ind.subtitle}</div>
            <div className="text-xs text-text-muted mt-1">
              {'⭐'.repeat(ind.difficulty)}{'☆'.repeat(3 - ind.difficulty)}
            </div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {industry && (
        <div className="mt-3 p-4 rounded-xl bg-dark-card border border-dark-border">
          <p className="text-xs text-text-secondary leading-relaxed">{industry.description}</p>
          <div className="grid grid-cols-4 gap-2 mt-3 text-center text-xs">
            <div>
              <div className="text-text-muted">💵 资金</div>
              <div className="font-bold text-resource-money">{industry.startingResources.money}</div>
            </div>
            <div>
              <div className="text-text-muted">⚡ 精力</div>
              <div className="font-bold text-resource-energy">{industry.startingResources.energy}</div>
            </div>
            <div>
              <div className="text-text-muted">⭐ 声望</div>
              <div className="font-bold text-resource-reputation">{industry.startingResources.reputation}</div>
            </div>
            <div>
              <div className="text-text-muted">❤️ 健康</div>
              <div className="font-bold text-resource-health">{industry.startingResources.health}</div>
            </div>
          </div>
        </div>
      )}

      {/* Confirm button */}
      <button
        onClick={handleConfirm}
        disabled={!selected}
        className={`w-full py-4 rounded-xl font-bold text-lg mt-3 transition-all ${
          selected
            ? 'bg-accent text-dark-bg card-hover'
            : 'bg-dark-border text-text-muted cursor-not-allowed'
        }`}
      >
        确认选择
      </button>
    </div>
  );
}
