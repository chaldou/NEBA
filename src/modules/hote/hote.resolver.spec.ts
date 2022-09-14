import { Test, TestingModule } from '@nestjs/testing';
import { HoteResolver } from './hote.resolver';
import { HoteService } from './hote.service';


describe('HoteResolver', () => {
  let resolver: HoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoteResolver, HoteService],
    }).compile();

    resolver = module.get<HoteResolver>(HoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
