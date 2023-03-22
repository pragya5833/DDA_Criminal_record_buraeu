import {POLICE_STATION_REPOSITORY} from '../../core/constants';
import {PoliceStation} from './entities/police-station.entity';
export const PoliceStationProviders = [
    {
        provide: POLICE_STATION_REPOSITORY,
        useValue: PoliceStation,
    },
];