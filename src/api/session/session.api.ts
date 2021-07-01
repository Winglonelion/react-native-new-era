import axios from 'axios';
import { AUTH_ENDPOINT } from '../api.endpoint';
import { CLIENT_ID, CLIENT_SECRET } from '../api.constants';
import { LoginAPIParameters, LoginResponse } from './session.api.types';

export function loginAPI({
  email = '',
  password = '',
}: LoginAPIParameters = {}) {
  return axios.post<LoginResponse>(AUTH_ENDPOINT, {
    grant_type: 'password',
    email: email,
    password: password,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });
}

const SessionAPI = {
  login: loginAPI,
};

export default SessionAPI;
