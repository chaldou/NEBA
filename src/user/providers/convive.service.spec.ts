import { Test, TestingModule } from '@nestjs/testing';
import { ConviveService } from './convive.service';

describe('ConviveService', () => {
  let service: ConviveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConviveService],
    }).compile();

    service = module.get<ConviveService>(ConviveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
