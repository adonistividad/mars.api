import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { PelpDataMasterDetail } from './entities/pelp_data_master_detail.entity';

@Injectable()
export class PelpDataMasterDetailsService extends BaseService<PelpDataMasterDetail> {
  constructor(
    @InjectRepository(PelpDataMasterDetail)
    private readonly repository: Repository<PelpDataMasterDetail>,
  ) {
    super(repository);
  }
}
