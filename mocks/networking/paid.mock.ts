import {
  PAID_OVERVIEW_ENDPOINT,
  PAID_HISTORY_OVERVIEW_ENDPOINT,
} from 'api/api.endpoint';
import mock from './adapter';
import { withDelay } from './mock.utils';
import {
  GetPaidOverViewResponse,
  GetPaidHistoryOverViewResponse,
} from 'api/paid/paid.api.types';

const paid_overview: GetPaidOverViewResponse = {
  take_home: 1000,
  gross: 1800,
  regular: 1500,
  over_time: 300,
  hours: 80,
  rate: 30,
  detail: [
    //
    { type: 'taxes', value: 357.74 },
    { type: 'benefits', value: 73 },
    { type: 'retirements', value: 40 },
    { type: 'other', value: 40 },
    { type: 'take_home', value: 1000 },
  ],
};

const paid_history_overview: GetPaidHistoryOverViewResponse = [
  //
  { date: '2021-01-31', take_home: 2200.01, hours: 180, gross: 2400 },
  { date: '2021-02-28', take_home: 2200.01, hours: 180, gross: 2400 },
  { date: '2021-01-15', take_home: 2200.01, hours: 180, gross: 2400 },
];

function paidMock() {
  mock
    .onPost(PAID_OVERVIEW_ENDPOINT)
    .reply(withDelay(2000, { status: 200, data: paid_overview }));

  mock
    .onPost(PAID_HISTORY_OVERVIEW_ENDPOINT)
    .reply(withDelay(800, { status: 200, data: paid_history_overview }));
}

export default paidMock;
