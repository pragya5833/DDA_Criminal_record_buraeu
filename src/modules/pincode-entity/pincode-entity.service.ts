import { CreatePincodeEntityDto } from './dto/create-pincode-entity.dto';
import { UpdatePincodeEntityDto } from './dto/update-pincode-entity.dto';
import { PINCODE_CITY_REPOSITORY } from 'src/core/constants';
import { PincodeCity } from './entities/pincode-entity.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PincodeEntityService {
  constructor(
    @Inject(PINCODE_CITY_REPOSITORY)
    private pincodeCityRepository: typeof PincodeCity,
  ) {}

  create(createPincodeEntityDto: CreatePincodeEntityDto) {
    return this.pincodeCityRepository.create(createPincodeEntityDto);
  }

  findAll() {
    return this.pincodeCityRepository.findAll();
  }

  findOne(pin_code: number) {
    return this.pincodeCityRepository.findOne({ where: { pin_code } });
  }

  update(pin_code: number, updatePincodeEntityDto: UpdatePincodeEntityDto) {
    return this.pincodeCityRepository.update(updatePincodeEntityDto, {
      where: { pin_code },
    });
  }

  remove(pin_code: number) {
    return this.pincodeCityRepository.destroy({ where: { pin_code } });
  }
}
