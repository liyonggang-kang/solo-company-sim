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
      { id: 'c', text: '跟同行交流取经，看看别人怎么应对', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你加入了几个创作者群，大家互通有无。原来不只你一个人受影响——抱团取暖感觉好多了。' },
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
      { id: 'c', text: '发动铁粉帮你辟谣和解释', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你的老粉丝自发帮你澄清，有人翻出原视频逐帧对比。铁粉的力量比想象中大。' },
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
      { id: 'c', text: '跟品牌方谈试用期，效果好再续约', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你提出了试用方案。品牌方同意先试一期看看效果。折中方案——既赚了钱又没透支信誉。' },
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
      { id: 'c', text: '谈一个短期合作试试水', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你签了一个三个月的短期协议。先试试合不合得来——万一不合适随时可以撤。' },
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
      { id: 'c', text: '线上同步直播，让不能到场的粉丝也可以参与', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你在线上也开了直播，外地粉丝感动坏了。有人说"虽然不能来，但感觉就在现场"。' },
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
      { id: 'c', text: '赔一部分钱但要求店主加强管理', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你出钱安抚了顾客，同时让店主承诺加强管理。花钱买教训——但下次不会了。' },
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
      { id: 'c', text: '先接一部分试运营，做好了再加量', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你只接了部分门店先做起来。稳扎稳打永远比贪多嚼不烂好。' },
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
      { id: 'c', text: '跟客户挨个解释情况，争取理解', effects: [
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你给每个等餐的客户发了消息解释情况。大部分人表示理解。"态度诚恳就不会差到哪去"。' },
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
      { id: 'c', text: '趁补贴期把口碑做起来', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
      ], outcomeText: '你没有只顾接单，而是花精力在每个订单的服务上。补贴会结束，但口碑不会。' },
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
      { id: 'c', text: '跟店主商量研发独家的招牌菜', effects: [
        { type: 'resource', target: 'energy', value: -18, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你们研发出了一款只有这家店才有的招牌菜。抄得了菜单抄不了味道——这才是真正的护城河。' },
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
      { id: 'c', text: '咨询同行看看他们怎么应对的', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 3, operation: 'add' },
      ], outcomeText: '你问了几个同行的处理方式。有时候最快的学习就是跟着有经验的人走。' },
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
      { id: 'c', text: '把广告收入的一部分捐出去', effects: [
        { type: 'resource', target: 'reputation', value: 18, operation: 'add' },
        { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你捐了一小部分出去并在文章里说明了。读者说"这才是格局"——反而更多人关注了。' },
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
      { id: 'c', text: '写一篇"如何应对洗稿"的文章', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
      ], outcomeText: '你写了一篇关于原创保护的文章。意外地成了爆款——比被洗的那篇阅读量还高。' },
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
      { id: 'c', text: '趁这个机会拓展自己的网站和邮件列表', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你建了自己的网站和邮件订阅。读者到了你自己的地盘——以后平台怎么变都不怕了。' },
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
      { id: 'c', text: '问出版社能不能加些配图做成精品书', effects: [
        { type: 'resource', target: 'reputation', value: 18, operation: 'add' },
        { type: 'resource', target: 'energy', value: -20, operation: 'add' },
      ], outcomeText: '你提议做成配图版的精品书。出版社同意了——品质感让这本书脱颖而出。' },
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
      { id: 'c', text: '把文章发在个人网站上避开平台审查', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你把文章发在了自己的网站上。虽然流量少了但至少不会被删——有些话值得被看到。' },
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
      { id: 'c', text: '在下一篇文章开头提到这封信', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '你在新文章里轻描淡写地提了一句。那位读者在评论区出现了——他说"没想到你还记得"。' },
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
      { id: 'c', text: '联系平台要求补充服务器资源', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
      ], outcomeText: '你花钱升了服务器配置。用户看到加载速度变快——有时候技术投入是最好的市场投入。' },
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
      { id: 'c', text: '开源一些非核心模块建立社区信任', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
      ], outcomeText: '你开源了几个辅助模块。社区反应热烈——"大厂抄不了开源社区的热情"。' },
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
      { id: 'c', text: '谈一个折中方案：核心功能不改，只做定制插件', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
      ], outcomeText: '你同意了做定制插件但不动核心产品。客户满意了，你的产品也没被带偏——两全其美。' },
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
      { id: 'c', text: '让社区用户帮你宣传这次演讲', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你让老用户在社交平台上帮忙扩散。用户替你说话比你自己说管用一百倍。' },
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
      { id: 'c', text: '写一份详细的故障复盘报告', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你写了一篇详细的事故复盘。技术圈都在转发——"这是我见过最认真的故障报告"。' },
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
      { id: 'c', text: '请他写一篇使用心得/推荐语', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '用户很乐意写了一段推荐语。真实的用户故事比任何广告都有说服力。' },
    ], repeatable: false,
  },

  // ======== 咖啡小店 (coffee_shop) ========
  {
    id: 'cs_001', category: 'opportunity', industries: ['coffee_shop'], weight: 7,
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
      { id: 'c', text: '借热度推一些店里的周边产品', effects: [
        { type: 'resource', target: 'money', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你趁热度推出了自己烘焙的咖啡豆。粉丝来店里顺便带一包回家——二次消费被激活了。' },
    ], repeatable: false,
  },
  {
    id: 'cs_002', category: 'crisis', industries: ['coffee_shop'], weight: 6,
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
      { id: 'c', text: '跟房东谈分期涨租，减少冲击', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'money', value: -8, operation: 'add' },
      ], outcomeText: '你说服房东分两年涨租。压力被分摊了——他同意了因为你从来不拖欠。' },
    ], repeatable: false,
  },
  {
    id: 'cs_003', category: 'neutral', industries: ['coffee_shop'], weight: 6,
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
      { id: 'c', text: '另辟蹊径做外卖咖啡配送', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
      ], outcomeText: '你开始做咖啡外卖。每天早高峰写字楼的订单比你想象中多得多。' },
    ], repeatable: false,
  },
  {
    id: 'cs_004', category: 'narrative', industries: ['coffee_shop'], weight: 6,
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
      { id: 'c', text: '帮他在新城市找找有没有好的咖啡店', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你帮他在新城市搜了几家不错的店。他说"下次你来我的城市，我请你喝咖啡"。' },
    ], repeatable: false,
  },
  {
    id: 'cs_005', category: 'crisis', industries: ['coffee_shop'], weight: 5,
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
      { id: 'c', text: '跟供应商谈长期合作争取优惠价', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你跟豆子供应商签了长期合同，价格锁定了一年。稳定供应比什么都重要。' },
    ], repeatable: false,
  },
  {
    id: 'cs_006', category: 'opportunity', industries: ['coffee_shop'], weight: 6,
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
      { id: 'c', text: '录制成线上课程放到网上', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你把课程录成视频放上网，意外收获了一批线上学生。咖啡教室变成线上线下双模式。' },
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
      { id: 'c', text: '坚持按合同改，但额外送一版自己的方案', effects: [
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你按合同改了7稿后额外做了一版你觉得更好的。甲方看了说"这个好，就用这个"。' },
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
      { id: 'c', text: '谈一个固定时间合作分期推进', effects: [
        { type: 'resource', target: 'money', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
      ], outcomeText: '你提出分阶段交付，每周投入固定时间。既接了大单又没有完全放弃其他客户。' },
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
      { id: 'c', text: '出一版简单的免费草稿试探诚意', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你只出了一版极简的草稿。对方看了之后说"能不能详细一点？"你回"可以，先签合同"。' },
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
      { id: 'c', text: '给老客户一个专属折扣码让他分享', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你给老客户设置了专属推荐折扣。他帮忙转介绍了两个新客户——口碑比广告管用。' },
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
      { id: 'c', text: '把AI当成辅助工具融入工作流', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
      ], outcomeText: '你用AI做初稿然后用你的审美修改。效率翻了一倍——工具是你的助手不是替代品。' },
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
      { id: 'c', text: '在社交平台上分享参赛心得', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你写了篇长文分享参赛过程中的设计思考。文章比获奖本身传播更广。' },
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
      { id: 'c', text: '在平台上免费分享一些引流内容', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你定期在平台写免费文章。读者被内容吸引自然买了课——用内容带转化是最稳的。' },
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
      { id: 'c', text: '把免费传播当成引流手段', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你不追究盗版反而在视频里加了引流信息。免费传播带来了更多付费学员——格局打开了。' },
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
      { id: 'c', text: '邀请学员代表参与课程改进', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你请了几个学员代表提建议改课程。让他们参与进来——质疑变成了共建。' },
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
      { id: 'c', text: '邀请他做一期嘉宾分享', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你请他做了一次嘉宾分享。学员看到师兄的成功——比你说一百遍都管用。' },
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
      { id: 'c', text: '邀请老学员留下真实评价', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你私信了十几个老学员请他们写真实反馈。好评涌进来之后差评就看不见了。' },
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
      { id: 'c', text: '把培训录下来做成线上的企业版课程', effects: [
        { type: 'resource', target: 'money', value: 18, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
      ], outcomeText: '你把企业培训内容录成了标准课。一次培训变成了一门可以反复卖的产品。' },
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
      { id: 'c', text: '把手机当成一个有趣的风格来用', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '你用手机拍了一段"开工前Vlog"当课程彩蛋。学员说"这种真实感比完美画质更好"。' },
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
      { id: 'c', text: '只签独家给最赚钱的那个平台', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你只在销量最高的平台签了独家。其他平台继续自由分发——选择性独家，主动权在你手里。' },
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
      { id: 'c', text: '搞一个打卡返现活动激励完课', effects: [
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你推出了"学完退一半"的活动。完课率飙升——虽然少赚了点但口碑好了。' },
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
      { id: 'c', text: '问问学员他们最想学什么', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你做了个问卷。原来学员最想学的不是AI也不是深度内容——而是"如何坚持学习"。' },
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
      { id: 'c', text: '把免费内容作为课程配套的学习材料', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你坦然接受了"网上有免费的"这个事实，然后把付费课的差异化做在了辅导和答疑上。' },
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
      { id: 'c', text: '给助教一些课程分成的激励', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你给助教们设置了推荐分成。他们更有动力了——每带一个新学员都有收益。' },
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
      { id: 'c', text: '以后走正规清关渠道避免麻烦', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你研究了一下正规清关流程。虽然成本高了但再也不用提心吊胆等包裹了。' },
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
      { id: 'c', text: '少量试单，确认渠道稳定再说', effects: [
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你先下了几单小的测试渠道。第一批顺利走完才加大投入——稳妥总比冒险好。' },
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
      { id: 'c', text: '找代理报关公司帮忙处理', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
      ], outcomeText: '你找了家报关代理。虽然花了手续费但专业的事交给专业的人——少操很多心。' },
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
      { id: 'c', text: '拉一个小群让老客户互相交流', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '你建了个老客户分享群。她们在里面互相推荐商品——你变成了群里的KOL。' },
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
      { id: 'c', text: '以后每次发货都拍视频留证', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你制定了一套发货留证流程。虽然多了一步但以后的每一单都有据可查。' },
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
      { id: 'c', text: '先试水一个小众品类看看效果', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你先做了一个细分品类的小平台。数据跑通了再扩大——小步试错比一上来就做大风险低。' },
    ], repeatable: false,
  },

  // ======== 宠物寄养 (pet_care) ========
  {
    id: 'pc_001', category: 'narrative', industries: ['pet_care'], weight: 7,
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
      { id: 'c', text: '用逗猫棒和零食慢慢建立信任', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你用零食和耐心换来了猫的信任。第四天它主动跳到你腿上——驯服一只不亲人的猫是最大成就感。' },
    ], repeatable: false,
  },
  {
    id: 'pc_002', category: 'crisis', industries: ['pet_care'], weight: 6,
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
      { id: 'c', text: '打视频给狗主人让他看看情况', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你打视频给主人，他远程看到狗的状态后很放心——"交给你我太安心了"。' },
    ], repeatable: false,
  },
  {
    id: 'pc_003', category: 'opportunity', industries: ['pet_care'], weight: 6,
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
      { id: 'c', text: '请博主在朋友圈帮你推荐一下', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '博主在朋友圈帮你说了句话。信任背书比打广告有用——养宠圈很小但很紧密。' },
    ], repeatable: false,
  },
  {
    id: 'pc_004', category: 'neutral', industries: ['pet_care'], weight: 6,
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
      { id: 'c', text: '先试试家庭式寄养扩大容量', effects: [
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你和附近几个宠物主达成了合作。家庭互助——不用租场地就扩大了容量。' },
    ], repeatable: false,
  },
  {
    id: 'pc_005', category: 'crisis', industries: ['pet_care'], weight: 5,
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
      { id: 'c', text: '主动参加社区活动搞好邻里关系', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你参加了社区义工活动。邻居们对你改观了——"哦原来你不是开狗场的是开宠物酒店的"。' },
    ], repeatable: false,
  },
  {
    id: 'pc_006', category: 'narrative', industries: ['pet_care'], weight: 6,
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
      { id: 'c', text: '帮主人联系宠物行为训练师', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你联系了训练师帮主人解决狗狗的行为问题。主人重新找回了信心——不弃养了。' },
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
      { id: 'c', text: '自己做饭带便当减少外卖开支', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你开始自己做便当。省了钱也健康了——虽然洗碗有点烦但看着余额心里踏实。' },
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
      { id: 'c', text: '给妈妈发几张工作日常的照片', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
      ], outcomeText: '你发了几张最近做的工作照片给她。她回"原来你每天都在做这些啊，看起来很有意思"。' },
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
      { id: 'c', text: '先分享一个自己的经验建立信任', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '你先分享了自己的一个实操经验。对方觉得你真诚——后面聊得就深入了。' },
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
      { id: 'c', text: '去做一次按摩或者泡个澡', effects: [
        { type: 'resource', target: 'health', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: 8, operation: 'add' },
        { type: 'resource', target: 'money', value: -8, operation: 'add' },
      ], outcomeText: '你约了个按摩，好好放松了一下。身体不是机器——保养好了才能继续干。' },
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
      { id: 'c', text: '请老客户允许把他的推荐语贴在网上', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '你把客户的推荐语做成了案例页。新客户看完直接说"不用介绍了，我信了"。' },
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
      { id: 'c', text: '写一份半年行动计划贴在墙上', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: 3, operation: 'add' },
      ], outcomeText: '你写了一份六个目标的大字贴在墙上。每天早上看到它——比喝咖啡还提神。' },
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
      { id: 'c', text: '反问他们公司最近怎么样', effects: [
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: 3, operation: 'add' },
      ], outcomeText: '你反问了回去。他们开始抱怨公司——你发现原来大家各有各的烦恼。' },
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
      { id: 'c', text: '把这次失败写成一篇经验总结', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你写了篇《失败的3个教训》。文章发出后很多同行留言——"写的太真实了"。' },
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
      { id: 'c', text: '找朋友一起搭档直播，互相壮胆', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你拉了一个朋友搭档，有说有笑地播了一晚上。两个人总比一个人好玩。' },
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
      { id: 'c', text: '用朋友/同行的设备先借来用', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 3, operation: 'add' },
      ], outcomeText: '你跟同行借了设备应急。江湖救急——之前帮过的人这次回报你了。' },
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
      { id: 'c', text: '把这个视频发给奶奶看', effects: [
        { type: 'resource', target: 'health', value: 12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你给奶奶看了视频，她笑着说"我哪有那么好"。你抱着她——这条视频的意义已经超越了流量。' },
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
      { id: 'c', text: '跟平台客服沟通反馈意见', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 3, operation: 'add' },
      ], outcomeText: '你找客服反映了分成调整的影响。虽然一个人声音不大，但大家都去反馈就有用了。' },
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
      { id: 'c', text: '跟博主谈置换合作（产品换推广）', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你用产品抵扣了推广费。博主吃了之后真心喜欢，写得比花钱买的还真诚。' },
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
      { id: 'c', text: '主动联系骑手了解问题根源', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你跟骑手聊了聊，发现是平台派单机制的问题。你帮他在平台申诉——矛盾化解了。' },
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
      { id: 'c', text: '帮他算一笔账，看看有没有出路', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '你们一起分析了经营数据，发现午餐时段有很大优化空间。他决定再试试。' },
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
      { id: 'c', text: '先接小规模的午餐试水', effects: [
        { type: 'resource', target: 'money', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你从100人份做起。供应链跑顺了再加量——一口气吃不成胖子。' },
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
      { id: 'c', text: '把这家品牌列入行业黑名单分享出去', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你整理了一份靠谱合作方的名单分享给同行。大家说"终于有人做这个了"。' },
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
      { id: 'c', text: '试试交换一篇稿子看看效果', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你先试了一篇互推，数据还不错。不着急大规模合作——小步快跑最稳妥。' },
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
      { id: 'c', text: '把这笔钱捐给一个你关心的项目', effects: [
        { type: 'resource', target: 'health', value: 12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
      ], outcomeText: '你把钱捐了出去并在文章里感谢了那位读者。善意是会传染的——更多人开始打赏。' },
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
      { id: 'c', text: '翻翻过去的读者留言找找灵感', effects: [
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 3, operation: 'add' },
      ], outcomeText: '你翻看了过去几个月的读者留言。有人说过"希望你能写一写XX话题"——这不就是选题吗。' },
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
      { id: 'c', text: '只贡献一个你擅长的小模块', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你只贡献了一个小功能但做得很精致。社区说"质量比数量重要"。' },
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
      { id: 'c', text: '借这次事故升级基础设施', effects: [
        { type: 'resource', target: 'energy', value: -25, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'money', value: -10, operation: 'add' },
      ], outcomeText: '你趁机升级了整个架构。虽然累但以后再也不会因为同样的问题宕机了。' },
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
      { id: 'c', text: '新老框架并存，逐步迁移', effects: [
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你选择了渐进式迁移。不急不躁——老代码慢慢退休，新代码稳步上线。' },
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
      { id: 'c', text: '给他寄一些中国特色的开发者周边', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
        { type: 'resource', target: 'money', value: -3, operation: 'add' },
      ], outcomeText: '你寄了一些小礼物过去。他说这是他收到的最有趣的国际快递——你多了个巴西朋友。' },
    ], repeatable: false,
  },
  // -- 咖啡小店额外事件 --
  { id: 'cs_007', category: 'crisis', industries: ['coffee_shop'], weight: 6,
    title: '台风天停电', narrative: '台风导致停电两天，你冰箱里的牛奶、蛋糕全部报废了。刚进的咖啡豆也因为潮湿受了影响。',
    choices: [
      { id: 'a', text: '全部扔掉，重新采购', effects: [
        { type: 'resource', target: 'money', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '损失了一笔但你知道食品安全大于天。隔壁店用了有问题的原料，被投诉了。' },
      { id: 'b', text: '能用的尽量用，节约成本', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' }, { type: 'resource', target: 'reputation', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -10, operation: 'add' },
      ], outcomeText: '省了一点钱但有顾客喝了变质牛奶投诉了你。得不偿失。' },
      { id: 'c', text: '联系保险公司看看能不能申请理赔', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你发现店铺保险里包含自然灾害条款，拿到了部分理赔。保险不能白买。' },
    ], repeatable: false,
  },
  { id: 'cs_008', category: 'opportunity', industries: ['coffee_shop'], weight: 6,
    title: '咖啡拉花比赛', narrative: '市里举办咖啡拉花比赛，冠军可以获得媒体曝光和一笔奖金。你对自己的拉花技术很有自信。',
    choices: [
      { id: 'a', text: '参加比赛，全力备赛', effects: [
        { type: 'resource', target: 'reputation', value: 25, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '你拿了个亚军！奖杯放在店里最显眼的位置，新客人进来都会问"这是你得的？"' },
      { id: 'b', text: '不参加比赛，专心开店', effects: [
        { type: 'resource', target: 'energy', value: 10, operation: 'add' },
      ], outcomeText: '你把备赛的时间花在了服务客人上。有老客人说"你做的咖啡不需要奖杯证明"。' },
      { id: 'c', text: '让熟客帮忙投票助威', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
      ], outcomeText: '熟客们在社交平台上疯狂帮你拉票。你发现他们比你自己还上心。' },
    ], repeatable: false,
  },
  { id: 'cs_009', category: 'narrative', industries: ['coffee_shop'], weight: 7,
    title: '求婚计划', narrative: '一个客人找到你，想在店里向女朋友求婚，希望能配合制造惊喜——把戒指藏在咖啡杯底。第一次约会就在这里。',
    choices: [
      { id: 'a', text: '全力配合，做成一场浪漫活动', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '求婚成功的那一刻全店欢呼。你录了视频发到社交平台，火了——"最暖咖啡店"。' },
      { id: 'b', text: '简单配合但保持低调', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你在角落帮他们默默安排。求婚成功后新人给你深深鞠了一躬。你不用发朋友圈——心里已经满足了。' },
      { id: 'c', text: '把这个故事写下来贴在店里的墙上', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你把求婚故事和照片裱起来挂在墙上。新客人进来都会驻足看看——这是这家店独一无二的温度。' },
    ], repeatable: false,
  },
  { id: 'cs_010', category: 'neutral', industries: ['coffee_shop'], weight: 5,
    title: '要不要开第二家店', narrative: '生意越来越稳定，你开始考虑要不要开第二家店。朋友说"趁热打铁"，另一个朋友说"小而美最好"。',
    choices: [
      { id: 'a', text: '开分店，扩展规模', effects: [
        { type: 'resource', target: 'money', value: -25, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '第二家店开了。虽然累了但看到两家店都有人排队，很有成就感。' },
      { id: 'b', text: '只做一家，做到极致', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '你把一家店做到了极致。有人从隔壁城市专门来喝你的咖啡。' },
      { id: 'c', text: '先试试移动咖啡车或快闪店', effects: [
        { type: 'resource', target: 'money', value: -8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你搞了一辆咖啡车在周末市集试水。成本低了很多——先试试水温再决定开不开店。' },
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
      { id: 'c', text: '先做一个小功能试用看看效果', effects: [
        { type: 'resource', target: 'money', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你接了一个小模块先试试。Web3那帮人挺好合作的——比传统客户爽快。' },
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
      { id: 'c', text: '把你自己的原创新版本做得更好，拉开差距', effects: [
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
      ], outcomeText: '你迭代了一版全新的设计。模仿者还在抄上一版的时候你已经又进化了。' },
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
      { id: 'c', text: '把这次的设计过程记录下来放到作品集里', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你把设计背后的故事写进了作品集。后来好多客户说"看了这个故事才决定找你"。' },
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
      { id: 'c', text: '让他先跟着你做几次，以项目合作形式', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你带他做了几个小项目。虽然不算正式师徒但确实帮到了他——有个领路人比自己摸索快多了。' },
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
      { id: 'c', text: '跟大平台的课做对比表突出你的差异', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你做了一张对比表——"大平台课 vs 实战派课"。差异化一目了然，反而吸引了一批人。' },
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
      { id: 'c', text: '主动联系电视台提供行业数据支持', effects: [
        { type: 'resource', target: 'reputation', value: 20, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你给节目组提供了一些行业数据作为背景素材。虽然没上镜但行业影响力提升了。' },
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
      { id: 'c', text: '跟他合作做一门联合课程', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你们一起开发了一门进阶课。师徒合作——他的新视角加上你的经验，效果出奇好。' },
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
      { id: 'c', text: '免费课上留悬念引导到付费课', effects: [
        { type: 'resource', target: 'money', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你在免费课每个章节结尾都留了实战作业——"想要更深入的指导？付费课里有"。' },
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
      { id: 'c', text: '先用手机录一个临时版本发给学员', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 3, operation: 'add' },
      ], outcomeText: '你用手机录了个临时版先顶上，说明了情况。学员说"没事，内容才是最重要的"。' },
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
      { id: 'c', text: '先整理最精华的两章试水', effects: [
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你先整理了两章内容给出版社看样稿。对方很满意——后续推进就顺利了。' },
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
      { id: 'c', text: '在现场录一段祝福视频放进课程', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你在婚礼上录了一段祝福放在课程介绍页。学员说"看到老师这么有人情味，更想学了"。' },
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
      { id: 'c', text: '做一个阶梯定价：基础版、进阶版、VIP版', effects: [
        { type: 'resource', target: 'money', value: 12, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你做了三个版本。基础版跑量，VIP版做深度——不同需求不同价格。' },
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
      { id: 'c', text: '趁汇率低帮老客户囤一些他们常买的', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
      ], outcomeText: '你通知老客户汇率好先囤货。他们省了钱你赚了单——双赢。' },
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
      { id: 'c', text: '以后只发有保险的快递', effects: [
        { type: 'resource', target: 'money', value: -3, operation: 'add' },
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你之后的每一单都加了保价。多花一点钱但晚上能睡个好觉——值。' },
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
      { id: 'c', text: '顺便问问她有没有其他妈妈也需要', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
      ], outcomeText: '客户帮你介绍了她妈妈群的朋友。一传十——母婴圈的口碑来得快去得也快，必须维护好。' },
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
      { id: 'c', text: '去了解一下正规授权的条件和流程', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你主动去了解了正规授权怎么做。就算这次不用——以后总有一天会用上。' },
    ], repeatable: false,
  },
  // -- 宠物寄养额外事件 --
  { id: 'pc_007', category: 'crisis', industries: ['pet_care'], weight: 6,
    title: '两只狗打架了', narrative: '两只寄养的狗突然打了起来，家里一片狼藉。一只狗的耳朵被咬出了血，你得立刻处理。',
    choices: [
      { id: 'a', text: '立刻送医，承担医药费', effects: [
        { type: 'resource', target: 'money', value: -12, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '狗狗及时处理伤口没有大碍。你从此之后严格分开寄养的宠物。主人虽然心疼但理解。' },
      { id: 'b', text: '自己处理伤口，不上医院', effects: [
        { type: 'resource', target: 'reputation', value: -15, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' },
      ], outcomeText: '伤口看起来不大你简单包扎了。但主人接狗时发现了异样，非常生气。' },
      { id: 'c', text: '以后给每只宠物做性格评估再分组', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你建了一套宠物性格评估表。以后来的宠物先测试再分组——从源头避免冲突。' },
    ], repeatable: false,
  },
  { id: 'pc_008', category: 'opportunity', industries: ['pet_care'], weight: 6,
    title: '宠物烘焙合作', narrative: '一个做宠物烘焙的朋友提议合作：你在寄养服务里附加她的宠物蛋糕/零食，利润分成。客单价可以提高30%。',
    choices: [
      { id: 'a', text: '合作，丰富服务项目', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
      ], outcomeText: '宠物蛋糕大受欢迎。有主人在朋友圈晒图说"我家狗子过生日比我还隆重"。' },
      { id: 'b', text: '专注于寄养，不做增值服务', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你选择把一件事做好。寄养的口碑在本地圈子里数一数二。' },
      { id: 'c', text: '先找几个老客户免费试吃看看反馈', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你给几个老客户的狗狗免费尝了宠物蛋糕。反馈很好——正式上线就有订单了。' },
    ], repeatable: false,
  },
  { id: 'pc_009', category: 'narrative', industries: ['pet_care'], weight: 7,
    title: '救助流浪动物', narrative: '一个朋友在路边发现了一窝被遗弃的小猫，问你能不能暂时接收。你家已经有寄养的宠物了。',
    choices: [
      { id: 'a', text: '接收，帮它们找领养', effects: [
        { type: 'resource', target: 'energy', value: -20, operation: 'add' }, { type: 'resource', target: 'reputation', value: 20, operation: 'add' }, { type: 'resource', target: 'health', value: 10, operation: 'add' },
      ], outcomeText: '你花了一个月帮所有小猫找到了家。领养人们建了个群，定期发猫咪近况给你。' },
      { id: 'b', text: '帮它们联系救助组织', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你联系了靠谱的救助组织。它们得到了专业的照顾。' },
      { id: 'c', text: '帮它们拍好看的照片提高领养率', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你给小猫们拍了专业的领养照。好看的照片让两只猫当天就被认领了。' },
    ], repeatable: false,
  },
  { id: 'pc_010', category: 'neutral', industries: ['pet_care'], weight: 5,
    title: '要不要考宠物护理证书', narrative: '市面上有一个宠物护理的职业证书，考了会更专业——但要花一笔钱和大量时间学习。',
    choices: [
      { id: 'a', text: '考证，提升专业度', effects: [
        { type: 'resource', target: 'money', value: -10, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
      ], outcomeText: '拿到证书后你把照片挂在主页上。新客户说"有证的专业人士，放心多了"。' },
      { id: 'b', text: '经验比证书重要', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你没有考证但经验越来越丰富。老客户说"你比有证的还专业"。' },
      { id: 'c', text: '先自学一些免费课程看看难度', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你找了几个免费的在线课程先学着。觉得内容不难——可以考虑正式报名了。' },
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
      { id: 'c', text: '跟妈妈说实话但强调这是你想走的路', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 3, operation: 'add' },
      ], outcomeText: '你说"妈，我知道你担心，但这条路我想自己走"。她沉默了一会——但眼神里多了一点理解。' },
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
      { id: 'c', text: '让他儿子帮你做一些线上小任务试试', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你给侄子派了几个线上小任务。做得还不错——说不定以后是个好帮手。' },
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
      { id: 'c', text: '聊聊创业中遇到的困难让大家知道不是那么容易', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
      ], outcomeText: '你坦率地讲了一些难处。同学们反而佩服你——"至少你在做自己想做的事"。' },
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
      { id: 'c', text: '把工作环境布置得温馨一些让爸妈放心', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
      ], outcomeText: '你收拾干净了房间摆了几盆绿植。爸妈看了说"虽然小但挺像那么回事的"。' },
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
      { id: 'c', text: '先打听一下这个项目到底是什么', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'health', value: 3, operation: 'add' },
      ], outcomeText: '你通过多方渠道打听到了项目的真实内容。信息就是力量——知道真相之后再决定。' },
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
      { id: 'c', text: '问问客户能不能给一次修正的机会', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你诚恳地请求给一次修正机会。客户同意了——二次机会来之不易，你全力以赴。' },
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
      { id: 'c', text: '能不能把两个客户的时间错开', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'money', value: 18, operation: 'add' },
      ], outcomeText: '你尝试跟两边协调时间。老客户通情达理地让了一步——两边都接下了但累得够呛。' },
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
      { id: 'c', text: '卖一部分股份保留一部分', effects: [
        { type: 'resource', target: 'money', value: 15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你只卖了一半。买家没有完全掌控——你保留了参与权。折中方案两边都满意。' },
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
      { id: 'c', text: '帮他把真实数据整理出来看看问题到底在哪', effects: [
        { type: 'resource', target: 'energy', value: -15, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
      ], outcomeText: '你帮客户分析了真实数据，发现了业绩下滑的真正原因。不用造假——找到真问题就是解决方案。' },
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
      { id: 'c', text: '匿名给竞争对手一个善意的提醒', effects: [
        { type: 'resource', target: 'health', value: 10, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你匿名发了提醒给他。不知道他是谁——但你知道自己做了什么。良心比市场份额更值钱。' },
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
      { id: 'c', text: '找个正规的财务咨询一次', effects: [
        { type: 'resource', target: 'money', value: -6, operation: 'add' },
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
      ], outcomeText: '你找了正规的财务顾问咨询。原来合法的税务优化也有很多方式——不需要冒险。' },
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
      { id: 'c', text: '先多聊几句看看他到底懂不懂行', effects: [
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你问了他几个专业问题。答得还行——不是骗子。加了微信说有空详聊。' },
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
      { id: 'c', text: '用查找设备功能远程定位', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你用查找功能定位了手机，发现就在咖啡厅后厨。店员不小心收走了——虚惊一场。' },
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
      { id: 'c', text: '在社交平台上公开感谢这个推荐人', effects: [
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你发了条公开的感谢。虽然没有@具体的人——但他说"看到你的感谢了，很暖心"。' },
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
      { id: 'c', text: '在社交媒体上发帖帮它找领养', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '你发了一条领养信息。两天后有人联系你——流浪猫有了新家。' },
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
      { id: 'c', text: '下次来的时候多带一份帮后面的人付', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
        { type: 'resource', target: 'money', value: -2, operation: 'add' },
      ], outcomeText: '你第二天多买了一杯留在柜台上。善良是可以传递的——你成了链条上的一环。' },
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
      { id: 'c', text: '去图书馆或共享办公空间临时工作', effects: [
        { type: 'resource', target: 'money', value: -5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
      ], outcomeText: '你找了个共享办公空间。虽然花了点钱但有网了——总比完全停摆好。' },
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
      { id: 'c', text: '趁这时间学习一项新技能', effects: [
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'skill_point', target: 'skill', value: 1, operation: 'add' },
      ], outcomeText: '你利用封控期间学了一个新技能。等解封之后你发现自己变强了——坏事变好事。' },
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
      { id: 'c', text: '回去发了条朋友圈自嘲', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你在朋友圈写了被当外卖小哥的事。一堆人评论——"创业狗的日常""我也被认错过"。笑着笑着就哭了。' },
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
      { id: 'c', text: '录一段视频证明你是活的', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你发了一段自己喝咖啡的视频过去。客户笑了——"这下我信了，你不是AI"。这段小插曲反而拉近了距离。' },
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
      { id: 'c', text: '给神秘寄件人发条朋友圈问问', effects: [
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你发了条朋友圈问谁寄的。底下有人说"我寄的，加油"。是一个默默关注你很久的朋友。' },
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
      { id: 'c', text: '约一个好久不见的朋友去公园散步', effects: [
        { type: 'resource', target: 'health', value: 12, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你约了朋友。聊了一下午——发现他也想出来自己干。你们互相给了不少启发。' },
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
      { id: 'c', text: '买两杯奶茶请隔壁的同行喝', effects: [
        { type: 'resource', target: 'money', value: -3, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你多买了一杯请隔壁也在创业的朋友。他说"你也记得秋天第一杯奶茶啊"。创业者之间的默契。' },
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
      { id: 'c', text: '趁热度做一期直播跟新粉丝互动', effects: [
        { type: 'resource', target: 'reputation', value: 15, operation: 'add' },
        { type: 'resource', target: 'energy', value: -10, operation: 'add' },
      ], outcomeText: '你做了一次直播欢迎新粉丝。实时互动比文字回复亲切多了——很多路人转粉了。' },
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
      { id: 'c', text: '联合几个同行一起跟供应商谈价格', effects: [
        { type: 'resource', target: 'money', value: 5, operation: 'add' },
        { type: 'resource', target: 'energy', value: -8, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 5, operation: 'add' },
      ], outcomeText: '你拉了几个同行一起跟供应商谈。批量拿货价格好谈多了——抱团取暖在什么时候都好使。' },
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
      { id: 'c', text: '跟译者合作出一个官方双语版', effects: [
        { type: 'resource', target: 'reputation', value: 18, operation: 'add' },
        { type: 'resource', target: 'energy', value: -12, operation: 'add' },
      ], outcomeText: '你和译者合作优化了翻译。海外版比原版还要好——好的翻译是二次创作。' },
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
      { id: 'c', text: '请老客户帮你写几封推荐信', effects: [
        { type: 'resource', target: 'reputation', value: 10, operation: 'add' },
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
      ], outcomeText: '老客户帮你写了几封真诚的推荐信。平台看到这么多好评——反而给你加了权重。' },
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
      { id: 'c', text: '做一件和工作完全无关的小事', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: 5, operation: 'add' },
      ], outcomeText: '你去阳台浇了浇花，整理了书架，做了一些随手就能完成的小事。做完之后心情莫名好了。' },
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
      { id: 'c', text: '先把教程保存下来纳入学习计划', effects: [
        { type: 'resource', target: 'energy', value: 3, operation: 'add' },
      ], outcomeText: '你把它加入了本周的学习清单。定个明确的时间学——不放在"以后再说"里烂掉。' },
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
      { id: 'c', text: '一大早先把灵感整理成完整方案', effects: [
        { type: 'resource', target: 'energy', value: -5, operation: 'add' },
        { type: 'resource', target: 'reputation', value: 12, operation: 'add' },
      ], outcomeText: '你花了一个上午把半夜的灵感变成了可执行的方案。灵感不整理就只是灵感——整理完就是产品。' },
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
      { id: 'c', text: '放点音乐边收拾边放松', effects: [
        { type: 'resource', target: 'health', value: 8, operation: 'add' },
        { type: 'resource', target: 'energy', value: 3, operation: 'add' },
      ], outcomeText: '你放了喜欢的音乐一边收拾一边放松。打扫也可以是种享受——关键是心态。' },
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
      { id: 'c', text: '在社交平台上分享一下这个好消息', effects: [
        { type: 'resource', target: 'reputation', value: 8, operation: 'add' },
        { type: 'resource', target: 'health', value: 3, operation: 'add' },
      ], outcomeText: '你发了条动态分享完成任务的喜悦。好多人点赞——独乐乐不如众乐乐。' },
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
      { id: 'c', text: '以后设置自动缴费提醒', effects: [
        { type: 'resource', target: 'energy', value: -3, operation: 'add' },
        { type: 'resource', target: 'health', value: 5, operation: 'add' },
      ], outcomeText: '你在手机上设了所有账单的提醒。一次教训教会你的事——以后不会再忘了。' },
    ], repeatable: false,
  },
  // ======== 幸运事件 ========
  { id: 'lucky_001', category: 'opportunity', industries: 'all', weight: 6,
    title: '捡到一个钱包', narrative: '在路边捡到一个钱包，里面有现金和身份证。四下无人。',
    choices: [
      { id: 'a', text: '送到派出所归还失主', effects: [{ type: 'resource', target: 'reputation', value: 12, operation: 'add' }, { type: 'resource', target: 'health', value: 8, operation: 'add' }], outcomeText: '失主找到你当面感谢，原来是个小企业主。他说人品好的人值得帮，主动给你介绍了客户。' },
      { id: 'b', text: '交给路边商家等失主来找', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: 3, operation: 'add' }], outcomeText: '你交给店家后走了。不知道后来怎么样了——但你做了对的事。' },
      { id: 'c', text: '按身份证地址寄回去', effects: [{ type: 'resource', target: 'reputation', value: 8, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' }], outcomeText: '你自付邮费寄回去。几天后收到一条短信：好人一生平安。' },
    ], repeatable: false,
  },
  { id: 'lucky_002', category: 'opportunity', industries: 'all', weight: 6,
    title: '中了一个小奖', narrative: '你随手买的一张彩票/扭蛋/抽奖居然中了个小奖——5000块钱。',
    choices: [
      { id: 'a', text: '存起来当作应急基金', effects: [{ type: 'resource', target: 'money', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你把钱存了起来。虽然不多但也是意外之喜——应急基金又厚了一点。' },
      { id: 'b', text: '请几个好朋友吃一顿庆祝', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' }], outcomeText: '你请了几个朋友吃了顿好的。朋友说你难得大方一次。开心比钱重要。' },
      { id: 'c', text: '把钱投给一个你看好的小项目', effects: [{ type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你投给了一个朋友的小项目。他说你眼光不错——回报比利息高多了。' },
    ], repeatable: false,
  },
  { id: 'lucky_003', category: 'narrative', industries: 'all', weight: 7,
    title: '陌生人帮你付了咖啡', narrative: '在咖啡店排队时发现忘带手机没法付款，后面的人说我帮你付，下次你也帮别人。',
    choices: [
      { id: 'a', text: '记下他的联系方式以后回报', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'health', value: 8, operation: 'add' }], outcomeText: '你们加了微信。他说不急等你有空请我喝一杯就行。意外多了个朋友。' },
      { id: 'b', text: '当场回去拿了现金还给他', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 3, operation: 'add' }], outcomeText: '你跑回去取了现金还给他。他说你也太认真了——但笑得很开心。' },
      { id: 'c', text: '以后每次来都多带一杯请别人', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -2, operation: 'add' }], outcomeText: '你养成了多带一杯咖啡的习惯。咖啡店老板说你是我见过最暖的客人。' },
    ], repeatable: false,
  },
  { id: 'lucky_004', category: 'opportunity', industries: 'all', weight: 5,
    title: '旧物卖出了高价', narrative: '你收拾屋子翻出几年前买的一件东西，随手挂到二手平台上——没想到有人出高价抢着要。',
    choices: [
      { id: 'a', text: '卖给他们顺便聊聊为什么值钱', effects: [{ type: 'resource', target: 'money', value: 12, operation: 'add' }, { type: 'resource', target: 'reputation', value: 3, operation: 'add' }], outcomeText: '你顺便聊了几句发现这是个收藏圈子。以后多留意——说不定是个商机。' },
      { id: 'b', text: '不卖了留着当个纪念', effects: [{ type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你看了看那件东西觉得留着也挺好。有些东西价值不在钱上。' },
      { id: 'c', text: '翻翻还有没有其他值钱的旧货', effects: [{ type: 'resource', target: 'money', value: 8, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' }], outcomeText: '你花了一下午整理旧物又翻出几件能卖的东西。断舍离顺便赚钱——一举两得。' },
    ], repeatable: false,
  },
  { id: 'lucky_005', category: 'narrative', industries: 'all', weight: 6,
    title: '收到匿名礼物', narrative: '快递员送来一个包裹，里面是一盒精致的茶叶——寄件人不详。附的卡片写着谢谢你一直以来的帮助。',
    choices: [
      { id: 'a', text: '发朋友圈问是谁送的', effects: [{ type: 'resource', target: 'reputation', value: 8, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你在朋友圈问了之后好几个人说是自己寄的——你才发现自己帮过这么多人。' },
      { id: 'b', text: '默默收下把这份温暖记在心里', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }], outcomeText: '你把茶叶泡了一杯。入口很香——善意的味道。你不知道是谁但你想以后也要这样对待别人。' },
      { id: 'c', text: '以后也给客户或朋友寄小礼物', effects: [{ type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'energy', value: -3, operation: 'add' }], outcomeText: '你开始定期给合作过的客户寄小礼物。有人回寄了你——善意是可以传染的。' },
    ], repeatable: false,
  },
  { id: 'lucky_006', category: 'opportunity', industries: 'all', weight: 5,
    title: '刚好赶上限时优惠', narrative: '你正打算买一件工作急需的设备，刚好赶上双十一限时大促，省了30%。',
    choices: [
      { id: 'a', text: '趁优惠把需要的一起买了', effects: [{ type: 'resource', target: 'money', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' }], outcomeText: '你把购物清单上的东西一并买了。省了一大笔——机会抓得好。' },
      { id: 'b', text: '只买最急需的不乱花钱', effects: [{ type: 'resource', target: 'money', value: 5, operation: 'add' }, { type: 'resource', target: 'health', value: 3, operation: 'add' }], outcomeText: '你只买了最需要的那一件。不贪——省下的钱比花掉的多。' },
      { id: 'c', text: '把优惠信息分享给需要的朋友', effects: [{ type: 'resource', target: 'reputation', value: 8, operation: 'add' }, { type: 'resource', target: 'health', value: 3, operation: 'add' }], outcomeText: '你转发了优惠信息。朋友们说你真是省钱小助手。' },
    ], repeatable: false,
  },
  // ======== 倒霉事件 ========
  { id: 'unlucky_001', category: 'crisis', industries: 'all', weight: 6,
    title: '被鸟屎砸中', narrative: '就快到客户公司了，一只鸟精准地命中了你的肩膀。外套上一大块白色污渍——离约好的时间还有10分钟。',
    choices: [
      { id: 'a', text: '赶紧找最近的洗手间清理', effects: [{ type: 'resource', target: 'energy', value: -8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 3, operation: 'add' }], outcomeText: '你清理得差不多刚好赶上。客户没发现——你默默告诉自己：今天真倒霉但至少没搞砸。' },
      { id: 'b', text: '把外套翻面穿凑合一下', effects: [{ type: 'resource', target: 'reputation', value: -5, operation: 'add' }], outcomeText: '你翻面穿上了。客户盯着你的衣服看了一会儿但没说什么——尴尬但过了。' },
      { id: 'c', text: '坦诚跟客户说明迟到10分钟', effects: [{ type: 'resource', target: 'health', value: 5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '你老实说明了情况。客户笑了——没事我们有一次更夸张的。坦诚反而拉近了距离。' },
    ], repeatable: false,
  },
  { id: 'unlucky_002', category: 'crisis', industries: 'all', weight: 5,
    title: '踩到水坑鞋全湿了', narrative: '一大早出门就踩进一个隐藏的水坑，鞋袜全湿。回去换又来不及——一天的开始在滴着水。',
    choices: [
      { id: 'a', text: '去便利店买双拖鞋凑合', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'money', value: -3, operation: 'add' }], outcomeText: '你穿了双拖鞋去上班。虽然有点滑稽但至少脚不湿了——舒适比面子重要。' },
      { id: 'b', text: '硬着头皮穿湿鞋撑一天', effects: [{ type: 'resource', target: 'health', value: -8, operation: 'add' }], outcomeText: '你穿了一整天湿鞋。晚上回家脚都泡白了——下次一定留意路面。' },
      { id: 'c', text: '回家换了鞋然后调整今天的安排', effects: [{ type: 'resource', target: 'health', value: 8, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你回家换了鞋顺便调整了计划。耽误了半小时但后面的时间都舒服了。' },
    ], repeatable: false,
  },
  { id: 'unlucky_003', category: 'neutral', industries: 'all', weight: 6,
    title: '走错路耽误了半小时', narrative: '去一个新客户那里，导航带你走了一条死胡同。绕了半天才找到正确的路——已经迟到15分钟了。',
    choices: [
      { id: 'a', text: '路上给客户打电话说明情况', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: -3, operation: 'add' }], outcomeText: '你提前打了电话。客户说没关系我刚好处理点别的。提前沟通永远不会错。' },
      { id: 'b', text: '到了之后诚恳道歉并送个小礼物', effects: [{ type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 8, operation: 'add' }], outcomeText: '你带了杯咖啡道歉。客户说你太客气了——以后第一印象里你是那个很认真的。' },
      { id: 'c', text: '以后提前查好路线留足余量', effects: [{ type: 'resource', target: 'energy', value: -3, operation: 'add' }, { type: 'resource', target: 'health', value: 3, operation: 'add' }], outcomeText: '你吸取了教训。以后每次出门都提前10分钟——好习惯从一次迟到养成的。' },
    ], repeatable: false,
  },
  // ======== 天气事件 ========
  { id: 'weather_001', category: 'neutral', industries: 'all', weight: 7,
    title: '大暴雨无法出门', narrative: '外面下着瓢泼大雨，排水系统都快扛不住了。你本来今天要出去办好几件事——现在只能待在家。',
    choices: [
      { id: 'a', text: '把所有能线上处理的事先做了', effects: [{ type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '你把能远程处理的事都搞定了。效率不比出门差——有些事其实根本不用跑一趟。' },
      { id: 'b', text: '干脆给自己放个雨假', effects: [{ type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }], outcomeText: '你泡了杯热茶窝在沙发上看书。外面狂风暴雨里面岁月静好——偶尔停下来也挺好。' },
      { id: 'c', text: '在手机上联系客户说明改期', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你挨个通知了客户改期。大家都表示理解——这种天气谁都不想出门。' },
    ], repeatable: true,
  },
  { id: 'weather_002', category: 'crisis', industries: 'all', weight: 5,
    title: '空调坏了热得无法工作', narrative: '夏天最热的一天，空调突然罢工。房间里的温度半小时内飙升到35度——你汗流浃背，完全无法集中注意力。',
    choices: [
      { id: 'a', text: '去图书馆或咖啡厅避暑工作', effects: [{ type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你在咖啡厅待了一天。空调凉快效率反而高了——换个环境有时候就是换个心情。' },
      { id: 'b', text: '找师傅来修今天先摆烂', effects: [{ type: 'resource', target: 'money', value: -8, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你叫了维修师傅。修了两小时终于好了——花钱买清凉，值。' },
      { id: 'c', text: '拿风扇吹着凑合干', effects: [{ type: 'resource', target: 'energy', value: -10, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' }], outcomeText: '你开着风扇硬顶着干了一天。效率勉强及格——但体验极差。以后一定定期保养电器。' },
    ], repeatable: false,
  },
  { id: 'weather_003', category: 'narrative', industries: 'all', weight: 6,
    title: '初雪', narrative: '今年的第一场雪。窗外白茫茫一片，你突然想起小时候下雪天不用上学的美好记忆。',
    choices: [
      { id: 'a', text: '放下工作去外面走走感受一下', effects: [{ type: 'resource', target: 'health', value: 12, operation: 'add' }, { type: 'resource', target: 'energy', value: 8, operation: 'add' }], outcomeText: '你在雪地里走了走拍了几张照片。回来心情好多了——下雪天值得被认真对待。' },
      { id: 'b', text: '拍几张照片发给家人看看', effects: [{ type: 'resource', target: 'health', value: 8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 3, operation: 'add' }], outcomeText: '你拍了雪景发给妈妈，她回了句真好看注意保暖。小小的互动——很暖。' },
      { id: 'c', text: '趁心情好把拖了很久的事做了', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '雪天的好心情被你转化成了生产力。拖着的事终于清了——爽。' },
    ], repeatable: false,
  },
  // ======== 陌生人事件 ========
  { id: 'stranger_001', category: 'narrative', industries: 'all', weight: 7,
    title: '地铁上帮助了一个人', narrative: '地铁上看到一个老人拿着手机求助——他不知道怎么用导航。你帮他设置好了路线。',
    choices: [
      { id: 'a', text: '一直陪他到要下的站', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '你陪他到站，他说你这年轻人真好。你发现帮助别人自己也会开心——这不是鸡汤是事实。' },
      { id: 'b', text: '帮他写好步骤让他照着走', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 3, operation: 'add' }], outcomeText: '你写了几步简单的指引。他说你写的比我儿子讲的还清楚。' },
      { id: 'c', text: '帮他叫了一辆车', effects: [{ type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: 8, operation: 'add' }], outcomeText: '你帮他叫了车付了钱。老人说不用——你说没关系下次你帮别人就好。' },
    ], repeatable: false,
  },
  { id: 'stranger_002', category: 'neutral', industries: 'all', weight: 6,
    title: '遇到有人推销', narrative: '走在路上有人热情地上来推销，让你了解一下他们最新的产品。',
    choices: [
      { id: 'a', text: '礼貌拒绝继续赶路', effects: [{ type: 'resource', target: 'energy', value: -2, operation: 'add' }], outcomeText: '你微笑着说不用了谢谢。然后继续走——保持友善也不需要妥协。' },
      { id: 'b', text: '停下来聊两句看看是什么', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你听了一分钟发现是个不错的推广方式。虽然没买但学到了——推销员的套路口才值得研究。' },
      { id: 'c', text: '给他一些关于推销方式的建议', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你以专业人士的角度给了他一些建议。他说从来没人这样跟我说过谢谢。' },
    ], repeatable: false,
  },
  { id: 'stranger_003', category: 'narrative', industries: 'all', weight: 7,
    title: '偶遇大学同学', narrative: '在商场里突然被人拍了一下肩膀——回头一看是大学毕业后就没见过的老同学。',
    choices: [
      { id: 'a', text: '约个咖啡好好叙旧', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 8, operation: 'add' }], outcomeText: '你们找了家咖啡馆聊了一下午。他说他也想出来单干——你们约了下次详细交流。' },
      { id: 'b', text: '加个微信以后约', effects: [{ type: 'resource', target: 'energy', value: -2, operation: 'add' }], outcomeText: '你们加了微信匆匆告别。不过至少恢复了联系——人脉就是这样慢慢积累的。' },
      { id: 'c', text: '聊聊各自的工作看有没有合作机会', effects: [{ type: 'resource', target: 'reputation', value: 12, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你们的行业居然有交集。他说我有一个客户可能正好需要你这种服务。意外的商机。' },
    ], repeatable: false,
  },
  // ======== 科技事件 ========
  { id: 'tech_001', category: 'crisis', industries: 'all', weight: 6,
    title: '电脑系统崩溃了', narrative: '正在赶一个紧急项目，电脑突然蓝屏了。重启之后——发现文件没保存。一小时的工作白费了。',
    choices: [
      { id: 'a', text: '深吸一口气重新来过', effects: [{ type: 'resource', target: 'energy', value: -12, operation: 'add' }, { type: 'resource', target: 'health', value: -3, operation: 'add' }], outcomeText: '你重新做了一遍——第二遍反而发现第一遍有个小错误。塞翁失马。' },
      { id: 'b', text: '先修电脑确保不会再崩', effects: [{ type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你找了问题根源——是内存条松了。修好之后顺便清了下灰——电脑跑得更快了。' },
      { id: 'c', text: '以后养成随时保存的习惯', effects: [{ type: 'resource', target: 'energy', value: -3, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你设置了自动保存。以后再也不用担心了——教训是最好的老师。' },
    ], repeatable: false,
  },
  { id: 'tech_002', category: 'opportunity', industries: 'all', weight: 6,
    title: '发现一个效率神器', narrative: '无意间看到一个博主推荐了一个效率工具，试了一下发现——之前的重复工作原来可以一键完成。',
    choices: [
      { id: 'a', text: '花时间学会它并马上应用到工作中', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 8, operation: 'add' }], outcomeText: '你学会了新工具——之前需要两小时的工作现在20分钟搞定。以后要常留意新工具。' },
      { id: 'b', text: '分享给同行朋友们', effects: [{ type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -3, operation: 'add' }], outcomeText: '你在群里分享了工具。很多人说太需要了——分享让好东西传播开来。' },
      { id: 'c', text: '研究下还有没有类似的工具', effects: [{ type: 'resource', target: 'energy', value: -12, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'skill_point', target: 'skill', value: 1, operation: 'add' }], outcomeText: '你顺便研究了一整套工具链。整个工作流程都被优化了——以后省下的是大量时间。' },
    ], repeatable: false,
  },
  // ======== 健康事件 ========
  { id: 'health_001', category: 'crisis', industries: 'all', weight: 7,
    title: '感冒了浑身难受', narrative: '季节交替你感冒了，鼻子塞住头昏脑涨。手头还有一堆工作要做——但身体在强烈建议你躺下。',
    choices: [
      { id: 'a', text: '好好休息一天养病', effects: [{ type: 'resource', target: 'health', value: 20, operation: 'add' }, { type: 'resource', target: 'energy', value: 10, operation: 'add' }], outcomeText: '你躺了一天。第二天精神好了很多——生病时硬撑只会拖更久。' },
      { id: 'b', text: '吃点药继续干轻量的活', effects: [{ type: 'resource', target: 'energy', value: -8, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' }], outcomeText: '你勉强干了些轻活。效率不高但至少没完全停摆——不过感冒拖得比你想象中久。' },
      { id: 'c', text: '煮点姜汤泡个热水澡', effects: [{ type: 'resource', target: 'health', value: 12, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' }], outcomeText: '你好好照顾了自己一番。感冒第二天就好了大半——善待自己的身体是最值得的投资。' },
    ], repeatable: true,
  },
  { id: 'health_002', category: 'narrative', industries: 'all', weight: 6,
    title: '开始跑步', narrative: '某天晚上路过公园看到很多人在跑步，你突然想——我已经多久没运动了？鬼使神差地去买了双跑鞋。',
    choices: [
      { id: 'a', text: '从此每周跑三次', effects: [{ type: 'resource', target: 'health', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: 5, operation: 'add' }, { type: 'resource', target: 'money', value: -5, operation: 'add' }], outcomeText: '你坚持跑步一个月后精力充沛了很多。有人说你最近状态不一样了。' },
      { id: 'b', text: '偶尔跑一跑放松心情', effects: [{ type: 'resource', target: 'health', value: 8, operation: 'add' }], outcomeText: '你偶尔跑一跑。不强求频率——但每次跑完都觉得整个人清爽了不少。' },
      { id: 'c', text: '加入跑团交些新朋友', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 8, operation: 'add' }], outcomeText: '你加入了本地跑团。认识了一群热爱跑步的人——圈子扩大了不少。' },
    ], repeatable: false,
  },
  // ======== 社交事件 ========
  { id: 'social_001', category: 'narrative', industries: 'all', weight: 7,
    title: '参加朋友婚礼', narrative: '大学室友结婚邀请了你。婚礼上很多老同学都会来——有些人很久没见了。',
    choices: [
      { id: 'a', text: '好好享受婚礼和叙旧', effects: [{ type: 'resource', target: 'health', value: 12, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '婚礼很温馨，你跟老同学聊得很开心。有人问你现在在干吗——你自豪地说了自己的项目。' },
      { id: 'b', text: '借机拓展一下人脉', effects: [{ type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你发现一个同学的朋友恰好是你行业的潜在客户。聊着聊着——意外加了几个合作意向。' },
      { id: 'c', text: '送上红包和祝福就到场感受一下', effects: [{ type: 'resource', target: 'money', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你真诚地祝福了新人。室友说你来了我就开心了——有些关系不需要功利。' },
    ], repeatable: false,
  },
  { id: 'social_002', category: 'neutral', industries: 'all', weight: 6,
    title: '朋友找你借钱', narrative: '一个好朋友说他最近周转不开想跟你借一万块钱。你知道他不是乱花钱的人——但你自己的资金也不算宽裕。',
    choices: [
      { id: 'a', text: '力所能及借一部分', effects: [{ type: 'resource', target: 'money', value: -8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 8, operation: 'add' }, { type: 'resource', target: 'health', value: 3, operation: 'add' }], outcomeText: '你借了一半。他说够了——等周转开了马上还。朋友之间量力而行就好。' },
      { id: 'b', text: '帮他分析财务状况找出路', effects: [{ type: 'resource', target: 'energy', value: -8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }], outcomeText: '你帮他梳理了一下收支发现了可以优化的地方。他说你比我会计都专业——不用借钱问题就解决了。' },
      { id: 'c', text: '委婉拒绝但给他介绍兼职机会', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: -3, operation: 'add' }], outcomeText: '你帮他联系了一个短期项目。他说虽然没借到钱但你给了我更好的出路。' },
    ], repeatable: false,
  },
  { id: 'social_003', category: 'narrative', industries: 'all', weight: 6,
    title: '被拉去相亲', narrative: '你妈的朋友说她熟人条件不错想介绍给你。你妈已经把你的微信发出去了——对方已经在加你了。',
    choices: [
      { id: 'a', text: '去见面聊聊就当交朋友', effects: [{ type: 'resource', target: 'health', value: 8, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你们见了一面。虽然没有火花但聊得还行——对方做的事还挺有意思说不定有业务交集。' },
      { id: 'b', text: '礼貌回复但说明现在重心在工作', effects: [{ type: 'resource', target: 'energy', value: 3, operation: 'add' }], outcomeText: '你坦诚说了现在的情况。对方表示理解——那就先当朋友吧。' },
      { id: 'c', text: '跟妈妈说下次别擅自做主了', effects: [{ type: 'resource', target: 'health', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: -3, operation: 'add' }], outcomeText: '你跟妈妈打了电话表明态度。她说好好好不管你了——语气里藏着不甘但你知道边界很重要。' },
    ], repeatable: false,
  },
  // ======== 灵感事件 ========
  { id: 'inspire_001', category: 'opportunity', industries: 'all', weight: 7,
    title: '洗澡时的灵感', narrative: '晚上洗澡的时候脑子里突然闪过一个想法——如果能这样做，你的产品可能会大不一样。水还在流，你愣住了。',
    choices: [
      { id: 'a', text: '洗完立刻记下来然后马上做', effects: [{ type: 'resource', target: 'energy', value: -12, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }], outcomeText: '你擦干头发冲出来写了两页笔记。这个灵感后来变成了你最大的差异化卖点。' },
      { id: 'b', text: '在手机上记个大概明天再想', effects: [{ type: 'resource', target: 'energy', value: -3, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '你在备忘录里草草记了几笔。第二天起来看了很久——确实是个好想法但有些细节需要推敲。' },
      { id: 'c', text: '找人聊聊这个想法验证可行性', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }], outcomeText: '你找了朋友聊了聊。他指出了一些你没考虑到的问题——修改后的方案更扎实了。' },
    ], repeatable: true,
  },
  { id: 'inspire_002', category: 'narrative', industries: 'all', weight: 6,
    title: '看了一部很棒的纪录片', narrative: '难得放松看了一部关于创业者的纪录片。里面有一句话特别戳中你——如果你知道自己不会失败，你会做什么？',
    choices: [
      { id: 'a', text: '把那个问题写下来贴在墙上', effects: [{ type: 'resource', target: 'energy', value: 5, operation: 'add' }, { type: 'resource', target: 'health', value: 8, operation: 'add' }], outcomeText: '你把那句话贴在了电脑旁边。每天早上看到——比喝咖啡还提神。' },
      { id: 'b', text: '写一篇观后感分享出去', effects: [{ type: 'resource', target: 'reputation', value: 12, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你写了篇观后感。有人说看了你的分享才去看的谢谢。' },
      { id: 'c', text: '重新审视自己的方向做个大决定', effects: [{ type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'health', value: 3, operation: 'add' }], outcomeText: '纪录片让你重新思考了自己当初为什么开始。不忘初心四个字终于有了实感。' },
    ], repeatable: false,
  },
  { id: 'inspire_003', category: 'opportunity', industries: 'all', weight: 6,
    title: '和小孩聊天开窍了', narrative: '跟邻居家五岁的小孩聊了几句天，他问你的工作能让很多人开心吗？你很认真地想了想。',
    choices: [
      { id: 'a', text: '从用户的角度重新设计产品', effects: [{ type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }], outcomeText: '你以让人开心为标准重新审视了一遍。发现有些地方确实可以做得更好——改了之后反馈好了很多。' },
      { id: 'b', text: '把这段对话发成一条动态', effects: [{ type: 'resource', target: 'reputation', value: 8, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你发了朋友圈。好多人评论小朋友说出了问题的本质。' },
      { id: 'c', text: '以后定期问自己用户会开心吗', effects: [{ type: 'resource', target: 'health', value: 8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '你把这句话当成了做决定的标尺。简单的问题有时候比复杂的分析更好用。' },
    ], repeatable: false,
  },

  // ======== 宠物寄养补充事件 ========
  { id: 'pc_011', category: 'opportunity', industries: ['pet_care'], weight: 7,
    title: '一个客户想长期包月寄养', narrative: '一个经常出差的白领想跟你签长期寄养合同——每月固定费用她出差时就把狗放你这。稳定的收入但需要你随时有空。',
    choices: [
      { id: 'a', text: '签包月合同稳定现金流', effects: [{ type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -10, operation: 'add' }], outcomeText: '包月合同签了。每月固定收入进账——虽然要随叫随到但财务上安心了不少。' },
      { id: 'b', text: '按次收费保持灵活性', effects: [{ type: 'resource', target: 'energy', value: 5, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你选择按次收费。虽然收入不那么稳定但保留了自由——你随时可以拒绝。' },
      { id: 'c', text: '先试一个月看看合不合适', effects: [{ type: 'resource', target: 'money', value: 8, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }, { type: 'resource', target: 'health', value: 3, operation: 'add' }], outcomeText: '先试了一个月。狗狗适应得不错——三个月后再谈长期的事。' },
    ], repeatable: false,
  },
  { id: 'pc_012', category: 'crisis', industries: ['pet_care'], weight: 6,
    title: '狗狗拆家了', narrative: '一只精力旺盛的哈士奇趁你出门买菜把客厅拆了——沙发咬破了拖鞋全军覆没。你推开门的那一瞬间差点哭出来。',
    choices: [
      { id: 'a', text: '自认倒霉自己收拾', effects: [{ type: 'resource', target: 'energy', value: -18, operation: 'add' }, { type: 'resource', target: 'money', value: -8, operation: 'add' }], outcomeText: '你花了一下午收拾残局。以后出门前一定要多遛两圈——能量没释放完的哈士奇就是移动拆家机器。' },
      { id: 'b', text: '跟主人沟通看能不能分担损失', effects: [{ type: 'resource', target: 'reputation', value: 5, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你跟主人说明了情况。主人说它在家就这样——主动提出多付一些寄养费补偿。' },
      { id: 'c', text: '以后只接小型犬减少风险', effects: [{ type: 'resource', target: 'health', value: 8, operation: 'add' }, { type: 'resource', target: 'reputation', value: 3, operation: 'add' }], outcomeText: '你调整了接单策略——以后只接小型犬和猫咪。虽然收入少了但心不累了。' },
    ], repeatable: false,
  },
  { id: 'pc_013', category: 'narrative', industries: ['pet_care'], weight: 8,
    title: '一只老狗的最后几天', narrative: '一个客户送来了一只14岁的老金毛，主人要去外地处理急事要寄养一周。但你看得出来——这只老狗的时日可能不多了。',
    choices: [
      { id: 'a', text: '格外用心照顾给它最好的最后时光', effects: [{ type: 'resource', target: 'health', value: 12, operation: 'add' }, { type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 18, operation: 'add' }], outcomeText: '你每天给它按摩说好话拍很多照片发给主人。主人说这些照片是她这辈子最珍贵的礼物。' },
      { id: 'b', text: '按正常标准照顾不给特殊待遇', effects: [{ type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你按正常标准照顾了它一周。它安全回到了主人身边——但你也觉得这只老狗眼里有故事。' },
      { id: 'c', text: '建议主人找个有医疗条件的寄养', effects: [{ type: 'resource', target: 'reputation', value: 12, operation: 'add' }, { type: 'resource', target: 'energy', value: -5, operation: 'add' }], outcomeText: '你坦诚说自己这里没有医疗条件帮他联系了一家有兽医坐镇的寄养。你的真诚让他很感动。' },
    ], repeatable: false,
  },
  { id: 'pc_014', category: 'opportunity', industries: ['pet_care'], weight: 6,
    title: '有人想合伙开一家宠物店', narrative: '一个常客看到了你寄养服务的口碑，问你有没有兴趣一起开一家正规的宠物寄养店——她出资金你出技术和服务。',
    choices: [
      { id: 'a', text: '接受合伙做大做强', effects: [{ type: 'resource', target: 'money', value: 25, operation: 'add' }, { type: 'resource', target: 'reputation', value: 15, operation: 'add' }, { type: 'resource', target: 'energy', value: -20, operation: 'add' }], outcomeText: '你们签了合伙协议找了店面开始装修。从家庭寄养升级到正规店铺——压力和机遇一样大。' },
      { id: 'b', text: '只接受投资但不合伙经营', effects: [{ type: 'resource', target: 'money', value: 15, operation: 'add' }, { type: 'resource', target: 'health', value: 5, operation: 'add' }], outcomeText: '你接受了她的投资但保持独立经营。她只分红不管事——这是你最理想的合作方式。' },
      { id: 'c', text: '婉拒但感谢她的信任', effects: [{ type: 'resource', target: 'health', value: 10, operation: 'add' }, { type: 'resource', target: 'reputation', value: 5, operation: 'add' }], outcomeText: '你说目前还是想保持小规模。她表示理解——等你想做大了一定找我。' },
    ], repeatable: false,
  },
  { id: 'pc_015', category: 'crisis', industries: ['pet_care'], weight: 5,
    title: '主人寄养完不来接', narrative: '约定好的接狗日期到了——主人没出现。电话打不通微信不回。又等了两天还是没消息——狗开始焦虑了你也着急。',
    choices: [
      { id: 'a', text: '继续照顾同时多方联系主人', effects: [{ type: 'resource', target: 'energy', value: -15, operation: 'add' }, { type: 'resource', target: 'reputation', value: 10, operation: 'add' }], outcomeText: '你通过紧急联系人终于找到主人——她出了车祸在医院手机也坏了。她哭着感谢你的坚持。' },
      { id: 'b', text: '报警备案然后寻找领养', effects: [{ type: 'resource', target: 'energy', value: -12, operation: 'add' }, { type: 'resource', target: 'health', value: -5, operation: 'add' }], outcomeText: '你在警局备了案。两周后还是没消息——你帮狗狗找到了新的领养家庭。虽然这是最坏的结局但至少狗过得不错。' },
      { id: 'c', text: '在朋友圈发动大家一起找人', effects: [{ type: 'resource', target: 'reputation', value: 10, operation: 'add' }, { type: 'resource', target: 'energy', value: -8, operation: 'add' }], outcomeText: '你在宠友圈发了寻人启事。三天后主人主动联系了——她只是手机丢了换新号忘了保存你的联系方式。一场虚惊。' },
    ], repeatable: false,
  },
];
