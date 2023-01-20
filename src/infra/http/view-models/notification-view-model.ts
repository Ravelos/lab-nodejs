/* eslint-disable prettier/prettier */
import { Notification } from "src/application/entities/notification";

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
