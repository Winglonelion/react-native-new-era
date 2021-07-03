/**
 * MOBX domain store for user's session
 *
 * @summary mobx domain state store for user's session
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-06-30 11:25:17
 * Last modified  : 2021-07-02 03:44:16
 */

import SessionAPI from 'api/session/session.api';
import { LoginResponse } from 'api/session/session.api.types';
import { AxiosResponse } from 'axios';
import { SESSION_STATUS } from 'constants/session';
import userProfileStore from 'data/user/UserProfileStore';
import { makeObservable, observable, computed, action, flow } from 'mobx';
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
      authenticate: flow,
      setToken: action,
      clearToken: action,
    });
  }
  setToken(token: string) {
    this.access_token = token;
  }

  clearToken() {
    this.access_token = '';
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
      userProfileStore.setUser({
        full_name: 'Tony Stark',
        birthday: '08/09/1993',
        ethnicity: 'Egypth',
        is_new_user: true,
        nickname: 'Bad Boyz',
        date_married: '30/03/2021',
        marital_status: 'married',
      });
      this.session_status = SESSION_STATUS.AUTHORIZED;
      console.log('login complete', { access_token });
    } catch (error) {
      this.session_status = SESSION_STATUS.UNAUTHORIZED;
    }
  }
  *authenticate() {}

  *logout() {}
}
/**
 * @instance store session info of a user.
 */
const sessionStore = new SessionStore();
export default sessionStore;
