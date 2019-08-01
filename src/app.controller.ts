import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(source:string): string {
    return this.appService.getHello(source);
  }

  @Get("/express")
  getHelloExpress(): string {
    return this.appService.getHelloExpress();
  }
}
