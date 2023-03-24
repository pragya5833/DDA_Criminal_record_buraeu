import { PartialType } from '@nestjs/mapped-types';
import { CreateCitizenPhoneDto } from './create-citizen_phone.dto';

export class UpdateCitizenPhoneDto extends PartialType(CreateCitizenPhoneDto) {}
