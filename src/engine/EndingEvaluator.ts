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

  // 传奇 — 需要各分支都有涉猎
  const branchCounts = { business: 0, tech: 0, network: 0, spirit: 0, generalist: 0 };
  const branchSet = ['business', 'tech', 'network', 'spirit', 'generalist'];
  // Count skills per branch
  ['cost_control','pricing_strategy','negotiation_master','business_intuition'].forEach(s => { if (unlockedSkills.includes(s as any)) branchCounts.business++; });
  ['rapid_prototype','automation_tool','seo_optimization','tech_barrier'].forEach(s => { if (unlockedSkills.includes(s as any)) branchCounts.tech++; });
  ['social_skill','mentor_help','crisis_pr','industry_network'].forEach(s => { if (unlockedSkills.includes(s as any)) branchCounts.network++; });
  ['meditation','resilience','creativity','flow_state'].forEach(s => { if (unlockedSkills.includes(s as any)) branchCounts.spirit++; });
  ['cross_domain','fast_learning','generalist_bonus','master_key'].forEach(s => { if (unlockedSkills.includes(s as any)) branchCounts.generalist++; });
  const everyBranch = Object.values(branchCounts).every(c => c >= 2);

  if (everyBranch && avgResource >= 70) {
    return 'legend';
  }

  // 财富自由 — 需要商业技能做支撑
  if (resources.money >= 90 && branchCounts.business >= 3) {
    return 'wealth_freedom';
  }
  // 没有足够商业技能也能财富自由，但门槛更高
  if (resources.money >= 95) {
    return 'wealth_freedom';
  }

  // 行业专家 — 需要关系网络
  if (resources.reputation >= 85 && branchCounts.network >= 3) {
    return 'industry_expert';
  }
  if (resources.reputation >= 92 && skillCount >= 8) {
    return 'industry_expert';
  }

  // 被收购 — 需要商业+关系
  if (flags['met_investor'] && resources.reputation >= 55 && resources.money >= 45 && branchCounts.business >= 2 && branchCounts.network >= 2) {
    return 'acquired';
  }
  if (flags['met_investor'] && resources.reputation >= 60 && resources.money >= 50) {
    return 'acquired';
  }

  // 连续创业者 — 需要精神力量支撑
  if (flags['failed_before'] && resources.money >= 30 && resources.health >= 50 && branchCounts.spirit >= 2) {
    return 'serial_entrepreneur';
  }
  if (flags['failed_before'] && resources.money >= 30 && resources.health >= 50) {
    return 'serial_entrepreneur';
  }

  // 转行艺术家 — 需要4个精神技能
  if (spiritSkills >= 4 && resources.reputation >= 45 && resources.money <= 45) {
    return 'artist';
  }
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
