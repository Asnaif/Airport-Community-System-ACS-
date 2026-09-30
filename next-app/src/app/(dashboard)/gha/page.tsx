'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ColDef } from 'ag-grid-community';
import DataTable from '@/components/ui/DataTable';
import Badge from '@/components/ui/Badge';
import { ghaData } from '@/data/seed';
import { GHA } from '@/types/gha';
import { Edit2, MoreHorizontal, ShieldCheck, Mail, MapPin, Briefcase } from 'lucide-react';

export default function GHAPage() {
  const router = useRouter();

  const columnDefs = useMemo<ColDef<GHA>[]>(() => [
    {
      headerName: 'GHA Details',
      field: 'companyName',
      minWidth: 280,
      flex: 1.5,
      cellRenderer: (params: any) => {
        if (!params.value) return null;
        return (
          <div className="flex items-center gap-3 py-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
              <Briefcase size={18} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {params.value}
              </p>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> {params.data.licenseNo}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="flex items-center gap-1"><MapPin size={12} /> {params.data.country}</span>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      headerName: 'Contact Info',
      field: 'contactName',
      minWidth: 220,
      flex: 1.2,
      cellRenderer: (params: any) => {
        if (!params.value) return null;
        return (
          <div className="flex flex-col justify-center h-full gap-1">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {params.value}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Mail size={12} /> {params.data.email}
            </p>
          </div>
        );
      }
    },
    {
      headerName: 'Service Scope',
      field: 'serviceScope',
      width: 150,
      cellRenderer: (params: any) => {
        const colors: Record<string, string> = {
          'Full': 'text-purple-600 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-900/30 dark:border-purple-800',
          'Partial': 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-900/30 dark:border-blue-800',
          'Cargo-Only': 'text-orange-600 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-900/30 dark:border-orange-800',
        };
        const cl = colors[params.value] || 'text-slate-600 bg-slate-50 border-slate-200';
        return (
          <div className="flex items-center h-full">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${cl}`}>
              {params.value}
            </span>
          </div>
        );
      }
    },
    {
      headerName: 'Status',
      field: 'status',
      width: 130,
      cellRenderer: (params: any) => (
        <div className="flex items-center h-full">
          <Badge status={params.value as any} />
        </div>
      )
    },
    {
      headerName: 'Actions',
      field: 'id',
      width: 100,
      sortable: false,
      filter: false,
      cellRenderer: (params: any) => (
        <div className="flex items-center justify-end h-full gap-2">
          <button
            onClick={() => router.push(`/gha/${params.value}/edit`)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors cursor-pointer"
            title="Edit"
          >
            <Edit2 size={16} />
          </button>
          <button
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="More"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
      )
    }
  ], [router]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">GHA Management</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage Ground Handling Agents and their service scopes</p>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
        <DataTable
          rowData={ghaData}
          columnDefs={columnDefs}
          createLink="/gha/create"
          createLabel="New GHA"
        />
      </div>
    </div>
  );
}
