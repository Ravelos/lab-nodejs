/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRespository.findById(notificationId);

    if (!notification){
        throw new Error('Notification not found')
    }

    notification.read();
  }
}
