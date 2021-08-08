import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { IAgence } from './models/interfaces/agence.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { agenceModelName } from './models/namings/agence.model-name';

@Injectable()
export class AgenceService extends AbstractService<IAgence> {
  constructor(
    @InjectModel(agenceModelName) private readonly model: Model<IAgence>,
  ) {
    super(model);
  }
}
