import { Notification } from "src/application/entities/notification";
export declare class NotificationViewModel {
    static toHTTP(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: any;
        createdAt: Date;
    };
}
