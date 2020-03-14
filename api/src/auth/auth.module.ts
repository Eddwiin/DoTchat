import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmailService } from 'src/common/services/email.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.schema';

@Module({
  imports: [UserModule, MongooseModule.forFeature([UserSchema])],
  controllers: [AuthController],
  providers: [AuthService, EmailService]
})
export class AuthModule {}
