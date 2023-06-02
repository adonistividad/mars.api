import { BaseController } from '../base/base.controller';
import { PelpDataMasterDetail } from './entities/pelp_data_master_detail.entity';
import { PelpDataMasterDetailsService } from './pelp_data_master_details.service';
export declare class PelpDataMasterDetailsController extends BaseController<PelpDataMasterDetail> {
    private readonly service;
    constructor(service: PelpDataMasterDetailsService);
}
