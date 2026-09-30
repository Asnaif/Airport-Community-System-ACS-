import FormField from "../inputs/FormFields";
import FormSelect from "../inputs/FormSelect";

const airportOptions = [
  { label: "Jinnah International Airport", value: "KHI" },
  { label: "Allama Iqbal International Airport", value: "LHE" },
  { label: "Islamabad International Airport", value: "ISB" },
];

const airportCityOptions = [
  { label: "Karachi", value: "Karachi" },
  { label: "Lahore", value: "Lahore" },
  { label: "Islamabad", value: "Islamabad" },
];

const AirportScopeSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 mt-6">
      {/* Row 6 */}
      <FormSelect label="Airport" name="airport" required options={airportOptions} />
      <FormSelect label="City" name="airportCity" required options={airportCityOptions} />
      <FormField label="Airport Code" name="airportCode" required />
      <FormField label="ICAO Airport Code" name="icaoAirportCode" required />
    </div>
  );
};

export default AirportScopeSection;
