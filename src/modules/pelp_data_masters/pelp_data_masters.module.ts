import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelpDataMaster } from './entities/pelp_data_master.entity';
import { PelpDataMastersController } from './pelp_data_masters.controller';
import { PelpDataMastersService } from './pelp_data_masters.service';

@Module({
  imports: [TypeOrmModule.forFeature([PelpDataMaster])],
  controllers: [PelpDataMastersController],
  providers: [PelpDataMastersService],
})
export class PelpDataMastersModule {}
