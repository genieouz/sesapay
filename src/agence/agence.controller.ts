import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { AgenceService } from './agence.service';
import { CreateAgenceDto } from './dto/create-agence.dto';
import { UpdateAgenceDto } from './dto/update-agence.dto';
import { Agence } from './entities/agence.entity';
import { AuthGuard } from '~/auth/guards/auth-guard';
import { ForRoles } from '~/auth/decorators/for-roles.decorator';
import { UserRoles } from '~/user/enums/user-roles.enum';

@UseGuards(AuthGuard)
@Controller('agence')
export class AgenceController {
  constructor(private readonly agenceService: AgenceService) {}
  
  @Post()
  create(@Body() createAgenceDto: CreateAgenceDto): Promise<Agence> {
    return this.agenceService.insertOne(createAgenceDto) as any;
  }

  @Get()
  findAll(): Promise<Agence[]> {
    return this.agenceService.find({}) as any;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Agence> {
    return this.agenceService.findOneByIdOrFail(id) as any;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAgenceDto: UpdateAgenceDto): Promise<Agence> {
    return this.agenceService.updateOneById(id, updateAgenceDto) as any;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.agenceService.removeOneById(id);
  }
}
