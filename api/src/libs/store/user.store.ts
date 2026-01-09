import { Injectable } from "@nestjs/common";
import type { UserCreateDto,UserUpdateDto } from 'src/libs';
import { User, UserDocument } from "../schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { getSortPaging, IQueryResponse, listResponse, responseHandler } from "../utlis";

@Injectable()
export class UserStore {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) { }

    async create(userDto: UserCreateDto): Promise<UserDocument> {  
        const now = new Date();
        const user = new this.model({
            ...userDto,
            createdAt: now,
            updatedAt: now,
        });
        return user.save();
    }

    async findOne(id: string): Promise<UserDocument> { 
        const modelObject = this.model.findById(id).exec();
        return responseHandler(await modelObject);
    }

    async update(id: string, userDto: UserUpdateDto): Promise<UserDocument> {  
        const now = new Date();
        const modelObject = this.model.findByIdAndUpdate(id,
            {
                $set: { ...userDto },
                updatedAt: now,
            },
            { new: true },
        ).exec();
        return responseHandler(await modelObject);
    }

    async findAll(query: any): Promise<IQueryResponse<UserDocument>> {
        const queryObject: any = {};

        if (query?.role) {
            queryObject.role = query.role;
        }

        const { sort, skip, limit } = getSortPaging(query);
        const items = await this.model
            .find(queryObject)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .exec();
        return listResponse(this.model, queryObject, items, query);
    }

    async delete(id: string): Promise<UserDocument> {  
        const modelObject = this.model.findByIdAndDelete(id).exec();
        return responseHandler(await modelObject);
    }
}