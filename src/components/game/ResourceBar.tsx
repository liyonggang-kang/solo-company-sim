import ProgressBar from '../ui/ProgressBar';

interface ResourceBarProps {
  money: number;
  energy: number;
  reputation: number;
  health: number;
}

export default function ResourceBar({ money, energy, reputation, health }: ResourceBarProps) {
  return (
    <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-dark-card border-b border-dark-border">
      <ProgressBar
        value={money}
        color="var(--color-resource-money)"
        label="💵"
        showValue={true}
      />
      <ProgressBar
        value={energy}
        color="var(--color-resource-energy)"
        label="⚡"
        showValue={true}
      />
      <ProgressBar
        value={reputation}
        color="var(--color-resource-reputation)"
        label="⭐"
        showValue={true}
      />
      <ProgressBar
        value={health}
        color="var(--color-resource-health)"
        label="❤️"
        showValue={true}
      />
    </div>
  );
}
