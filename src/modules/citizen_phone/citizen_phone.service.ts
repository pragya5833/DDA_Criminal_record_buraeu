import { Inject, Injectable } from '@nestjs/common';
import { CreateCitizenPhoneDto } from './dto/create-citizen_phone.dto';
import { UpdateCitizenPhoneDto } from './dto/update-citizen_phone.dto';
import { CITIZEN_PHONE_REPOSITORY } from 'src/core/constants';
import { CitizenPhone } from './entities/citizen_phone.entity';

@Injectable()
export class CitizenPhoneService {
  constructor(
    @Inject(CITIZEN_PHONE_REPOSITORY)
    private citizenPhoneRepository: typeof CitizenPhone,
  ) {}

  create(createCitizenPhoneDto: CreateCitizenPhoneDto) {
    return this.citizenPhoneRepository.create(createCitizenPhoneDto);
  }

  findAll() {
    return this.citizenPhoneRepository.findAll();
  }

  findOne(citizen_id: number) {
    return this.citizenPhoneRepository.findOne({ where: { citizen_id } });
  }

  update(citizen_id: number, updateCitizenPhoneDto: UpdateCitizenPhoneDto) {
    return this.citizenPhoneRepository.update(updateCitizenPhoneDto, {
      where: { citizen_id },
    });
  }

  remove(citizen_id: number) {
    return this.citizenPhoneRepository.destroy({ where: { citizen_id } });
  }
}
