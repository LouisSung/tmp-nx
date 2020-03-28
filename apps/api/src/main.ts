import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '/api/v0';
  const port = process.env.port ?? 3000;

  app.setGlobalPrefix(globalPrefix);
  if (process.env.port !== '54321') {
    // run in electron
    app.enableCors();
  }
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}${globalPrefix}`);
  });
}

bootstrap().catch(() => {});
