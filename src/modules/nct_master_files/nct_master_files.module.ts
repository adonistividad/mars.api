import { Module } from '@nestjs/common';
import { NctMasterFilesController } from './nct_master_files.controller';
import { NctMasterFilesService } from './nct_master_files.service';
import { NctMasterFile } from './entities/nct_master_file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NctMasterFile])],
  controllers: [NctMasterFilesController],
  providers: [NctMasterFilesService],
})
export class NctMasterFilesModule {}
