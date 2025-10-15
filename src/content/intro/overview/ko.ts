const ko = {
  caption: 'Hello HISONDEV',
  t1000:
`hison dev 프로젝트는 개발자의 개발 편의를 증대하기 위한 프로젝트입니다.
Java/Spring 기반의 서비스단에서 사용할 수 있는 hisonjv
type/javascript 기반의 클라이언트단에서 사용할 수 있는 hisonjs
(hisonjv와 hisonjs는 상호 연동됩니다.)
그리고 vue기반의 프로젝트에 컴포넌트를 지원하는 hisonvue 프로젝트를 포함합니다.
(hisonvue는 hisonjs를 포함합니다.)`,

  subhead1:
`hison dev의 Server단 지원`,
  t2000:
`Java/Spring 기반의 서비스단에서 사용할 수 있는 hisonjv의 목적과 특징은
1. DataWrapper(Key-Value 기반)와 DataModel(컬럼/로우 테이블 형태) 두 클래스를 통해 다양한 데이터 구조를 명확히 주고받을 수 있습니다.
2. Spring 애플리케이션의 데이터 통신을 단순화합니다.
3. 문자열, 날짜/시간, 숫자 포맷 등 Java 유틸성 기능 모음을 지원합니다.
4. 또한 각 기능별 사용자 커스텀 영역을 제공합니다.
이들을 통합해 데이터 통신을 단순화하고, API 관리(호출) 흐름을 간소화하며, 반복 업무를 유틸로 흡수하여 개발 생산성을 끌어올리는 것이 목적입니다.`,
  t2010:
`hisonjv는 하단의 artifact를 포함합니다.`,
  t2011:
`mvn repository`,
  h2011:
`https://mvnrepository.com/artifact/io.github.hisondev/hisonjv`,
  t2020:
`Data Model artifact
DataWrapper / DataModel 클래스를 중심으로, 프런트엔드–백엔드 간 데이터 교환을 간결하게 만드는 데이터 전송/관리 유틸리티. (hisonjs의 DataModel과 함께 사용)`,
  h2020:
`https://mvnrepository.com/artifact/io.github.hisondev/data-model`,
  t2030:
`Api Link artifact
컨트롤러를 개별적으로 만들지 않고, 단일 cmd 값으로 서비스 계층 메서드를 호출할 수 있게 하는 솔루션. (WebSocket 캐싱 지원, 커스터마이징 가능한 핸들러 제공, hisonjs의 ApiLink와 함께 사용)`,
  h2030:
`https://mvnrepository.com/artifact/io.github.hisondev/api-link`,
  t2040:
`Utils artifact
문자열, 날짜/시간, 숫자 포맷 등 Java 유틸성 기능 모음`,
  h2040:
`https://mvnrepository.com/artifact/io.github.hisondev/utils`,

  subhead2:
`hison dev의 Client단 지원 (1) - hisonjs`,
  t3000:
`hisonjs는 Java Spring 기반의 hisondev 백엔드 솔루션과 함께 사용하도록 설계된 강력한 클라이언트 사이드 라이브러리입니다.
실용적인 유틸리티, 보안 강화, 구조화된 데이터 모델링, 그리고 API 통신 모듈을 제공합니다. 매우 간편하게 npm i hisonjs로 설치가능합니다.
그리고 동적 설정(Dynamic Configuration): 간단한 hison.setXXX() 메서드들로 전역 동작을 유연하게 제어할 수 있습니다.`,
  t3010:
`hisonjs는 하단의 기능을 제공합니다.`,
  t3011:
`npm hisonjs`,
  h3011:
`https://www.npmjs.com/package/hisonjs`,
  t3020:
`hison.shield : 보안 모듈(Security Module): hison.shield.excute()로 무단 개발자 도구 사용 차단, URL/IP 접근 제한, 객체 불변(immutability) 확보 등 앱을 보호합니다.`,
  t3030:
`hison.data : 데이터 모델링(Data Modeling): 프런트엔드에서도 DataModel·DataWrapper를 사용하여, 백엔드(hisonjv의 data-model)와 동일한 개념으로 데이터 구조화/검증을 수행합니다.`,
  t3040:
`hison.link : API 통신(API Communication): api-link 기반의 Spring 백엔드와 원활히 통신합니다. ApiPost, ApiGet, 그리고 내장 캐싱(CachingModule)을 제공합니다.`,
  t3050:
`기타 커스텀 훅(Custom Hooks): API 요청/응답의 생명주기를 사전/사후 훅 함수로 제어할 수 있습니다. 또 실시간 WebSocket 지원(Real-Time WebSocket Support): 캐싱 모듈을 통해 실시간 업데이트를 자동 처리합니다.`,

  subhead3:
`hison dev의 Client단 지원 (2) - hisonvue`,
  t4000:
`HisonVue는 hisonjs 위에 구축된 Vue 3용 UI 컴포넌트 라이브러리입니다. 그리고 hisonjs를 포함합니다.
hisonvue와 server단의 hisonjv를 함께 사용하면 프런트엔드의 시각적 컴포넌트와 백엔드 통신용 데이터 유틸리티를 하나의 통합 생태계로 결합할 수 있습니다.
즉 HisonVue는 런타임 API, 글로벌 테마, SSR(서버사이드 렌더링) 호환성을 갖춘 포괄적인 Vue 3 UI 컴포넌트 세트를 제공합니다.
이 라이브러리는 hisonjs를 확장하므로 단순한 UI 컴포넌트뿐 아니라 데이터 모델링, API-link 통신, 유틸리티, 보안(Shield) 기능도 함께 제공합니다`,
  t4010:
`hisonvue의 특징은 아래와 같습니다.`,
  t4011:
`npm hisonvue`,
  h4011:
`https://www.npmjs.com/package/hisonvue`,
  t4020:
`25가지의 다양한 컴포넌트 지원`,
  t4030:
`TypeScript로 작성 → 완전한 IntelliSense 지원`,
  t4040:
`Vue CLI / Vite / Nuxt 3(SSR) 완벽 호환`,
  t4050:
`Tree-shaking 및 모듈별 임포트 가능`,
  t4060:
`CSS 변수 및 반응형 클래스 시스템(hison-col-*, hison-size-*, hison-color-*)`,
  t4070:
`각 컴포넌트를 런타임에서 직접 제어 (hison.component.getXxx(id))`,
  t4080:
`hisonjs 확장 버전 → utils, data, link, shield 기능까지 내장`,
  t4090:
`hisonConfig를 통한 소비자 커스텀 지원, hison을 통한 동적 커스텀 지원`,
} as const;

export default ko;