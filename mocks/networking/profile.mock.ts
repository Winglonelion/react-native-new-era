import { USER_PROFILE_ENDPOINT } from 'api/api.endpoint';
import mock from './adapter';
import { withDelay } from './mock.utils';
import { FetchProfileResponse } from 'api/profile/profile.api.types';

const user_profile: FetchProfileResponse = {
  full_name: 'Tony Stark',
  birthday: '1993/09/08',
  ethnicity: 'Egypth',
  is_new_user: true,
  nickname: '',
  date_married: '2021/03/30',
  marital_status: 'married',
};

function paidProfile() {
  mock
    .onPost(USER_PROFILE_ENDPOINT)
    .reply(withDelay(300, { status: 200, data: user_profile }));
}

export default paidProfile;
