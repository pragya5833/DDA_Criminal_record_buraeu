import { Test, TestingModule } from '@nestjs/testing';
import { CitizenPhoneController } from './citizen_phone.controller';
import { CitizenPhoneService } from './citizen_phone.service';

describe('CitizenPhoneController', () => {
  let controller: CitizenPhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizenPhoneController],
      providers: [CitizenPhoneService],
    }).compile();

    controller = module.get<CitizenPhoneController>(CitizenPhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
