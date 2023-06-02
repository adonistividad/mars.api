import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Factory } from './entities/factory.entity';

@Injectable()
export class FactoriesService extends BaseService<Factory> {
  constructor(
    @InjectRepository(Factory)
    private readonly repository: Repository<Factory>,
  ) {
    super(repository);
  }
}
