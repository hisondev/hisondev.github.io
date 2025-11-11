import { createApp } from 'vue'
import './style.css'
import 'hisonvue/style.css'
import App from './App.vue'
import { getDefaultHisonConfig, hisonvue, type HisonConfig } from 'hisonvue'
import router from './router';
import store from './store'

const hisonConfig: HisonConfig = getDefaultHisonConfig()
console.log('hisonConfig',hisonConfig)
hisonConfig.componentStyle.custom1Color = '#F9F7F7'
hisonConfig.componentStyle.custom2Color = '#DBE2EF'
hisonConfig.componentStyle.custom3Color = '#3F72AF'
hisonConfig.componentStyle.custom4Color = '#112D4E'
hisonConfig.componentStyle.custom5Color = '#000820'
createApp(App)
    .use(hisonvue, hisonConfig)
    .use(router)
    .use(store)
    .mount('#app')