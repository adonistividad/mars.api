import { BaseController } from '../base/base.controller';
import { PelpDataMaster } from './entities/pelp_data_master.entity';
import { PelpDataMastersService } from './pelp_data_masters.service';
export declare class PelpDataMastersController extends BaseController<PelpDataMaster> {
    private readonly service;
    constructor(service: PelpDataMastersService);
}
