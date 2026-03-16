import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private paymentClient: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private notificationClient: ClientProxy,
  ) {}
  createOrder(data: any) {
    this.orderClient.send('create_order', data);

    this.paymentClient.send('process_payment', {
      amount: 50000,
    });

    this.notificationClient.emit('send_notification', {
      message: 'Order created successfully',
    });

    return { message: 'Order creation initiated' };
  }
}
