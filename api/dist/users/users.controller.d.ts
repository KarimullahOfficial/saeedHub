import { UsersService } from './users.service';
import type { UserCreateDto, UserUpdateDto } from 'src/libs';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userDto: UserCreateDto): Promise<import("src/libs").UserDocument>;
    findAll(query: any): Promise<import("src/libs").IQueryResponse<import("src/libs").UserDocument>>;
    findOne(id: string): Promise<import("src/libs").UserDocument>;
    update(id: string, updateUserDto: UserUpdateDto): Promise<import("src/libs").UserDocument>;
    remove(id: string): Promise<import("src/libs").UserDocument>;
}
