import { Inject, Injectable } from '@nestjs/common';
import { POLICE_STATION_REPOSITORY } from 'src/core/constants';
import { CreatePoliceStationDto } from './dto/create-police-station.dto';
import { UpdatePoliceStationDto } from './dto/update-police-station.dto';
import { PoliceStation } from './entities/police-station.entity';

@Injectable()
export class PoliceStationService {
  constructor(
    @Inject(POLICE_STATION_REPOSITORY)
    private policeStationRepository: typeof PoliceStation,
  ) {}
  create(createPoliceStationDto: CreatePoliceStationDto) {
    return this.policeStationRepository.create(createPoliceStationDto);
  }

  findAll() {
    return this.policeStationRepository.findAll();
  }

  findOne(code: number) {
    return this.policeStationRepository.findOne({ where: { code } });
  }

  update(code: number, updatePoliceStationDto: UpdatePoliceStationDto) {
    return this.policeStationRepository.update(updatePoliceStationDto, {
      where: { code },
    });
  }

  remove(code: number) {
    return this.policeStationRepository.destroy({ where: { code } });
  }

  findByPinCode(pin_code: number) {
    return this.policeStationRepository.findAll({ where: { pin_code } });
  }
}
