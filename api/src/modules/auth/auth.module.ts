import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/modules/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { configPassport } from '../../configs/passport.config';
import { JwtModule } from '@nestjs/jwt';
import { configJWT } from '../../configs/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
  UserModule,
    PassportModule.registerAsync({
      useFactory: () => configPassport().module,
    }),
    JwtModule.registerAsync({
      useFactory: () => configJWT().module
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
