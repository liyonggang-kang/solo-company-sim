import { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  fullscreen?: boolean;
}

export default function Modal({ open, onClose, children, fullscreen }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        className={`relative bg-dark-card border border-dark-border rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-y-auto animate-slide-up w-full ${
          fullscreen ? 'h-[90vh]' : 'max-h-[80vh]'
        } sm:max-w-md sm:max-h-[80vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
