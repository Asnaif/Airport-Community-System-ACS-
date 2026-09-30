import { useRef, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry, ValidationModule } from "ag-grid-community";
import { airlineRows } from "../data/airlineData";
import IconButton from "../components/buttons/IconButton";
import ActionButton from "../components/buttons/ActionButton";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

ModuleRegistry.registerModules([AllCommunityModule, ValidationModule]);

const AirlineTable = () => {
  const gridRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalRows, setTotalRows] = useState(0);

  const columnDefs = useMemo(
    () => [
      {
        headerName: "Legal Name",
        field: "legalName",
        flex: 1.3,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Iata Airline Code",
        field: "iataCode",
        flex: 1.2,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Icao Airline Code",
        field: "icaoCode",
        flex: 1.2,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Airline Prefix",
        field: "airlinePrefix",
        flex: 1,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Country of Incorporation",
        field: "country",
        flex: 1.3,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Company Incorporation No",
        field: "companyNo",
        flex: 1.4,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Primary Contact Name",
        field: "contactName",
        flex: 1.3,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Email",
        field: "email",
        flex: 1.4,
        filter: true,
        sortable: true,
      },
      {
        headerName: "Status",
        field: "status",
        flex: 0.9,
        filter: true,
        sortable: true,
        cellRenderer: IconButton,

      },
      {
        headerName: "Action",
        field: "action",
        flex: 0.6,
        sortable: false,
        filter: false,
        cellRenderer: ActionButton,
      },
    ],
    []
  );

  // Search handler
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
    gridRef.current?.api?.setGridOption("quickFilterText", e.target.value);
  };

  // Pagination state sync
  const onPaginationChanged = useCallback(() => {
    if (gridRef.current?.api) {
      const api = gridRef.current.api;
      setCurrentPage(api.paginationGetCurrentPage());
      setTotalPages(api.paginationGetTotalPages());
      setTotalRows(api.paginationGetRowCount());
    }
  }, []);

  // Custom pagination functions
  const goToFirstPage = () => gridRef.current?.api?.paginationGoToFirstPage();
  const goToPrevPage = () =>
    gridRef.current?.api?.paginationGoToPreviousPage();
  const goToNextPage = () => gridRef.current?.api?.paginationGoToNextPage();
  const goToLastPage = () => gridRef.current?.api?.paginationGoToLastPage();

  const onPageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    gridRef.current?.api?.paginationSetPageSize(newSize);
  };

  // Calculate display range
  const startRow = currentPage * pageSize + 1;
  const endRow = Math.min(startRow + pageSize - 1, totalRows);

  return (
    <div className="w-full p-6">

      {/* Search Bar + Create Button */}
      <div className="flex items-center justify-end gap-3 mb-5">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white w-56">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={onSearchChange}
            className="w-full outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent"
          />
        </div>
        <Link to="/airline/create-airline" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-sm no-underline">
          <Plus size={16} />
          Create
        </Link>
      </div>

      {/* AG Grid Table */}
      <div className="ag-theme-quartz airline-table" style={{ height: 460, width: "100%" }}>
        <AgGridReact
          ref={gridRef}
          rowData={airlineRows}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={pageSize}
          paginationPageSizeSelector={[5, 10, 20, 50]}
          suppressPaginationPanel={true}
          onPaginationChanged={onPaginationChanged}
          domLayout="normal"
          rowHeight={70}
          headerHeight={52}
          defaultColDef={{
            resizable: true,
          }}
          getRowStyle={(params) => ({
            borderBottom: "1px solid #f1f5f9",
          })}
        />
      </div>

      {/* Custom Pagination Bar */}
      <div className="flex items-center justify-between mt-5 px-1">
        {/* Left Side — Page Navigation + Items Per Page */}
        <div className="flex items-center gap-3">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={goToFirstPage}
              disabled={currentPage === 0}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronsLeft size={16} />
            </button>
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Page Number */}
            <span className="w-8 h-8 flex items-center justify-center rounded border border-blue-500 bg-blue-50 text-blue-600 text-sm font-semibold">
              {currentPage + 1}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages - 1}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={goToLastPage}
              disabled={currentPage >= totalPages - 1}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronsRight size={16} />
            </button>
          </div>

          {/* Items Per Page Dropdown */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <select
              value={pageSize}
              onChange={onPageSizeChange}
              className="border border-gray-200 rounded px-2 py-1.5 text-sm text-gray-600 bg-white outline-none cursor-pointer"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span>items per page</span>
          </div>
        </div>

        {/* Right Side — Showing X - Y of Z items */}
        <div className="text-sm text-gray-500">
          {totalRows > 0
            ? `${startRow} - ${endRow} of ${totalRows} items`
            : "0 items"}
        </div>
      </div>
    </div>
  );
};

export default AirlineTable;