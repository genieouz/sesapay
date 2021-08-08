import { ApiProperty } from "@nestjs/swagger";

export class Agence {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;
}
