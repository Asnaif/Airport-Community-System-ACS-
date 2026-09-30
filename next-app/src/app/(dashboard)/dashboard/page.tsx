'use client';

import StatsCard from '@/components/ui/Card';
import FlightChart from '@/components/dashboard/FlightChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { Plane, Users, Warehouse, FileCheck2 } from 'lucide-react';
import { airlineData, ghaData } from '@/data/seed';
import { useAuthStore } from '@/stores/auth-store';

export default function DashboardPage() {
  const { user } = useAuthStore();
  const activeAirlines = airlineData.filter(a => a.status === 'Active').length;
  const activeGhas = ghaData.filter(g => g.status === 'Active').length;

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Welcome back, {user?.name || 'Admin'}! Here is what is happening today.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Active Airlines"
          count={activeAirlines}
          icon={Plane}
          color="blue"
          trend={{ value: 12, isUp: true }}
          delay={100}
        />
        <StatsCard
          title="Registered GHAs"
          count={activeGhas}
          icon={Warehouse}
          color="emerald"
          trend={{ value: 4, isUp: true }}
          delay={200}
        />
        <StatsCard
          title="Total Passengers"
          count={136500}
          icon={Users}
          color="amber"
          trend={{ value: 8, isUp: true }}
          delay={300}
        />
        <StatsCard
          title="Flight Operations"
          count={1950}
          icon={FileCheck2}
          color="rose"
          trend={{ value: 2.5, isUp: false }}
          delay={400}
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FlightChart />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
