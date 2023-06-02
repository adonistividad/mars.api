import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'factories' })
export class Factory extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  factory_number: number;

  @Column()
  factory_name: string;

  @Column({ nullable: true })
  license_number: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  product_type: string;

  @Column({ nullable: true })
  contact_person: string;

  @Column({ nullable: true })
  sku: string;

  @Column({ type: 'timestamp', nullable: true })
  issued_on: Date;

  @Column({ type: 'timestamp', nullable: true })
  license_expiration: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;
}

/****
1	factory_number Primary	int(11)
2	license_number	varchar(255)
3	factory_name	varchar(255)
4	address	varchar(255)	
5	product_type	varchar(255)	
6	contact_person	varchar(255)	
7	sku	int(11)			
8	issued_on	date			
9	license_expiration	date
10	created_at

    */
