import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user.interface';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly userService: UserService, 
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        // const user = await this.userService.findOne(username);

        // if (user && user.password === password) {
        //     const { password, ...result } = user;
        //     return result;
        // }

        return undefined;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId};
        return {
            access_token:this.jwtService.sign(payload)
        }
    }

    async create(createUserDto) {
        const createUser = new this.userModel(createUserDto);
        return createUser.save();
    }
}