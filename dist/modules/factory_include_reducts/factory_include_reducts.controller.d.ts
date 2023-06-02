import { BaseController } from '../base/base.controller';
import { FactoryIncludeReduct } from './entities/factory_include_reducts.entity';
import { FactoryIncludeReductsService } from './factory_include_reducts.service';
export declare class FactoryIncludeReductsController extends BaseController<FactoryIncludeReduct> {
    private readonly service;
    constructor(service: FactoryIncludeReductsService);
}
