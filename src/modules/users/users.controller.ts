import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { BaseController } from '../base/base.controller';
import { UsersService } from './users.service.orm';

@ApiTags('users')
@Controller('users')
export class UsersController extends BaseController<User>{

	constructor(private readonly usersService: UsersService) {
		super(usersService)
	}
}