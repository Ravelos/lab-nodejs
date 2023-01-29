/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRespository } from 'src/application/repositories/notifications-repository';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
    count:number;
};

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRespository: NotificationsRespository) {}

  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRespository.countManyByRecipientId(recipientId);

    return {
        count
    }
  }
}
