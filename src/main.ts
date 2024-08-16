import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueGtag, { event } from 'vue-gtag'

const app = createApp(App)

app.use(VueGtag, {
  config: {
    id: import.meta.env.VITE_GA_MEASUREMENT_ID
  }
})

app.mount('#app')
