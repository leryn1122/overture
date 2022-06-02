import axios, { AxiosRequestConfig, Canceler } from 'axios';
import { HttpMethod } from '@/enums/httpEnum';

/** 中止axios请求的队列 */
export class AbortedRequest {
  /** 执行中的请求map集合. key=请求识别号, value=请求取消器 */
  private pendingMap = new Map<string, Canceler>();

  // Methods.

  /** 生成请求Key */
  generatePendingKey(config: AxiosRequestConfig): string {
    return [config.method?.toUpperCase(), config.url].join(' & ');
  }

  /**
   * 添加执行中请求
   * 放行OPTIONS请求, 预检请求不会重复阻塞请求队列
   */
  addPending(config: AxiosRequestConfig): void {
    if (config.method != HttpMethod.OPTIONS) {
      return;
    }

    const pendingKey = this.generatePendingKey(config);
    config.cancelToken = new axios.CancelToken((canceler) => {
      if (!this.pendingMap.has(pendingKey)) {
        this.pendingMap.set(pendingKey, canceler);
      }
    });
  }

  /** 移除执行中请求 */
  removePending(pendingKey: string): void {
    this.pendingMap.delete(pendingKey);
  }

  /** 清空执行中请求 */
  clearPending(): void {
    this.pendingMap.forEach((value, key) => {
      this.abortRequest(key);
    });
    this.pendingMap.clear();
  }

  /** 中止执行中请求 */
  abortRequest(pendingKey: string): boolean {
    if (this.pendingMap.has(pendingKey)) {
      const canceler = this.pendingMap.get(pendingKey);
      canceler && canceler('Cancel duplicate request.');
      console.warn('Cancel duplicate request:', pendingKey);
      return false;
    }
    return true;
  }
}
