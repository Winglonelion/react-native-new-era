import axios from 'axios';
import { GET_NOTIFICATIONS_ENDPOINT } from '../api.endpoint';
import {
  GetNotificationParameters,
  GetNotificationsResponse,
} from './notification.api.types';

export function getNotificationListAPI({
  page,
  limit = 10,
}: GetNotificationParameters) {
  return axios.post<GetNotificationsResponse>(GET_NOTIFICATIONS_ENDPOINT, {
    page,
    limit,
  });
}
