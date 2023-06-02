import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'pelp_data_masters' })
export class PelpDataMaster extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  factory_name: string;

  @Column({ nullable: true })
  product_number_12nc: string;

  @Column({ nullable: true })
  product_number_10nc: string;

  @Column({ nullable: true })
  energy_rating: number;

  @Column({ nullable: true })
  description_orig: string;

  @Column({ nullable: true })
  description_pelp: string;

  @Column({ nullable: true })
  pelp_applied: string;

  @Column({ nullable: true })
  label_issued: string;

  @Column({ nullable: true })
  urgency: string;

  @Column({ nullable: true })
  energy_label_12nc: string;

  @Column({ nullable: true })
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  report_issued: Date;

  @Column({ nullable: true })
  reports: string;

  @Column({ nullable: true })
  lab_name: string;

  @Column({ nullable: true })
  need_retesting: string;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @Column({ type: 'text', nullable: true })
  remarks2: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;
}

/****
   factory_name	: string;	
  product_number_12nc 	: string;	
  product_number_10nc	: string;	
  energy_rating	int(11)			
  description_orig	: string;	
  description_pelp	: string;	
  pelp_applied	: string;	
  label_issued	: string;	
  urgency	: string;	
  energy_label_12nc	: string;	
  status	: string;	
  report_issued	date			
  reports	: string;	
  lab_name	: string;	
  need_retesting	: string;	
  comment	text	
  remarks	text	
  remarks2	text	

*/
