import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultActiveId?: string;
  onTabChange?: (id: string) => void;
  variant?: 'line' | 'boxed';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  line: {
    container: 'border-b border-gray-200',
    tab: 'border-b-2 border-transparent hover:text-[#e66000] -mb-px',
    active: 'border-[#e66000] text-[#1a2e1a]',
  },
  boxed: {
    container: 'flex gap-1 p-1 bg-gray-100 rounded-md',
    tab: 'rounded-md hover:bg-gray-200',
    active: 'bg-white shadow-sm',
  },
};

const sizeClasses = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveId,
  onTabChange,
  variant = 'line',
  size = 'md',
}) => {
  const [activeId, setActiveId] = useState(defaultActiveId || tabs[0].id);

  const handleTabClick = (id: string) => {
    setActiveId(id);
    onTabChange?.(id);
  };

  return (
    <div className="w-full">
      <div className={`flex ${variantClasses[variant].container}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`font-fraunces font-medium transition-colors duration-200 ${
              variantClasses[variant].tab
            } ${sizeClasses[size]} ${
              activeId === tab.id ? variantClasses[variant].active : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeId === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeId)?.content}
      </div>
    </div>
  );
};