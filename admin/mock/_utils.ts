import { Recordable } from '../global';

const MOCK_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mzk4MDg3NjIsInVzZXJuYW1lIjoiTGVyeW4ifQ.e-n1JMCBlnst8x8U6ZVk4cC-okpF-4Su64Rs5glJxd4';

export function resultSuccess<T = Recordable>(data: T, { message = 'ok' } = {}) {
  return {
    code: 200,
    data,
    message,
  };
}
