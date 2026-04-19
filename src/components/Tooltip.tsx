import React, { useState } from 'react';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
}

const placementClasses = {
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  delay = 300,
}) => {
  const [visible, setVisible] = useState(false);
  let timeout: NodeJS.Timeout;

  const show = () => {
    timeout = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    clearTimeout(timeout);
    setVisible(false);
  };

  return (
    <div className="inline-block relative" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {visible && (
        <div
          className={`absolute ${placementClasses[placement]} z-10 px-2 py-1 text-sm font-fraunces text-white bg-[#1a2e1a] rounded-md shadow-lg whitespace-nowrap transition-opacity duration-200 animate-fade-in`}
        >
          {content}
          <div
            className={`absolute w-2 h-2 bg-[#1a2e1a] rotate-45 ${
              placement === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 -mt-1' : ''
            } ${
              placement === 'right'
                ? 'left-full top-1/2 transform -translate-y-1/2 -ml-1'
                : ''
            } ${
              placement === 'bottom'
                ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-1'
                : ''
            } ${
              placement === 'left'
                ? 'right-full top-1/2 transform -translate-y-1/2 -mr-1'
                : ''
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};