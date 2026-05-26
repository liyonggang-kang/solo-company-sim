import type { GameEvent, SocialEvent } from '../../engine/types';

interface EventAnimationProps {
  event: GameEvent | SocialEvent;
  isSocial?: boolean;
}

function getScene(event: GameEvent | SocialEvent): {
  emoji: string;
  secondary: string;
  animation: string;
  bgGradient: string;
  particleEmoji: string;
} {
  const title = event.title;
  const category = 'category' in event ? event.category : 'neutral';

  // 根据标题关键词匹配特定场景
  if (title.includes('身心俱疲') || title.includes('失眠') || title.includes('累了')) {
    return {
      emoji: '😩',
      secondary: '💤',
      animation: 'animate-exhausted',
      bgGradient: 'from-blue-50 via-white to-white',
      particleEmoji: '💧',
    };
  }
  if (title.includes('爆款') || title.includes('火了') || title.includes('10w+') || title.includes('首页')) {
    return {
      emoji: '🚀',
      secondary: '✨',
      animation: 'animate-viral',
      bgGradient: 'from-amber-50 via-white to-white',
      particleEmoji: '🔥',
    };
  }
  if (title.includes('AI') || title.includes('替代') || title.includes('机器')) {
    return {
      emoji: '🤖',
      secondary: '💻',
      animation: 'animate-robot',
      bgGradient: 'from-cyan-50 via-white to-white',
      particleEmoji: '⚡',
    };
  }
  if (title.includes('投诉') || title.includes('差评') || title.includes('黑粉') || title.includes('抄袭')) {
    return {
      emoji: '😤',
      secondary: '💢',
      animation: 'animate-angry',
      bgGradient: 'from-red-50 via-white to-white',
      particleEmoji: '💥',
    };
  }
  if (title.includes('钱') || title.includes('经济') || title.includes('融资') || title.includes('投资') || title.includes('收购')) {
    return {
      emoji: '💰',
      secondary: '📈',
      animation: 'animate-money',
      bgGradient: 'from-yellow-50 via-white to-white',
      particleEmoji: '💵',
    };
  }
  if (title.includes('合作') || title.includes('客户') || title.includes('品牌') || title.includes('签约')) {
    return {
      emoji: '🤝',
      secondary: '📋',
      animation: 'animate-deal',
      bgGradient: 'from-green-50 via-white to-white',
      particleEmoji: '✍️',
    };
  }
  if (title.includes('父母') || title.includes('电话') || title.includes('家人') || title.includes('朋友')) {
    return {
      emoji: '📞',
      secondary: '❤️',
      animation: 'animate-call',
      bgGradient: 'from-pink-50 via-white to-white',
      particleEmoji: '💭',
    };
  }
  if (title.includes('失眠') || title.includes('熬夜') || title.includes('凌晨') || title.includes('深夜')) {
    return {
      emoji: '🌙',
      secondary: '☕',
      animation: 'animate-night',
      bgGradient: 'from-indigo-50 via-white to-white',
      particleEmoji: '⭐',
    };
  }
  if (title.includes('监管') || title.includes('政策') || title.includes('合规') || title.includes('海关')) {
    return {
      emoji: '⚖️',
      secondary: '📜',
      animation: 'animate-regulation',
      bgGradient: 'from-purple-50 via-white to-white',
      particleEmoji: '🔒',
    };
  }
  if (title.includes('宠物') || title.includes('猫') || title.includes('狗') || title.includes('金毛')) {
    return {
      emoji: '🐕',
      secondary: '🐱',
      animation: 'animate-pet',
      bgGradient: 'from-orange-50 via-white to-white',
      particleEmoji: '🐾',
    };
  }

  // 按分类的默认场景
  switch (category) {
    case 'crisis':
      return {
        emoji: '⚠️',
        secondary: '🌩️',
        animation: 'animate-crisis',
        bgGradient: 'from-red-50 via-white to-white',
        particleEmoji: '⚡',
      };
    case 'opportunity':
      return {
        emoji: '🌟',
        secondary: '🎯',
        animation: 'animate-opportunity',
        bgGradient: 'from-amber-50 via-white to-white',
        particleEmoji: '✨',
      };
    case 'narrative':
      return {
        emoji: '📖',
        secondary: '🕯️',
        animation: 'animate-narrative',
        bgGradient: 'from-slate-100 via-white to-white',
        particleEmoji: '🍃',
      };
    case 'neutral':
    default:
      return {
        emoji: '💼',
        secondary: '📊',
        animation: 'animate-neutral',
        bgGradient: 'from-gray-50 via-white to-gray-50',
        particleEmoji: '📌',
      };
  }
}

export default function EventAnimation({ event, isSocial }: EventAnimationProps) {
  const scene = getScene(event);

  return (
    <div className={`relative w-full h-40 sm:h-48 rounded-xl overflow-hidden bg-gradient-to-b ${scene.bgGradient} mb-4`}>
      {/* 主表情 */}
      <div className={`absolute inset-0 flex items-center justify-center ${scene.animation}`}>
        <span className="text-6xl sm:text-7xl drop-shadow-lg" style={{
          filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
        }}>
          {scene.emoji}
        </span>
      </div>

      {/* 副表情 - 浮动 */}
      <div className="absolute top-4 right-6 animate-float opacity-60">
        <span className="text-2xl">{scene.secondary}</span>
      </div>

      {/* 粒子效果 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute text-sm animate-particle opacity-40"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {scene.particleEmoji}
          </span>
        ))}
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />

      {/* 如果是社会事件，添加脉冲边框 */}
      {isSocial && (
        <div className="absolute inset-0 rounded-xl border-2 border-resource-danger animate-pulse-border pointer-events-none" />
      )}
    </div>
  );
}
