import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryAuditSchedule } from './entities/factory_audit_schedule.entity';
import { FactoryAuditSchedulesController } from './factory_audit_schedules.controller';
import { FactoryAuditSchedulesService } from './factory_audit_schedules.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([FactoryAuditSchedule])],
  controllers: [FactoryAuditSchedulesController],
  providers: [FactoryAuditSchedulesService]
})
export class FactoryAuditSchedulesModule {}
