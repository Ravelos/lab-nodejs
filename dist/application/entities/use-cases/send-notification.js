"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendNotification = void 0;
const content_1 = require("../content");
const notification_1 = require("../notification");
class SendNotification {
    constructor(notificationRespository) {
        this.notificationRespository = notificationRespository;
    }
    async execute(request) {
        const { recipientId, content, category } = request;
        const notification = new notification_1.Notification({
            recipientId,
            content: new content_1.Content(content),
            category,
            createdAt: new Date()
        });
        await this.notificationRespository.create(notification);
        return {
            notification,
        };
    }
}
exports.SendNotification = SendNotification;
;
//# sourceMappingURL=send-notification.js.map