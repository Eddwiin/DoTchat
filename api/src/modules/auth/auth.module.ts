import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { configPassport } from '../../configs/passport.config';
import { JwtModule } from '@nestjs/jwt';
import { configJWT } from '../../configs/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    UserModule,
    PassportModule.registerAsync({
      useFactory: () => configPassport().module,
    }),
    JwtModule.registerAsync({
      useFactory: () => configJWT().module,
    }),
  ],
  controllers: [],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
  exports: [AuthService, AuthResolver],
})
export class AuthModule {}
