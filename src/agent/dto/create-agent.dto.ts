import { ApiProperty } from "@nestjs/swagger";
import { UserInput } from "~/user/dto/user.input";

export class CreateAgentDto extends UserInput {
    @ApiProperty()
    agence: string;
}