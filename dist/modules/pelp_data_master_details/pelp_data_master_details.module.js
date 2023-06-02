"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelpDataMasterDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pelp_data_master_detail_entity_1 = require("./entities/pelp_data_master_detail.entity");
const pelp_data_master_details_controller_1 = require("./pelp_data_master_details.controller");
const pelp_data_master_details_service_1 = require("./pelp_data_master_details.service");
let PelpDataMasterDetailsModule = class PelpDataMasterDetailsModule {
};
PelpDataMasterDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pelp_data_master_detail_entity_1.PelpDataMasterDetail])],
        controllers: [pelp_data_master_details_controller_1.PelpDataMasterDetailsController],
        providers: [pelp_data_master_details_service_1.PelpDataMasterDetailsService],
    })
], PelpDataMasterDetailsModule);
exports.PelpDataMasterDetailsModule = PelpDataMasterDetailsModule;
//# sourceMappingURL=pelp_data_master_details.module.js.map