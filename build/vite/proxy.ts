import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];
type ProxyList = ProxyItem[];
type ProxyTargetList = Record<string, ProxyOptions>;

const httpsReg = /^https:\/\//;

/**
 * 创建调试API的Proxy
 */
export function createProxy(list: ProxyList = []) {
  const result: ProxyTargetList = {};
  for (const [apiPrefix, target] of list) {
    // 判断是否HTTPS
    const isHttps = httpsReg.test(target);
    result[apiPrefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${apiPrefix}`), ''),
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return result;
}
