const en = {
  caption: 'HISONJV Getting Started',
  t1000:
`Using hisonjv is very straightforward.
You can pull it from the Maven Repository.`,
  h1000:
`https://mvnrepository.com/artifact/io.github.hisondev/hisonjv`,
  t1010:
`Ex) for Maven`,
  c1010:
`<dependency>
    <groupId>io.github.hisondev</groupId>
    <artifactId>hisonjv</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t1020:
`Ex) for Gradle`,
  c1020:
`implementation("io.github.hisondev:hisonjv:x.x.x")`,
  t1030:
`You can customize utilities, overall system behavior, and each of data-model and api-link individually.`,

  subhead1:
`Utils`,
  h2000:
`https://mvnrepository.com/artifact/io.github.hisondev/utils`,
  t2000:
`If you only want to use the utils module, add the following dependency:`,
  c2000:
`<dependency>
    <groupId>io.github.hison</groupId>
    <artifactId>utils</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t2010:
`The utils library allows you to customize certain behaviors via a separate properties file.

1) Create a file named hison-utils-config.properties under your project's resources directory.
2) Define the desired properties inside hison-utils-config.properties as follows:`,
  c2010:
`# application.properties
hison.utils.format.date=dd/MM/yyyy
hison.utils.format.datetime=dd/MM/yyyy HH:mm:ss
hison.utils.type.date-add=d
hison.utils.type.date-diff=d
hison.utils.type.dayofweek=day
hison.utils.charbyte.less2047=2
hison.utils.charbyte.less65535=3
hison.utils.charbyte.greater65535=4
hison.utils.format.number=#,##0.##### 
hison.utils.propertie.file.path=./config/`,
  t2020:
`Summary of settings
hison.utils.format.date: default date format
hison.utils.format.datetime: date + time format
hison.utils.type.date-add: unit for date addition (e.g., d = day)
hison.utils.type.date-diff: unit for date difference calculation
hison.utils.type.dayofweek: weekday label style
hison.utils.charbyte.less2047, less65535, greater65535: character byte-length rules
hison.utils.format.number: number format pattern
hison.utils.propertie.file.path: external properties file path`,
  t2030:
`Usage examples`,
  t2040:
`String Utilities`,
  c2040:
`import io.github.hison.utils.Utils;

// Check if a string consists of alphabetic characters only
boolean isAlpha = Utils.isAlpha("HelloWorld");

// Check if a string consists of alphanumeric characters only
boolean isAlphaNumber = Utils.isAlphaNumber("Hello123");

// Left-pad a string to a given length using a specific character
String paddedString = Utils.getLpad("123", "0", 5);`,
  t2050:
`Date Utilities`,
  c2050:
`import io.github.hison.utils.Utils;

// Get the system's current date and time
String sysDatetime = Utils.getSysDatetime();

// Add days to a specific date
String newDate = Utils.addDate("2023-06-09", 5);

// Get the last day of a given month
int lastDay = Utils.getLastDay("2023-06");`,
  t2060:
`Number Utilities`,
  c2060:
`import io.github.hison.utils.Utils;

// Round a number to the nearest integer
double roundedNumber = Utils.getRound(123.456);

// Calculate the byte length of a string
int byteLength = Utils.getByteLength("Hello World");`,
  t2070:
`We’ve implemented utility methods for features commonly needed in server-side development with Java/Spring.`,

  subhead2:
`Data Model`,
  h3000:
`https://mvnrepository.com/artifact/io.github.hisondev/data-model`,
  t3000:
`If you only want to use the data-model module, add the following dependency:`,
  c3000:
`<dependency>
    <groupId>io.github.hison</groupId>
    <artifactId>data-model</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t3010:
`The data-model library is designed to simplify data communication within Spring applications.
It provides two core classes—DataWrapper and DataModel—to help you efficiently handle data transfer and management.

It consists of two main classes:

· DataWrapper — a simple key–value data wrapper
· DataModel — a structured, table-like data model (column/row based)

By leveraging these two classes, you can keep data exchange between backend components,
or between frontend and backend, much more concise.

In addition, when used together with the hison-js file dataModel.min.js,
frontend–server data exchange becomes even easier to implement.

Requirements:

· Java Development Kit (JDK) 8 or higher
· Apache Maven (for project builds)
`,
  t3020:
`Usage
Basic utilities for DataWrapper and DataModel`,
  c3020:
`import io.github.hisondev.datamodel.DataWrapper;
import io.github.hisondev.datamodel.DataModel;

// Example usage of DataWrapper
DataWrapper wrapper = new DataWrapper();
wrapper.add("key1", "value1");

// Example usage of DataModel
DataModel model = new DataModel();
model.setColumns(Arrays.asList("column1", "column2"));
model.addRow(Arrays.asList("value1", "value2"));`,
  t3030:
`Use DataWrapper for simple key–value style data.
Use DataModel to represent multi-dimensional data in a column/row table structure.`,
  t3040:
`Customizing Data Conversion`,
  t3050:
`Beyond the default conversion logic, you can customize data conversion
by extending the DataConverterDefault class.
This is useful when the default behavior doesn’t meet special application requirements
(e.g., formatting rules or business logic).

Example: implement and register a custom data converter`,
  t3060:
`1. Implement a custom converter class`,
  c3060:
`import io.github.hisondev.datamodel.converter.DataConverterDefault;
import io.github.hisondev.datamodel.converter.DataConverterFactory;

public class CustomDataConverter extends DataConverterDefault {
    public static void register() {
        DataConverterFactory.setCustomConverter(new CustomDataConverter());
    }

    // Override conversion logic
    @Override
    public Object convert(Object data) {
        // Custom conversion logic
        return super.convert(data);
    }
}`,
  t3070:
`2. Register it at Spring application startup`,
  c3070:
`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        CustomDataConverter.register();
        SpringApplication.run(DemoApplication.class, args);
    }
}`,
  t3080:
`With this setup, you can consistently override data conversion across the entire application.
For example, you can automatically convert specific formats during JSON → Java object mapping.`,
  t3090:
`Serialization / Deserialization (DataModelSerializer & DataModelDeserializer)`,
  t3100:
`DataModelSerializer and DataModelDeserializer handle conversions
between JSON (for frontend ↔ backend communication) and DataModel objects.
This keeps structures consistent while enabling easy bidirectional communication.`,
  t3110:
`Serialization example`,
  c3110:
`import io.github.hisondev.datamodel.DataModel;
import io.github.hisondev.datamodel.model.DataModelSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;

// Create a DataModel instance
DataModel model = new DataModel();
model.setColumns(Arrays.asList("column1", "column2"));
model.addRow(Arrays.asList("value1", "value2"));

// DataModel → JSON string
ObjectMapper mapper = new ObjectMapper();
String jsonString = mapper.writeValueAsString(model);
System.out.println("Serialized JSON: " + jsonString);`,
  t3120:
`Example output`,
  c3120:
`{"columns":["column1","column2"],"rows":[["value1","value2"]]}`,
  t3130:
`Deserialization example`,
  c3130:
`import io.github.hisondev.datamodel.DataModel;
import io.github.hisondev.datamodel.model.DataModelDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;

// JSON string from frontend
String jsonString = "{\"columns\":[\"column1\",\"column2\"],\"rows\":[[\"value1\",\"value2\"]]}";

// JSON → DataModel
ObjectMapper mapper = new ObjectMapper();
DataModel model = mapper.readValue(jsonString, DataModel.class);
System.out.println("Deserialized DataModel: " + model);`,
  t3140:
`This process preserves a **consistent structure (columns + rows)** during data exchange
between backend and frontend, making it easy to serialize/deserialize even complex data.`,
  t3150:
`Usage Summary`,
  t3160:
`DataWrapper → key–value packaging and transfer`,
  t3170:
`DataModel → table-structured data (columns/rows)`,
  t3180:
`DataConverterDefault → customize conversion logic`,
  t3190:
`Serializer/Deserializer → automated JSON ↔ DataModel conversion`,
  t3200:
`Using this library, you can implement complex data interactions
for modern web applications with ease.`,

  subhead3:
`Api Link`,
  h4000:
`https://mvnrepository.com/artifact/io.github.hisondev/api-link`,
  t4000:
`If you only want to use api-link, add the following dependency:`,
  c4000:
`<dependency>
    <groupId>io.github.hison</groupId>
    <artifactId>api-link</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t4010:
`API-Link is an innovative solution that maximizes development efficiency
by removing the need to create individual controllers in Spring projects.
By invoking service-layer methods with a single 'cmd' value,
it simplifies complex controller structures and significantly boosts productivity.`,
  t4020:
`ApiLink is designed to streamline development procedures in Spring-based projects.
Instead of creating a dedicated controller class for every service,
you can call a specific service-layer method with just one 'cmd' parameter.

Benefits include:

· Eliminates controller duplication  
· Simplifies API call structure  
· Improves productivity and maintainability

It also has built-in caching based on Spring Boot WebSocket, enabling efficient operation
in applications that require real-time data processing.
Moreover, developers can customize WebSocket behavior and API handling
via custom handlers.

In short, ApiLink aims to provide a “simple, efficient, and flexible Spring development environment.”
Note: For frontend integration, you can use hison-js’s apiLink.min.js.

Requirements:

· Java Development Kit (JDK) 8 or higher  
· Apache Maven (for project builds)`,
  t4030:
`Basic Setup

api-link automatically simplifies the controller layer in Spring applications.

Automatic Bean Registration
The following classes are auto-registered as Beans via spring.factories:`,
  c4030:
`# spring.factories (handled internally)
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
  io.github.hison.api.caching.WebSocketConfig,\
  io.github.hison.api.controller.ApiController`,
  t4040:
`This means you don’t need to manually create a Controller or WebSocket configuration class.`,
  t4050:
`Conflict Prevention

ApiController is auto-registered only when ApiLink has not already been defined in the project.
→ If needed, you can extend it yourself for customization.

WebSocketConfig is also registered only when no WebSocketConfigurer is present.`,
  c4050:
`import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import io.github.hison.api.controller.ApiLink;

@RestController
@RequestMapping("hison-api-link")
@CrossOrigin("http://localhost:3000/")
public class ApiLinkController extends ApiLink {}
`,
  t4060:
`Custom WebSocket example`,
  c4060:
`import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import io.github.hison.api.caching.CachingWebSocket;

@Configuration
@EnableWebSocket
public class ApiLinkWebSocket implements CachingWebSocket {}`,
  t4070:
`Making API Calls

To invoke a service-layer method,
include the 'cmd' parameter in the HTTP request body.
('cmd' format: "ServiceName.methodName")

Example service class:`,
  c4080:
`package com.example.demo.biz.member.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.common.data.wrapper.DataWrapper;

@Service
public class MemberService {
    public DataWrapper getMember(@RequestBody DataWrapper dw) {
        // Business logic
        return dw;
    }
}`,
  t4090:
`API call example (curl):`,
  c4090:
`curl -X POST http://localhost:8080/api \
  -H "Content-Type: application/json" \
  -d '{"cmd": "myService.myMethod", "data": {...}}'`,
  t4100:
`Customizing the API Handler

You can change API handling by extending ApiHandlerDefault.`,
  c4100:
`import io.github.hison.api.handler.ApiHandlerDefault;
import io.github.hison.api.handler.ApiHandlerFactory;

public class CustomApiHandler extends ApiHandlerDefault {
    public static void register() {
        ApiHandlerFactory.setCustomHandler(new CustomApiHandler());
    }

    @Override
    public DataWrapper handle(DataModel dataModel, HttpServletRequest request) {
        // Custom handling logic
        return super.handle(dataModel, request);
    }
}`,
  t4110:
`Registering the custom handler`,
  c4110:
`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.demo.config.CustomApiHandler;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        CustomApiHandler.register();
        SpringApplication.run(DemoApplication.class, args);
    }
}`,
  t4120:
`Exception Handling

Use ServiceRuntimeException
to perform consistent, global exception handling across the API.

Example: throwing an exception`,
  c4120:
`import io.github.hison.api.exception.ServiceRuntimeException;

public void myMethod(DataWrapper data) {
    if (data == null) {
        throw new ServiceRuntimeException("Data cannot be null");
    }
    // Business logic
}`,
  t4130:
`ServiceRuntimeException is handled automatically by the ApiLink controller
and returns an appropriate HTTP response (JSON).`,
  t4140:
`Caching with WebSocket

api-link supports caching and real-time data updates via WebSocket.
This is especially useful for **real-time applications (e.g., dashboards and monitoring systems)** 
that must immediately reflect changes across multiple sessions.

Implementing a custom WebSocket caching handler`,
  c4140:
`import io.github.hison.api.cachinghandler.CachingHandlerDefault;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

public class CustomCachingHandler implements CachingHandlerDefault {
    @Override
    public void notifyAllSessions(CopyOnWriteArrayList<WebSocketSession> sessions, String message) {
        for (WebSocketSession session : sessions) {
            try {
                if (session.isOpen()) {
                    if (message == null) message = "";
                    session.sendMessage(new TextMessage(message));
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}`,
  t4150:
`Registering the custom handler`,
  c4150:
`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.demo.config.CustomCachingHandler;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        CustomCachingHandler.register();
        SpringApplication.run(DemoApplication.class, args);
    }
}
`,
  t4160:
`application.properties Configuration

api-link lets you customize key behaviors easily via application.properties.`,
  c4160:
`# API path
hison.link.api.path=/hison-api-link  # default: /hison-api-link

# CORS
hison.link.api.cors.origins=*                # default: allow all origins
hison.link.api.cors.allow-credentials=false  # default: do not allow credentials
hison.link.api.cors.methods                  # default: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS

# Status message
hison.link.api.status.message=Hison API is ready and running.

# WebSocket endpoint
hison.link.websocket.endpoint=/hison-websocket-endpoint  # default endpoint`,
  t4170:
`Property descriptions`,
  t4180:
`hison.link.api.path`,
  t4190:
`Base path for the API controller`,
  t4200:
`hison.link.api.cors.origins`,
  t4210:
`Allowed CORS origins (comma-separated for multiple)`,
  t4220:
`hison.link.api.cors.allow-credentials`,
  t4230:
`Whether to allow credentials (cookies/Authorization, etc.) on CORS requests`,
  t4240:
`hison.link.api.cors.methods`,
  t4250:
`List of allowed HTTP methods`,
  t4260:
`hison.link.api.status.message`,
  t4270:
`Message returned from the /status endpoint`,
  t4280:
`hison.link.websocket.endpoint`,
  t4290:
`Endpoint for real-time updates via WebSocket`,
  t4300:
`Summary`,
  t4310:
`Goal`,
  t4320:
`Remove controller creation; single-cmd–based API invocation`,
  t4330:
`Key Features`,
  t4340:
`ApiHandler, ServiceRuntimeException, WebSocket caching`,
  t4350:
`Benefits`,
  t4360:
`Less code, higher productivity, real-time data handling`,
  t4370:
`Frontend Integration`,
  t4380:
`Fully compatible with hison-js’s apiLink.min.js`,
  t4390:
`Requirements`,
  t4400:
`JDK 8+, Maven project`,
  t4410:
`Version`,
  t4420:
`1.0.7 (published on Maven Central)`,

  co1000:
`go mvn`,
  co1100:
`For more details, refer to the API documentation.`,
} as const;

export default en;