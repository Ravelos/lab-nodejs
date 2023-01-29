/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notifications-repository";
import { PrismaNotificationMappers } from "../mappers/prisma-notification-mapper";

import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRespository{    

    constructor(private prismaService:PrismaService){}
    save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
    countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    findById(notificationId: string): Promise<Notification | null> {
        throw new Error("Method not implemented.");
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMappers.toPrisma(notification)
        await this.prismaService.notification.create({
            data: raw
        });
    }
}