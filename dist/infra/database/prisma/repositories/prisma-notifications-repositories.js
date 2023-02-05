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
exports.PrismaNotificationsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_notification_mapper_1 = require("../mappers/prisma-notification-mapper");
const prisma_service_1 = require("../prisma.service");
let PrismaNotificationsRepository = class PrismaNotificationsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findManyByRecipientId(recipientId) {
        const notifications = await this.prismaService.notification.findMany({
            where: {
                recipientId,
            }
        });
        return notifications.map((notification) => {
            return prisma_notification_mapper_1.PrismaNotificationMappers.toDomain(notification);
        });
    }
    async save(notification) {
        const raw = prisma_notification_mapper_1.PrismaNotificationMappers.toPrisma(notification);
        await this.prismaService.notification.update({
            where: {
                id: raw.id,
            },
            data: raw,
        });
    }
    async countManyByRecipientId(recipientId) {
        const count = await this.prismaService.notification.count({
            where: {
                recipientId,
            }
        });
        return count;
    }
    async findById(notificationId) {
        const notification = await this.prismaService.notification.findUnique({
            where: {
                id: notificationId,
            },
        });
        if (!notification) {
            return null;
        }
        return prisma_notification_mapper_1.PrismaNotificationMappers.toDomain(notification);
    }
    async create(notification) {
        const raw = prisma_notification_mapper_1.PrismaNotificationMappers.toPrisma(notification);
        await this.prismaService.notification.create({
            data: raw
        });
    }
};
PrismaNotificationsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaNotificationsRepository);
exports.PrismaNotificationsRepository = PrismaNotificationsRepository;
//# sourceMappingURL=prisma-notifications-repositories.js.map