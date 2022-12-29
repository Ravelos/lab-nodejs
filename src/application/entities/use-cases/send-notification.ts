/* eslint-disable prettier/prettier */
import { Content } from "../content";
import { Notificacion } from "../notification";

interface SendNotificationRequest{
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse{
    notification: Notificacion;
}


export class SendNotification{
    async execute (
        request: SendNotificationRequest,
        ): Promise<SendNotificationResponse> {
            const {recipientId, content, category } = request;

            const notification = new Notificacion({
                recipientId,
                content: new Content(content),
                category,
                createdAt: new Date()
            });

            return{
                notification,
            };
        }
};