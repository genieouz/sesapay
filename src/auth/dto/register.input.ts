import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterInput {
    @ApiProperty()
    @Field()
    public password: string;

    @ApiProperty()
    @Field()
    public email: string;

    @ApiProperty()
    @Field()
    firstName: string;

    @ApiProperty()
    @Field()
    lastName: string;

    @ApiProperty()
    @Field()
    domicile: string;

    @ApiProperty()
    @Field()
    phoneNumber: string;
}
