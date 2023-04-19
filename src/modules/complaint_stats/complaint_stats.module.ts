import { Module } from '@nestjs/common';
import { ComplaintStatsService } from './complaint_stats.service';
import { ComplaintStatsController } from './complaint_stats.controller';
import { ComplaintsModule } from '../complaints/complaints.module';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [ComplaintStatsController],
  providers: [ComplaintStatsService],
  imports: [ComplaintsModule, DatabaseModule],
})
export class ComplaintStatsModule {}
