import { UserStore } from 'src/libs/store/user.store';
import { IQueryResponse, UserCreateDto, UserUpdateDto, UserDocument } from 'src/libs';
export declare class UsersService {
    private readonly userStore;
    constructor(userStore: UserStore);
    findAll(query: any): Promise<IQueryResponse<UserDocument>>;
    findOne(id: string): Promise<UserDocument>;
    create(userDto: UserCreateDto): Promise<UserDocument>;
    update(id: string, updateUserDto: UserUpdateDto): Promise<UserDocument>;
    remove(id: string): Promise<UserDocument>;
}
