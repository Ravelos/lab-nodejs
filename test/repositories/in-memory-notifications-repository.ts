/* eslint-disable prettier/prettier */
import { NotificationRespository } from '../../src/application/repositories/notifications-repository';
import { Notification } from '../../src/application/entities/notification';

export class InMemoryNotificationsRepository implements NotificationRespository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
