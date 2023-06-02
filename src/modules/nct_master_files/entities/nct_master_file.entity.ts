import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'nct_master_files' })
export class NctMasterFile extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number; //-- ntc_number

  // @Column({ unique: true })
  // ntc_number: number;

  @Column({ nullable: true })
  product_description: string;

  @Column({ nullable: true })
  product_code: string;

  @Column({ nullable: true })
  product_type: string;

  @Column({ nullable: true })
  applied_flag: string;

  @Column({ type: 'timestamp', nullable: true })
  application_date: Date;

  @Column({ nullable: true })
  certificate_type: string;

  @Column({ type: 'timestamp', nullable: true })
  certificate_issuance_date: Date;

  @Column({ nullable: true })
  certificate_number: string;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;
}

/***
ntc_number	int(11)			
product_description	varchar(255)	
product_code	varchar(255)	
product_type	varchar(255)	
applied_flag	varchar(255)	
application_date	date			
certificate_type	varchar(255)	
certificate_issuance_date	date			
certificate_number	varchar(255)	
comment	text

    */
