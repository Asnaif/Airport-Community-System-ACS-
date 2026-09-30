const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      id="login-button"
      type={type}
      onClick={onClick}
      className={`w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white font-semibold text-base tracking-wide transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;