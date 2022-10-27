import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConstantKeys } from './modules/shared/config/constant-keys.enum';
import { AzureBusServer } from './modules/shared/transporters/azurebus.server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    strategy: new AzureBusServer({
      url: app.get(ConstantKeys.azureBusUrl),
    }),
  });
  app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
