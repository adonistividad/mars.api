import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { IccMonitoring } from './entities/icc_monitoring.entity';

@Injectable()
export class IccMonitoringsService extends BaseService<IccMonitoring> {
  constructor(
    @InjectRepository(IccMonitoring)
    private readonly repository: Repository<IccMonitoring>,
  ) {
    super(repository);
  }
}
