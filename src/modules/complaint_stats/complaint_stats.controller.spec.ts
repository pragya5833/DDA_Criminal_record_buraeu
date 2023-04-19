import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintStatsController } from './complaint_stats.controller';
import { ComplaintStatsService } from './complaint_stats.service';

describe('ComplaintStatsController', () => {
  let controller: ComplaintStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplaintStatsController],
      providers: [ComplaintStatsService],
    }).compile();

    controller = module.get<ComplaintStatsController>(ComplaintStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
