import { PartialType } from '@nestjs/mapped-types';
import { CreatePoliceStationDto } from './create-police-station.dto';

export class UpdatePoliceStationDto extends PartialType(CreatePoliceStationDto) {}
