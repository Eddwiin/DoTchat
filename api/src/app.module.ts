import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }),
    AuthModule,
    UserModule,
    EmailModule
  ],
  providers: [
  ]
})
export class AppModule {}
