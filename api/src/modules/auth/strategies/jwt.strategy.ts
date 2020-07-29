
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { configJWT } from '../../../configs/jwt.config';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super(configJWT().constructor)
    }

    async validate(payload: any) {
        return { _id: payload._id, username: payload.email }
    }
}