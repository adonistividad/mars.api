import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { PelpDataMaster } from './entities/pelp_data_master.entity';
export declare class PelpDataMastersService extends BaseService<PelpDataMaster> {
    private readonly repository;
    constructor(repository: Repository<PelpDataMaster>);
}
