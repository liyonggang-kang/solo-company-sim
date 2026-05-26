// ============================================================
// 结局评估器 — 判定触发哪个结局（2年=24回合）
// ============================================================
import type { EndingId, GameState } from './types';

const MAX_TURN = 24;

export function evaluateEnding(state: GameState): EndingId | null {
  const { resources, flags, unlockedSkills, turn, loan, missedPayments } = state;
  const skillCount = unlockedSkills.length;
  const spiritSkills = unlockedSkills.filter(s =>
    ['meditation', 'resilience', 'creativity', 'flow_state'].includes(s)
  ).length;

  // ---- 回合超限强制结局（最优先） ----
  if (turn > MAX_TURN) {
    return evaluateForcedEnding(state);
  }

  // ---- 资源归零立即结束 ----
  const moneyZero = resources.money <= 0;
  const healthZero = resources.health <= 0;
  const energyZero = resources.energy <= 0;
  const repZero = resources.reputation <= 0;
  const zeroCount = [moneyZero, healthZero, energyZero, repZero].filter(Boolean).length;

  if (zeroCount > 0) {
    // 前6回合→早夭
    if (turn <= 6) {
      return 'early_death';
    }
    // 3项以上→全面崩盘
    if (zeroCount >= 3) {
      return 'total_collapse';
    }
    // 2项特定组合
    if (moneyZero && healthZero) {
      return 'money_health_zero';
    }
    // 单项归零
    if (healthZero) return 'health_crisis';
    if (energyZero) return 'energy_crisis';
    if (moneyZero) return 'money_crisis';
    if (repZero) return 'reputation_crisis';
  }

  // ---- 银行催贷（贷款>0 且 资金<贷款额 且 逾期>=2） ----
  if (loan > 0 && resources.money < loan && missedPayments >= 2) {
    return 'loan_crisis';
  }

  // ---- 正面结局 ----
  const avgResource = (resources.money + resources.energy + resources.reputation + resources.health) / 4;

  // 传奇
  if (skillCount >= 12 && avgResource >= 75) {
    return 'legend';
  }

  // 财富自由
  if (resources.money >= 95) {
    return 'wealth_freedom';
  }

  // 行业专家
  if (resources.reputation >= 90 && skillCount >= 8) {
    return 'industry_expert';
  }

  // 被收购
  if (flags['met_investor'] && resources.reputation >= 60 && resources.money >= 50) {
    return 'acquired';
  }

  // 连续创业者
  if (flags['failed_before'] && resources.money >= 30 && resources.health >= 50) {
    return 'serial_entrepreneur';
  }

  // 转行艺术家
  if (spiritSkills >= 3 && resources.reputation >= 50 && resources.money <= 40) {
    return 'artist';
  }

  // 回村躺平
  if (resources.health <= 20 && resources.money <= 20) {
    return 'back_to_village';
  }

  // 还清贷款自由了
  if (flags['paid_off_loan'] && resources.money >= 60) {
    return 'debt_free';
  }

  // ---- 第 24 回合强制结局 ----
  if (turn >= MAX_TURN) {
    return evaluateForcedEnding(state);
  }

  return null;
}

function evaluateForcedEnding(state: GameState): EndingId {
  const { resources, unlockedSkills } = state;
  const skillCount = unlockedSkills.length;

  let bestEnding: EndingId = 'back_to_village';
  let bestScore = 0;

  const candidates: { ending: EndingId; score: number }[] = [
    { ending: 'wealth_freedom', score: resources.money },
    { ending: 'industry_expert', score: resources.reputation + skillCount * 3 },
    { ending: 'acquired', score: (state.flags['met_investor'] ? 50 : 0) + resources.reputation / 2 + resources.money / 2 },
    { ending: 'serial_entrepreneur', score: (state.flags['failed_before'] ? 40 : 0) + resources.money / 3 + resources.health / 3 },
    { ending: 'artist', score: unlockedSkills.filter(s => ['meditation', 'resilience', 'creativity', 'flow_state'].includes(s)).length * 25 + resources.reputation / 2 },
    { ending: 'debt_free', score: (state.flags['paid_off_loan'] ? 60 : 0) + resources.money / 2 },
    { ending: 'back_to_village', score: 15 },
  ];

  for (const c of candidates) {
    if (c.score > bestScore) {
      bestScore = c.score;
      bestEnding = c.ending;
    }
  }

  return bestEnding;
}
