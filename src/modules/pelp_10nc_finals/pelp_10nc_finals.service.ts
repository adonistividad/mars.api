import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Pelp10ncFinal } from './entities/pelp_10nc_final.entity';

@Injectable()
export class Pelp10ncFinalsService extends BaseService<Pelp10ncFinal> {
  constructor(
    @InjectRepository(Pelp10ncFinal)
    private readonly repository: Repository<Pelp10ncFinal>,
  ) {
    super(repository);
  }
}
