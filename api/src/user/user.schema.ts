import { Schema }from "mongoose";

export const UserSchema = {
    name: 'User',
    schema: new Schema({
        pseudo: String,
        email: String,
        password: String
    })
}