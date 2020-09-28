import { DataSource } from 'apollo-datasource';
import { TUser } from '../types';

class UserAPI extends DataSource {
  store: TUser[];

  constructor({ store }: { store: TUser[] }) {
    super();
    this.store = store;
  }

  getUserByID(id: string): TUser | undefined {
    return this.store.find(x => x.id === id) || undefined;
  }
/*   createUser(name:string, email:string, pet:string[]):TUser | undefined {
    const id = this.store.length +1;
    const newUser = { name, email, id };
   this.store.push(newUser);
  } */
}

export default UserAPI;
