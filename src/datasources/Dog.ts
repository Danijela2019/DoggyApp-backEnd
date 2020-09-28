import { DataSource } from 'apollo-datasource';
import { TDog } from '../types';

class DogAPI extends DataSource {
  store: TDog[];

  constructor({ store }: { store: TDog[] }) {
    super();
    this.store = store;
  }

  getDogByOwnerID(id: string): TDog[] | undefined {
    return this.store.filter(x => x.owner === id) || undefined;
  }

}

export default DogAPI;
