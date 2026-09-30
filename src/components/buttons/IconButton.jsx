const IconButton = (params) => {
    const isActive = params.value === "Active";

    const toggleStatus = () => {
        const newStatus = isActive ? "Inactive" : "Active";
        // AG Grid ki row ka data update karo
        params.node.setDataValue("status", newStatus);
    };

    return (
        <button
            onClick={toggleStatus}
            className={`px-4 py-1 rounded text-xs font-semibold border cursor-pointer transition-all duration-200 ${isActive
                    ? "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
                    : "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                }`}
        >
            {params.value}
        </button>
    );
};

export default IconButton;
// C:\Projects\ACS\my-airlines\src\components\buttons\IconButton.jsx