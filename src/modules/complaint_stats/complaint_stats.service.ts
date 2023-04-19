import { Injectable, Inject } from '@nestjs/common';
import { CitizenService } from '../citizen/citizen.service';
import { ComplaintsService } from '../complaints/complaints.service';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/core/constants';

@Injectable()
export class ComplaintStatsService {
  constructor(
    private readonly complaintService: ComplaintsService,
    @Inject(SEQUELIZE) private readonly sequelize: Sequelize, // Inject the Sequelize instance
  ) {}
  getAllComplaintsRaisedByUser(citizenId: number) {
    return this.complaintService.getAllComplaintsRaisedByUser(citizenId);
  }

  getAllComplaintsRaisedAgainstUser(citizenId: number) {
    return this.complaintService.getAllComplaintsRaisedAgainstUser(citizenId);
  }

  getAllStattionsComplaintCounts() {
    return this.getComplaintsPerStation();
  }
  getAllPincodeComplaintCounts() {
    return this.getComplaintsPerPincode();
  }

  getComplaintsPerPincode = async () => {
    const query = 'SELECT * FROM complaints_per_pincode';
    const results = await this.sequelize.query(query);

    return results;
  };

  getComplaintsPerStation = async () => {
    const query = 'SELECT * FROM complaints_per_station';
    const results = await this.sequelize.query(query);

    return results;
  };
}
