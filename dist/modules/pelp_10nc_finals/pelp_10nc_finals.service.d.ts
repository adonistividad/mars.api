import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Pelp10ncFinal } from './entities/pelp_10nc_final.entity';
export declare class Pelp10ncFinalsService extends BaseService<Pelp10ncFinal> {
    private readonly repository;
    constructor(repository: Repository<Pelp10ncFinal>);
}
