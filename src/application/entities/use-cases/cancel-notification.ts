/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Content } from '../content';
import { Notification } from '../notification';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRespository: NotificationsRespository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationRespository.findById(notificationId);

    if (!notification){
        throw new Error('Notification not found')
    }

    notification.cancel();
  }
}
