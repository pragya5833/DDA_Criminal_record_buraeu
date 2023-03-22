import { Test, TestingModule } from '@nestjs/testing';
import { PoliceStationService } from './police-station.service';

describe('PoliceStationService', () => {
  let service: PoliceStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliceStationService],
    }).compile();

    service = module.get<PoliceStationService>(PoliceStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
