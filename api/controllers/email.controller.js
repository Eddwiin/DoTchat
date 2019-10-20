import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './../models/user.model';

export const usePasswordHashToMakeToken = ({
    password: passwordHash,
    _id: userId,
    createdAt
}) => {
    const secret = passwordHash + '-' + createAt;
    const token = jwt.sign({ user }, secret, {
        expiresIn: 3600
    })

    return token;
}