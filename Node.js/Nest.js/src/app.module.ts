import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [UsersModule, PostsModule, NotesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
