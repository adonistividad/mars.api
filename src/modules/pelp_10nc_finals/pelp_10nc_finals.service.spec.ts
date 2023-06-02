import { Test, TestingModule } from '@nestjs/testing';
import { Pelp10ncFinalsService } from './pelp_10nc_finals.service';

describe('Pelp10ncFinalsService', () => {
  let service: Pelp10ncFinalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Pelp10ncFinalsService],
    }).compile();

    service = module.get<Pelp10ncFinalsService>(Pelp10ncFinalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
