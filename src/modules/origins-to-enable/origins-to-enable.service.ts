import { Injectable } from '@nestjs/common';

export interface QueueData {
  message: string;
  status: 'ERROR' | 'FINISH';
}

@Injectable()
export class OriginsToEnableService {
  execute(event: QueueData): QueueData {
    console.log({ message: event.message, status: 'FINISH' });

    return { message: event.message, status: 'FINISH' };
  }
}
