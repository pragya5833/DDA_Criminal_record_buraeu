import { Module } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { ComplaintsController } from './complaints.controller';
import { ComplaintProviders } from './complaint.providers';

@Module({
  controllers: [ComplaintsController],
  providers: [ComplaintsService, ...ComplaintProviders],
})
export class ComplaintsModule {}
