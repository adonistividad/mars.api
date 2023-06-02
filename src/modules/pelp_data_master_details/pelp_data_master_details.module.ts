import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelpDataMasterDetail } from './entities/pelp_data_master_detail.entity';
import { PelpDataMasterDetailsController } from './pelp_data_master_details.controller';
import { PelpDataMasterDetailsService } from './pelp_data_master_details.service';

@Module({
  imports: [TypeOrmModule.forFeature([PelpDataMasterDetail])],
  controllers: [PelpDataMasterDetailsController],
  providers: [PelpDataMasterDetailsService],
})
export class PelpDataMasterDetailsModule {}
