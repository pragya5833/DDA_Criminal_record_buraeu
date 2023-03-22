import { Test, TestingModule } from '@nestjs/testing';
import { PincodeEntityController } from './pincode-entity.controller';
import { PincodeEntityService } from './pincode-entity.service';

describe('PincodeEntityController', () => {
  let controller: PincodeEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PincodeEntityController],
      providers: [PincodeEntityService],
    }).compile();

    controller = module.get<PincodeEntityController>(PincodeEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
