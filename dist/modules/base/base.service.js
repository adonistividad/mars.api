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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BaseService = class BaseService {
    constructor(genericRepository) {
        this.genericRepository = genericRepository;
    }
    async create(entity) {
        try {
            return await new Promise((resolve, reject) => {
                this.genericRepository
                    .save(entity)
                    .then((created) => resolve(created.id))
                    .catch((err) => reject(err));
            });
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    fetchAll() {
        try {
            return this.genericRepository.find();
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    fetchById(id) {
        try {
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
        return (this.genericRepository.findOne({ where: { id } }));
    }
    delete(id) {
        try {
            this.genericRepository.delete(id);
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    async update(entity) {
        try {
            console.log('entity::', entity);
            return await new Promise((resolve, reject) => {
                this.genericRepository
                    .findOne({ where: { id: entity.id } })
                    .then((responseGet) => {
                    try {
                        if (responseGet == null)
                            reject('Not existing');
                        let retrievedEntity = responseGet;
                        retrievedEntity = Object.assign(Object.assign({}, retrievedEntity), entity);
                        console.log('retrievedEntity::', retrievedEntity);
                        this.genericRepository
                            .save(retrievedEntity)
                            .then((response) => resolve(response))
                            .catch((err) => reject(err));
                    }
                    catch (e) {
                        reject(e);
                    }
                })
                    .catch((err) => reject(err));
            });
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
};
BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map