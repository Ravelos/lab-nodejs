/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRespository.findById(notificationId);

    if (!notification){
        throw new Error('Notification not found')
    }

    notification.unread();
  }
}
