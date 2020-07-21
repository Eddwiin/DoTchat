import { Controller, Post, Body, Res, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { UserService } from '../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService, private authService: AuthService) {}

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
    this.userService
      .createUser(createUserDto)
      .then(res.status(HttpStatus.OK).json)
      .catch(res.status(HttpStatus.BAD_REQUEST).json);
  }

  // @Get('/send-mail')
  // async sendEmail(@Query("email") email: string, @Res() res: Response) {
  //   this.authService
  //   .sendEmail(email,"maguran.mahendrarajan@gmail.com", "Reset password", "Reset password")
  //   .then(res.status(HttpStatus.OK).json)
  //   .catch(res.status(HttpStatus.BAD_REQUEST).json)
  // }

}
