import { UserModel } from './../user/interfaces/user.interface';
import { UserService } from './../user/user.service';
import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { EmailService } from 'src/common/services/email.service';
import { waterfall } from 'async';
import { Error } from './../common/interfaces/error.interface';
import { randomBytes } from 'crypto';

@Controller('auth')
export class AuthController {

    constructor(private userService: UserService, 
                private emailService: EmailService) {}

    @Get("/forget-password")
    async sendResetPasswordEmail(@Query('email') email: string, @Res() res: Response) {
        let err : Error;
        waterfall([
            done => {
                this.userService.findUserByEmail(email)
                    .then((userDoc: UserModel) => {
                        if (!userDoc) {
                            err = { status: HttpStatus.BAD_REQUEST, message: "User not found in database"}
                        }

                        done(err, userDoc);
                    })
            },
        
            (userDoc, done) => {
                 randomBytes(20, (err, buf) => {
                    const token = buf.toString("hex");
                    done(err, userDoc, token);
                });
            },

            (userDoc: UserModel, token, done) => {
                this.userService.addOrUpdateResetToken(userDoc.email, token)
                    .then(newUser => {
                        done(err, newUser, token)
                    }).catch(error => {
                        err = { status: HttpStatus.BAD_REQUEST, message: error.toString()}
                        done(err)
                    })

            },

            (newUser: UserModel, token, done) => {
                 this.emailService.sendEmail(newUser, token, (err, urlToReset) => {
                     if (err) {
                         err = { status: HttpStatus.INTERNAL_SERVER_ERROR, message: err}
                         done(err);
                     }
                     else {
                        return res.status(HttpStatus.OK).json({ urlToReset: urlToReset })
                     }
                 });
            }
        ], err => {
            return res.status(err.status).json({ message: err.message});
        })
    }
    
}
