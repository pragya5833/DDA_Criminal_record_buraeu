import { Module } from '@nestjs/common';
import { FirService } from './fir.service';
import { FirController } from './fir.controller';
import { firProviders } from './fir.providers';

@Module({
  controllers: [FirController],
  providers: [FirService, ...firProviders],
})
export class FirModule {}
