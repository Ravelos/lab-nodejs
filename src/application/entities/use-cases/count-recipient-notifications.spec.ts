/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from '../../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../content';
import { Notification } from '../notification';
import { CountRecipientNotification } from './count-recipient-notifications';



describe('Count recipient notifications', () =>{
    

    it('should be able to count recipient notifications',async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(makeNotification({recipientId: 'recipient01'}));

        await notificationsRepository.create(makeNotification({recipientId: 'recipient01'}));

        await notificationsRepository.create(makeNotification({recipientId: 'recipient02'}));

      const { count } = await countRecipientNotification.execute({
        recipientId: 'recipient01'
      })

        expect(count).toEqual(2);
    });
});