import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
  ) {}

  @Post('/create-user')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return await this.userService
      .createUser(createUserDto)
      .then(res.status(HttpStatus.OK).json)
      .catch(err => res.status(HttpStatus.BAD_REQUEST).json({ err }));
  }
}
