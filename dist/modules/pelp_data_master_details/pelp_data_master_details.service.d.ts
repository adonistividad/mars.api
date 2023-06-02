import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { PelpDataMasterDetail } from './entities/pelp_data_master_detail.entity';
export declare class PelpDataMasterDetailsService extends BaseService<PelpDataMasterDetail> {
    private readonly repository;
    constructor(repository: Repository<PelpDataMasterDetail>);
}
