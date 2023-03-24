import { Module } from '@nestjs/common';
import { CitizenPhoneService } from './citizen_phone.service';
import { CitizenPhoneController } from './citizen_phone.controller';
import { CitizenPhoneProviders } from './citizen_phone.providers';

@Module({
  controllers: [CitizenPhoneController],
  providers: [CitizenPhoneService, ...CitizenPhoneProviders],
})
export class CitizenPhoneModule {}
