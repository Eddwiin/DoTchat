import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dotchat'),
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController]
})
export class AppModule {}
