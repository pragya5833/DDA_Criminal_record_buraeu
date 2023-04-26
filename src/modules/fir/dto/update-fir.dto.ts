import { PartialType } from '@nestjs/mapped-types';
import { CreateFirDto } from './create-fir.dto';
import { Fir_Status } from 'src/core/constants';

export class UpdateFirDto {
  fir_status?: Fir_Status;
}
