/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '../../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../content';
import { Notification } from '../notification';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';



describe('Cancel notification', () =>{
    

    it('should cancel a notification',async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = new Notification({
            category:'social',
            content: new Content('Hello! Test'),
            recipientId: 'example-recipient-id',
            createdAt: new Date()
        })

        await notificationsRepository.create(notification);

       await cancelNotification.execute({
        notificationId: notification.id
        });

        expect(notificationsRepository.notifications[0].canceleAt).toBeTruthy;
    });

    it('should not be able to cancel a non existing notification',async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);
        
        expect(()=>{
            return cancelNotification.execute({
                notificationId:'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound);
    });
});