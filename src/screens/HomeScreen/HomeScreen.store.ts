import { computed, flow, makeObservable, observable } from 'mobx';
import { AxiosResponse } from 'axios';
import {
  GetPaidHistoryOverViewResponse,
  GetPaidOverViewResponse,
} from 'api/paid/paid.api.types';
import {
  getPaidHistoryOverViewAPI,
  getPaidOverViewAPI,
} from 'api/paid/paid.api';

class HomeScreenStore {
  paidOverViewData: GetPaidOverViewResponse = {
    gross: NaN,
    regular: NaN,
    over_time: NaN,
    hours: NaN,
    rate: NaN,
    take_home: NaN,
    detail: [
      { type: 'taxes', value: NaN },
      { type: 'benefits', value: NaN },
      { type: 'retirements', value: NaN },
      { type: 'other', value: NaN },
      { type: 'taxes', value: NaN },
      { type: 'taxes', value: NaN },
    ],
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
