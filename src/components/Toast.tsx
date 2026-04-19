import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  show: boolean;
  type: ToastType;
  message: string;
  onClose: () => void;
  duration?: number;
}

const typeClasses = {
  success: 'bg-green-500 text-white',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
};

export const Toast: React.FC<ToastProps> = ({
  show,
  type,
  message,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (show && duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md shadow-lg max-w-xs text-sm font-fraunces text-center transition-all duration-300 ease-in-out transform ${typeClasses[type]} animate-fade-in-up`}
      role="alert"
    >
      {message}
    </div>
  );
};