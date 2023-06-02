import { Controller } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { PelpDataMasterDetail } from './entities/pelp_data_master_detail.entity';
import { PelpDataMasterDetailsService } from './pelp_data_master_details.service';

@Controller('pelp_data_master_details')
export class PelpDataMasterDetailsController extends BaseController<PelpDataMasterDetail> {
  constructor(private readonly service: PelpDataMasterDetailsService) {
    super(service);
  }
}
