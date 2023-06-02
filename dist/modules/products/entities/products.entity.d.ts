import { BaseEntity } from '../../base/base.entity';
export declare class Product extends BaseEntity {
    id: number;
    product_number: string;
    factory_number: number;
    product_description: string;
    bps_number: string;
    title_groupings: string;
    effective_date: Date;
    status: string;
    replacement_code: string;
    samples_needed: string;
    remarks: string;
    remarks2: string;
    updated_at: Date;
    created_at: Date;
}
