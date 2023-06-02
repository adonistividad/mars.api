"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelp10ncFinalsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pelp_10nc_final_entity_1 = require("./entities/pelp_10nc_final.entity");
const pelp_10nc_finals_controller_1 = require("./pelp_10nc_finals.controller");
const pelp_10nc_finals_service_1 = require("./pelp_10nc_finals.service");
let Pelp10ncFinalsModule = class Pelp10ncFinalsModule {
};
Pelp10ncFinalsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pelp_10nc_final_entity_1.Pelp10ncFinal])],
        controllers: [pelp_10nc_finals_controller_1.Pelp10ncFinalsController],
        providers: [pelp_10nc_finals_service_1.Pelp10ncFinalsService],
    })
], Pelp10ncFinalsModule);
exports.Pelp10ncFinalsModule = Pelp10ncFinalsModule;
//# sourceMappingURL=pelp_10nc_finals.module.js.map