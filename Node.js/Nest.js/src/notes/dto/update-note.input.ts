import { CreateNoteInput } from './create-note.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNoteInput extends PartialType(CreateNoteInput) {
  id: number;
}
