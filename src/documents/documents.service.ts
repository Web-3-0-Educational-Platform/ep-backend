import { Injectable } from '@nestjs/common';
import { json } from '@helia/json';
import { CID } from 'multiformats/cid';
import Document from './document.js';
import { HeliaService } from '../helia/helia.service.js';

@Injectable()
export class DocumentsService {
  constructor(private readonly heliaService: HeliaService) {}

  async uploadDocument(file: Document) {
    const helia = await this.heliaService.getHelia();
    const j = json(helia);
    const cid = await j.add(file);
    return cid.toString();
  }

  async getDocument(cid: string): Promise<Document> {
    const helia = await this.heliaService.getHelia();
    const j = json(helia);
    return j.get(CID.parse(cid));
  }
}
