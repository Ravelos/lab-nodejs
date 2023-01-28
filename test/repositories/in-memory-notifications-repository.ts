/* eslint-disable prettier/prettier */
import { NotificationsRespository } from '../../src/application/repositories/notifications-repository';
import { Notification } from '../../src/application/entities/notification';

export class InMemoryNotificationsRepository implements NotificationsRespository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find((item) => item.id === notificationId);
    if (!notification){
      return null;
    }
    {
      return notification;
    }
  }
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification:Notification): Promise<void>{
    const notificationIndex = this.notifications.findIndex(
      item => item.id === notification.id,
    );

    if (notificationIndex >= 0){
      this.notifications[notificationIndex] = notification;
    }
  }
}
