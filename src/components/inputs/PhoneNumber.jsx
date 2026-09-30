import { useFormContext } from "react-hook-form";

const PhoneNumber = ({ label, name, required = false, countryCode = "+92" }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={name} className="text-xs font-semibold text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className={`
        flex items-center border rounded-lg overflow-hidden transition-all duration-200
        ${errors[name]
          ? "border-red-400 focus-within:border-red-500"
          : "border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200"
        }
      `}>
        <div className="px-3 py-2.5 bg-gray-50 border-r border-gray-300 text-sm text-gray-500 font-medium shrink-0">
          <span className="text-xs">PK</span>
          <span className="ml-1">{countryCode}</span>
        </div>

        <input
          id={name}
          type="tel"
          placeholder="Enter Phone Number"
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          className="w-full px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
        />
      </div>

      {errors[name] && (
        <span className="text-xs text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default PhoneNumber;
