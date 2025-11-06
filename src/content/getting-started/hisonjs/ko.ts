const ko = {
  caption: 'HISONJS 시작하기',
  t1000:
`hisonjs는 Java Spring용 hisondev 백엔드 솔루션과 함께 사용하도록 설계된 강력한 클라이언트 사이드 라이브러리입니다.
견고한 유틸리티, 보안 강화 기능, 구조화된 데이터 모델링, 그리고 API 통신 모듈을 제공합니다.`,
  c1000:
`npm install hisonjs`,
  h1000:
`https://www.npmjs.com/package/hisonjs`,
  t1005:
`hisonjs는 npm을 통해 귀하의 프로젝트에 다운받을 수 있습니다.`,
  t1010:
`hisonjs는 Maven Central에 게시된 다음 Java 라이브러리들과 완벽하게 호환됩니다
hisonjv(data-model, api-link)`,
  t1020:
`핵심기능은 아래와 같으며, 4가지로 분류할 수 있습니다. (hison. utils, sheild, data, link)`,
  t1030:
`동적 설정(Dynamic Configuration): 간단한 hison.setXXX() 메서드들로 전역 동작을 유연하게 제어할 수 있습니다.`,
  t1040:
`보안 모듈(Security Module): hison.shield.execute()로 무단 개발자 도구 사용 차단, URL/IP 접근 제한, 객체 불변(immutability) 확보 등 앱을 보호합니다.`,
  t1050:
`데이터 모델링(Data Modeling): 프런트엔드에서도 DataModel·DataWrapper를 사용하여, 백엔드(hisonjv의 data-model)와 동일한 개념으로 데이터 구조화/검증을 수행합니다.`,
  t1060:
`API 통신(API Communication): api-link 기반의 Spring 백엔드와 원활히 통신합니다. ApiPost, ApiGet, 그리고 내장 캐싱(CachingModule)을 제공합니다.`,
  t1070:
`커스텀 훅(Custom Hooks): API 요청/응답의 생명주기를 사전/사후 훅 함수로 제어할 수 있습니다.`,
  t1080:
`실시간 WebSocket 지원(Real-Time WebSocket Support): 캐싱 모듈을 통해 실시간 업데이트를 자동 처리합니다.`,
  t1090:
`사용 개요`,
  t1100:
`기본 설정`,
  c1100:
`import hison from "hisonjs";

hison.setProtocol("https://");
hison.setDateFormat("yyyy-MM-dd");
hison.setExposeIpList(["192.168.1.1", "10.0.0.2"]);`,
  t1110:
`보안 적용`,
  c1110:
`hison.shield.execute(hison);`,
  t1120:
`shield에 의한 보안 적용은 특정 ip차단, 개발자모드 열기 금지 등의 기능을 지원합니다.`,
  t1130:
`모듈 사용 시작

· Utilities: hison.utils
· Data Management: hison.data
· API Communication: hison.link`,
  t1140:
`유틸리티 함수`,
  c1140:
`const isAlpha = hison.utils.isAlpha("HelloWorld");
console.log(isAlpha); // true

const dateStr = hison.utils.getDateWithFormat(new Date(), "yyyy-MM-dd");
console.log(dateStr);`,
  t1150:
`데이터 모델링 (hisonjv의 data-model과 호환)`,
  c1150:
`const wrapper = new hison.data.DataWrapper({ username: "Alice" });
console.log(wrapper.getString("username")); // "Alice"

const model = new hison.data.DataModel([{ id: 1, name: "Alice" }]);
console.log(model.getValue(0, "name")); // "Alice"`,
  t1160:
`API 통신 (API-Link 백엔드 연동)`,
  c1160:
`const apiPost = new hison.link.ApiPost("UserService.createUser");
const requestData = new hison.data.DataWrapper({ username: "Alice" });

apiPost.call(requestData).then(response => {
  console.log("API Response:", response.data);
});`,
  t1170:
`실시간 캐싱 + WebSocket 업데이트`,
  c1170:
`const cachingModule = new hison.link.CachingModule(20);
const apiGet = new hison.link.ApiGet("/users", cachingModule);

apiGet.call().then(response => {
  console.log("Fetched users:", response.data);
});`,
  t1180:
`전체 초기화 예시`,
  c1180:
`import hison from "hisonjs";

// Setup
hison.setProtocol("https://");
hison.setDatetimeFormat("yyyy-MM-dd HH:mm:ss");

// Enforce security
hison.shield.execute(hison);

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
`핵심 개념`,
  t1200:
`클로저 캡슐화(Closure Encapsulation): 내부적으로 HisonCore를 클로저로 감싸 보안과 불변성을 최대화합니다.`,
  t1210:
`커스터마이즈 가능한 기본값: 바이트 규칙, 날짜/시간 포맷, 훅 함수, API 프로토콜 등을 동적으로 변경할 수 있습니다.`,
  t1220:
`Java 사이드와의 직렬화 호환성: 프런트(hisonjs)의 DataWrapper/DataModel 인스턴스가 백엔드(hisonjv/data-model)와 문제없이 직렬화/역직렬화됩니다.`,
  t1230:
`WebSocket 엔드포인트 관리: 캐시 레이어를 통해 실시간 데이터 갱신을 처리하여 확장성 있는 앱을 구성합니다.`,
  t1240:
`그외 자세한 사용은 API 문서를 참고하십시오.`,

  co1000:
`go npm`,
} as const;

export default ko;