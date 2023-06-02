import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IccMonitoring } from './entities/icc_monitoring.entity';
import { IccMonitoringsController } from './icc_monitorings.controller';
import { IccMonitoringsService } from './icc_monitorings.service';

@Module({
  imports: [TypeOrmModule.forFeature([IccMonitoring])],
  controllers: [IccMonitoringsController],
  providers: [IccMonitoringsService],
})
export class IccMonitoringsModule {}
