import React from 'react';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  className = '',
}) => {
  return (
    <div
      className={`bg-white border border-transparent rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out ${className}`}
    >
      {title && (
        <div className="px-5 pt-5 pb-3 border-b border-gray-100">
          <h3 className="text-lg font-satoshi font-semibold text-[#1a2e1a] tracking-tight">
            {title}
          </h3>
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
      {footer && (
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};