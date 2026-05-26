import { useState, useEffect } from 'react';
import type { SocialEvent, EventChoice } from '../../engine/types';
import ChoiceButton from './ChoiceButton';
import EventAnimation from './EventAnimation';
import Modal from '../ui/Modal';

interface SocialEventModalProps {
  open: boolean;
  event: SocialEvent;
  resources: any;
  roles: any;
  unlockedSkills: string[];
  onChoice: (choice: EventChoice) => void;
}

export default function SocialEventModal({
  open, event, /* resources, roles, unlockedSkills - unused params kept for future use */ onChoice,
}: SocialEventModalProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);
    const text = event.narrative;
    const timer = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= text.length) {
          clearInterval(timer);
          return text.length;
        }
        return prev + 2;
      });
    }, 15);
    return () => clearInterval(timer);
  }, [event.id]);

  return (
    <Modal open={open} onClose={() => {}} fullscreen>
      <div className="p-6 space-y-4">
        {/* Animated illustration */}
        <EventAnimation event={event} isSocial />

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-resource-danger">
          ⚡ {event.title}
        </h2>

        {/* Narrative */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {event.narrative.slice(0, visibleChars)}
          {visibleChars < event.narrative.length && (
            <span className="typewriter-cursor text-accent">|</span>
          )}
        </p>

        {/* Choices */}
        <div className="space-y-2 pt-2">
          {event.choices.map((choice) => (
            <ChoiceButton
              key={choice.id}
              choice={choice}
              onClick={onChoice}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}
