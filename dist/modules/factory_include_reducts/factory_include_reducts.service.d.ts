import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FactoryIncludeReduct } from './entities/factory_include_reducts.entity';
export declare class FactoryIncludeReductsService extends BaseService<FactoryIncludeReduct> {
    private readonly repository;
    constructor(repository: Repository<FactoryIncludeReduct>);
}
