import { Document } from 'mongoose';

export interface UserModel extends Document {
    _id?: string;
    username?: string,
    email?: string,
    password?: string,
    resetPasswordToken?: string,
    resetPasswordExpires?: Date
}