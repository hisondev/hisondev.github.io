const ko = {
  caption: 'HISONVUE 시작하기',
  t1000:
`엔터프라이즈급 앱을 위해 설계된 Vue 3 UI 컴포넌트 라이브러리입니다. hisonjs 위에 구축되어,
프런트엔드 컴포넌트와 백엔드와 바로 연동 가능한 데이터 유틸리티를 하나의 통합 생태계로 연결합니다.

HisonVue는 런타임 API, 글로벌 테마, SSR 호환성을 갖춘 포괄적인 UI 컴포넌트 세트를 제공합니다.
이는 hisonjs의 기능을 확장한다는 의미로, 시각적 컴포넌트뿐 아니라 데이터 모델링, API-link 통신, 유틸리티, 보안 기능에도 접근할 수 있습니다.
TypeScript로 작성되어 완전한 IntelliSense 지원
Vue CLI, Vite, Nuxt 3(SSR) 즉시 사용 가능
Tree-shaking 및 모듈형 임포트
CSS 변수 & 반응형 클래스 시스템(hison-col-*, hison-size-*, hison-color-*)
hison.component.getXxx(id)를 통한 모든 컴포넌트의 런타임 제어
hisonjs 확장 → utils, data models, API-link, shield 보안 기능 제공`,
  h1000:
`https://www.npmjs.com/package/hisonvue`,
  t1010:
`hisonvue는 npm을 통해 귀하의 프로젝트에 다운받을 수 있습니다.`,
  c1010:
`npm install hisonvue`,
  t1020:
`전역 CSS를 한 번만 임포트합니다:`,
  c1020:
`import 'hisonvue/style.css'`,
  t1030:
`전역 등록 (Vue 3 / Vite / Vue CLI)`,
  c1030:
`import { createApp } from 'vue'
import App from './App.vue'
import { hisonvue, getDefaultHisonConfig, Size, type HisonConfig } from 'hisonvue'
import 'hisonvue/style.css'

const app = createApp(App)

// 전역 설정 커스터마이징
const hisonConfig: HisonConfig = getDefaultHisonConfig()
hisonConfig.componentStyle.primaryColor = '#123456'
hisonConfig.componentStyle.size = Size.s

app.use(hisonvue, hisonConfig)
app.mount('#app')'`,
  t1040:
`전역 등록 후, 아무 컴포넌트나 바로 사용할 수 있습니다:`,
  c1040:
`<HButton id="b1" text="Click" class="hison-color-primary" />
<HLayout class="hison-col-12">
  <HLabel text="Hello World" />
</HLayout>`,
  t1050:
`HisonVue는 SSR-안전 래퍼(createSSRClientOnly) 를 제공합니다. Nuxt에서는 플러그인으로 등록하세요.`,
  c1050:
`/plugins/hisonvue.client.ts`,
  c1060:
`import { defineNuxtPlugin } from '#app'
import { hisonvue, getDefaultHisonConfig, Size, type HisonConfig } from 'hisonvue'
import 'hisonvue/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  const config: HisonConfig = getDefaultHisonConfig()
  config.componentStyle.primaryColor = '#165DFF'
  config.componentStyle.size = Size.m
  config.componentStyle.invertColor = false

  nuxtApp.vueApp.use(hisonvue, config)
})`,
  t1070:
`SSR 환경에서도 하이드레이션 오류 없이 컴포넌트를 전역으로 사용할 수 있습니다.`,
  t1080:
`hison.component로 런타임 제어

모든 컴포넌트는 고유한 id로 등록됩니다. 이 id로 메서드에 접근하세요:`,
  c1080:
`<HButton id="b1" text="Left" class="hison-color-primary" />
<HButton id="b2" text="Right" class="hison-color-warning" />`,
  c1090:
`import { hison } from 'hisonvue'

// 테두리 토글
const b1 = hison.component.getButton('b1')!
b1.setBorder(!b1.isBorder())

// 모달 열기
const modal = hison.component.getModal('modal01')
modal?.open()
modal?.setCaption('Hello Modal')`,
  t1100:
`hison.style로 글로벌 테마 적용

런타임에 동적으로 테마를 변경합니다.`,
  c1100:
`hison.style.setPrimaryColor('#009688')
hison.style.setSize(Size.l)
hison.style.setInvertColor(true)

console.log(hison.style.getPrimaryHoverColor())`,
  t1110:
`CSS 이벤트 훅 (hison.cssEvent)

Button/Input/Textbox 이벤트에 전역 Before/After 훅을 연결합니다.`,
  c1110:
`hison.cssEvent.setButtonOnBefoerClick((e) => {
  console.log('before click', e)
  return true // false를 반환하면 클릭이 취소됩니다
})

hison.cssEvent.setButtonOnAfterClick((e) => {
  console.log('after click', e)
})`,
  t1120:
`참고: API에서 Befoer 철자는 의도된 형태입니다. 그대로 사용하세요.`,

  t1130:
`HisonVue는 25개의 컴포넌트를 제공합니다`,
  t1140:
`Layout`,
  t1150:
`HLayout, HGap, HModal, HPopup, HBanner, HAccordion`,
  t1160:
`Form`,
  t1170:
`HInput, HInputGroup, HFileset, HImagebox, HDropdown`,
  t1180:
`UI Elements`,
  t1190:
`HButton, HLabel, HList, HParagraph, HBaggie, HCaption`,
  t1200:
`Data Views`,
  t1210:
`HGrid (vanillagrid2), HTable, HNote (vanillanote2), HChart (Chart.js), HCalendar (vue-cal)`,
  t1220:
`Feedback`,
  t1230:
`HSpinner, HPagination, HDrawer`,
  t1240:
`전역 설정 (HisonConfig)

getDefaultHisonConfig()를 호출하면 완전한 타입 기반 설정 객체가 반환되며,
이를 통해 전역 설정을 자유롭게 변경할 수 있습니다.`,
  t1250:
`UtilsConfig(hisonjs)`,
  t1260:
`날짜/시간/숫자 포맷 기본값`,
  t1270:
`ShieldConfig(hisonjs)`,
  t1280:
`보안: 개발자 도구 차단, IP 제한, 객체 고정`,
  t1290:
`DataConfig(hisonjs)`,
  t1300:
`DataModel 값 복사 동작 제어`,
  t1310:
`LinkConfig(hisonjs)`,
  t1320:
`API-link 기본 설정 및 훅(before/after)`,
  t1330:
`ComponentStyle`,
  t1340:
`글로벌 테마(색상, 크기, 폰트 등)`,
  t1350:
`Component`,
  t1360:
`외부 라이브러리 연결(vanillanote2, vanillagrid2, chart.js 등)`,
  t1370:
`Event.cssEvent`,
  t1380:
`전역 CSS 이벤트 훅 설정`,
  t1390:
`사용자 커스텀 사용 예시`,
  c1390:
`const cfg = getDefaultHisonConfig()
cfg.componentStyle.primaryColor = '#222'
cfg.componentStyle.size = Size.s
cfg.link.timeout = 15000
cfg.shield.isPossibleOpenDevTool = false`,
  t1400:
`현재 사이트는 hisonvue를 통해 제작하였습니다.`,
  t1410:
`그외 자세한 사용은 API 문서를 참고하십시오.`,

  co1000:
`go npm`,
} as const;

export default ko;