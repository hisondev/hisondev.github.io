<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HChart(Chart.js 래퍼) 컴포넌트입니다. (chart.js@^4.5.0)

HChart는 Chart.js를 그대로 사용하도록 감싼 경량 래퍼입니다. 모든 차트 타입과 옵션을 그대로 전달하며,
레이스 컨디션을 방지하는 안전한 destroy/reload, DOM 플러시 보장, 재마운트 지연(loadDelay) 제어를 제공합니다.`,
  t1010: `이것은 HChart 라이브 데모입니다.`,
  t1030:
`주요 특징

· Chart.js 기본 타입 전부 지원('bar' | 'line' | 'pie' | 'doughnut' …)
· 데이터/옵션 변경 시 자동 업데이트(v-model: modelValue / :options)
· 안전한 재로딩: destroy → DOM 제거 → 지연 후 재마운트
· loadDelay(ms) 런타임 제어: setLoadDelay()
· 표시 제어: visible prop, .setVisible()
· 런타임 인스턴스: hison.component.getChart(id) → Chart 인스턴스 확장`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HChart
  id="myChart"
  type="doughnut"
  class="hison-col-6"
  :modelValue="chartData"
  :options="chartOptions"
  :loadDelay="800"
/>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const chart = hison.component.getChart('myChart')
chart.data.datasets[0].data = [10, 20, 30]
chart.options.plugins.legend.display = false
chart.update()
chart.setVisible(false)
chart.setLoadDelay(1000)
chart.reload()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HChart component (Chart.js wrapper, chart.js@^4.5.0).

HChart is a thin wrapper around Chart.js. All chart types/options pass through untouched.
It guarantees race-condition safe destroy/reload, DOM-flush on unmount, and configurable reload delay (loadDelay).`,
  t1010: `This is the HChart live demo.`,
  t1030:
`Main Features

· Supports all built-in Chart.js types ('bar' | 'line' | 'pie' | 'doughnut' …)
· Reactive updates when data/options change (v-model: modelValue / :options)
· Safe reload cycle: destroy → remove canvas → recreate after delay
· Runtime loadDelay control via setLoadDelay()
· Visibility control via visible prop and .setVisible()
· Runtime instance: hison.component.getChart(id) → extended Chart instance`,
  t1040: `Template Example`,
  c1040:
`<HChart
  id="myChart"
  type="doughnut"
  class="hison-col-6"
  :modelValue="chartData"
  :options="chartOptions"
  :loadDelay="800"
/>`,
  t1050: `Runtime Example`,
  c1050:
`const chart = hison.component.getChart('myChart')
chart.data.datasets[0].data = [10, 20, 30]
chart.options.plugins.legend.display = false
chart.update()
chart.setVisible(false)
chart.setLoadDelay(1000)
chart.reload()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "(none)", explain: "슬롯을 사용하지 않습니다. 내부에서 <canvas>를 생성/제거하여 렌더링합니다." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getChart(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/커스텀 클래스(hison-col-* 등)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "인라인 스타일." },
  { prop: "type", type: "ChartType", default: "-", explain: "차트 타입(e.g., 'line', 'bar', 'pie')." },
  { prop: "modelValue", type: "ChartData", default: "-", explain: "Chart.js 데이터(v-model 바인딩)." },
  { prop: "options", type: "ChartOptions", default: "undefined", explain: "Chart.js 옵션 객체." },
  { prop: "visible", type: "boolean", default: "true", explain: "차트 표시 여부." },
  { prop: "loadDelay", type: "number", default: "500", explain: "재마운트 지연(ms). destroy→재생성 사이의 안정화 지연." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "차트 인스턴스 초기화 시", args: "(HChartInstance)" },
  { event: "responsive-change", trigger: "디바이스 판별로 반응형 클래스 변경 시", args: "-" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'chart'", explain: "컴포넌트 타입 리터럴('chart')." },
  { method: "getLoadDelay()", param: "-", return: "number", explain: "현재 재마운트 지연(ms) 조회." },
  { method: "setLoadDelay(ms)", param: "number", return: "void", explain: "재마운트 지연(ms) 설정." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부(공통)." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김(공통)." },
  { method: "getId()", param: "-", return: "string", explain: "고유 ID(공통)." },
  { method: "reload()", param: "-", return: "void", explain: "안전 재로딩(destroy 후 DOM 플러시 및 지연 재생성)." },
  { method: "update()", param: "-", return: "void", explain: "Chart.js 네이티브 메서드. 데이터/옵션 변경 반영." },
  { method: "destroy()", param: "-", return: "void", explain: "Chart.js 네이티브 메서드. 인스턴스 제거." },
  { method: "resize()", param: "-", return: "void", explain: "Chart.js 네이티브 메서드. 리사이즈." },
  { method: "toBase64Image()", param: "-", return: "string", explain: "Chart.js 네이티브 메서드. 캔버스 이미지를 base64로 반환." },
]

const slotGridDataEn = [
  { slot: "(none)", explain: "No slots are used. A <canvas> is created/removed internally for rendering." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getChart(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive/custom classes (e.g., hison-col-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline styles." },
  { prop: "type", type: "ChartType", default: "-", explain: "Chart type (e.g., 'line', 'bar', 'pie')." },
  { prop: "modelValue", type: "ChartData", default: "-", explain: "Chart.js data object (v-model)." },
  { prop: "options", type: "ChartOptions", default: "undefined", explain: "Chart.js configuration." },
  { prop: "visible", type: "boolean", default: "true", explain: "Whether the chart is visible." },
  { prop: "loadDelay", type: "number", default: "500", explain: "Reload delay (ms) between destroy and re-mount." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "When chart instance is initialized.", args: "(HChartInstance)" },
  { event: "responsive-change", trigger: "When device detection changes responsive class.", args: "-" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'chart'", explain: "Returns the component type literal ('chart')." },
  { method: "getLoadDelay()", param: "-", return: "number", explain: "Gets current reload delay in ms." },
  { method: "setLoadDelay(ms)", param: "number", return: "void", explain: "Sets reload delay in ms." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Common visibility getter." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Common visibility setter." },
  { method: "getId()", param: "-", return: "string", explain: "Returns unique ID (common)." },
  { method: "reload()", param: "-", return: "void", explain: "Safe reload (destroy → flush → delayed re-create)." },
  { method: "update()", param: "-", return: "void", explain: "Native Chart.js method. Apply data/options changes." },
  { method: "destroy()", param: "-", return: "void", explain: "Native Chart.js method. Destroy instance." },
  { method: "resize()", param: "-", return: "void", explain: "Native Chart.js method. Resize canvas." },
  { method: "toBase64Image()", param: "-", return: "string", explain: "Native Chart.js method. Export as base64 image." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '14%' },
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '24%' },
  { id: 'param', header: 'param', dataType: 'text', width: '23%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '38%' },
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

    <!-- Live demo: inline data/options -->
    <HChart
      id="chart-demo"
      class="hison-col-12 hison-size-s"
      type="bar"
      :modelValue="{
        labels: ['A','B','C','D'],
        datasets: [
          { label: 'Sales', data: [12, 19, 7, 14] }
        ]
      }"
      :options="{
        plugins: { legend: { display: true } },
        responsive: true,
        maintainAspectRatio: false
      }"
      :visible="true"
      :loadDelay="500"
      style="height: 220px; margin-bottom: 10px;"
    />

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="chartSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-s"
      :height="'110px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="chartPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-s"
      :height="'380px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="chartEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-s"
      :height="'140px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="chartMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-s"
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