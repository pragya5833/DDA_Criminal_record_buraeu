import { Test, TestingModule } from '@nestjs/testing';
import { CitizenPhoneService } from './citizen_phone.service';

describe('CitizenPhoneService', () => {
  let service: CitizenPhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizenPhoneService],
    }).compile();

    service = module.get<CitizenPhoneService>(CitizenPhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
