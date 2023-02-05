import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
interface CancelNotificationRequest {
    notificationId: string;
}
type CancelNotificationResponse = void;
export declare class CancelNotification {
    private notificationsRespository;
    constructor(notificationsRespository: NotificationsRespository);
    execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse>;
}
export {};
