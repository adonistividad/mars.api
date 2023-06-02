"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryAuditSchedulesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const factory_audit_schedule_entity_1 = require("./entities/factory_audit_schedule.entity");
const factory_audit_schedules_controller_1 = require("./factory_audit_schedules.controller");
const factory_audit_schedules_service_1 = require("./factory_audit_schedules.service");
let FactoryAuditSchedulesModule = class FactoryAuditSchedulesModule {
};
FactoryAuditSchedulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([factory_audit_schedule_entity_1.FactoryAuditSchedule])],
        controllers: [factory_audit_schedules_controller_1.FactoryAuditSchedulesController],
        providers: [factory_audit_schedules_service_1.FactoryAuditSchedulesService]
    })
], FactoryAuditSchedulesModule);
exports.FactoryAuditSchedulesModule = FactoryAuditSchedulesModule;
//# sourceMappingURL=factory_audit_schedules.module.js.map