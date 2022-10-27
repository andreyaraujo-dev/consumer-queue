import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OriginsToEnableModule } from './modules/origins-to-enable/origins-to-enable.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, OriginsToEnableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
