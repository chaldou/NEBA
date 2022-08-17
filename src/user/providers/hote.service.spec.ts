import { Test, TestingModule } from '@nestjs/testing';
import { HoteService } from './hote.service';

describe('HoteService', () => {
  let service: HoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoteService],
    }).compile();

    service = module.get<HoteService>(HoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
