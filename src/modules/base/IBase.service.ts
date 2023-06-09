export interface IBaseService<T> {
    
    fetchAll(): Promise<T[]>;
    fetchById(id: number): Promise<T>;
    update(entity: T): Promise<T>;
    create(entity: T): Promise<number>;
    delete(id: number);
}