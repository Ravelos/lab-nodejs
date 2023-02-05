/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { CancelNotification } from 'src/application/entities/use-cases/cancel-notification';
import { CountRecipientNotification } from 'src/application/entities/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/application/entities/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/entities/use-cases/read-notification';
import { SendNotification } from 'src/application/entities/use-cases/send-notification';
import { UnreadNotification } from 'src/application/entities/use-cases/unread-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countFromNotification: CountRecipientNotification,
    private getRecipientNotifications: GetRecipientNotification
    ){}

  @Patch(':id/cancel')
  async cancel(@Param('id') id:string ) {

    await this.cancelNotification.execute({
      notificationId:id,
    });

  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId:string){

    const {count} = await this.countFromNotification.execute({
      recipientId

    });
    return {
      count,
    }
  
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId:string){
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });
    return {
       notifications: notifications.map(NotificationViewModel.toHTTP),
       };
  }

  @Patch(':id/read')
  async read(@Param('id') id:string ){
    await this.readNotification.execute({
      notificationId:id,
    });  
  }

  @Patch(':id/unread')
  async unread(@Param('id') id:string ){
    await this.unreadNotification.execute({
      notificationId:id,
    });
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {notification: NotificationViewModel.toHTTP(notification)
    };
  }
}
