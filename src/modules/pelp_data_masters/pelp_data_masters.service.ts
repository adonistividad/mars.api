import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { PelpDataMaster } from './entities/pelp_data_master.entity';

@Injectable()
export class PelpDataMastersService extends BaseService<PelpDataMaster> {
  constructor(
    @InjectRepository(PelpDataMaster)
    private readonly repository: Repository<PelpDataMaster>,
  ) {
    super(repository);
  }
}
