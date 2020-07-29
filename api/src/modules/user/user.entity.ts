import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@Entity("User")
@ObjectType()
export class UserEntity {

  @ObjectIdColumn()
  @Field()
  _id?: string;

  @Column()
  @Field({ nullable: true })
  username?: string;

  @Column()
  @Field({ nullable: true })
  email?: string;

  @Column()
  @Field({ nullable: true })
  password?: string;
}
