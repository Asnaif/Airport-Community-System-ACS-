'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  status: 'Active' | 'Inactive' | 'Pending';
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export default function Badge({ status, size = 'md', onClick }: BadgeProps) {
  const colors = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800',
    Inactive: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
  };

  const dotColors = {
    Active: 'bg-emerald-500',
    Inactive: 'bg-red-500',
    Pending: 'bg-amber-500',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-semibold',
        'transition-all duration-200 cursor-pointer',
        'hover:shadow-sm active:scale-95',
        colors[status],
        sizes[size],
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[status])} />
      {status}
    </button>
  );
}
