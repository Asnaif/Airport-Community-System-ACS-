'use client';

import { SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            {label}
            {props.required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={cn(
              'w-full border rounded-xl px-3.5 py-2.5 pr-9 text-sm',
              'bg-white dark:bg-slate-800/50',
              'text-slate-700 dark:text-slate-200',
              'outline-none transition-all duration-200 appearance-none cursor-pointer',
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200',
              className
            )}
            {...props}
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
        {error && <span className="text-xs text-red-500 animate-fade-in">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
