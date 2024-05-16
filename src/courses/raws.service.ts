import { Injectable } from '@nestjs/common';
import { HeliaService } from '../helia/helia.service.js';
import { json } from '@helia/json';
import { CID } from 'multiformats/cid';

@Injectable()
export class RawsService {
  constructor(private readonly heliaService: HeliaService) {}

  async uploadInfo(info) {
    const helia = await this.heliaService.getHelia();
    const j = json(helia);
    const cid = await j.add(info);
    return cid.toString();
  }

  async getInfo(cid: string) {
    const helia = await this.heliaService.getHelia();
    const j = json(helia);
    return j.get(CID.parse(cid));
  }
}
