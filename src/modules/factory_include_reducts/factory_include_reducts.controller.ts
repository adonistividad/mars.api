import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { FactoryIncludeReduct } from './entities/factory_include_reducts.entity';
import { FactoryIncludeReductsService } from './factory_include_reducts.service';

@ApiTags('factory_include_reducts')
@Controller('factory_include_reducts')
export class FactoryIncludeReductsController extends BaseController<FactoryIncludeReduct>{
	constructor(private readonly service: FactoryIncludeReductsService) {
		super(service)
	}
}
