import { PartialType } from '@nestjs/mapped-types';
import { CreateCitizenAadharDto } from './create-citizen_aadhar.dto';

export class UpdateCitizenAadharDto extends PartialType(CreateCitizenAadharDto) {}
