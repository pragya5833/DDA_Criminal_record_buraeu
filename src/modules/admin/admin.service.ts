import { Inject, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ADMIN_REPOSITORY } from 'src/core/constants';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @Inject(ADMIN_REPOSITORY) private adminRepository: typeof Admin,
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminRepository.create(createAdminDto);
  }

  findAll() {
    return this.adminRepository.findAll();
  }

  findOne(id: number) {
    return this.adminRepository.findOne({ where: { id } });
  }

  findOneWithCitizenId(id: number) {
    return this.adminRepository.findOne({ where: { citizen_id: id } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepository.update(updateAdminDto, { where: { id } });
  }

  remove(id: number) {
    return this.adminRepository.destroy({ where: { id } });
  }
}
