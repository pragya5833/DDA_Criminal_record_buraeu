import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintAgainstDto } from './create-complain-against.dto';
export class UpdateComplaintAgainstDto extends PartialType(
  CreateComplaintAgainstDto,
) {}
