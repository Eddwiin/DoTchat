import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
    
    constructor(
        @Inject('USER_MODEL') private readonly userModel: Model<User>
    ) {}
}
