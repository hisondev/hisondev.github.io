const ko = {
  caption: 'HISONDEV Client',
  t1000:
`HISONDEV의 클라이언트단 지원 프로젝트는 기능 측면 지원의 npm hisonjs와 컴포넌트 지원의 npm hisonvue(hisonjs를 의존함)가 있습니다.`,
  t1010:
`hisonjs와 hisonvue는 Java Spring 기반의 hisondev 백엔드 생태계를 위한 클라이언트 솔루션으로, 프런트엔드와 서버 간의 데이터 구조·통신·보안·UI를 하나로 통합한 강력한 개발 플랫폼입니다.
hisonjs는 데이터 모델링(DataWrapper, DataModel), API 통신(ApiPost, ApiGet, CachingModule), 보안(shield), 유틸리티(utils)를 중심으로 한 경량 클라이언트 라이브러리로서, hisonjv·api-link·data-model(Java 기반 백엔드)과 완벽히 연동되어 효율적인 데이터 교환을 제공합니다.
여기에 hisonvue는 Vue 3·TypeScript 기반의 UI 컴포넌트 라이브러리로, hisonjs의 모든 기능을 확장하여 엔터프라이즈급 프런트엔드 개발을 지원합니다.
HButton, HLayout, HInput, HGrid 등 다양한 컴포넌트를 포함하고 있으며, 런타임 제어(hison.component.getXxx), 글로벌 테마 관리(hison.style), SSR 호환, 반응형 클래스 시스템(hison-col-*, hison-size-*, hison-color-*) 등을 통해 데이터 중심의 UI와 백엔드 서비스를 완벽히 연결합니다.
두 라이브러리는 함께 사용될 때, 개발자는 데이터-API-UI-보안이 유기적으로 통합된 풀스택 환경에서 손쉽게 확장 가능하고 일관성 있는 애플리케이션을 구축할 수 있습니다.`,

  subhead1:
`hisonjs`,
  h2000:
`https://www.npmjs.com/package/hisonjs`,
  t2000:
`hisonjs는 Java Spring 기반의 hisondev 백엔드 솔루션과 함께 사용하도록 설계된 강력한 클라이언트 사이드 라이브러리입니다. 실용적인 유틸리티, 보안 강화, 구조화된 데이터 모델링, 그리고 API 통신 모듈을 제공합니다.`,
  t2010:
`hisonjs는 Maven Central에 게시된 hisonjv의 Java 라이브러리들(data-model, api-link)과 완벽히 호환됩니다`,
  t2020:
`핵심 개념`,
  t2030:
`클로저 캡슐화(Closure Encapsulation): 내부적으로 HisonCore를 클로저로 감싸 보안과 불변성을 최대화합니다.`,
  t2040:
`커스터마이즈 가능한 기본값: 바이트 규칙, 날짜/시간 포맷, 훅 함수, API 프로토콜 등을 동적으로 변경할 수 있습니다.`,
  t2050:
`Java 사이드와의 직렬화 호환성: 프런트(hisonjs)의 DataWrapper/DataModel 인스턴스가 백엔드(hisonjv/data-model)와 문제없이 직렬화/역직렬화됩니다.`,
  t2060:
`WebSocket 엔드포인트 관리: 캐시 레이어를 통해 실시간 데이터 갱신을 처리하여 확장성 있는 앱을 구성합니다.`,

  t2070:
`핵심기능`,
  t2080:
`동적 설정(Dynamic Configuration): 간단한 hison.setXXX() 메서드들로 전역 동작을 유연하게 제어할 수 있습니다.`,
  t2090:
`보안 모듈(Security Module): hison.shield.excute()로 무단 개발자 도구 사용 차단, URL/IP 접근 제한, 객체 불변(immutability) 확보 등 앱을 보호합니다.`,
  t2100:
`데이터 모델링(Data Modeling): 프런트엔드에서도 DataModel·DataWrapper를 사용하여, 백엔드(hisonjv의 data-model)와 동일한 개념으로 데이터 구조화/검증을 수행합니다.`,
  t2110:
`API 통신(API Communication): api-link 기반의 Spring 백엔드와 원활히 통신합니다. ApiPost, ApiGet, 그리고 내장 캐싱(CachingModule)을 제공합니다.`,
  t2120:
`커스텀 훅(Custom Hooks): API 요청/응답의 생명주기를 사전/사후 훅 함수로 제어할 수 있습니다.`,
  t2130:
`실시간 WebSocket 지원(Real-Time WebSocket Support): 캐싱 모듈을 통해 실시간 업데이트를 자동 처리합니다.`,


  subhead2:
`hisonvue`,
  h3000:
`https://www.npmjs.com/package/hisonvue`,
  t3000:
`엔터프라이즈급 웹앱을 위한 Vue 3 UI 컴포넌트 라이브러리`,
  t3010:
`HisonVue는 hisonjs 위에 구축된 Vue 3용 UI 컴포넌트 라이브러리로,
프런트엔드의 시각적 컴포넌트와 백엔드 통신용 데이터 유틸리티를 하나의 통합 생태계로 결합합니다.

HisonVue는 런타임 API, 글로벌 테마, SSR(서버사이드 렌더링) 호환성을 갖춘
포괄적인 Vue 3 UI 컴포넌트 세트를 제공합니다.

이 라이브러리는 hisonjs를 확장하므로 단순한 UI 컴포넌트뿐 아니라
데이터 모델링, API-link 통신, 유틸리티, 보안(Shield) 기능도 함께 제공합니다.(hisonjs 의존)
`,
  t3020:
`특징 요약`,
  t3030:
`TypeScript로 작성 → 완전한 IntelliSense 지원`,
  t3040:
`Vue CLI / Vite / Nuxt 3(SSR) 완벽 호환`,
  t3050:
`Tree-shaking 및 모듈별 임포트 가능`,
  t3060:
`CSS 변수 및 반응형 클래스 시스템(hison-col-*, hison-size-*, hison-color-*)`,
  t3070:
`각 컴포넌트를 런타임에서 직접 제어 (hison.component.getXxx(id))`,
  t3080:
`hisonjs 확장 버전 → utils, data, link, shield 기능까지 내장`,
  t3090:
`HisonVue는 25개의 컴포넌트를 제공합니다`,
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
`전역 설정 (HisonConfig)

getDefaultHisonConfig()를 호출하면 완전한 타입 기반 설정 객체가 반환되며,
이를 통해 전역 설정을 자유롭게 변경할 수 있습니다.`,
  t3210:
`UtilsConfig(hisonjs)`,
  t3220:
`날짜/시간/숫자 포맷 기본값`,
  t3230:
`ShieldConfig(hisonjs)`,
  t3240:
`보안: 개발자 도구 차단, IP 제한, 객체 고정`,
  t3250:
`DataConfig(hisonjs)`,
  t3260:
`DataModel 값 복사 동작 제어`,
  t3270:
`LinkConfig(hisonjs)`,
  t3280:
`API-link 기본 설정 및 훅(before/after)`,
  t3290:
`ComponentStyle`,
  t3300:
`글로벌 테마(색상, 크기, 폰트 등)`,
  t3310:
`Component`,
  t3320:
`외부 라이브러리 연결(vanillanote2, vanillagrid2, chart.js 등)`,
  t3330:
`Event.cssEvent`,
  t3340:
`전역 CSS 이벤트 훅 설정`,
  t3350:
`확장된 Hison 인터페이스

HisonVue는 hisonjs.Hison을 확장한 **싱글톤 객체 hison**을 내보냅니다.`,
  t3360:
`기존 hisonjs 기능:`,
  t3370:
`utils: 문자열/날짜/숫자 유틸`,
  t3380:
`data: DataWrapper, DataModel`,
  t3390:
`link: Spring 백엔드와의 API 통신`,
  t3400:
`shield: 보안 (개발자도구 차단, 객체 freeze, URL/IP 제한 등)`,
  t3410:
`추가된 Vue 기능:`,
  t3420:
`component.getXxx(id) → Vue 컴포넌트 런타임 제어`,
  t3430:
`style.setXxx/getXxx → 전역 테마 API`,
  t3440:
`cssEvent.setXxx → 전역 UI 이벤트 훅`,
  t3450:
`파일 업로드 기본값 관리: setMaxFilesetSize, setMaxFilesetTotalSize`,
  t3460:
`즉, HisonVue는 Vue 프런트엔드와 Spring 백엔드를 완전히 연결하는 풀스택 브릿지입니다.`,
  t3470:
`hisonvue는 아래 npm 프로젝트에 의존합니다.`,
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
`그리고 현재 사이트는 hisonvue를 통해 제작하였습니다.`,

  co1000:
`go npm`,

  t4000:
`모든 사용 라이선스는 MIT이며 마음껏 활용 가능합니다.`,
} as const;

export default ko;7