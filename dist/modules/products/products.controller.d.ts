import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';
import { BaseController } from '../base/base.controller';
export declare class ProductsController extends BaseController<Product> {
    private readonly service;
    constructor(service: ProductsService);
}
