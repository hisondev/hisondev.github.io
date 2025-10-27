<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HButton(버튼) 컴포넌트입니다.

HButton은 반응형 테마 클래스와 다양한 프롭/메서드를 통해 스타일, 상태, 동작을 유연하게 제어할 수 있는 고급 버튼입니다.
더블클릭 방지(펜딩락), 물리적 클릭 간격 제한(clickInterval), 배경 타입 전환(backgroundType), 가시성/비활성 제어, 툴팁(title), 아이콘 슬롯 등을 지원하며, 런타임 메서드(hison.component.getButton)로 동적으로 변경할 수 있습니다.`,
  t1010: `이것은 HButton 라이브 데모입니다.`,
  t1030:
`주요 특징

· 테마/반응형 클래스(hison-size-*, hison-color-*, …)
· backgroundType: 'filled'(기본) / 'empty' / 'transparent' — 프롭/메서드로 전환
· 더블클릭 자동 방지(핸들러 실행 중 잠금), 수동 해제 unlock() 제공
· 물리적 클릭 간격 제한 clickInterval(ms) 지원
· 표시/비표시(visible), 비활성(disable) 동적 제어
· 기본 슬롯 및 text 프롭 동시 지원(기본 슬롯이 있으면 text 무시)
· #icon 슬롯으로 아이콘/프리픽스 요소 추가
· title(툴팁) 프롭/메서드 지원
· 모든 DOM 이벤트에서 HButtonMethods를 함께 전달(@click="(_, btn) => …")
· 디바이스 반응형 리로드(@responsive-change)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<!-- 텍스트 기반 + 배경/간격 제어 -->
<HButton
  id="btn01"
  class="hison-col-6 hison-color-primary"
  text="Click Me"
  title="Tooltip text"
  background-type="empty"
  :click-interval="500"
  :disable="false"
  :visible="true"
  @click="async (_, btn) => {
    await doSomething()
    btn.unlock()
  }}"
/>

<!-- 기본 슬롯 사용 -->
<HButton id="btn02"><strong>Custom Slot</strong></HButton>

<!-- 아이콘 슬롯 사용 -->
<HButton id="btn03" text="Download">
  <template #icon>
    <i class="fa fa-download" style="margin-right: 4px" />
  </template>
</HButton>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const btn = hison.component.getButton('btn01')
btn.setText('Updated')
btn.setDisable(true)
btn.setVisible(false)
btn.setTitle('Updated tooltip')
btn.setBackgroundType('transparent')
btn.setClickInterval(1000)
btn.unlock()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HButton component.

HButton is a highly customizable and responsive button with rich props/methods for styling, state, and behavior.
It supports double-click prevention (pending lock), physical click interval limiting (clickInterval), background type switching (backgroundType), visibility/disabled control, tooltip (title), an icon slot, and full runtime control via hison.component.getButton.`,
  t1010: `This is the HButton live demo.`,
  t1030:
`Main Features

· Theme/responsive classes (hison-size-*, hison-color-*, …)
· backgroundType: 'filled' (default) / 'empty' / 'transparent' — switch via prop/methods
· Automatic double-click prevention (pending lock) + manual unlock()
· Physical click interval limiting via clickInterval (ms)
· Dynamic visibility (visible) and disabled (disable) control
· Supports both default slot and text prop (slot overrides text)
· #icon slot for a prefix icon/element
· Tooltip via title prop/method
· Emits HButtonMethods alongside DOM events (@click="(_, btn) => …")
· Device-aware responsive reload (@responsive-change)`,
  t1040: `Template Example`,
  c1040:
`<!-- Text-based + background/interval control -->
<HButton
  id="btn01"
  class="hison-col-6 hison-color-primary"
  text="Click Me"
  title="Tooltip text"
  background-type="empty"
  :click-interval="500"
  :disable="false"
  :visible="true"
  @click="async (_, btn) => {
    await doSomething()
    btn.unlock()
  }}"
/>

<!-- Default slot -->
<HButton id="btn02"><strong>Custom Slot</strong></HButton>

<!-- With icon slot -->
<HButton id="btn03" text="Download">
  <template #icon>
    <i class="fa fa-download" style="margin-right: 4px" />
  </template>
</HButton>`,
  t1050: `Runtime Example`,
  c1050:
`const btn = hison.component.getButton('btn01')
btn.setText('Updated')
btn.setDisable(true)
btn.setVisible(false)
btn.setTitle('Updated tooltip')
btn.setBackgroundType('transparent')
btn.setClickInterval(1000)
btn.unlock()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "버튼 내부 기본 콘텐츠. 존재하면 text 프롭보다 우선합니다." },
  { slot: "#icon",  explain: "버튼 라벨 앞에 아이콘/요소를 프리픽스로 렌더링합니다." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getButton(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "추가/반응형 클래스(hison-*) 지원." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "인라인 스타일." },

  { prop: "visible", type: "boolean", default: "true", explain: "버튼 표시 여부." },
  { prop: "disable", type: "boolean", default: "false", explain: "버튼 비활성 여부." },
  { prop: "text", type: "string", default: "undefined", explain: "기본 슬롯이 없을 때 라벨 텍스트로 사용." },
  { prop: "title", type: "string", default: "undefined", explain: "툴팁 텍스트." },
  { prop: "border", type: "boolean", default: "true", explain: "보더(박스섀도) 표시 여부." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'filled'", explain: "배경 타입. 메서드로도 변경 가능." },
  { prop: "clickInterval", type: "number", default: "0", explain: "물리적 클릭 최소 간격(ms). 0이면 제한 없음." },
  { prop: "tabIndex", type: "number | string | null", default: "null", explain: "탭 포커스 순서. null이면 포커스 불가." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 직후", args: "(HButtonMethods)" },
  { event: "click", trigger: "클릭 시", args: "(MouseEvent, HButtonMethods)" },
  { event: "mousedown", trigger: "마우스 버튼 누름", args: "(MouseEvent, HButtonMethods)" },
  { event: "mouseup", trigger: "마우스 버튼 뗌", args: "(MouseEvent, HButtonMethods)" },
  { event: "mouseover", trigger: "마우스 오버", args: "(MouseEvent, HButtonMethods)" },
  { event: "mouseout", trigger: "마우스 아웃", args: "(MouseEvent, HButtonMethods)" },
  { event: "responsive-change", trigger: "디바이스 타입 변경 시", args: "('mb' | 'tb' | 'pc' | 'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'button'", explain: "컴포넌트 타입 리터럴('button')." },
  { method: "getText()", param: "-", return: "string", explain: "현재 텍스트. 슬롯을 사용하면 빈 문자열." },
  { method: "getTitle()", param: "-", return: "string", explain: "현재 툴팁(title) 값." },
  { method: "isDisable()", param: "-", return: "boolean", explain: "현재 비활성 여부." },
  { method: "setText(text)", param: "string", return: "void", explain: "텍스트 설정(슬롯 사용 시 효과 없음)." },
  { method: "setTitle(title)", param: "string", return: "void", explain: "툴팁 텍스트 설정." },
  { method: "setDisable(disable)", param: "boolean", return: "void", explain: "비활성/활성 전환." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 표시 여부." },
  { method: "setBorder(border)", param: "boolean", return: "void", explain: "보더 표시/숨김." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "현재 배경 타입 조회." },
  { method: "setBackgroundType(type)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "배경 타입 전환." },
  { method: "unlock()", param: "-", return: "void", explain: "펜딩락(더블클릭 방지) 수동 해제." },
  { method: "getClickInterval()", param: "-", return: "number", explain: "클릭 최소 간격(ms) 조회." },
  { method: "setClickInterval(ms)", param: "number", return: "void", explain: "클릭 최소 간격(ms) 설정." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "tabIndex 조회(null이면 포커스 불가)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "tabIndex 설정(null은 제거)." },
  { method: "focus()", param: "-", return: "void", explain: "버튼에 포커스 이동." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "현재 표시 여부(컴포넌트 공통)." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "표시/숨김(컴포넌트 공통)." },
  { method: "getId()", param: "-", return: "string", explain: "고유 ID 반환(컴포넌트 공통)." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더(컴포넌트 공통)." },
]

const slotGridDataEn = [
  { slot: "default", explain: "Default button content. Overrides the text prop when present." },
  { slot: "#icon",  explain: "Prefix icon/element rendered before the label." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getButton(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Additional/responsive classes (hison-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline CSS style." },

  { prop: "visible", type: "boolean", default: "true", explain: "Whether the button is shown." },
  { prop: "disable", type: "boolean", default: "false", explain: "Whether the button is disabled." },
  { prop: "text", type: "string", default: "undefined", explain: "Fallback label when no default slot is provided." },
  { prop: "title", type: "string", default: "undefined", explain: "Tooltip text." },
  { prop: "border", type: "boolean", default: "true", explain: "Show border/box-shadow." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'filled'", explain: "Background style. Also changeable via methods." },
  { prop: "clickInterval", type: "number", default: "0", explain: "Minimum interval (ms) between allowed clicks." },
  { prop: "tabIndex", type: "number | string | null", default: "null", explain: "Tab focus order. null = not focusable." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "After mounting.", args: "(HButtonMethods)" },
  { event: "click", trigger: "On click.", args: "(MouseEvent, HButtonMethods)" },
  { event: "mousedown", trigger: "On mousedown.", args: "(MouseEvent, HButtonMethods)" },
  { event: "mouseup", trigger: "On mouseup.", args: "(MouseEvent, HButtonMethods)" },
  { event: "mouseover", trigger: "On mouseover.", args: "(MouseEvent, HButtonMethods)" },
  { event: "mouseout", trigger: "On mouseout.", args: "(MouseEvent, HButtonMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb' | 'tb' | 'pc' | 'wd')" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'button'", explain: "Returns the component type literal ('button')." },
  { method: "getText()", param: "-", return: "string", explain: "Current text. Empty string when using a slot." },
  { method: "getTitle()", param: "-", return: "string", explain: "Current tooltip (title)." },
  { method: "isDisable()", param: "-", return: "boolean", explain: "Whether the button is disabled." },
  { method: "setText(text)", param: "string", return: "void", explain: "Sets text (no effect if slot is used)." },
  { method: "setTitle(title)", param: "string", return: "void", explain: "Sets tooltip text." },
  { method: "setDisable(disable)", param: "boolean", return: "void", explain: "Enables/disables the button." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether border is displayed." },
  { method: "setBorder(border)", param: "boolean", return: "void", explain: "Shows/hides border." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Gets current background type." },
  { method: "setBackgroundType(type)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "Changes background type." },
  { method: "unlock()", param: "-", return: "void", explain: "Manually releases the pending (locked) state." },
  { method: "getClickInterval()", param: "-", return: "number", explain: "Gets minimum click interval (ms)." },
  { method: "setClickInterval(ms)", param: "number", return: "void", explain: "Sets minimum click interval (ms)." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Gets tabindex (null = not focusable)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Sets tabindex (null removes focusability)." },
  { method: "focus()", param: "-", return: "void", explain: "Focuses the button." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether the component is visible (common)." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "Shows/hides the component (common)." },
  { method: "getId()", param: "-", return: "string", explain: "Returns the unique ID (common)." },
  { method: "reload()", param: "-", return: "void", explain: "Forces re-render (common)." },
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
  { id: 'event', header: 'event', dataType: 'text', width: '15%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '35%' },
  { id: 'args', header: 'args', dataType: 'text', width: '50%' },
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
    <HButton
      id="btn-demo"
      text="Click Me"
      title="This is demo button"
    >
      <template #icon>🔔</template>
    </HButton>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="buttonSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'100px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="buttonPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'300px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="buttonEventGrid"
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
      id="buttonMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'600px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>