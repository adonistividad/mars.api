import { BaseEntity } from '../../base/base.entity';
export declare class NctMasterFile extends BaseEntity {
    id: number;
    product_description: string;
    product_code: string;
    product_type: string;
    applied_flag: string;
    application_date: Date;
    certificate_type: string;
    certificate_issuance_date: Date;
    certificate_number: string;
    comment: string;
    updated_at: Date;
    created_at: Date;
}
