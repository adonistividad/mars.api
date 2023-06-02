import { Pelp10ncFinal } from './entities/pelp_10nc_final.entity';
import { Pelp10ncFinalsService } from './pelp_10nc_finals.service';
import { BaseController } from '../base/base.controller';
export declare class Pelp10ncFinalsController extends BaseController<Pelp10ncFinal> {
    private readonly service;
    constructor(service: Pelp10ncFinalsService);
}
