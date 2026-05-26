// ============================================================
// 常规事件 — ~60 个行业专属 + 20 个通用事件
// ============================================================
import type { GameEvent } from '../types';

export const EVENTS: GameEvent[] = [
  // ======== 短视频创作 (short_video) ========
  {
    id: 'sv_001', category: 'opportunity', industries: ['short_video', 'self_media'], weight: 8,
    title: '意外爆款',
    narrative: '你随手拍的一条"凌晨四点的办公室"突然火了，一夜之间涨了5万粉丝。品牌方开始私信你求合作...',
    choices: [
      { id: 'a', text: '趁热打铁，接广告变现', effects: [
        { type: 'resource', target: 'money', value: 25, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '广告费到账，但连拍三条视频你累得够呛。' },
      { id: 'b', text: '先沉淀内容，稳住粉丝', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你选择稳扎稳打，粉丝对你的真诚印象深刻。' },
      { id: 'c', text: '签约MCN机构', effects: [
        { type: 'resource', target: 'money', value: 35, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -10, operation: 'add' },
        { type: 'flag', target: 'met_mcn', value: true, operation: 'set' },
      ], outcomeText: '签约费到手，但合同里的小字让你隐隐不安。' },
    ], repeatable: false,
  },
  {
    id: 'sv_002', category: 'crisis', industries: ['short_video', 'self_media'], weight: 7,
    title: '算法突变',
    narrative: '平台突然改了推荐算法，你的视频播放量腰斩。以前一条视频轻松10万播放，现在连1万都费劲。',
    choices: [
      { id: 'a', text: '研究新算法，调整内容方向', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '熬了几个通宵研究算法，终于找到新的流量密码。' },
      { id: 'b', text: '多平台分发，降低风险', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你开了三个平台的账号，虽然累但风险确实分散了。' },
    ], repeatable: false,
  },
  {
    id: 'sv_003', category: 'neutral', industries: ['short_video', 'self_media'], weight: 6,
    title: '黑粉来袭',
    narrative: '一条视频被人恶意剪辑传播，评论区炸了，私信全是骂你的。你的粉丝开始取关。',
    choices: [
      { id: 'a', text: '发视频澄清事实', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '诚恳的澄清视频反而吸了一波新粉，危机变成转机。' },
      { id: 'b', text: '冷处理，过几天就没人记得了', effects: [
        { type: 'resource', target: 'reputation', value: -15, operation: 'add' },
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '虽然热度确实过去了，但"不回应"被当成默认，伤害已经造成。' },
    ], repeatable: false,
  },
  {
    id: 'sv_004', category: 'opportunity', industries: ['short_video', 'self_media'], weight: 7,
    title: '品牌合作邀请',
    narrative: '一个大品牌找你做定制广告，报价是你平时接单的三倍。但产品你用了一下，感觉质量一般。',
    choices: [
      { id: 'a', text: '接下广告，诚信暗示即可', effects: [
        { type: 'resource', target: 'money', value: 30, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -10, operation: 'add' },
      ], outcomeText: '钱是好赚，但评论区有人质疑"你也开始恰烂钱了"。' },
      { id: 'b', text: '婉拒，坚持只推靠谱产品', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '品牌方惊讶但尊重。你的粉丝知道了这事，反而更信任你了。' },
    ], repeatable: false,
  },
  {
    id: 'sv_005', category: 'crisis', industries: ['short_video', 'self_media'], weight: 5,
    title: '同行挖角',
    narrative: '一个MCN机构想挖你签约，承诺每月保底收入+流量扶持。条件是你账号的内容方向由他们决定。',
    choices: [
      { id: 'a', text: '签约，放弃内容自主权', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
        { type: 'flag', target: 'lost_creative_freedom', value: true, operation: 'set' },
      ], outcomeText: '收入稳定了，但你每天拍着自己不喜欢的选题，开始怀疑当初为什么入行。' },
      { id: 'b', text: '拒绝，做自己', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你坚持独立创作。虽然更累，但每条视频都是你想做的内容。' },
    ], repeatable: false,
  },
  {
    id: 'sv_006', category: 'narrative', industries: ['short_video', 'self_media'], weight: 6,
    title: '粉丝见面会',
    narrative: '你的粉丝群要求线下聚会，大概有30人报名。有人建议你收费，有人建议免费做口碑。',
    choices: [
      { id: 'a', text: '收费办活动，认真组织', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
      ], outcomeText: '见面会很成功，一位粉丝说"你的视频陪我度过了最难的时候"。' },
      { id: 'b', text: '免费聚会，不搞复杂', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '简单吃了顿饭，真实又温暖。有人发朋友圈说"关注你是今年最正确的决定"。' },
    ], repeatable: false,
  },

  // ======== 外卖代运营 (food_delivery) ========
  {
    id: 'fd_001', category: 'crisis', industries: ['food_delivery', 'daigou'], weight: 8,
    title: '食品安全投诉',
    narrative: '你代运营的一家店被顾客投诉吃出了异物，美团要下架店铺。店主打电话求你"搞定"。',
    choices: [
      { id: 'a', text: '帮店主处理公关，赔钱了事', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '花了一笔钱摆平了，但你开始认真审视合作的每家店。' },
      { id: 'b', text: '放弃合作，明哲保身', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你终止了合作，虽然少了一个客户，但睡得踏实了。' },
    ], repeatable: false,
  },
  {
    id: 'fd_002', category: 'opportunity', industries: ['food_delivery', 'daigou'], weight: 7,
    title: '连锁品牌找上门',
    narrative: '一个中等规模的连锁餐饮品牌想让你独家代理他们的外卖业务，每月固定服务费+提成。',
    choices: [
      { id: 'a', text: '签独家，全力投入', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '大客户到手，有了稳定收入。但你把鸡蛋放在了一个篮子里。' },
      { id: 'b', text: '保持灵活，多家合作', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你选择了分散风险的路线，虽然累但更安全。' },
    ], repeatable: false,
  },
  {
    id: 'fd_003', category: 'narrative', industries: ['food_delivery', 'daigou'], weight: 6,
    title: '骑手罢工',
    narrative: '外卖平台的骑手因为降薪集体罢工了，你的店铺全部无法配送。订单不停进来，但没人送。',
    choices: [
      { id: 'a', text: '自己开车送', effects: [
        { type: 'resource', target: 'energy', value: -30, operation: 'add' },
        { type: 'resource', target: 'health', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你开着五菱宏光送了一整天外卖。顾客收到餐时看到你满头大汗，给了五星好评。' },
      { id: 'b', text: '暂时停业，等风波过去', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '停业三天，损失了一些收入但保留了体力。骑手罢工结束后一切恢复。' },
    ], repeatable: false,
  },
  {
    id: 'fd_004', category: 'opportunity', industries: ['food_delivery', 'daigou'], weight: 6,
    title: '平台补贴大战',
    narrative: '美团和饿了么又开始补贴大战了。你代运营的店铺订单量暴涨，但每单利润薄了一半。',
    choices: [
      { id: 'a', text: '薄利多销，趁流量囤客户', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '虽然累但积累了大量回头客，等补贴结束这批客户就是你的资产。' },
      { id: 'b', text: '适当提价保利润', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '利润保住了，但也有一些价格敏感的顾客流失了。' },
    ], repeatable: false,
  },
  {
    id: 'fd_005', category: 'crisis', industries: ['food_delivery', 'daigou'], weight: 5,
    title: '店铺被抄袭',
    narrative: '有人抄了你运营最成功的那家店的菜单和装修风格，外卖平台上就在你家隔壁。',
    choices: [
      { id: 'a', text: '打价格战干翻对方', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '烧钱打了两个月价格战，对方终于扛不住了。但你的利润也所剩无几。' },
      { id: 'b', text: '差异化运营，做对方没有的', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你推出了独家套餐和服务，靠品质差异化了。客户说"贵的值"。' },
    ], repeatable: false,
  },
  {
    id: 'fd_006', category: 'neutral', industries: ['food_delivery', 'daigou'], weight: 6,
    title: '新政策出台',
    narrative: '政府出台了外卖平台新规，要求所有代运营商必须取得资质备案。你还没有。',
    choices: [
      { id: 'a', text: '马上申请备案，合规经营', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '花了一周跑材料办好了。虽然麻烦，但现在你是"持证上岗"了。' },
      { id: 'b', text: '观望一阵再说', effects: [
        { type: 'resource', target: 'health', value: -10, operation: 'add' },
        { type: 'flag', target: 'regulatory_risk', value: true, operation: 'set' },
      ], outcomeText: '你选择了观望，但每次看到"专项整治"的新闻都会紧张一下。' },
    ], repeatable: false,
  },

  // ======== 自媒体写作 (self_media) ========
  {
    id: 'sm_001', category: 'opportunity', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 8,
    title: '十万加爆文',
    narrative: '你写的一篇深度分析文章意外成了10w+爆款，编辑约稿、广告主蜂拥而至。',
    choices: [
      { id: 'a', text: '趁热接广告，最大化变现', effects: [
        { type: 'resource', target: 'money', value: 25, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '短期内赚了一笔，但文章质量明显下滑，有读者留言"你也变了"。' },
      { id: 'b', text: '保持节奏，用内容说话', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
      ], outcomeText: '你保持了一贯的水准，粉丝说"只有你的文章我每篇都看"。' },
    ], repeatable: false,
  },
  {
    id: 'sm_002', category: 'crisis', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 7,
    title: '被洗稿了',
    narrative: '你发现一个大号"洗"了你三篇文章，改了改措辞就发在自己的号上，阅读量比你的原创还高。',
    choices: [
      { id: 'a', text: '公开维权，让读者评理', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你整理了抄袭证据发在网上，引起圈内热议。对方被迫道歉。' },
      { id: 'b', text: '算了，继续写新内容', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '你选择把精力放在创作上。虽然不公平，但你的时间更值钱。' },
    ], repeatable: false,
  },
  {
    id: 'sm_003', category: 'neutral', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 6,
    title: '平台关闭',
    narrative: '你主要经营的平台突然宣布关闭创作者激励计划，你的收入来源一下少了一大块。',
    choices: [
      { id: 'a', text: '迁移到新平台重新开始', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
      ], outcomeText: '重新开始总是难的，但你的老读者跟过来了，基础的信任还在。' },
      { id: 'b', text: '转型做付费订阅', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'flag', target: 'started_subscription', value: true, operation: 'set' },
      ], outcomeText: '你开启了付费订阅模式。人数不多，但收入比广告分成稳定。' },
    ], repeatable: false,
  },
  {
    id: 'sm_004', category: 'opportunity', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 6,
    title: '出版社邀约',
    narrative: '一家出版社编辑联系你，想把你过去的文章结集出书。版税8%，首印5000册。',
    choices: [
      { id: 'a', text: '答应出书，投入时间整理', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' },
        { type: 'resource', target: 'energy', value: -30, operation: 'add' },
        { type: 'flag', target: 'published_book', value: true, operation: 'set' },
      ], outcomeText: '花了三个月整理书稿。拿到样书的那一刻，你觉得一切都值了。' },
      { id: 'b', text: '婉拒，时机未到', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你觉得自己的积累还不够，决定再沉淀一段时间。' },
    ], repeatable: false,
  },
  {
    id: 'sm_005', category: 'crisis', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 5,
    title: '敏感话题',
    narrative: '你写了一篇讨论职场现状的文章，意外触及了某个敏感点。平台发了警告，建议你删除。',
    choices: [
      { id: 'a', text: '删除文章，以后注意', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -10, operation: 'add' },
      ], outcomeText: '文章删了，但你心里有些遗憾。有些话，说出来的代价太大了。' },
      { id: 'b', text: '修改措辞后重发', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你用更委婉的方式表达了同样的意思。读者看懂了你藏在文字里的东西。' },
    ], repeatable: false,
  },
  {
    id: 'sm_006', category: 'narrative', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 6,
    title: '读者来信',
    narrative: '你收到一封长信，一位读者说你的一篇文章让他在想辞职的那天选择了再坚持一下，现在他升职了。',
    choices: [
      { id: 'a', text: '认真回信，建立连接', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你认真回了一封信。写作的意义，有时候就藏在这一来一回里。' },
      { id: 'b', text: '截图发朋友圈（不暴露隐私）', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你分享了这个故事（隐去了关键信息），朋友圈炸了，很多人说"我也是"。' },
    ], repeatable: false,
  },

  // ======== 独立开发者 (indie_dev) ========
  {
    id: 'id_001', category: 'opportunity', industries: ['indie_dev', 'design_freelance'], weight: 8,
    title: 'Product Hunt 首页',
    narrative: '你的产品被推上了 Product Hunt，开始涌入大量海外用户。但你的服务器扛不住了。',
    choices: [
      { id: 'a', text: '立刻扩容，抓住流量', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
      ], outcomeText: '扩容花了钱但留住了用户。评论区的五星好评让你失眠——这次是激动的。' },
      { id: 'b', text: '限量注册，慢慢来', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你做了排队机制。有人抱怨，但产品体验保证了。' },
    ], repeatable: false,
  },
  {
    id: 'id_002', category: 'crisis', industries: ['indie_dev', 'design_freelance'], weight: 7,
    title: '竞品抄袭',
    narrative: '一个大厂推出了一个几乎和你一模一样的功能，免费提供。你的付费用户开始流失。',
    choices: [
      { id: 'a', text: '做差异化功能，大厂做不了的', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你发现大厂很难做个性化的小功能——这就是你的护城河。用户回来了。' },
      { id: 'b', text: '转向开源，靠社区', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'flag', target: 'went_opensource', value: true, operation: 'set' },
      ], outcomeText: '开源后社区活跃度远超预期。有人打赏，有人贡献代码，比单打独斗强。' },
    ], repeatable: false,
  },
  {
    id: 'id_003', category: 'neutral', industries: ['indie_dev', 'design_freelance'], weight: 6,
    title: '大客户定制需求',
    narrative: '一个企业客户想用你的产品，但需要大量定制功能。报价很高，但会拖累你的产品路线图。',
    choices: [
      { id: 'a', text: '接定制，先赚钱', effects: [
        { type: 'resource', target: 'money', value: 30, operation: 'add' },
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
        { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '够支撑你一年的生活费了。但产品确实被定制需求带偏了方向。' },
      { id: 'b', text: '婉拒，坚持产品路线', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你说"不"的那一刻，感觉自己像个真正的企业家。' },
    ], repeatable: false,
  },
  {
    id: 'id_004', category: 'opportunity', industries: ['indie_dev', 'design_freelance'], weight: 6,
    title: '技术大会演讲邀请',
    narrative: '一个技术大会邀请你做演讲，分享独立开发经验。台下有投资人、同行和潜在用户。',
    choices: [
      { id: 'a', text: '认真准备，全力出击', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'flag', target: 'met_investor', value: true, operation: 'set' },
      ], outcomeText: '演讲结束后有投资人递了名片。你说"我只是想做好一个产品"。' },
      { id: 'b', text: '线上参加，专注开发', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你录了个视频播放。台下有人嘀咕"本人呢？"。' },
    ], repeatable: false,
  },
  {
    id: 'id_005', category: 'crisis', industries: ['indie_dev', 'design_freelance'], weight: 5,
    title: '大版本Bug',
    narrative: '你发布了一个大版本更新，结果引入了一个严重Bug，导致部分用户数据丢失。论坛炸了。',
    choices: [
      { id: 'a', text: '通宵修复+公开道歉+补偿', effects: [
        { type: 'resource', target: 'energy', value: -30, operation: 'add' },
        { type: 'resource', target: 'health', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你修了48小时没合眼。用户被你的诚意打动，有人留言说"开发者也是人"。' },
      { id: 'b', text: '快速修复但低调处理', effects: [
        { type: 'resource', target: 'reputation', value: -15, operation: 'add' },
      ], outcomeText: 'Bug修了但没沟通好。用户觉得"你不在乎"，信任需要更长时间重建。' },
    ], repeatable: false,
  },
  {
    id: 'id_006', category: 'narrative', industries: ['indie_dev', 'design_freelance'], weight: 6,
    title: '第一个付费用户',
    narrative: '你的产品上线第三周，终于等到了第一个付费用户。不是测试的朋友，是一个完全陌生的人。',
    choices: [
      { id: 'a', text: '亲自发邮件感谢，了解需求', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '用户收到来自创始人的邮件，感动坏了。他在Twitter上晒了截图，又带来5个新用户。' },
      { id: 'b', text: '做好产品就是对用户最好的回报', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你默默优化了一个feature。有时候最好的感谢是把产品做得更好。' },
    ], repeatable: false,
  },

  // ======== 咖啡小店 (coffee_shop) ========
  {
    id: 'cs_001', category: 'opportunity', industries: ['coffee_shop', 'pet_care'], weight: 7,
    title: '在小红书上火了',
    narrative: '一位美食博主来你店里拍照发到了小红书，配文"藏在巷子里的宝藏咖啡店"。周末突然排队了。',
    choices: [
      { id: 'a', text: '加人手，全力接待', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
      ], outcomeText: '忙碌了一个月，你的店成了本地热门。但也把你累得够呛。' },
      { id: 'b', text: '保持品质，限量接客', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '"饥饿营销"反而让更多人想来。你的店有了"预约才能喝"的传说。' },
    ], repeatable: false,
  },
  {
    id: 'cs_002', category: 'crisis', industries: ['coffee_shop', 'pet_care'], weight: 6,
    title: '房东要涨租',
    narrative: '年底了，房东说"这一带人气起来了，房租要涨30%"。你算了一笔账，利润基本被吃掉了。',
    choices: [
      { id: 'a', text: '接受涨价，想办法开源', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你开始卖咖啡豆和周边。虽然辛苦但勉强撑住了。' },
      { id: 'b', text: '搬去更偏的地方', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '新店更小但租金便宜。老顾客说"虽然远了但还是会来"。' },
    ], repeatable: false,
  },
  {
    id: 'cs_003', category: 'neutral', industries: ['coffee_shop', 'pet_care'], weight: 6,
    title: '隔壁开了星巴克',
    narrative: '星巴克在你隔壁200米开了一家店。你的客流量立刻减少。熟客说"还是会来"，但确实少了。',
    choices: [
      { id: 'a', text: '主打手冲和差异化', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你把星巴克不做的精品手冲做到极致，吸引了真正的咖啡爱好者。' },
      { id: 'b', text: '降价促销，保住客流', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '价格战打不过星巴克。你意识到和巨无霸拼价格是死路一条。' },
    ], repeatable: false,
  },
  {
    id: 'cs_004', category: 'narrative', industries: ['coffee_shop', 'pet_care'], weight: 6,
    title: '熟客的故事',
    narrative: '一位每天都来的熟客突然一周没出现。后来他朋友来说，他回老家了，临走前说"帮我跟老板说声谢谢"。',
    choices: [
      { id: 'a', text: '给他发个微信问候', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '他说"你的咖啡是我在这座城市最温暖的记忆"。你对着手机屏幕发了一会儿呆。' },
      { id: 'b', text: '在店里给他留个"专属座位"', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你在角落留了个"老王的位子"。其他顾客知道故事后，更爱这家店了。' },
    ], repeatable: false,
  },
  {
    id: 'cs_005', category: 'crisis', industries: ['coffee_shop', 'pet_care'], weight: 5,
    title: '咖啡豆涨价',
    narrative: '国际贸易摩擦导致咖啡豆进口价暴涨了40%。你的原料成本直接翻倍。',
    choices: [
      { id: 'a', text: '涨价但送点心', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你涨了2块钱但附赠一块手工饼干。顾客表示理解。' },
      { id: 'b', text: '换便宜豆子', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -15, operation: 'add' },
      ], outcomeText: '换了豆子后，有熟客问"今天的咖啡味道不太一样？"你心里一紧。' },
    ], repeatable: false,
  },
  {
    id: 'cs_006', category: 'opportunity', industries: ['coffee_shop', 'pet_care'], weight: 6,
    title: '办个咖啡课程',
    narrative: '有顾客问你能不能教他们手冲。你突然想到：为什么不办个咖啡体验课？',
    choices: [
      { id: 'a', text: '开课，周末半天制', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '课程很火，报名要排到下个月。有人从隔壁城市专程来上你的课。' },
      { id: 'b', text: '随缘教，不收费', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你免费教了几个顾客。他们成了你最忠实的朋友，带来了更多新客人。' },
    ], repeatable: false,
  },

  // ======== 设计接单 (design_freelance) ========
  {
    id: 'df_001', category: 'crisis', industries: ['design_freelance', 'indie_dev'], weight: 8,
    title: '甲方无限改稿',
    narrative: '客户已经让你改了7稿了，最新要求是"回到第一版但加点不一样的感觉"。尾款还没付。',
    choices: [
      { id: 'a', text: '忍了，改完拿尾款', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '尾款终于到账了。但你发誓下次合同里一定要写清楚修改次数。' },
      { id: 'b', text: '拒改，按合同办事', effects: [
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你说"按合同第三条第2款，免费修改上限是3次"。对方愣了一下，乖乖结了尾款。' },
    ], repeatable: false,
  },
  {
    id: 'df_002', category: 'opportunity', industries: ['design_freelance', 'indie_dev'], weight: 7,
    title: '大案子来了',
    narrative: '一个知名品牌通过朋友介绍找到了你，预算充足而且风格你喜欢。但需要你全心投入三个月。',
    choices: [
      { id: 'a', text: '接下，暂停其他接单', effects: [
        { type: 'resource', target: 'money', value: 35, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
      ], outcomeText: '项目做得很好，对方把整个年框都签给了你。累但值了。' },
      { id: 'b', text: '保持多个小客户，降低风险', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你婉拒了。虽然可惜，但你知道把所有希望寄托在一个大客户上很危险。' },
    ], repeatable: false,
  },
  {
    id: 'df_003', category: 'neutral', industries: ['design_freelance', 'indie_dev'], weight: 6,
    title: '设计被白嫖',
    narrative: '一个潜在客户让你先出三个方案看看，说"如果合适就签约"。你隐约觉得不太对。',
    choices: [
      { id: 'a', text: '收定金再出方案', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '客户犹豫了一下最终付了定金。你保住了底线。' },
      { id: 'b', text: '先做一版试试', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'flag', target: 'got_burned', value: true, operation: 'set' },
      ], outcomeText: '你花了两天做方案，对方说"感觉不太对"就消失了。吃一堑长一智。' },
    ], repeatable: false,
  },
  {
    id: 'df_004', category: 'narrative', industries: ['design_freelance', 'indie_dev'], weight: 6,
    title: '老客户介绍新客户',
    narrative: '一个合作三年的老客户主动给你介绍了一个大客户，说"我帮你说了很多好话"。',
    choices: [
      { id: 'a', text: '送老客户一份大礼感谢', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你送了老客户一瓶好酒。他说"你太客气了，是因为你值得"。' },
      { id: 'b', text: '口头感谢，好好做新项目', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你用心做好新项目，用作品回报了推荐。老客户说下次还给你介绍。' },
    ], repeatable: false,
  },
  {
    id: 'df_005', category: 'crisis', industries: ['design_freelance', 'indie_dev'], weight: 5,
    title: 'AI设计工具冲击',
    narrative: 'Midjourney和DALL-E的质量越来越高，有客户说"AI几秒钟就能生成的，你还收几百？"',
    choices: [
      { id: 'a', text: '学会用AI工具，提升效率', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
      ], outcomeText: '你把AI当辅助工具，效率翻倍。客户要的是"风格+理解"，不是生成图。' },
      { id: 'b', text: '强调手工设计的价值', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你在介绍里加入了"设计理念说明"。客户发现你给的不仅是图，是完整的方案。' },
    ], repeatable: false,
  },
  {
    id: 'df_006', category: 'opportunity', industries: ['design_freelance', 'indie_dev'], weight: 6,
    title: '作品被国际设计奖提名',
    narrative: '你的一个品牌设计项目被一个国际设计奖项提名了。如果获奖，你的行业地位将大幅提升。',
    choices: [
      { id: 'a', text: '全力准备参赛材料', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'flag', target: 'won_award', value: true, operation: 'set' },
      ], outcomeText: '你花了一周打磨参赛材料。获奖的那一刻，你想起当年熬夜学设计的自己。' },
      { id: 'b', text: '随意准备，重点还是接单', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
      ], outcomeText: '没获奖，但提名本身已经给你的简历增添了一笔。' },
    ], repeatable: false,
  },

  // ======== 知识付费 (knowledge_pay) ========
  {
    id: 'kp_001', category: 'opportunity', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 7,
    title: '平台邀请入驻',
    narrative: '某头部知识付费平台邀请你入驻，承诺首月流量扶持。但平台抽成高达40%。',
    choices: [
      { id: 'a', text: '入驻，利用平台流量', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '首月确实很火。但你也意识到——用户是平台的，不是你的。' },
      { id: 'b', text: '自建渠道，慢慢积累', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你做了一个自己的官网和社群。用户不多但全是你的。' },
    ], repeatable: false,
  },
  {
    id: 'kp_002', category: 'crisis', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '课程被录屏传播',
    narrative: '你发现有人录了你的付费课程，在网上免费传播。购买群里有学员说"我在外面看到免费的了"。',
    choices: [
      { id: 'a', text: '追究侵权，发律师函', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '花了精力维权，链接被下了。但你知道过几天又会冒出来。' },
      { id: 'b', text: '更新课程，让付费版更有价值', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你大幅更新了课程内容，加入了直播答疑。学员说"盗版跟不上更新的速度"。' },
    ], repeatable: false,
  },
  {
    id: 'kp_003', category: 'neutral', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '学员质疑你的资质',
    narrative: '一个学员在社群公开质疑"你自己才做了两年，凭什么教别人？"其他人开始沉默围观。',
    choices: [
      { id: 'a', text: '坦诚分享经历和局限', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你说"我确实不是最资深的，但我走过的坑可以让你少走"。真诚反而赢得好评。' },
      { id: 'b', text: '拿数据和案例说话', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你列了一串学员成果数据。数字面前，质疑声小了很多。' },
    ], repeatable: false,
  },
  {
    id: 'kp_004', category: 'narrative', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '学员的成功案例',
    narrative: '一个学员私信你说，用了你教的方法，他拿到了心仪的offer，薪水涨了40%。他想请你吃饭。',
    choices: [
      { id: 'a', text: '接受邀请，顺便录一期访谈', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你把他的故事做成了案例分享。新学员说"这就是我想要的"。' },
      { id: 'b', text: '婉拒请客，但为他开心', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你回了"好好干，以后你也会成为别人的老师"。他很感动。' },
    ], repeatable: false,
  },
  {
    id: 'kp_005', category: 'crisis', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 5,
    title: '同行恶意差评',
    narrative: '你的课程页面突然出现多条一星差评，内容极其相似。你怀疑是同行刷的。',
    choices: [
      { id: 'a', text: '联系平台排查处理', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '平台查证后删除了恶意评价。但你知道这只是暂时的。' },
      { id: 'b', text: '不理差评，用好评盖过去', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你发动老学员写真实评价。一星差评很快被真实的五星淹没了。' },
    ], repeatable: false,
  },
  {
    id: 'kp_006', category: 'opportunity', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '企业内训合作',
    narrative: '一家中型企业想请你做企业内训，费用是课程的5倍。但需要你出差一周。',
    choices: [
      { id: 'a', text: '接下，好好准备', effects: [
        { type: 'resource', target: 'money', value: 30, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '企业培训很成功，HR说会推荐给其他部门。B端业务打开了。' },
      { id: 'b', text: '婉拒，专注线上课程', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你说"我更适合做线上"。有时候说不比说好更需要勇气。' },
    ], repeatable: false,
  },

  // ======== 网课录制 (online_course) ========
  {
    id: 'oc_001', category: 'narrative', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 7,
    title: '设备升级困境',
    narrative: '你的课程内容不错但画质和音质很一般，有学员评论"内容好但听不清"。升级设备要花不少钱。',
    choices: [
      { id: 'a', text: '投资升级专业设备', effects: [
        { type: 'resource', target: 'money', value: -20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '换了专业麦克风和灯光后，学员反馈"感觉像在看专业纪录片"。' },
      { id: 'b', text: '先凑合用，内容为王', effects: [
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '画质确实不如竞品，但你的内容确实好。学员说"我是来学东西的，不是来看电影的"。' },
    ], repeatable: false,
  },
  {
    id: 'oc_002', category: 'opportunity', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 7,
    title: '爆款课程系列',
    narrative: '你的一个课程系列意外成为平台畅销榜前十。平台编辑主动找你商量独家合作。',
    choices: [
      { id: 'a', text: '签独家，拿保底+推广', effects: [
        { type: 'resource', target: 'money', value: 25, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '独家签约后曝光多了十倍。但你不能在其他平台发布课程了。' },
      { id: 'b', text: '保持多平台分发', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你同时在三个平台发布，虽然累但每个平台都有收入。' },
    ], repeatable: false,
  },
  {
    id: 'oc_003', category: 'crisis', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 6,
    title: '学员完课率低',
    narrative: '你发现课程的完课率只有15%。大部分人买了课就放着吃灰了。你开始怀疑自己的教学方式。',
    choices: [
      { id: 'a', text: '拆成小课，加互动环节', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你把大课拆成15分钟一节，加了每周作业和直播答疑。完课率翻了一倍。' },
      { id: 'b', text: '接受现实，买课的人本就如此', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你不再纠结完课率。有人学了就值了，你安慰自己。' },
    ], repeatable: false,
  },
  {
    id: 'oc_004', category: 'neutral', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 6,
    title: '新课选题',
    narrative: '你在考虑下一套课程的方向：追热点教AI工具，还是做你擅长但受众较小的深度内容？',
    choices: [
      { id: 'a', text: '追热点教AI工具', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: 'AI课卖爆了。但也有老学员说"怎么你也开始追热点了"。' },
      { id: 'b', text: '坚持深度原创内容', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '学员不多但极其忠诚。有人说"你的课是唯一值得反复看的"。' },
    ], repeatable: false,
  },
  {
    id: 'oc_005', category: 'crisis', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 5,
    title: '免费内容竞争',
    narrative: 'YouTube/B站上出现大量免费同类内容，质量还不低。有学员要求退款"网上都有免费的"。',
    choices: [
      { id: 'a', text: '强调个性化辅导的优势', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你加大了答疑力度。学员发现"免费视频看了不会，付费课有问必答"。' },
      { id: 'b', text: '降价竞争', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '降价后销量短暂回升，但利润薄了。你感觉陷入了价格战的泥潭。' },
    ], repeatable: false,
  },
  {
    id: 'oc_006', category: 'opportunity', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 6,
    title: '学员社群独立运作',
    narrative: '你建立的学员社群开始自我运作了——助教和老学员主动回答新学员的问题，社区氛围极好。',
    choices: [
      { id: 'a', text: '正式建立助教体系', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你给了几个活跃老学员"助教"身份，他们帮你分担了大量答疑工作。' },
      { id: 'b', text: '保持轻松氛围，不加框架', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '社群保持了自然的氛围。有时候不加管理就是最好的管理。' },
    ], repeatable: false,
  },

  // ======== 代购 (daigou) ========
  {
    id: 'dg_001', category: 'crisis', industries: ['daigou', 'food_delivery'], weight: 7,
    title: '海关扣货',
    narrative: '你一批价值不小的货被海关扣了，要补缴关税和罚款。顾客都在等，你压力很大。',
    choices: [
      { id: 'a', text: '交钱补税，拿货', effects: [
        { type: 'resource', target: 'money', value: -25, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '交了一大笔钱终于把货拿出来了。这批单子亏了，但保住了老顾客的信任。' },
      { id: 'b', text: '放弃货物，退钱给客户', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你全部退款并真诚道歉。这个举动反而让客户更信任你了——"下次还找你"。' },
    ], repeatable: false,
  },
  {
    id: 'dg_002', category: 'opportunity', industries: ['daigou', 'food_delivery'], weight: 6,
    title: '独家渠道',
    narrative: '你认识了一个品牌内部的人，可以拿到别人拿不到的价格和限量款。',
    choices: [
      { id: 'a', text: '建立长期合作，做大代购', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '渠道稳定后，你的利润大幅提升。代购从副业变成了正经生意。' },
      { id: 'b', text: '谨慎合作，慢慢来', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你选择小步快跑。不把鸡蛋放在一个篮子里是对的。' },
    ], repeatable: false,
  },
  {
    id: 'dg_003', category: 'neutral', industries: ['daigou', 'food_delivery'], weight: 6,
    title: '政策风向变化',
    narrative: '新闻说跨境电商政策可能收紧，代购圈人心惶惶。有同行开始转行。',
    choices: [
      { id: 'a', text: '合法化，注册正规公司', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你注册了正规的贸易公司，走合规渠道。虽然成本高了但睡得安稳。' },
      { id: 'b', text: '观望，走一步看一步', effects: [
        { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '不确定性让你焦虑。每次看到相关新闻都会紧张一下。' },
    ], repeatable: false,
  },
  {
    id: 'dg_004', category: 'narrative', industries: ['daigou', 'food_delivery'], weight: 6,
    title: '老顾客变成朋友',
    narrative: '一个认识三年的老顾客约你线下见面。她说"你帮我挑了那么多东西，想当面谢谢你"。',
    choices: [
      { id: 'a', text: '见面，就当交朋友', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你们喝了咖啡聊了一下午。她说"你比我想象中更懂生活"。' },
      { id: 'b', text: '保持线上，专业的边界感', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你含蓄地婉拒了。保持专业的距离也是一种保护。' },
    ], repeatable: false,
  },
  {
    id: 'dg_005', category: 'crisis', industries: ['daigou', 'food_delivery'], weight: 5,
    title: '假货风波',
    narrative: '一个客户投诉说买到的产品是假的。你查了货源，发现是上游供应商调包了。',
    choices: [
      { id: 'a', text: '全额退款+赔偿，换供应商', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你主动赔了客户双倍。客户在群里说"出了事最能看出人品"。' },
      { id: 'b', text: '解释是供应商的问题', effects: [
        { type: 'resource', target: 'reputation', value: -15, operation: 'add' },
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '客户不接受解释，在朋友圈曝光了你。信誉一旦受损很难修复。' },
    ], repeatable: false,
  },
  {
    id: 'dg_006', category: 'opportunity', industries: ['daigou', 'food_delivery'], weight: 6,
    title: '转型跨境电商',
    narrative: '有投资人朋友建议你把代购业务升级为一个小型跨境电商平台，他愿意投天使轮。',
    choices: [
      { id: 'a', text: '接受投资，做大平台', effects: [
        { type: 'resource', target: 'money', value: 40, operation: 'add' },
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
        { type: 'flag', target: 'met_investor', value: true, operation: 'set' },
      ], outcomeText: '你接受了投资开始招人。从一个人变成了一个小团队，压力不一样了。' },
      { id: 'b', text: '保持小而美', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你婉拒了投资。一个人自由自在，挺好的。' },
    ], repeatable: false,
  },

  // ======== 宠物寄养 (pet_care) ========
  {
    id: 'pc_001', category: 'narrative', industries: ['pet_care', 'coffee_shop'], weight: 7,
    title: '最难搞的猫',
    narrative: '一只客人的布偶猫完全不亲人，躲在沙发底下两天没出来。主人说"它就是这样"。你得想办法。',
    choices: [
      { id: 'a', text: '耐心等待，用零食慢慢拉近距离', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '第三天，猫终于出来蹭你的手了。你拍视频发给主人，主人说"它从来不让别人摸的"。' },
      { id: 'b', text: '不去打扰，定时放粮铲屎即可', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '猫安全地度过了寄养期。但主人接猫时说"它好像不太开心"。' },
    ], repeatable: false,
  },
  {
    id: 'pc_002', category: 'crisis', industries: ['pet_care', 'coffee_shop'], weight: 6,
    title: '狗狗生病了',
    narrative: '寄养的一只金毛突然呕吐不止，看起来很难受。当时是凌晨一点，最近的宠物医院要40分钟车程。',
    choices: [
      { id: 'a', text: '马上带去急诊', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '连夜送急诊，幸好只是吃坏了肚子。主人后来感动地说"比我照顾得还好"。' },
      { id: 'b', text: '先观察，明天早上再去', effects: [
        { type: 'resource', target: 'health', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -10, operation: 'add' },
      ], outcomeText: '好在最后没什么大事。但如果真的严重，这一夜的拖延可能就是致命的。' },
    ], repeatable: false,
  },
  {
    id: 'pc_003', category: 'opportunity', industries: ['pet_care', 'coffee_shop'], weight: 6,
    title: '宠物博主合作',
    narrative: '一个宠物博主想让你长期负责她家三只猫的寄养，她经常出差。费用不错而且能帮你宣传。',
    choices: [
      { id: 'a', text: '接下合作，做好服务', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
      ], outcomeText: '博主在社交平台上夸了你的服务。你的预约排到了下个月。' },
      { id: 'b', text: '谨慎对待，怕名人麻烦', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你婉拒了合作。有时候平静比名气更重要。' },
    ], repeatable: false,
  },
  {
    id: 'pc_004', category: 'neutral', industries: ['pet_care', 'coffee_shop'], weight: 6,
    title: '场地扩展',
    narrative: '你的寄养预约越来越多，家里快放不下了。有朋友建议你租个更大的地方，但租金是一笔不小的开支。',
    choices: [
      { id: 'a', text: '租个大房子，扩大规模', effects: [
        { type: 'resource', target: 'money', value: -20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '新场地能同时容纳10只宠物。生意确实上了一个台阶。' },
      { id: 'b', text: '提高价格，控制数量', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
      ], outcomeText: '你提了价，淘汰了一些价格敏感客户。少做几单但每单利润高了。' },
    ], repeatable: false,
  },
  {
    id: 'pc_005', category: 'crisis', industries: ['pet_care', 'coffee_shop'], weight: 5,
    title: '邻居投诉',
    narrative: '你住的是居民楼，宠物叫声引来了邻居投诉。物业说再不处理就要罚款了。',
    choices: [
      { id: 'a', text: '做隔音改造，规范管理', effects: [
        { type: 'resource', target: 'money', value: -12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '隔音改造后邻居安静了。你也制定了更严格的"安静时段"制度。' },
      { id: 'b', text: '给邻居送礼说好话', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你送了邻居几盒点心，诚恳解释了一番。邻居虽然没再投诉但明显不太高兴。' },
    ], repeatable: false,
  },
  {
    id: 'pc_006', category: 'narrative', industries: ['pet_care', 'coffee_shop'], weight: 6,
    title: '客人不愿来接',
    narrative: '一只狗的主人说"能不能再寄养一个月？"这已经是第三次延期了。你怀疑她可能不想养了。',
    choices: [
      { id: 'a', text: '跟主人坦诚沟通', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '主人哭着承认自己无力照顾了。你帮她联系了一家靠谱的领养机构。' },
      { id: 'b', text: '继续收钱，不多问', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '狗在你这里过得很好。但你心里知道，这不是长久之计。' },
    ], repeatable: false,
  },

  // ======== 通用事件 (跨行业) ========
  {
    id: 'common_001', category: 'neutral', industries: 'all', weight: 6,
    title: '钱不够了',
    narrative: '你打开银行App看了一下余额，倒吸一口凉气。按现在的花销速度，只能再撑两个月。',
    choices: [
      { id: 'a', text: '砍掉所有非必要开支', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你取消了订阅、不喝咖啡、自己做饭。紧巴巴但能多撑三个月。' },
      { id: 'b', text: '接个兼职补贴一下', effects: [
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你接了些零活。钱不多但至少不用天天看余额了。' },
    ], repeatable: true,
  },
  {
    id: 'common_002', category: 'narrative', industries: 'all', weight: 7,
    title: '父母的电话',
    narrative: '周末，妈妈打电话来："最近怎么样？还在弄那个...那个什么来着？要不要回家考个公务员？"',
    choices: [
      { id: 'a', text: '耐心解释，分享进展', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '妈妈听完沉默了一会说："虽然不太懂，但你觉得对就去做吧。"你鼻子有点酸。' },
      { id: 'b', text: '敷衍过去，报喜不报忧', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你说了句"挺好的"就挂了。这或许是最累的部分——孤独地撑起一切。' },
    ], repeatable: true,
  },
  {
    id: 'common_003', category: 'opportunity', industries: 'all', weight: 5,
    title: '社区转机',
    narrative: '你在一个行业社群里认识了一个"同路人"，他愿意分享他的经验和资源。',
    choices: [
      { id: 'a', text: '主动交流，建立关系', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '聊了一晚上，你发现很多以为只有自己踩过的坑，原来别人也踩过。' },
      { id: 'b', text: '保持警惕，商业是商业', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你保持了该有的距离。也许是对的，也许是错过了一个盟友。' },
    ], repeatable: true,
  },
  {
    id: 'common_004', category: 'crisis', industries: 'all', weight: 6,
    title: '身心俱疲',
    narrative: '你发现自己连续失眠一周了。早上起来对着电脑发呆半小时，什么都没做就觉得累。',
    choices: [
      { id: 'a', text: '给自己放两天假', effects: [
        { type: 'resource', target: 'health', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: 15, operation: 'add' },
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你关掉手机，好好睡了一觉。醒来发现世界没有因为你休息两天就崩塌。' },
      { id: 'b', text: '硬扛，喝咖啡顶着', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: -15, operation: 'add' },
        { type: 'flag', target: 'burnout_count', value: true, operation: 'set' },
      ], outcomeText: '你灌下第三杯咖啡。手在抖，但还是打开了文档。这条路是你选的。' },
    ], repeatable: true,
  },
  {
    id: 'common_005', category: 'opportunity', industries: 'all', weight: 5,
    title: '客户推荐客户',
    narrative: '一个满意的老客户把你推荐给了他的朋友。新客户说"他说你很靠谱"。口碑开始起作用了。',
    choices: [
      { id: 'a', text: '给老客户发个红包感谢', effects: [
        { type: 'resource', target: 'money', value: -3, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '老客户没收红包但很高兴："不用不用，以后有需要还找你"。' },
      { id: 'b', text: '用优质服务回报信任', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你把新客户的项目做得超出预期。信任的链条又延长了一环。' },
    ], repeatable: true,
  },
  {
    id: 'common_006', category: 'neutral', industries: 'all', weight: 6,
    title: '想不明白的未来',
    narrative: '深夜，你坐在窗边算了一笔账——按现在的增速，什么时候才能不用这么焦虑？算不出来。',
    choices: [
      { id: 'a', text: '给自己定一个具体的短期目标', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你定了"三个月内活下来，半年内有利润"的目标。模糊的未来变得具体了一些。' },
      { id: 'b', text: '不想了，先把手头的事做好', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你收起计算器。有时候想太多反而是最大的内耗。' },
    ], repeatable: true,
  },
  {
    id: 'common_007', category: 'crisis', industries: 'all', weight: 7,
    title: '朋友问你在干嘛',
    narrative: '老朋友聚会，大家都聊升职加薪年终奖。轮到你的时候，你说"我在自己干"，气氛微妙地安静了一下。',
    choices: [
      { id: 'a', text: '自信地分享你的项目', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你讲完，一个朋友说"卧槽，你好敢"。另一个说"以后发达了别忘了我们"。' },
      { id: 'b', text: '轻描淡写带过去', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你说了句"混口饭吃"，转移了话题。有些路不需要解释，走通了别人自然能看到。' },
    ], repeatable: true,
  },
  {
    id: 'common_008', category: 'narrative', industries: 'all', weight: 7,
    title: '失败的味道',
    narrative: '一个项目搞砸了。客户取消了合作。你坐在空荡荡的房间里，第一次认真思考一个问题：我到底适不适合创业？',
    choices: [
      { id: 'a', text: '复盘总结，找到问题', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'flag', target: 'failed_before', value: true, operation: 'set' },
      ], outcomeText: '你花了一晚上写了份复盘。问题在哪，下次怎么做，一目了然。失败是最好的老师——如果不白失败的话。' },
      { id: 'b', text: '休息调整，换个思路', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你决定先停下来想一想下一步。有时候后退一步是为了更好地前进。' },
    ], repeatable: false,
  },
  // ======== 补充事件：每个行业+4个 ========
  // -- 短视频额外事件 --
  { id: 'sv_007', category: 'opportunity', industries: ['short_video', 'self_media'], weight: 5,
    title: '直播带货邀请', narrative: '一家MCN机构想让你尝试直播带货，他们说你的粉丝画像很适合。但你从没做过直播，心里没底。',
    choices: [
      { id: 'a', text: '挑战直播带货', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '第一场直播磕磕巴巴但卖出去了。弹幕里有人说"虽然不专业但很真诚"。' },
      { id: 'b', text: '坚持做视频不做直播', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你说"我的优势在剪辑和内容，不是实时互动"。清楚自己边界也是本事。' },
    ], repeatable: false,
  },
  { id: 'sv_008', category: 'crisis', industries: ['short_video', 'self_media'], weight: 6,
    title: '设备坏了', narrative: '拍视频录到一半，相机突然黑屏了。修理要一周，但你有一条广告明天必须交片。',
    choices: [
      { id: 'a', text: '用手机拍，质量差点但按时交', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '手机拍的画质一般但内容还行。客户说"下次注意就行"。' },
      { id: 'b', text: '跟客户协商延期', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '客户理解并同意延期。你用了更好的设备拍出更好的片子，反而赚了口碑。' },
    ], repeatable: false,
  },
  { id: 'sv_009', category: 'narrative', industries: ['short_video', 'self_media'], weight: 7,
    title: '家乡美食视频', narrative: '回老家过年，随手拍了奶奶做年夜饭的视频。没想到评论区都在说"看哭了""想起了我奶奶"。',
    choices: [
      { id: 'a', text: '做个家乡美食系列', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '奶奶成了你的"御用主角"。这个系列成了你账号最有辨识度的内容。' },
      { id: 'b', text: '保持原有风格，这只是彩蛋', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你把它当作偶尔的温情内容。粉丝说"每次这种视频都有惊喜"。' },
    ], repeatable: false,
  },
  { id: 'sv_010', category: 'neutral', industries: ['short_video', 'self_media'], weight: 6,
    title: '平台分成调整', narrative: '平台宣布调整创作者分成比例。仔细算了一下，你的收入会减少约15%。很多创作者都在抱怨。',
    choices: [
      { id: 'a', text: '多元化收入，减少对平台的依赖', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你开始接线下活动和知识分享，发现线下变现反而更稳定。' },
      { id: 'b', text: '提高更新频率来弥补', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' }, { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '拼命更新暂时稳住了收入，但你很清楚这不是长久之计。' },
    ], repeatable: false,
  },
  // -- 外卖代运营额外事件 --
  { id: 'fd_007', category: 'opportunity', industries: ['food_delivery', 'daigou'], weight: 6,
    title: '网红探店的机会', narrative: '一个美食探店博主想合作：他来你运营的店拍视频，你付一笔推广费。他的粉丝量不小。',
    choices: [
      { id: 'a', text: '花钱买推广，博一把', effects: [
        { type: 'resource', target: 'money', value: -12, operation: 'add' }, { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
      ], outcomeText: '视频爆了，你运营的店排了三天队。虽然花了推广费但赚回来了。' },
      { id: 'b', text: '用产品说话，不买流量', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你婉拒了。靠口碑慢慢来，虽然慢但每一步都扎实。' },
    ], repeatable: false,
  },
  { id: 'fd_008', category: 'crisis', industries: ['food_delivery', 'daigou'], weight: 5,
    title: '骑手恶意差评', narrative: '一个骑手因为配送费问题不满，在你所有代运营的店铺下刷了差评。评分一夜之间掉了0.5。',
    choices: [
      { id: 'a', text: '联系平台申诉，收集证据', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '花了三天整理证据申诉，差评被删除了。平台说会改进骑手管理。' },
      { id: 'b', text: '发动老客户写好评对冲', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '老客户很给力，一天之内刷了几十条好评。差评被淹没在好评的海洋里。' },
    ], repeatable: false,
  },
  { id: 'fd_009', category: 'narrative', industries: ['food_delivery', 'daigou'], weight: 6,
    title: '餐饮老板的困境', narrative: '你合作最久的一个餐饮老板说想关店了——"太累了，不想干了"。他是你的第一个客户，也是收入大头。',
    choices: [
      { id: 'a', text: '帮他优化运营，挽留老客户', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你帮他重新设计了菜单和出餐流程，效率提高了40%。他决定再试半年。' },
      { id: 'b', text: '尊重他的选择，帮他善后', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -10, operation: 'add' },
      ], outcomeText: '你帮他处理了关店的善后工作。他说"谢谢你，以后有好项目再找你"。' },
    ], repeatable: false,
  },
  { id: 'fd_010', category: 'opportunity', industries: ['food_delivery', 'daigou'], weight: 5,
    title: '团餐大单', narrative: '一个公司行政联系你，想让你代运营的几家店供应他们公司300人的午餐，每周五天，长期合作。',
    choices: [
      { id: 'a', text: '接下团餐，扩充产能', effects: [
        { type: 'resource', target: 'money', value: 30, operation: 'add' }, { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '团餐业务成了稳定现金流。虽然累但再也不用为下个月的房租发愁了。' },
      { id: 'b', text: '专注C端外卖，不做团餐', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '团餐B端和外卖C端是完全不同的逻辑。你说"我不贪多，做好一件事就够了"。' },
    ], repeatable: false,
  },
  // -- 自媒体写稿额外事件 --
  { id: 'sm_007', category: 'crisis', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 6,
    title: '广告主跑路了', narrative: '你给一个品牌写了推广文章，到结款的日子发现对方微信把你拉黑了。一笔不小的稿费打了水漂。',
    choices: [
      { id: 'a', text: '曝光这个品牌，警示同行', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你的曝光帖在圈内引起轰动，多个同行表示"差点也接了他们的推广"。' },
      { id: 'b', text: '吸取教训，以后先收定金', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你改了合同模板，新加了"50%预付"。吃一堑长一智，不算白亏。' },
    ], repeatable: false,
  },
  { id: 'sm_008', category: 'opportunity', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 6,
    title: '大V互推邀请', narrative: '一个比你粉丝多一个量级的大V想和你互推。你的文章质量他一直很认可。但他的粉丝群体和你的有差异。',
    choices: [
      { id: 'a', text: '互推，借势涨粉', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '互推后涨了三千新粉。有人留言"原来还有这样认真写内容的人"。' },
      { id: 'b', text: '婉拒，专注自己的调性', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你说"保持自己的节奏更重要"。大V回了一句"理解，真正的创作者都这样"。' },
    ], repeatable: false,
  },
  { id: 'sm_009', category: 'narrative', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 6,
    title: '读者打赏了1000块', narrative: '一篇文章的末尾，一个读者给你打赏了1000元，留言说"这篇文章改变了我的职业选择"。你盯着屏幕愣了很久。',
    choices: [
      { id: 'a', text: '私信联系，当面感谢', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你加了他微信聊了半小时。他说"你的文字让一个迷茫的人找到了方向"。' },
      { id: 'b', text: '写一篇回信公开感谢', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你写了篇《致一位读者》作为回信。评论区成了大型"你的文字也改变了我"合集。' },
    ], repeatable: false,
  },
  { id: 'sm_010', category: 'neutral', industries: ['self_media', 'knowledge_pay', 'online_course'], weight: 5,
    title: '写作瓶颈', narrative: '你已经对着空白文档坐了三个小时，一个字都写不出来。脑子里全是"这篇会不会没人看""读者是不是已经腻了"。',
    choices: [
      { id: 'a', text: '出去走走换个环境', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你在公园走了一圈，看到遛狗的大爷和跳广场舞的阿姨。灵感突然来了。' },
      { id: 'b', text: '硬写，哪怕质量一般', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '憋出来的文章发了。读者留言"这篇感觉不在状态"。你苦笑了一下。' },
    ], repeatable: true,
  },
  // -- 独立开发者额外事件 --
  { id: 'id_007', category: 'opportunity', industries: ['indie_dev', 'design_freelance'], weight: 6,
    title: '开源社区邀请', narrative: '一个知名开源项目的维护者邀请你贡献代码。如果参与，你的技术影响力会提升，但会占用你开发自己产品的时间。',
    choices: [
      { id: 'a', text: '积极贡献开源，建立影响力', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '你的PR被合并了。GitHub上的star数暴涨，连带你自己的产品也获得了关注。' },
      { id: 'b', text: '专注自己的产品', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你默默优化了自己的产品。有时候影响力不是追来的，是产品自己挣来的。' },
    ], repeatable: false,
  },
  { id: 'id_008', category: 'crisis', industries: ['indie_dev', 'design_freelance'], weight: 5,
    title: '服务器宕机24小时', narrative: '你的服务器因为云服务商故障宕机了整整24小时。用户愤怒，有人要求退款，社交媒体上骂声一片。',
    choices: [
      { id: 'a', text: '逐一道歉+赔偿+迁移服务器', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' }, { type: 'resource', target: 'energy', value: -30, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你给每个受影响的用户手写了道歉信并送了三个月免费。有人说"从没见过这么较真的开发者"。' },
      { id: 'b', text: '公开说明故障原因+快速修复', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '故障恢复了但信任损失不小。不过你写的故障复盘文章被很多开发者转发收藏。' },
    ], repeatable: false,
  },
  { id: 'id_009', category: 'neutral', industries: ['indie_dev', 'design_freelance'], weight: 6,
    title: '技术选型纠结', narrative: '你在纠结要不要把前端框架从传统方案迁移到一个新框架。迁移成本高但长期维护会更轻松。',
    choices: [
      { id: 'a', text: '花时间迁移，为长远考虑', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '花了两周重构完成。代码清爽了，开发速度快了一倍。' },
      { id: 'b', text: '能跑就别动，专注功能开发', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '老代码虽然丑但稳。你把时间花在了新功能上，用户反而更开心。' },
    ], repeatable: false,
  },
  { id: 'id_010', category: 'narrative', industries: ['indie_dev', 'design_freelance'], weight: 5,
    title: '海外用户来信', narrative: '一个巴西的用户用翻译软件写了一封英文邮件给你，说你的产品帮他完成了毕业论文，他想请你喝一杯虚拟咖啡。',
    choices: [
      { id: 'a', text: '用翻译软件回信，顺便问他需要什么功能', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你用翻译软件回了一封"中译英译葡"的邮件。他说"从没见过这么认真的开发者"。' },
      { id: 'b', text: '把产品翻译成多语言版本', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'flag', target: 'went_international', value: true, operation: 'set' },
      ], outcomeText: '你做了多语言版本。巴西用户自发帮你翻译了葡萄牙语版——免费的。' },
    ], repeatable: false,
  },
  // -- 咖啡小店额外事件 --
  { id: 'cs_007', category: 'crisis', industries: ['coffee_shop', 'pet_care'], weight: 6,
    title: '台风天停电', narrative: '台风导致停电两天，你冰箱里的牛奶、蛋糕全部报废了。刚进的咖啡豆也因为潮湿受了影响。',
    choices: [
      { id: 'a', text: '全部扔掉，重新采购', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '损失了一笔但你知道食品安全大于天。隔壁店用了有问题的原料，被投诉了。' },
      { id: 'b', text: '能用的尽量用，节约成本', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' }, { type: 'resource', target: 'reputation', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '省了一点钱但有顾客喝了变质牛奶投诉了你。得不偿失。' },
    ], repeatable: false,
  },
  { id: 'cs_008', category: 'opportunity', industries: ['coffee_shop', 'pet_care'], weight: 6,
    title: '咖啡拉花比赛', narrative: '市里举办咖啡拉花比赛，冠军可以获得媒体曝光和一笔奖金。你对自己的拉花技术很有自信。',
    choices: [
      { id: 'a', text: '参加比赛，全力备赛', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '你拿了个亚军！奖杯放在店里最显眼的位置，新客人进来都会问"这是你得的？"' },
      { id: 'b', text: '不参加比赛，专心开店', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你把备赛的时间花在了服务客人上。有老客人说"你做的咖啡不需要奖杯证明"。' },
    ], repeatable: false,
  },
  { id: 'cs_009', category: 'narrative', industries: ['coffee_shop', 'pet_care'], weight: 7,
    title: '求婚计划', narrative: '一个客人找到你，想在店里向女朋友求婚，希望能配合制造惊喜——把戒指藏在咖啡杯底。第一次约会就在这里。',
    choices: [
      { id: 'a', text: '全力配合，做成一场浪漫活动', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '求婚成功的那一刻全店欢呼。你录了视频发到社交平台，火了——"最暖咖啡店"。' },
      { id: 'b', text: '简单配合但保持低调', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你在角落帮他们默默安排。求婚成功后新人给你深深鞠了一躬。你不用发朋友圈——心里已经满足了。' },
    ], repeatable: false,
  },
  { id: 'cs_010', category: 'neutral', industries: ['coffee_shop', 'pet_care'], weight: 5,
    title: '要不要开第二家店', narrative: '生意越来越稳定，你开始考虑要不要开第二家店。朋友说"趁热打铁"，另一个朋友说"小而美最好"。',
    choices: [
      { id: 'a', text: '开分店，扩展规模', effects: [
        { type: 'resource', target: 'money', value: -25, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '第二家店开了。虽然累了但看到两家店都有人排队，很有成就感。' },
      { id: 'b', text: '只做一家，做到极致', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你把一家店做到了极致。有人从隔壁城市专门来喝你的咖啡。' },
    ], repeatable: false,
  },
  // -- 设计接单额外事件 --
  { id: 'df_007', category: 'opportunity', industries: ['design_freelance', 'indie_dev'], weight: 6,
    title: '区块链/NFT项目找你设计', narrative: '一个Web3项目找你做全套视觉设计，预算极高——但用加密货币结算。你对区块链一知半解。',
    choices: [
      { id: 'a', text: '接单，了解新领域', effects: [
        { type: 'resource', target: 'money', value: 40, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '项目做完了，你学会了一堆Web3术语。这笔单子的利润是之前三个月的总和。' },
      { id: 'b', text: '婉拒，不熟悉的领域不碰', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你对区块链不熟，不想踩坑。三个月后那个项目暴雷了——你庆幸自己躲过一劫。' },
    ], repeatable: false,
  },
  { id: 'df_008', category: 'crisis', industries: ['design_freelance', 'indie_dev'], weight: 5,
    title: '设计被同行"致敬"', narrative: '你看到自己的作品被另一个设计师"致敬式抄袭"——改了配色和字体，但布局一模一样。对方不承认。',
    choices: [
      { id: 'a', text: '在行业社群里公开讨论', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '讨论引起了很多设计师的共鸣。有人建议你"做成案例教程，教别人怎么防抄"。' },
      { id: 'b', text: '不管了，反正我的客户认的是我', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你默念"模仿是最好的赞美"然后继续工作。专注做好自己就够了。' },
    ], repeatable: false,
  },
  { id: 'df_009', category: 'narrative', industries: ['design_freelance', 'indie_dev'], weight: 7,
    title: '做一个关于父母的logo', narrative: '一个客户找到你，想让你设计一个logo——为了纪念他去世的父亲，准备用父亲的名字开一家书店。预算不高但故事动人。',
    choices: [
      { id: 'a', text: '用心设计，不计较价格', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你花了比预算多三倍的时间，做了一套让他落泪的方案。他说"这就是我爸会喜欢的字体"。' },
      { id: 'b', text: '按正常流程走，专业高效', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '你给了一个合理的方案。他说"谢谢你没有因为故事砍价或加价"。' },
    ], repeatable: false,
  },
  { id: 'df_010', category: 'neutral', industries: ['design_freelance', 'indie_dev'], weight: 6,
    title: '要不要带徒弟', narrative: '一个新人设计师想拜你为师，说可以帮你打杂换指导。你想起了自己刚入行时没人带的苦日子。',
    choices: [
      { id: 'a', text: '收徒，认真教', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '徒弟学得很快，三个月后已经能帮你分担工作。你发现教别人的过程自己也在成长。' },
      { id: 'b', text: '推荐他看一些好的教程', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你列了一份书单和教程给他。他说"虽然没有拜师，但你帮了我很多"。' },
    ], repeatable: false,
  },
  // -- 知识付费额外事件 --
  { id: 'kp_007', category: 'crisis', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '大平台也出了相同主题的课', narrative: '某知名平台上线了一个和你主题几乎一样的课，讲师是行业名人。你的销量应声下跌。',
    choices: [
      { id: 'a', text: '找差异化切入点，做细分的', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你深挖了一个大平台不会碰的细分方向。虽然受众小但转化率高得惊人。' },
      { id: 'b', text: '降价竞争，保住市场份额', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '降价后销量回升了一点，但利润薄了很多。你开始怀疑自己在做慈善教育。' },
    ], repeatable: false,
  },
  { id: 'kp_008', category: 'opportunity', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '电视台想采访你', narrative: '一家省级电视台的节目想采访你，聊聊知识付费行业和个人品牌。你会成为"一人公司"的代表人物。',
    choices: [
      { id: 'a', text: '接受采访，好好准备', effects: [
        { type: 'resource', target: 'reputation', value: 30, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '节目播出后你的课程销量翻了五倍。你妈打电话说"我在电视上看到你了！"' },
      { id: 'b', text: '婉拒，低调做好自己的事', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你说"还没做出什么了不起的成绩"。但这个年代，低调反而让人更好奇。' },
    ], repeatable: false,
  },
  { id: 'kp_009', category: 'narrative', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 6,
    title: '一个学员成了你的同行', narrative: '你最早的一批学员里，有一个人也开了一门类似主题的课，而且做得很不错。有人问你"介意吗？"',
    choices: [
      { id: 'a', text: '感到骄傲，这是最好的反馈', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你公开祝贺了他。他在朋友圈说"是xxx老师带我入了行，今天我的一切都源于他的课程"。' },
      { id: 'b', text: '心里有点复杂但表面无所谓', effects: [
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你嘴上说着没关系，但心里有点不是滋味。也许这也是成长的一部分。' },
    ], repeatable: false,
  },
  { id: 'kp_010', category: 'neutral', industries: ['knowledge_pay', 'online_course', 'self_media'], weight: 5,
    title: '录了一套免费课', narrative: '你花了一个月录了一套免费的入门课。有人夸你"良心"，也有人说"免费是因为没人买吧"。',
    choices: [
      { id: 'a', text: '免费课引流，高阶课收费', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'money', value: 10, operation: 'add' },
      ], outcomeText: '免费课播放量破了10万，高阶课的转化率是之前的三倍。这个策略对了。' },
      { id: 'b', text: '以后不免费了，尊重自己的时间', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你觉得"免费"这个标签一旦贴上了就很难撕掉。继续高质量付费内容。' },
    ], repeatable: false,
  },
  // -- 网课录制额外事件 --
  { id: 'oc_007', category: 'crisis', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 6,
    title: '麦克风坏了录了一半', narrative: '你录了一个小时的课，回放发现麦克风接触不良，整段都是电流噪音，全白录了。你骂了一句脏话。',
    choices: [
      { id: 'a', text: '买新设备，重新录', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '新麦克风的效果好太多了。有学员说"最近音质怎么突然变好了？"' },
      { id: 'b', text: '先凑合用旧设备修一修', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '勉强修了一下但能听出音质下降。学员没说什么但你知道自己可以做得更好。' },
    ], repeatable: false,
  },
  { id: 'oc_008', category: 'opportunity', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 5,
    title: '出版社想出配套教材', narrative: '有出版社联系你，想把你课程的内容整理成一本书出版。你需要花三个月时间整理书稿。',
    choices: [
      { id: 'a', text: '出书，提升权威性', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -30, operation: 'add' }, { type: 'flag', target: 'published_book', value: true, operation: 'set' },
      ], outcomeText: '书出版了，虽然销量一般但"作者"这个身份让你在行业内获得了更多的尊重和机会。' },
      { id: 'b', text: '专注线上，暂时不考虑出书', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你说"视频才是我的媒介"。节省的时间用在更新课程上，反而订阅数在涨。' },
    ], repeatable: false,
  },
  { id: 'oc_009', category: 'narrative', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 7,
    title: '收到学员的结婚请柬', narrative: '一个学员私信你，说他用你教的设计技能找到了工作，认识了他现在的未婚妻——也是你的学员。想邀请你参加婚礼。',
    choices: [
      { id: 'a', text: '去参加婚礼，见证幸福', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '在婚礼上你被安排在了"重要来宾"的位置。新郎致辞时说"感谢xxx老师改变了我的人生"。' },
      { id: 'b', text: '寄一份礼物表达祝福', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你订了一束花寄过去。附言写"继续加油，以后要成为别人生命中的光"。' },
    ], repeatable: false,
  },
  { id: 'oc_010', category: 'neutral', industries: ['online_course', 'knowledge_pay', 'self_media'], weight: 5,
    title: '要不要涨价', narrative: '你的课程价格已经两年没变了。同行都涨了至少30%。你担心涨价会让学员流失。',
    choices: [
      { id: 'a', text: '涨价，给老学员额外福利', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '新价格定下来后销量反而没跌。一个学员说"好内容值得，你早该涨了"。' },
      { id: 'b', text: '不涨，靠走量', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你没涨价的消息在学员群里传开了。有人说"这是我上过性价比最高的课"。' },
    ], repeatable: false,
  },
  // -- 代购额外事件 --
  { id: 'dg_007', category: 'opportunity', industries: ['daigou', 'food_delivery'], weight: 6,
    title: '汇率大利好', narrative: '你常做代购的那个国家货币突然大幅贬值，现在买同样的东西成本低了20%。机会窗口可能只有几周。',
    choices: [
      { id: 'a', text: '大量囤货，抓住汇率窗口', effects: [
        { type: 'resource', target: 'money', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '你借钱囤了一批货，趁汇率低大赚了一笔。但下次汇率波动是涨是跌谁也说不准。' },
      { id: 'b', text: '照常接单，不投机', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: 10, operation: 'add' },
      ], outcomeText: '汇率确实让你多赚了一些。你没有贪心，稳扎稳打地接单。' },
    ], repeatable: false,
  },
  { id: 'dg_008', category: 'crisis', industries: ['daigou', 'food_delivery'], weight: 5,
    title: '物流丢件了', narrative: '一个客户的包裹在运输途中丢失了，价值3000元的化妆品。物流公司说"正在查找"但已经过去两周了。',
    choices: [
      { id: 'a', text: '先赔客户，再追物流', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你主动赔了客户全款。客户在你朋友圈留言"这是我见过最靠谱的代购"。' },
      { id: 'b', text: '等物流结果出来再说', effects: [
        { type: 'resource', target: 'reputation', value: -10, operation: 'add' },
      ], outcomeText: '又等了一周物流还是没消息。客户虽然没说什么但再也没找你代购了。' },
    ], repeatable: false,
  },
  { id: 'dg_009', category: 'narrative', industries: ['daigou', 'food_delivery'], weight: 6,
    title: '给客户的孩子带奶粉', narrative: '一个老客户请你帮她代购奶粉——她孩子有过敏体质，只能吃一个特定品牌。跑了三家店才找到。',
    choices: [
      { id: 'a', text: '不收跑腿费，就当帮忙', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '客户收到奶粉后发了一段语音，声音哽咽："谢谢你，孩子终于有吃的了"。' },
      { id: 'b', text: '适当收一些辛苦费', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '你收了合理的跑腿费。客户说"应该的，你花了那么多时间"。' },
    ], repeatable: false,
  },
  { id: 'dg_010', category: 'neutral', industries: ['daigou', 'food_delivery'], weight: 5,
    title: '品牌方要你的进货记录', narrative: '你代购的品牌方通过微信联系你，说要核实你的货源渠道。你隐隐觉得不太对。',
    choices: [
      { id: 'a', text: '如实提供，配合品牌方', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '调查发现确实有供应商在窜货。品牌方表扬了你的诚信，反而给了你正规授权。' },
      { id: 'b', text: '不说，保护自己的渠道', effects: [
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你不透露货源信息。品牌方没有再追问，但这层窗户纸不知道能撑多久。' },
    ], repeatable: false,
  },
  // -- 宠物寄养额外事件 --
  { id: 'pc_007', category: 'crisis', industries: ['pet_care', 'coffee_shop'], weight: 6,
    title: '两只狗打架了', narrative: '两只寄养的狗突然打了起来，家里一片狼藉。一只狗的耳朵被咬出了血，你得立刻处理。',
    choices: [
      { id: 'a', text: '立刻送医，承担医药费', effects: [
        { type: 'resource', target: 'money', value: -12, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '狗狗及时处理伤口没有大碍。你从此之后严格分开寄养的宠物。主人虽然心疼但理解。' },
      { id: 'b', text: '自己处理伤口，不上医院', effects: [
        { type: 'resource', target: 'reputation', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '伤口看起来不大你简单包扎了。但主人接狗时发现了异样，非常生气。' },
    ], repeatable: false,
  },
  { id: 'pc_008', category: 'opportunity', industries: ['pet_care', 'coffee_shop'], weight: 6,
    title: '宠物烘焙合作', narrative: '一个做宠物烘焙的朋友提议合作：你在寄养服务里附加她的宠物蛋糕/零食，利润分成。客单价可以提高30%。',
    choices: [
      { id: 'a', text: '合作，丰富服务项目', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '宠物蛋糕大受欢迎。有主人在朋友圈晒图说"我家狗子过生日比我还隆重"。' },
      { id: 'b', text: '专注于寄养，不做增值服务', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你选择把一件事做好。寄养的口碑在本地圈子里数一数二。' },
    ], repeatable: false,
  },
  { id: 'pc_009', category: 'narrative', industries: ['pet_care', 'coffee_shop'], weight: 7,
    title: '救助流浪动物', narrative: '一个朋友在路边发现了一窝被遗弃的小猫，问你能不能暂时接收。你家已经有寄养的宠物了。',
    choices: [
      { id: 'a', text: '接收，帮它们找领养', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你花了一个月帮所有小猫找到了家。领养人们建了个群，定期发猫咪近况给你。' },
      { id: 'b', text: '帮它们联系救助组织', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你联系了靠谱的救助组织。它们得到了专业的照顾。' },
    ], repeatable: false,
  },
  { id: 'pc_010', category: 'neutral', industries: ['pet_care', 'coffee_shop'], weight: 5,
    title: '要不要考宠物护理证书', narrative: '市面上有一个宠物护理的职业证书，考了会更专业——但要花一笔钱和大量时间学习。',
    choices: [
      { id: 'a', text: '考证，提升专业度', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '拿到证书后你把照片挂在主页上。新客户说"有证的专业人士，放心多了"。' },
      { id: 'b', text: '经验比证书重要', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你没有考证但经验越来越丰富。老客户说"你比有证的还专业"。' },
    ], repeatable: false,
  },
  // ======== 贷款系统事件 ========
  { id: 'loan_offer', category: 'opportunity', industries: 'all', weight: 20,
    minTurn: 2,
    prerequisite: { blockedFlag: 'has_loan' },
    title: '银行来电：需要贷款吗？',
    narrative: '你收到一条银行短信："尊敬的小微企业主，您已获得预审批信用贷款资格，额度最高50万，月息5%，随借随还。" 你犹豫了一下——借钱能扩张，但还不起也很麻烦。',
    choices: [
      { id: 'a', text: '贷30万，扩张业务', effects: [
        { type: 'resource', target: 'money', value: 30, operation: 'add' },
        { type: 'flag', target: 'has_loan', value: true, operation: 'set' },
        { type: 'flag', target: 'loan_amount', value: 30, operation: 'set' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '贷款到账，账户数字好看多了。但你知道——这笔钱不是你的，每月要还利息。', hint: '获得30资金，每月产生利息'},
      { id: 'b', text: '贷15万，够用就好', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'flag', target: 'has_loan', value: true, operation: 'set' },
        { type: 'flag', target: 'loan_amount', value: 15, operation: 'set' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '少借一点，压力小一点。多了怕还不起，少了怕不够用——你选择了稳妥。', hint: '获得15资金，压力较小'},
      { id: 'c', text: '不借，靠自己慢慢赚', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你删掉了短信。借来的钱要还，靠自己的才踏实。虽然慢但每一步都是你的。' },
    ], repeatable: false,
  },
  { id: 'loan_repay', category: 'crisis', industries: 'all', weight: 25,
    prerequisite: { requiredFlag: 'has_loan' },
    title: '银行催款通知',
    narrative: '银行客服打来了第三个电话："您好，您的贷款已产生逾期利息，请尽快还清欠款，否则将影响您的征信记录。" 你看了眼余额，又看了眼欠款——差得有点多。',
    choices: [
      { id: 'a', text: '东拼西凑，先还一部分', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你到处凑钱还了一部分。暂时稳住了银行但心里很不是滋味——自己辛苦赚的钱在还利息。' },
      { id: 'b', text: '申请延期，争取时间', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '银行勉强同意延期三个月。但你知道——利息还在涨，拖得越久包袱越重。' },
      { id: 'c', text: '一次性还清全部贷款', requirements: { minMoney: 35 }, effects: [
        { type: 'resource', target: 'money', value: -30, operation: 'add' },
        { type: 'flag', target: 'paid_off_loan', value: true, operation: 'set' },
        { type: 'flag', target: 'has_loan', value: false, operation: 'set' },
        { type: 'resource', target: 'health', value: 15, operation: 'add' },
      ], outcomeText: '你还清了贷款！虽然账户余额瘦了一圈但心里踏实了。无债一身轻，终于可以睡个好觉。', hint: '需要资金≥35' },
    ], repeatable: true,
  },
  // ======== 第3批事件：参考爆款游戏风格 +80条 ========
  // -- 中国式家长风格：家庭压力、社会眼光 --
  { id: 'family_001', category: 'narrative', industries: 'all', weight: 8, minTurn: 2,
    title: '过年回家', narrative: '过年回家，你妈在饭桌上说："隔壁老王的儿子考上了公务员，楼下小李进了国企。你现在...还在自己干？"全桌安静了。',
    choices: [
      { id: 'a', text: '认真解释你在做什么', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你说了一个小时，你妈最后叹了口气："虽然不太懂，但你觉得好就行。"这句话比骂你还让你难受。' },
      { id: 'b', text: '"混口饭吃"带过去', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你敷衍了一句。亲戚们的眼神似乎在说"果然是混不下去了"。但你知道自己在干嘛。' },
    ], repeatable: true,
  },
  { id: 'family_002', category: 'crisis', industries: 'all', weight: 7, minTurn: 5,
    title: '亲戚找你"帮忙"', narrative: '一个远房亲戚知道你自己干了，发微信说："你开公司的对吧？我儿子刚毕业，让他去你那里上个班呗。"你只有一个人，怎么招人？',
    choices: [
      { id: 'a', text: '拒绝，解释真实情况', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '亲戚明显不高兴，过年见面估计要被议论了。但总比勉强答应然后搞砸了强。' },
      { id: 'b', text: '让侄子帮你做点杂活，给点零花钱', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '侄子帮你做了些杂活。虽然效率不高但亲戚关系保住了。他妈逢人就夸你"有出息"。' },
    ], repeatable: false,
  },
  { id: 'family_003', category: 'narrative', industries: 'all', weight: 7, minTurn: 8,
    title: '同学聚会', narrative: '大学同学聚会，大家都在聊升职加薪年终奖。有人问你："你现在一年能赚多少？"所有人看向你。',
    choices: [
      { id: 'a', text: '实话实说，无论多少', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你说完数字后，一个同学说"卧槽，你一个人干的？"另一个说"我明年也想出来"。' },
      { id: 'b', text: '打个哈哈过去', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你笑而不语。散场后有两个人私下来找你，说想取经——他们也动心了。' },
    ], repeatable: true,
  },
  { id: 'family_004', category: 'crisis', industries: 'all', weight: 6,
    title: '父母要来你的"公司"看看', narrative: '你妈说下周要来看看你的"公司"。你看着自己那间既是卧室又是办公室的出租屋——这哪像公司？',
    choices: [
      { id: 'a', text: '租个共享办公室应付', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你临时租了个工位。爸妈来了说"不错不错，有模有样的"。你哭笑不得。' },
      { id: 'b', text: '让他们看真实的样子', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你妈看了一圈，说"虽然小但收拾得挺干净"。然后偷偷在你枕头下塞了2000块。' },
    ], repeatable: false,
  },
  // -- Reigns风格：二选一的命运抉择 --
  { id: 'reigns_001', category: 'neutral', industries: 'all', weight: 8,
    title: '一个神秘的offer', narrative: '一个陌生人通过中间人联系你，说有一个"灰色但合法"的项目，利润极高。中间人含糊其辞——"你懂的"。',
    choices: [
      { id: 'a', text: '接这个神秘项目', effects: [
        { type: 'resource', target: 'money', value: 35, operation: 'add' }, { type: 'resource', target: 'reputation', value: -20, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' },
        { type: 'flag', target: 'did_shady_deal', value: true, operation: 'set' },
      ], outcomeText: '钱到手了但每天晚上都睡不踏实。这个项目是什么来历？你不敢去深究。' },
      { id: 'b', text: '拒了，不碰来路不明的生意', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你拒绝了。两周后听说有人接了这个项目——后来被查了。你庆幸自己没碰。' },
    ], repeatable: false,
  },
  { id: 'reigns_002', category: 'crisis', industries: 'all', weight: 8,
    title: '一个错误的选择？', narrative: '你做了一个决策，现在看起来可能是错的。客户不满意，钱花出去了，时间也浪费了。要不要承认错误？',
    choices: [
      { id: 'a', text: '承认错误，及时止损', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你坦诚地向客户道了歉。对方说"难得见你这么诚恳的，下次有项目还会找你"。' },
      { id: 'b', text: '硬撑到底，也许能翻盘', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '你又撑了一个月。结果没有翻盘——但这段经历让你以后做决策更谨慎了。' },
    ], repeatable: false,
  },
  { id: 'reigns_003', category: 'opportunity', industries: 'all', weight: 6,
    title: '两个客户同时找来', narrative: '两个客户同时找你做项目，时间完全冲突。一个是老客户（稳但有感情），一个是新客户（钱多但要求高）。你只能选一个。',
    choices: [
      { id: 'a', text: '选老客户，感情比钱重要', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '老客户很感动，又给你介绍了两个新客户。他说"靠谱的人不多了"。' },
      { id: 'b', text: '选新客户，赚钱要紧', effects: [
        { type: 'resource', target: 'money', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '新项目赚了不少但老客户明显有些失望。你说"下次一定"。但你自己也不确定。' },
    ], repeatable: false,
  },
  { id: 'reigns_004', category: 'neutral', industries: 'all', weight: 6,
    title: '有人要买你的账号', narrative: '有人出价想买你的社交媒体账号/网店/客户列表。价格不错但你经营了很久，有感情了。',
    choices: [
      { id: 'a', text: '卖掉，拿钱重新开始', effects: [
        { type: 'resource', target: 'money', value: 30, operation: 'add' }, { type: 'resource', target: 'reputation', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '账户换了一笔钱。有点舍不得但想到可以重新出发，又有点兴奋。' },
      { id: 'b', text: '不卖，这是我一手建起来的', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你拒绝了。这个账号/店铺就像你的孩子——虽然不是最好的但每一点都是你的心血。' },
    ], repeatable: false,
  },
  // -- Papers Please风格：道德困境 --
  { id: 'moral_001', category: 'crisis', industries: 'all', weight: 7,
    title: '客户要你造假', narrative: '一个利润丰厚的客户暗示你——"帮我把数据做好看一点，大家都这么干。"你知道他在要求你做假。',
    choices: [
      { id: 'a', text: '拒绝，宁可丢了这单', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你拒绝了。客户骂骂咧咧地走了。但你晚上睡得特别踏实。' },
      { id: 'b', text: '帮他"美化"一下数据', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' }, { type: 'resource', target: 'reputation', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -15, operation: 'add' },
        { type: 'flag', target: 'cut_corners', value: true, operation: 'set' },
      ], outcomeText: '钱到手了但每次看到那个客户的微信消息，你的心都会跳一下。' },
    ], repeatable: false,
  },
  { id: 'moral_002', category: 'crisis', industries: 'all', weight: 7,
    title: '竞争对手的黑料', narrative: '你偶然得知了一个竞争对手的黑料——完全真实的，但如果公开，对方可能直接倒闭。你的市场份额会大增。',
    choices: [
      { id: 'a', text: '不公开，公平竞争', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你把信息烂在了肚子里。三个月后竞争对手主动联系你合作——他不知道你帮了他。' },
      { id: 'b', text: '匿名爆料', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '对方确实受到了打击。但你发现——没人信任这个"匿名消息源"，而你每晚都在想这件事。' },
    ], repeatable: false,
  },
  { id: 'moral_003', category: 'neutral', industries: 'all', weight: 6,
    title: '逃税的建议', narrative: '一个同行私下告诉你："开发票的时候这样操作，一年能省好几万。"他说大家私下都这么干。',
    choices: [
      { id: 'a', text: '按规矩来，不搞花样', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你该交的税一分不少。虽然肉疼但你知道——自由职业的第一步就是学会合规。' },
      { id: 'b', text: '跟同行学，能省就省', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '确实省了一些钱。但每次听到"税务稽查"这个词，你的心都会跳一拍。' },
    ], repeatable: false,
  },
  // -- 随机奇遇事件（BitLife风格）--
  { id: 'random_001', category: 'opportunity', industries: 'all', weight: 6,
    title: '在地铁上遇到投资人', narrative: '在地铁上你拿着笔记本电脑改方案，旁边的人瞄了一眼说："你这个项目有意思，我是做投资的，加个微信？"',
    choices: [
      { id: 'a', text: '加微信，抓住缘分', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'flag', target: 'met_investor', value: true, operation: 'set' },
      ], outcomeText: '你们加了微信。一周后他真的请你喝咖啡聊了两个小时。缘分就是这么神奇。' },
      { id: 'b', text: '婉拒，不太信这种偶遇', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你说"谢谢但我不太需要投资"。后来听朋友说那个人确实是想套方案的。' },
    ], repeatable: false,
  },
  { id: 'random_002', category: 'crisis', industries: 'all', weight: 7,
    title: '手机被偷了', narrative: '在咖啡厅办公的时候，你去了趟洗手间，回来发现手机不见了。里面存着大量客户资料和未备份的文件。',
    choices: [
      { id: 'a', text: '报警+通知客户+买新手机', effects: [
        { type: 'resource', target: 'money', value: -12, operation: 'add' }, { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '折腾了一周才恢复所有数据。从此你养成了每天备份的习惯。有客户说"你处理得挺专业"。' },
      { id: 'b', text: '接受损失，重新开始', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: -5, operation: 'add' },
      ], outcomeText: '你买了个新手机从头来过。有些资料再也找不回来了——以后一定要备份。' },
    ], repeatable: false,
  },
  { id: 'random_003', category: 'opportunity', industries: 'all', weight: 6,
    title: '免费获得了一个大客户推荐', narrative: '一个你不认识的人在网上写了一篇关于你的推荐文，说"这是我合作过的最好的一人公司"。你完全不知道谁写的。',
    choices: [
      { id: 'a', text: '找到作者当面感谢', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你找到了作者——是你一年前合作过的一个客户。他说"当时你帮了我一个大忙，我一直想回报你"。' },
      { id: 'b', text: '保持低调神秘', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你没有刻意去认领。匿名推荐带来的神秘感反而让更多人开始关注你。' },
    ], repeatable: false,
  },
  { id: 'random_004', category: 'narrative', industries: 'all', weight: 7,
    title: '雨天遇到一只流浪猫', narrative: '下雨天回家的路上，你在小区门口遇到一只淋湿的流浪猫。它看着你，你看着它。',
    choices: [
      { id: 'a', text: '带回家照顾它', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你收养了这只猫。它每天趴在你的键盘旁边，成了你最忠实的"同事"。压力大的时候摸一摸它就好了。' },
      { id: 'b', text: '给它买了罐头就走了', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' }, { type: 'resource', target: 'money', value: -2, operation: 'add' },
      ], outcomeText: '你买了罐头给它。第二天经过的时候它还在那里等你。你发现自己每天都去喂它了。' },
    ], repeatable: false,
  },
  { id: 'random_005', category: 'neutral', industries: 'all', weight: 6,
    title: '免费咖啡', narrative: '咖啡店里排在你前面的陌生人帮你付了咖啡钱，只说了一句"pay it forward"。你愣了一下。',
    choices: [
      { id: 'a', text: '帮下一个人付，传递善意', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'money', value: -2, operation: 'add' },
      ], outcomeText: '你帮后面的姑娘付了咖啡，她开心地笑了。这点小事让你一整天都心情好。' },
      { id: 'b', text: '收下这份好意，努力工作回报社会', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你接受了陌生人的好意。有时候接受别人的善意和给予一样重要。' },
    ], repeatable: false,
  },
  // -- 自然灾害/意外事件 --
  { id: 'disaster_001', category: 'crisis', industries: 'all', weight: 6, minTurn: 3,
    title: '断网三天', narrative: '你所在的小区因为施工挖断了光缆，断网整整三天。你是做线上业务的——没网等于没收入也没法工作。',
    choices: [
      { id: 'a', text: '去朋友家蹭网加班', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你在朋友家住了三天，把紧急工作赶完了。但作息完全乱了。' },
      { id: 'b', text: '当作强制休假', effects: [
        { type: 'resource', target: 'health', value: 20, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你干脆给自己放了个假。三天后精神焕发地回到工作——效率比连轴转时高多了。' },
    ], repeatable: false,
  },
  { id: 'disaster_002', category: 'crisis', industries: 'all', weight: 5,
    title: '突发疫情封控', narrative: '小区突然因为疫情被封控了。快递停了，物流断了，你的业务受到直接影响。预计至少封两周。',
    choices: [
      { id: 'a', text: '转向线上服务，调整模式', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你快速把线下业务转到线上。虽然缩水了不少但至少没完全停摆。' },
      { id: 'b', text: '趁封控休息和充电', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -10, operation: 'add' },
      ], outcomeText: '你索性好好休息了两周。读书、做饭、锻炼——这是你创业以来作息最规律的两周。' },
    ], repeatable: false,
  },
  // -- 搞笑/荒诞事件 --
  { id: 'funny_001', category: 'narrative', industries: 'all', weight: 7,
    title: '被当成外卖小哥', narrative: '你加班到半夜去便利店买泡面，穿着随意。一个路人把你当成了外卖骑手，问"师傅，我的单还有多久？"',
    choices: [
      { id: 'a', text: '笑着纠正他', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你说"不好意思我也是来买东西的"。路人尴尬地走了。你回去把这个故事发在朋友圈，一堆人笑喷了——"创业狗的日常"。' },
      { id: 'b', text: '配合他演一下', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你说"快了快了，在路上了"。然后忍着笑回了家。一人在黑暗中创业的孤独被这份荒诞治愈了一点点。' },
    ], repeatable: false,
  },
  { id: 'funny_002', category: 'narrative', industries: 'all', weight: 6,
    title: '客户把你当成了AI', narrative: '一个客户跟你聊了很久，最后问了一句："你是真人吧？现在的AI客服做得太逼真了。"',
    choices: [
      { id: 'a', text: '"我是AI，请继续输入需求"', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你开了个玩笑。客户吓了一跳然后大笑："卧槽你真的吓到我了！"气氛瞬间轻松了。' },
      { id: 'b', text: '证明自己是人类', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你说"要不要视频一下？"客户说"算了算了我相信你"。然后继续聊正事。' },
    ], repeatable: false,
  },
  { id: 'funny_003', category: 'narrative', industries: 'all', weight: 6,
    title: '收到莫名其妙的礼物', narrative: '快递员送来一个包裹，是你从没订过的东西——一本《三天学会当老板》的成功学书。寄件人不详。',
    choices: [
      { id: 'a', text: '翻开看看说不定有启发', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你翻了几页发现全是废话。但不知为什么——看完这本书你更确信自己比那些"大师"靠谱多了。' },
      { id: 'b', text: '拿去垫显示器', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '这本书的高度正好垫高了显示器，你的颈椎舒服了很多。——这是它最大的实用价值。' },
    ], repeatable: false,
  },
  // -- 季节/天气事件 --
  { id: 'season_001', category: 'neutral', industries: 'all', weight: 7,
    title: '春天来了', narrative: '窗外的树绿了，街上的人多了。你看着窗外的阳光突然想——我已经多久没出去走走了？',
    choices: [
      { id: 'a', text: '去公园工作一天', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你抱着笔记本在公园待了一下午。工作效率一般但心情好了很多。一只松鼠在旁边偷看你。' },
      { id: 'b', text: '继续埋头工作，春天年年都有', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你在屋子里工作了一整天。春天确实年年都有——但青春不是。' },
    ], repeatable: true,
  },
  { id: 'season_002', category: 'narrative', industries: 'all', weight: 6,
    title: '秋天的第一杯奶茶', narrative: '朋友圈刷屏"秋天的第一杯奶茶"。你才发现已经秋天了——你已经连续三个月没有任何社交活动。',
    choices: [
      { id: 'a', text: '给自己买一杯奶茶，然后约朋友', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'money', value: -2, operation: 'add' },
      ], outcomeText: '你喝了一杯奶茶然后给好久没联系的朋友发了消息。他说"我差点以为你人间蒸发了"。' },
      { id: 'b', text: '算了，一个人也挺好', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你默默地看了看朋友圈然后继续工作。一个人确实挺好的——只是偶尔也会想有人说说话。' },
    ], repeatable: false,
  },
  // -- 行业扩展事件（跨行业共享池）--
  { id: 'cross_001', category: 'opportunity', industries: ['short_video', 'self_media', 'online_course'], weight: 7,
    title: '内容被大V转发了', narrative: '你发布的一条内容被一个大V转发了——没有经过你同意但标注了出处。你的数据暴涨。',
    choices: [
      { id: 'a', text: '趁热度多发几条内容', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你趁热打铁更新了三条内容。新粉丝说"终于发现了一个宝藏博主"。' },
      { id: 'b', text: '联系大V感谢并讨论合作', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '大V说"你的内容确实好，以后可以多互动"。意外的贵人。' },
    ], repeatable: false,
  },
  { id: 'cross_002', category: 'crisis', industries: ['coffee_shop', 'pet_care', 'food_delivery'], weight: 7,
    title: '原材料/用品涨价', narrative: '供应商通知你：由于各种原因，你的主要原料/用品价格上涨了25%。利润被大幅压缩。',
    choices: [
      { id: 'a', text: '承担涨价，不转嫁给客户', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你咬牙承担了。有客户发现了说"现在不涨价的店不多了"。' },
      { id: 'b', text: '适当涨价，跟客户解释', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '你涨了一点并诚恳地解释了原因。大部分客户表示理解。' },
    ], repeatable: false,
  },
  { id: 'cross_003', category: 'narrative', industries: ['indie_dev', 'design_freelance', 'knowledge_pay'], weight: 7,
    title: '有人把你的教程翻译成了英文', narrative: '你偶然发现海外有人把你的教程/产品翻译成了英文，在海外论坛上还有不少讨论。他自己做的，没告诉你。',
    choices: [
      { id: 'a', text: '联系对方，授权并合作', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'flag', target: 'went_international', value: true, operation: 'set' },
      ], outcomeText: '你们达成了合作。海外版比原版传播还广——有人从地球另一边给你发了感谢邮件。' },
      { id: 'b', text: '自己认真做一次多语言版本', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你花了两个月做了完整的多语言版。海外用户说"终于等到官方版了"。' },
    ], repeatable: false,
  },
  { id: 'cross_004', category: 'crisis', industries: ['daigou', 'food_delivery', 'coffee_shop'], weight: 6,
    title: '被恶意举报', narrative: '有人举报了你的业务，说存在XX问题。平台/监管部门暂时限制了你的经营权限。实际上你是被恶意针对了。',
    choices: [
      { id: 'a', text: '提交证据申诉', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你整理了完整的证据链。申诉成功后平台说"抱歉，我们会改进审核机制"。' },
      { id: 'b', text: '等限制自动解除', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '限制终于解除了但损失了不少订单。你觉得"算了，不跟他们一般见识"。' },
    ], repeatable: false,
  },
  // -- 10条随机日常（高权重，增加变化）--
  { id: 'misc_001', category: 'neutral', industries: 'all', weight: 8,
    title: '你今天就是不想干了', narrative: '今天早上起床，你感觉特别不想工作。不是累了也不是生病，就是单纯地想说一句"去他的"。每个人都有的那种日子。',
    choices: [
      { id: 'a', text: '给自己放一天假', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你去看了场电影，吃了顿好的，晚上回到家觉得——其实日子也没那么糟。' },
      { id: 'b', text: '逼自己干一点，哪怕很慢', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '你磨蹭了一天，效率极低。有时候允许自己休息反而是更高效率的方式。' },
    ], repeatable: true,
  },
  { id: 'misc_002', category: 'opportunity', industries: 'all', weight: 7,
    title: '意外学到了一个技巧', narrative: '刷视频的时候无意间看到一个教程，讲了一个你一直想学但没时间学的技巧。只需一小时就能掌握。',
    choices: [
      { id: 'a', text: '马上学，立即应用', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'skill_point', target: 'skill', value: 1, operation: 'add' },
      ], outcomeText: '你花了一小时学了然后马上用在工作中。效率立竿见影。以后刷视频的时候你会多留意。' },
      { id: 'b', text: '收藏起来晚点学', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你点了收藏。然后和99%的收藏内容一样——再也没打开过。' },
    ], repeatable: true,
  },
  { id: 'misc_003', category: 'narrative', industries: 'all', weight: 7,
    title: '深夜的灵感', narrative: '凌晨两点，一个想法突然涌进你的脑子。你猛地从床上坐起来——这可能是一个突破性的思路。',
    choices: [
      { id: 'a', text: '立刻起床记下来', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你记了三页笔记。第二天把这个思路变成了现实。灵感这种东西——来了就要抓住。' },
      { id: 'b', text: '记在手机备忘录里，明天处理', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你在手机上草草记了几笔然后继续睡。第二天起来看——备忘录上写着"那个...就是那个..."你忘了要写什么了。' },
    ], repeatable: true,
  },
  { id: 'misc_004', category: 'neutral', industries: 'all', weight: 7,
    title: '打扫房间', narrative: '你发现房间已经乱到无法专心工作的地步了。桌上堆满了外卖盒、快递箱和打印废纸。是时候清理一下了。',
    choices: [
      { id: 'a', text: '大扫除，整理环境', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你收拾了一个下午。清爽的房间让心情也清爽了不少。你在干净的桌上开始工作——效率翻倍。' },
      { id: 'b', text: '只把当前工作区域清一下', effects: [
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '你清出了一小块工作区域。虽然周围还是乱但至少能干活了。完美主义是奢侈的。' },
    ], repeatable: true,
  },
  { id: 'misc_005', category: 'narrative', industries: 'all', weight: 8,
    title: '庆祝一个小胜利', narrative: '今天完成了一个拖了很久的工作。虽然只是个小胜利但你还是很高兴——终于把它干掉了。',
    choices: [
      { id: 'a', text: '犒劳自己一下', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你买了一份自己喜欢吃的东西，慢慢享受。一人公司最大的好处——你不需要等领导宣布"我们赢了"，你自己就能庆祝。' },
      { id: 'b', text: '再接再厉，开始下一项', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你喝了一口咖啡开始了下一项工作。努力的人都知道——庆祝是给休息日留的。' },
    ], repeatable: true,
  },
  { id: 'misc_006', category: 'crisis', industries: 'all', weight: 6,
    title: '忘记缴费被停电了', narrative: '你忘了交电费——因为自由职业者没有"行政部"帮你处理这些事。手机也快没电了，路由器也没有电。',
    choices: [
      { id: 'a', text: '去图书馆/咖啡厅工作', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你在图书馆待了一天。效率居然不错——旁边复习考研的学生让你想起了学生时代的自己。' },
      { id: 'b', text: '去交电费然后回家', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你跑去营业厅交了电费。回来的路上顺便把水费、燃气费也交了——一劳永逸。' },
    ], repeatable: false,
  },
];
