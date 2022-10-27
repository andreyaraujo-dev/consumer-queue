import { Module } from '@nestjs/common';
import { OriginsToEnableController } from './origins-to-enable.controller';
import { OriginsToEnableService } from './origins-to-enable.service';

@Module({
  providers: [OriginsToEnableService],
  controllers: [OriginsToEnableController],
})
export class OriginsToEnableModule {}
