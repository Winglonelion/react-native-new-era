/**
 * MOBX domain store for user's profile
 *
 * @summary mobx domain state store for user's profile
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-07-02 01:56:05
 * Last modified  : 2021-07-02 01:57:12
 */

import {
  // makeObservable,
  // observable,
  // computed,
  // action,
  // flow,
  makeAutoObservable,
} from 'mobx';
export class UserProfileStore {
  full_name: string = '';
  birthday: string = '';
  ethnicity: string = '';
  nick_name: string = '';
  marital_status: string = '';
  date_married: string = '';
  is_new_user: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get age() {
    if (!this.birthday) {
      return null;
    }
    const ageDifMs = Date.now() - new Date(this.birthday).getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  setUser(data: {
    full_name: string;
    birthday: string;
    ethnicity: string;
    nickname: string;
    marital_status: string;
    date_married: string;
    is_new_user: boolean;
  }) {
    this.full_name = data.full_name;
    this.birthday = data.birthday;
    this.ethnicity = data.ethnicity;
    this.nick_name = data.nickname;
    this.marital_status = data.marital_status;
    this.date_married = data.date_married;
    this.is_new_user = data.is_new_user;
  }

  clearUser() {
    this.full_name = '';
    this.birthday = '';
    this.ethnicity = '';
    this.nick_name = '';
    this.marital_status = '';
    this.date_married = '';
  }
}

const userProfileStore = new UserProfileStore();

export default userProfileStore;
