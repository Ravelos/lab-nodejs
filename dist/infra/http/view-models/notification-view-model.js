"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationViewModel = void 0;
class NotificationViewModel {
    static toHTTP(notification) {
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
exports.NotificationViewModel = NotificationViewModel;
//# sourceMappingURL=notification-view-model.js.map