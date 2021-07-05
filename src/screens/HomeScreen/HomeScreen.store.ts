import { makeObservable, observable, computed, flow } from 'mobx';
import { AxiosResponse } from 'axios';
import {
  GetPaidOverViewResponse,
  GetPaidHistoryOverViewResponse,
} from 'api/paid/paid.api.types';
import {
  getPaidOverViewAPI,
  getPaidHistoryOverViewAPI,
} from 'api/paid/paid.api';

class HomeScreenStore {
  paidOverViewData: GetPaidOverViewResponse = {
    detail: [],
    gross: NaN,
    hours: NaN,
    over_time: NaN,
    rate: NaN,
    regular: NaN,
    take_home: NaN,
  };
  loadingPaidOverView: boolean = false;

  paidHistoryOverViewData: GetPaidHistoryOverViewResponse = [];
  loadingPaidHistoryOverView: boolean = false;

  constructor() {
    makeObservable(this, {
      paidOverViewData: observable,
      paidHistoryOverViewData: observable,
      loadingPaidOverView: observable,
      loadingPaidHistoryOverView: observable,
      homeLoading: computed,
      fetchPaidOverview: flow,
      fetchPaidHistoryOverview: flow,
    });
  }

  get homeLoading() {
    return this.loadingPaidOverView || this.loadingPaidHistoryOverView;
  }

  *fetchPaidOverview() {
    try {
      if (this.loadingPaidOverView) return;
      this.loadingPaidOverView = true;
      const response: AxiosResponse<GetPaidOverViewResponse> =
        yield getPaidOverViewAPI({ userId: '123' });
      this.paidOverViewData = response.data;
      this.loadingPaidOverView = false;
    } catch (error) {
      this.loadingPaidOverView = false;
      console.warn('fetchPaidOverview', { error });
    }
  }

  *fetchPaidHistoryOverview() {
    try {
      if (this.loadingPaidHistoryOverView) return;
      this.loadingPaidHistoryOverView = true;
      const response: AxiosResponse<GetPaidHistoryOverViewResponse> =
        yield getPaidHistoryOverViewAPI({ userId: '123' });
      this.paidHistoryOverViewData = response.data;
      this.loadingPaidHistoryOverView = false;
    } catch (error) {
      this.loadingPaidHistoryOverView = false;
      console.warn('fetchPaidHistoryOverview', { error });
    }
  }
}

/**
 * @instance store session info of a user.
 */
const homeScreenStore = new HomeScreenStore();
export default homeScreenStore;
