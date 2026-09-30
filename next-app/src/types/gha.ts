// ========================
// GHA Types & Interfaces
// ========================

export interface GHA {
  id: string;
  companyName: string;
  licenseNo: string;
  country: string;
  companyNo: string;
  contactName: string;
  email: string;
  status: GHAStatus;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
  terminalAssignment?: string;
  equipmentTypes?: string;
  groundHandlingLicense?: string;
  operationalAirports?: string;
  serviceScope?: ServiceScope;
  createdAt: string;
  updatedAt: string;
}

export type GHAStatus = "Active" | "Inactive" | "Pending";
export type ServiceScope = "Full" | "Partial" | "Cargo-Only";

export interface CreateGHAInput {
  companyName: string;
  licenseNo: string;
  country: string;
  companyNo: string;
  contactName: string;
  email: string;
  status?: GHAStatus;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
  terminalAssignment?: string;
  equipmentTypes?: string;
  groundHandlingLicense?: string;
  operationalAirports?: string;
  serviceScope?: ServiceScope;
}

export interface UpdateGHAInput extends Partial<CreateGHAInput> {
  id: string;
}
