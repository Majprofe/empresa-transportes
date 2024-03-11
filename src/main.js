import './assets/main.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'


import App from './App.vue'
import router from './router'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(Toast)
app.use(vfm)

app.mount('#app')
