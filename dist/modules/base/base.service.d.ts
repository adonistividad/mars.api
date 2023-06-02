import { Repository } from 'typeorm';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';
export declare class BaseService<T extends BaseEntity> implements IBaseService<T> {
    private readonly genericRepository;
    constructor(genericRepository: Repository<T>);
    create(entity: any): Promise<number>;
    fetchAll(): Promise<T[]>;
    fetchById(id: number): Promise<T>;
    delete(id: number): void;
    update(entity: any): Promise<any>;
}
