'use client';

import { Search, Bell, Plane, UserCircle, ChevronDown, Menu } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Breadcrumbs from './Breadcrumbs';
import { useAuthStore } from '@/stores/auth-store';
import { useSidebarStore } from '@/stores/sidebar-store';
import { useState } from 'react';

export default function Header() {
  const { user } = useAuthStore();
  const { toggle } = useSidebarStore();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="w-full h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shadow-sm sticky top-0 z-40">
      {/* Left: hamburger + breadcrumbs */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <Menu size={20} className="text-slate-600 dark:text-slate-400" />
        </button>
        <Breadcrumbs />
      </div>

      {/* Right: search, bell, theme, profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 relative">
          <Search size={16} className="absolute left-3 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-52 h-9 pl-9 pr-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 transition-all duration-200"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
          <Bell size={20} className="text-slate-500 dark:text-slate-400" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
        </button>

        <ThemeToggle />

        <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />

        {/* Currently Viewing */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Plane size={18} className="text-primary-500" />
          <span>Currently viewing <strong className="text-slate-700 dark:text-slate-200">Airlines</strong></span>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-xs font-bold text-white">{(user?.name || 'Admin').charAt(0)}</span>
            </div>
            <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-200">{user?.name || 'Admin'}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 top-12 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 animate-scale-in z-50">
              <button className="w-full px-4 py-2 text-sm text-left text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Profile
              </button>
              <button className="w-full px-4 py-2 text-sm text-left text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Settings
              </button>
              <div className="border-t border-slate-200 dark:border-slate-700 my-1" />
              <button className="w-full px-4 py-2 text-sm text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
