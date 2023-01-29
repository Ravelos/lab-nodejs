/* eslint-disable prettier/prettier */
import { Content } from "src/application/entities/content";
import { Notification, NotificationProps } from "src/application/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override:Override = {}){
    return new Notification({
        category:'social',
        content: new Content('Hello! Test1'),
        recipientId: 'recipient02',
        createdAt: new Date(),
        ...override,
    })
}