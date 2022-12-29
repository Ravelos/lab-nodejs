/* eslint-disable prettier/prettier */
import { SendNotification } from "./send-notification"

describe('Send notification', () =>{

    it('should send a notification',async () =>{
        const sendNotification = new SendNotification();

        const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId:'example-recipient-id'
        });

        expect(notification).toBeTruthy();
    });
});