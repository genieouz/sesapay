import { InputType, Field } from 'type-graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdatePasswordDto {
    @ApiProperty()
    @Field()
    password: string;

    @ApiProperty()
    @Field()
    resetToken: string;

    @ApiProperty()
    @Field()
    resetCode: number;
}