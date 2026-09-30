'use client';

import { recentActivity } from '@/data/seed';
import { Plus, RefreshCw, Trash2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function RecentActivity() {
  const icons = {
    create: { icon: Plus, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
    update: { icon: RefreshCw, color: 'text-primary-500', bg: 'bg-primary-50 dark:bg-primary-900/30' },
    delete: { icon: Trash2, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/30' },
  };

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-slate-800 dark:text-white">Recent Activity</h3>
        <button className="text-xs text-primary-500 hover:text-primary-600 font-medium cursor-pointer">View All</button>
      </div>
      <div className="space-y-4">
        {recentActivity.map((item, i) => {
          const { icon: ItemIcon, color, bg } = icons[item.type];
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center shrink-0', bg)}>
                <ItemIcon size={15} className={color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 dark:text-slate-200 font-medium">{item.action}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.entity}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 shrink-0">
                <Clock size={12} />
                {item.time}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
