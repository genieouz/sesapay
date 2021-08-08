import { Field, InputType } from 'type-graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class LoginInput {
    @ApiProperty()
    @Field()
    email: string;

    @ApiProperty()
    @Field()
    password: string;
}