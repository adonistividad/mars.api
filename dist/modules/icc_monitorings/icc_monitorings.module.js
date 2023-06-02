"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IccMonitoringsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const icc_monitoring_entity_1 = require("./entities/icc_monitoring.entity");
const icc_monitorings_controller_1 = require("./icc_monitorings.controller");
const icc_monitorings_service_1 = require("./icc_monitorings.service");
let IccMonitoringsModule = class IccMonitoringsModule {
};
IccMonitoringsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([icc_monitoring_entity_1.IccMonitoring])],
        controllers: [icc_monitorings_controller_1.IccMonitoringsController],
        providers: [icc_monitorings_service_1.IccMonitoringsService],
    })
], IccMonitoringsModule);
exports.IccMonitoringsModule = IccMonitoringsModule;
//# sourceMappingURL=icc_monitorings.module.js.map