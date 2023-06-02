import { User } from './entities/user.entity';
import { BaseController } from '../base/base.controller';
import { UsersService } from './users.service.orm';
export declare class UsersController extends BaseController<User> {
    private readonly usersService;
    constructor(usersService: UsersService);
}
