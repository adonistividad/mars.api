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
exports.FactoryIncludeReductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const base_controller_1 = require("../base/base.controller");
const factory_include_reducts_service_1 = require("./factory_include_reducts.service");
let FactoryIncludeReductsController = class FactoryIncludeReductsController extends base_controller_1.BaseController {
    constructor(service) {
        super(service);
        this.service = service;
    }
};
FactoryIncludeReductsController = __decorate([
    (0, swagger_1.ApiTags)('factory_include_reducts'),
    (0, common_1.Controller)('factory_include_reducts'),
    __metadata("design:paramtypes", [factory_include_reducts_service_1.FactoryIncludeReductsService])
], FactoryIncludeReductsController);
exports.FactoryIncludeReductsController = FactoryIncludeReductsController;
//# sourceMappingURL=factory_include_reducts.controller.js.map