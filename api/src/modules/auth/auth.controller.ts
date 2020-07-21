import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Request,
  UseGuards,
  Get,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { UserService } from '../user/user.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    console.log(req.user);
    return req.user;
  }

  @Post('/create-user')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return await this.userService
      .createUser(createUserDto)
      .then(res.status(HttpStatus.OK).json)
      .catch(err => res.status(HttpStatus.BAD_REQUEST).json({ err }));
  }

  @Get('/send-email')
  async sendEmail(@Query('email') email: string, @Res() res: Response) {
    return await this.authService
      .sendEmail(email, "Reset password", "Reset password")
      .then( _ => res.status(HttpStatus.OK).json(true))
      .catch( _ => res.status(HttpStatus.BAD_REQUEST).json(false));
  }
}
