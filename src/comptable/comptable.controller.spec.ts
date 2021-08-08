import { Test, TestingModule } from '@nestjs/testing';
import { ComptableController } from './comptable.controller';
import { ComptableService } from './comptable.service';

describe('ComptableController', () => {
  let controller: ComptableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComptableController],
      providers: [ComptableService],
    }).compile();

    controller = module.get<ComptableController>(ComptableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
