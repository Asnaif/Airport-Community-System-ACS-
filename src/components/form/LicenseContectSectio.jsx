import FormField from "../inputs/FormFields";
import FormSelect from "../inputs/FormSelect";
import PhoneNumber from "../inputs/PhoneNumber";

const incCountryOptions = [
  { label: "Pakistan", value: "Pakistan" },
  { label: "UAE", value: "UAE" },
  { label: "Saudi Arabia", value: "Saudi Arabia" },
];

const iataOptions = [
  { label: "PK — PIA", value: "PK" },
  { label: "PA — Airblue", value: "PA" },
  { label: "EK — Emirates", value: "EK" },
];

const icaoOptions = [
  { label: "PIA", value: "PIA" },
  { label: "ABQ", value: "ABQ" },
  { label: "UAE", value: "UAE" },
];

const operatingModelOptions = [
  { label: "Full Service Carrier", value: "FSC" },
  { label: "Low Cost Carrier", value: "LCC" },
  { label: "Charter", value: "Charter" },
];

const LicenseContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 mt-6">
      {/* Row 3 */}
      <FormField label="License Number" name="licenseNo" required />
      <FormField label="Primary Contact Name" name="contactName" required />
      <FormField label="Primary Contact Email" name="contactEmail" required type="email" />
      <PhoneNumber label="Primary Contact Phone Number" name="phone" required />

      {/* Row 4 */}
      <FormField label="Primary Contact Designation" name="designation" required />
      <FormSelect label="Country of Incorporation" name="incCountry" required options={incCountryOptions} />
      <FormField label="Company Incorporation No" name="incNo" required />
      <FormSelect label="IATA Airline Code" name="iataCode" required options={iataOptions} />

      {/* Row 5 */}
      <FormSelect label="ICAO Airline Code" name="icaoCode" required options={icaoOptions} />
      <FormField label="Airline Prefix" name="prefix" required />
      <FormSelect label="Operating Model" name="operatingModel" required options={operatingModelOptions} />
      <div />
    </div>
  );
};

export default LicenseContactSection;
