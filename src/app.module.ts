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
import { CitizenPhoneModule } from './modules/citizen_phone/citizen_phone.module';
import { AdminModule } from './modules/admin/admin.module';
import { ComplaintsModule } from './modules/complaints/complaints.module';
import { FirModule } from './modules/fir/fir.module';
import { ComplaintStatsModule } from './modules/complaint_stats/complaint_stats.module';
@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CitizenModule,
    AuthModule,
    PincodeEntityModule,
    PoliceStationModule,
    CitizenAadharModule,
    CitizenPhoneModule,
    AdminModule,
    ComplaintsModule,
    FirModule,
    ComplaintStatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
