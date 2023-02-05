import { CancelNotification } from 'src/application/entities/use-cases/cancel-notification';
import { CountRecipientNotification } from 'src/application/entities/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/application/entities/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/entities/use-cases/read-notification';
import { SendNotification } from 'src/application/entities/use-cases/send-notification';
import { UnreadNotification } from 'src/application/entities/use-cases/unread-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countFromNotification;
    private getRecipientNotifications;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countFromNotification: CountRecipientNotification, getRecipientNotifications: GetRecipientNotification);
    cancel(id: string): Promise<void>;
    countFromRecipient(recipientId: string): Promise<{
        count: number;
    }>;
    getFromRecipient(recipientId: string): Promise<{
        notifications: {
            id: string;
            category: string;
            content: string;
            recipientId: string;
            readAt: Date | null | undefined;
            createdAt: Date;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            category: string;
            content: string;
            recipientId: string;
            readAt: Date | null | undefined;
            createdAt: Date;
        };
    }>;
}
