import { Test, TestingModule } from '@nestjs/testing';
import { PelpDataMasterDetailsService } from './pelp_data_master_details.service';

describe('PelpDataMasterDetailsService', () => {
  let service: PelpDataMasterDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelpDataMasterDetailsService],
    }).compile();

    service = module.get<PelpDataMasterDetailsService>(PelpDataMasterDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
