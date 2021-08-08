import { ApiProperty } from "@nestjs/swagger";

export class CreateAgenceDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;
}