import { Test, TestingModule } from '@nestjs/testing';
import { PincodeEntityService } from './pincode-entity.service';

describe('PincodeEntityService', () => {
  let service: PincodeEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PincodeEntityService],
    }).compile();

    service = module.get<PincodeEntityService>(PincodeEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
