import { defineComponent, defineAsyncComponent } from 'vue';
import { Spin } from 'ant-design-vue';
import { nothing } from '@/utils/lang/object';
import type { Func } from 'types/global';

interface Options {
  size?: 'default' | 'small' | 'large';
  delay?: number;
  timeout?: number;
  loading?: boolean;
  retry?: boolean;
}

export function createAsyncComponent(
  loader: Func,
  options: Options = {}
) {
  const { size = 'small', delay = 100, timeout = 30000, loading = false, retry = true } = options;
  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,
    timeout: timeout,
    delay: delay,
    onError: !retry ? nothing : nothing
  });
}