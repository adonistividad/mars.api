import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'factory_audit_schedules' })
export class FactoryAuditSchedule extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  audit_reference_number_bps: string;

  @Column()
  factory_number: number;

  @Column()
  audit_type: string;

  @Column({ nullable: true })
  license_number: string;

  @Column({ nullable: true })
  audit_planned: string;

  @Column({ nullable: true })
  audit_actual: string;

  @Column({ nullable: true })
  audit_result: string;

  @Column({ type: 'text', nullable: true })
  audit_note: string;

  @Column({ type: 'text', nullable: true })
  audit_to_do: string;

  @CreateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
}

/***
   * 
        1	audit_reference_number_bps Primary	varchar(255)	utf8mb4_general_ci		No	None			Change Change	Drop Drop	
        2	factory_number Index	int(11)			No	None			Change Change	Drop Drop	
        3	audit_type	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
        4	audit_planned	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
        5	audit_actual	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
       6	audit_result	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
        7	audit_note	text	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
        8	audit_to_do	text	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
  9	created_at
   */
