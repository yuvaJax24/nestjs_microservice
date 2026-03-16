import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  create(data: CreateOrderDto) {
    return {
      status: 'order created',
      data,
    };
  }
}
