/* eslint-disable prettier/prettier */
import { NotificationsRespository } from '../../src/application/repositories/notifications-repository';
import { Notification } from '../../src/application/entities/notification';

export class InMemoryNotificationsRepository implements NotificationsRespository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
