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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_store_1 = require("../libs/store/user.store");
let UsersService = class UsersService {
    userStore;
    constructor(userStore) {
        this.userStore = userStore;
    }
    async findAll(query) {
        return await this.userStore.findAll(query);
    }
    async findOne(id) {
        return await this.userStore.findOne(id);
    }
    async create(userDto) {
        return await this.userStore.create(userDto);
    }
    async update(id, updateUserDto) {
        return await this.userStore.update(id, updateUserDto);
    }
    async remove(id) {
        return await this.userStore.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_store_1.UserStore])
], UsersService);
//# sourceMappingURL=users.service.js.map