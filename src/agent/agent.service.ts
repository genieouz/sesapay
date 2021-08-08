import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { agentModelName } from './models/namings/agent.model-name';
import { IAgent } from '~/agent/models/interfaces/agent.interface';

@Injectable()
export class AgentService extends AbstractService<IAgent> {
  constructor(
    @InjectModel(agentModelName) private readonly model: Model<IAgent>,
  ) {
    super(model);
  }
}
