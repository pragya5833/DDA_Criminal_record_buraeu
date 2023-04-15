import { Sequelize } from 'sequelize-typescript';
import { Citizen } from 'src/modules/citizen/citizen.entity';
import { PoliceStation } from 'src/modules/police-station/entities/police-station.entity';
import { PincodeCity } from 'src/modules/pincode-entity/entities/pincode-entity.entity';
import { CitizenAadhar } from 'src/modules/citizen_aadhar/entities/citizen_aadhar.entity';
import { CitizenPhone } from 'src/modules/citizen_phone/entities/citizen_phone.entity';
import { Admin } from 'src/modules/admin/entities/admin.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Complaint } from 'src/modules/complaints/entities/complaint.entity';
import { ComplaintAgainst } from 'src/modules/complaints/entities/complaint_against.entity';
import { ComplaintUpdates } from 'src/modules/complaints/entities/complaint_updates.entity';
import { Fir } from 'src/modules/fir/entities/fir.entity';
import { FirAgainst } from 'src/modules/fir/entities/fir_against.entity';
import { FirUpdates } from 'src/modules/fir/entities/fir_updates.entity';

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
        Complaint,
        ComplaintAgainst,
        ComplaintUpdates,
        Fir,
        FirAgainst,
        FirUpdates,
      ]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
