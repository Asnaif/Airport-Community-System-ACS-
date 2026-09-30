'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import {
  Building2, ChevronRight, ChevronLeft, Plane, Warehouse,
  LayoutDashboard, Settings, HelpCircle, LogOut
} from 'lucide-react';

const navItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Organization',
    icon: Building2,
    children: [
      { label: 'Airlines', icon: Plane, href: '/airlines' },
      { label: 'GHA', icon: Warehouse, href: '/gha' },
    ],
  },
];

const bottomItems = [
  { label: 'Settings', icon: Settings, href: '#' },
  { label: 'Help', icon: HelpCircle, href: '#' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleCollapse } = useSidebarStore();
  const [openMenus, setOpenMenus] = useState<string[]>(['Organization']);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside
      className={cn(
        'min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]',
        'text-slate-300 flex flex-col shadow-2xl relative',
        'transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-[72px]' : 'w-[270px]',
      )}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500" />

      {/* Logo */}
      <div className="px-5 pt-6 pb-4 border-b border-white/[0.06]">
        <Link href="/dashboard" className="flex items-center gap-2.5 no-underline">
          <span className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/20">
            <Plane className="w-5 h-5 text-white -rotate-45" />
          </span>
          {!isCollapsed && (
            <span className="text-lg font-bold text-white tracking-wide whitespace-nowrap">
              ACS
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium',
                    'transition-all duration-200 no-underline',
                    isActive(item.href)
                      ? 'bg-primary-500/15 text-white border border-primary-500/20'
                      : 'text-slate-400 hover:bg-white/[0.04] hover:text-white border border-transparent',
                    isCollapsed && 'justify-center px-2'
                  )}
                >
                  <item.icon size={20} className={isActive(item.href) ? 'text-primary-400' : ''} />
                  {!isCollapsed && item.label}
                </Link>
              );
            }

            // Expandable menu
            const isOpen = openMenus.includes(item.label);
            return (
              <div key={item.label}>
                <button
                  onClick={() => !isCollapsed && toggleMenu(item.label)}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2.5 rounded-xl',
                    'text-sm font-medium transition-all duration-200 cursor-pointer',
                    isOpen
                      ? 'bg-primary-500/10 text-white border border-primary-500/15'
                      : 'text-slate-400 hover:bg-white/[0.04] hover:text-white border border-transparent',
                    isCollapsed && 'justify-center px-2'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('w-8 h-8 rounded-lg flex items-center justify-center', isOpen ? 'bg-primary-500/20' : 'bg-white/[0.06]')}>
                      <item.icon size={17} className={isOpen ? 'text-primary-400' : 'text-slate-400'} />
                    </span>
                    {!isCollapsed && item.label}
                  </div>
                  {!isCollapsed && (
                    <ChevronRight
                      size={16}
                      className={cn('text-slate-500 transition-transform duration-300', isOpen && 'rotate-90')}
                    />
                  )}
                </button>

                {/* Submenu */}
                {!isCollapsed && (
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isOpen ? 'max-h-[200px] opacity-100 mt-1' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="ml-6 pl-4 border-l-2 border-primary-500/20 space-y-0.5">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm',
                            'transition-all duration-200 no-underline',
                            isActive(child.href)
                              ? 'text-white bg-white/[0.06] translate-x-1'
                              : 'text-slate-400 hover:text-white hover:bg-white/[0.04] hover:translate-x-1'
                          )}
                        >
                          <child.icon size={16} className={isActive(child.href) ? 'text-primary-400' : ''} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-3 border-t border-white/[0.06] space-y-0.5">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-500',
              'hover:text-slate-300 hover:bg-white/[0.04] transition-all duration-200 no-underline',
              isCollapsed && 'justify-center px-2'
            )}
          >
            <item.icon size={18} />
            {!isCollapsed && item.label}
          </Link>
        ))}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={toggleCollapse}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-600 transition-colors z-50 shadow-lg"
      >
        <ChevronLeft size={14} className={cn('text-slate-300 transition-transform duration-300', isCollapsed && 'rotate-180')} />
      </button>
    </aside>
  );
}
