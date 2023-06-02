import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';
import { BaseController } from '../base/base.controller';

@ApiTags('products')
@Controller('products')
export class ProductsController extends BaseController<Product>{
	constructor(private readonly service: ProductsService) {
		super(service)
	}
}
