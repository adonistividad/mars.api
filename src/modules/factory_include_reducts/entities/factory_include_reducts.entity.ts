import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'factory_include_reducts' })
export class FactoryIncludeReduct extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  reference_number: string;

  @Column()
  factory_number: number;

  @Column({ nullable: true })
  type_1: string;

  @Column({ type: 'timestamp' })
  status_date: Date;

  @Column({ nullable: true })
  status: string;

  @Column({ type: 'text', nullable: true })
  note: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;
}

/***
1 reference_number Primary	varchar(255)	utf8mb4_general_ci		No	None			Change Change	Drop Drop	
2	factory_number Index	int(11)			No	None			Change Change	Drop Drop	
3	type_1	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
4	status_date	date			Yes	NULL			Change Change	Drop Drop	
5	status	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
6	note  
    */
