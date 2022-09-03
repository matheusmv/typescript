import { PersistenceProtocol } from '../interfaces/persistence';

export class Persistence implements PersistenceProtocol {
  saveOrder(): void {
    console.log('order saved successfully');
  }
}
