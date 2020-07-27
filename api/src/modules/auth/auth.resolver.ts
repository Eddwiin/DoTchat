import { Resolver, Mutation, Args, Query, GqlExecutionContext } from '@nestjs/graphql';
import { UserEntity } from '../user/user.entity';
import { UseGuards, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { AuthService } from './auth.service';

const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    }
)
@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService) {}

    @Mutation()
    async login(
        @Args('username') username: string,
        @Args('password') password: string,
    ) {
        this.authService.login({ username, password })
    }

    @Query(returns => UserEntity)
    @UseGuards(GqlAuthGuard)
    profile(@CurrentUser() user: UserEntity) {
        return user;
    }
}
