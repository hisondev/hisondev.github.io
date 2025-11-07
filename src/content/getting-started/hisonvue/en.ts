const en = {
  caption: 'HISONVUE Getting Started',
  t1000:
`A Vue 3 UI component library designed for enterprise-grade applications.  
Built on top of hisonjs, it bridges frontend components and backend-ready data utilities into a unified ecosystem.

HisonVue provides a comprehensive set of UI components with runtime APIs, global theming, and SSR compatibility.  
Because it extends hisonjs, it gives access not only to visual components but also to data modeling, API-link communication, utilities, and security features.
- Written in TypeScript with full IntelliSense support  
- Works out of the box with Vue CLI, Vite, and Nuxt 3 (SSR)  
- Supports tree-shaking and modular imports  
- CSS variables & responsive class system (hison-col-*, hison-size-*, hison-color-*)  
- Runtime control for every component via hison.component.getXxx(id)  
- Extends hisonjs → includes utils, data models, API-link, and shield security features.`,
  h1000:
`https://www.npmjs.com/package/hisonvue`,
  t1010:
`You can install hisonvue into your project via npm.`,
  c1010:
`npm install hisonvue`,
  t1020:
`Import the global CSS once:`,
  c1020:
`import 'hisonvue/style.css'`,
  t1030:
`Global Registration (Vue 3 / Vite / Vue CLI)`,
  c1030:
`import { createApp } from 'vue'
import App from './App.vue'
import { hisonvue, getDefaultHisonConfig, Size, type HisonConfig } from 'hisonvue'
import 'hisonvue/style.css'

const app = createApp(App)

// Customize global settings
const hisonConfig: HisonConfig = getDefaultHisonConfig()
hisonConfig.componentStyle.primaryColor = '#123456'
hisonConfig.componentStyle.size = Size.s

app.use(hisonvue, hisonConfig)
app.mount('#app')`,
  t1040:
`After global registration, you can use any component immediately:`,
  c1040:
`<HButton id="b1" text="Click" class="hison-color-primary" />
<HLayout class="hison-col-12">
  <HLabel text="Hello World" />
</HLayout>`,
  t1050:
`HisonVue provides an SSR-safe wrapper (createSSRClientOnly).  
For Nuxt, register it as a plugin:`,
  c1050:
`/plugins/hisonvue.client.ts`,
  c1060:
`import { defineNuxtPlugin } from '#app'
import { hisonvue, getDefaultHisonConfig, Size, type HisonConfig } from 'hisonvue'
import 'hisonvue/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  const config: HisonConfig = getDefaultHisonConfig()
  config.componentStyle.primaryColor = '#165DFF'
  config.componentStyle.size = Size.m
  config.componentStyle.invertColor = false

  nuxtApp.vueApp.use(hisonvue, config)
})`,
  t1070:
`Even in SSR environments, components can be used globally without hydration errors.`,
  t1075:
`Add the module in your nuxt.config.ts`,
  c1075:
`export default defineNuxtConfig({
  modules: [
    'hisonvue/nuxt', // Registers hisonvue (SSR-safe)
  ],`,
  t1080:
`Runtime Control with hison.component

Each component is registered with a unique id.  
You can access its methods using that id:`,
  c1080:
`<HButton id="b1" text="Left" class="hison-color-primary" />
<HButton id="b2" text="Right" class="hison-color-warning" />`,
  c1090:
`import { hison } from 'hisonvue'

// Toggle border
const b1 = hison.component.getButton('b1')!
b1.setBorder(!b1.isBorder())

// Open modal
const modal = hison.component.getModal('modal01')
modal?.open()
modal?.setCaption('Hello Modal')`,
  t1100:
`Apply Global Themes with hison.style

You can dynamically change the theme at runtime:`,
  c1100:
`hison.style.setPrimaryColor('#009688')
hison.style.setSize(Size.l)
hison.style.setInvertColor(true)

console.log(hison.style.getPrimaryHoverColor())`,
  t1110:
`CSS Event Hooks (hison.cssEvent)

Attach global before/after hooks to Button, Input, or Textbox events.`,
  c1110:
`hison.cssEvent.setButtonOnBefoerClick((e) => {
  console.log('before click', e)
  return true // returning false cancels the click
})

hison.cssEvent.setButtonOnAfterClick((e) => {
  console.log('after click', e)
})`,
  t1120:
`Note: The word “Befoer” in the API is intentional. Use it as-is.`,

  t1130:
`HisonVue provides 25 components`,
  t1140:
`Layout`,
  t1150:
`HLayout, HGap, HModal, HPopup, HBanner, HAccordion`,
  t1160:
`Form`,
  t1170:
`HInput, HInputGroup, HFileset, HImagebox, HDropdown`,
  t1180:
`UI Elements`,
  t1190:
`HButton, HLabel, HList, HParagraph, HBaggie, HCaption`,
  t1200:
`Data Views`,
  t1210:
`HGrid (vanillagrid2), HTable, HNote (vanillanote2), HChart (Chart.js), HCalendar (vue-cal)`,
  t1220:
`Feedback`,
  t1230:
`HSpinner, HPagination, HDrawer`,
  t1240:
`Global Configuration (HisonConfig)

Calling getDefaultHisonConfig() returns a fully typed configuration object  
that you can freely modify to adjust global settings.`,
  t1250:
`UtilsConfig (from hisonjs)`,
  t1260:
`Default formats for date, time, and number`,
  t1270:
`ShieldConfig (from hisonjs)`,
  t1280:
`Security: block developer tools, restrict IPs, freeze objects`,
  t1290:
`DataConfig (from hisonjs)`,
  t1300:
`Control value-copying behavior of DataModel`,
  t1310:
`LinkConfig (from hisonjs)`,
  t1320:
`Default API-link settings and hooks (before/after)`,
  t1330:
`ComponentStyle`,
  t1340:
`Global theme (color, size, font, etc.)`,
  t1350:
`Component`,
  t1360:
`External library integration (vanillanote2, vanillagrid2, chart.js, etc.)`,
  t1370:
`Event.cssEvent`,
  t1380:
`Global CSS event hook settings`,
  t1390:
`Example of Custom Configuration`,
  c1390:
`const cfg = getDefaultHisonConfig()
cfg.componentStyle.primaryColor = '#222'
cfg.componentStyle.size = Size.s
cfg.link.timeout = 15000
cfg.shield.isPossibleOpenDevTool = false`,
  t1400:
`This website itself is built using hisonvue.`,
  t1410:
`For more detailed usage, please refer to the API documentation.`,

  co1000:
`go npm`,
} as const;

export default en;