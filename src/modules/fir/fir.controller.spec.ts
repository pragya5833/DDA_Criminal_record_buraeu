import { Test, TestingModule } from '@nestjs/testing';
import { FirController } from './fir.controller';
import { FirService } from './fir.service';

describe('FirController', () => {
  let controller: FirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirController],
      providers: [FirService],
    }).compile();

    controller = module.get<FirController>(FirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
