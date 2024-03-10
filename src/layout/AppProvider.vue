<script lang="ts">
import { PropType, defineComponent } from 'vue';

const props = {
  prefixCls: {
    type: String as PropType<string>,
    default: '',
  },
};

export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    props.prefixCls;
    return () => slots.default?.();
  },
});
</script>
