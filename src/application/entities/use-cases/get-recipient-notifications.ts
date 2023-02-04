/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
import { Notification } from '../notification';

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
    notifications:Notification[];
};

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: GetRecipientNotificationRequest
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRespository.findManyByRecipientId(recipientId);

    return {
        notifications
    }
  }
}