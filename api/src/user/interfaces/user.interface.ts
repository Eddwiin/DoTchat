import { Document } from 'mongoose';

export interface UserModel extends Document {
    username?: string,
    email?: string,
    password?: string
}