import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  product_number: string;

  @Column()
  factory_number: number;

  @Column({ nullable: true })
  product_description: string;

  @Column({ nullable: true })
  bps_number: string;

  @Column({ type: 'timestamp', nullable: true })
  title_groupings: string;

  @Column({ nullable: true })
  effective_date: Date;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  replacement_code: string;

  @Column({ nullable: true })
  samples_needed: string;

  @Column({ nullable: true, type: 'text' })
  remarks: string;

  @Column({ nullable: true, type: 'text' })
  remarks2: string;

  @CreateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;
  
  @CreateDateColumn()
  created_at: Date;

  /****
	product_number Primary	varchar(255)
	factory_number Index	int(11)		
	product_description	varchar(255)	
	bps_number	varchar(255)	
	title_groupings	varchar(255)
	effective_date	date		
	status	varchar(255)	
	replacement_code	varchar(255)	
	samples_needed	varchar(255)	
	remarks	text	
	remarks2	text
 
  */
}
