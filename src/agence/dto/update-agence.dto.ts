import { ApiProperty } from '@nestjs/swagger';

export class UpdateAgenceDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;
}
