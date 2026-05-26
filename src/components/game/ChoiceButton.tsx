import type { EventChoice } from '../../engine/types';

interface ChoiceButtonProps {
  choice: EventChoice;
  disabled?: boolean;
  onClick: (choice: EventChoice) => void;
}

export default function ChoiceButton({ choice, disabled, onClick }: ChoiceButtonProps) {
  const isBlocked = disabled;

  return (
    <button
      onClick={() => !isBlocked && onClick(choice)}
      disabled={isBlocked}
      className={`w-full text-left p-3 rounded-xl border transition-all duration-150 ${
        isBlocked
          ? 'border-dark-border bg-dark-bg/30 text-text-muted cursor-not-allowed opacity-50'
          : 'border-dark-border bg-dark-card card-hover hover:border-accent-dim active:bg-dark-card-hover'
      }`}
    >
      <div className="text-sm font-medium text-text-primary">{choice.text}</div>
      {choice.hint && (
        <div className="text-xs text-text-secondary mt-0.5">{choice.hint}</div>
      )}
    </button>
  );
}
