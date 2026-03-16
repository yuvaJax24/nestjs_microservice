import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.NOTIFICATION_SERVICE_HOST || 'localhost',
          port: process.env.NOTIFICATION_SERVICE_PORT
            ? parseInt(process.env.NOTIFICATION_SERVICE_PORT)
            : 8001,
        },
      },
      {
        name: 'ORDER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.ORDER_SERVICE_HOST || 'localhost',
          port: process.env.ORDER_SERVICE_PORT
            ? parseInt(process.env.ORDER_SERVICE_PORT)
            : 8002,
        },
      },
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.PAYMENT_SERVICE_HOST || 'localhost',
          port: process.env.PAYMENT_SERVICE_PORT
            ? parseInt(process.env.PAYMENT_SERVICE_PORT)
            : 8003,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
