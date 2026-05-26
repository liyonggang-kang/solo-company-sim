// ============================================================
// 技能树 — 技能节点定义和逻辑
// ============================================================
import type { SkillNode, SkillId } from './types';

export const SKILL_TREE: SkillNode[] = [
  // ---- 商业思维 ----
  {
    id: 'cost_control',
    branch: 'business',
    name: '成本控制',
    description: '精打细算，每笔支出都货比三家',
    cost: 1,
    prerequisites: [],
    effects: [{ type: 'discount', target: 'money', value: 0.15 }],
    tier: 1,
  },
  {
    id: 'pricing_strategy',
    branch: 'business',
    name: '定价策略',
    description: '懂的定价的艺术，利润最大化',
    cost: 2,
    prerequisites: ['cost_control'],
    effects: [{ type: 'resource_bonus', target: 'money', value: 3 }],
    tier: 2,
  },
  {
    id: 'negotiation_master',
    branch: 'business',
    name: '谈判大师',
    description: '让对方先开口，你永远不先亮底牌',
    cost: 2,
    prerequisites: ['cost_control'],
    effects: [{ type: 'role_bonus', target: 'sales', value: 5 }],
    tier: 2,
  },
  {
    id: 'business_intuition',
    branch: 'business',
    name: '商业直觉',
    description: '不需要数据也能感知风向',
    cost: 3,
    prerequisites: ['pricing_strategy', 'negotiation_master'],
    effects: [{ type: 'resource_bonus', target: 'reputation', value: 3 }],
    tier: 3,
  },

  // ---- 技术极客 ----
  {
    id: 'rapid_prototype',
    branch: 'tech',
    name: '快速原型',
    description: '一个周末就能搭出 MVP',
    cost: 1,
    prerequisites: [],
    effects: [{ type: 'role_bonus', target: 'employee', value: 5 }],
    tier: 1,
  },
  {
    id: 'automation_tool',
    branch: 'tech',
    name: '自动化工具',
    description: '能自动化的绝不手动，效率翻倍',
    cost: 2,
    prerequisites: ['rapid_prototype'],
    effects: [{ type: 'resource_bonus', target: 'energy', value: 3 }],
    tier: 2,
  },
  {
    id: 'seo_optimization',
    branch: 'tech',
    name: '搜索优化',
    description: '让客户找到你，而不是你找客户',
    cost: 2,
    prerequisites: ['rapid_prototype'],
    effects: [{ type: 'resource_bonus', target: 'reputation', value: 2 }],
    tier: 2,
  },
  {
    id: 'tech_barrier',
    branch: 'tech',
    name: '技术壁垒',
    description: '你的代码只有你能维护，这反而是优势',
    cost: 3,
    prerequisites: ['automation_tool', 'seo_optimization'],
    effects: [{ type: 'resource_bonus', target: 'money', value: 3 }],
    tier: 3,
  },

  // ---- 关系网络 ----
  {
    id: 'social_skill',
    branch: 'network',
    name: '社交能力',
    description: '在饭局上能聊三小时不冷场',
    cost: 1,
    prerequisites: [],
    effects: [{ type: 'role_bonus', target: 'sales', value: 3 }],
    tier: 1,
  },
  {
    id: 'mentor_help',
    branch: 'network',
    name: '贵人相助',
    description: '总有前辈愿意指点迷津',
    cost: 2,
    prerequisites: ['social_skill'],
    effects: [{ type: 'resource_bonus', target: 'reputation', value: 3 }],
    tier: 2,
  },
  {
    id: 'crisis_pr',
    branch: 'network',
    name: '危机公关',
    description: '把坏事变成好事的能力',
    cost: 2,
    prerequisites: ['social_skill'],
    effects: [{ type: 'discount', target: 'reputation', value: 0.3 }],
    tier: 2,
  },
  {
    id: 'industry_network',
    branch: 'network',
    name: '行业人脉',
    description: '没有你联系不到的人',
    cost: 3,
    prerequisites: ['mentor_help', 'crisis_pr'],
    effects: [{ type: 'resource_bonus', target: 'money', value: 2 }, { type: 'resource_bonus', target: 'reputation', value: 2 }],
    tier: 3,
  },

  // ---- 精神力量 ----
  {
    id: 'meditation',
    branch: 'spirit',
    name: '正念冥想',
    description: '再大的压力也只是过眼云烟',
    cost: 1,
    prerequisites: [],
    effects: [{ type: 'resource_bonus', target: 'health', value: 3 }],
    tier: 1,
  },
  {
    id: 'resilience',
    branch: 'spirit',
    name: '坚韧不拔',
    description: '失败不可怕，躺平才可怕',
    cost: 2,
    prerequisites: ['meditation'],
    effects: [{ type: 'resource_bonus', target: 'health', value: 3 }, { type: 'resource_bonus', target: 'energy', value: 2 }],
    tier: 2,
  },
  {
    id: 'creativity',
    branch: 'spirit',
    name: '创造力',
    description: '总能看到别人看不到的角度',
    cost: 2,
    prerequisites: ['meditation'],
    effects: [{ type: 'resource_bonus', target: 'energy', value: 3 }],
    tier: 2,
  },
  {
    id: 'flow_state',
    branch: 'spirit',
    name: '心流状态',
    description: '全神贯注，时间仿佛静止',
    cost: 3,
    prerequisites: ['resilience', 'creativity'],
    effects: [{ type: 'role_bonus', target: 'ceo', value: 5 }, { type: 'role_bonus', target: 'employee', value: 5 }],
    tier: 3,
  },

  // ---- 全能通才 ----
  {
    id: 'cross_domain',
    branch: 'generalist',
    name: '跨界思维',
    description: '不同领域的知识在你脑中碰撞',
    cost: 1,
    prerequisites: [],
    effects: [{ type: 'resource_bonus', target: 'energy', value: 2 }],
    tier: 1,
  },
  {
    id: 'fast_learning',
    branch: 'generalist',
    name: '快速学习',
    description: '给你一天就能入行',
    cost: 2,
    prerequisites: ['cross_domain'],
    effects: [{ type: 'resource_bonus', target: 'energy', value: 3 }],
    tier: 2,
  },
  {
    id: 'generalist_bonus',
    branch: 'generalist',
    name: '通才加成',
    description: '会的越多，会的越快',
    cost: 3,
    prerequisites: ['fast_learning'],
    effects: [{ type: 'resource_bonus', target: 'money', value: 2 }, { type: 'resource_bonus', target: 'reputation', value: 2 }],
    tier: 3,
  },
  {
    id: 'master_key',
    branch: 'generalist',
    name: '万能钥匙',
    description: '没有什么问题是解决不了的',
    cost: 3,
    prerequisites: ['fast_learning'],
    effects: [{ type: 'role_bonus', target: 'ceo', value: 3 }, { type: 'role_bonus', target: 'employee', value: 3 }, { type: 'role_bonus', target: 'sales', value: 3 }],
    tier: 3,
  },
];

export function canUnlockSkill(
  skillId: SkillId,
  unlockedSkills: SkillId[],
  skillPoints: number
): boolean {
  const node = SKILL_TREE.find((s) => s.id === skillId);
  if (!node) return false;
  if (unlockedSkills.includes(skillId)) return false;
  if (skillPoints < node.cost) return false;
  return node.prerequisites.every((pre) => unlockedSkills.includes(pre));
}

export function getSkillNodeById(id: SkillId): SkillNode | undefined {
  return SKILL_TREE.find((s) => s.id === id);
}

export function getAvailableSkills(
  unlockedSkills: SkillId[],
  skillPoints: number
): SkillNode[] {
  return SKILL_TREE.filter(
    (node) => canUnlockSkill(node.id, unlockedSkills, skillPoints)
  );
}

export function getPassivesFromSkills(unlockedSkills: SkillId[]) {
  const passives = [];
  for (const id of unlockedSkills) {
    const node = SKILL_TREE.find((s) => s.id === id);
    if (node) {
      passives.push(...node.effects);
    }
  }
  return passives;
}
