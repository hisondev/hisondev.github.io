const ko = {
  caption: 'HISONDEV Server 지원',
  t1000:
`Java/Spring 기반의 서버단을 hisonjv를 통해 지원합니디. hisonjv는 Java/Spring 기반 프로젝트에서 자주 쓰이는 세 가지 기능을 하나로 묶은 종합 라이브러리입니다.`,
  t1010:
`data-model: DataWrapper / DataModel 클래스를 중심으로, 프런트엔드–백엔드 간 데이터 교환을 간결하게 만드는 데이터 전송/관리 유틸리티. (hison-js의 dataModel.min.js와 함께 쓰면 더 편리)`,
  t1020:
`api-link: 컨트롤러를 개별적으로 만들지 않고, 단일 cmd 값으로 서비스 계층 메서드를 호출할 수 있게 하는 솔루션. (WebSocket 캐싱 지원, 커스터마이징 가능한 핸들러 제공)`,
  t1030:
`utils: 문자열, 날짜/시간, 숫자 포맷 등 통상적인 Java 유틸성 기능 모음`,
  t1040:
`이들을 통합해 데이터 통신을 단순화하고, API 관리(호출) 흐름을 간소화하며, 반복 업무를 유틸로 흡수하여 개발 생산성을 끌어올리는 것이 목적입니다.`,

  subhead1:
`data-model`,
  h2000:
`https://mvnrepository.com/artifact/io.github.hisondev/data-model`,
  t2000:
`Spring 애플리케이션에서 데이터 통신을 단순화하기 위한 라이브러리.
주요 구성 요소로 DataWrapper 와 DataModel 클래스를 포함하여, 데이터 전송과 관리 과정을 효율적으로 처리할 수 있도록 설계되었습니다.`,
  t2010:
`data-model 라이브러리는 Spring 애플리케이션 내에서 데이터 통신을 단순화하기 위해 설계되었습니다.
DataWrapper 와 DataModel 클래스를 통해 데이터 전송과 관리 과정을 효율적으로 처리할 수 있습니다.
또한, 프론트엔드와 서버 간의 보다 향상된 데이터 교환을 위해 hison-js의 dataModel.min.js 와 함께 사용할 수도 있습니다.`,
  t2020:
`사용자 커스텀 지원`,
  t2030:
`data-model 라이브러리는 DataConverterDefault 클래스를 상속하여 데이터 변환 로직을 커스터마이징할 수 있습니다.
기본 변환 로직이 특정 비즈니스 요구사항에 맞지 않는 경우, 직접 변환 규칙을 정의할 수 있습니다.`,
  t2040:
`JSON 직렬화 / 역직렬화 (DataModelSerializer & DataModelDeserializer)`,
  t2050:
`DataModelSerializer 와 DataModelDeserializer 클래스는
JSON 형식(프론트엔드 ↔ 백엔드 통신용)과 DataModel 객체 간의 변환을 담당합니다.
즉, 데이터 구조를 일관성 있게 유지하면서 양방향 통신이 가능하도록 합니다.`,
  t2060:
`요약하자면, data-model은 데이터 구조의 일관성을 보장하고, **변환(직렬화/역직렬화/커스텀 컨버전)**을 체계화해 대규모/복잡한 화면-서버 상호작용에서 특히 효과적입니다.`,
  t2070:
`data-model은 아래 artifact에 의존합니다.`,
  t2080:
`com.fasterxml.jackson.core » jackson-databind`,
  t2090:
`javax.servlet » javax.servlet-api`,

  subhead2:
`api-link`,
  h3000:
`https://mvnrepository.com/artifact/io.github.hisondev/api-link`,
  t3000:
`Spring 프로젝트에서 Controller를 제거하고 서비스 호출을 간소화하기 위한 혁신적 솔루션`,
  t3010:
`Api-Link는 Spring 기반 프로젝트에서 컨트롤러 작성의 번거로움을 제거하고,
단일 'cmd' 값을 통해 서비스 계층 메서드를 직접 호출할 수 있도록 설계된 솔루션입니다.
이를 통해 개발 워크플로우가 단순해지고 생산성이 비약적으로 향상됩니다.`,
  t3020:
`AApiLink 프로젝트는 Spring 애플리케이션의 개발 과정을 간소화하기 위해 설계된 새로운 접근 방식입니다.
기존의 방식처럼 서비스마다 컨트롤러를 별도로 생성할 필요 없이,
단일 'cmd' 파라미터를 통해 서비스 계층의 메서드를 직접 호출할 수 있습니다.
이 방식은 개발 구조를 크게 단순화하며,
유지보수 효율성과 개발 생산성을 높입니다.`,
  t3030:
`또한 Spring Boot WebSocket 의존성을 기반으로 한 WebSocket 캐싱 기능을 지원합니다.
이는 실시간 애플리케이션 개발 시 성능과 효율성을 극대화하는 데 매우 유용합니다.
더불어, 사용자 정의 가능한 핸들러(Handler) 구조를 제공하여
WebSocket 동작 방식을 프로젝트 요구사항에 맞게 쉽게 커스터마이징할 수 있습니다.`,
  t3040:
`결국, ApiLink의 목표는 Spring 기반 개발자에게
간편하고, 효율적이며, 유연한 API 통신 도구를 제공하는 것입니다.

또한 프론트엔드와 서버 간의 연동을 강화하기 위해
npm hisonjs의 apiLink와 함께 사용할 수 있습니다.`,
  t3050:
`자동 Bean 등록`,
  t3060:
`ApiController 와 WebSocketConfig 클래스는
spring.factories를 통해 자동으로 Bean으로 등록됩니다.
즉, 사용자가 직접 Controller나 WebSocketConfig를 만들 필요가 없습니다.`,
  t3070:
`충돌 방지`,
  t3080:
`ApiController는 프로젝트 내에 이미 ApiLink가 정의되어 있지 않은 경우에만 자동 등록됩니다.
→ 직접 컨트롤러를 정의하고 싶다면 ApiLink를 상속하여 사용할 수 있습니다.`,
  t3090:
`API 핸들러 커스터마이징`,
  t3100:
`ApiHandlerDefault 클래스를 상속하여 API 요청 처리 방식을 직접 정의할 수 있습니다.`,
  t3110:
`예외 처리`,
  t3120:
`전역 예외 처리(centralized exception handling) 를 제공합니다.`,
  t3130:
`WebSocket 캐싱`,
  t3140:
`api-link는 WebSocket 기반 캐싱을 지원합니다. 이를 통해 실시간 데이터 업데이트 및 효율적인 데이터 관리가 가능합니다.`,
  t3150:
`application.properties 설정`,
  t3160:
`api-link는 application.properties를 통해 다양한 설정 옵션을 제공합니다.`,
  t3170:
`api-link는 아래 artifact에 의존합니다.`,
  t3180:
`org.springframework.boot » spring-boot-starter-websocket`,
  t3190:
`io.github.hisondev » data-model`,

  subhead3:
`utils`,
  h4000:
`https://mvnrepository.com/artifact/io.github.hisondev/utils`,
  t4000:
`Java 프로젝트에서 자주 사용하는 기능들을 간편하게 처리할 수 있는 최소한의 유틸리티 모음`,
  t4010:
`utils 라이브러리는 Java 프로젝트에서 자주 반복되는 공통 작업들을 단순화하기 위해 만들어진 유틸리티 함수 모음입니다.
문자열 처리, 날짜/시간 연산, 숫자 포맷팅 등 다양한 기능을 제공합니다.

이 라이브러리의 목적은 가볍고 사용하기 쉬운 범용 유틸 기능 집합을 제공하여
개발자가 일상적인 프로그래밍 작업을 더 빠르고 깔끔하게 수행할 수 있도록 하는 것입니다.

또한, JavaScript 환경에서는 hison-js의 hison.min.js를 함께 사용할 수 있습니다.`,
  t4020:
`프로퍼티 설정`,
  t4030:
`utils 라이브러리는 properties 파일을 통해 일부 설정 값을 커스터마이징할 수 있습니다.`,
  t4040:
`utils 라이브러리는 아래의 기능을 포함합니다.`,
  t4050:
`문자열 유틸`,
  t4060:
`날짜 유틸`,
  t4070:
`숫자 유틸`,
  t4080:
`기타`,
  t4090:
`utils는 아래 artifact에 의존합니다.`,
  t4100:
`javax.servlet » javax.servlet-api`,

  co1000:
`go mvn`,

  t5000:
`모든 사용 라이선스는 MIT이며 마음껏 활용 가능합니다.`,
} as const;

export default ko;