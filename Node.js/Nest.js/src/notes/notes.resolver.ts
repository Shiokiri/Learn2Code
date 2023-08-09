import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotesService } from './notes.service';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';

@Resolver('Note')
export class NotesResolver {
  constructor(private readonly notesService: NotesService) {}

  @Mutation('createNote')
  create(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.notesService.create(createNoteInput);
  }

  @Query('notes')
  findAll() {
    return this.notesService.findAll();
  }

  @Query('note')
  findOne(@Args('id') id: number) {
    return this.notesService.findOne(id);
  }

  @Mutation('updateNote')
  update(@Args('updateNoteInput') updateNoteInput: UpdateNoteInput) {
    return this.notesService.update(updateNoteInput.id, updateNoteInput);
  }

  @Mutation('removeNote')
  remove(@Args('id') id: number) {
    return this.notesService.remove(id);
  }
}
