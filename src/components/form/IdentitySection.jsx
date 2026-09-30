import FormField from "../inputs/FormFields";
import FormSelect from "../inputs/FormSelect";

const countryOptions = [
  { label: "Pakistan", value: "Pakistan" },
  { label: "UAE", value: "UAE" },
  { label: "Saudi Arabia", value: "Saudi Arabia" },
  { label: "Turkey", value: "Turkey" },
  { label: "Qatar", value: "Qatar" },
];

const stateOptions = [
  { label: "Punjab", value: "Punjab" },
  { label: "Sindh", value: "Sindh" },
  { label: "KPK", value: "KPK" },
  { label: "Balochistan", value: "Balochistan" },
];

const cityOptions = [
  { label: "Karachi", value: "Karachi" },
  { label: "Lahore", value: "Lahore" },
  { label: "Islamabad", value: "Islamabad" },
  { label: "Faisalabad", value: "Faisalabad" },
];

const IdentitySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
      {/* Row 1 */}
      <FormField label="Legal Name" name="legalName" required />
      <FormField label="NTN" name="ntn" required />
      <FormField label="Registered Address 1 in Pakistan" name="address1" required />
      <FormField label="Registered Address 2 in Pakistan" name="address2" />

      {/* Row 2 */}
      <FormSelect label="Country" name="country" required options={countryOptions} />
      <FormSelect label="State" name="state" options={stateOptions} />
      <FormSelect label="City" name="city" required options={cityOptions} />
      <FormField label="Postal Code" name="postalCode" />
    </div>
  );
};

export default IdentitySection;
