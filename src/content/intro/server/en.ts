const en = {
  caption: 'HISONDEV Server Support',
  t1000:
`HisonDev provides comprehensive server-side support through hisonjv.  
hisonjv is an integrated Java/Spring library that unifies three frequently used features into one solution.`,
  t1010:
`data-model: A data transfer and management utility centered around the DataWrapper and DataModel classes.  
It simplifies frontend–backend data exchange. (Even more convenient when used together with hison-js’s dataModel.min.js)`,
  t1020:
`api-link: A solution that enables method calls in the service layer using a single cmd parameter, eliminating the need for individual controllers.  
(Supports WebSocket caching and provides customizable handlers)`,
  t1030:
`utils: A collection of common Java utilities for string processing, date/time operations, and number formatting.`,
  t1040:
`By integrating these components, hisonjv aims to simplify data communication, streamline API call flows,  
and absorb repetitive coding tasks into reusable utilities — greatly enhancing developer productivity.`,

  subhead1:
`data-model`,
  h2000:
`https://mvnrepository.com/artifact/io.github.hisondev/data-model`,
  t2000:
`A library designed to simplify data communication within Spring applications.  
It includes DataWrapper and DataModel as core components to efficiently handle data transfer and management processes.`,
  t2010:
`The data-model library is designed to simplify data communication within Spring applications.  
By using DataWrapper and DataModel, you can efficiently manage data transfer processes.  
It can also be used together with hison-js’s dataModel.min.js for smoother frontend–backend interaction.`,
  t2020:
`Customizable Conversion`,
  t2030:
`The data-model library allows developers to customize data conversion logic  
by extending the DataConverterDefault class.  
When the default conversion behavior does not fit specific business needs,  
you can define your own conversion rules.`,
  t2040:
`JSON Serialization / Deserialization (DataModelSerializer & DataModelDeserializer)`,
  t2050:
`The DataModelSerializer and DataModelDeserializer classes handle conversion  
between JSON format (used for frontend ↔ backend communication) and DataModel objects,  
ensuring structural consistency and enabling seamless bidirectional data exchange.`,
  t2060:
`In summary, the data-model library ensures data structure consistency  
and systematizes conversions (serialization, deserialization, and custom conversion),  
making it especially effective for large-scale or complex frontend–server interactions.`,
  t2070:
`The data-model library depends on the following artifacts:`,
  t2080:
`com.fasterxml.jackson.core » jackson-databind`,
  t2090:
`javax.servlet » javax.servlet-api`,

  subhead2:
`api-link`,
  h3000:
`https://mvnrepository.com/artifact/io.github.hisondev/api-link`,
  t3000:
`An innovative solution to simplify service invocation by removing Controllers in Spring projects.`,
  t3010:
`Api-Link eliminates the need for traditional controller creation in Spring-based projects  
and allows direct invocation of service-layer methods using a single ‘cmd’ parameter.  
This drastically simplifies the development workflow and significantly boosts productivity.`,
  t3020:
`The Api-Link project introduces a new approach to simplify Spring application development.  
Instead of creating a separate controller for every service,  
developers can invoke service-layer methods directly through a single 'cmd' parameter.  
This design greatly reduces complexity, improves maintainability,  
and enhances development efficiency.`,
  t3030:
`It also supports WebSocket caching based on Spring Boot’s WebSocket dependency,  
making it highly effective for real-time application performance and efficiency.  
In addition, it offers a customizable Handler structure,  
allowing developers to easily adjust WebSocket behavior to meet project-specific needs.`,
  t3040:
`Ultimately, the goal of Api-Link is to provide Spring developers with  
a simple, efficient, and flexible API communication tool.  

It can also be used in conjunction with the npm package hisonjs’s apiLink  
to strengthen frontend–server integration.`,
  t3050:
`Automatic Bean Registration`,
  t3060:
`The ApiController and WebSocketConfig classes are automatically registered as Beans  
through spring.factories.  
This means developers do not need to manually create Controller or WebSocketConfig classes.`,
  t3070:
`Conflict Prevention`,
  t3080:
`ApiController is automatically registered only if an ApiLink is not already defined in the project.  
→ If you want to define your own controller, you can inherit from ApiLink.`,
  t3090:
`Customizable API Handlers`,
  t3100:
`You can customize API request processing by extending the ApiHandlerDefault class.`,
  t3110:
`Exception Handling`,
  t3120:
`Provides centralized exception handling for consistent and unified error management.`,
  t3130:
`WebSocket Caching`,
  t3140:
`api-link supports WebSocket-based caching, enabling real-time data updates  
and efficient data management.`,
  t3150:
`application.properties Configuration`,
  t3160:
`api-link provides various configuration options through application.properties.`,
  t3170:
`The api-link library depends on the following artifacts:`,
  t3180:
`org.springframework.boot » spring-boot-starter-websocket`,
  t3190:
`io.github.hisondev » data-model`,

  subhead3:
`utils`,
  h4000:
`https://mvnrepository.com/artifact/io.github.hisondev/utils`,
  t4000:
`A lightweight utility collection for handling common tasks frequently encountered in Java projects.`,
  t4010:
`The utils library is a collection of helper functions designed  
to simplify repetitive and common tasks in Java development.  
It includes utilities for string manipulation, date/time operations, and number formatting.

Its main goal is to provide a lightweight and easy-to-use set of general-purpose utilities  
so that developers can perform everyday programming tasks faster and more cleanly.

It can also be used alongside hison-js’s hison.min.js in JavaScript environments.`,
  t4020:
`Property Configuration`,
  t4030:
`The utils library allows partial configuration customization through property files.`,
  t4040:
`The utils library includes the following features:`,
  t4050:
`String Utilities`,
  t4060:
`Date Utilities`,
  t4070:
`Number Utilities`,
  t4080:
`Others`,
  t4090:
`The utils library depends on the following artifacts:`,
  t4100:
`javax.servlet » javax.servlet-api`,

  co1000:
`go mvn`,

  t5000:
`All components are distributed under the MIT license and can be freely used.`,
} as const;

export default en;