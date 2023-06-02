import { Injectable } from '@nestjs/common';
import { FactoryAuditSchedule } from './entities/factory_audit_schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.service';

@Injectable()
export class FactoryAuditSchedulesService extends BaseService<FactoryAuditSchedule> {
  constructor(
    @InjectRepository(FactoryAuditSchedule)
    private readonly repository: Repository<FactoryAuditSchedule>,
  ) {
    super(repository);
  }
}
