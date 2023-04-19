import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintStatsService } from './complaint_stats.service';

describe('ComplaintStatsService', () => {
  let service: ComplaintStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplaintStatsService],
    }).compile();

    service = module.get<ComplaintStatsService>(ComplaintStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
