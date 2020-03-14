import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
    
    constructor(@InjectModel('User') private readonly userModel: Model<UserModel>) {}
    
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
