import { Test, TestingModule } from '@nestjs/testing';
import { FactoryAuditSchedulesService } from './factory_audit_schedules.service';

describe('FactoryAuditSchedulesService', () => {
  let service: FactoryAuditSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryAuditSchedulesService],
    }).compile();

    service = module.get<FactoryAuditSchedulesService>(FactoryAuditSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
