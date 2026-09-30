import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, ChevronRight, Plane, Warehouse } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

    return (
        <aside className="w-[280px] min-h-screen bg-gradient-to-b from-[#1a2e4a] to-[#15253d] text-[#e2e8f0] flex flex-col shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6]" />
            <div className="px-6 pt-7 pb-5 border-b border-[rgba(255,255,255,0.08)]">
                <h1 className="text-xl font-bold tracking-wide text-white flex items-center gap-2.5 m-0">
                    <span className="w-8 h-8 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-lg flex items-center justify-center shrink-0">
            <Plane className="w-4.5 h-4.5 text-white" />
                </span>
                Airlines Community
                </h1>
            </div>
            <nav className="p-3 flex-1">
                <button 
                    onClick={() => setOpen(!open)}
                    className={`
                        w-full flex items-center justify-between px-4 py-3 rounded-xl
                        border text-[15px] font-medium cursor-pointer
                        transition-all duration-200
                        ${
                        open
                            ? "bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)] text-white"
                            : "bg-transparent border-transparent text-[#cbd5e1] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.08)] hover:text-white"
                        }
                    `}
                            >
                    <div className="flex items-center gap-3">
                        <span className="w-9 h-9 bg-[rgba(59,130,246,0.15)] rounded-lg flex items-center justify-center">
                        <Building2 className="w-[18px] h-[18px] text-[#60a5fa]" />
                        </span>
                        Organization
                    </div>
                     <span
                        className={`flex items-center transition-transform duration-300 ${
                        open ? "rotate-90" : ""
                        }`}
                    >
                        <ChevronRight className="w-4 h-4 text-[#64748b]" />
                    </span>
                </button>
                <div
                className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-[160px] opacity-100 mt-1.5" : "max-h-0 opacity-0 mt-0"}
          `}
                >
                    <div className="ml-7 pl-4 border-l-2 border-[rgba(59,130,246,0.25)] flex flex-col gap-1">
            <Link to="/airline" className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#94a3b8] text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-white hover:translate-x-1 text-left no-underline">
              <Plane className="w-4 h-4 text-[#60a5fa] shrink-0" />
              Airlines
            </Link>
            <Link to="/gha" className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[#94a3b8] text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-white hover:translate-x-1 text-left no-underline">
              <Warehouse className="w-4 h-4 text-[#60a5fa] shrink-0" />
              GHA
            </Link>
            </div>


                </div>

            </nav>

        </aside>
    )
};

export default Sidebar;