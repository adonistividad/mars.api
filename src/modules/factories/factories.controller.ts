import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { Factory } from './entities/factory.entity';
import { FactoriesService } from './factories.service';

@ApiTags('factories')
@Controller('factories')
export class FactoriesController extends BaseController<Factory>{
	constructor(private readonly service: FactoriesService) {
		super(service)
	}
}
