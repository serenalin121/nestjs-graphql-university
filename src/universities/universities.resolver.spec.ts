import { Test, TestingModule } from '@nestjs/testing';
import { UniversitiesResolver } from './universities.resolver';
import { UniversitiesService } from './universities.service';

describe('UniversitiesResolver', () => {
  let resolver: UniversitiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversitiesResolver, UniversitiesService],
    }).compile();

    resolver = module.get<UniversitiesResolver>(UniversitiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
