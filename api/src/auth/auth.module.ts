import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from 'src/common/services/email.service';

@Module({
  imports: [UserModule],
  providers: [AuthService, EmailService],
  controllers: [AuthController]
})
export class AuthModule {}
