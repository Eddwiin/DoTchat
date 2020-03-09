import { UserModel } from './../../dist/users/user.interface.d';
import { Controller, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    
    constructor(private userService: UserService) {}

    @Post('/save')
    async save(@Body('user') user: CreateUserDto, @Res() res: Response) {

        await this.userService.isUserExist(user.username, user.email)
                .then(async (userDoc: UserModel) => {
                    if (userDoc) {
                        if (userDoc.username === user.username && userDoc.email === user.email) {
                            return res.status(201).json({ message: "Username and email already used"});
                        } else if( userDoc.username === user.username) {
                            return res.status(201).json({ message: "Username already used"});
                        } else if (userDoc.email === user.email) {
                            return res.status(201).json({ message: "Email already used"});
                        }
                    } else {
                        await this.userService.save(user).then(() => {
                            res.status(200).json(true)
                        }).catch(res.status(HttpStatus.BAD_REQUEST).json)
                    }
                })
    }


}