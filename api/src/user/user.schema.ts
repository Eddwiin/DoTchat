import { Schema }from "mongoose";

export const UserSchema = {
    name: 'User',
    schema: new Schema({
        username: String,
        email: String,
        password: String
    })
}