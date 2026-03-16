import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  create(data: CreateNotificationDto) {
    console.log('Notification sent:', data);
  }
}
