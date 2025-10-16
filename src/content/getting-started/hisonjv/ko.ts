const ko = {
  caption: 'HISONJV 시작하기',
  t1000:
`hisonjv를 사용하는 방법은 매우 쉽습니다.
mvn repository를 활용할 수 있습니다.`,
  h1000:
`https://mvnrepository.com/artifact/io.github.hisondev/hisonjv`,
  t1010:
`Ex) for maven`,
  c1010:
`<dependency>
    <groupId>io.github.hisondev</groupId>
    <artifactId>hisonjv</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t1020:
`Ex) for gradle`,
  c1020:
`implementation("io.github.hisondev:hisonjv:x.x.x")`,
  t1030:
`그리고 각 utils와 전반적인 시스템, data-model, api-link 별 사용자 커스텀을 진행 할 수 있습니다.`,

  subhead1:
`Utils`,
  h2000:
`https://mvnrepository.com/artifact/io.github.hisondev/utils`,
  t2000:
`utils만 사용하고 싶다면 아래 dependency를 이용할 수 있습니다.`,
  c2000:
`<dependency>
    <groupId>io.github.hison</groupId>
    <artifactId>utils</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t2010:
`utils 라이브러리는 별도의 프로퍼티 파일(properties file) 을 통해 일부 동작 방식을 사용자 정의할 수 있습니다.

1) 프로젝트의 resources 디렉터리에 hison-utils-config.properties 파일을 생성합니다.
2) hison-utils-config.properties 파일 안에 원하는 속성을 다음과 같이 정의할 수 있습니다.`,
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
`설명 요약
hison.utils.format.date: 기본 날짜 포맷
hison.utils.format.datetime: 날짜+시간 포맷
hison.utils.type.date-add: 날짜 덧셈 단위 (예: d = 일)
hison.utils.type.date-diff: 날짜 차이 계산 단위
hison.utils.type.dayofweek: 요일 표시 방식
hison.utils.charbyte.less2047, less65535, greater65535: 문자 바이트 계산 규칙
hison.utils.format.number: 숫자 포맷 문자열
hison.utils.propertie.file.path: 외부 설정 파일 경로`,
  t2030:
`그리고 아래와 같이 사용할 수 있습니다.`,
  t2040:
`문자열 유틸리티 (String Utilities)`,
  c2040:
`import io.github.hison.utils.Utils;

// 문자열이 알파벳으로만 구성되어 있는지 확인
boolean isAlpha = Utils.isAlpha("HelloWorld");

// 문자열이 알파벳 + 숫자로만 구성되어 있는지 확인
boolean isAlphaNumber = Utils.isAlphaNumber("Hello123");

// 지정한 문자로 왼쪽을 채워 길이를 맞추기
String paddedString = Utils.getLpad("123", "0", 5);`,
  t2050:
`날짜 유틸리티 (Date Utilities)`,
  c2050:
`import io.github.hison.utils.Utils;

// 시스템의 현재 날짜 및 시간 가져오기
String sysDatetime = Utils.getSysDatetime();

// 특정 날짜에 일수를 더하기
String newDate = Utils.addDate("2023-06-09", 5);

// 해당 월의 마지막 일자 구하기
int lastDay = Utils.getLastDay("2023-06");`,
  t2060:
`숫자 유틸리티 (Number Utilities)`,
  c2060:
`import io.github.hison.utils.Utils;

// 숫자를 가장 가까운 정수로 반올림
double roundedNumber = Utils.getRound(123.456);

// 문자열의 바이트 길이 계산
int byteLength = Utils.getByteLength("Hello World");`,
  t2070:
`일반적으로 Java/Spring을 통한 Server단 개발 시 필요할 것으로 예상되는 util성 기능의 메소드를 생성해 두었습니다.`,

  subhead2:
`Data Model`,
  h3000:
`https://mvnrepository.com/artifact/io.github.hisondev/data-model`,
  t3000:
`data model만 사용하고 싶다면 아래 dependency를 이용할 수 있습니다.`,
  c3000:
`<dependency>
    <groupId>io.github.hison</groupId>
    <artifactId>data-model</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t3010:
`data-model은 Spring 애플리케이션의 데이터 통신을 단순화하기 위해 설계된 라이브러리입니다.
핵심적으로 DataWrapper와 DataModel 클래스를 제공하여, 데이터의 전송(transfer) 및 관리(management) 과정을 효율적으로 처리할 수 있도록 돕습니다.

다음 두 가지 주요 클래스를 포함합니다:

· DataWrapper — Key-Value 형태의 단순 데이터 래퍼
· DataModel — 테이블 형태의 구조화된 데이터 모델 (컬럼/로우 기반)

이 두 클래스를 활용하면 백엔드 로직 간의 데이터 전달,
또는 프런트엔드와의 교신 구조를 훨씬 더 간결하게 유지할 수 있습니다.

또한, hison-js의 dataModel.min.js 파일과 함께 사용하면
프런트엔드와 서버 간 데이터 통신을 더욱 편리하게 구현할 수 있습니다.

이 라이브러리를 사용하려면 다음 환경이 필요합니다:

· Java Development Kit (JDK) 8 이상
· Apache Maven (프로젝트 빌드용)
`,
  t3020:
`사용하기
DataWrapper 및 DataModel 기본 유틸리티`,
  c3020:
`import io.github.hisondev.datamodel.DataWrapper;
import io.github.hisondev.datamodel.DataModel;

// DataWrapper 사용 예시
DataWrapper wrapper = new DataWrapper();
wrapper.add("key1", "value1");

// DataModel 사용 예시
DataModel model = new DataModel();
model.setColumns(Arrays.asList("column1", "column2"));
model.addRow(Arrays.asList("value1", "value2"));`,
  t3030:
`DataWrapper는 단순한 key-value 구조 데이터를 다루는 데 유용하고,
DataModel은 컬럼과 로우 기반으로 다차원 데이터를 표현할 때 적합합니다.`,
  t3040:
`데이터 변환 로직 커스터마이징 (Customizing Data Conversion)`,
  t3050:
`data-model 라이브러리는 기본 변환 로직 외에도, DataConverterDefault 클래스를 상속하여 데이터 변환 방식을 직접 정의할 수 있습니다.
기본 변환이 애플리케이션의 특수 요구사항(예: 포맷 규칙, 비즈니스 로직 등)을 충족하지 않을 때 유용합니다.

예시: 커스텀 데이터 컨버터 작성 및 등록`,
  t3060:
`1. 커스텀 컨버터 클래스 작성`,
  c3060:
`import io.github.hisondev.datamodel.converter.DataConverterDefault;
import io.github.hisondev.datamodel.converter.DataConverterFactory;

public class CustomDataConverter extends DataConverterDefault {
    public static void register() {
        DataConverterFactory.setCustomConverter(new CustomDataConverter());
    }

    // 변환 로직 오버라이드
    @Override
    public Object convert(Object data) {
        // 커스텀 변환 로직 작성
        return super.convert(data);
    }
}`,
  t3070:
`2. Spring 애플리케이션 시작 시 등록`,
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
`이렇게 설정하면 전체 애플리케이션에서 데이터 변환 로직을 일관되게 재정의할 수 있습니다.
예를 들어, JSON → Java 객체 변환 시 특정 포맷을 자동 변환하도록 지정할 수도 있습니다.`,
  t3090:
`직렬화 / 역직렬화 (DataModelSerializer & DataModelDeserializer)`,
  t3100:
`DataModelSerializer와 DataModelDeserializer는 프런트엔드 ↔ 백엔드 간 JSON 포맷과 DataModel 객체 간의 변환을 담당합니다.
이를 통해 데이터 구조의 일관성을 유지하면서 양방향 통신을 손쉽게 처리할 수 있습니다.`,
  t3110:
`직렬화 예시 (Serialization)`,
  c3110:
`import io.github.hisondev.datamodel.DataModel;
import io.github.hisondev.datamodel.model.DataModelSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;

// DataModel 인스턴스 생성
DataModel model = new DataModel();
model.setColumns(Arrays.asList("column1", "column2"));
model.addRow(Arrays.asList("value1", "value2"));

// DataModel → JSON 문자열로 직렬화
ObjectMapper mapper = new ObjectMapper();
String jsonString = mapper.writeValueAsString(model);
System.out.println("Serialized JSON: " + jsonString);`,
  t3120:
`출력 예시`,
  c3120:
`{"columns":["column1","column2"],"rows":[["value1","value2"]]}`,
  t3130:
`역직렬화 예시 (Deserialization)`,
  c3130:
`import io.github.hisondev.datamodel.DataModel;
import io.github.hisondev.datamodel.model.DataModelDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;

// 프런트엔드에서 전달된 JSON 문자열
String jsonString = "{\"columns\":[\"column1\",\"column2\"],\"rows\":[[\"value1\",\"value2\"]]}";

// JSON → DataModel 객체로 변환
ObjectMapper mapper = new ObjectMapper();
DataModel model = mapper.readValue(jsonString, DataModel.class);
System.out.println("Deserialized DataModel: " + model);`,
  t3140:
`이 과정을 통해 백엔드와 프런트엔드 간의 데이터 교환 시 **일관된 구조(컬럼 + 로우)**를 유지하며, 복잡한 데이터도 쉽게 직렬화/역직렬화할 수 있습니다.`,
  t3150:
`활용 요약`,
  t3160:
`DataWrapper → Key-Value 기반 데이터 포장 및 전송`,
  t3170:
`DataModel → 테이블 구조 데이터 표현 (컬럼/로우 기반)`,
  t3180:
`DataConverterDefault → 변환 로직 커스터마이징`,
  t3190:
`Serializer/Deserializer → JSON ↔ DataModel 자동 변환`,
  t3200:
`이 라이브러리를 사용하면 현대적인 웹 애플리케이션에서 복잡한 데이터 상호작용을 손쉽게 구현할 수 있습니다.`,

  subhead3:
`Api Link`,
  h4000:
`https://mvnrepository.com/artifact/io.github.hisondev/api-link`,
  t4000:
`api link만 사용하고 싶다면 아래 dependency를 이용할 수 있습니다.`,
  c4000:
`<dependency>
    <groupId>io.github.hison</groupId>
    <artifactId>api-link</artifactId>
    <version>x.x.x</version>
</dependency>`,
  t4010:
`API-Link는 Spring 프로젝트에서 컨트롤러를 개별적으로 작성할 필요를 제거하여 개발 효율성을 극대화하는 혁신적인 솔루션입니다.
단일 'cmd' 값을 사용해 Service 계층의 메서드를 직접 호출함으로써 복잡한 컨트롤러 구조를 단순화하고, 개발 생산성을 크게 향상시킵니다.`,
  t4020:
`ApiLink는 Spring 기반 프로젝트의 개발 절차를 간소화하기 위해 설계된 라이브러리입니다.
기존에는 각 서비스마다 별도의 컨트롤러 클래스를 만들어야 했지만, ApiLink를 사용하면 단 하나의 'cmd' 파라미터만으로 특정 Service 계층의 메서드를 호출할 수 있습니다.

이 방식은 다음과 같은 장점을 제공합니다:

· 컨트롤러 중복 제거
· API 호출 구조 단순화
· 생산성 및 유지보수성 향상

또한, Spring Boot WebSocket 기반의 캐싱 기능을 내장하고 있어, 실시간 데이터 처리가 필요한 애플리케이션에서도 효율적으로 동작합니다.
뿐만 아니라, 개발자는 사용자 정의 핸들러(Custom Handler) 를 통해 WebSocket 동작이나 API 처리 로직을 자유롭게 커스터마이징할 수 있습니다.

즉, ApiLink의 목표는 “간단하고 효율적이며 유연한 Spring 개발 환경”을 제공하는 것입니다.
참고: 프런트엔드와의 연동에는 hison-js의 apiLink.min.js를 함께 사용할 수 있습니다.

이 라이브러리를 사용하기 위해서는 다음 환경이 필요합니다:

· Java Development Kit (JDK) 8 이상
· Apache Maven (프로젝트 빌드용)`,
  t4030:
`기본 설정 (Basic Setup)

api-link는 Spring 애플리케이션의 컨트롤러 계층을 자동으로 단순화합니다.

자동 빈 등록 (Automatic Bean Registration)
spring.factories를 통해 다음 클래스들이 자동으로 Bean으로 등록됩니다:`,
  c4030:
`# spring.factories (내부적으로 처리됨)
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
  io.github.hison.api.caching.WebSocketConfig,\
  io.github.hison.api.controller.ApiController`,
  t4040:
`즉, 별도의 컨트롤러나 WebSocket 설정 클래스를 직접 생성할 필요가 없습니다.`,
  t4050:
`충돌 방지 (Conflict Prevention)

ApiController는 프로젝트 내에 ApiLink가 직접 정의되어 있지 않을 때만 자동 등록됩니다.
→ 필요 시 직접 상속하여 커스터마이징 가능

WebSocketConfig 역시 WebSocketConfigurer가 없을 경우에만 등록됩니다.`,
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
`커스텀 WebSocket 예시`,
  c4060:
`import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import io.github.hison.api.caching.CachingWebSocket;

@Configuration
@EnableWebSocket
public class ApiLinkWebSocket implements CachingWebSocket {}`,
  t4070:
`API 호출 (Making API Calls)

서비스 계층의 메서드를 호출하려면,
HTTP 요청 본문에 'cmd' 파라미터를 포함해 호출합니다.
('cmd' 형식: "서비스명.메서드명")

예시 서비스 클래스:`,
  c4080:
`package com.example.demo.biz.member.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.common.data.wrapper.DataWrapper;

@Service
public class MemberService {
    public DataWrapper getMember(@RequestBody DataWrapper dw) {
        // 비즈니스 로직 처리
        return dw;
    }
}`,
  t4090:
`API 호출 예시 (curl):`,
  c4090:
`curl -X POST http://localhost:8080/api \
  -H "Content-Type: application/json" \
  -d '{"cmd": "myService.myMethod", "data": {...}}'`,
  t4100:
`API 핸들러 커스터마이징 (Customizing API Handler)

ApiHandlerDefault를 상속해 API 처리 로직을 변경할 수 있습니다.`,
  c4100:
`import io.github.hison.api.handler.ApiHandlerDefault;
import io.github.hison.api.handler.ApiHandlerFactory;

public class CustomApiHandler extends ApiHandlerDefault {
    public static void register() {
        ApiHandlerFactory.setCustomHandler(new CustomApiHandler());
    }

    @Override
    public DataWrapper handle(DataModel dataModel, HttpServletRequest request) {
        // 사용자 정의 처리 로직
        return super.handle(dataModel, request);
    }
}`,
  t4110:
`커스텀 핸들러 등록`,
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
`예외 처리 (Exception Handling)

ServiceRuntimeException을 사용하면
API 전역에서 일관된 예외 처리를 수행할 수 있습니다.

예외 발생 예시`,
  c4120:
`import io.github.hison.api.exception.ServiceRuntimeException;

public void myMethod(DataWrapper data) {
    if (data == null) {
        throw new ServiceRuntimeException("Data cannot be null");
    }
    // 비즈니스 로직
}`,
  t4130:
`ServiceRuntimeException은 ApiLink 컨트롤러가 자동으로 처리하며, 적절한 HTTP 응답(JSON)을 반환합니다.`,
  t4140:
`WebSocket 기반 캐싱 (Caching with WebSocket)

api-link는 WebSocket을 통한 캐싱 및 실시간 데이터 업데이트를 지원합니다.
이 기능은 여러 세션 간 데이터 변경 사항을 즉시 반영해야 하는
**실시간 애플리케이션(예: 대시보드, 모니터링 시스템)**에 매우 유용합니다.

커스텀 WebSocket 캐싱 핸들러 작성`,
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
`커스텀 핸들러 등록`,
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
`설정 파일 (application.properties Configuration)

api-link는 application.properties를 통해 주요 동작을 손쉽게 커스터마이징할 수 있습니다.`,
  c4160:
`# API 경로 설정
hison.link.api.path=/hison-api-link  # 기본값: /hison-api-link

# CORS 설정
hison.link.api.cors.origins=*                # 기본: 모든 오리진 허용
hison.link.api.cors.allow-credentials=false  # 기본: 인증정보 허용 안 함
hison.link.api.cors.methods                  # 기본: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS

# 상태 메시지
hison.link.api.status.message=Hison API is ready and running.

# WebSocket 엔드포인트 설정
hison.link.websocket.endpoint=/hison-websocket-endpoint  # 기본 엔드포인트`,
  t4170:
`속성 설명`,
  t4180:
`hison.link.api.path`,
  t4190:
`API 컨트롤러의 기본 경로 설정`,
  t4200:
`hison.link.api.cors.origins`,
  t4210:
`허용할 CORS Origin 설정 (여러 개는 콤마로 구분)`,
  t4220:
`hison.link.api.cors.allow-credentials`,
  t4230:
`CORS 요청 시 인증정보(쿠키/Authorization 등) 허용 여부`,
  t4240:
`hison.link.api.cors.methods`,
  t4250:
`허용할 HTTP 메서드 목록`,
  t4260:
`hison.link.api.status.message`,
  t4270:
`/status 엔드포인트에서 반환되는 메시지`,
  t4280:
`hison.link.websocket.endpoint`,
  t4290:
`WebSocket 실시간 데이터 갱신용 엔드포인트`,
  t4300:
`요약`,
  t4310:
`목적`,
  t4320:
`컨트롤러 생성 제거, 단일 cmd 기반 API 호출`,
  t4330:
`핵심 기능`,
  t4340:
`ApiHandler, ServiceRuntimeException, WebSocket 캐싱`,
  t4350:
`장점`,
  t4360:
`코드량 감소, 생산성 향상, 실시간 데이터 처리요약`,
  t4370:
`프런트 연동`,
  t4380:
`hison-js의 apiLink.min.js와 완벽 호환`,
  t4390:
`필요 환경`,
  t4400:
`JDK 8+, Maven 프로젝트`,

  co1000:
`go mvn`,
  co1100:
`그외 자세한 사용은 API 문서를 참고하십시오.`,
} as const;

export default ko;