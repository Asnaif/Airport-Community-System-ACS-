'use client';

import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/stores/theme-store';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer',
        'border border-slate-200 dark:border-slate-600',
        theme === 'dark'
          ? 'bg-slate-700'
          : 'bg-gradient-to-r from-sky-100 to-amber-100'
      )}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={cn(
          'absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300',
          'flex items-center justify-center shadow-sm',
          theme === 'dark'
            ? 'translate-x-7 bg-slate-600'
            : 'translate-x-0.5 bg-white'
        )}
      >
        {theme === 'dark' ? (
          <Moon size={13} className="text-primary-400" />
        ) : (
          <Sun size={13} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
