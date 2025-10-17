<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HCaption(캡션/헤딩) 컴포넌트입니다.

HCaption은 실제 <h1>~<h6> 태그로 렌더링되는 시맨틱 헤딩으로, 반응형/테마 스타일, 폰트 토글, 정렬, 배경 타입, 보더 등을 지원합니다.
기본 슬롯이 **순수 텍스트**면 내부 텍스트 상태로 흡수되어 getText/setText 제어가 가능하며, **요소VNode가 하나라도** 있으면 슬롯이 우선되고 텍스트 제어는 비활성화됩니다.`,
  t1010: `이것은 HCaption 라이브 데모입니다.`,
  t1030:
`주요 특징

· level 프롭으로 실제 <h1>~<h6> 태그 출력
· 반응형 클래스(hison-size-*, hison-color-*, …)
· 텍스트 제어: text 프롭 또는 순수 텍스트 슬롯 흡수(getText/setText)
· 요소를 포함한 슬롯 사용 시 텍스트 제어 비활성
· 폰트 토글: fontBold / fontItalic / fontThruline / fontUnderline
· 보더 토글(border), 배경 타입(backgroundType: 'empty'|'filled'|'transparent')
· 정렬(textAlign: 'left'|'center'|'right'), title(툴팁) 지원
· 런타임 메서드: hison.component.getCaption(id)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<!-- 단순 캡션 -->
<HCaption
  id="cp1"
  class="hison-col-12 hison-size-l hison-color-primary"
  text="Main Title"
  :level="1"
/>

<!-- 요소 슬롯: 텍스트 제어 비활성 -->
<HCaption id="cp2" :level="2">
  <strong>Highlighted</strong> Section
</HCaption>

<!-- 순수 텍스트 슬롯: text 프롭처럼 제어 가능 -->
<HCaption id="cp3" :level="3">Section Title</HCaption>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const cp = hison.component.getCaption('cp1')
cp.setLevel(2)
cp.setText('Updated Title')
cp.setTextAlign('center')
cp.setFontBold(true)
cp.setBorder(true)
cp.setBackgroundType('transparent')`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HCaption (heading) component.

HCaption renders as real <h1>–<h6> tags with theme-aware styling, responsive behavior, font toggles, alignment, background type, and border.
If the default slot is **pure text**, it is absorbed and becomes controllable via getText/setText.
If the slot contains **any element vnode**, slot content takes precedence and text control is disabled.`,
  t1010: `This is the HCaption live demo.`,
  t1030:
`Main Features

· Renders real <h1>–<h6> via the level prop
· Responsive classes (hison-size-*, hison-color-*, …)
· Text control: text prop or pure-text slot absorption (getText/setText)
· Element-slot disables text control
· Font toggles: fontBold / fontItalic / fontThruline / fontUnderline
· Border toggle and backgroundType: 'empty' | 'filled' | 'transparent'
· Alignment (textAlign: 'left'|'center'|'right'), tooltip (title)
· Runtime API: hison.component.getCaption(id)`,
  t1040: `Template Example`,
  c1040:
`<!-- Simple caption -->
<HCaption
  id="cp1"
  class="hison-col-12 hison-size-l hison-color-primary"
  text="Main Title"
  :level="1"
/>

<!-- Element slot: disables text control -->
<HCaption id="cp2" :level="2">
  <strong>Highlighted</strong> Section
</HCaption>

<!-- Pure text slot: controllable like text prop -->
<HCaption id="cp3" :level="3">Section Title</HCaption>`,
  t1050: `Runtime Example`,
  c1050:
`const cp = hison.component.getCaption('cp1')
cp.setLevel(2)
cp.setText('Updated Title')
cp.setTextAlign('center')
cp.setFontBold(true)
cp.setBorder(true)
cp.setBackgroundType('transparent')`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "기본 콘텐츠 슬롯. 순수 텍스트만 있으면 내부 텍스트로 흡수되어 getText/setText가 가능. 요소가 포함되면 슬롯 우선." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getCaption(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "추가/반응형 클래스(hison-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "인라인 스타일." },

  { prop: "visible", type: "boolean", default: "true", explain: "표시 여부." },
  { prop: "text", type: "string", default: "undefined", explain: "슬롯이 없거나 순수 텍스트 슬롯일 때 사용되는 텍스트." },
  { prop: "title", type: "string", default: "undefined", explain: "툴팁 텍스트." },
  { prop: "level", type: "1|2|3|4|5|6", default: "3", explain: "헤딩 레벨(<h1>~<h6> 매핑)." },
  { prop: "textAlign", type: "'left'|'center'|'right'", default: "'left'", explain: "텍스트 정렬." },
  { prop: "border", type: "boolean", default: "false", explain: "보더(박스섀도) 표시." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "배경 타입." },
  { prop: "fontBold", type: "boolean", default: "true", explain: "볼드 스타일." },
  { prop: "fontItalic", type: "boolean", default: "false", explain: "이탤릭 스타일." },
  { prop: "fontThruline", type: "boolean", default: "false", explain: "취소선 스타일." },
  { prop: "fontUnderline", type: "boolean", default: "false", explain: "밑줄 스타일." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 직후", args: "(HCaptionMethods)" },
  { event: "click", trigger: "클릭", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mousedown", trigger: "마우스 버튼 누름", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mouseup", trigger: "마우스 버튼 뗌", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mouseover", trigger: "마우스 오버", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mouseout", trigger: "마우스 아웃", args: "(MouseEvent, HCaptionMethods)" },
  { event: "responsive-change", trigger: "디바이스 타입 변경", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'caption'", explain: "컴포넌트 타입 리터럴('caption')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "표시/숨김 전환." },
  { method: "getTitle()", param: "-", return: "string", explain: "툴팁(title) 조회." },
  { method: "setTitle(title)", param: "string", return: "void", explain: "툴팁(title) 설정." },
  { method: "getText()", param: "-", return: "string", explain: "텍스트 조회(요소 슬롯이면 빈 문자열)." },
  { method: "setText(text)", param: "string", return: "void", explain: "텍스트 설정(요소 슬롯이면 효과 없음)." },
  { method: "getLevel()", param: "-", return: "number", explain: "현재 헤딩 레벨(1~6)." },
  { method: "setLevel(level)", param: "number", return: "void", explain: "헤딩 레벨 설정(1~6, 범위 외 클램프)." },
  { method: "getTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "정렬 조회." },
  { method: "setTextAlign(textAlign)", param: "'left'|'center'|'right'", return: "void", explain: "정렬 설정." },
  { method: "isFontBold()", param: "-", return: "boolean", explain: "볼드 여부." },
  { method: "setFontBold(bold)", param: "boolean", return: "void", explain: "볼드 적용/해제." },
  { method: "isFontItalic()", param: "-", return: "boolean", explain: "이탤릭 여부." },
  { method: "setFontItalic(italic)", param: "boolean", return: "void", explain: "이탤릭 적용/해제." },
  { method: "isFontThruline()", param: "-", return: "boolean", explain: "취소선 여부." },
  { method: "setFontThruline(thruline)", param: "boolean", return: "void", explain: "취소선 적용/해제." },
  { method: "isFontUnderline()", param: "-", return: "boolean", explain: "밑줄 여부." },
  { method: "setFontUnderline(underline)", param: "boolean", return: "void", explain: "밑줄 적용/해제." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 표시 여부." },
  { method: "setBorder(border)", param: "boolean", return: "void", explain: "보더 표시/숨김." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "배경 타입 조회." },
  { method: "setBackgroundType(type)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "배경 타입 설정." },
  { method: "getId()", param: "-", return: "string", explain: "고유 ID(공통)." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더(공통)." },
]

const slotGridDataEn = [
  { slot: "default", explain: "Default content. Pure text is absorbed (getText/setText). Any element vnode disables text control." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getCaption(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Additional/responsive classes (hison-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline CSS style." },

  { prop: "visible", type: "boolean", default: "true", explain: "Whether the caption is shown." },
  { prop: "text", type: "string", default: "undefined", explain: "Used when no slot or pure-text slot is provided." },
  { prop: "title", type: "string", default: "undefined", explain: "Tooltip text." },
  { prop: "level", type: "1|2|3|4|5|6", default: "3", explain: "Heading level (<h1>–<h6> mapping)." },
  { prop: "textAlign", type: "'left'|'center'|'right'", default: "'left'", explain: "Text alignment." },
  { prop: "border", type: "boolean", default: "false", explain: "Show border/box-shadow." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "Background style." },
  { prop: "fontBold", type: "boolean", default: "true", explain: "Bold style." },
  { prop: "fontItalic", type: "boolean", default: "false", explain: "Italic style." },
  { prop: "fontThruline", type: "boolean", default: "false", explain: "Strikethrough style." },
  { prop: "fontUnderline", type: "boolean", default: "false", explain: "Underline style." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "After mounting.", args: "(HCaptionMethods)" },
  { event: "click", trigger: "On click.", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mousedown", trigger: "On mousedown.", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mouseup", trigger: "On mouseup.", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mouseover", trigger: "On mouseover.", args: "(MouseEvent, HCaptionMethods)" },
  { event: "mouseout", trigger: "On mouseout.", args: "(MouseEvent, HCaptionMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'caption'", explain: "Returns the component type literal ('caption')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether the caption is visible." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "Shows/hides the caption." },
  { method: "getTitle()", param: "-", return: "string", explain: "Gets tooltip (title)." },
  { method: "setTitle(title)", param: "string", return: "void", explain: "Sets tooltip (title)." },
  { method: "getText()", param: "-", return: "string", explain: "Gets text (empty if element slot is used)." },
  { method: "setText(text)", param: "string", return: "void", explain: "Sets text (no effect with element slot)." },
  { method: "getLevel()", param: "-", return: "number", explain: "Gets current heading level (1–6)." },
  { method: "setLevel(level)", param: "number", return: "void", explain: "Sets heading level (clamped 1–6)." },
  { method: "getTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "Gets alignment." },
  { method: "setTextAlign(textAlign)", param: "'left'|'center'|'right'", return: "void", explain: "Sets alignment." },
  { method: "isFontBold()", param: "-", return: "boolean", explain: "Bold state." },
  { method: "setFontBold(bold)", param: "boolean", return: "void", explain: "Toggle bold." },
  { method: "isFontItalic()", param: "-", return: "boolean", explain: "Italic state." },
  { method: "setFontItalic(italic)", param: "boolean", return: "void", explain: "Toggle italic." },
  { method: "isFontThruline()", param: "-", return: "boolean", explain: "Strikethrough state." },
  { method: "setFontThruline(thruline)", param: "boolean", return: "void", explain: "Toggle strikethrough." },
  { method: "isFontUnderline()", param: "-", return: "boolean", explain: "Underline state." },
  { method: "setFontUnderline(underline)", param: "boolean", return: "void", explain: "Toggle underline." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Border state." },
  { method: "setBorder(border)", param: "boolean", return: "void", explain: "Toggle border." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Gets background type." },
  { method: "setBackgroundType(type)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "Sets background type." },
  { method: "getId()", param: "-", return: "string", explain: "Returns unique ID (common)." },
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
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '42%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '16%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '44%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '22%' },
  { id: 'param', header: 'param', dataType: 'text', width: '23%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
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
    <HCaption
      id="cp-demo"
      class="hison-col-12 hison-size-m hison-color-primary"
      :level="3"
      :border="false"
      :fontBold="true"
      :fontItalic="false"
      :fontThruline="false"
      :fontUnderline="false"
      text="Demo Caption"
      style="margin-bottom: 10px;"
    />
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050"/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="captionSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-s"
      :height="'120px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="captionPropGrid"
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
      id="captionEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-s"
      :height="'220px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="captionMethodGrid"
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