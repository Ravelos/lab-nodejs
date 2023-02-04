/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notifications-factory';
import { InMemoryNotificationsRepository } from '../../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';



describe('Get recipient notifications', () =>{
    

    it('should be able to get recipient notifications',async () =>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotification = new GetRecipientNotification(notificationsRepository);

        await notificationsRepository.create(makeNotification({recipientId: 'recipient01'}));

        await notificationsRepository.create(makeNotification({recipientId: 'recipient01'}));

        await notificationsRepository.create(makeNotification({recipientId: 'recipient02'}));

      const { notifications } = await getRecipientNotification.execute({
        recipientId: 'recipient01'
      })

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
          expect.objectContaining({ recipientId: 'recipientId-1' }),
          expect.objectContaining({ recipientId: 'recipientId-1' })
        ]));
    });
});