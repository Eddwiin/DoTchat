import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class AuthEntity {
    @Field({ nullable: true })
    access_token?: string;
}