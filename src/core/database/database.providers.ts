import { Sequelize } from 'sequelize-typescript';
import { Citizen } from 'src/modules/citizen/citizen.entity';
import { PoliceStation } from 'src/modules/police-station/entities/police-station.entity';
import { PincodeCity } from 'src/modules/pincode-entity/entities/pincode-entity.entity';
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
      sequelize.addModels([PincodeCity, Citizen, PoliceStation]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
