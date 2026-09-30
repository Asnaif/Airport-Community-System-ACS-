import { Airline } from '@/types/airline';
import { GHA } from '@/types/gha';
import { generateId } from '@/lib/utils';

export const airlineData: Airline[] = [
  { id: generateId(), legalName: 'PIA', iataCode: 'PK', icaoCode: 'PIA', airlinePrefix: '214', country: 'Pakistan', companyNo: '1234567', contactName: 'Salman Ahmad', email: 'salman@gmail.com', status: 'Active', createdAt: '2024-01-15', updatedAt: '2024-06-20' },
  { id: generateId(), legalName: 'Airblue', iataCode: 'PA', icaoCode: 'ABQ', airlinePrefix: '215', country: 'Pakistan', companyNo: '2345678', contactName: 'Rayman Ali', email: 'rayman@gmail.com', status: 'Active', createdAt: '2024-02-10', updatedAt: '2024-07-15' },
  { id: generateId(), legalName: 'Air Sial', iataCode: 'PP', icaoCode: 'SIP', airlinePrefix: '216', country: 'Pakistan', companyNo: '3456789', contactName: 'Hassan Raza', email: 'hassan@airsial.com', status: 'Active', createdAt: '2024-03-01', updatedAt: '2024-08-05' },
  { id: generateId(), legalName: 'Fly Jinnah', iataCode: 'SP', icaoCode: 'FUL', airlinePrefix: '217', country: 'Pakistan', companyNo: '4567890', contactName: 'Ali Khan', email: 'ali@flyjinnah.com', status: 'Inactive', createdAt: '2024-03-20', updatedAt: '2024-09-10' },
  { id: generateId(), legalName: 'Emirates', iataCode: 'EK', icaoCode: 'UAE', airlinePrefix: '176', country: 'UAE', companyNo: '9876543', contactName: 'Ahmed Khan', email: 'ahmed@emirates.com', status: 'Active', createdAt: '2024-01-05', updatedAt: '2024-05-25' },
  { id: generateId(), legalName: 'Qatar Airways', iataCode: 'QR', icaoCode: 'QTR', airlinePrefix: '157', country: 'Qatar', companyNo: '5678901', contactName: 'Ali Raza', email: 'ali@qatar.com', status: 'Active', createdAt: '2024-02-28', updatedAt: '2024-07-30' },
  { id: generateId(), legalName: 'Turkish Airlines', iataCode: 'TK', icaoCode: 'THY', airlinePrefix: '235', country: 'Turkey', companyNo: '3456789', contactName: 'Mehmet Yilmaz', email: 'mehmet@turkish.com', status: 'Inactive', createdAt: '2024-04-10', updatedAt: '2024-08-15' },
  { id: generateId(), legalName: 'Etihad Airways', iataCode: 'EY', icaoCode: 'ETD', airlinePrefix: '607', country: 'UAE', companyNo: '2345678', contactName: 'Omar Siddiqui', email: 'omar@etihad.com', status: 'Active', createdAt: '2024-01-25', updatedAt: '2024-06-10' },
  { id: generateId(), legalName: 'Saudi Airlines', iataCode: 'SV', icaoCode: 'SVA', airlinePrefix: '065', country: 'Saudi Arabia', companyNo: '1122334', contactName: 'Faisal Khan', email: 'faisal@saudi.com', status: 'Active', createdAt: '2024-05-05', updatedAt: '2024-09-20' },
  { id: generateId(), legalName: 'British Airways', iataCode: 'BA', icaoCode: 'BAW', airlinePrefix: '125', country: 'United Kingdom', companyNo: '7788990', contactName: 'James Smith', email: 'james@ba.com', status: 'Active', createdAt: '2024-02-15', updatedAt: '2024-07-05' },
  { id: generateId(), legalName: 'Lufthansa', iataCode: 'LH', icaoCode: 'DLH', airlinePrefix: '220', country: 'Germany', companyNo: '5566778', contactName: 'Hans Mueller', email: 'hans@lufthansa.com', status: 'Active', createdAt: '2024-03-10', updatedAt: '2024-08-25' },
  { id: generateId(), legalName: 'Singapore Airlines', iataCode: 'SQ', icaoCode: 'SIA', airlinePrefix: '618', country: 'Singapore', companyNo: '8899001', contactName: 'Tan Wei', email: 'tan@singapore.com', status: 'Active', createdAt: '2024-04-20', updatedAt: '2024-09-01' },
  { id: generateId(), legalName: 'Cathay Pacific', iataCode: 'CX', icaoCode: 'CPA', airlinePrefix: '160', country: 'Hong Kong', companyNo: '3344556', contactName: 'Wong Li', email: 'wong@cathaypacific.com', status: 'Inactive', createdAt: '2024-05-15', updatedAt: '2024-10-05' },
  { id: generateId(), legalName: 'Malaysia Airlines', iataCode: 'MH', icaoCode: 'MAS', airlinePrefix: '232', country: 'Malaysia', companyNo: '6677889', contactName: 'Ahmad Bin', email: 'ahmad@malaysia.com', status: 'Active', createdAt: '2024-06-01', updatedAt: '2024-10-20' },
  { id: generateId(), legalName: 'Gulf Air', iataCode: 'GF', icaoCode: 'GFA', airlinePrefix: '072', country: 'Bahrain', companyNo: '9900112', contactName: 'Hassan Ali', email: 'hassan@gulfair.com', status: 'Active', createdAt: '2024-03-25', updatedAt: '2024-08-10' },
  { id: generateId(), legalName: 'Flydubai', iataCode: 'FZ', icaoCode: 'FDB', airlinePrefix: '141', country: 'UAE', companyNo: '8877665', contactName: 'Rashid Omar', email: 'rashid@flydubai.com', status: 'Active', createdAt: '2024-07-10', updatedAt: '2024-11-01' },
  { id: generateId(), legalName: 'Air India', iataCode: 'AI', icaoCode: 'AIC', airlinePrefix: '098', country: 'India', companyNo: '4455667', contactName: 'Raj Patel', email: 'raj@airindia.com', status: 'Inactive', createdAt: '2024-04-05', updatedAt: '2024-09-15' },
  { id: generateId(), legalName: 'Oman Air', iataCode: 'WY', icaoCode: 'OMA', airlinePrefix: '910', country: 'Oman', companyNo: '2233445', contactName: 'Said Al', email: 'said@omanair.com', status: 'Inactive', createdAt: '2024-08-20', updatedAt: '2024-12-01' },
  { id: generateId(), legalName: 'Kuwait Airways', iataCode: 'KU', icaoCode: 'KAC', airlinePrefix: '229', country: 'Kuwait', companyNo: '4455223', contactName: 'Abdullah Mo', email: 'abdullah@kuwait.com', status: 'Active', createdAt: '2024-05-30', updatedAt: '2024-10-10' },
  { id: generateId(), legalName: 'IndiGo', iataCode: '6E', icaoCode: 'IGO', airlinePrefix: '312', country: 'India', companyNo: '9988776', contactName: 'Vikram Sharma', email: 'vikram@indigo.com', status: 'Inactive', createdAt: '2024-06-15', updatedAt: '2024-11-20' },
];

export const ghaData: GHA[] = [
  { id: generateId(), companyName: 'Shaheen Airport Services', licenseNo: 'GHA-001', country: 'Pakistan', companyNo: 'SAS-12345', contactName: 'Imran Malik', email: 'imran@sas.pk', status: 'Active', serviceScope: 'Full', terminalAssignment: 'Terminal 1', createdAt: '2024-01-10', updatedAt: '2024-06-15' },
  { id: generateId(), companyName: 'Royal Airport Services', licenseNo: 'GHA-002', country: 'Pakistan', companyNo: 'RAS-67890', contactName: 'Farhan Ahmed', email: 'farhan@ras.pk', status: 'Active', serviceScope: 'Full', terminalAssignment: 'Terminal 2', createdAt: '2024-02-20', updatedAt: '2024-07-25' },
  { id: generateId(), companyName: 'Gerry s dnata', licenseNo: 'GHA-003', country: 'Pakistan', companyNo: 'GDN-11223', contactName: 'Aslam Raza', email: 'aslam@dnata.pk', status: 'Active', serviceScope: 'Full', terminalAssignment: 'All Terminals', createdAt: '2024-03-15', updatedAt: '2024-08-20' },
  { id: generateId(), companyName: 'AeroGround Pakistan', licenseNo: 'GHA-004', country: 'Pakistan', companyNo: 'AGP-44556', contactName: 'Bilal Hussain', email: 'bilal@aeroground.pk', status: 'Inactive', serviceScope: 'Partial', terminalAssignment: 'Terminal 1', createdAt: '2024-04-01', updatedAt: '2024-09-10' },
  { id: generateId(), companyName: 'Emirates Ground Handling', licenseNo: 'GHA-005', country: 'UAE', companyNo: 'EGH-77889', contactName: 'Khalid Omar', email: 'khalid@egh.ae', status: 'Active', serviceScope: 'Full', terminalAssignment: 'Terminal 3', createdAt: '2024-05-10', updatedAt: '2024-10-05' },
  { id: generateId(), companyName: 'Swissport Pakistan', licenseNo: 'GHA-006', country: 'Pakistan', companyNo: 'SWP-99001', contactName: 'Tariq Ali', email: 'tariq@swissport.pk', status: 'Active', serviceScope: 'Cargo-Only', terminalAssignment: 'Cargo Area', createdAt: '2024-06-20', updatedAt: '2024-11-15' },
];

// Dashboard chart data
export const monthlyFlightsData = [
  { month: 'Jan', flights: 1240, passengers: 86800 },
  { month: 'Feb', flights: 1180, passengers: 82600 },
  { month: 'Mar', flights: 1350, passengers: 94500 },
  { month: 'Apr', flights: 1420, passengers: 99400 },
  { month: 'May', flights: 1520, passengers: 106400 },
  { month: 'Jun', flights: 1680, passengers: 117600 },
  { month: 'Jul', flights: 1890, passengers: 132300 },
  { month: 'Aug', flights: 1950, passengers: 136500 },
  { month: 'Sep', flights: 1720, passengers: 120400 },
  { month: 'Oct', flights: 1580, passengers: 110600 },
  { month: 'Nov', flights: 1340, passengers: 93800 },
  { month: 'Dec', flights: 1460, passengers: 102200 },
];

export const recentActivity = [
  { id: '1', action: 'New airline registered', entity: 'IndiGo Airlines', time: '2 hours ago', type: 'create' as const },
  { id: '2', action: 'Status updated', entity: 'PIA', time: '5 hours ago', type: 'update' as const },
  { id: '3', action: 'GHA license renewed', entity: 'Shaheen Airport Services', time: '1 day ago', type: 'update' as const },
  { id: '4', action: 'Airline deactivated', entity: 'Air India', time: '2 days ago', type: 'delete' as const },
  { id: '5', action: 'New GHA registered', entity: 'Swissport Pakistan', time: '3 days ago', type: 'create' as const },
];
