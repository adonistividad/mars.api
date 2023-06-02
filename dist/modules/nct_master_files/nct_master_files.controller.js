"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NctMasterFilesController = void 0;
const common_1 = require("@nestjs/common");
const base_controller_1 = require("../base/base.controller");
const nct_master_files_service_1 = require("./nct_master_files.service");
let NctMasterFilesController = class NctMasterFilesController extends base_controller_1.BaseController {
    constructor(service) {
        super(service);
        this.service = service;
    }
};
NctMasterFilesController = __decorate([
    (0, common_1.Controller)('nct_master_files'),
    __metadata("design:paramtypes", [nct_master_files_service_1.NctMasterFilesService])
], NctMasterFilesController);
exports.NctMasterFilesController = NctMasterFilesController;
//# sourceMappingURL=nct_master_files.controller.js.map