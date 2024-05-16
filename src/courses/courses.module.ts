import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller.js';
import { FilesService } from './files.service.js';
import { HeliaService } from '../helia/helia.service.js';
import { RawsService } from './raws.service.js';

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [FilesService, RawsService, HeliaService],
})
export class CoursesModule {}
