"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const factories_module_1 = require("./modules/factories/factories.module");
const factory_audit_schedules_module_1 = require("./modules/factory_audit_schedules/factory_audit_schedules.module");
const factory_include_reducts_module_1 = require("./modules/factory_include_reducts/factory_include_reducts.module");
const icc_monitorings_module_1 = require("./modules/icc_monitorings/icc_monitorings.module");
const nct_master_files_module_1 = require("./modules/nct_master_files/nct_master_files.module");
const pelp_10nc_finals_module_1 = require("./modules/pelp_10nc_finals/pelp_10nc_finals.module");
const products_module_1 = require("./modules/products/products.module");
const users_module_1 = require("./modules/users/users.module");
const pelp_data_masters_module_1 = require("./modules/pelp_data_masters/pelp_data_masters.module");
const pelp_data_master_details_module_1 = require("./modules/pelp_data_master_details/pelp_data_master_details.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.development'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DATABASE_HOST'),
                    port: parseInt(configService.get('DATABASE_PORT')),
                    database: configService.get('DATABASE_NAME'),
                    username: configService.get('DATABASE_USERNAME'),
                    password: configService.get('DATABASE_PASSWORD'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            factories_module_1.FactoriesModule,
            factory_audit_schedules_module_1.FactoryAuditSchedulesModule,
            factory_include_reducts_module_1.FactoryIncludeReductsModule,
            icc_monitorings_module_1.IccMonitoringsModule,
            nct_master_files_module_1.NctMasterFilesModule,
            pelp_10nc_finals_module_1.Pelp10ncFinalsModule,
            pelp_data_masters_module_1.PelpDataMastersModule,
            pelp_data_master_details_module_1.PelpDataMasterDetailsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map