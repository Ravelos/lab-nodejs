/* eslint-disable prettier/prettier */

import { Notification } from "../entities/notification";

export abstract class NotificationRespository{
    abstract create(notification: Notification): Promise<void>;
}