<template>
  <div class="editor">
    <div class="text-editor-title">Create post</div>
    <QuillEditor theme="snow" :modules="modules" toolbar="full" />
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'

export default {
  components: {
    QuillEditor
  },
  setup: () => {
    const modules = {
      name: 'blotFormatter',
      module: BlotFormatter,
      options: {
        /* options */
      }
    }
    return { modules }
  }
}
</script>

<style >
.editor {
  margin-top: 80px;
}
.text-editor-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 32px;
  margin-bottom: 50px;
  margin-left: 45%;
}
.form {
  display: flex;
  flex-direction: column;
}
.input-form {
  display: flex;
  justify-content: center;
}
.ql-editor {
  min-height: 600px;
}
</style>