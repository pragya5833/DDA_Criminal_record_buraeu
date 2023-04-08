import { Complaint_Status } from 'src/core/constants';

export class CreateComplaintDto {
  complaint_status?: Complaint_Status;
  created_by: number;
  station_code: number;
}
