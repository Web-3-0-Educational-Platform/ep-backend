import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller.js';
import { DocumentsService } from './documents.service.js';
import { HeliaService } from '../helia/helia.service.js';

@Module({
  imports: [],
  controllers: [DocumentsController],
  providers: [DocumentsService, HeliaService],
})
export class DocumentsModule {}
