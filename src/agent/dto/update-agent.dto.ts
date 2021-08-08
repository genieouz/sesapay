import { UserInput } from "~/user/dto/user.input";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateAgentDto extends UserInput {
    @ApiProperty()
    agence: string;
}
