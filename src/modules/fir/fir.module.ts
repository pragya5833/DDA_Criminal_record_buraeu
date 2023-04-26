import { Module } from '@nestjs/common';
import { FirService } from './fir.service';
import { FirController } from './fir.controller';
import { firProviders } from './fir.providers';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [FirController],
  providers: [FirService, ...firProviders],
  imports: [DatabaseModule],
})
export class FirModule {}
