import { User } from "~/user/dto/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Field, ObjectType } from 'type-graphql';
import { IUser } from "~/user/interfaces/user.interface";

@ObjectType()
export class Session {
    @ApiProperty()
    @Field()
    token: string;

    @ApiProperty({ type: User })
    @Field(type => User)
    user: IUser;
}