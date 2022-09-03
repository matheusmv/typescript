import { MessagingProtocol } from '../interfaces/messaging';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(message);
  }
}
