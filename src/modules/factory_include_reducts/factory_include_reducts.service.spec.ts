import { Test, TestingModule } from '@nestjs/testing';
import { FactoryIncludeReductsService } from './factory_include_reducts.service';

describe('FactoryIncludeReductsService', () => {
  let service: FactoryIncludeReductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryIncludeReductsService],
    }).compile();

    service = module.get<FactoryIncludeReductsService>(FactoryIncludeReductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
