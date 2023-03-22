import { Module } from '@nestjs/common';
import { PincodeEntityService } from './pincode-entity.service';
import { PincodeEntityController } from './pincode-entity.controller';
import { PincodeCityProviders } from './pincodeCity.provider';

@Module({
  controllers: [PincodeEntityController],
  providers: [PincodeEntityService, ...PincodeCityProviders],
})
export class PincodeEntityModule {}
