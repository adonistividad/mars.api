import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { FactoryAuditSchedule } from './entities/factory_audit_schedule.entity';
import { FactoryAuditSchedulesService } from './factory_audit_schedules.service';

@ApiTags('factory_audit_schedules')
@Controller('factory_audit_schedules')
export class FactoryAuditSchedulesController extends BaseController<FactoryAuditSchedule>{
	constructor(private readonly service: FactoryAuditSchedulesService) {
		super(service)
	}
}