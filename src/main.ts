import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { swaggerConfig } from './config/swaggerConfig'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const swaggerDocument = () =>
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setDescription(swaggerConfig.description)
        .setTitle(swaggerConfig.title)
        .setVersion(swaggerConfig.version)
        .build()
    )

  SwaggerModule.setup('docs', app, swaggerDocument)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
