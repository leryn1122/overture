import { resultSuccess } from '../_utils';

const MOCK_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mzk4MDg3NjIsInVzZXJuYW1lIjoiTGVyeW4ifQ.e-n1JMCBlnst8x8U6ZVk4cC-okpF-4Su64Rs5glJxd4';

const userInfo = {
  token: MOCK_TOKEN,
  username: 'Leryn',
};

export default [
  {
    url: '/login.do',
    timeout: 100,
    method: 'post',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
];
