import { Module } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { citizenProviders } from './citizen.providers';

@Module({
  providers: [CitizenService, ...citizenProviders],
    exports: [CitizenService],
})
export class CitizenModule {}
