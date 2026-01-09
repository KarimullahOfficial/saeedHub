import { Injectable } from '@nestjs/common';
import { UserStore } from 'src/libs/store/user.store';
import { IQueryResponse, UserCreateDto, UserUpdateDto, UserDocument } from 'src/libs';


@Injectable()
export class UsersService {
  constructor(private readonly userStore: UserStore) { }

  async findAll(query: any): Promise<IQueryResponse<UserDocument>> {
    return await this.userStore.findAll(query);
  }

  async findOne(id: string): Promise<UserDocument> {
    return await this.userStore.findOne(id);
  }

  async create(userDto: UserCreateDto): Promise<UserDocument> {
    return await this.userStore.create(userDto);
  }

  async update(id: string, updateUserDto: UserUpdateDto): Promise<UserDocument> {
    return await this.userStore.update(id, updateUserDto);
  }

  async remove(id: string): Promise<UserDocument> {
    return await this.userStore.delete(id);
  }
}