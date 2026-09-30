import { useFormContext } from "react-hook-form";

const FormField = ({ label, name, required = false, type = "text", placeholder }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={name} className="text-xs font-semibold text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder || `Enter ${label}`}
        {...register(name, {
          required: required ? `${label} is required` : false,
        })}
        className={`
          w-full border rounded-lg px-3 py-2.5 text-sm text-gray-700
          placeholder-gray-400 outline-none transition-all duration-200
          ${errors[name]
            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          }
        `}
      />

      {errors[name] && (
        <span className="text-xs text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default FormField;
