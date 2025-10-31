import React, { useEffect } from 'react';
import { CloseIcon } from '../constants.tsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-sidebarBg text-textPrimary rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative border border-borderColor custom-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-textPrimary relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px] rounded-sm">{title}</h2>
            <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-contentBg transition-colors"
            aria-label="Close modal"
            >
                <CloseIcon/>
            </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;