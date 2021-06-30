/**
 * MOBX domain store for user's session
 *
 * @summary mobx domain state store for user's session
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-06-30 11:25:17
 * Last modified  : 2021-06-30 11:47:14
 */

import { makeObservable, observable, computed, action, flow } from 'mobx';
export class SessionStore {
  access_token: string = '';

  constructor() {
    makeObservable(this, {
      access_token: observable,
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
    return !!this.access_token;
  }

  *login() {}
  *authenticate() {}

  *logout() {}
}
/**
 * @instance store session info of a user.
 */
const sessionStore = new SessionStore();
export default sessionStore;
