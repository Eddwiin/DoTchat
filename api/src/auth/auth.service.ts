import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
    
    constructor(@InjectModel('User') private readonly userModel: Model<UserModel>) {}
    
    async updatePassword(token: string, newPassword: string) {
        return await this.userModel.findOneAndUpdate(
            { resetPasswordToken: token}, 
            { password: newPassword}); 
    }
}
