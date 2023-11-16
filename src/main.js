import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './assets/main.css'

import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(autoAnimatePlugin)


app.use(Toast)
app.mount('#app')
