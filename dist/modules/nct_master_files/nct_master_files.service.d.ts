import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { NctMasterFile } from './entities/nct_master_file.entity';
export declare class NctMasterFilesService extends BaseService<NctMasterFile> {
    private readonly repository;
    constructor(repository: Repository<NctMasterFile>);
}
