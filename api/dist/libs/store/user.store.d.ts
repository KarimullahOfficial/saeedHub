import type { UserCreateDto, UserUpdateDto } from 'src/libs';
import { UserDocument } from "../schema";
import { Model } from "mongoose";
import { IQueryResponse } from "../utlis";
export declare class UserStore {
    private readonly model;
    constructor(model: Model<UserDocument>);
    create(userDto: UserCreateDto): Promise<UserDocument>;
    findOne(id: string): Promise<UserDocument>;
    update(id: string, userDto: UserUpdateDto): Promise<UserDocument>;
    findAll(query: any): Promise<IQueryResponse<UserDocument>>;
    delete(id: string): Promise<UserDocument>;
}
