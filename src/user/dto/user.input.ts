import { InputType, Field, ID } from 'type-graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UserInput {
    @ApiProperty()
    @Field({ nullable: true })
    public phoneNumber: string;

    @ApiProperty()
    @Field({ nullable: true })
    public lastName: string;

    @ApiProperty()
    @Field({ nullable: true })
    public firstName: string;

    @ApiProperty()
    @Field({ nullable: true })
    public email: string;

    @ApiProperty()
    @Field({ nullable: true })
    public domicile: string;
}
