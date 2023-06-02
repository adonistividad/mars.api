import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { NctMasterFile } from './entities/nct_master_file.entity';
import { NctMasterFilesService } from './nct_master_files.service';

@Controller('nct_master_files')
export class NctMasterFilesController extends BaseController<NctMasterFile> {
  constructor(private readonly service: NctMasterFilesService) {
    super(service);
  }
}
