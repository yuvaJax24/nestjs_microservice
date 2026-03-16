import { Controller, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('send_notification')
  create(@Body() data: CreateNotificationDto) {
    return this.notificationService.create(data);
  }
}
