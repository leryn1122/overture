import { HttpResult } from '@/utils/httpclient/type';
import { Recordable } from '@/vite-env';

export function onSuccess<T = Recordable>(data: T, { message = 'ok' } = {}): HttpResult<T> {
  return {
    code: 0,
    data,
    message,
  };
}

export function onError<T = Recordable>(message = 'Request failed', code = -1): HttpResult<T> {
  return {
    code,
    message,
  };
}
