import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
interface CountRecipientNotificationRequest {
    recipientId: string;
}
interface CountRecipientNotificationResponse {
    count: number;
}
export declare class CountRecipientNotification {
    private notificationsRespository;
    constructor(notificationsRespository: NotificationsRespository);
    execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse>;
}
export {};
