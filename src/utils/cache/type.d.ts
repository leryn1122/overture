export interface Cache<V = any> {
  value?: V;
  timeout?: number;
  alive?: boolean;
}
