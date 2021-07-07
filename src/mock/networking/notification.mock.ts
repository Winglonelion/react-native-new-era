import { GET_NOTIFICATIONS_ENDPOINT } from 'api/api.endpoint';
import mock from './adapter';
import { withDelay } from './mock.utils';
import { GetNotificationsResponse } from 'api/notification/notification.api.types';
import { v4 as uuidv4 } from 'uuid';

let timeIndex = 1;
const THREE_HOURS = 1000 * 60 * 60 * 3;
// const SECONDS_30 = 1000 * 30;
const TIME_SPACE = THREE_HOURS;
const now = new Date();

function generateTimeSent() {
  const sentTime = new Date(
    now.getTime() - TIME_SPACE * timeIndex,
  ).toISOString();
  timeIndex++;
  return sentTime;
}
const STATIC_CONTENT = {
  sender: {
    id: '123',
    name: 'Enrollment',
  },
  title: 'ACTION REQUIRED: Online Benefits Enrollment Ends in 1 Day',
  message: `
    Dear Leon,

Your PRISCILLAS TEST ACCOUNT benefit enrollment period ends in 5 days.

If you have not yet submitted your benefit elections, you must do so within the next 5 days. If you have already submitted elections online, you are able to make changes within the next 5 days. If you do not wish to make changes and have already submitted, you can disregard this message.

To access the online enrollment, please follow this link to https://vns-ep.prismhr.com/." target="_blank">https://vns-ep.prismhr.com/.

If you have not previously logged in at https://vns-ep.prismhr.com/ you will need to register to obtain access to your account. To self-register, click on the Register button on the Employee Self-Service homepage to set up your account information.

We are here to help! For assistance, please email Benefits@Vensure.com or call 1-800-409-8958 to speak directly to a Benefits Team Member.

Sincerely,

Benefits Team

    `,
};
function generateResponse() {
  const result: GetNotificationsResponse = {
    data: [
      //
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: null,
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: null,
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
        read_time: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        ...STATIC_CONTENT,
        time: generateTimeSent(),
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
