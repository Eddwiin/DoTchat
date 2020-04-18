import { AuthService } from './auth.service';
import { UserModel } from './../user/interfaces/user.interface';
import { UserService } from './../user/user.service';
import { Controller, Get, Query, Res, HttpStatus, Put, Body, Post, UseGuards, Request} from '@nestjs/common';
import { Response } from 'express';
import { EmailService } from 'src/common/services/email.service';
import { waterfall } from 'async';
import { Error } from './../common/interfaces/error.interface';
import { randomBytes } from 'crypto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller("auth")
export class AuthController {

    constructor(private userService: UserService, private emailService: EmailService,
                private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("/sign-in")
    async signIn(@Request() req) {
        console.log("req user", req.user);
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Get("/test")
    test () {
        return "my test";
    }

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
                this.userService.addResetToken(userDoc.email, token)
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

  
    @Put("/reset-password")
    async resetPassword(@Body('updateUser') updateUser: UpdateUserDto, @Res() res: Response) {
        let err: Error;

        waterfall([
            done => {
                this.userService.findUserById(updateUser._id).then(user => {
                    if (!user) {
                        err = { status: HttpStatus.BAD_REQUEST, message: 'User not found'}
                    }

                    done(err, user);
                })
            },

            (user: UserModel, done) => {
                this.authService.isResetTokenValid(user, updateUser.resetPasswordToken)
                    .then(userToken => {
                        if (!userToken) {
                            err = { status: HttpStatus.FORBIDDEN, message: 'Token is not valid'}
                        }

                        done(err, user)
                    })
            },

            (user: UserModel, done) => {
                this.userService.updatePassword(updateUser).then(_ => {
                    return res.status(HttpStatus.OK).json(true);
                }).catch(error => {
                    err = { status: HttpStatus.INTERNAL_SERVER_ERROR, message: error.toString()};
                    done(err)
                })
            }
        ], error => {
            return res.status(error.status).json({ message: error.message});
        })
    }
    
}
