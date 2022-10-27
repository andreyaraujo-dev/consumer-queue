import { Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OriginsToEnableService, QueueData } from './origins-to-enable.service';

@Controller('consumer')
export class OriginsToEnableController {
  constructor(
    private readonly originsToEnableService: OriginsToEnableService,
  ) {}

  @Post()
  @EventPattern('origins-to-enable')
  async enable(@Payload() event): Promise<QueueData> {
    return this.originsToEnableService.execute(event);
  }
}
