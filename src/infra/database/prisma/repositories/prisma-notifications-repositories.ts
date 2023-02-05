/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notifications-repository";
import { PrismaNotificationMappers } from "../mappers/prisma-notification-mapper";

import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRespository{    

    constructor(private prismaService:PrismaService){}

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prismaService.notification.findMany({
            where:{
                recipientId,
            }
        });

        return notifications.map((notification) =>{
            return PrismaNotificationMappers.toDomain(notification);
        })
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMappers.toPrisma(notification);

        await this.prismaService.notification.update({
            where:{
                id: raw.id,
            },
            data: raw,
        });
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prismaService.notification.count({
            where:{
                recipientId,
            }
        });
        return count;
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaService.notification.findUnique({
            where:{
                id: notificationId,
            },
        });
        if(!notification){
            return null;
        }
        return PrismaNotificationMappers.toDomain(notification);
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMappers.toPrisma(notification);
        await this.prismaService.notification.create({
            data: raw
        });
    }
}