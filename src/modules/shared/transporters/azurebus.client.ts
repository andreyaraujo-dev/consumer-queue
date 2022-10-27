import { ServiceBusClient } from '@azure/service-bus';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ReadPacket, WritePacket } from '@nestjs/microservices';
import { ConstantKeys } from '../config/constant-keys.enum';

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
  constructor(@Inject(ConstantKeys.azureBusUrl) azureBusUrl: string) {
    super();
    this.serviceBusClient = new ServiceBusClient(azureBusUrl);
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
    await sender.sendMessages(body);
    sender.close();
  }
}
