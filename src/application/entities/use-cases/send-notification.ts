/* eslint-disable prettier/prettier */
import { NotificationRespository } from "src/application/repositories/notifications-repository";
import { Content } from "../content";
import { Notification } from "../notification";

interface SendNotificationRequest{
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse{
    notification: Notification;
}


export class SendNotification{

    constructor(private notificationRespository:NotificationRespository){}

    async execute (
        request: SendNotificationRequest,
        ): Promise<SendNotificationResponse> {
            const {recipientId, content, category } = request;

            const notification = new Notification({
                recipientId,
                content: new Content(content),
                category,
                createdAt: new Date()
            });

            await this.notificationRespository.create(notification);

            return{
                notification,
            };
        }
};