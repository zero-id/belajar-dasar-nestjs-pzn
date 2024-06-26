import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookie from 'cookie-parser';
import * as mustache from 'mustache-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ValidationFilter } from './validation/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookie('Rahasia'));

  const loggerService = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(loggerService);

  app.set('views', __dirname + '/../views');
  app.set('view engine', 'html');
  app.engine('html', mustache());

  app.useGlobalFilters(new ValidationFilter());
  // app.useGlobalPipes(...);
  // app.useGlobalInterceptors(...)
  // app.useGlobalGuards(...)

  app.enableShutdownHooks();

  const consfigService = app.get(ConfigService);

  await app.listen(consfigService.get('PORT'));
}
bootstrap();
