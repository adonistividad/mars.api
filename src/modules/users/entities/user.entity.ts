import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../../base/base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @Column({ nullable: true })
  auth_strategy: string;

  // @OneToOne(() => Profile)
  // @JoinColumn()
  // profile: Profile;

  // @OneToMany(() => Post, (post) => post.user)
  // posts: Post[];

  // @Column({ length: 50 })
  // @ApiPropertyOptional()
  // readonly name: string;

  // @Column({ length: 50 })
  // @ApiProperty()
  // readonly age: number;

  // @Column({ length: 50 })
  // @ApiProperty()
  // readonly favouriteColor: string;

  // constructor(o: Object) {
  //   super();
  //   Object.assign(this, o);
  // }
}
