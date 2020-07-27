import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserEntity> {
    return this.userService.createUser({ username, email, password });
  }

  @Query(() => UserEntity)
  async findById(@Args('_id') _id: string): Promise<UserEntity | undefined> {
    return this.userService.findById(_id);
  }

  @Query(() => UserEntity)
  async findByEmail(@Args('email') email: string): Promise<UserEntity | undefined> {
    return this.userService.findByEmail(email);
  }
}
