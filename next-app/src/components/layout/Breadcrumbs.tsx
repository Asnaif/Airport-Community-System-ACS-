'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  airlines: 'Airlines',
  gha: 'GHA',
  create: 'Create New',
  edit: 'Edit',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav className="flex items-center gap-1.5 text-sm">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary-500 transition-colors no-underline"
      >
        <Home size={15} />
      </Link>
      {segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        const isLast = index === segments.length - 1;
        const label = routeLabels[segment] || segment;

        // Skip dynamic segments like [id]
        if (segment.startsWith('[') || segment.match(/^[a-z0-9]{10,}$/)) return null;

        return (
          <span key={segment} className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-slate-300 dark:text-slate-600" />
            {isLast ? (
              <span className="text-slate-700 dark:text-slate-200 font-medium">{label}</span>
            ) : (
              <Link
                href={href}
                className="text-slate-400 dark:text-slate-500 hover:text-primary-500 transition-colors no-underline"
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
