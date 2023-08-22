import { Injectable } from '@nestjs/common';

export interface ConsumerQueueOutput {
  status: 'ERROR' | 'FINISH';
  data: any;
}

@Injectable()
export class ConsumerQueueService {
  execute(data: any): ConsumerQueueOutput {
    console.log({ data, status: 'FINISH' });

    return { data, status: 'FINISH' };
  }
}
