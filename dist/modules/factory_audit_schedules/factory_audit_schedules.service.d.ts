import { FactoryAuditSchedule } from './entities/factory_audit_schedule.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
export declare class FactoryAuditSchedulesService extends BaseService<FactoryAuditSchedule> {
    private readonly repository;
    constructor(repository: Repository<FactoryAuditSchedule>);
}
