"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationMappers = void 0;
const content_1 = require("../../../../application/entities/content");
const notification_1 = require("../../../../application/entities/notification");
class PrismaNotificationMappers {
    static toPrisma(notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        };
    }
    static toDomain(raw) {
        return new notification_1.Notification({
            category: raw.category,
            content: new content_1.Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt
        }, raw.id);
    }
}
exports.PrismaNotificationMappers = PrismaNotificationMappers;
//# sourceMappingURL=prisma-notification-mapper.js.map