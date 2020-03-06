import { User } from './../user/user.interface';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor() {}

    @Post('/sign-up')
    signUp(@Body('user') user: User) {
       
    }
}
