 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // This will automatically handle createdAt and updatedAt
export class User {
    @Prop({ required: false })
    username: string;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false, default: 'user' })
    role: string;

    @Prop({ type: Date, default: null })
    deletedAt: Date | null;
}

export const UserSchema = SchemaFactory.createForClass(User);