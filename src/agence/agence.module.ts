import { Module } from '@nestjs/common';
import { AgenceService } from './agence.service';
import { AgenceController } from './agence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { agenceModelName } from './models/namings/agence.model-name';
import { agenceSchema } from './models/schemas/agence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: agenceModelName, schema: agenceSchema }]),
  ],
  controllers: [AgenceController],
  providers: [AgenceService]
})
export class AgenceModule {}
