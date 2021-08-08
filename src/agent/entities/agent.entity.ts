import { User } from "~/user/dto/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IAgent } from "../models/interfaces/agent.interface";
import { Agence } from "~/agence/entities/agence.entity";
import { IAgence } from "~/agence/models/interfaces/agence.interface";

export class Agent extends User {
    @ApiProperty({ type: () => Agence })
    agence: IAgence;
}
