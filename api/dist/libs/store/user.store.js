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
exports.UserStore = void 0;
const common_1 = require("@nestjs/common");
const schema_1 = require("../schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const utlis_1 = require("../utlis");
let UserStore = class UserStore {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(userDto) {
        const now = new Date();
        const user = new this.model({
            ...userDto,
            createdAt: now,
            updatedAt: now,
        });
        return user.save();
    }
    async findOne(id) {
        const modelObject = this.model.findById(id).exec();
        return (0, utlis_1.responseHandler)(await modelObject);
    }
    async update(id, userDto) {
        const now = new Date();
        const modelObject = this.model.findByIdAndUpdate(id, {
            $set: { ...userDto },
            updatedAt: now,
        }, { new: true }).exec();
        return (0, utlis_1.responseHandler)(await modelObject);
    }
    async findAll(query) {
        const queryObject = {};
        if (query?.role) {
            queryObject.role = query.role;
        }
        const { sort, skip, limit } = (0, utlis_1.getSortPaging)(query);
        const items = await this.model
            .find(queryObject)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .exec();
        return (0, utlis_1.listResponse)(this.model, queryObject, items, query);
    }
    async delete(id) {
        const modelObject = this.model.findByIdAndDelete(id).exec();
        return (0, utlis_1.responseHandler)(await modelObject);
    }
};
exports.UserStore = UserStore;
exports.UserStore = UserStore = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserStore);
//# sourceMappingURL=user.store.js.map