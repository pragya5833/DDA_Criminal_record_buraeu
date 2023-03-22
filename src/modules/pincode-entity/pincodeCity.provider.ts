import { PINCODE_CITY_REPOSITORY } from 'src/core/constants';
import { PincodeCity } from './entities/pincode-entity.entity';
export const PincodeCityProviders = [
  {
    provide: PINCODE_CITY_REPOSITORY,
    useValue: PincodeCity,
  },
];
