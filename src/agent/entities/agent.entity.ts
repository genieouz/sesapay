import { User } from "~/user/dto/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class Agent extends User {
    @ApiProperty()
    agence: string;
}
