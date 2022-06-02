declare module '*.vue' {
  import { defineComponent } from 'vue';
  export const Component: ReturnType<typeof defineComponent>;
}
