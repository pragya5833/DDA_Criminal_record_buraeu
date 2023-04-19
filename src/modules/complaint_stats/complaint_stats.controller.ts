import { Controller, Get, Param } from '@nestjs/common';
import { ComplaintStatsService } from './complaint_stats.service';

@Controller('complaint-stats')
export class ComplaintStatsController {
  constructor(private readonly complaintStatsService: ComplaintStatsService) {}
  @Get('/getAllComplaintsRaisedByUser/:citizenId')
  getComplaintRaisedByUser(@Param('citizenId') citizenId: number) {
    return this.complaintStatsService.getAllComplaintsRaisedByUser(citizenId);
  }

  @Get('/getAllComplaintsRaisedAgainstUser/:citizenId')
  getAllComplaintsRaisedAgainstUser(@Param('citizenId') citizenId: number) {
    return this.complaintStatsService.getAllComplaintsRaisedAgainstUser(
      citizenId,
    );
  }

  @Get('/getAllStattionsComplaintCounts')
  getAllStattionsComplaintCounts() {
    return this.complaintStatsService.getAllStattionsComplaintCounts();
  }

  @Get('/getAllPincodeComplaintCounts')
  getAllPincodeComplaintCounts() {
    return this.complaintStatsService.getAllPincodeComplaintCounts();
  }
}
