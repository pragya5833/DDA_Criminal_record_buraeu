export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
export const CITIZEN_REPOSITORY = 'CITIZEN_REPOSITORY';
export const PINCODE_CITY_REPOSITORY = 'PINCODE_CITY_REPOSITORY';
export const POLICE_STATION_REPOSITORY = 'POLICE_STATION_REPOSITORY';
export const CITIZEN_AADHAR_REPOSITORY = 'CITIZEN_AADHAR_REPOSITORY';
export const CITIZEN_PHONE_REPOSITORY = 'CITIZEN_PHONE_REPOSITORY';
export const COMPLAINT_REPOSITORY = 'COMPLAINT_REPOSITORY';
export const COMPLAINT_AGAINST_REPOSITORY = 'COMPLAINT_AGAINST_REPOSITORY';
export const ADMIN_REPOSITORY = 'ADMIN_REPOSITORY';
export const PINCODE_PRIMARY_KEY = 'pin_code';
export const CITIZEN_PRIMARY_KEY = 'id';
export const POLICE_STATION_PRIMARY_KEY = 'code';
export const CMPLAINT_PRIMARY_KEY = 'id';
export enum Complaint_Status {
  Open = 'Open',
  On_Hold = 'On Hold',
  Closed = 'Closed',
  FIR = 'FIR',
  Investigation = 'Investigation',
}
