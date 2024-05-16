import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service.js';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { RawsService } from './raws.service.js';

@ApiTags('Courses')
@Controller()
export class CoursesController {
  constructor(
    private readonly fileService: FilesService,
    private readonly rawService: RawsService,
  ) {}

  @ApiOperation({ summary: 'Загрузка файла' })
  @ApiResponse({ status: 200, type: String })
  @UseInterceptors(FileInterceptor('file'))
  @Post('files')
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return await this.fileService.uploadFile(file);
  }

  @ApiOperation({ summary: 'Получение JSON' })
  @ApiResponse({ status: 200 })
  @Get('raws')
  async getInfo(@Query('cid') cid: string) {
    return await this.rawService.getInfo(cid);
  }

  @ApiOperation({ summary: 'Загрузка JSON' })
  @ApiResponse({ status: 200, type: String })
  @Post('raws')
  async uploadInfo(@Body() info): Promise<string> {
    return await this.rawService.uploadInfo(info);
  }
}
