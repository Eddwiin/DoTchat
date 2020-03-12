import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserModel>) {}

  async save(createUserDto: CreateUserDto) {  
    return await new this.userModel(createUserDto).save();
  }

  async isUserExist(username: string, email: string) {
    return await this.userModel.findOne({ 
      $or: [
        { username: username },
        { email: email  }
      ]
    })
  }
  
  async findUserByEmail(email: string) {
    return await this.userModel.findOne({
      email: email
    });
    
  }

  async addOrUpdateResetToken(email: string, token: string) {
    return await this.userModel.findOneAndUpdate(
      { email: email},
      {
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 3600000
      }
    )
  }

      
  
}