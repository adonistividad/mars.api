import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { NctMasterFile } from './entities/nct_master_file.entity';

@Injectable()
export class NctMasterFilesService extends BaseService<NctMasterFile> {
  constructor(
    @InjectRepository(NctMasterFile)
    private readonly repository: Repository<NctMasterFile>,
  ) {
    super(repository);
  }
}
