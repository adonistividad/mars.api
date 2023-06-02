import { BaseEntity } from '../../base/base.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    updated_at: Date;
    created_at: Date;
    auth_strategy: string;
}
