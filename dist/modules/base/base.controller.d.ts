import { IBaseService } from './IBase.service';
import { BaseEntity } from './base.entity';
export declare class BaseController<T extends BaseEntity> {
    private readonly IBaseService;
    constructor(IBaseService: IBaseService<T>);
    fetchAll(): Promise<T[]>;
    fetchById(id: number): Promise<T>;
    create(entity: T): Promise<number>;
    delete(id: number): Promise<void>;
    update(entity: T): Promise<T>;
}
