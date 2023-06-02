import { BaseEntity } from '../../base/base.entity';
export declare class FactoryIncludeReduct extends BaseEntity {
    id: number;
    reference_number: string;
    factory_number: number;
    type_1: string;
    status_date: Date;
    status: string;
    note: string;
    updated_at: Date;
    created_at: Date;
}
