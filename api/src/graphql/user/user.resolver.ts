import { Resolver, Mutation, Query } from "@nestjs/graphql";
import { UserType } from "./user.type";
import { UserService } from "./user.service";

@Resolver(of => UserType)
export class UserResolver {

    constructor(
        private userService: UserService
    ) {}

    @Query(returns => UserType)
    getByEmail() {

    }

    @Mutation(returns => UserType)
    create(){}
}