import { Fir_Status } from 'src/core/constants';

export class CreateFirUpdatesDto {
  fir_id: number;
  admin_id: number;
  old_status?: Fir_Status;
  new_status?: Fir_Status;
}
