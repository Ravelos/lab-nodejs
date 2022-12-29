/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Notification content', () =>{

    it('should be able to create a notification content', () => {
        const content = new Content('You have received a friendship request');
      
        expect(content).toBeTruthy();
    });
      
    it('should be able to create a notification content', () => {  
          expect(() => new Content('aaa')).toThrow();
    });
      
    it('should be able to create a notification content', () => {  
          expect(() => new Content('a'.repeat(241))).toThrow();
    });
});
