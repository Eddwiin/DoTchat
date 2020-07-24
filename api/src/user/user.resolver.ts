import { Resolver, Query} from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => String)
    async hello() {
      return await 'world';
    }
  
    @Query(returns => User)
    async findById(_id: string) {
      return this.userService.findById(_id);
    }
    // @Query(() => Object)
    // async findById(@Args('_id', { type: () => String}) _id: string): Promise<User>{
    //     return  this.userService.findById(_id);
    // }
}