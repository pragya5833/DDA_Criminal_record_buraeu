import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CitizenModule } from './modules/citizen/citizen.module';
import { AuthModule } from './modules/auth/auth.module';
import { PincodeEntityModule } from './modules/pincode-entity/pincode-entity.module';
import { PoliceStationModule } from './modules/police-station/police-station.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CitizenModule,
    AuthModule,
    PincodeEntityModule,
    PoliceStationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
