import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FactoriesModule } from './modules/factories/factories.module';
import { FactoryAuditSchedulesModule } from './modules/factory_audit_schedules/factory_audit_schedules.module';
import { FactoryIncludeReductsModule } from './modules/factory_include_reducts/factory_include_reducts.module';
import { IccMonitoringsModule } from './modules/icc_monitorings/icc_monitorings.module';
import { NctMasterFilesModule } from './modules/nct_master_files/nct_master_files.module';
import { Pelp10ncFinalsModule } from './modules/pelp_10nc_finals/pelp_10nc_finals.module';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { PelpDataMastersModule } from './modules/pelp_data_masters/pelp_data_masters.module';
import { PelpDataMasterDetailsModule } from './modules/pelp_data_master_details/pelp_data_master_details.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env.development','.env.development.local', '.env.development'],
      // envFilePath: ['.env.aws'],
      // envFilePath: ['.env.local'],
      envFilePath: ['.env'],
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     host: configService.get<string>('DATABASE_HOST'),
    //     port: parseInt(configService.get<string>('DATABASE_PORT')),
    //     database: configService.get<string>('DATABASE_NAME'),
    //     username: configService.get<string>('DATABASE_USERNAME'),
    //     password: configService.get<string>('DATABASE_PASSWORD'),
    //     // sche: configService.get<string>('DATABASE_PASSWORD'),
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //     // logging: true,
    //     // synchronize: false,
    //     synchronize: true, //development only
    //   }),
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://mongo:mongo@cluster0.zlhy3yy.mongodb.net/mars_mysql?retryWrites=true&w=majority',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
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
