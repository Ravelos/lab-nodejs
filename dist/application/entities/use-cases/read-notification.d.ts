import { NotificationsRespository } from 'src/application/repositories/notifications-repository';
interface ReadNotificationRequest {
    notificationId: string;
}
type ReadNotificationResponse = void;
export declare class ReadNotification {
    private notificationsRespository;
    constructor(notificationsRespository: NotificationsRespository);
    execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse>;
}
export {};
