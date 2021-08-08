import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { agentModelName } from './models/namings/agent.model-name';
import { agentSchema } from './models/schemas/agent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: agentModelName, schema: agentSchema }]),
  ],
  controllers: [AgentController],
  providers: [AgentService]
})
export class AgentModule {}
