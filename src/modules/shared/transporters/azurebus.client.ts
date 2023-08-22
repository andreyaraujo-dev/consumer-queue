import { ServiceBusClient } from '@azure/service-bus';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ReadPacket, WritePacket } from '@nestjs/microservices';
import { ConstantKeys } from '../config/constant-keys.enum';
import { LoggerService } from '../services/logger/logger.service';

@Injectable()
export class AzureBusClient extends ClientProxy {
  protected publish(
    packet: ReadPacket<any>,
    callback: (packet: WritePacket<any>) => void,
  ): () => void {
    throw new Error('Method not implemented.');
  }
  private serviceBusClient: ServiceBusClient;
  private senderMap = [];
  constructor(
    @Inject(ConstantKeys.azureBusUrl) azureBusUrl: string,
    private readonly logger: LoggerService,
  ) {
    super();
    this.serviceBusClient = new ServiceBusClient(azureBusUrl);
    this.logger.setContext(AzureBusClient.name);
  }

  async connect(): Promise<any> {
    console.log('');
  }

  close() {
    this.serviceBusClient.close();
  }

  async dispatchEvent(packet: ReadPacket<any>): Promise<any> {
    const sender = this.serviceBusClient.createSender(packet.pattern);
    const body = { body: packet.data };
    this.logger.log(`BODY ENVIADO PARA FILA ⏩`);
    this.logger.log(body);
    await sender.sendMessages(body);
    sender.close();
  }
}
