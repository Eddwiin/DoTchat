import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserEntity } from "src/modules/user/user.entity";
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(email: string, password: string): Promise<UserEntity> {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}