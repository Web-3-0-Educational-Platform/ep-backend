import { Module } from '@nestjs/common';
import { DocumentsModule } from './documents/documents.module.js';
import { CoursesModule } from './courses/courses.module.js';

@Module({
  imports: [DocumentsModule, CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
