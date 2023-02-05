import { NotificationRespository } from "src/application/repositories/notification-repository";
import { Notification } from "../notification";
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationResponse {
    notification: Notification;
}
export declare class SendNotification {
    private notificationRespository;
    constructor(notificationRespository: NotificationRespository);
    execute(request: SendNotificationRequest): Promise<SendNotificationResponse>;
}
export {};
