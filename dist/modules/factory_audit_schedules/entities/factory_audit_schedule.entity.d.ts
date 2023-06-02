import { BaseEntity } from '../../base/base.entity';
export declare class FactoryAuditSchedule extends BaseEntity {
    id: number;
    audit_reference_number_bps: string;
    factory_number: number;
    audit_type: string;
    license_number: string;
    audit_planned: string;
    audit_actual: string;
    audit_result: string;
    audit_note: string;
    audit_to_do: string;
    updated_at: Date;
    created_at: Date;
}
