import { Notification as RawNotification } from '@prisma/client';
import { Notification } from 'src/application/entities/notification';
export declare class PrismaNotificationMappers {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: any;
        createdAt: Date;
    };
    static toDomain(raw: RawNotification): Notification;
}
