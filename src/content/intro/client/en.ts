const en = {
  caption: 'HISONDEV Client Support',
  t1000:
`HISONDEV’s client-side support consists of two projects: the feature-focused npm package hisonjs and the component-focused npm package hisonvue (which depends on hisonjs).`,
  t1010:
`hisonjs and hisonvue form the client solution for the Java Spring–based hisondev backend ecosystem, unifying data structures, communication, security, and UI into a single development platform.
hisonjs is a lightweight client library centered on data modeling (DataWrapper, DataModel), API communication (ApiPost, ApiGet, CachingModule), security (shield), and utilities (utils). It integrates seamlessly with the Java-based backend libraries hisonjv, api-link, and data-model to enable efficient data exchange.
On top of that, hisonvue is a Vue 3 + TypeScript UI component library that extends all capabilities of hisonjs to support enterprise-grade frontend development.
It includes a wide range of components such as HButton, HLayout, HInput, and HGrid, and it connects data-centric UI with backend services through runtime control (hison.component.getXxx), global theme management (hison.style), SSR compatibility, and a responsive class system (hison-col-*, hison-size-*, hison-color-*).
Used together, the two libraries let developers build scalable, consistent applications in a full-stack environment where data, APIs, UI, and security are tightly integrated.`,

  subhead1:
`hisonjs`,
  h2000:
`https://www.npmjs.com/package/hisonjs`,
  t2000:
`hisonjs is a powerful client-side library designed to work with HISONDEV’s Java Spring–based backend solutions. It provides practical utilities, enhanced security, structured data modeling, and API communication modules.`,
  t2010:
`hisonjs is fully compatible with hisonjv’s Java libraries (data-model, api-link) published on Maven Central.`,
  t2020:
`Core Concepts`,
  t2030:
`Closure Encapsulation: Internally wraps HisonCore in a closure to maximize security and immutability.`,
  t2040:
`Customizable Defaults: Dynamically adjust byte rules, date/time formats, hook functions, API protocol, and more.`,
  t2050:
`Serialization Compatibility with Java Side: DataWrapper/DataModel instances on the frontend (hisonjs) serialize/deserialize seamlessly with the backend (hisonjv/data-model).`,
  t2060:
`WebSocket Endpoint Management: Handles real-time data updates via a caching layer to build scalable apps.`,

  t2070:
`Key Features`,
  t2080:
`Dynamic Configuration: Flexibly control global behavior with simple hison.setXXX() methods.`,
  t2090:
`Security Module: Protects the app by blocking unauthorized use of developer tools, restricting URL/IP access, and enforcing object immutability via hison.shield.execute().`,
  t2100:
`Data Modeling: Use DataModel and DataWrapper on the frontend with the same concepts as the backend (hisonjv’s data-model) for structured data and validation.`,
  t2110:
`API Communication: Communicates smoothly with api-link–based Spring backends. Provides ApiPost, ApiGet, and a built-in CachingModule.`,
  t2120:
`Custom Hooks: Control API request/response lifecycles with before/after hook functions.`,
  t2130:
`Real-Time WebSocket Support: Automatically processes real-time updates through the caching module.`,

  subhead2:
`hisonvue`,
  h3000:
`https://www.npmjs.com/package/hisonvue`,
  t3000:
`A Vue 3 UI component library for enterprise-grade web apps`,
  t3010:
`HisonVue is a Vue 3 UI component library built on top of hisonjs,
combining visual frontend components with backend communication utilities in a unified ecosystem.

HisonVue provides a comprehensive set of Vue 3 components with runtime APIs, global theming,
and SSR (server-side rendering) compatibility.

Because it extends hisonjs, it offers not only UI components but also
data modeling, API-link communication, utilities, and security (Shield). (Depends on hisonjs)
`,
  t3020:
`Feature Summary`,
  t3030:
`Written in TypeScript → full IntelliSense support`,
  t3040:
`Fully compatible with Vue CLI / Vite / Nuxt 3 (SSR)`,
  t3050:
`Tree-shakable with modular imports`,
  t3060:
`CSS variables and responsive class system (hison-col-*, hison-size-*, hison-color-*)`,
  t3070:
`Direct runtime control of each component (hison.component.getXxx(id))`,
  t3080:
`Extended hisonjs build → includes utils, data, link, and shield`,
  t3090:
`HisonVue provides 25 components`,
  t3100:
`Layout`,
  t3110:
`HLayout, HGap, HModal, HPopup, HBanner, HAccordion`,
  t3120:
`Form`,
  t3130:
`HInput, HInputGroup, HFileset, HImagebox, HDropdown`,
  t3140:
`UI Elements`,
  t3150:
`HButton, HLabel, HList, HParagraph, HBaggie, HCaption`,
  t3160:
`Data Views`,
  t3170:
`HGrid (vanillagrid2), HTable, HNote (vanillanote2), HChart (Chart.js), HCalendar (vue-cal)`,
  t3180:
`Feedback`,
  t3190:
`HSpinner, HPagination, HDrawer`,
  t3200:
`Global Configuration (HisonConfig)

Calling getDefaultHisonConfig() returns a fully typed configuration object,
which you can freely adjust for global settings.`,
  t3210:
`UtilsConfig (hisonjs)`,
  t3220:
`Default formats for date/time/number`,
  t3230:
`ShieldConfig (hisonjs)`,
  t3240:
`Security: block devtools, IP restrictions, object freezing`,
  t3250:
`DataConfig (hisonjs)`,
  t3260:
`Control how DataModel values are copied`,
  t3270:
`LinkConfig (hisonjs)`,
  t3280:
`Default API-link settings and hooks (before/after)`,
  t3290:
`ComponentStyle`,
  t3300:
`Global themes (colors, sizes, fonts, etc.)`,
  t3310:
`Component`,
  t3320:
`External library integration (vanillanote2, vanillagrid2, Chart.js, etc.)`,
  t3330:
`Event.cssEvent`,
  t3340:
`Global CSS event hook settings`,
  t3350:
`Extended Hison Interface

HisonVue exports a singleton object, hison, which extends hisonjs.Hison.`,
  t3360:
`Existing hisonjs features:`,
  t3370:
`utils: string/date/number utilities`,
  t3380:
`data: DataWrapper, DataModel`,
  t3390:
`link: API communication with Spring backends`,
  t3400:
`shield: security (block devtools, freeze objects, URL/IP restrictions, etc.)`,
  t3410:
`Additional Vue features:`,
  t3420:
`component.getXxx(id) → runtime control of Vue components`,
  t3430:
`style.setXxx/getXxx → global theme APIs`,
  t3440:
`cssEvent.setXxx → global UI event hooks`,
  t3450:
`Default file-upload controls: setMaxFilesetSize, setMaxFilesetTotalSize`,
  t3460:
`In short, HisonVue is a full-stack bridge that fully connects the Vue frontend with the Spring backend.`,
  t3470:
`hisonvue depends on the following npm projects:`,
  t3480:
`hisonjs`,
  t3490:
`vanillagrid2`,
  t3500:
`vanillanote2`,
  t3510:
`chart.js`,
  t3520:
`vue-cal`,
  t3530:
`And the current site is built with hisonvue.`,

  co1000:
`go npm`,

  t4000:
`All components are distributed under the MIT license and can be used freely.`,
} as const;

export default en;