import axios, { AxiosRequestConfig, Canceler } from 'axios';

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');

export class AbortedRequestQueue {
  private pendingRequests: Map<string, Canceler>;

  constructor() {
    this.pendingRequests = new Map<string, Canceler>();
  }

  addPending(config: AxiosRequestConfig) {
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!this.pendingRequests.has(url)) {
          // If there is no current request in pending, add it
          this.pendingRequests.set(url, cancel);
        }
      });
  }

  removeAllPending() {
    this.pendingRequests.forEach((cancel) => {
      cancel && typeof cancel === 'function' && cancel();
    });
    this.pendingRequests.clear();
  }

  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);

    if (this.pendingRequests.has(url)) {
      // If there is a current request identifier in pending,
      // the current request needs to be cancelled and removed
      const cancel = this.pendingRequests.get(url);
      cancel && cancel(url);
      this.pendingRequests.delete(url);
    }
  }

  reset(): void {
    this.pendingRequests = new Map<string, Canceler>();
  }
}
