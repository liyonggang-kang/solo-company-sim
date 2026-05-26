import { useState, useEffect } from 'react';
import type { GameEvent, EventChoice } from '../../engine/types';
import ChoiceButton from './ChoiceButton';
import EventAnimation from './EventAnimation';

interface EventCardProps {
  event: GameEvent;
  resources: { money: number; energy: number; reputation: number; health: number };
  roles: { ceo: number; employee: number; sales: number };
  unlockedSkills: string[];
  onChoice: (choice: EventChoice) => void;
}

function canAfford(choice: EventChoice, resources: any, roles: any): boolean {
  const req = choice.requirements;
  if (!req) return true;
  if (req.minMoney !== undefined && resources.money < req.minMoney) return false;
  if (req.minEnergy !== undefined && resources.energy < req.minEnergy) return false;
  if (req.minReputation !== undefined && resources.reputation < req.minReputation) return false;
  if (req.minHealth !== undefined && resources.health < req.minHealth) return false;
  if (req.minRole) {
    if (req.minRole.role === 'ceo' && roles.ceo < req.minRole.value) return false;
    if (req.minRole.role === 'employee' && roles.employee < req.minRole.value) return false;
    if (req.minRole.role === 'sales' && roles.sales < req.minRole.value) return false;
  }
  if (req.requiredSkill && !(unlockedSkills as string[]).includes(req.requiredSkill)) return false;
  return true;
}

export default function EventCard({ event, resources, roles, unlockedSkills, onChoice }: EventCardProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);
    const text = event.narrative;
    if (text.length <= 30) {
      setVisibleChars(text.length);
      return;
    }
    const timer = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= text.length) {
          clearInterval(timer);
          return text.length;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [event.id]);

  const narrativeText = event.narrative.slice(0, visibleChars);
  const showCursor = visibleChars < event.narrative.length;

  const npcIcon = event.npcId ? '👤' : '';

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 overflow-y-auto">
      {/* Event header */}
      <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-dark-border text-text-secondary">
          {event.category === 'crisis' ? '🔴 危机'
            : event.category === 'opportunity' ? '🟢 机遇'
            : event.category === 'narrative' ? '📖 剧情'
            : '⚪ 日常'}
        </span>
        {npcIcon && <span className="text-lg">{npcIcon}</span>}
      </div>

      {/* Event title */}
      <h2 className="text-xl font-bold text-text-primary leading-tight">
        {event.title}
      </h2>

      {/* Animated scene */}
      <EventAnimation event={event} />

      {/* Narrative text with typewriter effect */}
      <div className="text-sm text-text-secondary leading-relaxed min-h-[60px]">
        {narrativeText}
        {showCursor && <span className="typewriter-cursor text-accent">|</span>}
      </div>

      {/* Choices */}
      <div className="space-y-2 mt-auto pt-4">
        {event.choices.map((choice) => (
          <ChoiceButton
            key={choice.id}
            choice={choice}
            disabled={!canAfford(choice, resources, roles)}
            onClick={onChoice}
          />
        ))}
      </div>
    </div>
  );
}
