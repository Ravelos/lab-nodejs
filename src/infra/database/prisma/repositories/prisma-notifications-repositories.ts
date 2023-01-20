/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notifications-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRespository{    

    constructor(private prismaService:PrismaService){}

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification)
        await this.prismaService.notification.create({
            data: raw
        });
    }
}