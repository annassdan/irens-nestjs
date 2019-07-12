import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* setup dokumentasi swagger */
  const opt = new DocumentBuilder()
    .setTitle('Irens')
    .setDescription('Aplikasi Irens')
    .setVersion('1.0.0.')
    .build();
  const doc = SwaggerModule.createDocument(app, opt);
  SwaggerModule.setup('apidoc', app, doc);
  /**/

  await app.listen(3000);
  console.log(`Application is listening on port ${port}...`)
}
bootstrap();
