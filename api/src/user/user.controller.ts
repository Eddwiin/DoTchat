import { Controller, Post, Body, Res, HttpStatus, Put  } from "@nestjs/common";
import { UserService } from "./user.service";
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { waterfall } from 'async';
import { Error } from './../common/interfaces/error.interface';
import { UserModel } from "./interfaces/user.interface";

@Controller('user')
export class UserController {
    
    constructor(private userService: UserService) {}

    @Post()
    async save(@Body('user') user: CreateUserDto, @Res() res: Response) {
        let err: Error;

        waterfall([
           done => {
               this.userService.isUserExist(user.username, user.email)
                .then((userDoc: UserModel) => {
                    if (userDoc) {
                        if (userDoc.username === user.username && userDoc.email === user.email) {
                            err = { status: 201, message: "Username and email already used"};
                        } else if (userDoc.username === user.username) {
                            err = { status: 201, message: "Username already used"};
                        } else if (userDoc.email === user.email) {
                            err = { status: 201, message: "Email already used"};
                        }
  
                    }
                    done(err);
                })
           },
        
           done => {
               this.userService.save(user).then(() => {
                    return res.status(200).json(true);
               }).catch(err => {
                   err = { status: HttpStatus.BAD_REQUEST, message: err}
                   done(err)
               });
           }
        ], err => {
            return res.status(err.status).json({ message: err.message})
        })
    }
}