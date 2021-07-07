/**
 * MOBX domain store for user's session
 *
 * @summary mobx domain state store for user's session
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-06-30 11:25:17
 * Last modified  : 2021-07-07 17:40:44
 */

import SessionAPI from 'api/session/session.api';
import { LoginResponse } from 'api/session/session.api.types';
import { AxiosResponse } from 'axios';
import { SESSION_STATUS } from 'constants/session';
import userProfileStore from 'data/user/UserProfileStore';
import { action, computed, flow, makeObservable, observable } from 'mobx';
import SessionMMKVStore from './session.local.storage';

const TOKEN_KEY = 'ACCESS_TOKEN';

export class SessionStore {
  access_token: string = '';
  session_status: string = SESSION_STATUS.UNAUTHORIZED;

  constructor() {
    makeObservable(this, {
      access_token: observable,
      session_status: observable,
      isAuthorized: computed,
      login: flow,
      logout: flow,
      authenticate: action,
      setToken: action,
      clearToken: action,
    });
  }
  setToken(token: string) {
    if (!token || this.access_token === token) return;
    this.access_token = token;
    SessionMMKVStore.setString(TOKEN_KEY, token);
  }

  clearToken() {
    this.access_token = '';
    SessionMMKVStore.removeItem(TOKEN_KEY);
  }

  get accessToken() {
    return this.access_token;
  }

  get isAuthorized() {
    return this.session_status === SESSION_STATUS.AUTHORIZED;
  }

  *login() {
    if (this.session_status !== SESSION_STATUS.UNAUTHORIZED) {
      console.warn('logged in');
      return;
    }
    this.session_status = SESSION_STATUS.AUTHORIZING;
    try {
      const response: AxiosResponse<LoginResponse> = yield SessionAPI.login({
        email: 'nguyenbuiducthuan@gmail.com',
        password: 'password',
      });
      const {
        data: { access_token },
      } = response;
      this.access_token = access_token;
      SessionMMKVStore.setString(TOKEN_KEY, access_token);
      userProfileStore.setUser({
        full_name: 'Tony Stark',
        birthday: '1993/09/08',
        ethnicity: 'Egypth',
        is_new_user: true,
        nickname: '',
        date_married: '2021/03/30',
        marital_status: 'married',
      });
      this.session_status = SESSION_STATUS.AUTHORIZED;
      console.log('login complete', { access_token });
    } catch (error) {
      this.session_status = SESSION_STATUS.UNAUTHORIZED;
    }
  }
  // load token from mmkv storage and set to store
  async authenticate() {
    try {
      const token = await SessionMMKVStore.getString(TOKEN_KEY);
      if (token) {
        this.access_token = token;
        this.session_status = SESSION_STATUS.AUTHORIZED;
        userProfileStore.setUser({
          full_name: 'Tony Stark',
          birthday: '1993/09/08',
          ethnicity: 'Egypth',
          is_new_user: true,
          nickname: '',
          date_married: '2021/03/30',
          marital_status: 'married',
        });
      }
    } catch (error) {
      console.warn('authenticate error', { error });
    }
  }

  *logout() {
    // TODO: implement API logout here
    this.access_token = '';
    SessionMMKVStore.clearStore();
    this.session_status = SESSION_STATUS.UNAUTHORIZED;
    userProfileStore.clearUser();
  }
}
/**
 * @instance store session info of a user.
 */
const sessionStore = new SessionStore();
export default sessionStore;
