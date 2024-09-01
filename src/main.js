import './assets/main.css'
import "vue-awesome-paginate/dist/style.css";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAwesomePaginate from "vue-awesome-paginate";
import { QuillEditor } from '@vueup/vue-quill'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.use('QuillEditor', QuillEditor)

app.mount('#app')