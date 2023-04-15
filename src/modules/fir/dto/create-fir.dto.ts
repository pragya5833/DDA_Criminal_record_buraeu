import { Fir_Status } from 'src/core/constants';

export class CreateFirDto {
  complaint_id: number;
  admin_id: number;
  fir_status?: Fir_Status;
}
