import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    
    constructor(
        @Inject('USER_MODEL') private readonly userModel: Model<User>
    ) {}
}
