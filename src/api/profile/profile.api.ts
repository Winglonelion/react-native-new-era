import axios from 'axios';
import { USER_PROFILE_ENDPOINT } from '../api.endpoint';
import {
  FetchProfileAPIParameters,
  FetchProfileResponse,
} from './profile.api.types';

export function fetchUserProfile({}: FetchProfileAPIParameters = {}) {
  return axios.post<FetchProfileResponse>(USER_PROFILE_ENDPOINT, {});
}
