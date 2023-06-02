import { BaseEntity } from '../../base/base.entity';
export declare class Pelp10ncFinal extends BaseEntity {
    id: number;
    factory_name: string;
    product_number_12nc: string;
    product_number_10nc: string;
    energy_rating: number;
    description_orig: string;
    description_pelp: string;
    pelp_applied: string;
    label_issued: string;
    urgency: string;
    energy_label_12nc: string;
    status: string;
    report_issued: Date;
    reports: string;
    lab_name: string;
    need_retesting: string;
    comment: string;
    remarks: string;
    remarks2: string;
    updated_at: Date;
    created_at: Date;
}
