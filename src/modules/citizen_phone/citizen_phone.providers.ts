
import { CitizenPhone } from './entities/citizen_phone.entity';
import { CITIZEN_PHONE_REPOSITORY } from '../../core/constants';

export const CitizenPhoneProviders = [
    {
        provide: CITIZEN_PHONE_REPOSITORY,
        useValue: CitizenPhone,
    },
];

