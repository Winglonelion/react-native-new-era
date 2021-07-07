import { AUTH_ENDPOINT } from 'api/api.endpoint';
import mock from './adapter';
import { withDelay } from './mock.utils';

function sessionMock() {
  mock
    .onPost(AUTH_ENDPOINT)
    .reply(withDelay(800, { status: 200, data: { access_token: '123' } }));
}

export default sessionMock;
