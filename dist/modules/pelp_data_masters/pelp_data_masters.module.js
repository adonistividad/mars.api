"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelpDataMastersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pelp_data_master_entity_1 = require("./entities/pelp_data_master.entity");
const pelp_data_masters_controller_1 = require("./pelp_data_masters.controller");
const pelp_data_masters_service_1 = require("./pelp_data_masters.service");
let PelpDataMastersModule = class PelpDataMastersModule {
};
PelpDataMastersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pelp_data_master_entity_1.PelpDataMaster])],
        controllers: [pelp_data_masters_controller_1.PelpDataMastersController],
        providers: [pelp_data_masters_service_1.PelpDataMastersService],
    })
], PelpDataMastersModule);
exports.PelpDataMastersModule = PelpDataMastersModule;
//# sourceMappingURL=pelp_data_masters.module.js.map