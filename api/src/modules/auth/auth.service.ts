import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.schema';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private mailerService: MailerService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { _id: user._id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async sendEmail(to: string, subject, text) {
    return this.mailerService.sendMail({
      to,
      from: process.env.MAIL_SENDER, // sender address
      subject,
      text: text, // plaintext body
    });
  }
}
