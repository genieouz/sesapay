import { Injectable, NotFoundException } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { agentModelName } from './models/namings/agent.model-name';
import { IAgent } from '~/agent/models/interfaces/agent.interface';
import { Agent } from './entities/agent.entity';

@Injectable()
export class AgentService extends AbstractService<IAgent> {
  constructor(
    @InjectModel(agentModelName) private readonly model: Model<IAgent>,
  ) {
    super(model);
  }

  find(queryFilter): Promise<IAgent[]> {
    return this.model.find(queryFilter).populate('agence');
  }

  async findOneByIdOrFail(id: string): Promise<IAgent> {
    const found = await this.model.findOne({ _id: id }).populate('agence');
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }
}
