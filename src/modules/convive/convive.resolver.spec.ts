import { Test, TestingModule } from '@nestjs/testing';
import { ConviveResolver } from './convive.resolver';
import { ConviveService } from './convive.service';


describe('ConviveResolver', () => {
  let resolver: ConviveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConviveResolver, ConviveService],
    }).compile();

    resolver = module.get<ConviveResolver>(ConviveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
