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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class BaseController {
    constructor(IBaseService) {
        this.IBaseService = IBaseService;
    }
    async fetchAll() {
        console.log("fetchAll::");
        return await this.IBaseService.fetchAll();
    }
    async fetchById(id) {
        console.log("id::", id);
        return await this.IBaseService.fetchById(id);
    }
    create(entity) {
        return this.IBaseService.create(entity);
    }
    async delete(id) {
        await this.IBaseService.delete(id);
    }
    async update(entity) {
        return await this.IBaseService.update(entity);
    }
}
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ok' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Entity retrieved successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Entity does not exist' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "fetchById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The record has been successfully created.', }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Entity deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Entity updated successfully.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map