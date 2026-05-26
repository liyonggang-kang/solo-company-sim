// ============================================================
// 社会大事件 — 每 N 回合触发的涟漪事件
// ============================================================
import type { SocialEvent } from '../types';

export const SOCIAL_EVENTS: SocialEvent[] = [
  {
    id: 'social_ai',
    title: 'AI 替代浪潮来袭！',
    narrative: '各大公司宣布全面接入AI工具，你的行业也在受影响名单上。媒体标题耸人听闻："未来五年，50%的岗位将被AI取代"。你的客户开始问"你还有价值吗？"',
    illustration: '🤖',
    choices: [
      {
        id: 'a',
        text: '全面拥抱AI，提升效率',
        hint: '短期效率大幅提升，但需要投入学习成本',
        effects: [
          { type: 'resource', target: 'money', value: 15, operation: 'add' },
          { type: 'resource', target: 'energy', value: -15, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        ],
        outcomeText: '你花了一周学会用AI工具，效率翻了一倍。但你也清楚地意识到——工具越好，替代的门槛越低。',
      },
      {
        id: 'b',
        text: '强调人情味，做AI做不了的事',
        hint: '走差异化路线，守住不可替代的价值',
        effects: [
          { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
          { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        ],
        outcomeText: '你把服务做到了极致——手写感谢信、每月回访、记住每个客户的偏好。AI可以替代效率，但替代不了温暖。',
      },
      {
        id: 'c',
        text: '转型做AI培训咨询',
        hint: '高风险高回报，需要建立新能力',
        effects: [
          { type: 'resource', target: 'money', value: 25, operation: 'add' },
          { type: 'resource', target: 'energy', value: -20, operation: 'add' },
          { type: 'resource', target: 'health', value: -10, operation: 'add' },
          { type: 'flag', target: 'pivoted_to_ai', value: true, operation: 'set' },
        ],
        outcomeText: '你开始教别人怎么用AI。风口上猪都能飞——但风口过去后，你希望自己长出的是翅膀。',
      },
    ],
  },
  {
    id: 'social_winter',
    title: '经济寒冬来了',
    narrative: '新闻上说"创投圈过冬"，你的几个同行已经开始裁员和关门。客户预算在缩减，每一笔花费都变得更加谨慎。空气中弥漫着不安。',
    illustration: '🥶',
    choices: [
      {
        id: 'a',
        text: '砍成本保现金流，熬过去',
        hint: '保守策略，减少风险',
        effects: [
          { type: 'resource', target: 'money', value: 10, operation: 'add' },
          { type: 'resource', target: 'energy', value: -10, operation: 'add' },
          { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
        ],
        outcomeText: '你精打细算过了冬天。虽然少了些面子，但里子还在。冬天过去的人才有资格讲春天。',
      },
      {
        id: 'b',
        text: '逆势投资，抢夺市场',
        hint: '高风险，可能赢得大回报',
        effects: [
          { type: 'resource', target: 'money', value: -20, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
          { type: 'resource', target: 'energy', value: -15, operation: 'add' },
          { type: 'flag', target: 'counter_cycled', value: true, operation: 'set' },
        ],
        outcomeText: '你在别人恐惧时贪婪了一把。现在还不好说是对是错——但至少你没有因为恐惧而选择不动。',
      },
      {
        id: 'c',
        text: '找个稳定兼职，降低依赖',
        hint: '务实路线，分散风险',
        effects: [
          { type: 'resource', target: 'money', value: 5, operation: 'add' },
          { type: 'resource', target: 'health', value: 10, operation: 'add' },
          { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        ],
        outcomeText: '你接了个兼职，收入不多但稳定。一人公司最大的风险就是"只有一个收入来源"。',
      },
    ],
  },
  {
    id: 'social_regulation',
    title: '行业监管风暴',
    narrative: '监管部门突然出台了行业新规，对从业资质、经营方式都有新的要求。你身边的同行都手忙脚乱，有人已经收到了整改通知。',
    illustration: '⚖️',
    choices: [
      {
        id: 'a',
        text: '主动合规，申请资质',
        hint: '成本高但合法，长期稳定',
        effects: [
          { type: 'resource', target: 'money', value: -15, operation: 'add' },
          { type: 'resource', target: 'energy', value: -15, operation: 'add' },
          { type: 'resource', target: 'health', value: 10, operation: 'add' },
        ],
        outcomeText: '你花了两周跑完所有手续。现在你是"持证合规经营者"，可以理直气壮地做生意了。',
      },
      {
        id: 'b',
        text: '观望等待，灵活应对',
        hint: '有可能政策松动',
        effects: [
          { type: 'resource', target: 'energy', value: -5, operation: 'add' },
          { type: 'resource', target: 'health', value: -10, operation: 'add' },
          { type: 'flag', target: 'regulatory_risk', value: true, operation: 'set' },
        ],
        outcomeText: '你选择了观望。但每次看到"执法检查"的新闻，心都会跳一下。',
      },
      {
        id: 'c',
        text: '转型到监管宽松领域',
        hint: '高风险高收益，但可能涉及灰色地带',
        effects: [
          { type: 'resource', target: 'money', value: 20, operation: 'add' },
          { type: 'resource', target: 'reputation', value: -10, operation: 'add' },
          { type: 'resource', target: 'health', value: -10, operation: 'add' },
        ],
        outcomeText: '你找到了一个监管宽松的细分领域。利润不错，但你心里清楚——这是在刀尖上跳舞。',
      },
    ],
  },
  {
    id: 'social_competitor_acquisition',
    title: '竞争对手被收购了',
    narrative: '你的一个主要竞争对手被大厂以很高的估值收购了。消息一出，客户和投资人都开始关注这个赛道。是机会还是威胁？',
    illustration: '💰',
    choices: [
      {
        id: 'a',
        text: '加速扩张，抢占对手留出的市场',
        hint: '需要融资或举债',
        effects: [
          { type: 'resource', target: 'money', value: 15, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
          { type: 'resource', target: 'energy', value: -25, operation: 'add' },
          { type: 'flag', target: 'aggressive_expansion', value: true, operation: 'set' },
        ],
        outcomeText: '你招了两个兼职，开始疯狂抢客户。身体很累但心里很兴奋——这就是风口的感觉。',
      },
      {
        id: 'b',
        text: '差异化做自己，不跟风',
        hint: '稳扎稳打，保持定力',
        effects: [
          { type: 'resource', target: 'health', value: 10, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        ],
        outcomeText: '你没有因为对手被收购就慌了阵脚。做自己最擅长的事，市场会给答案。',
      },
      {
        id: 'c',
        text: '主动寻求被收购',
        hint: '提前套现，但可能失去独立性',
        effects: [
          { type: 'resource', target: 'money', value: 35, operation: 'add' },
          { type: 'resource', target: 'energy', value: -10, operation: 'add' },
          { type: 'flag', target: 'met_investor', value: true, operation: 'set' },
        ],
        outcomeText: '你通过朋友圈放出了"可以考虑收购"的消息。不到一周就有两家来谈。创业的终点是什么？也许就是卖个好价钱。',
      },
    ],
  },
  {
    id: 'social_remote_work',
    title: '远程办公革命',
    narrative: '疫情改变了工作方式，越来越多的公司开始接受远程协作。你的客户遍布全国，不再受地域限制——但竞争也变成了全国性的。',
    illustration: '🏠',
    choices: [
      {
        id: 'a',
        text: '拓展全国市场，线上获客',
        hint: '市场扩大，但竞争也加剧',
        effects: [
          { type: 'resource', target: 'money', value: 15, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
          { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        ],
        outcomeText: '你开始在网上接全国的单子。一个四川的客户说"比本地的做得还好"。',
      },
      {
        id: 'b',
        text: '深耕本地，做地域专家',
        hint: '守住基本盘，靠口碑',
        effects: [
          { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
          { type: 'resource', target: 'health', value: 5, operation: 'add' },
        ],
        outcomeText: '你成了本地圈子里公认的"头牌"。口碑传得远比你想象的要快。',
      },
    ],
  },
  {
    id: 'social_funding',
    title: '资本寒冬与暖春',
    narrative: '创投圈风向变了——热钱退潮后，真正有盈利能力的一人公司反而受到追捧。一个投资人主动约你喝咖啡："你的模式很有意思"。',
    illustration: '☕',
    choices: [
      {
        id: 'a',
        text: '接受投资，准备规模化',
        hint: '资本助推增长，但稀释独立性',
        effects: [
          { type: 'resource', target: 'money', value: 30, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
          { type: 'resource', target: 'energy', value: -15, operation: 'add' },
          { type: 'flag', target: 'met_investor', value: true, operation: 'set' },
        ],
        outcomeText: '你拿了天使轮。钱到账的那一刻，你既兴奋又紧张——从现在开始，你不只对自己负责了。',
      },
      {
        id: 'b',
        text: '婉拒，一人公司不需要投资人',
        hint: '保持独立，但增长靠自己',
        effects: [
          { type: 'resource', target: 'health', value: 15, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        ],
        outcomeText: '你说"谢谢，但我想保持独立"。投资人有些意外："有意思，第一个拒绝我的一人公司。"',
      },
      {
        id: 'c',
        text: '不拿投资但要讨论一下怎么合作',
        hint: '保持关系，未来可用',
        effects: [
          { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
          { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        ],
        outcomeText: '你聊了两个小时，虽然没拿钱，但收获了不少有价值的行业洞见。门留着了。',
      },
    ],
  },
  {
    id: 'social_mental_health',
    title: '职场心理健康议题爆发',
    narrative: '社交媒体上关于"996"、"加班文化"、"职场PUA"的讨论突然爆发。你身边越来越多的朋友开始反思——拼命工作到底是为了什么？',
    illustration: '🧠',
    choices: [
      {
        id: 'a',
        text: '给自己设定严格的工作边界',
        hint: '保护身心，但可能错过机会',
        effects: [
          { type: 'resource', target: 'health', value: 25, operation: 'add' },
          { type: 'resource', target: 'energy', value: 15, operation: 'add' },
          { type: 'resource', target: 'money', value: -5, operation: 'add' },
        ],
        outcomeText: '你开始严格执行"晚上8点后不回消息"。客户虽然有些微词，但你睡得比以前好多了。',
      },
      {
        id: 'b',
        text: '趁别人躺平时你努力',
        hint: '反周期努力，可能获得超额回报',
        effects: [
          { type: 'resource', target: 'money', value: 15, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
          { type: 'resource', target: 'health', value: -15, operation: 'add' },
          { type: 'resource', target: 'energy', value: -10, operation: 'add' },
          { type: 'flag', target: 'burnout_count', value: true, operation: 'set' },
        ],
        outcomeText: '别人休息的时候你加速了。短期内收获很大，但代价也在累积。你感觉到了吗？',
      },
    ],
  },
  {
    id: 'social_opportunity',
    title: '风口来了',
    narrative: '你所在的赛道突然被媒体和资本盯上了。一夜之间，这个曾经冷门的行业成了"风口"。你能感觉到空气中都是机会——但也都是泡沫。',
    illustration: '🚀',
    choices: [
      {
        id: 'a',
        text: '全力出击，最大化增长',
        hint: '风口不等人，错过就没了',
        effects: [
          { type: 'resource', target: 'money', value: 25, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
          { type: 'resource', target: 'energy', value: -30, operation: 'add' },
          { type: 'resource', target: 'health', value: -15, operation: 'add' },
        ],
        outcomeText: '你几乎住在了办公桌前。风口来了，你不想后悔。但每次挂掉父母电话时，你都告诉自己"忙完这阵就好了"。',
      },
      {
        id: 'b',
        text: '保持节奏，不被风口裹挟',
        hint: '风口总会过去，做好自己最重要',
        effects: [
          { type: 'resource', target: 'health', value: 10, operation: 'add' },
          { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        ],
        outcomeText: '你没有跟着风口狂奔。风来了又走，但你一直稳稳地站在地上。这是另一种成功。',
      },
    ],
  },
  // ======== 补充社会事件 +4个 ========
  {
    id: 'social_midlife',
    title: '我到底在干嘛？',
    narrative: '某天早上你突然醒了，躺在床上盯着天花板，一个念头涌上来：我拼命干了这么久，到底为了什么？自由？钱？还是证明给谁看？如果明天世界末日，我现在做的事有意义吗？',
    illustration: '🤔',
    choices: [
      { id: 'a', text: '给自己放个假，认真想', hint: '暂停是为了走得更远', effects: [
        { type: 'resource', target: 'health', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '你拿出半天坐在河边发呆。结论是：你确实喜欢现在做的事，只是太累了。调整一下节奏就好。' },
      { id: 'b', text: '把答案留给时间，先干活', hint: '有时候想太多不如行动', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' }, { type: 'flag', target: 'existential_crisis', value: true, operation: 'set' },
      ], outcomeText: '你继续工作。但那个问题没有消失——它只是被塞进了心底的某个抽屉里。' },
      { id: 'c', text: '和朋友聊聊这种感觉', hint: '说出来会好很多', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你约了朋友喝酒。他说"我也常常这么想，但你猜怎么着——大家都没答案，都在假装知道。"' },
    ],
  },
  {
    id: 'social_platform_ban',
    title: '平台封号危机',
    narrative: '你所在的主要平台突然变更了规则，一大批账号被封禁。虽然你的账号暂时安全，但行业里已经风声鹤唳。你意识到——把全部生意依赖一个平台是多么危险。',
    illustration: '🚫',
    choices: [
      { id: 'a', text: '立刻建立多平台矩阵', hint: '分散风险，但精力投入大', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你开了三个新平台的账号开始同步内容。虽然累但安全感提升了很多。' },
      { id: 'b', text: '深耕老客户关系，减少平台依赖', hint: '私域流量更稳定', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你建了微信群和邮件列表。老客户说"早就该有自己的渠道了"。' },
      { id: 'c', text: '观望，平台应该不会封到我头上', hint: '侥幸心理，但有风险', effects: [
        { type: 'resource', target: 'health', value: -10, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你赌对了——这波没封到你。但你知道下一次可能就没这么幸运了。' },
    ],
  },
  {
    id: 'social_health_scare',
    title: '体检报告亮红灯',
    narrative: '你终于有空去做了一次体检。报告上好几个指标异常——脂肪肝、颈椎问题、窦性心律不齐。医生说"注意休息，别熬夜了"。你想起上周为了赶项目连熬了三个通宵。',
    illustration: '🏥',
    choices: [
      { id: 'a', text: '严格执行规律作息', hint: '健康是1，其他都是0', effects: [
        { type: 'resource', target: 'health', value: 30, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你开始每天11点前睡觉，早上跑步，饮食也注意了。一个月后精神好了很多。客户说"你看起来不一样了"。' },
      { id: 'b', text: '注意一点但工作更重要', hint: '短期的妥协，长期的代价', effects: [
        { type: 'resource', target: 'health', value: -15, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'flag', target: 'health_warning', value: true, operation: 'set' },
      ], outcomeText: '你把体检报告塞进抽屉。又一个通宵，又一次说"忙完这阵就去健身"。但你自己都不信了。' },
    ],
  },
  {
    id: 'social_community',
    title: '一人公司的互助联盟',
    narrative: '一个"一人公司互助联盟"的社群在圈内火了——大家在里面分享客户、交换资源、一起吐槽。有人邀请你加入。这不是投资人圈子，也不是行业协会，就是一群和你一样的人在互相取暖。',
    illustration: '🤗',
    choices: [
      { id: 'a', text: '积极参与，成为核心成员', hint: '一人公司也可以不孤单', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你在社群里认识了几个真正的朋友。有人说"终于不用一个人在黑暗中摸索了"。' },
      { id: 'b', text: '潜水看看，不深入参与', hint: '保持距离但也留着门', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你偶尔看一眼群聊。虽然没说话但知道"有人在走同样的路"本身就让你安心了不少。' },
      { id: 'c', text: '拉几个关系好的自己建个小组', hint: '小而美的深度关系', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你拉了三个人建了个小型互助群。你们每个月见一次面，像个小董事会——只是不需要西装和PPT。' },
    ],
  },
];
