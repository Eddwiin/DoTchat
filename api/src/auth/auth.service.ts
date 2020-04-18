import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(
                @InjectModel('User') private readonly userModel: Model<UserModel>,
                private userService: UserService, private jwtService: JwtService
    ) {}
    
    async validateUser(username: string, password: string): Promise<UserModel> {
        const user = await this.userService.findUserByUsernameAndPassword(username, password)

        if (user) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: UserModel) {
        const payload = { username: user.username, email: user.email, sub: user._id };

        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async isResetTokenValid(user: UserModel, resetPasswordToken: string) {
        return await this.userModel.findOne(
            { 
                _id: user._id, 
                resetPasswordToken: resetPasswordToken,
                resetPasswordExpires: { $gte: Date.now() }
            }
        )
    }

}
