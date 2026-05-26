import type { EventLogEntry } from '../../engine/types';

interface EventLogProps {
  history: EventLogEntry[];
}

export default function EventLog({ history }: EventLogProps) {
  if (history.length === 0) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <p className="text-text-muted text-sm">暂无事件记录，开始你的旅程吧</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3">
      <h3 className="text-sm font-bold text-text-primary">事件记录</h3>
      {[...history].reverse().map((entry, i) => (
        <div
          key={i}
          className="p-3 rounded-xl bg-dark-card border border-dark-border"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-text-muted">第 {entry.turn} 月</span>
            <span className="text-xs font-medium text-text-secondary">
              {entry.eventTitle}
            </span>
          </div>
          <div className="text-xs text-text-secondary">
            → {entry.choiceText}
          </div>
          <div className="text-xs text-text-muted mt-1 italic">
            {entry.outcomeText}
          </div>
        </div>
      ))}
    </div>
  );
}
