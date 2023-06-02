import { BaseController } from '../base/base.controller';
import { NctMasterFile } from './entities/nct_master_file.entity';
import { NctMasterFilesService } from './nct_master_files.service';
export declare class NctMasterFilesController extends BaseController<NctMasterFile> {
    private readonly service;
    constructor(service: NctMasterFilesService);
}
