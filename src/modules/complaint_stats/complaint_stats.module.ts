import { Module } from '@nestjs/common';
import { ComplaintStatsService } from './complaint_stats.service';
import { ComplaintStatsController } from './complaint_stats.controller';
import { ComplaintsModule } from '../complaints/complaints.module';

@Module({
  controllers: [ComplaintStatsController],
  providers: [ComplaintStatsService],
  imports: [ComplaintsModule],
})
export class ComplaintStatsModule {}
