import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from 'src/common/services/email.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
        UserModule, 
        DatabaseModule, 
        PassportModule.register({ defaultStrategy: "jwt" , session: true}),
        JwtModule.register({
          secret: 'secretKey',
          signOptions: { expiresIn: '60s' },
        })
  ],
  controllers: [AuthController],
  providers: [AuthService, EmailService, LocalStrategy]
})
export class AuthModule {}
