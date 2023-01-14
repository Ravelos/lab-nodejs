/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRespository } from "../../../application/repositories/notifications-repository";
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

@Injectable()
export class SendNotification{

    constructor(private notificationRespository:NotificationsRespository){}

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