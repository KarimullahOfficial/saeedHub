export interface iUserDto {
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}
