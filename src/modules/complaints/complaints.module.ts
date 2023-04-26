import { Module } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { ComplaintsController } from './complaints.controller';
import { ComplaintProviders } from './complaint.providers';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [ComplaintsController],
  providers: [ComplaintsService, ...ComplaintProviders],
  exports: [ComplaintsService],
  imports: [DatabaseModule]
})
export class ComplaintsModule {}
