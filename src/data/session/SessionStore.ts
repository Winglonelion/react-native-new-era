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
const sessionStore = new SessionStore();
export default sessionStore;
