'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ColDef } from 'ag-grid-community';
import DataTable from '@/components/ui/DataTable';
import Badge from '@/components/ui/Badge';
import { airlineData } from '@/data/seed';
import { Airline } from '@/types/airline';
import { Edit2, Eye, MoreHorizontal, ShieldCheck, Mail, Phone, PlaneTakeoff, Globe } from 'lucide-react';

export default function AirlinesPage() {
  const router = useRouter();

  const columnDefs = useMemo<ColDef<Airline>[]>(() => [
    {
      headerName: 'Airline Details',
      field: 'legalName',
      minWidth: 280,
      flex: 1.5,
      cellRenderer: (params: any) => {
        if (!params.value) return null;
        return (
          <div className="flex items-center gap-3 py-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center shrink-0 border border-primary-100 dark:border-primary-800/50">
              <span className="text-sm font-bold text-primary-700 dark:text-primary-400">
                {params.data.iataCode}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {params.value}
              </p>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><PlaneTakeoff size={12} /> {params.data.icaoCode}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="flex items-center gap-1"><Globe size={12} /> {params.data.country}</span>
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
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-primary-500" /> {params.value}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Mail size={12} /> {params.data.email}
            </p>
          </div>
        );
      }
    },
    {
      headerName: 'Company Reg.',
      field: 'companyNo',
      width: 160,
      cellRenderer: (params: any) => (
        <div className="flex items-center h-full">
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-700">
            {params.value}
          </span>
        </div>
      )
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
            onClick={() => router.push(/airlines//edit)}
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
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Airlines Management</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage all registered airlines in the system</p>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4">
        <DataTable
          rowData={airlineData}
          columnDefs={columnDefs}
          createLink="/airlines/create"
          createLabel="New Airline"
        />
      </div>
    </div>
  );
}
