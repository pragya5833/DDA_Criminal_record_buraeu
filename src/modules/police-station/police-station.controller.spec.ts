import { Test, TestingModule } from '@nestjs/testing';
import { PoliceStationController } from './police-station.controller';
import { PoliceStationService } from './police-station.service';

describe('PoliceStationController', () => {
  let controller: PoliceStationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoliceStationController],
      providers: [PoliceStationService],
    }).compile();

    controller = module.get<PoliceStationController>(PoliceStationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
