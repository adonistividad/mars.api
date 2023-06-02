import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { PelpDataMaster } from './entities/pelp_data_master.entity';
import { PelpDataMastersService } from './pelp_data_masters.service';

@Controller('pelp_data_masters')
export class PelpDataMastersController extends BaseController<PelpDataMaster> {
  constructor(private readonly service: PelpDataMastersService) {
    super(service);
  }
}
