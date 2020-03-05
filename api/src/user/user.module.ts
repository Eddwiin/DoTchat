import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
    imports: [MongooseModule.forFeature([UserSchema])],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
