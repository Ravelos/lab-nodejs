"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationMappers = void 0;
const notification_1 = require("../../../../application/entities/notification");
class PrismaNotificationMappers {
}
exports.PrismaNotificationMappers = PrismaNotificationMappers;
{
    notification: notification_1.Notification;
}
{
    return {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
    };
}
//# sourceMappingURL=prisma-notification-mappers.js.map