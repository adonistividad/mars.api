"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NctMasterFilesModule = void 0;
const common_1 = require("@nestjs/common");
const nct_master_files_controller_1 = require("./nct_master_files.controller");
const nct_master_files_service_1 = require("./nct_master_files.service");
const nct_master_file_entity_1 = require("./entities/nct_master_file.entity");
const typeorm_1 = require("@nestjs/typeorm");
let NctMasterFilesModule = class NctMasterFilesModule {
};
NctMasterFilesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nct_master_file_entity_1.NctMasterFile])],
        controllers: [nct_master_files_controller_1.NctMasterFilesController],
        providers: [nct_master_files_service_1.NctMasterFilesService],
    })
], NctMasterFilesModule);
exports.NctMasterFilesModule = NctMasterFilesModule;
//# sourceMappingURL=nct_master_files.module.js.map