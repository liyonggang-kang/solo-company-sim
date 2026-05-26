// ============================================================
// 一人公司 (Solo Company Sim) — 核心类型定义
// ============================================================

// --- 行业标识 ---
export type IndustryId =
  | 'short_video'       // 短视频创作
  | 'food_delivery'     // 外卖代运营
  | 'self_media'        // 自媒体写作
  | 'indie_dev'         // 独立开发者
  | 'coffee_shop'       // 咖啡小店
  | 'design_freelance'  // 设计接单
  | 'knowledge_pay'     // 知识付费
  | 'online_course'     // 网课录制
  | 'daigou'            // 代购
  | 'pet_care';         // 宠物寄养

// --- 结局标识 ---
export type EndingId =
  | 'early_death'          // 早夭
  | 'legend'               // 传奇
  | 'wealth_freedom'       // 财富自由
  | 'industry_expert'      // 行业专家
  | 'acquired'             // 被收购
  | 'serial_entrepreneur'  // 连续创业者
  | 'artist'               // 转行艺术家
  | 'back_to_village'      // 回村躺平
  | 'money_crisis'         // 资金链断裂
  | 'health_crisis'        // 身体垮了
  | 'energy_crisis'        // 精力耗尽
  | 'reputation_crisis'    // 名声扫地
  | 'total_collapse'       // 全面崩盘
  | 'money_health_zero'    // 又穷又病
  | 'loan_crisis'          // 银行追债
  | 'debt_free';           // 无债一身轻

// --- 技能分支 ---
export type SkillBranch = 'business' | 'tech' | 'network' | 'spirit' | 'generalist';

// --- 技能标识 ---
export type SkillId =
  // 商业思维
  | 'cost_control' | 'pricing_strategy' | 'negotiation_master' | 'business_intuition'
  // 技术极客
  | 'rapid_prototype' | 'automation_tool' | 'seo_optimization' | 'tech_barrier'
  // 关系网络
  | 'social_skill' | 'mentor_help' | 'crisis_pr' | 'industry_network'
  // 精神力量
  | 'meditation' | 'resilience' | 'creativity' | 'flow_state'
  // 全能通才
  | 'cross_domain' | 'fast_learning' | 'generalist_bonus' | 'master_key';

// --- 角色类型 ---
export type RoleType = 'ceo' | 'employee' | 'sales';

// --- 游戏阶段 ---
export type GamePhase = 'title' | 'industry_select' | 'playing' | 'ending';

// --- 事件分类 ---
export type EventCategory = 'narrative' | 'opportunity' | 'crisis' | 'neutral';

// --- 资源快照 ---
export interface ResourceSnapshot {
  money: number;
  energy: number;
  reputation: number;
  health: number;
}

export interface RoleSnapshot {
  ceo: number;
  employee: number;
  sales: number;
}

// --- 行业定义 ---
export interface IndustryDef {
  id: IndustryId;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  startingResources: ResourceSnapshot;
  startingRoles: RoleSnapshot;
  difficulty: 1 | 2 | 3;
  eventPool: string[];
  tags: string[];
}

// --- 事件选择 ---
export interface EventChoice {
  id: string;
  text: string;
  hint?: string;
  requirements?: {
    minMoney?: number;
    minEnergy?: number;
    minReputation?: number;
    minHealth?: number;
    minRole?: { role: RoleType; value: number };
    requiredSkill?: SkillId;
    requiredFlag?: string;
    blockedFlag?: string;
  };
  effects: Effect[];
  outcomeText: string;
}

// --- 效果定义 ---
export interface Effect {
  type: 'resource' | 'role' | 'flag' | 'skill_unlock' | 'skill_point' | 'trigger_social';
  target: string;
  value: number | string | boolean;
  operation: 'add' | 'set' | 'multiply' | 'toggle';
}

// --- 常规事件 ---
export interface GameEvent {
  id: string;
  category: EventCategory;
  industries: IndustryId[] | 'all';
  minTurn?: number;
  maxTurn?: number;
  prerequisite?: {
    requiredFlag?: string;
    blockedFlag?: string;
    minMoney?: number;
    maxMoney?: number;
  };
  title: string;
  narrative: string;
  npcId?: string;
  choices: EventChoice[];
  repeatable: boolean;
  weight: number;
}

// --- 社会大事件 ---
export interface SocialEvent {
  id: string;
  title: string;
  narrative: string;
  illustration: string;
  choices: EventChoice[];
  minReputation?: number;
  maxReputation?: number;
  requiredFlag?: string;
  triggerTurn?: number;
}

// --- 结局定义 ---
export interface EndingDef {
  id: EndingId;
  name: string;
  subtitle: string;
  narrative: string;
  conditions: EndingCondition[];
  rarity: 'common' | 'rare' | 'hidden';
  statHighlights: string[];
  quote: string;
}

export interface EndingCondition {
  type: 'resource_threshold' | 'flag' | 'skill_count' | 'turn_range' | 'composite';
  params: Record<string, number | string | boolean>;
}

// --- 技能节点 ---
export interface SkillNode {
  id: SkillId;
  branch: SkillBranch;
  name: string;
  description: string;
  cost: number;
  prerequisites: SkillId[];
  effects: PassiveEffect[];
  tier: 1 | 2 | 3;
}

export interface PassiveEffect {
  type: 'resource_bonus' | 'role_bonus' | 'event_weight_mod' | 'discount' | 'extra_choice';
  target: string;
  value: number;
}

// --- NPC 定义 ---
export interface NPCDef {
  id: string;
  name: string;
  role: string;
  description: string;
  personality: string;
  icon: string;
}

// --- 新闻条目 ---
export interface NewsItem {
  id: string;
  headline: string;
  category: string;
  industryHint?: IndustryId;
  minTurn?: number;
}

// --- 游戏完整状态 ---
export interface GameState {
  phase: GamePhase;
  turn: number;
  industryId: IndustryId | null;
  startedAt: number;

  resources: ResourceSnapshot;
  roles: RoleSnapshot;

  flags: Record<string, boolean | number>;
  completedEvents: string[];
  unlockedSkills: SkillId[];
  skillPoints: number;
  endingTriggered: EndingId | null;

  // 贷款系统
  loan: number;           // 当前贷款余额
  loanInterest: number;   // 累计利息
  missedPayments: number; // 逾期次数

  currentEvent: GameEvent | null;
  pendingSocialEvent: SocialEvent | null;

  socialEventTimer: number;
  lastDelta: ResourceSnapshot | null;
  eventHistory: EventLogEntry[];
}

// --- 事件日志 ---
export interface EventLogEntry {
  turn: number;
  eventTitle: string;
  choiceText: string;
  outcomeText: string;
}

// --- 存档 ---
export interface SaveSlot {
  id: number;
  label: string;
  timestamp: number;
  industryName: string;
  turn: number;
  state: GameState;
}
