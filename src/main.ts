import { createApp } from 'vue'
import './style.css'
import 'hisonvue/style.css'
import App from './App.vue'
import { getDefaultHisonConfig, hisonvue, Size, type HisonConfig } from 'hisonvue'
import router from './router';
import store from './store'

const hisonConfig: HisonConfig = getDefaultHisonConfig()
hisonConfig.componentStyle.size = Size.l
createApp(App)
    .use(hisonvue, hisonConfig)
    .use(router)
    .use(store)
    .mount('#app')