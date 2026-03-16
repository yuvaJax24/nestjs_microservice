import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  create(data: CreatePaymentDto) {
    console.log('Payment processed:', data);
  }
}
