import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FactoryIncludeReduct } from './entities/factory_include_reducts.entity';

@Injectable()
export class FactoryIncludeReductsService  extends BaseService<FactoryIncludeReduct> {
    constructor(
      @InjectRepository(FactoryIncludeReduct)
      private readonly repository: Repository<FactoryIncludeReduct>,
    ) {
      super(repository);
    }
  }
  