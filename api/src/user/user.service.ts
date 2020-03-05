import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
    
    private readonly users: User[];

    constructor() {
        this.users = [
            {
              username: 'john',
              password: 'changeme',
            },
            {
              username: 'chris',
              password: 'secret',
            },
            {
              username: 'maria',
              password: 'guess',
            },
          ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
