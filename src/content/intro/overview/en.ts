const en = {
  caption: 'Hello HISONDEV',
  t1000:
`The Hison Dev project is designed to enhance developer convenience.
It consists of the following modules:
- hisonjv — for use in Java/Spring-based service layers
- hisonjs — for use on the client side with TypeScript/JavaScript
  (These two libraries are interoperable.)
- hisonvue — a Vue-based component library that includes hisonjs and provides UI components for Vue projects.`,
  
  subhead1:
`Server-side Support of Hison Dev`,
  t2000:
`The purpose and features of hisonjv, designed for Java/Spring-based service layers, are as follows:
1. Through two classes — DataWrapper (key–value based) and DataModel (table-style with columns/rows) — it enables clear and structured data exchange.
2. Simplifies data communication within Spring applications.
3. Provides a set of Java utility functions for strings, date/time, and numeric formatting.
4. Offers customizable user extension areas for each module.
By integrating these capabilities, hisonjv aims to simplify data exchange, streamline API management and invocation flows, and absorb repetitive tasks into utility functions to enhance development productivity.`,
  t2010:
`hisonjv includes the following artifacts:`,
  t2011:
`mvn repository`,
  h2011:
`https://mvnrepository.com/artifact/io.github.hisondev/hisonjv`,
  t2020:
`Data Model artifact
A data transfer and management utility built around the DataWrapper and DataModel classes that simplifies data exchange between frontend and backend (works together with hisonjs’s DataModel).`,
  h2020:
`https://mvnrepository.com/artifact/io.github.hisondev/data-model`,
  t2030:
`Api Link artifact
A solution that enables service-layer method invocation with a single “cmd” parameter—without creating individual controllers. (Supports WebSocket caching, provides customizable handlers, and works together with hisonjs’s ApiLink.)`,
  h2030:
`https://mvnrepository.com/artifact/io.github.hisondev/api-link`,
  t2040:
`Utils artifact
A collection of Java utility functions for string, date/time, and numeric formatting.`,
  h2040:
`https://mvnrepository.com/artifact/io.github.hisondev/utils`,

  subhead2:
`Client-side Support of Hison Dev (1) — hisonjs`,
  t3000:
`hisonjs is a powerful client-side library designed to work seamlessly with hisondev’s Java Spring–based backend solutions.
It provides practical utilities, enhanced security, structured data modeling, and API communication modules.  
It can be easily installed via npm i hisonjs.
Dynamic Configuration: with simple hison.setXXX() methods, you can flexibly control global behaviors at runtime.`,
  t3010:
`hisonjs offers the following features:`,
  t3011:
`npm hisonjs`,
  h3011:
`https://www.npmjs.com/package/hisonjs`,
  t3020:
`hison.shield : Security Module — Protects the app by blocking unauthorized developer tool usage, restricting URL/IP access, and enforcing immutability through hison.shield.execute().`,
  t3030:
`hison.data : Data Modeling — Enables frontend data structuring and validation using the same DataModel and DataWrapper concepts as hisonjv’s data-model on the backend.`,
  t3040:
`hison.link : API Communication — Communicates smoothly with api-link–based Spring backends, providing ApiPost, ApiGet, and built-in caching modules.`,
  t3050:
`Custom Hooks — Allows pre/post hook functions to manage API request/response lifecycles.
Also supports Real-Time WebSocket updates automatically through its caching module.`,

  subhead3:
`Client-side Support of Hison Dev (2) — hisonvue`,
  t4000:
`HisonVue is a Vue 3 UI component library built on top of hisonjs, and it includes hisonjs within it.
When used together with the server-side hisonjv, it connects frontend visual components and backend data utilities into a unified ecosystem.
In other words, HisonVue provides a comprehensive set of Vue 3 UI components with runtime APIs, global theming, and SSR (Server-Side Rendering) compatibility.
Since it extends hisonjs, it not only offers visual components but also includes data modeling, API-link communication, utility, and security (Shield) functionalities.`,
  t4010:
`The key features of hisonvue are as follows:`,
  t4011:
`npm hisonvue`,
  h4011:
`https://www.npmjs.com/package/hisonvue`,
  t4020:
`Supports 25+ diverse components`,
  t4030:
`Written in TypeScript — full IntelliSense support`,
  t4040:
`Fully compatible with Vue CLI / Vite / Nuxt 3 (SSR)`,
  t4050:
`Tree-shakable and modular imports`,
  t4060:
`CSS variables and responsive class system (hison-col-*, hison-size-*, hison-color-*)`,
  t4070:
`Runtime control of each component (via hison.component.getXxx(id))`,
  t4080:
`Extended version of hisonjs — includes utils, data, link, and shield modules`,
  t4090:
`Supports user customization via hisonConfig and dynamic customization through hison runtime control.`,
} as const;

export default en;