import { Citizen } from './citizen.entity';
import { CITIZEN_REPOSITORY } from '../../core/constants';

export const citizenProviders = [
  {
    provide: CITIZEN_REPOSITORY,
    useValue: Citizen,
  },
];
