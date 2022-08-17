import { Test, TestingModule } from '@nestjs/testing';
import { PrestataireResolver } from './prestataire.resolver';
import { PrestataireService } from '../providers/prestataire.service';

describe('PrestataireResolver', () => {
  let resolver: PrestataireResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrestataireResolver, PrestataireService],
    }).compile();

    resolver = module.get<PrestataireResolver>(PrestataireResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
