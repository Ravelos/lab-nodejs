"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnreadNotification = void 0;
const common_1 = require("@nestjs/common");
const notifications_repository_1 = require("../../repositories/notifications-repository");
let UnreadNotification = class UnreadNotification {
    constructor(notificationsRespository) {
        this.notificationsRespository = notificationsRespository;
    }
    async execute(request) {
        const { notificationId } = request;
        const notification = await this.notificationsRespository.findById(notificationId);
        if (!notification) {
            throw new Error('Notification not found');
        }
        notification.unread();
    }
};
UnreadNotification = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notifications_repository_1.NotificationsRespository])
], UnreadNotification);
exports.UnreadNotification = UnreadNotification;
//# sourceMappingURL=unread-notification.js.map