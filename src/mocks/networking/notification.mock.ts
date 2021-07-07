import { GET_NOTIFICATIONS_ENDPOINT } from 'api/api.endpoint';
import mock from './adapter';
import { withDelay } from './mock.utils';
import { GetNotificationsResponse } from 'api/notification/notification.api.types';
import { v4 as uuidv4 } from 'uuid';
function generateResponse() {
  const result: GetNotificationsResponse = {
    data: [
      //
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: null,
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: null,
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: null,
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: null,
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: null,
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: null,
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        message: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
        title: 'Enrollment',
        time: '2021-01-31',
        read_time: new Date().toISOString(),
      },
    ],
    totals: 50,
  };
  return result;
}

function notificationMock() {
  mock
    .onPost(GET_NOTIFICATIONS_ENDPOINT)
    .reply(withDelay(1200, { status: 200, data: generateResponse }));
}

export default notificationMock;
