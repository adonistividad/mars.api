import { Controller } from '@nestjs/common';
import { Pelp10ncFinal } from './entities/pelp_10nc_final.entity';
import { Pelp10ncFinalsService } from './pelp_10nc_finals.service';
import { BaseController } from '../base/base.controller';

@Controller('pelp_10nc_finals')
export class Pelp10ncFinalsController extends BaseController<Pelp10ncFinal>{
	constructor(private readonly service: Pelp10ncFinalsService) {
		super(service)
	}
}

