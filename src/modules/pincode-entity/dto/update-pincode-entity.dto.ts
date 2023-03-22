import { PartialType } from '@nestjs/mapped-types';
import { CreatePincodeEntityDto } from './create-pincode-entity.dto';

export class UpdatePincodeEntityDto extends PartialType(CreatePincodeEntityDto) {}
