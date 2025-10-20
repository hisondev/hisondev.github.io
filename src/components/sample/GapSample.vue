<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HGap(여백/구분선) 컴포넌트입니다.

HGap은 레이아웃에 수직/수평 간격을 추가하는 경량 유틸리티입니다.
빈 여백, 가로/세로 구분선, 테마 컬러/배경/보더 및 런타임 제어를 지원합니다.`,
  t1010: `간단한 라이브 데모`,
  t1030:
`주요 특징

· hison-size-* (s/m/l/xl)로 높이 스케일 사용
· hison-col-* (1~12)로 너비 제어(기본 12)
· line 모드: none / horizontal / vertical
· lineStyle/lineWidth/lineColor로 구분선 스타일링
· 테마 컬러(hison-color-*)/배경/보더 및 런타임 제어`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<!-- 빈 여백 -->
<HGap id="gap01" class="hison-col-12 hison-size-m" />

<!-- 테마 컬러 가로 구분선 -->
<HGap
  id="gap02"
  class="hison-col-12 hison-color-primary"
  line="horizontal"
  :line-width="1"
  line-style="dashed"
/>

<!-- 한 줄 안에서 세로 구분선 -->
<div class="hison-layout">
  <HButton text="Left" />
  <HGap id="gap03" class="hison-col-1 hison-color-muted" line="vertical" />
  <HButton text="Right" />
</div>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const gap = hison.component.getGap('gap02')
gap.setLine('vertical')
gap.setLineStyle('dotted')
gap.setLineWidth(3)
gap.setLineColor('#ff0000')
gap.setBackgroundType('filled')
gap.setBorder(true)
gap.setVisible(false)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HGap (spacing/divider) component.

HGap is a lightweight utility for adding vertical or horizontal spacing.
It supports empty gaps, horizontal/vertical dividers, theme-aware colors, and full runtime control.`,
  t1010: `Live demo`,
  t1030:
`Main Features

· Height scale via hison-size-* (s/m/l/xl)
· Width control via hison-col-* (1~12, default 12)
· Line modes: none / horizontal / vertical
· Style the divider via lineStyle/lineWidth/lineColor
· Theme/background/border + runtime API`,
  t1040: `Template Example`,
  c1040:
`<!-- Empty gap -->
<HGap id="gap01" class="hison-col-12 hison-size-m" />

<!-- Horizontal divider with theme color -->
<HGap
  id="gap02"
  class="hison-col-12 hison-color-primary"
  line="horizontal"
  :line-width="1"
  line-style="dashed"
/>

<!-- Vertical divider inside a row -->
<div class="hison-layout">
  <HButton text="Left" />
  <HGap id="gap03" class="hison-col-1 hison-color-muted" line="vertical" />
  <HButton text="Right" />
</div>`,
  t1050: `Runtime Example`,
  c1050:
`const gap = hison.component.getGap('gap02')
gap.setLine('vertical')
gap.setLineStyle('dotted')
gap.setLineWidth(3)
gap.setLineColor('#ff0000')
gap.setBackgroundType('filled')
gap.setBorder(true)
gap.setVisible(false)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "사용되지 않습니다. (예약됨)" },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getGap(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "hison-size-*, hison-color-*, hison-col-* 지원." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 요소 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시 여부." },
  { prop: "border", type: "boolean", default: "false", explain: "보더(섀도) 표시 여부." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "배경 스타일." },
  { prop: "line", type: "'none'|'horizontal'|'vertical'", default: "'none'", explain: "그리기 규칙." },
  { prop: "lineStyle", type: "HGapLineStyleValue", default: "'solid'", explain: "구분선 스타일(solid/dashed/dotted/double 등)." },
  { prop: "lineWidth", type: "number|string", default: "1", explain: "구분선 두께. number→px, string→CSS 단위." },
  { prop: "lineColor", type: "string", default: "''", explain: "구분선 색상. 빈 문자열이면 테마 자동." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 이후 호출", args: "(HGapMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'gap'", explain: "컴포넌트 타입 리터럴('gap')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김 설정." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "보더 표시/해제." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "배경 타입 조회." },
  { method: "setBackgroundType(type)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "배경 타입 설정." },
  { method: "getLine()", param: "-", return: "'none'|'horizontal'|'vertical'", explain: "라인 모드 조회." },
  { method: "setLine(line)", param: "HGapLine | HGapLineValue", return: "void", explain: "라인 모드 설정." },
  { method: "getLineStyle()", param: "-", return: "HGapLineStyleValue", explain: "라인 스타일 조회." },
  { method: "setLineStyle(style)", param: "HGapLineStyle | HGapLineStyleValue", return: "void", explain: "라인 스타일 설정." },
  { method: "getLineWidth()", param: "-", return: "number | string", explain: "라인 두께 조회." },
  { method: "setLineWidth(width)", param: "number | string", return: "void", explain: "라인 두께 설정." },
  { method: "getLineColor()", param: "-", return: "string", explain: "라인 색상 조회(''은 테마 자동)." },
  { method: "setLineColor(color)", param: "string", return: "void", explain: "라인 색상 설정(빈 문자열은 테마 자동)." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트 고유 ID." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더." },
]

const slotGridDataEn = [
  { slot: "default", explain: "Not used (reserved for future)." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getGap(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Supports hison-size-*, hison-color-*, hison-col-*." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for root element." },
  { prop: "visible", type: "boolean", default: "true", explain: "Whether shown." },
  { prop: "border", type: "boolean", default: "false", explain: "Border (box-shadow) toggle." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "Background style." },
  { prop: "line", type: "'none'|'horizontal'|'vertical'", default: "'none'", explain: "Drawing rule." },
  { prop: "lineStyle", type: "HGapLineStyleValue", default: "'solid'", explain: "Line style (solid/dashed/dotted/double...)."},
  { prop: "lineWidth", type: "number|string", default: "1", explain: "Line thickness. number→px, string→CSS unit." },
  { prop: "lineColor", type: "string", default: "''", explain: "Line color. Empty string uses theme auto." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "After mount.", args: "(HGapMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'gap'", explain: "Returns component type literal." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether visible." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Show/hide." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether border is shown." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Enable/disable border." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Get background type." },
  { method: "setBackgroundType(type)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "Set background type." },
  { method: "getLine()", param: "-", return: "'none'|'horizontal'|'vertical'", explain: "Get line mode." },
  { method: "setLine(line)", param: "HGapLine | HGapLineValue", return: "void", explain: "Set line mode." },
  { method: "getLineStyle()", param: "-", return: "HGapLineStyleValue", explain: "Get line style." },
  { method: "setLineStyle(style)", param: "HGapLineStyle | HGapLineStyleValue", return: "void", explain: "Set line style." },
  { method: "getLineWidth()", param: "-", return: "number | string", explain: "Get line width." },
  { method: "setLineWidth(width)", param: "number | string", return: "void", explain: "Set line width." },
  { method: "getLineColor()", param: "-", return: "string", explain: "Get line color ('' = theme auto)." },
  { method: "setLineColor(color)", param: "string", return: "void", explain: "Set line color (empty for theme auto)." },
  { method: "getId()", param: "-", return: "string", explain: "Unique component id." },
  { method: "reload()", param: "-", return: "void", explain: "Force re-render." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '35%' },
  { id: 'args', header: 'args', dataType: 'text', width: '45%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '22%' },
  { id: 'param', header: 'param', dataType: 'text', width: '30%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '34%' },
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
    <!-- Live demo -->
    <HGap id="gap-demo-b" class="hison-col-12 hison-color-primary" line="horizontal" :line-width="1" line-style="dashed"/>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="gapSlotGrid"
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
      id="gapPropGrid"
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
      id="gapEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'120px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="gapMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'520px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>