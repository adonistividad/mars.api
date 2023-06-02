import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Factory } from './entities/factory.entity';
export declare class FactoriesService extends BaseService<Factory> {
    private readonly repository;
    constructor(repository: Repository<Factory>);
}
