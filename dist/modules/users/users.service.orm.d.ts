import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseService } from '../base/base.service';
export declare class UsersService extends BaseService<User> {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
}
