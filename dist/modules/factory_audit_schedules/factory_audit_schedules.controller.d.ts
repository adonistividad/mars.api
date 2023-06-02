import { BaseController } from '../base/base.controller';
import { FactoryAuditSchedule } from './entities/factory_audit_schedule.entity';
import { FactoryAuditSchedulesService } from './factory_audit_schedules.service';
export declare class FactoryAuditSchedulesController extends BaseController<FactoryAuditSchedule> {
    private readonly service;
    constructor(service: FactoryAuditSchedulesService);
}
