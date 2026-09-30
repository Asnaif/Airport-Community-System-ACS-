import { useForm, FormProvider } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IdentitySection from "./IdentitySection";
import LicenseContactSection from "./LicenseContectSectio";
import AirportScopeSection from "./AirportScopeSection";

const CreateAirlineForm = () => {
  const methods = useForm({
    defaultValues: {
      legalName: "",
      ntn: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
      licenseNo: "",
      contactName: "",
      contactEmail: "",
      phone: "",
      designation: "",
      incCountry: "",
      incNo: "",
      iataCode: "",
      icaoCode: "",
      prefix: "",
      operatingModel: "",
      airport: "",
      airportCity: "",
      airportCode: "",
      icaoAirportCode: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("✅ Form Submitted: ", data);
  };

  return (
    <div className="w-full p-6">
      {/* Header: Back Arrow + Title */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Create Airline</h1>
      </div>

      {/* Form Card Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-6 pb-3 border-b border-gray-200">
          Identity Information
        </h2>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <IdentitySection />
            <LicenseContactSection />
            <AirportScopeSection />

            {/* Submit Button */}
            <div className="mt-8 flex justify-end pt-5 border-t border-gray-200">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium text-sm transition-colors cursor-pointer shadow-sm"
              >
                Create Airline
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateAirlineForm;
