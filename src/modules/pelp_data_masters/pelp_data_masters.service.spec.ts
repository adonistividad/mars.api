import { Test, TestingModule } from '@nestjs/testing';
import { PelpDataMastersService } from './pelp_data_masters.service';

describe('PelpDataMastersService', () => {
  let service: PelpDataMastersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelpDataMastersService],
    }).compile();

    service = module.get<PelpDataMastersService>(PelpDataMastersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
