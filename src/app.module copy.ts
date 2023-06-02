import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Factory } from './modules/factories/entities/factory.entity';
import { FactoriesModule } from './modules/factories/factories.module';
import { FactoryAuditSchedule } from './modules/factory_audit_schedules/entities/factory_audit_schedule.entity';
import { FactoryAuditSchedulesModule } from './modules/factory_audit_schedules/factory_audit_schedules.module';
import { FactoryIncludeReduct } from './modules/factory_include_reducts/entities/factory_include_reducts.entity';
import { FactoryIncludeReductsModule } from './modules/factory_include_reducts/factory_include_reducts.module';
import { IccMonitoring } from './modules/icc_monitorings/entities/icc_monitoring.entity';
import { IccMonitoringsModule } from './modules/icc_monitorings/icc_monitorings.module';
import { NctMasterFile } from './modules/nct_master_files/entities/nct_master_file.entity';
import { NctMasterFilesModule } from './modules/nct_master_files/nct_master_files.module';
import { Pelp10ncFinal } from './modules/pelp_10nc_finals/entities/pelp_10nc_final.entity';
import { Pelp10ncFinalsModule } from './modules/pelp_10nc_finals/pelp_10nc_finals.module';
import { Product } from './modules/products/entities/products.entity';
import { ProductsModule } from './modules/products/products.module';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { PelpDataMastersModule } from './modules/pelp_data_masters/pelp_data_masters.module';
import { PelpDataMaster } from './modules/pelp_data_masters/entities/pelp_data_master.entity';
import { PelpDataMasterDetailsModule } from './modules/pelp_data_master_details/pelp_data_master_details.module';
import { PelpDataMasterDetail } from './modules/pelp_data_master_details/entities/pelp_data_master_detail.entity';
import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // load:[configuration]
      // envFilePath: ['.env','.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'tividadc_projectmars_user',
      password: 'tividadc_projectmars_user',
      database: 'tividadc_projectmars', 
      synchronize: true,
      driver:"mysql",
      entities: [
        User,
        Product,
        Factory,
        FactoryAuditSchedule,
        FactoryIncludeReduct,
        IccMonitoring,
        NctMasterFile,
        Pelp10ncFinal,
        PelpDataMaster,
        PelpDataMasterDetail,
      ],
      
    }),
    // DatabaseModule,
    UsersModule,
    ProductsModule,
    FactoriesModule,
    FactoryAuditSchedulesModule,
    FactoryIncludeReductsModule,
    IccMonitoringsModule,
    NctMasterFilesModule,
    Pelp10ncFinalsModule,
    PelpDataMastersModule,
    PelpDataMasterDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
