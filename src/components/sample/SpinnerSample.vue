<!-- SpinnerSample.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'
import { hison, type HGridColumn, type HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* =======================
 * i18n contents
 * ======================= */
const ko = {
  t1000:
`하단은 HSpinner(로딩 스피너) 컴포넌트입니다.

HSpinner는 고정 위치의 블로킹 로더로, 오버레이/스크롤락을 항상 강제하며
위치, z-index, 자동 숨김(timeout), 스피너 타입 교체, 커스텀 슬롯을 제공합니다.`,
  t1010: `이것은 HSpinner 라이브 데모입니다. (자동으로 2초 후 사라집니다)`,
  t1030:
`주요 특징

· 화면 고정 위치('top-left' ~ 'bottom-right')
· 오버레이 + 스크롤 락 항상 강제(표시 중)
· 기본 스피너 타입: ring / dots / bars / pulse
· 커스텀 #spinner 슬롯으로 완전 교체 가능
· hison-* 반응형 클래스 및 런타임 API(HSpinnerMethods)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HSpinner
  id="spinner01"
  class="hison-size-m hison-color-primary"
  :visible="false"
  :zIndex="1500"
  position="middle-center"
  :timeoutMs="5000"
  spinnerType="ring"
  :overlayStyle="{ background: 'rgba(0,0,0,0.4)' }"
  @open="onOpen"
  @close="onClose"
  @toggle="onToggle"
  @responsive-change="onDevice"
/>

<!-- custom spinner -->
<HSpinner id="spinnerCustom" :visible="true" :timeoutMs="1500">
  <template #spinner="{ spinnerEl }">
    <svg :ref="spinnerEl" width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="4"
              stroke-linecap="round" stroke-dasharray="80 40">
        <animateTransform attributeName="transform" type="rotate"
                          from="0 20 20" to="360 20 20"
                          dur="1.2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </template>
</HSpinner>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const spinner = hison.component.getSpinner('spinner01')
spinner.open()
spinner.setSpinnerType('dots')
spinner.setPosition('bottom-right')
spinner.setZIndex(9999)
spinner.setTimeout(3000)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HSpinner (loading spinner) component.

HSpinner is a fixed-position blocking loader that always enforces overlay & scroll lock,
with precise positioning, z-index control, timeout auto-hide, built-in types, and a custom slot.`,
  t1010: `This is the HSpinner live demo. (It auto-hides after 2s)`,
  t1030:
`Main Features

· Fixed screen positions ('top-left' .. 'bottom-right')
· Overlay + scroll lock always enforced while visible
· Built-in types: ring / dots / bars / pulse
· Fully replaceable via #spinner slot
· Responsive hison-* utilities and full runtime API (HSpinnerMethods)`,
  t1040: `Template Example`,
  c1040:
`<HSpinner
  id="spinner01"
  class="hison-size-m hison-color-primary"
  :visible="false"
  :zIndex="1500"
  position="middle-center"
  :timeoutMs="5000"
  spinnerType="ring"
  :overlayStyle="{ background: 'rgba(0,0,0,0.4)' }"
  @open="onOpen"
  @close="onClose"
  @toggle="onToggle"
  @responsive-change="onDevice"
/>

<!-- custom spinner -->
<HSpinner id="spinnerCustom" :visible="true" :timeoutMs="1500">
  <template #spinner="{ spinnerEl }">
    <svg :ref="spinnerEl" width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="4"
              stroke-linecap="round" stroke-dasharray="80 40">
        <animateTransform attributeName="transform" type="rotate"
                          from="0 20 20" to="360 20 20"
                          dur="1.2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </template>
</HSpinner>`,
  t1050: `Runtime Example`,
  c1050:
`const spinner = hison.component.getSpinner('spinner01')
spinner.open()
spinner.setSpinnerType('dots')
spinner.setPosition('bottom-right')
spinner.setZIndex(9999)
spinner.setTimeout(3000)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

/* slots */
const slotGridDataKo = [
  { slot: "spinner", explain: "기본 스피너를 완전히 대체. Scoped: { spinnerEl, spinner, type }" },
]
const slotGridDataEn = [
  { slot: "spinner", explain: "Fully replace the spinner. Scoped: { spinnerEl, spinner, type }." },
]

/* props */
const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 ID. hison.component.getSpinner(id) 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/컬러/사이즈 등 hison-* 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "컨테이너 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "false", explain: "초기 표시(마운트 이후에는 메서드로 제어)." },
  { prop: "zIndex", type: "number", default: "1500", explain: "스피너 z-index(오버레이는 zIndex-1)." },
  { prop: "position", type: "'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'", default: "'middle-center'", explain: "화면 고정 위치." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "오버레이 인라인 스타일(zIndex-1 병합)." },
  { prop: "timeoutMs", type: "number", default: "0", explain: "자동 숨김(ms). 0은 비활성." },
  { prop: "spinnerType", type: "'ring'|'dots'|'bars'|'pulse'", default: "'ring'", explain: "내장 스피너 타입(#spinner 슬롯 사용 시 무시)." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getSpinner(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive hison-* utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Container inline style." },
  { prop: "visible", type: "boolean", default: "false", explain: "Initial visibility (after mount use methods)." },
  { prop: "zIndex", type: "number", default: "1500", explain: "Spinner z-index (overlay uses zIndex - 1)." },
  { prop: "position", type: "'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'", default: "'middle-center'", explain: "Fixed screen position." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Overlay inline style (merged with zIndex-1)." },
  { prop: "timeoutMs", type: "number", default: "0", explain: "Auto-hide timeout in ms. 0 disables." },
  { prop: "spinnerType", type: "'ring'|'dots'|'bars'|'pulse'", default: "'ring'", explain: "Built-in spinner type (ignored if #spinner used)." },
]

/* events */
const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 시", args: "(HSpinnerMethods)" },
  { event: "open", trigger: "열릴 때", args: "-" },
  { event: "close", trigger: "닫힐 때", args: "-" },
  { event: "toggle", trigger: "열림/닫힘 토글 시", args: "-" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HSpinnerMethods)" },
  { event: "open", trigger: "When the spinner opens.", args: "-" },
  { event: "close", trigger: "When the spinner closes.", args: "-" },
  { event: "toggle", trigger: "When spinner is toggled.", args: "-" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

/* methods */
const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'spinner'", explain: "컴포넌트 타입 리터럴." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "열기(오버레이/스크롤락 포함)." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "닫기(락 해제)." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "토글." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "표시/숨김 설정." },
  { method: "getZIndex()", param: "-", return: "number", explain: "z-index 조회." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "z-index 설정." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "위치 조회." },
  { method: "setPosition(v)", param: "ScreenPosition", return: "void", explain: "위치 설정." },
  { method: "getTimeout()", param: "-", return: "number", explain: "자동 숨김(ms) 조회(0=비활성)." },
  { method: "setTimeout(ms)", param: "number", return: "void", explain: "자동 숨김(ms) 설정." },
  { method: "getSpinnerType()", param: "-", return: "'ring'|'dots'|'bars'|'pulse'", explain: "스피너 타입 조회." },
  { method: "setSpinnerType(t)", param: "'ring'|'dots'|'bars'|'pulse'", return: "void", explain: "스피너 타입 설정." },
  { method: "getOverlayStyle()", param: "-", return: "any", explain: "오버레이 스타일 조회." },
  { method: "setOverlayStyle(s)", param: "any", return: "void", explain: "오버레이 스타일 설정." },
  { method: "reload()", param: "-", return: "void", explain: "인스턴스 리로드/재등록." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'spinner'", explain: "Component type literal." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Visibility state." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "Open (with overlay & scroll lock)." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "Close (release lock)." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "Toggle open/close." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "Set visibility." },
  { method: "getZIndex()", param: "-", return: "number", explain: "Get z-index." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "Set z-index." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "Get position." },
  { method: "setPosition(v)", param: "ScreenPosition", return: "void", explain: "Set position." },
  { method: "getTimeout()", param: "-", return: "number", explain: "Get auto-hide(ms) (0=off)." },
  { method: "setTimeout(ms)", param: "number", return: "void", explain: "Set auto-hide(ms)." },
  { method: "getSpinnerType()", param: "-", return: "'ring'|'dots'|'bars'|'pulse'", explain: "Get spinner type." },
  { method: "setSpinnerType(t)", param: "'ring'|'dots'|'bars'|'pulse'", return: "void", explain: "Set spinner type." },
  { method: "getOverlayStyle()", param: "-", return: "any", explain: "Get overlay style." },
  { method: "setOverlayStyle(s)", param: "any", return: "void", explain: "Set overlay style." },
  { method: "reload()", param: "-", return: "void", explain: "Reload / re-register instance." },
]

/* columns & loaders */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '50%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '25%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '20%' },
  { id: 'param', header: 'param', dataType: 'text', width: '20%' },
  { id: 'return', header: 'return', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}
const mountMethodGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? methodGridDataEn : methodGridDataKo)
}

const contents = props.lang === 'en' ? en : ko

function openRing() {
  const spinner = hison.component.getSpinner('spinner-ring')!
  spinner.open()
}
function openBars() {
  const spinner = hison.component.getSpinner('spinner-bars')!
  spinner.open()
}
function openDots() {
  const spinner = hison.component.getSpinner('spinner-dots')!
  spinner.open()
}
function openPulse() {
  const spinner = hison.component.getSpinner('spinner-pulse')!
  spinner.open()
}
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>

    <HGap/>
    <!-- Live Demo (auto-hide quickly so it doesn't block the page for long) -->
    <HButton :text="props.lang === 'en' ? 'Open ring spinner' : 'ring 스피너 열기'" @click="openRing" />
    <HButton :text="props.lang === 'en' ? 'Open bars spinner' : 'bars 스피너 열기'" @click="openBars" />
    <HButton :text="props.lang === 'en' ? 'Open dots spinner' : 'dots 스피너 열기'" @click="openDots" />
    <HButton :text="props.lang === 'en' ? 'Open pulse spinner' : 'pulse 스피너 열기'" @click="openPulse" />
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HSpinner
      id="spinner-ring"
      position="middle-center"
      :timeoutMs="2000"
      :spinnerType="'ring'"
    />
    <HSpinner
      id="spinner-bars"
      class="hison-color-danger"
      position="middle-center"
      :timeoutMs="2000"
      :spinnerType="'bars'"
    />
    <HSpinner
      id="spinner-dots"
      class="hison-color-warning"
      position="middle-center"
      :timeoutMs="2000"
      :spinnerType="'dots'"
    />
    <HSpinner
      id="spinner-pulse"
      class="hison-color-success"
      position="middle-center"
      :timeoutMs="2000"
      :spinnerType="'pulse'"
    />

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>

    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>

    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="spinnerSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'80px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="spinnerPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'280px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="spinnerEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'200px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="spinnerMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'500px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>