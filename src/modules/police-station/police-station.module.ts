import { Module } from '@nestjs/common';
import { PoliceStationService } from './police-station.service';
import { PoliceStationController } from './police-station.controller';
import { PoliceStationProviders } from './police_station.providers';

@Module({
  controllers: [PoliceStationController],
  providers: [PoliceStationService, ...PoliceStationProviders],
})
export class PoliceStationModule {}
