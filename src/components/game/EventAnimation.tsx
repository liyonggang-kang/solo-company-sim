import type { GameEvent, SocialEvent } from '../../engine/types';

interface EventAnimationProps {
  event: GameEvent | SocialEvent;
  isSocial?: boolean;
}

interface Scene {
  elements: { emoji: string; className: string; style?: React.CSSProperties }[];
  bgGradient: string;
}

function getScene(event: GameEvent | SocialEvent): Scene {
  const title = event.title;
  const category = 'category' in event ? event.category : 'neutral';
  const t = title; // shorthand

  // 身心俱疲 / 健康危机
  if (t.includes('身心俱疲') || t.includes('失眠') || t.includes('累了') || t.includes('感冒') || t.includes('体检') || t.includes('崩溃')) {
    return {
      elements: [
        { emoji: '😩', className: 'animate-exhausted', style: { fontSize: '3.5rem' } },
        { emoji: '💤', className: 'animate-float', style: { position: 'absolute', top: '10%', right: '15%', fontSize: '1.5rem' } },
        { emoji: '☕', className: 'animate-particle', style: { position: 'absolute', top: '60%', left: '20%', fontSize: '1.2rem', animationDelay: '0.5s' } },
        { emoji: '💧', className: 'animate-particle', style: { position: 'absolute', top: '30%', left: '70%', fontSize: '1rem', animationDelay: '1s' } },
        { emoji: '🕯️', className: 'animate-particle', style: { position: 'absolute', top: '20%', left: '35%', fontSize: '1rem', animationDelay: '1.5s' } },
      ], bgGradient: 'from-blue-50 via-white to-white',
    };
  }

  // 爆款/火了/成功
  if (t.includes('爆款') || t.includes('火了') || t.includes('10w+') || t.includes('首页') || t.includes('中奖') || t.includes('高价')) {
    return {
      elements: [
        { emoji: '🚀', className: 'animate-viral', style: { fontSize: '3.5rem' } },
        { emoji: '✨', className: 'animate-particle', style: { position: 'absolute', top: '15%', right: '20%', fontSize: '1.5rem', animationDelay: '0.2s' } },
        { emoji: '🔥', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '15%', fontSize: '1.3rem', animationDelay: '0.6s' } },
        { emoji: '💎', className: 'animate-particle', style: { position: 'absolute', top: '30%', right: '30%', fontSize: '1.2rem', animationDelay: '0.4s' } },
        { emoji: '🎉', className: 'animate-particle', style: { position: 'absolute', top: '60%', left: '60%', fontSize: '1.4rem', animationDelay: '0.8s' } },
      ], bgGradient: 'from-amber-50 via-white to-white',
    };
  }

  // AI/科技
  if (t.includes('AI') || t.includes('机器') || t.includes('算法') || t.includes('电脑') || t.includes('系统') || t.includes('效率')) {
    return {
      elements: [
        { emoji: '🤖', className: 'animate-robot', style: { fontSize: '3.5rem' } },
        { emoji: '💻', className: 'animate-float', style: { position: 'absolute', top: '20%', right: '20%', fontSize: '1.5rem' } },
        { emoji: '⚡', className: 'animate-particle', style: { position: 'absolute', top: '40%', left: '20%', fontSize: '1.2rem', animationDelay: '0.3s' } },
        { emoji: '🔌', className: 'animate-particle', style: { position: 'absolute', top: '55%', right: '25%', fontSize: '1rem', animationDelay: '0.7s' } },
        { emoji: '📡', className: 'animate-particle', style: { position: 'absolute', top: '25%', left: '55%', fontSize: '1.1rem', animationDelay: '1.1s' } },
      ], bgGradient: 'from-cyan-50 via-white to-white',
    };
  }

  // 冲突/愤怒
  if (t.includes('投诉') || t.includes('差评') || t.includes('黑粉') || t.includes('抄袭') || t.includes('被鸟') || t.includes('举报') || t.includes('吵架')) {
    return {
      elements: [
        { emoji: '😤', className: 'animate-angry', style: { fontSize: '3.5rem' } },
        { emoji: '💢', className: 'animate-particle', style: { position: 'absolute', top: '20%', right: '25%', fontSize: '1.5rem', animationDelay: '0.1s' } },
        { emoji: '💥', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '15%', fontSize: '1.3rem', animationDelay: '0.4s' } },
        { emoji: '🗯️', className: 'animate-particle', style: { position: 'absolute', top: '30%', right: '40%', fontSize: '1.2rem', animationDelay: '0.7s' } },
        { emoji: '😡', className: 'animate-particle', style: { position: 'absolute', top: '60%', left: '60%', fontSize: '1rem', animationDelay: '1s' } },
      ], bgGradient: 'from-red-50 via-white to-white',
    };
  }

  // 金钱/投资
  if (t.includes('钱') || t.includes('融资') || t.includes('投资') || t.includes('贷款') || t.includes('中奖') || t.includes('旧物卖出')) {
    return {
      elements: [
        { emoji: '💰', className: 'animate-money', style: { fontSize: '3.5rem' } },
        { emoji: '📈', className: 'animate-float', style: { position: 'absolute', top: '20%', right: '15%', fontSize: '1.5rem' } },
        { emoji: '💵', className: 'animate-particle', style: { position: 'absolute', top: '45%', left: '20%', fontSize: '1.3rem', animationDelay: '0.3s' } },
        { emoji: '🪙', className: 'animate-particle', style: { position: 'absolute', top: '30%', right: '35%', fontSize: '1.2rem', animationDelay: '0.7s' } },
        { emoji: '💎', className: 'animate-particle', style: { position: 'absolute', top: '55%', left: '55%', fontSize: '1.1rem', animationDelay: '1s' } },
      ], bgGradient: 'from-yellow-50 via-white to-white',
    };
  }

  // 合作/签约
  if (t.includes('合作') || t.includes('签约') || t.includes('品牌') || t.includes('婚礼') || t.includes('见面')) {
    return {
      elements: [
        { emoji: '🤝', className: 'animate-deal', style: { fontSize: '3.5rem' } },
        { emoji: '📋', className: 'animate-float', style: { position: 'absolute', top: '15%', right: '20%', fontSize: '1.4rem' } },
        { emoji: '✍️', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '15%', fontSize: '1.2rem', animationDelay: '0.4s' } },
        { emoji: '🌟', className: 'animate-particle', style: { position: 'absolute', top: '25%', right: '40%', fontSize: '1.1rem', animationDelay: '0.8s' } },
      ], bgGradient: 'from-green-50 via-white to-white',
    };
  }

  // 社交/朋友/家人
  if (t.includes('父母') || t.includes('家人') || t.includes('朋友') || t.includes('亲戚') || t.includes('同学') || t.includes('前任') || t.includes('相亲') || t.includes('借钱') || t.includes('偶遇')) {
    return {
      elements: [
        { emoji: '📞', className: 'animate-call', style: { fontSize: '3.5rem' } },
        { emoji: '❤️', className: 'animate-particle', style: { position: 'absolute', top: '25%', right: '25%', fontSize: '1.3rem', animationDelay: '0.3s' } },
        { emoji: '💭', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '20%', fontSize: '1.1rem', animationDelay: '0.7s' } },
        { emoji: '🏠', className: 'animate-particle', style: { position: 'absolute', top: '35%', right: '40%', fontSize: '1.2rem', animationDelay: '1.1s' } },
      ], bgGradient: 'from-pink-50 via-white to-white',
    };
  }

  // 深夜/失眠
  if (t.includes('失眠') || t.includes('熬夜') || t.includes('凌晨') || t.includes('深夜') || t.includes('初雪')) {
    return {
      elements: [
        { emoji: '🌙', className: 'animate-night', style: { fontSize: '3.5rem' } },
        { emoji: '☕', className: 'animate-particle', style: { position: 'absolute', top: '30%', right: '25%', fontSize: '1.2rem', animationDelay: '0.5s' } },
        { emoji: '⭐', className: 'animate-particle', style: { position: 'absolute', top: '20%', left: '60%', fontSize: '1rem', animationDelay: '1s' } },
        { emoji: '🕯️', className: 'animate-float', style: { position: 'absolute', top: '60%', right: '30%', fontSize: '1.4rem' } },
      ], bgGradient: 'from-indigo-50 via-white to-white',
    };
  }

  // 天气/自然
  if (t.includes('暴雨') || t.includes('雨') || t.includes('天气') || t.includes('雪') || t.includes('台风') || t.includes('水坑') || t.includes('空调')) {
    return {
      elements: [
        { emoji: t.includes('雪') ? '❄️' : '🌧️', className: 'animate-neutral', style: { fontSize: '3.5rem' } },
        { emoji: '🌂', className: 'animate-float', style: { position: 'absolute', top: '15%', right: '20%', fontSize: '1.4rem' } },
        { emoji: '💧', className: 'animate-particle', style: { position: 'absolute', top: '40%', left: '25%', fontSize: '1rem', animationDelay: '0.3s' } },
        { emoji: '💧', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '60%', fontSize: '0.9rem', animationDelay: '0.7s' } },
        { emoji: '💧', className: 'animate-particle', style: { position: 'absolute', top: '35%', left: '45%', fontSize: '1rem', animationDelay: '1.1s' } },
      ], bgGradient: 'from-slate-100 via-white to-white',
    };
  }

  // 宠物/动物
  if (t.includes('宠物') || t.includes('猫') || t.includes('狗') || t.includes('金毛') || t.includes('鸟')) {
    return {
      elements: [
        { emoji: '🐕', className: 'animate-pet', style: { fontSize: '3.5rem' } },
        { emoji: '🐱', className: 'animate-float', style: { position: 'absolute', top: '25%', right: '20%', fontSize: '1.4rem' } },
        { emoji: '🐾', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '20%', fontSize: '1.1rem', animationDelay: '0.4s' } },
        { emoji: '🦴', className: 'animate-particle', style: { position: 'absolute', top: '35%', right: '40%', fontSize: '1rem', animationDelay: '0.9s' } },
        { emoji: '💕', className: 'animate-particle', style: { position: 'absolute', top: '55%', right: '25%', fontSize: '1.2rem', animationDelay: '1.3s' } },
      ], bgGradient: 'from-orange-50 via-white to-white',
    };
  }

  // 灵感/创意
  if (t.includes('灵感') || t.includes('创意') || t.includes('纪录片') || t.includes('开窍') || t.includes('想法') || t.includes('启发')) {
    return {
      elements: [
        { emoji: '💡', className: 'animate-opportunity', style: { fontSize: '3.5rem' } },
        { emoji: '✨', className: 'animate-particle', style: { position: 'absolute', top: '20%', right: '25%', fontSize: '1.3rem', animationDelay: '0.2s' } },
        { emoji: '🧠', className: 'animate-float', style: { position: 'absolute', top: '50%', right: '20%', fontSize: '1.4rem' } },
        { emoji: '🌈', className: 'animate-particle', style: { position: 'absolute', top: '30%', left: '60%', fontSize: '1.2rem', animationDelay: '0.6s' } },
        { emoji: '📝', className: 'animate-particle', style: { position: 'absolute', top: '55%', left: '25%', fontSize: '1.1rem', animationDelay: '1s' } },
      ], bgGradient: 'from-purple-50 via-white to-white',
    };
  }

  // 陌生人/帮助/善意
  if (t.includes('陌生人') || t.includes('帮助') || t.includes('咖啡') || t.includes('礼物') || t.includes('地铁') || t.includes('推销')) {
    return {
      elements: [
        { emoji: '🤗', className: 'animate-deal', style: { fontSize: '3rem' } },
        { emoji: '☕', className: 'animate-float', style: { position: 'absolute', top: '20%', right: '20%', fontSize: '1.3rem' } },
        { emoji: '💝', className: 'animate-particle', style: { position: 'absolute', top: '40%', left: '20%', fontSize: '1.2rem', animationDelay: '0.5s' } },
        { emoji: '🌸', className: 'animate-particle', style: { position: 'absolute', top: '30%', right: '35%', fontSize: '1rem', animationDelay: '1s' } },
      ], bgGradient: 'from-teal-50 via-white to-white',
    };
  }

  // 跑步/运动
  if (t.includes('跑步') || t.includes('运动') || t.includes('锻炼')) {
    return {
      elements: [
        { emoji: '🏃', className: 'animate-viral', style: { fontSize: '3rem' } },
        { emoji: '👟', className: 'animate-float', style: { position: 'absolute', top: '60%', right: '25%', fontSize: '1.3rem' } },
        { emoji: '💪', className: 'animate-particle', style: { position: 'absolute', top: '20%', left: '60%', fontSize: '1.2rem', animationDelay: '0.4s' } },
        { emoji: '🏅', className: 'animate-particle', style: { position: 'absolute', top: '40%', right: '40%', fontSize: '1.1rem', animationDelay: '0.9s' } },
      ], bgGradient: 'from-green-50 via-white to-white',
    };
  }

  // 导航/出行
  if (t.includes('走错') || t.includes('迟到') || t.includes('导航') || t.includes('路线')) {
    return {
      elements: [
        { emoji: '🗺️', className: 'animate-angry', style: { fontSize: '3rem' } },
        { emoji: '📱', className: 'animate-float', style: { position: 'absolute', top: '30%', right: '20%', fontSize: '1.3rem' } },
        { emoji: '😅', className: 'animate-particle', style: { position: 'absolute', top: '40%', left: '25%', fontSize: '1.2rem', animationDelay: '0.5s' } },
        { emoji: '⏰', className: 'animate-particle', style: { position: 'absolute', top: '20%', right: '40%', fontSize: '1.1rem', animationDelay: '1s' } },
      ], bgGradient: 'from-amber-50 via-white to-white',
    };
  }

  // 按分类的默认场景
  switch (category) {
    case 'crisis':
      return {
        elements: [
          { emoji: '⚠️', className: 'animate-crisis', style: { fontSize: '3.5rem' } },
          { emoji: '🌩️', className: 'animate-float', style: { position: 'absolute', top: '15%', right: '20%', fontSize: '1.4rem' } },
          { emoji: '⚡', className: 'animate-particle', style: { position: 'absolute', top: '40%', left: '25%', fontSize: '1.2rem', animationDelay: '0.3s' } },
          { emoji: '💪', className: 'animate-particle', style: { position: 'absolute', top: '55%', right: '30%', fontSize: '1.1rem', animationDelay: '0.8s' } },
        ], bgGradient: 'from-red-50 via-white to-white',
      };
    case 'opportunity':
      return {
        elements: [
          { emoji: '🌟', className: 'animate-opportunity', style: { fontSize: '3.5rem' } },
          { emoji: '🎯', className: 'animate-float', style: { position: 'absolute', top: '20%', right: '20%', fontSize: '1.4rem' } },
          { emoji: '✨', className: 'animate-particle', style: { position: 'absolute', top: '45%', left: '20%', fontSize: '1.2rem', animationDelay: '0.4s' } },
          { emoji: '🚪', className: 'animate-particle', style: { position: 'absolute', top: '30%', right: '35%', fontSize: '1.1rem', animationDelay: '0.8s' } },
        ], bgGradient: 'from-amber-50 via-white to-white',
      };
    case 'narrative':
      return {
        elements: [
          { emoji: '📖', className: 'animate-narrative', style: { fontSize: '3.5rem' } },
          { emoji: '🕯️', className: 'animate-float', style: { position: 'absolute', top: '25%', right: '25%', fontSize: '1.3rem' } },
          { emoji: '🍃', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '25%', fontSize: '1rem', animationDelay: '0.5s' } },
          { emoji: '💭', className: 'animate-particle', style: { position: 'absolute', top: '35%', right: '40%', fontSize: '1.1rem', animationDelay: '1s' } },
        ], bgGradient: 'from-slate-100 via-white to-white',
      };
    default:
      return {
        elements: [
          { emoji: '💼', className: 'animate-neutral', style: { fontSize: '3rem' } },
          { emoji: '📊', className: 'animate-float', style: { position: 'absolute', top: '20%', right: '25%', fontSize: '1.3rem' } },
          { emoji: '📌', className: 'animate-particle', style: { position: 'absolute', top: '50%', left: '25%', fontSize: '1rem', animationDelay: '0.4s' } },
        ], bgGradient: 'from-gray-50 via-white to-white',
      };
  }
}

export default function EventAnimation({ event, isSocial }: EventAnimationProps) {
  const scene = getScene(event);

  return (
    <div className={`relative w-full h-40 sm:h-48 rounded-xl overflow-hidden bg-gradient-to-b ${scene.bgGradient} mb-4`}>
      {/* 多元素动画场景 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {scene.elements.map((el, i) => (
          <span
            key={i}
            className={el.className}
            style={{
              fontSize: el.style?.fontSize || '3rem',
              position: el.style?.position || 'relative',
              top: el.style?.top,
              right: el.style?.right,
              left: el.style?.left,
              bottom: el.style?.bottom,
              animationDelay: (el.style?.animationDelay as string) || '0s',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))',
            }}
          >
            {el.emoji}
          </span>
        ))}
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />

      {/* 社会事件脉冲边框 */}
      {isSocial && (
        <div className="absolute inset-0 rounded-xl border-2 border-resource-danger animate-pulse-border pointer-events-none" />
      )}
    </div>
  );
}
