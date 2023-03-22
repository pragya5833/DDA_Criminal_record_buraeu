

import { CitizenAadhar } from './entities/citizen_aadhar.entity';
import { CITIZEN_AADHAR_REPOSITORY } from '../../core/constants';
export const CitizenAadharProviders = [
  {
    provide: CITIZEN_AADHAR_REPOSITORY,
    useValue: CitizenAadhar,
  },
];
