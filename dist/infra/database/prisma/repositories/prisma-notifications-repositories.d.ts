import { Notification } from "../../../../application/entities/notification";
import { NotificationsRespository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepository implements NotificationsRespository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    save(notification: Notification): Promise<void>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    findById(notificationId: string): Promise<Notification | null>;
    create(notification: Notification): Promise<void>;
}
