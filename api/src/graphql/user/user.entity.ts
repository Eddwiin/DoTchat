import { Entity, ObjectIdColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export class UserEntity {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}