import { Test, TestingModule } from '@nestjs/testing';
import { ComptableService } from './comptable.service';

describe('ComptableService', () => {
  let service: ComptableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComptableService],
    }).compile();

    service = module.get<ComptableService>(ComptableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
