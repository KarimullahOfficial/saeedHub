import { iUserDto } from "./base.user.dto";
export interface UserCreateDto extends iUserDto { createdAt?: Date; }