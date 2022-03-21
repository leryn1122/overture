<template>
  <div>
    <!-- <div id="webEditorContainer" style='width:100%;height:100%;border:1px solid grey'>123</div> -->
    <div ref="webEditorContainer" style='width:100%;height:100%;border:1px solid grey'>456</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import * as monaco from 'monaco-editor';
// import IStandaloneCodeEditor from 'monaco-editor';

export default defineComponent({
  name: 'Editor',
  emits: [],
  props: {
    config: {
      type: Object,
      required: false,
    }
  },
  setup(props, { emit, attrs }) {

    let editor: any = null;

    let webEditorContainer = ref<HTMLElement | null>(null) ;
    console.log(webEditorContainer);

    let initEditor = () => {
        editor = monaco.editor.create(
          webEditorContainer.value as HTMLElement, {
            value: "/*\n * Edit your code here ...\n */",
            language: 'sql',
            automaticLayout: true,
            theme: 'vs-dark'
        });
    };

    let getValue = () => {
        editor.getValue();
    }

    onMounted(() => {
      initEditor();
    })

    onUnmounted(() => {
      editor.dispose();
    })

    return {
      editor,
      webEditorContainer,
    }
  }

});
</script>

<style lang="less" scoped>
@import url('./index');

.web-editor-container {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-left: -5px;
  position: relative;
}

</style>
