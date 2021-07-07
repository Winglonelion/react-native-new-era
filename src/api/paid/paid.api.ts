import axios from 'axios';
import {
  PAID_HISTORY_OVERVIEW_ENDPOINT,
  PAID_OVERVIEW_ENDPOINT,
} from '../api.endpoint';
import {
  GetPaidHistoryOverViewParameters,
  GetPaidHistoryOverViewResponse,
  GetPaidOverViewParameters,
  GetPaidOverViewResponse,
} from './paid.api.types';

export function getPaidOverViewAPI({ userId }: GetPaidOverViewParameters) {
  return axios.post<GetPaidOverViewResponse>(PAID_OVERVIEW_ENDPOINT, {
    user_id: userId,
  });
}

export function getPaidHistoryOverViewAPI({
  userId,
}: GetPaidHistoryOverViewParameters) {
  return axios.post<GetPaidHistoryOverViewResponse>(
    PAID_HISTORY_OVERVIEW_ENDPOINT,
    {
      user_id: userId,
    },
  );
}
