import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
import { Notification } from '../notification';
interface GetRecipientNotificationRequest {
    recipientId: string;
}
interface GetRecipientNotificationResponse {
    notifications: Notification[];
}
export declare class GetRecipientNotification {
    private notificationsRespository;
    constructor(notificationsRespository: NotificationsRespository);
    execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse>;
}
export {};
