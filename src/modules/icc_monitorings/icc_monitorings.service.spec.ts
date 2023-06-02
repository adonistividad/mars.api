import { Test, TestingModule } from '@nestjs/testing';
import { IccMonitoringsService } from './icc_monitorings.service';

describe('IccMonitoringsService', () => {
  let service: IccMonitoringsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IccMonitoringsService],
    }).compile();

    service = module.get<IccMonitoringsService>(IccMonitoringsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
