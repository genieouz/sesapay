import { ApiProperty } from "@nestjs/swagger";

export class Agence {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;
}
