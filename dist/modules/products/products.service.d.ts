import { Product } from './entities/products.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
export declare class ProductsService extends BaseService<Product> {
    private readonly repository;
    constructor(repository: Repository<Product>);
}
