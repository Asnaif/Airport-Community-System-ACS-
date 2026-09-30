'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { monthlyFlightsData } from '@/data/seed';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function FlightChart() {
  const [chartType, setChartType] = useState<'area' | 'bar'>('area');

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-slate-800 dark:text-white">Flight Operations</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Monthly flights & passengers overview</p>
        </div>
        <div className="flex gap-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-0.5">
          <button
            onClick={() => setChartType('area')}
            className={cn('px-3 py-1 text-xs rounded-md font-medium transition-all cursor-pointer',
              chartType === 'area' ? 'bg-white dark:bg-slate-600 text-slate-700 dark:text-white shadow-sm' : 'text-slate-500'
            )}
          >
            Area
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={cn('px-3 py-1 text-xs rounded-md font-medium transition-all cursor-pointer',
              chartType === 'bar' ? 'bg-white dark:bg-slate-600 text-slate-700 dark:text-white shadow-sm' : 'text-slate-500'
            )}
          >
            Bar
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        {chartType === 'area' ? (
          <AreaChart data={monthlyFlightsData}>
            <defs>
              <linearGradient id="flightGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip
              contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area type="monotone" dataKey="flights" stroke="#3b82f6" strokeWidth={2.5} fill="url(#flightGradient)" />
          </AreaChart>
        ) : (
          <BarChart data={monthlyFlightsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip
              contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="flights" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="passengers" fill="#10b981" radius={[6, 6, 0, 0]} opacity={0.6} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
