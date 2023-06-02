import { Test, TestingModule } from '@nestjs/testing';
import { FactoryAuditSchedulesController } from './factory_audit_schedules.controller';

describe('FactoryAuditSchedulesController', () => {
  let controller: FactoryAuditSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoryAuditSchedulesController],
    }).compile();

    controller = module.get<FactoryAuditSchedulesController>(FactoryAuditSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
