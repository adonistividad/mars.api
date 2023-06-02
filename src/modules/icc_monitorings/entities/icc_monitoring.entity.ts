import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'icc_monitorings' })
export class IccMonitoring extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  icc_monitoring_number: string;

  @Column({ nullable: true })
  bill_lading: string;

  @Column({ nullable: true })
  product_description: string;

  @Column({ nullable: true })
  quantity: string;

  @Column({ nullable: true })
  invoice_reference: string;

  @Column({ nullable: true })
  arrival_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  receive_document_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  application_surety_working_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  surety_bond_sign_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  surety_bond_return_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  application_to_bps_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  dti_conditional_release_date: Date;

  @Column({ nullable: true })
  reason_delay: string;

  @Column({ nullable: true })
  inspection_body_name: string;

  @Column({ type: 'timestamp', nullable: true })
  inspection_body_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  wshe_inspection_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  samples_pullout_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  testing_lab_receipt_date: Date;

  @Column({ nullable: true })
  factory_country: string;

  @Column({ nullable: true })
  testing_lab_iieef_date: string;

  @Column({ nullable: true })
  testing_lab_bpstc_date: string;

  @Column({ nullable: true })
  testing_lab_tuv_date: string;

  @Column({ nullable: true })
  testing_lab_actual_date: string;

  @Column({ nullable: true })
  submit_result_bps_date: string;

  @Column({ nullable: true })
  bps_approval_date: string;

  @Column({ nullable: true })
  icc_certificate_release_date: string;

  @Column({ nullable: true })
  icc_sticker_whse_date: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  bps_reference_number: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;
}

/***
1	icc_monitoring_number	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	2	bill_lading	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	3	product_description	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	4	quantity	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	5	invoice_reference	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	6	arrival_date	date			Yes	NULL			Change Change	Drop Drop	
	7	receive_document_date	date			Yes	NULL			Change Change	Drop Drop	
	8	application_surety_working_date	date			Yes	NULL			Change Change	Drop Drop	
	9	surety_bond_sign_date	date			Yes	NULL			Change Change	Drop Drop	
	10	surety_bond_return_date	date			Yes	NULL			Change Change	Drop Drop	
	11	application_to_bps_date	date			Yes	NULL			Change Change	Drop Drop	
	12	dti_conditional_release_date	date			Yes	NULL			Change Change	Drop Drop	
	13	reason_delay	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	14	inspection_body_name	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	15	inspection_body_date	date			Yes	NULL			Change Change	Drop Drop	
	16	wshe_inspection_date	date			Yes	NULL			Change Change	Drop Drop	
	17	samples_pullout_date	date			Yes	NULL			Change Change	Drop Drop	
	18	testing_lab_receipt_date	date			Yes	NULL			Change Change	Drop Drop	
	19	factory_country	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	20	testing_lab_iieef_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	21	testing_lab_bpstc_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	22	testing_lab_tuv_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	23	testing_lab_actual_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	24	submit_result_bps_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	25	bps_approval_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	26	icc_certificate_release_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	27	icc_sticker_whse_date	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	28	remarks	text	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	29	bps_reference_number
   */
