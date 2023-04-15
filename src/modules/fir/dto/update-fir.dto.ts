import { PartialType } from '@nestjs/mapped-types';
import { CreateFirDto } from './create-fir.dto';

export class UpdateFirDto extends PartialType(CreateFirDto) {}
