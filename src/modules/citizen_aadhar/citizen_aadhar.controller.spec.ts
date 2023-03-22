import { Test, TestingModule } from '@nestjs/testing';
import { CitizenAadharController } from './citizen_aadhar.controller';
import { CitizenAadharService } from './citizen_aadhar.service';

describe('CitizenAadharController', () => {
  let controller: CitizenAadharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizenAadharController],
      providers: [CitizenAadharService],
    }).compile();

    controller = module.get<CitizenAadharController>(CitizenAadharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
