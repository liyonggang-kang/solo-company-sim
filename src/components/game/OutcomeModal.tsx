import type { ResourceSnapshot } from '../../engine/types';
import Modal from '../ui/Modal';

interface OutcomeModalProps {
  open: boolean;
  outcomeText: string;
  delta: ResourceSnapshot | null;
  onContinue: () => void;
}

function deltaItem(value: number): { sign: string; color: string } {
  if (value > 0) return { sign: '+', color: 'var(--color-success)' };
  if (value < 0) return { sign: '', color: 'var(--color-danger)' };
  return { sign: '', color: 'var(--color-text-muted)' };
}

export default function OutcomeModal({ open, outcomeText, delta, onContinue }: OutcomeModalProps) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onContinue}>
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-center">📋 结果</h3>

        <p className="text-sm text-text-secondary leading-relaxed text-center">
          {outcomeText}
        </p>

        {delta && (
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: '💵', value: delta.money },
              { label: '⚡', value: delta.energy },
              { label: '⭐', value: delta.reputation },
              { label: '❤️', value: delta.health },
            ].map(({ label, value }) => {
              const { sign, color } = deltaItem(value);
              if (value === 0) return null;
              return (
                <div key={label} className="text-center">
                  <div className="text-lg">{label}</div>
                  <div className="text-sm font-bold" style={{ color }}>
                    {sign}{value}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={onContinue}
          className="w-full py-3 rounded-xl bg-accent text-dark-bg font-bold text-sm card-hover"
        >
          继续
        </button>
      </div>
    </Modal>
  );
}
