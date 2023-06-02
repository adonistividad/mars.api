import { Injectable } from '@nestjs/common';
import { Product } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';

@Injectable()
export class ProductsService extends BaseService<Product>{
	constructor(
		@InjectRepository(Product)
		private readonly repository: Repository<Product>) {
			super(repository);
	}
}