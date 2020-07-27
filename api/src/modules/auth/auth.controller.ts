import { Controller, Post, Body, Res, HttpStatus, Request, UseGuards, Get } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserService } from 'src/modules/user/user.service';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('/create-user')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return await this.userService
      .createUser(createUserDto)
      .then(res.status(HttpStatus.OK).json)
      .catch(err => res.status(HttpStatus.BAD_REQUEST).json({ err }));
  }
}
