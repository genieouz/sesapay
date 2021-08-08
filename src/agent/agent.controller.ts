import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { IAgent } from './models/interfaces/agent.interface';
import { Agent } from './entities/agent.entity';
import { AuthGuard } from '~/auth/guards/auth-guard';

@UseGuards(AuthGuard)
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}
  
  @Post()
  create(@Body() createAgentDto: CreateAgentDto): Promise<Agent> {
    return this.agentService.insertOne(createAgentDto) as any;
  }

  @Get()
  findAll(): Promise<Agent[]> {
    return this.agentService.find({}) as any;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Agent> {
    return this.agentService.findOneByIdOrFail(id) as any;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto): Promise<Agent> {
    return this.agentService.updateOneById(id, updateAgentDto) as any;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.agentService.removeOneById(id);
  }
}
