import { Injectable } from '@nestjs/common';
import { CitizenService } from '../citizen/citizen.service';
import { ComplaintsService } from '../complaints/complaints.service';

@Injectable()
export class ComplaintStatsService {
  constructor(private readonly complaintService: ComplaintsService) {}
  getAllComplaintsRaisedByUser(citizenId: number) {
    return this.complaintService.getAllComplaintsRaisedByUser(citizenId);
  }

  getAllComplaintsRaisedAgainstUser(citizenId: number) {
    return this.complaintService.getAllComplaintsRaisedAgainstUser(citizenId);
  }
}
