import { IccMonitoring } from './entities/icc_monitoring.entity';
import { IccMonitoringsService } from './icc_monitorings.service';
import { BaseController } from '../base/base.controller';
export declare class IccMonitoringsController extends BaseController<IccMonitoring> {
    private readonly service;
    constructor(service: IccMonitoringsService);
}
