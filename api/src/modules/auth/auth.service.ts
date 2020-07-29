import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/user.entity';
import { LoginDTO } from '../user/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDTO) {
    return await new Promise((resolve, reject) => {
      this.userService.login(user).then(user => {
        if (!user){
          return resolve({ access_token: null })
        }
        const payload = { _id: user._id };
        resolve({ access_token: this.jwtService.sign(payload) })
      })
      .catch(reject)
    });
  }
}
