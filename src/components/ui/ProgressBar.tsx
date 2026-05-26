interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  label?: string;
  showValue?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  color = 'var(--color-accent)',
  label,
  showValue = true,
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className="flex flex-col gap-0.5">
      {(label || showValue) && (
        <div className="flex justify-between text-xs">
          {label && <span className="text-text-secondary">{label}</span>}
          {showValue && <span className="text-text-muted">{Math.round(value)}</span>}
        </div>
      )}
      <div className="h-2 w-full rounded-full bg-dark-border overflow-hidden">
        <div
          className="h-full rounded-full resource-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
