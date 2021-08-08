import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from 'type-graphql';
import { type } from "os";
import { UserRoles } from "~/user/enums/user-roles.enum";

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

    @ApiProperty({ enum: ['ADMIN', 'USER'] })
    @Field()
    role: string;
}
