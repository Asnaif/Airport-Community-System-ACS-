import { Search, Bell, Plane, UserCircle, ChevronDown } from "lucide-react";
const Header = () => {
    return (
        <header className="w-full h-22 bg-white text-lg border-b border-[#e2e8f0] gap-4 flex items-center justify-between px-10 shadow-sm">
            <h1 className="text-3xl font-bold text-[#1e293b] whitespace-nowrap">
                Home Airline
            </h1>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-5">
                    <Search className="w-4 h-4 text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2 " />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-56 h-9 pl-10 pr-4 rounded-lg bg-[#f1f5f9] border border-[#e2e8f0] text-sm text-[#334155] placeholder-[#94a3b8] outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all duration-200"
                    />
                </div>
                <button className="relative p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors duration-200 cursor-pointer">
                    <Bell className="w-7 h-7 text-[#64748b]" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ef4444] rounded-full"></span>
                </button>
                <div className="w-px h-8 bg-[#e2e8f0]"></div>
                {/* Currently Viewing Airline */}
                <div className="flex items-center gap-2 text-lg text-[#64748b]">
                    <Plane className="w-6 h-6 text-[#3b82f6]" />
                    <span>Currently viewing<br /> <strong className="text-[#1e293b]">Airline</strong></span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-[#f1f5f9] px-2 py-1.5 rounded-lg transition-colors duration-200">
                    <UserCircle className="w-8 h-8 text-[#3b82f6]" />
                    <span className="text-sm font-medium text-[#1e293b]">Asnaif</span>
                    <ChevronDown className="w-4 h-4 text-[#94a3b8]" />
                </div>
            </div>

        </header>

    )
};

export default Header;