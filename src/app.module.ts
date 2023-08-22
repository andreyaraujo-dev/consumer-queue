import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerQueueModule } from './modules/consumer-queue/consumer-queue.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, ConsumerQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
