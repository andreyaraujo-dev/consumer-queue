import { Module } from '@nestjs/common';
import { ConsumerQueueController } from './consumer-queue.controller';
import { ConsumerQueueService } from './consumer-queue.service';

@Module({
  providers: [ConsumerQueueService],
  controllers: [ConsumerQueueController],
})
export class ConsumerQueueModule {}
