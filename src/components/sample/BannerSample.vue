<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HBanner(배너/캐러셀) 컴포넌트입니다.

HBanner는 Bootstrap Carousel에서 영감을 받은 가벼운 가로 슬라이더입니다.
기본 슬롯의 **직계 자식**을 각 슬라이드로 렌더링하며, 이전/다음 내비게이션, 페이지 인디케이터(●), 자동재생/루프, 런타임 제어(HBannerMethods)를 지원합니다. 슬라이드는 뷰포트 중앙 정렬로 깔끔하게 표시됩니다.`,
  t1010: `이것은 HBanner 라이브 데모입니다.`,
  t1030:
`주요 특징

· 슬롯 기반 슬라이드(기본 슬롯의 직계 자식 1개 = 1 슬라이드)
· 전환 시간(transitionMs) 설정 가능한 단순 수평 전환
· 이전/다음 버튼(기본 제공, 슬롯으로 완전 교체 가능)
· 페이지 인디케이터(●) 및 오버레이 위치 배치
· 자동재생(방향 제어, 호버 시 일시정지)
· 가장자리에서 루프 옵션
· 고유 id로 런타임 등록: hison.component.getBanner(id)
· 반응형 클래스 추출(hison-col-*, hison-size-*, hison-color-*)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HBanner
  id="bn-basic"
  class="hison-size-m hison-color-primary"
  :initialIndex="0"
  :transitionMs="400"
  :showNavButtons="true"
  :showIndicators="true"
>
  <HLayout class="hison-col-6">Slide 1</HLayout>
  <HLayout class="hison-col-6">Slide 2</HLayout>
  <HLayout class="hison-col-6">Slide 3</HLayout>
</HBanner>

<!-- 오버레이 인디케이터 + 커스텀 내비 버튼 -->
<HBanner
  id="bn-overlay"
  class="hison-size-m hison-color-info"
  :autoIntervalMs="3000"
  autoDirection="next"
  :pauseOnHover="true"
  indicatorsPosition="overlay"
>
  <template #prev-button="{ prev, disabled }">
    <HButton :disable="disabled"><template #icon>◀</template></HButton>
  </template>
  <template #next-button="{ next, disabled }">
    <HButton :disable="disabled"><template #icon>▶</template></HButton>
  </template>

  <HLayout>One</HLayout>
  <HLayout>Two</HLayout>
  <HLayout>Three</HLayout>
</HBanner>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const banner = hison.component.getBanner('bn-basic')
banner.setInitialIndex(1)
banner.setAutoInterval(2500)
banner.startAuto()
banner.setIndicatorsPosition('overlay')
banner.next()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HBanner (banner/carousel) component.

HBanner is a lightweight horizontal slider inspired by Bootstrap’s Carousel.
Each **direct child** of the default slot becomes a slide. It supports prev/next navigation, page indicators (●), autoplay/looping, and full runtime control (HBannerMethods). Slides are centered for clean presentation.`,
  t1010: `This is the HBanner live demo.`,
  t1030:
`Main Features

· Slot-based slides (1 direct child in default slot = 1 slide)
· Simple horizontal transition with configurable duration (transitionMs)
· Prev/Next buttons (built-in or fully replaceable via slots)
· Page indicators (●), with optional overlay positioning
· Autoplay with direction control and hover pause
· Loop option at edges
· Runtime registration by unique id: hison.component.getBanner(id)
· Responsive class extraction (hison-col-*, hison-size-*, hison-color-*)`,
  t1040: `Template Example`,
  c1040:
`<HBanner
  id="bn-basic"
  class="hison-size-m hison-color-primary"
  :initialIndex="0"
  :transitionMs="400"
  :showNavButtons="true"
  :showIndicators="true"
>
  <HLayout class="hison-col-6">Slide 1</HLayout>
  <HLayout class="hison-col-6">Slide 2</HLayout>
  <HLayout class="hison-col-6">Slide 3</HLayout>
</HBanner>

<!-- Overlay indicators + custom nav buttons -->
<HBanner
  id="bn-overlay"
  class="hison-size-m hison-color-info"
  :autoIntervalMs="3000"
  autoDirection="next"
  :pauseOnHover="true"
  indicatorsPosition="overlay"
>
  <template #prev-button="{ prev, disabled }">
    <HButton :disable="disabled"><template #icon>◀</template></HButton>
  </template>
  <template #next-button="{ next, disabled }">
    <HButton :disable="disabled"><template #icon>▶</template></HButton>
  </template>

  <HLayout>One</HLayout>
  <HLayout>Two</HLayout>
  <HLayout>Three</HLayout>
</HBanner>`,
  t1050: `Runtime Example`,
  c1050:
`const banner = hison.component.getBanner('bn-basic')
banner.setInitialIndex(1)
banner.setAutoInterval(2500)
banner.startAuto()
banner.setIndicatorsPosition('overlay')
banner.next()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default",      explain: "슬라이드 콘텐츠(기본 슬롯). 각 직계 자식이 1개의 슬라이드가 됩니다." },
  { slot: "prev-button",  explain: "기본 Prev 버튼 전체 교체. 슬롯 props: { prev, disabled }" },
  { slot: "next-button",  explain: "기본 Next 버튼 전체 교체. 슬롯 props: { next, disabled }" },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getBanner(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/커스텀 클래스(hison-col-*, hison-size-*, hison-color-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "배너 프레임 인라인 스타일." },

  { prop: "visible", type: "boolean", default: "true", explain: "배너 프레임 표시 여부." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'filled'", explain: "프레임 배경 스타일." },
  { prop: "border", type: "boolean", default: "false", explain: "프레임 보더/섀도우 표시 여부." },

  { prop: "initialIndex", type: "number", default: "0", explain: "처음 표시할 슬라이드 인덱스(0-base)." },
  { prop: "transitionMs", type: "number", default: "350", explain: "슬라이드 이동 전환 시간(ms)." },

  { prop: "navButtonStyle", type: "'chevron'|'triangle'", default: "'chevron'", explain: "이전/다음 버튼 글리프 스타일." },
  { prop: "showNavButtons", type: "boolean", default: "true", explain: "이전/다음 버튼 표시 여부." },
  { prop: "showIndicators", type: "boolean", default: "true", explain: "페이지 인디케이터(●) 표시 여부." },
  { prop: "indicatorsPosition", type: "'bottom'|'overlay'", default: "'bottom'", explain: "인디케이터 위치." },
  { prop: "indicatorClickable", type: "boolean", default: "true", explain: "인디케이터 클릭 이동 허용." },

  { prop: "autoIntervalMs", type: "number", default: "0", explain: "자동재생 간격(ms). 100 미만이면 비활성." },
  { prop: "autoDirection", type: "'next'|'prev'", default: "'next'", explain: "자동재생 진행 방향." },
  { prop: "loop", type: "boolean", default: "true", explain: "가장자리에서 래핑(루프) 여부." },
  { prop: "pauseOnHover", type: "boolean", default: "true", explain: "호버 시 자동재생 일시정지." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 시", args: "(HBannerMethods)" },
  { event: "change", trigger: "인덱스 변경 직후", args: "(currentIndex: number, methods: HBannerMethods)" },
  { event: "next", trigger: "다음 슬라이드 이동 시", args: "(currentIndex: number, methods: HBannerMethods)" },
  { event: "prev", trigger: "이전 슬라이드 이동 시", args: "(currentIndex: number, methods: HBannerMethods)" },
  { event: "autoplay-start", trigger: "자동재생 시작", args: "(methods: HBannerMethods)" },
  { event: "autoplay-stop", trigger: "자동재생 중지", args: "(methods: HBannerMethods)" },
  { event: "responsive-change", trigger: "디바이스 타입 변경 시", args: "('mb' | 'tb' | 'pc' | 'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'banner'", explain: "컴포넌트 타입 리터럴('banner')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "배너 프레임 표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "배너 프레임 표시/비표시." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "프레임 보더/섀도우 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "프레임 보더/섀도우 표시/숨김." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "프레임 배경 타입 조회." },
  { method: "setBackgroundType(t)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "프레임 배경 타입 설정('filled'|'empty'|'transparent')." },
  { method: "getCurrentIndex()", param: "-", return: "number", explain: "현재 슬라이드 인덱스(0-base)." },
  { method: "setCurrentIndex(i)", param: "number", return: "void", explain: "해당 인덱스로 이동(경계 보정/루프 반영)." },
  { method: "getInitialIndex()", param: "-", return: "number", explain: "마운트 시 사용된 초기 인덱스." },
  { method: "setInitialIndex(i)", param: "number", return: "void", explain: "초기 인덱스를 설정하고 즉시 이동." },
  { method: "getSlideCount()", param: "-", return: "number", explain: "슬라이드 수(기본 슬롯 직계 자식 개수)." },
  { method: "next()", param: "-", return: "void", explain: "다음 슬라이드로 이동." },
  { method: "prev()", param: "-", return: "void", explain: "이전 슬라이드로 이동." },
  { method: "goTo(i)", param: "number", return: "void", explain: "지정 인덱스로 이동." },
  { method: "getNavButtonStyle()", param: "-", return: "'chevron'|'triangle'", explain: "내비 버튼 글리프 스타일 조회." },
  { method: "setNavButtonStyle(s)", param: "'chevron'|'triangle'", return: "void", explain: "내비 버튼 글리프 스타일 설정." },
  { method: "isShowNavButtons()", param: "-", return: "boolean", explain: "이전/다음 버튼 표시 여부." },
  { method: "setShowNavButtons(v)", param: "boolean", return: "void", explain: "이전/다음 버튼 표시/숨김." },
  { method: "isShowIndicators()", param: "-", return: "boolean", explain: "인디케이터(●) 표시 여부." },
  { method: "setShowIndicators(v)", param: "boolean", return: "void", explain: "인디케이터 표시/숨김." },
  { method: "getIndicatorsPosition()", param: "-", return: "'bottom'|'overlay'", explain: "인디케이터 위치 조회." },
  { method: "setIndicatorsPosition(p)", param: "'bottom'|'overlay'", return: "void", explain: "인디케이터 위치 설정." },
  { method: "isIndicatorClickable()", param: "-", return: "boolean", explain: "인디케이터 클릭 가능 여부." },
  { method: "setIndicatorClickable(v)", param: "boolean", return: "void", explain: "인디케이터 클릭 가능/불가 설정." },
  { method: "getAutoInterval()", param: "-", return: "number", explain: "자동재생 간격(ms). 100 미만이면 비활성." },
  { method: "setAutoInterval(ms)", param: "number", return: "void", explain: "자동재생 간격 설정(실행 중이면 타이머 재시작)." },
  { method: "getAutoDirection()", param: "-", return: "'next'|'prev'", explain: "자동재생 진행 방향 조회." },
  { method: "setAutoDirection(d)", param: "'next'|'prev'", return: "void", explain: "자동재생 진행 방향 설정." },
  { method: "isLoop()", param: "-", return: "boolean", explain: "가장자리 래핑(루프) 여부." },
  { method: "setLoop(v)", param: "boolean", return: "void", explain: "루프 설정." },
  { method: "isPauseOnHover()", param: "-", return: "boolean", explain: "호버 시 자동재생 일시정지 여부." },
  { method: "setPauseOnHover(v)", param: "boolean", return: "void", explain: "호버 시 자동재생 일시정지 설정." },
  { method: "startAuto()", param: "-", return: "void", explain: "자동재생 시작(간격 ≥ 100ms 필요)." },
  { method: "stopAuto()", param: "-", return: "void", explain: "자동재생 중지." },
  { method: "getTransitionMs()", param: "-", return: "number", explain: "슬라이드 전환 시간(ms) 조회." },
  { method: "setTransitionMs(ms)", param: "number", return: "void", explain: "슬라이드 전환 시간(ms) 설정." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리로드(스타일/상태 재적용)." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트의 고유 ID." },
]

const slotGridDataEn = [
  { slot: "default",     explain: "Slide content (default slot). Each direct child becomes one slide." },
  { slot: "prev-button", explain: "Replaces the built-in Prev button. Slot props: { prev, disabled }" },
  { slot: "next-button", explain: "Replaces the built-in Next button. Slot props: { next, disabled }" },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getBanner(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive/custom classes (hison-col-*, hison-size-*, hison-color-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for the banner frame." },

  { prop: "visible", type: "boolean", default: "true", explain: "Banner frame visibility." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'filled'", explain: "Frame background style." },
  { prop: "border", type: "boolean", default: "false", explain: "Whether the frame shows border/shadow styling." },

  { prop: "initialIndex", type: "number", default: "0", explain: "Zero-based index of the first slide to show." },
  { prop: "transitionMs", type: "number", default: "350", explain: "Transition duration (ms) for slide movement." },

  { prop: "navButtonStyle", type: "'chevron'|'triangle'", default: "'chevron'", explain: "Glyph style for prev/next buttons." },
  { prop: "showNavButtons", type: "boolean", default: "true", explain: "Show prev/next navigation buttons." },
  { prop: "showIndicators", type: "boolean", default: "true", explain: "Show page indicators (dots)." },
  { prop: "indicatorsPosition", type: "'bottom'|'overlay'", default: "'bottom'", explain: "Position of indicators." },
  { prop: "indicatorClickable", type: "boolean", default: "true", explain: "Make indicators clickable." },

  { prop: "autoIntervalMs", type: "number", default: "0", explain: "Autoplay interval (ms). Values < 100 disable autoplay." },
  { prop: "autoDirection", type: "'next'|'prev'", default: "'next'", explain: "Autoplay direction." },
  { prop: "loop", type: "boolean", default: "true", explain: "Wrap around at edges." },
  { prop: "pauseOnHover", type: "boolean", default: "true", explain: "Pause autoplay on hover." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "When the component is mounted.", args: "(HBannerMethods)" },
  { event: "change", trigger: "After index changes.", args: "(currentIndex: number, methods: HBannerMethods)" },
  { event: "next", trigger: "When moving to next slide.", args: "(currentIndex: number, methods: HBannerMethods)" },
  { event: "prev", trigger: "When moving to previous slide.", args: "(currentIndex: number, methods: HBannerMethods)" },
  { event: "autoplay-start", trigger: "When autoplay starts.", args: "(methods: HBannerMethods)" },
  { event: "autoplay-stop", trigger: "When autoplay stops.", args: "(methods: HBannerMethods)" },
  { event: "responsive-change", trigger: "When device type changes.", args: "('mb' | 'tb' | 'pc' | 'wd')" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'banner'", explain: "Returns the component type literal ('banner')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether the banner frame is visible." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Shows/hides the banner frame." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether the frame shows border/shadow styling." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Shows/hides frame border/shadow." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Gets the frame background type." },
  { method: "setBackgroundType(t)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "Sets the frame background type ('filled'|'empty'|'transparent')." },
  { method: "getCurrentIndex()", param: "-", return: "number", explain: "Gets current slide index (0-based)." },
  { method: "setCurrentIndex(i)", param: "number", return: "void", explain: "Navigates to index (clamped/loop-aware)." },
  { method: "getInitialIndex()", param: "-", return: "number", explain: "Gets initial index used on mount." },
  { method: "setInitialIndex(i)", param: "number", return: "void", explain: "Sets initial index and navigates immediately." },
  { method: "getSlideCount()", param: "-", return: "number", explain: "Total number of slides (default slot direct children)." },
  { method: "next()", param: "-", return: "void", explain: "Navigate to next slide." },
  { method: "prev()", param: "-", return: "void", explain: "Navigate to previous slide." },
  { method: "goTo(i)", param: "number", return: "void", explain: "Navigate to specified index." },
  { method: "getNavButtonStyle()", param: "-", return: "'chevron'|'triangle'", explain: "Gets nav button glyph style." },
  { method: "setNavButtonStyle(s)", param: "'chevron'|'triangle'", return: "void", explain: "Sets nav button glyph style." },
  { method: "isShowNavButtons()", param: "-", return: "boolean", explain: "Whether prev/next buttons are shown." },
  { method: "setShowNavButtons(v)", param: "boolean", return: "void", explain: "Shows/hides prev/next buttons." },
  { method: "isShowIndicators()", param: "-", return: "boolean", explain: "Whether indicators (●) are shown." },
  { method: "setShowIndicators(v)", param: "boolean", return: "void", explain: "Shows/hides indicators." },
  { method: "getIndicatorsPosition()", param: "-", return: "'bottom'|'overlay'", explain: "Gets indicators position." },
  { method: "setIndicatorsPosition(p)", param: "'bottom'|'overlay'", return: "void", explain: "Sets indicators position." },
  { method: "isIndicatorClickable()", param: "-", return: "boolean", explain: "Whether indicators are clickable." },
  { method: "setIndicatorClickable(v)", param: "boolean", return: "void", explain: "Enables/disables indicator click." },
  { method: "getAutoInterval()", param: "-", return: "number", explain: "Autoplay interval (ms). <100 disables." },
  { method: "setAutoInterval(ms)", param: "number", return: "void", explain: "Sets autoplay interval (restarts if running)." },
  { method: "getAutoDirection()", param: "-", return: "'next'|'prev'", explain: "Gets autoplay direction." },
  { method: "setAutoDirection(d)", param: "'next'|'prev'", return: "void", explain: "Sets autoplay direction." },
  { method: "isLoop()", param: "-", return: "boolean", explain: "Whether edges wrap (loop)." },
  { method: "setLoop(v)", param: "boolean", return: "void", explain: "Sets loop." },
  { method: "isPauseOnHover()", param: "-", return: "boolean", explain: "Whether hover pauses autoplay." },
  { method: "setPauseOnHover(v)", param: "boolean", return: "void", explain: "Sets hover pause behavior." },
  { method: "startAuto()", param: "-", return: "void", explain: "Starts autoplay (interval ≥ 100ms)." },
  { method: "stopAuto()", param: "-", return: "void", explain: "Stops autoplay." },
  { method: "getTransitionMs()", param: "-", return: "number", explain: "Gets slide transition duration (ms)." },
  { method: "setTransitionMs(ms)", param: "number", return: "void", explain: "Sets slide transition duration (ms)." },
  { method: "reload()", param: "-", return: "void", explain: "Reloads the instance (re-applies props/state)." },
  { method: "getId()", param: "-", return: "string", explain: "Returns the component's unique ID." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '12%' },
  { id: 'type', header: 'type', dataType: 'text', width: '33%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '14%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '41%' },
  { id: 'args', header: 'args', dataType: 'text', width: '45%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '20%' },
  { id: 'param', header: 'param', dataType: 'text', width: '20%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]
const mountMethodGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? methodGridDataEn : methodGridDataKo)
}

const contents = props.lang === 'en' ? en : ko
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HBanner
      id="bn-demo"
      class="hison-col-12 hison-size-s"
      :initialIndex="0"
      :transitionMs="350"
      :showNavButtons="true"
      :showIndicators="true"
      :autoIntervalMs="0"
      indicatorsPosition="bottom"
      style="margin-bottom: 10px;"
    >
      <HLayout class="hison-col-6">Demo Slide A</HLayout>
      <HLayout class="hison-col-6">Demo Slide B</HLayout>
      <HLayout class="hison-col-6">Demo Slide C</HLayout>
    </HBanner>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050"/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="bannerSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-s"
      :height="'160px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="bannerPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-s"
      :height="'520px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="bannerEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-s"
      :height="'260px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="bannerMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-s"
      :height="'620px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>