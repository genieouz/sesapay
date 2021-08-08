import { Module } from '@nestjs/common';
import { ComptableService } from './comptable.service';
import { ComptableController } from './comptable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { comptableModelName } from './models/namings/comptable.model-name';
import { comptableSchema } from './models/schemas/comptable.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: comptableModelName, schema: comptableSchema }]),
  ],
  controllers: [ComptableController],
  providers: [ComptableService]
})
export class ComptableModule {}
