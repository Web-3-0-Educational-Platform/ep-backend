import { Injectable } from '@nestjs/common';
import { unixfs } from '@helia/unixfs';
import { HeliaService } from '../helia/helia.service.js';

@Injectable()
export class FilesService {
  constructor(private readonly heliaService: HeliaService) {}

  async uploadFile(file: Express.Multer.File) {
    const helia = await this.heliaService.getHelia();
    const fs = unixfs(helia);
    const fileCandidate = {
      path: file.originalname,
      content: file.buffer,
    };
    const cid = await fs.addFile(fileCandidate);
    return cid.toString();
  }
}
