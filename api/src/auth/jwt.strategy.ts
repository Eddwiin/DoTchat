import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants/jwt";
import { UserModel } from "src/user/interfaces/user.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret
        });
      }
    
      async validate(payload) {
        return { _id: payload._id, username: payload.username, email: payload.email};
      }
}