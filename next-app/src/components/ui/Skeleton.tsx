'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export default function Skeleton({ className, variant = 'text' }: SkeletonProps) {
  const variants = {
    text: 'h-4 rounded-md',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  return (
    <div className={cn('skeleton-shimmer', variants[variant], className)} />
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full space-y-3 p-6">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="w-48 h-9" variant="rectangular" />
        <div className="flex gap-3">
          <Skeleton className="w-56 h-9" variant="rectangular" />
          <Skeleton className="w-24 h-9" variant="rectangular" />
        </div>
      </div>
      <Skeleton className="w-full h-12" variant="rectangular" />
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="w-full h-16" variant="rectangular" />
      ))}
      <div className="flex justify-between mt-4">
        <Skeleton className="w-64 h-8" variant="rectangular" />
        <Skeleton className="w-40 h-8" variant="rectangular" />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 min-w-[260px]">
      <div className="flex items-center gap-4">
        <Skeleton className="w-14 h-14" variant="circular" />
        <div className="space-y-2">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-16 h-8" />
        </div>
      </div>
    </div>
  );
}
