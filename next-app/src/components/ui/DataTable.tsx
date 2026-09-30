'use client';

import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, ColDef } from 'ag-grid-community';
import {
  Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Download
} from 'lucide-react';
import { cn } from '@/lib/utils';

ModuleRegistry.registerModules([AllCommunityModule]);

interface DataTableProps<T> {
  rowData: T[];
  columnDefs: ColDef<T>[];
  createLink?: string;
  createLabel?: string;
  onExport?: () => void;
  height?: number;
}

export default function DataTable<T>({
  rowData,
  columnDefs,
  createLink,
  createLabel = 'Create',
  onExport,
  height = 520,
}: DataTableProps<T>) {
  const gridRef = useRef<AgGridReact>(null);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    gridRef.current?.api?.setGridOption('quickFilterText', e.target.value);
  };

  const onPaginationChanged = useCallback(() => {
    if (gridRef.current?.api) {
      const api = gridRef.current.api;
      setCurrentPage(api.paginationGetCurrentPage());
      setTotalPages(api.paginationGetTotalPages());
      setTotalRows(api.paginationGetRowCount());
    }
  }, []);

  const goFirst = () => gridRef.current?.api?.paginationGoToFirstPage();
  const goPrev = () => gridRef.current?.api?.paginationGoToPreviousPage();
  const goNext = () => gridRef.current?.api?.paginationGoToNextPage();
  const goLast = () => gridRef.current?.api?.paginationGoToLastPage();

  const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = Number(e.target.value);
    setPageSize(size);
    gridRef.current?.api?.paginationSetPageSize(size);
  };

  const startRow = currentPage * pageSize + 1;
  const endRow = Math.min(startRow + pageSize - 1, totalRows);

  const handleExport = () => {
    if (onExport) {
      onExport();
    } else {
      gridRef.current?.api?.exportDataAsCsv({
        fileName: 'export.csv',
      });
    }
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Search Bar + Actions */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            <Download size={15} />
            Export
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 bg-white dark:bg-slate-800 w-60">
            <Search size={16} className="text-slate-400 dark:text-slate-500 shrink-0" />
            <input
              type="text"
              placeholder="Search records..."
              value={searchText}
              onChange={onSearchChange}
              className="w-full outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 bg-transparent"
            />
          </div>
          {createLink && (
            <Link
              href={createLink}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md shadow-primary-500/20 hover:shadow-lg no-underline active:scale-[0.97]"
            >
              <Plus size={16} />
              {createLabel}
            </Link>
          )}
        </div>
      </div>

      {/* AG Grid Table */}
      <div className="ag-theme-quartz rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700" style={{ height, width: '100%' }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={pageSize}
          paginationPageSizeSelector={[5, 10, 20, 50]}
          suppressPaginationPanel={true}
          onPaginationChanged={onPaginationChanged}
          domLayout="normal"
          rowHeight={60}
          headerHeight={48}
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
          }}
          animateRows={true}
          getRowStyle={() => ({
            borderBottom: '1px solid var(--border-color)',
          })}
        />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[
              { onClick: goFirst, disabled: currentPage === 0, icon: ChevronsLeft },
              { onClick: goPrev, disabled: currentPage === 0, icon: ChevronLeft },
            ].map(({ onClick, disabled, icon: Icon }, i) => (
              <button
                key={i}
                onClick={onClick}
                disabled={disabled}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <Icon size={16} />
              </button>
            ))}
            <span className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold">
              {currentPage + 1}
            </span>
            {[
              { onClick: goNext, disabled: currentPage >= totalPages - 1, icon: ChevronRight },
              { onClick: goLast, disabled: currentPage >= totalPages - 1, icon: ChevronsRight },
            ].map(({ onClick, disabled, icon: Icon }, i) => (
              <button
                key={i}
                onClick={onClick}
                disabled={disabled}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <select
              value={pageSize}
              onChange={onPageSizeChange}
              className="border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 outline-none cursor-pointer"
            >
              {[5, 10, 20, 50].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <span>per page</span>
          </div>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {totalRows > 0 ? `${startRow} - ${endRow} of ${totalRows} items` : '0 items'}
        </div>
      </div>
    </div>
  );
}
