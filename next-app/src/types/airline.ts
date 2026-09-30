// ========================
// Airline Types & Interfaces
// ========================

export interface Airline {
  id: string;
  legalName: string;
  iataCode: string;
  icaoCode: string;
  airlinePrefix: string;
  country: string;
  companyNo: string;
  contactName: string;
  email: string;
  status: AirlineStatus;
  ntn?: string;
  address1?: string;
  address2?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  licenseNo?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactDesignation?: string;
  incCountry?: string;
  incNo?: string;
  operatingModel?: OperatingModel;
  airport?: string;
  airportCity?: string;
  airportCode?: string;
  icaoAirportCode?: string;
  createdAt: string;
  updatedAt: string;
}

export type AirlineStatus = "Active" | "Inactive" | "Pending";
export type OperatingModel = "FSC" | "LCC" | "Charter";

export interface CreateAirlineInput {
  legalName: string;
  iataCode: string;
  icaoCode: string;
  airlinePrefix: string;
  country: string;
  companyNo: string;
  contactName: string;
  email: string;
  status?: AirlineStatus;
  ntn?: string;
  address1?: string;
  address2?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  licenseNo?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactDesignation?: string;
  incCountry?: string;
  incNo?: string;
  operatingModel?: OperatingModel;
  airport?: string;
  airportCity?: string;
  airportCode?: string;
  icaoAirportCode?: string;
}

export interface UpdateAirlineInput extends Partial<CreateAirlineInput> {
  id: string;
}

export interface AirlineStats {
  total: number;
  active: number;
  inactive: number;
  pending: number;
}
