import { Test, TestingModule } from '@nestjs/testing';
import { CitizenAadharService } from './citizen_aadhar.service';

describe('CitizenAadharService', () => {
  let service: CitizenAadharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizenAadharService],
    }).compile();

    service = module.get<CitizenAadharService>(CitizenAadharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
