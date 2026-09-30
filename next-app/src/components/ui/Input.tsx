'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon: Icon, helperText, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            {label}
            {props.required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none"
            />
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              'w-full border rounded-xl px-3.5 py-2.5 text-sm',
              'bg-white dark:bg-slate-800/50',
              'text-slate-700 dark:text-slate-200',
              'placeholder-slate-400 dark:placeholder-slate-500',
              'outline-none transition-all duration-200',
              Icon && 'pl-10',
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900'
                : 'border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900',
              className
            )}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 animate-fade-in">{error}</span>}
        {helperText && !error && <span className="text-xs text-slate-400">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
