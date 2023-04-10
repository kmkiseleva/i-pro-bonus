import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { auth } from '../api/auth/auth.api';

class AuthStore {
  access_token: string;

  constructor() {
    this.access_token = '';

    makeAutoObservable(this);
    makePersistable(this, {
      name: 'access_token',
      properties: ['access_token'],
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    });
  }

  authorization = async () => {
    try {
      const response = await auth();
      const data = await response.json();
      this.access_token = data.accessToken;
    } catch (error) {
      console.error(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
