import { Inject, Injectable } from '@nestjs/common';
import { CITIZEN_AADHAR_REPOSITORY } from 'src/core/constants';
import { CreateCitizenAadharDto } from './dto/create-citizen_aadhar.dto';
import { UpdateCitizenAadharDto } from './dto/update-citizen_aadhar.dto';
import { CitizenAadhar } from './entities/citizen_aadhar.entity';

@Injectable()
export class CitizenAadharService {
  constructor(
    @Inject(CITIZEN_AADHAR_REPOSITORY)
    private citizenAadharRepository: typeof CitizenAadhar,
  ) {}
  create(createCitizenAadharDto: CreateCitizenAadharDto) {
    return this.citizenAadharRepository.create(createCitizenAadharDto);
  }

  findAll() {
    return this.citizenAadharRepository.findAll();
  }

  findOne(citizen_id: number) {
    return this.citizenAadharRepository.findOne({ where: { citizen_id } });
  }

  update(citizen_id: number, updateCitizenAadharDto: UpdateCitizenAadharDto) {
    return this.citizenAadharRepository.update(updateCitizenAadharDto, {
      where: { citizen_id },
    });
  }

  remove(citizen_id: number) {
    return this.citizenAadharRepository.destroy({ where: { citizen_id } });
  }
}
