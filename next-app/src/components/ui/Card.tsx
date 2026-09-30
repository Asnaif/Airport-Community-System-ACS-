'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  trend?: { value: number; isUp: boolean };
  color?: 'blue' | 'emerald' | 'amber' | 'rose';
  delay?: number;
}

export default function StatsCard({ title, count, icon: Icon, trend, color = 'blue', delay = 0 }: StatsCardProps) {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const gradients = {
    blue: 'from-primary-500/10 to-primary-600/5 dark:from-primary-500/20 dark:to-primary-600/10',
    emerald: 'from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10',
    amber: 'from-amber-500/10 to-amber-600/5 dark:from-amber-500/20 dark:to-amber-600/10',
    rose: 'from-rose-500/10 to-rose-600/5 dark:from-rose-500/20 dark:to-rose-600/10',
  };

  const iconBg = {
    blue: 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400',
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400',
    rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400',
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1200;
    const steps = 40;
    const increment = count / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [count, isVisible]);

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/60',
        'bg-gradient-to-br shadow-sm hover:shadow-md transition-all duration-300',
        'min-w-[260px] group',
        gradients[color],
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        'transition-all duration-500'
      )}
    >
      {/* Decorative pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)' }}
      />

      <div className="relative z-10 flex items-center gap-4 px-6 py-5">
        <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110', iconBg[color])}>
          <Icon size={26} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{title}</p>
          <p className="text-3xl font-bold text-slate-800 dark:text-white animate-counter">{displayCount}</p>
          {trend && (
            <p className={cn('text-xs font-medium mt-0.5', trend.isUp ? 'text-emerald-600' : 'text-red-500')}>
              {trend.isUp ? '+' : '-'}{trend.value}% from last month
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
