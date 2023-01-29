/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
import { Content } from '../content';
import { Notification } from '../notification';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRespository.findById(notificationId);

    if (!notification){
        throw new Error('Notification not found')
    }

    notification.cancel();
  }
}
