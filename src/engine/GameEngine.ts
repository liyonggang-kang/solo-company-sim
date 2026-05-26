// ============================================================
// 游戏引擎 — 核心状态机，纯函数
// ============================================================
import type {
  GameState, IndustryId, EventChoice,
  EndingId, EventLogEntry,
} from './types';
import { INDUSTRIES } from './data/industries';
import { EVENTS } from './data/events';
import { SOCIAL_EVENTS } from './data/socialEvents';
import { ENDINGS } from './data/endings';
import { selectNextEvent, selectSocialEvent, shouldTriggerSocialEvent, resetSocialEventTimer } from './EventManager';
import { applyEffects, getDelta } from './ResourceCalculator';
import { evaluateEnding } from './EndingEvaluator';
import { getPassivesFromSkills } from './SkillTree';

export function createInitialState(): GameState {
  return {
    phase: 'title',
    turn: 0,
    industryId: null,
    startedAt: Date.now(),

    resources: { money: 50, energy: 80, reputation: 20, health: 90 },
    roles: { ceo: 50, employee: 70, sales: 30 },

    flags: {},
    completedEvents: [],
    unlockedSkills: [],
    skillPoints: 0,
    endingTriggered: null,

    loan: 0,
    loanInterest: 0,
    missedPayments: 0,

    currentEvent: null,
    pendingSocialEvent: null,

    socialEventTimer: resetSocialEventTimer(),
    lastDelta: null,
    eventHistory: [],
  };
}

export function startNewGame(industryId: IndustryId): GameState {
  const industry = INDUSTRIES[industryId];
  const state = createInitialState();

  const updated: GameState = {
    ...state,
    phase: 'playing',
    turn: 1,
    industryId,
    resources: { ...industry.startingResources },
    roles: { ...industry.startingRoles },
    socialEventTimer: 4 + Math.floor(Math.random() * 5), // 第 4-8 回合触发首次社会事件
  };

  return advanceToNextEvent(updated);
}

export function advanceToNextEvent(state: GameState): GameState {
  const nextEvent = selectNextEvent(EVENTS, state);

  return {
    ...state,
    currentEvent: nextEvent,
    pendingSocialEvent: null,
    completedEvents: nextEvent ? [...state.completedEvents, nextEvent.id] : state.completedEvents,
  };
}

export function resolveChoice(
  state: GameState,
  choice: EventChoice
): {
  newState: GameState;
  ending: EndingId | null;
} {
  const passives = getPassivesFromSkills(state.unlockedSkills);

  const result = applyEffects(
    state.resources,
    state.roles,
    choice.effects,
    passives
  );

  const newResources = result.resources;
  const newRoles = result.roles;

  // 合并 flags
  const newFlags = { ...state.flags, ...result.newFlags };

  // 合并解锁技能
  const newUnlockedSkills = [...state.unlockedSkills];
  for (const skillId of result.unlockedSkills) {
    if (!newUnlockedSkills.includes(skillId as any)) {
      newUnlockedSkills.push(skillId as any);
    }
  }

  const newSkillPoints = state.skillPoints + result.skillPointsGained;

  // 处理贷款：如果刚设置了 has_loan 或 loan_amount flag
  let newLoan = state.loan;
  if (newFlags['loan_amount']) {
    newLoan = newFlags['loan_amount'] as number;
  }
  // 如果还清了贷款
  if (newFlags['paid_off_loan']) {
    newLoan = 0;
  }

  const logEntry: EventLogEntry = {
    turn: state.turn,
    eventTitle: state.currentEvent?.title || '未知事件',
    choiceText: choice.text,
    outcomeText: choice.outcomeText,
  };

  const updatedState: GameState = {
    ...state,
    resources: newResources,
    roles: newRoles,
    flags: newFlags,
    unlockedSkills: newUnlockedSkills,
    skillPoints: newSkillPoints,
    loan: newLoan,
    loanInterest: newLoan > 0 ? 0 : state.loanInterest,
    missedPayments: newLoan > 0 ? 0 : state.missedPayments,
    lastDelta: getDelta(state.resources, newResources),
    eventHistory: [...state.eventHistory, logEntry],
  };

  // 检查结局
  const ending = evaluateEnding(updatedState);
  if (ending) {
    return {
      newState: {
        ...updatedState,
        phase: 'ending',
        endingTriggered: ending,
        currentEvent: null,
      },
      ending,
    };
  }

  return { newState: updatedState, ending: null };
}

export function advanceTurn(state: GameState): GameState {
  const newTurn = state.turn + 1;

  // 每 5 回合获得 1 个技能点
  const skillPointBonus = newTurn % 5 === 0 ? 1 : 0;

  // 贷款利息：有贷款时每回合增加利息
  let newLoan = state.loan;
  let newInterest = state.loanInterest;
  let newMissedPayments = state.missedPayments;

  if (state.loan > 0) {
    // 月息 5%
    newInterest += Math.round(state.loan * 0.05);
    // 如果资金不足以还利息，增加逾期
    if (state.resources.money < state.loan * 0.1) {
      newMissedPayments += 1;
    }
  }

  let updated: GameState = {
    ...state,
    turn: newTurn,
    skillPoints: state.skillPoints + skillPointBonus,
    loan: newLoan,
    loanInterest: newInterest,
    missedPayments: newMissedPayments,
  };

  // 检查是否应该结束（回合超限 或 资源归零）
  const ending = evaluateEnding(updated);
  if (ending) {
    return {
      ...updated,
      phase: 'ending',
      endingTriggered: ending,
      currentEvent: null,
      pendingSocialEvent: null,
    };
  }

  // 检查社会事件
  if (shouldTriggerSocialEvent(updated)) {
    const socialEvent = selectSocialEvent(SOCIAL_EVENTS, updated);
    if (socialEvent) {
      updated = {
        ...updated,
        pendingSocialEvent: socialEvent,
        socialEventTimer: newTurn + resetSocialEventTimer(),
      };
      return updated;
    }
  }

  // 推进到下一个事件
  return advanceToNextEvent(updated);
}

export function getEndingDef(endingId: EndingId) {
  return ENDINGS[endingId];
}

export function getIndustryDef(industryId: IndustryId) {
  return INDUSTRIES[industryId];
}
