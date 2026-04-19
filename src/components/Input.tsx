import React from 'react';

export interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'textarea';
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const Tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 text-sm font-medium text-[#1a2e1a] font-satoshi"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Tag
        id={inputId}
        type={type !== 'textarea' ? type : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`px-4 py-2 border rounded-md font-fraunces text-[#1a2e1a] placeholder:text-[#6b5e53] focus:outline-none focus:ring-2 focus:ring-[#e66000] focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 ${
          error
            ? 'border-red-300 focus:ring-red-500'
            : 'border-gray-300 focus:ring-[#e66000]'
        }`}
        rows={type === 'textarea' ? 4 : undefined}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};