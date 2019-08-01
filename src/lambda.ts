import {
  APIGatewayProxyHandler,
  ScheduledEvent,
  ScheduledHandler,
} from 'aws-lambda';
import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

const sayHello = async (source: string) => {
  const context = await NestFactory.createApplicationContext(AppModule);
  const module = await context.select<AppModule>(AppModule);
  const foo = module.get<AppService>(AppService);

  return foo.getHello(source);
};

export const hello = async (event: ScheduledEvent, _context) => {
  console.log(await sayHello(event.source));
  return {
    // statusCode: 200,
    // body: JSON.stringify(
    //   {
    //     message: msg,
    //   },
    //   null,
    //   2,
    // ),
  };
};
