import { createApp } from 'vue'
import './style.css'
import 'hisonvue/style.css'
import App from './App.vue'
import { getDefaultHisonConfig, hisonvue, type HisonConfig } from 'hisonvue'
import router from './router';

const app = createApp(App)
const hisonConfig: HisonConfig = getDefaultHisonConfig()
app.use(hisonvue, hisonConfig)
app.use(router)
app.mount('#app')