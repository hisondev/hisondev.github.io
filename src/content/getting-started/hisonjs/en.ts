const en = {
  caption: 'Getting Started with HISONJS',
  t1000:
`hisonjs is a powerful client-side library designed to be used together with HISONDEV's Java Spring-based backend solutions.
It provides robust utilities, enhanced security features, structured data modeling, and API communication modules.`,
  c1000:
`npm install hisonjs`,
  h1000:
`https://www.npmjs.com/package/hisonjs`,
  t1005:
`You can install hisonjs into your project via npm.`,
  t1010:
`hisonjs is fully compatible with the following Java libraries published on Maven Central:
hisonjv (data-model, api-link)`,
  t1020:
`The core features fall into four categories (hison.utils, shield, data, link).`,
  t1030:
`Dynamic Configuration: Flexibly control global behavior with simple hison.setXXX() methods.`,
  t1040:
`Security Module: Protect your app by blocking unauthorized use of developer tools, restricting URL/IP access, and enforcing immutability via hison.shield.excute().`,
  t1050:
`Data Modeling: Use DataModel and DataWrapper on the frontend with the same concepts as the backend (hisonjv’s data-model) for structured data and validation.`,
  t1060:
`API Communication: Communicate seamlessly with api-link–based Spring backends. Provides ApiPost, ApiGet, and a built-in CachingModule.`,
  t1070:
`Custom Hooks: Control the API request/response lifecycle with before/after hook functions.`,
  t1080:
`Real-Time WebSocket Support: Automatically handles real-time updates through the caching module.`,
  t1090:
`Usage Overview`,
  t1100:
`Basic Setup`,
  c1100:
`import hison from "hisonjs";

hison.setProtocol("https://");
hison.setDateFormat("yyyy-MM-dd");
hison.setExposeIpList(["192.168.1.1", "10.0.0.2"]);`,
  t1110:
`Apply Security`,
  c1110:
`hison.shield.excute(hison);`,
  t1120:
`Security applied via shield supports features such as blocking specific IPs and preventing opening of developer tools.`,
  t1130:
`Start Using Modules

· Utilities: hison.utils
· Data Management: hison.data
· API Communication: hison.link`,
  t1140:
`Utility Functions`,
  c1140:
`const isAlpha = hison.utils.isAlpha("HelloWorld");
console.log(isAlpha); // true

const dateStr = hison.utils.getDateWithFormat(new Date(), "yyyy-MM-dd");
console.log(dateStr);`,
  t1150:
`Data Modeling (compatible with hisonjv’s data-model)`,
  c1150:
`const wrapper = new hison.data.DataWrapper({ username: "Alice" });
console.log(wrapper.getString("username")); // "Alice"

const model = new hison.data.DataModel([{ id: 1, name: "Alice" }]);
console.log(model.getValue(0, "name")); // "Alice"`,
  t1160:
`API Communication (integrates with API-Link backend)`,
  c1160:
`const apiPost = new hison.link.ApiPost("UserService.createUser");
const requestData = new hison.data.DataWrapper({ username: "Alice" });

apiPost.call(requestData).then(response => {
  console.log("API Response:", response.data);
});`,
  t1170:
`Real-time Caching + WebSocket Updates`,
  c1170:
`const cachingModule = new hison.link.CachingModule(20);
const apiGet = new hison.link.ApiGet("/users", cachingModule);

apiGet.call().then(response => {
  console.log("Fetched users:", response.data);
});`,
  t1180:
`Full Initialization Example`,
  c1180:
`import hison from "hisonjs";

// Setup
hison.setProtocol("https://");
hison.setDatetimeFormat("yyyy-MM-dd HH:mm:ss");

// Enforce security
hison.shield.excute(hison);

// Use utilities
console.log(hison.utils.getSysDate());

// Build DataModel
const model = new hison.data.DataModel([{ id: 1, name: "Alice" }]);

// Send API Request
const apiPost = new hison.link.ApiPost("UserService.getUser");
apiPost.call(new hison.data.DataWrapper({ userId: 1 })).then(response => {
  console.log(response.data);
});`,
  t1190:
`Core Concepts`,
  t1200:
`Closure Encapsulation: Internally wraps HisonCore in a closure to maximize security and immutability.`,
  t1210:
`Customizable Defaults: Dynamically change byte rules, date/time formats, hook functions, API protocol, and more.`,
  t1220:
`Serialization Compatibility with the Java Side: DataWrapper/DataModel instances on the frontend (hisonjs) serialize/deserialize seamlessly with the backend (hisonjv/data-model).`,
  t1230:
`WebSocket Endpoint Management: Handles real-time data updates via a cache layer for scalable apps.`,
  t1240:
`For further details, please refer to the API documentation.`,

  co1000:
`go npm`,
} as const;

export default en;