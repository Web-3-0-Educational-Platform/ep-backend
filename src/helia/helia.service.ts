import { Injectable } from '@nestjs/common';
import { HeliaLibp2p } from 'helia';

@Injectable()
export class HeliaService {
  private helia?;

  async getHelia(): Promise<HeliaLibp2p> {
    if (this.helia == null) {
      const { createHelia } = await import('helia');
      const { MemoryBlockstore } = await import('blockstore-core');
      const { MemoryDatastore } = await import('datastore-core');
      const { createLibp2p } = await import('libp2p');
      const { noise } = await import('@chainsafe/libp2p-noise');
      const { yamux } = await import('@chainsafe/libp2p-yamux');
      const { bootstrap } = await import('@libp2p/bootstrap');
      const { identify } = await import('@libp2p/identify');
      const { tcp } = await import('@libp2p/tcp');

      const blockstore = new MemoryBlockstore();
      const datastore = new MemoryDatastore();
      const libp2p = await createLibp2p({
        datastore,
        addresses: {
          listen: ['/ip4/127.0.0.1/tcp/0'],
        },
        transports: [tcp()],
        connectionEncryption: [noise()],
        streamMuxers: [yamux()],
        peerDiscovery: [
          bootstrap({
            list: [
              '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
              '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
              '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
              '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt',
            ],
          }),
        ],
        services: {
          identify: identify(),
        },
      });
      this.helia = await createHelia({ blockstore, datastore, libp2p });
    }
    return this.helia;
  }
}
