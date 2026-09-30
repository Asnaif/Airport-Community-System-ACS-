const Input = ({ id, type, placeholder, value, onChange, icon: Icon }) => {
  return (
    <div className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-3 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300">
      {Icon && <Icon size={20} className="text-gray-400 shrink-0" />}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
      />
    </div>
  );
};

export default Input;