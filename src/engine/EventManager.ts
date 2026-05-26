// ============================================================
// 事件管理器 — 加权随机事件选择 + 冷却机制
// ============================================================
import type { GameEvent, SocialEvent, GameState } from './types';

const SOCIAL_EVENT_MIN_INTERVAL = 4;
const SOCIAL_EVENT_MAX_INTERVAL = 8;
const RECENT_COOLDOWN = 5; // 最近5个事件不重复

function weightedRandom<T>(items: T[], weights: number[]): T {
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  if (totalWeight <= 0) return items[Math.floor(Math.random() * items.length)];
  let random = Math.random() * totalWeight;
  for (let i = 0; i < items.length; i++) {
    random -= weights[i];
    if (random <= 0) return items[i];
  }
  return items[items.length - 1];
}

// Track which event IDs were recently seen (by looking at completed events order)
function getRecentlyShown(state: GameState, count: number): string[] {
  // Use completedEvents (which maintains insertion order) to get recent ones
  return state.completedEvents.slice(-count);
}

export function selectNextEvent(
  events: GameEvent[],
  state: GameState
): GameEvent | null {
  const recentIds = getRecentlyShown(state, RECENT_COOLDOWN);

  const candidates = events.filter((event) => {
    // 冷却：最近出现过的非可重复事件先排除
    if (recentIds.includes(event.id)) return false;

    // 排除已完成的非可重复事件
    if (!event.repeatable && state.completedEvents.includes(event.id)) return false;

    // 行业匹配
    if (event.industries !== 'all' && state.industryId && !event.industries.includes(state.industryId)) {
      return false;
    }

    // 回合限制
    if (event.minTurn && state.turn < event.minTurn) return false;
    if (event.maxTurn && state.turn > event.maxTurn) return false;

    // 前置条件
    if (event.prerequisite) {
      if (event.prerequisite.requiredFlag && !state.flags[event.prerequisite.requiredFlag]) return false;
      if (event.prerequisite.blockedFlag && state.flags[event.prerequisite.blockedFlag]) return false;
      if (event.prerequisite.minMoney !== undefined && state.resources.money < event.prerequisite.minMoney) return false;
      if (event.prerequisite.maxMoney !== undefined && state.resources.money > event.prerequisite.maxMoney) return false;
    }

    return true;
  });

  // 如果冷却排除了太多事件，放开冷却限制重试
  if (candidates.length < 5) {
    const fallback = events.filter((event) => {
      if (!event.repeatable && state.completedEvents.includes(event.id)) return false;
      if (event.industries !== 'all' && state.industryId && !event.industries.includes(state.industryId)) return false;
      if (event.minTurn && state.turn < event.minTurn) return false;
      if (event.maxTurn && state.turn > event.maxTurn) return false;
      if (event.prerequisite) {
        if (event.prerequisite.requiredFlag && !state.flags[event.prerequisite.requiredFlag]) return false;
        if (event.prerequisite.blockedFlag && state.flags[event.prerequisite.blockedFlag]) return false;
        if (event.prerequisite.minMoney !== undefined && state.resources.money < event.prerequisite.minMoney) return false;
        if (event.prerequisite.maxMoney !== undefined && state.resources.money > event.prerequisite.maxMoney) return false;
      }
      return true;
    });
    if (fallback.length > 0) {
      const weights = fallback.map((e) => e.weight);
      return weightedRandom(fallback, weights);
    }
    return null;
  }

  const weights = candidates.map((e) => e.weight);
  return weightedRandom(candidates, weights);
}

export function selectSocialEvent(
  socialEvents: SocialEvent[],
  state: GameState
): SocialEvent | null {
  const candidates = socialEvents.filter((event) => {
    if (event.requiredFlag && !state.flags[event.requiredFlag]) return false;
    if (event.minReputation !== undefined && state.resources.reputation < event.minReputation) return false;
    if (event.maxReputation !== undefined && state.resources.reputation > event.maxReputation) return false;
    return true;
  });

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function shouldTriggerSocialEvent(state: GameState): boolean {
  return state.turn >= state.socialEventTimer;
}

export function resetSocialEventTimer(): number {
  return Math.floor(
    Math.random() * (SOCIAL_EVENT_MAX_INTERVAL - SOCIAL_EVENT_MIN_INTERVAL + 1)
  ) + SOCIAL_EVENT_MIN_INTERVAL;
}
