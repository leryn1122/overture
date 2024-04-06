import { cloneDeep } from 'lodash';

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) && src[key] !== null ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

function isObject(value: any): boolean {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function deepClone(value: any = {}) {
  return cloneDeep(value);
}
