import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(source: string): string {
    return 'Hello Serverless! ' + source;
  }

  getHelloExpress(): string {
    return 'Hello with express';
  }
}
