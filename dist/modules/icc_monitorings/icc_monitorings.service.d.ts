import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { IccMonitoring } from './entities/icc_monitoring.entity';
export declare class IccMonitoringsService extends BaseService<IccMonitoring> {
    private readonly repository;
    constructor(repository: Repository<IccMonitoring>);
}
