import type { EventChoice } from '../../engine/types';

interface ChoiceButtonProps {
  choice: EventChoice;
  disabled?: boolean;
  unlockedSkills?: string[];
  onClick: (choice: EventChoice) => void;
}

export default function ChoiceButton({ choice, disabled, unlockedSkills, onClick }: ChoiceButtonProps) {
  const isBlocked = disabled;
  const requiresSkill = choice.requirements?.requiredSkill;
  const hasSkill = requiresSkill && unlockedSkills?.includes(requiresSkill);
  const lockedBySkill = requiresSkill && !hasSkill;

  const borderClass = requiresSkill && hasSkill
    ? 'border-accent-dim border-2 bg-accent-dim/10'
    : isBlocked
    ? 'border-dark-border bg-dark-bg/30 text-text-muted cursor-not-allowed opacity-50'
    : 'border-dark-border bg-dark-card card-hover hover:border-accent-dim active:bg-dark-card-hover';

  const handleClick = () => {
    if (isBlocked && !lockedBySkill) return;
    onClick(choice);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isBlocked && !lockedBySkill}
      className={`w-full text-left p-3 rounded-xl border transition-all duration-150 ${borderClass}`}
    >
      <div className="flex items-center gap-2">
        {requiresSkill && (
          <span className={`text-sm flex-shrink-0 ${hasSkill ? 'text-accent' : 'text-text-muted'}`}>
            {hasSkill ? '🔓' : '🔒'}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-medium ${hasSkill ? 'text-accent' : isBlocked ? 'text-text-muted' : 'text-text-primary'}`}>
            {choice.text}
          </div>
          {choice.hint && (
            <div className="text-xs text-text-secondary mt-0.5">{choice.hint}</div>
          )}
          {lockedBySkill && (
            <div className="text-xs text-text-muted mt-0.5 italic">
              🔒 需要解锁对应技能
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
