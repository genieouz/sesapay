import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ComptableService } from './comptable.service';
import { CreateComptableDto } from './dto/create-comptable.dto';
import { UpdateComptableDto } from './dto/update-comptable.dto';
import { Comptable } from './entities/comptable.entity';
import { AuthGuard } from '~/auth/guards/auth-guard';

@UseGuards(AuthGuard)
@Controller('comptable')
export class ComptableController {
  constructor(private readonly comptableService: ComptableService) {}
  
  @Post()
  create(@Body() createComptableDto: CreateComptableDto): Promise<Comptable> {
    return this.comptableService.insertOne(createComptableDto) as any;
  }

  @Get()
  findAll(): Promise<Comptable[]> {
    return this.comptableService.find({}) as any;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comptable> {
    return this.comptableService.findOneByIdOrFail(id) as any;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateComptableDto: UpdateComptableDto): Promise<Comptable>{
    return this.comptableService.updateOneById(id, updateComptableDto) as any;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.comptableService.removeOneById(id);
  }
}
