import { Resolver, Mutation, Args, Query, GqlExecutionContext } from '@nestjs/graphql';
import { UseGuards, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';
import { CurrentUser } from 'src/decorators/current-user.decorator';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService) {}

    @Mutation(() => AuthEntity)
    async login(
        @Args('email') email: string,
        @Args('password') password: string,
    ) {
        return await this.authService.login({ email, password })
    }

    @Query(returns => AuthEntity)
    @UseGuards(GqlAuthGuard)
    getProfile(@CurrentUser('access_token') auth: AuthEntity) {
        console.log({ auth });
        return auth;
    }
}
