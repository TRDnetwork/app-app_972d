import React, { useState, useRef, useEffect } from 'react';

export interface DropdownOption {
  label: string;
  value: string;
  onSelect: () => void;
}

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const baseButtonClasses =
  'inline-flex justify-between items-center w-full rounded-md px-3 py-2 text-left font-fraunces focus:outline-none focus:ring-2 focus:ring-[#e66000]';

const variantClasses = {
  primary: 'bg-white border border-gray-300 text-[#1a2e1a] hover:border-[#1a2e1a]',
  secondary: 'bg-[#faf8f5] border border-transparent text-[#1a2e1a] hover:bg-white',
};

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  variant = 'primary',
  size = 'md',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <button
        type="button"
        className={`${baseButtonClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
          disabled ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <svg
          className={`w-5 h-5 text-[#6b5e53] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 max-h-60 overflow-auto">
            {options.map((option, i) => (
              <button
                key={i}
                className="block w-full text-left px-4 py-2 text-sm text-[#1a2e1a] hover:bg-[#faf8f5] hover:text-[#e66000] focus:outline-none focus:bg-[#faf8f5]"
                onClick={() => {
                  option.onSelect();
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};