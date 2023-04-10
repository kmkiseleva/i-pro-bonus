// Core
import { makeAutoObservable } from 'mobx';

// Api
import { fetchBonus } from '../api/bonus/bonus.api';

// Types
import { BonusData } from '../api/bonus/types/bonus.interface';

class BonusStore {
  bonus_data: BonusData;

  is_loading: boolean;

  is_error: boolean;

  constructor() {
    this.bonus_data = {
      typeBonusName: '',
      currentQuantity: 0,
      forBurningQuantity: 0,
      dateBurning: '',
    };

    this.is_loading = true;

    this.is_error = false;

    makeAutoObservable(this);
  }

  getBonusInfo = async () => {
    try {
      const response = await fetchBonus();
      const data = await response.json();
      this.bonus_data = data.data;
      this.is_loading = false;
    } catch (error) {
      this.is_loading = false;
      this.is_error = true;
      console.error(error);
    }
  };

  get bonusData() {
    return this.bonus_data;
  }

  get isLoading() {
    return this.is_loading;
  }

  get isError() {
    return this.is_error;
  }
}

const bonusStore = new BonusStore();
export default bonusStore;
