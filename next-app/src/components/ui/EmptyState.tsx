'use client';

import { Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  title = 'No data found',
  description = 'There are no records to display at this time.',
  className,
  action,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-4', className)}>
      <div className="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
        <Inbox size={36} className="text-slate-400 dark:text-slate-500" />
      </div>
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-1.5">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-sm">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
