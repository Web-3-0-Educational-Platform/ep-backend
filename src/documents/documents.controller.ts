import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DocumentsService } from './documents.service.js';
import Document from './document.js';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentService: DocumentsService) {}

  @ApiOperation({ summary: 'Получение документа' })
  @ApiResponse({ status: 200, type: Document })
  @Get()
  async getDocument(@Query('cid') cid: string): Promise<Document> {
    return await this.documentService.getDocument(cid);
  }

  @ApiOperation({ summary: 'Загрузка документа' })
  @ApiResponse({ status: 200, type: String })
  @Post()
  async uploadDocument(@Body() file: Document): Promise<string> {
    return await this.documentService.uploadDocument(file);
  }
}
