import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@Entity("User")
@ObjectType()
export class UserEntity {

  @ObjectIdColumn()
  @Field()
  _id?: string;

  @Column()
  @Field()
  username?: string;

  @Column()
  @Field()
  email?: string;

  @Column()
  @Field()
  password?: string;
}
