import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CitizenModule } from './modules/citizen/citizen.module';
import { AuthModule } from './modules/auth/auth.module';
import { PincodeEntityModule } from './modules/pincode-entity/pincode-entity.module';
import { PoliceStationModule } from './modules/police-station/police-station.module';
import { CitizenAadharModule } from './modules/citizen_aadhar/citizen_aadhar.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CitizenModule,
    AuthModule,
    PincodeEntityModule,
    PoliceStationModule,
    CitizenAadharModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
