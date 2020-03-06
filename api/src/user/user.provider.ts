import { User } from './user.interface';
import { UserSchema } from './user.schema';
import { Connection } from 'mongoose';

export const usersProvider = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION']
    }
]