import { useFormContext } from "react-hook-form";
import { ChevronDown } from "lucide-react";

const FormSelect = ({ label, name, required = false, options = [] }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={name} className="text-xs font-semibold text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Relative wrapper — arrow icon ko select ke andar rakhne ke liye */}
      <div className="relative">
        <select
          id={name}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          className={`
            w-full border rounded-lg px-3 py-2.5 pr-9 text-sm text-gray-700
            outline-none bg-white transition-all duration-200 appearance-none
            cursor-pointer
            ${errors[name]
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
            }
          `}
        >
          <option value="">Select {label}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Dropdown Arrow */}
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>

      {errors[name] && (
        <span className="text-xs text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default FormSelect;
