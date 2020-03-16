import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.DATABASE_URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
          }),

        MongooseModule.forFeature([UserSchema])
    ],
    exports: [
        MongooseModule.forFeature([UserSchema])
    ]
})
export class DatabaseModule {}
