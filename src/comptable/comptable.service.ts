import { Injectable, NotFoundException } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComptable } from './models/interfaces/comptable.interface';
import { comptableModelName } from './models/namings/comptable.model-name';

@Injectable()
export class ComptableService extends AbstractService<IComptable> {
  constructor(
    @InjectModel(comptableModelName) private readonly model: Model<IComptable>,
  ) {
    super(model);
  }
}
