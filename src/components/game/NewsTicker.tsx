import { useMemo } from 'react';
import type { IndustryId } from '../../engine/types';
import { generateNewsItems } from '../../engine/NewsGenerator';

interface NewsTickerProps {
  turn: number;
  industryId: IndustryId;
}

export default function NewsTicker({ turn, industryId }: NewsTickerProps) {
  const news = useMemo(() => generateNewsItems(turn, industryId, [], 10), [turn, industryId]);

  return (
    <div className="p-4 space-y-3">
      <h3 className="text-sm font-bold text-text-primary">📰 职场财经快讯</h3>
      {news.map((item, i) => (
        <div
          key={item.id}
          className="p-3 rounded-xl bg-dark-card border border-dark-border"
          style={{ opacity: 1 - i * 0.07 }}
        >
          <div className="text-xs text-text-secondary leading-relaxed">
            {item.headline}
          </div>
          <div className="text-xs text-text-muted mt-1">
            {item.category === 'tech' ? '科技'
              : item.category === 'service' ? '服务'
              : item.category === 'media' ? '媒体'
              : item.category === 'retail' ? '零售'
              : item.category === 'creative' ? '创意'
              : item.category === 'trade' ? '贸易'
              : item.category === 'education' ? '教育'
              : item.category === 'lifestyle' ? '生活'
              : '综合'}
          </div>
        </div>
      ))}
    </div>
  );
}
