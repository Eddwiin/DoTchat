import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
    imports: [MongooseModule.forFeature([UserSchema])]
})
export class UserModule {}
