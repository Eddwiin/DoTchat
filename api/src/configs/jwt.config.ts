import { ExtractJwt } from 'passport-jwt';

export function configJWT() {
  return {
    module: {
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    },

    constructor: {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    },
  };
}
