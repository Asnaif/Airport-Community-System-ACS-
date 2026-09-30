import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { MoreVertical, Pencil, Trash2, RefreshCw, Eye, Copy } from "lucide-react";

const ActionButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        if (!isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            // Calculate position below the button
            setCoords({
                top: rect.bottom + 4,
                left: rect.right - 176, // 176px is w-44 width
            });
        }
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleScrollOrResize = () => {
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScrollOrResize, true);
        window.addEventListener("resize", handleScrollOrResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScrollOrResize, true);
            window.removeEventListener("resize", handleScrollOrResize);
        };
    }, [isOpen]);

    const menuItems = [
        { label: "Edit", icon: Pencil, color: "text-blue-600" },
        { label: "Delete", icon: Trash2, color: "text-red-500" },
        { label: "Update", icon: RefreshCw, color: "text-green-600" },
        { label: "View Details", icon: Eye, color: "text-purple-600" },
        { label: "Duplicate", icon: Copy, color: "text-amber-600" },
    ];

    return (
        <div className="flex items-center h-full">
            {/* 3 Dots Vertical Button */}
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-md flex items-center justify-center cursor-pointer transition-colors duration-200"
                title="Actions"
            >
                <MoreVertical size={16} className="text-white" />
            </button>

            {/* Dropdown Menu via React Portal so AG Grid cell clipping doesn't hide it */}
            {isOpen &&
                createPortal(
                    <div
                        ref={dropdownRef}
                        style={{
                            top: `${coords.top}px`,
                            left: `${coords.left}px`,
                        }}
                        className="fixed z-[99999] w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-1.5"
                    >
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log(`${item.label} clicked`);
                                    setIsOpen(false);
                                }}
                                className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors duration-150 text-left"
                            >
                                <item.icon size={15} className={item.color} />
                                {item.label}
                            </button>
                        ))}
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default ActionButton;
