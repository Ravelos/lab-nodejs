import { NotificationsRespository } from "../../../application/repositories/notifications-repository";
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
    constructor(notificationRespository: NotificationsRespository);
    execute(request: SendNotificationRequest): Promise<SendNotificationResponse>;
}
export {};
