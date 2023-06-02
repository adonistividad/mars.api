import { BaseController } from '../base/base.controller';
import { Factory } from './entities/factory.entity';
import { FactoriesService } from './factories.service';
export declare class FactoriesController extends BaseController<Factory> {
    private readonly service;
    constructor(service: FactoriesService);
}
