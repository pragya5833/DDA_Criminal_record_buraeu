import { PartialType } from '@nestjs/mapped-types';
import { Admin } from '../admin/entities/admin.entity';
import { Citizen } from '../citizen/citizen.entity';

export class UserDto extends PartialType(Citizen) {
  isAdmin?: boolean;
  admin?: Admin;
}
