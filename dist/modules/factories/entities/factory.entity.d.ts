import { BaseEntity } from '../../base/base.entity';
export declare class Factory extends BaseEntity {
    id: number;
    factory_number: number;
    factory_name: string;
    license_number: string;
    address: string;
    product_type: string;
    contact_person: string;
    sku: string;
    issued_on: Date;
    license_expiration: Date;
    updated_at: Date;
    created_at: Date;
}
