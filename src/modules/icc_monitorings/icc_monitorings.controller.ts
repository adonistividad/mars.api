import { Controller } from '@nestjs/common';
import { IccMonitoring } from './entities/icc_monitoring.entity';
import { IccMonitoringsService } from './icc_monitorings.service';
import { BaseController } from '../base/base.controller';

@Controller('icc_monitorings')
export class IccMonitoringsController extends BaseController<IccMonitoring>{
	constructor(private readonly service: IccMonitoringsService) {
		super(service)
	}
}
