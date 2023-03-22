import { Module } from '@nestjs/common';
import { CitizenAadharService } from './citizen_aadhar.service';
import { CitizenAadharController } from './citizen_aadhar.controller';
import { CitizenAadharProviders } from './citizen_aadhar.providers';

@Module({
  controllers: [CitizenAadharController],
  providers: [CitizenAadharService, ...CitizenAadharProviders],
})
export class CitizenAadharModule {}
