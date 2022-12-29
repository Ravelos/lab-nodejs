/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
        content: new Content('You have a new friendship request'),
        recipientId: 'reciepient-id-example',
        category: 'social',
        createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
