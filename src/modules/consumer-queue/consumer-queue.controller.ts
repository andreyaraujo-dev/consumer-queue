import { Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  ConsumerQueueService,
  ConsumerQueueOutput,
} from './consumer-queue.service';
import { LoggerService } from '../shared/services/logger/logger.service';

@Controller('consumer')
export class ConsumerQueueController {
  constructor(
    private readonly consumerQueueService: ConsumerQueueService,
    private readonly logger: LoggerService,
  ) {
    this.logger.setContext(ConsumerQueueController.name);
  }

  @Post()
  @EventPattern('aqs-event-access-client')
  async enable(@Payload() event): Promise<ConsumerQueueOutput> {
    this.logger.debug('DADOS CONSUMIDOS DA FILA ⏩');
    this.logger.debug(event);
    return this.consumerQueueService.execute(event);
  }
}
