import { Sequelize } from 'sequelize-typescript';
import { Citizen } from 'src/modules/citizen/citizen.entity';
import { PoliceStation } from 'src/modules/police-station/entities/police-station.entity';
import { PincodeCity } from 'src/modules/pincode-entity/entities/pincode-entity.entity';
import { CitizenAadhar } from 'src/modules/citizen_aadhar/entities/citizen_aadhar.entity';
import { CitizenPhone } from 'src/modules/citizen_phone/entities/citizen_phone.entity';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize({ ...config, alter: true });
      sequelize.addModels([
        PincodeCity,
        Citizen,
        PoliceStation,
        CitizenAadhar,
        CitizenPhone,
        Admin,
      ]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
