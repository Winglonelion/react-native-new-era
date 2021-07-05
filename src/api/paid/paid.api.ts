import axios from 'axios';
import {
  PAID_OVERVIEW_ENDPOINT,
  PAID_HISTORY_OVERVIEW_ENDPOINT,
} from '../api.endpoint';
import {
  GetPaidOverViewParameters,
  GetPaidOverViewResponse,
  GetPaidHistoryOverViewParameters,
  GetPaidHistoryOverViewResponse,
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
