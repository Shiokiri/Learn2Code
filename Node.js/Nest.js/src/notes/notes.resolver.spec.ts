import { Test, TestingModule } from '@nestjs/testing';
import { NotesResolver } from './notes.resolver';
import { NotesService } from './notes.service';

describe('NotesResolver', () => {
  let resolver: NotesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesResolver, NotesService],
    }).compile();

    resolver = module.get<NotesResolver>(NotesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
