<!-- PaginationSample.vue -->
<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* =======================
 * Live demo state
 * ===================== */
const page = ref(1)
const totalItems = ref(200)
const pageSize = ref(10)

/* =======================
 * i18n contents
 * ===================== */
const ko = {
  t1000:
`하단은 HPagination(페이지네이션) 컴포넌트입니다.

HPagination은 Bootstrap 유사 UI의 가벼운 페이지네이션으로,
v-model 기반의 페이지 제어, 윈도우형 페이지 버튼, 그리고 간단한 런타임 API를 제공합니다.`,
  t1010: `이것은 HPagination 라이브 데모입니다.`,
  t1030:
`주요 특징

· v-model 페이지 제어 및 change 이벤트
· 윈도우형 페이지 목록(… 없이 주변만 표시)
· First / Prev / Next / Last 개별 표시 토글
· 버튼 간격 gap 조절 및 HButton 스타일 속성 전달(border, backgroundType, clickInterval)
· 반응형 hison-* 클래스 및 런타임 API(HPaginationMethods)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HPagination
  id="pg1"
  class="hison-col-12"
  v-model="page"
  :total-items="200"
  :page-size="10"
  :max-buttons="5"
  gap="0.5rem"
  :show-first="true"
  :show-prev="true"
  :show-next="true"
  :show-last="true"
  border
  background-type="empty"
  :click-interval="300"
  @change="(p) => fetchList(p)"
/>

<!-- 슬롯 커스터마이즈 -->
<HPagination v-model="page" :total-items="100">
  <template #first>«</template>
  <template #prev>‹</template>
  <template #page="{ page: p, isActive }">
    <span :style="{ fontWeight: isActive ? '700' : '400' }">{{ p }}</span>
  </template>
  <template #next>›</template>
  <template #last>»</template>
</HPagination>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const pg = hison.component.getPagination('pg1')
pg.setCurrentPage(10)
pg.goPrev()
pg.setShowFirst(false)
pg.setGap('12px')
pg.setBackgroundType('filled')
pg.setClickInterval(500)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HPagination component.

HPagination is a lightweight Bootstrap-like pager with v-model page control,
windowed page list, and a simple runtime API.`,
  t1010: `This is the HPagination live demo.`,
  t1030:
`Main Features

· v-model page control + change event
· Windowed page list (no ellipsis)
· First / Prev / Next / Last toggles
· Spacing via gap, HButton passthrough (border, backgroundType, clickInterval)
· Responsive hison-* classes and runtime API (HPaginationMethods)`,
  t1040: `Template Example`,
  c1040:
`<HPagination
  id="pg1"
  class="hison-col-12"
  v-model="page"
  :total-items="200"
  :page-size="10"
  :max-buttons="5"
  gap="0.5rem"
  :show-first="true"
  :show-prev="true"
  :show-next="true"
  :show-last="true"
  border
  background-type="empty"
  :click-interval="300"
  @change="(p) => fetchList(p)"
/>

<!-- Slot customization -->
<HPagination v-model="page" :total-items="100">
  <template #first>«</template>
  <template #prev>‹</template>
  <template #page="{ page: p, isActive }">
    <span :style="{ fontWeight: isActive ? '700' : '400' }">{{ p }}</span>
  </template>
  <template #next>›</template>
  <template #last>»</template>
</HPagination>`,
  t1050: `Runtime Example`,
  c1050:
`const pg = hison.component.getPagination('pg1')
pg.setCurrentPage(10)
pg.goPrev()
pg.setShowFirst(false)
pg.setGap('12px')
pg.setBackgroundType('filled')
pg.setClickInterval(500)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const contents = props.lang === 'en' ? en : ko

/* =======================
 * Grids (slot/prop/event/method)
 * ===================== */
const slotGridDataKo = [
  { slot: "first", explain: "맨 처음(First) 버튼 콘텐츠." },
  { slot: "prev", explain: "이전(Prev) 버튼 콘텐츠." },
  { slot: "page", explain: "페이지 번호 버튼 콘텐츠. { page:number, isActive:boolean, goPage:(n)=>void }" },
  { slot: "next", explain: "다음(Next) 버튼 콘텐츠." },
  { slot: "last", explain: "맨 끝(Last) 버튼 콘텐츠." },
]
const slotGridDataEn = [
  { slot: "first", explain: "Content of **First** button." },
  { slot: "prev", explain: "Content of **Prev** button." },
  { slot: "page", explain: "Content of number buttons. { page:number, isActive:boolean, goPage:(n)=>void }" },
  { slot: "next", explain: "Content of **Next** button." },
  { slot: "last", explain: "Content of **Last** button." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getPagination(id)로 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/컬러/사이즈 등 hison-* 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "컨테이너 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시 여부." },
  { prop: "disable", type: "boolean", default: "false", explain: "모든 버튼 비활성화." },
  { prop: "gap", type: "number | string", default: "'0.25rem'", explain: "버튼 간격(px 또는 CSS 크기)." },
  { prop: "border", type: "boolean", default: "true", explain: "버튼 테두리 표시." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "버튼 배경 스타일." },
  { prop: "clickInterval", type: "number", default: "-", explain: "버튼 클릭 최소 간격(ms)." },
  { prop: "modelValue", type: "number", default: "-", explain: "현재 페이지(v-model, 1-base)." },
  { prop: "totalItems", type: "number", default: "-", explain: "총 아이템 수(총 페이지 계산용)." },
  { prop: "pageSize", type: "number", default: "10", explain: "페이지당 아이템 수." },
  { prop: "totalPages", type: "number", default: "0", explain: "총 페이지(>0이면 totalItems/pageSize보다 우선)." },
  { prop: "maxButtons", type: "number", default: "5", explain: "표시할 페이지 버튼 최대 개수(네비게이션 제외)." },
  { prop: "tabIndex", type: "number|string|null", default: "null", explain: "버튼 tabindex. 0=포커스 가능, null=포커스 불가." },
  { prop: "showPrev", type: "boolean", default: "true", explain: "Prev 버튼 표시." },
  { prop: "showNext", type: "boolean", default: "true", explain: "Next 버튼 표시." },
  { prop: "showFirst", type: "boolean", default: "true", explain: "First 버튼 표시." },
  { prop: "showLast", type: "boolean", default: "true", explain: "Last 버튼 표시." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getPagination(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "All hison-* responsive utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Container inline style." },
  { prop: "visible", type: "boolean", default: "true", explain: "Whether pagination is shown." },
  { prop: "disable", type: "boolean", default: "false", explain: "Disable all buttons." },
  { prop: "gap", type: "number | string", default: "'0.25rem'", explain: "Spacing between buttons." },
  { prop: "border", type: "boolean", default: "true", explain: "Show button border." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "Button background style." },
  { prop: "clickInterval", type: "number", default: "-", explain: "Min interval between clicks (ms)." },
  { prop: "modelValue", type: "number", default: "-", explain: "Current page (v-model, 1-based)." },
  { prop: "totalItems", type: "number", default: "-", explain: "Total items for page calc." },
  { prop: "pageSize", type: "number", default: "10", explain: "Items per page." },
  { prop: "totalPages", type: "number", default: "0", explain: "Explicit total pages; overrides calculation." },
  { prop: "maxButtons", type: "number", default: "5", explain: "Max numbered buttons (excluding nav)." },
  { prop: "tabIndex", type: "number|string|null", default: "null", explain: "tabindex for buttons." },
  { prop: "showPrev", type: "boolean", default: "true", explain: "Show Prev button." },
  { prop: "showNext", type: "boolean", default: "true", explain: "Show Next button." },
  { prop: "showFirst", type: "boolean", default: "true", explain: "Show First button." },
  { prop: "showLast", type: "boolean", default: "true", explain: "Show Last button." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트가 마운트될 때", args: "(HPaginationMethods)" },
  { event: "update:modelValue", trigger: "현재 페이지가 변경될 때", args: "(number)" },
  { event: "change", trigger: "페이지 변경과 동시에 편의상 발생", args: "(number, HPaginationMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HPaginationMethods)" },
  { event: "update:modelValue", trigger: "When current page changes.", args: "(number)" },
  { event: "change", trigger: "Emitted together with page change.", args: "(number, HPaginationMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'pagination'", explain: "컴포넌트 타입 리터럴." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김 설정." },
  { method: "getGap()", param: "-", return: "string", explain: "버튼 간격 조회(CSS 단위 문자열)." },
  { method: "setGap(v)", param: "number | string", return: "void", explain: "버튼 간격 설정." },
  { method: "getCurrentPage()", param: "-", return: "number", explain: "현재 페이지(1-base)." },
  { method: "setCurrentPage(page)", param: "number", return: "void", explain: "페이지 설정(범위 클램프, 이벤트 발생)." },
  { method: "getTotalPages()", param: "-", return: "number", explain: "총 페이지 수." },
  { method: "setTotalPages(n)", param: "number", return: "void", explain: "총 페이지 수 설정." },
  { method: "getTotalItems()", param: "-", return: "number", explain: "총 아이템 수." },
  { method: "getPageSize()", param: "-", return: "number", explain: "페이지당 아이템 수." },
  { method: "goPrev()", param: "-", return: "void", explain: "이전 페이지로 이동." },
  { method: "goNext()", param: "-", return: "void", explain: "다음 페이지로 이동." },
  { method: "goFirst()", param: "-", return: "void", explain: "첫 페이지로 이동." },
  { method: "goLast()", param: "-", return: "void", explain: "마지막 페이지로 이동." },
  { method: "isShowPrev()", param: "-", return: "boolean", explain: "Prev 버튼 표시 여부." },
  { method: "setShowPrev(v)", param: "boolean", return: "void", explain: "Prev 버튼 표시 설정." },
  { method: "isShowNext()", param: "-", return: "boolean", explain: "Next 버튼 표시 여부." },
  { method: "setShowNext(v)", param: "boolean", return: "void", explain: "Next 버튼 표시 설정." },
  { method: "isShowFirst()", param: "-", return: "boolean", explain: "First 버튼 표시 여부." },
  { method: "setShowFirst(v)", param: "boolean", return: "void", explain: "First 버튼 표시 설정." },
  { method: "isShowLast()", param: "-", return: "boolean", explain: "Last 버튼 표시 여부." },
  { method: "setShowLast(v)", param: "boolean", return: "void", explain: "Last 버튼 표시 설정." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "버튼 테두리 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "버튼 테두리 설정." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "버튼 배경 타입." },
  { method: "setBackgroundType(t)", param: "BackgroundType", return: "void", explain: "버튼 배경 타입 설정." },
  { method: "getClickInterval()", param: "-", return: "number", explain: "클릭 최소 간격(ms)." },
  { method: "setClickInterval(ms)", param: "number", return: "void", explain: "클릭 최소 간격 설정." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "tabIndex 조회." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "tabIndex 설정." },
  { method: "focus()", param: "-", return: "void", explain: "관련 버튼 포커스 이동." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'pagination'", explain: "Component type literal." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether visible." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Show/hide component." },
  { method: "getGap()", param: "-", return: "string", explain: "Get spacing as CSS string." },
  { method: "setGap(v)", param: "number | string", return: "void", explain: "Set spacing." },
  { method: "getCurrentPage()", param: "-", return: "number", explain: "Current page (1-based)." },
  { method: "setCurrentPage(page)", param: "number", return: "void", explain: "Set page (clamped, emits)." },
  { method: "getTotalPages()", param: "-", return: "number", explain: "Total pages." },
  { method: "setTotalPages(n)", param: "number", return: "void", explain: "Set total pages." },
  { method: "getTotalItems()", param: "-", return: "number", explain: "Total items." },
  { method: "getPageSize()", param: "-", return: "number", explain: "Items per page." },
  { method: "goPrev()", param: "-", return: "void", explain: "Go to previous page." },
  { method: "goNext()", param: "-", return: "void", explain: "Go to next page." },
  { method: "goFirst()", param: "-", return: "void", explain: "Go to first page." },
  { method: "goLast()", param: "-", return: "void", explain: "Go to last page." },
  { method: "isShowPrev()", param: "-", return: "boolean", explain: "Prev visibility." },
  { method: "setShowPrev(v)", param: "boolean", return: "void", explain: "Toggle Prev." },
  { method: "isShowNext()", param: "-", return: "boolean", explain: "Next visibility." },
  { method: "setShowNext(v)", param: "boolean", return: "void", explain: "Toggle Next." },
  { method: "isShowFirst()", param: "-", return: "boolean", explain: "First visibility." },
  { method: "setShowFirst(v)", param: "boolean", return: "void", explain: "Toggle First." },
  { method: "isShowLast()", param: "-", return: "boolean", explain: "Last visibility." },
  { method: "setShowLast(v)", param: "boolean", return: "void", explain: "Toggle Last." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Button border state." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Set border state." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Button background type." },
  { method: "setBackgroundType(t)", param: "BackgroundType", return: "void", explain: "Set background type." },
  { method: "getClickInterval()", param: "-", return: "number", explain: "Click interval (ms)." },
  { method: "setClickInterval(ms)", param: "number", return: "void", explain: "Set click interval." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Get tabindex." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Set tabindex." },
  { method: "focus()", param: "-", return: "void", explain: "Focus a relevant button." },
  { method: "reload()", param: "-", return: "void", explain: "Force re-render." },
]

/* columns & loaders */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '22%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '78%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '18%' },
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '36%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '22%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '48%' },
  { id: 'args', header: 'args', dataType: 'text', width: '30%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '26%' },
  { id: 'param', header: 'param', dataType: 'text', width: '30%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
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
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>

    <HGap/>
    <!-- Live Demo -->
    <HLayout class="hison-col-12" style="display:flex; align-items:center; gap:8px;">
      <HParagraph class="hison-col-12" style="margin:0;">{{ contents.t1010 }}</HParagraph>
    </HLayout>
    <HGap/>
    <HLayout>
      <HPagination
        id="pagination-demo"
        class="hison-col-12"
        v-model="page"
        :total-items="totalItems"
        :page-size="pageSize"
        :max-buttons="7"
        gap="0.5rem"
        :show-first="true"
        :show-prev="true"
        :show-next="true"
        :show-last="true"
        background-type="empty"
        :click-interval="300"
        :tab-index="0"
      />
      <HLabel class="hison-color-muted">
        {{ props.lang === 'en' ? 'Current page:' : '현재 페이지:' }} {{ page }}
      </HLabel>
    </HLayout>

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>

    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>

    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="paginationSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'180px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="paginationPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'420px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="paginationEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'160px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="paginationMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'800px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>