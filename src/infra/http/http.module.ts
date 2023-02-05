/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CancelNotification } from 'src/application/entities/use-cases/cancel-notification';
import { CountRecipientNotification } from 'src/application/entities/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/application/entities/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/entities/use-cases/read-notification';
import { UnreadNotification } from 'src/application/entities/use-cases/unread-notification';
import { SendNotification } from '../../application/entities/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotification,
    CountRecipientNotification
  ],
})
export class HttpModule {}
