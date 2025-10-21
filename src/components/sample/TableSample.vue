<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* =======================
 * i18n contents
 * ======================= */
const ko = {
  t1000:
`하단은 HTable(테이블) 컴포넌트입니다.

HTable은 캡션, 스트라이프/호버, 섹션별 정렬, 대량 셀 스타일링을 지원하는
테마/반응형 테이블 래퍼입니다. 런타임 API로 경계/정렬/스트라이프/캡션 등을
즉시 제어할 수 있으며, hison.component.getTable(id)로 접근합니다.`,
  t1030:
`주요 특징

· 캡션(prop 또는 #caption 슬롯)
· 스트라이프/호버: 행/열 모드
· 섹션별 정렬(헤더/바디/푸터 × 수평/수직)
· 섹션별 테두리 토글(상/하/좌/우)
· 셀 일괄 클래스/스타일 주입(th/td)
· hison-* 반응형 유틸리티 및 런타임 API(HTableMethods)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HTable
  class="hison-col-6-pc hison-col-12-mb"
  :border="true"
  :caption="'월간 리포트'"
  :headerTextAlign="'center'"
  :bodyTextAlign="'right'"
  :footerTextAlign="'right'"
>
  <template #thead>
    <tr><th>Month</th><th>Sales</th><th>Profit</th></tr>
  </template>

  <tr><td>Jan</td><td>100</td><td>50</td></tr>
  <tr><td>Feb</td><td>120</td><td>60</td></tr>

  <template #tfoot>
    <tr><td>Total</td><td>220</td><td>110</td></tr>
  </template>
</HTable>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const t = hison.component.getTable('tbl1')
t.setCaption('Updated Report')
t.setBackgroundType('filled')
t.setStriped('col')
t.setHoverable('col')
t.setHeaderBorderBottom(true)
console.log('Row count:', t.getRowCount())
const firstRow = t.getRowElement(0)
if (firstRow) firstRow.classList.add('highlight')`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HTable component.

HTable is a theme-aware table wrapper with caption, striped/hover states,
section-level alignment, bulk cell styling, and full runtime control.
Access it via hison.component.getTable(id).`,
  t1030:
`Main Features

· Caption via prop or #caption slot
· Striped / hover: row or column
· Section-level alignment (header/body/footer × horizontal/vertical)
· Per-side section borders (top/bottom/left/right)
· Bulk cell class/style injection (th/td)
· Responsive hison-* utilities & runtime API (HTableMethods)`,
  t1040: `Template Example`,
  c1040:
`<HTable
  class="hison-col-6-pc hison-col-12-mb"
  :border="true"
  :caption="'Monthly Report'"
  :headerTextAlign="'center'"
  :bodyTextAlign="'right'"
  :footerTextAlign="'right'"
>
  <template #thead>
    <tr><th>Month</th><th>Sales</th><th>Profit</th></tr>
  </template>

  <tr><td>Jan</td><td>100</td><td>50</td></tr>
  <tr><td>Feb</td><td>120</td><td>60</td></tr>

  <template #tfoot>
    <tr><td>Total</td><td>220</td><td>110</td></tr>
  </template>
</HTable>`,
  t1050: `Runtime Example`,
  c1050:
`const t = hison.component.getTable('tbl1')
t.setCaption('Updated Report')
t.setBackgroundType('filled')
t.setStriped('col')
t.setHoverable('col')
t.setHeaderBorderBottom(true)
console.log('Row count:', t.getRowCount())
const firstRow = t.getRowElement(0)
if (firstRow) firstRow.classList.add('highlight')`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

/* =======================
 * slot grid
 * ======================= */
const slotGridDataKo = [
  { slot: "caption", explain: "커스텀 캡션 마크업. prop보다 우선." },
  { slot: "colgroup", explain: "열 너비 제어를 위한 <colgroup> 삽입." },
  { slot: "thead", explain: "테이블 헤더 행(<tr><th>…</th></tr>). 생략 가능." },
  { slot: "default", explain: "테이블 바디 행(<tr><td>…</td></tr>). 기본 슬롯." },
  { slot: "tfoot", explain: "테이블 푸터 행(<tr><td>…</td></tr>). 생략 가능." },
]
const slotGridDataEn = [
  { slot: "caption", explain: "Custom caption markup. Takes precedence over prop." },
  { slot: "colgroup", explain: "Inject a <colgroup> for column sizing." },
  { slot: "thead", explain: "Header rows (<tr><th>…</th></tr>). Optional." },
  { slot: "default", explain: "Body rows (<tr><td>…</td></tr>). Default slot." },
  { slot: "tfoot", explain: "Footer rows (<tr><td>…</td></tr>). Optional." },
]

/* =======================
 * props grid
 * ======================= */
const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 ID. hison.component.getTable(id) 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/컬러/사이즈 등 hison-* 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "<table> 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시/숨김." },
  { prop: "caption", type: "string", default: "-", explain: "캡션 텍스트(#caption 사용 시 무시)." },
  { prop: "striped", type: "'row'|'col'|'none'", default: "'row'", explain: "스트라이프 모드." },
  { prop: "hoverable", type: "'row'|'col'|'none'", default: "'row'", explain: "호버 하이라이트 모드." },
  { prop: "border", type: "boolean", default: "false", explain: "테이블 외곽 보더." },
  { prop: "headerBorderTop", type: "boolean", default: "false", explain: "<thead> 상단 보더." },
  { prop: "headerBorderBottom", type: "boolean", default: "false", explain: "<thead> 하단 보더." },
  { prop: "headerBorderLeft", type: "boolean", default: "false", explain: "<thead> 좌측 보더." },
  { prop: "headerBorderRight", type: "boolean", default: "false", explain: "<thead> 우측 보더." },
  { prop: "bodyBorderTop", type: "boolean", default: "false", explain: "<tbody> 상단 보더." },
  { prop: "bodyBorderBottom", type: "boolean", default: "false", explain: "<tbody> 하단 보더." },
  { prop: "bodyBorderLeft", type: "boolean", default: "false", explain: "<tbody> 좌측 보더." },
  { prop: "bodyBorderRight", type: "boolean", default: "false", explain: "<tbody> 우측 보더." },
  { prop: "footerBorderTop", type: "boolean", default: "false", explain: "<tfoot> 상단 보더." },
  { prop: "footerBorderBottom", type: "boolean", default: "false", explain: "<tfoot> 하단 보더." },
  { prop: "footerBorderLeft", type: "boolean", default: "false", explain: "<tfoot> 좌측 보더." },
  { prop: "footerBorderRight", type: "boolean", default: "false", explain: "<tfoot> 우측 보더." },
  { prop: "headerTextAlign", type: "'left'|'center'|'right'", default: "'center'", explain: "<thead> 수평 정렬." },
  { prop: "bodyTextAlign", type: "'left'|'center'|'right'", default: "'left'", explain: "<tbody> 수평 정렬." },
  { prop: "footerTextAlign", type: "'left'|'center'|'right'", default: "'right'", explain: "<tfoot> 수평 정렬." },
  { prop: "headerVerticalAlign", type: "'top'|'middle'|'bottom'", default: "'middle'", explain: "<thead> 수직 정렬." },
  { prop: "bodyVerticalAlign", type: "'top'|'middle'|'bottom'", default: "'middle'", explain: "<tbody> 수직 정렬." },
  { prop: "footerVerticalAlign", type: "'top'|'middle'|'bottom'", default: "'middle'", explain: "<tfoot> 수직 정렬." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "배경 스타일." },
  { prop: "headerCellClass", type: "string | string[] | Record<string, boolean>", default: "-", explain: "모든 <th>에 클래스 주입." },
  { prop: "bodyCellClass", type: "string | string[] | Record<string, boolean>", default: "-", explain: "<tbody>의 모든 <td> 클래스." },
  { prop: "footerCellClass", type: "string | string[] | Record<string, boolean>", default: "-", explain: "<tfoot>의 모든 <td> 클래스." },
  { prop: "headerCellStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "모든 <th> 인라인 스타일." },
  { prop: "bodyCellStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "<tbody>의 모든 <td> 스타일." },
  { prop: "footerCellStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "<tfoot>의 모든 <td> 스타일." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getTable(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive hison-* utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline styles for <table>." },
  { prop: "visible", type: "boolean", default: "true", explain: "Show/hide." },
  { prop: "caption", type: "string", default: "-", explain: "Plain caption text (overridden by #caption)." },
  { prop: "striped", type: "'row'|'col'|'none'", default: "'row'", explain: "Striped mode." },
  { prop: "hoverable", type: "'row'|'col'|'none'", default: "'row'", explain: "Hover highlight mode." },
  { prop: "border", type: "boolean", default: "false", explain: "Outer table border." },
  { prop: "headerBorderTop", type: "boolean", default: "false", explain: "Top border on <thead>." },
  { prop: "headerBorderBottom", type: "boolean", default: "false", explain: "Bottom border on <thead>." },
  { prop: "headerBorderLeft", type: "boolean", default: "false", explain: "Left border on <thead>." },
  { prop: "headerBorderRight", type: "boolean", default: "false", explain: "Right border on <thead>." },
  { prop: "bodyBorderTop", type: "boolean", default: "false", explain: "Top border on <tbody>." },
  { prop: "bodyBorderBottom", type: "boolean", default: "false", explain: "Bottom border on <tbody>." },
  { prop: "bodyBorderLeft", type: "boolean", default: "false", explain: "Left border on <tbody>." },
  { prop: "bodyBorderRight", type: "boolean", default: "false", explain: "Right border on <tbody>." },
  { prop: "footerBorderTop", type: "boolean", default: "false", explain: "Top border on <tfoot>." },
  { prop: "footerBorderBottom", type: "boolean", default: "false", explain: "Bottom border on <tfoot>." },
  { prop: "footerBorderLeft", type: "boolean", default: "false", explain: "Left border on <tfoot>." },
  { prop: "footerBorderRight", type: "boolean", default: "false", explain: "Right border on <tfoot>." },
  { prop: "headerTextAlign", type: "'left'|'center'|'right'", default: "'center'", explain: "Horizontal align for header cells." },
  { prop: "bodyTextAlign", type: "'left'|'center'|'right'", default: "'left'", explain: "Horizontal align for body cells." },
  { prop: "footerTextAlign", type: "'left'|'center'|'right'", default: "'right'", explain: "Horizontal align for footer cells." },
  { prop: "headerVerticalAlign", type: "'top'|'middle'|'bottom'", default: "'middle'", explain: "Vertical align for header cells." },
  { prop: "bodyVerticalAlign", type: "'top'|'middle'|'bottom'", default: "'middle'", explain: "Vertical align for body cells." },
  { prop: "footerVerticalAlign", type: "'top'|'middle'|'bottom'", default: "'middle'", explain: "Vertical align for footer cells." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "Background style." },
  { prop: "headerCellClass", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Extra classes for all <th>." },
  { prop: "bodyCellClass", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Extra classes for all <tbody> <td>." },
  { prop: "footerCellClass", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Extra classes for all <tfoot> <td>." },
  { prop: "headerCellStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for all <th>." },
  { prop: "bodyCellStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for all <tbody> <td>." },
  { prop: "footerCellStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for all <tfoot> <td>." },
]

/* =======================
 * events grid
 * ======================= */
const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트가 마운트될 때", args: "(HTableMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HTableMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

/* =======================
 * methods grid
 * ======================= */
const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'table'", explain: "컴포넌트 타입 리터럴." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "테이블 외곽 보더 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "테이블 외곽 보더 토글." },

  { method: "isHeaderBorderTop()", param: "-", return: "boolean", explain: "<thead> 상단 보더 여부." },
  { method: "setHeaderBorderTop(v)", param: "boolean", return: "void", explain: "<thead> 상단 보더 토글." },
  { method: "isHeaderBorderBottom()", param: "-", return: "boolean", explain: "<thead> 하단 보더 여부." },
  { method: "setHeaderBorderBottom(v)", param: "boolean", return: "void", explain: "<thead> 하단 보더 토글." },
  { method: "isHeaderBorderLeft()", param: "-", return: "boolean", explain: "<thead> 좌측 보더 여부." },
  { method: "setHeaderBorderLeft(v)", param: "boolean", return: "void", explain: "<thead> 좌측 보더 토글." },
  { method: "isHeaderBorderRight()", param: "-", return: "boolean", explain: "<thead> 우측 보더 여부." },
  { method: "setHeaderBorderRight(v)", param: "boolean", return: "void", explain: "<thead> 우측 보더 토글." },

  { method: "isBodyBorderTop()", param: "-", return: "boolean", explain: "<tbody> 상단 보더 여부." },
  { method: "setBodyBorderTop(v)", param: "boolean", return: "void", explain: "<tbody> 상단 보더 토글." },
  { method: "isBodyBorderBottom()", param: "-", return: "boolean", explain: "<tbody> 하단 보더 여부." },
  { method: "setBodyBorderBottom(v)", param: "boolean", return: "void", explain: "<tbody> 하단 보더 토글." },
  { method: "isBodyBorderLeft()", param: "-", return: "boolean", explain: "<tbody> 좌측 보더 여부." },
  { method: "setBodyBorderLeft(v)", param: "boolean", return: "void", explain: "<tbody> 좌측 보더 토글." },
  { method: "isBodyBorderRight()", param: "-", return: "boolean", explain: "<tbody> 우측 보더 여부." },
  { method: "setBodyBorderRight(v)", param: "boolean", return: "void", explain: "<tbody> 우측 보더 토글." },

  { method: "isFooterBorderTop()", param: "-", return: "boolean", explain: "<tfoot> 상단 보더 여부." },
  { method: "setFooterBorderTop(v)", param: "boolean", return: "void", explain: "<tfoot> 상단 보더 토글." },
  { method: "isFooterBorderBottom()", param: "-", return: "boolean", explain: "<tfoot> 하단 보더 여부." },
  { method: "setFooterBorderBottom(v)", param: "boolean", return: "void", explain: "<tfoot> 하단 보더 토글." },
  { method: "isFooterBorderLeft()", param: "-", return: "boolean", explain: "<tfoot> 좌측 보더 여부." },
  { method: "setFooterBorderLeft(v)", param: "boolean", return: "void", explain: "<tfoot> 좌측 보더 토글." },
  { method: "isFooterBorderRight()", param: "-", return: "boolean", explain: "<tfoot> 우측 보더 여부." },
  { method: "setFooterBorderRight(v)", param: "boolean", return: "void", explain: "<tfoot> 우측 보더 토글." },

  { method: "getStriped()", param: "-", return: "'row'|'col'|'none'", explain: "스트라이프 모드 조회." },
  { method: "setStriped(v)", param: "'row'|'col'|'none'", return: "void", explain: "스트라이프 모드 설정." },
  { method: "getHoverable()", param: "-", return: "'row'|'col'|'none'", explain: "호버 모드 조회." },
  { method: "setHoverable(v)", param: "'row'|'col'|'none'", return: "void", explain: "호버 모드 설정." },

  { method: "getCaption()", param: "-", return: "string", explain: "캡션 텍스트 조회(#caption 슬롯은 제외)." },
  { method: "setCaption(text)", param: "string", return: "void", explain: "캡션 텍스트 설정." },

  { method: "getBackgroundType()", param: "-", return: "'filled'|'empty'|'transparent'", explain: "배경 스타일 조회." },
  { method: "setBackgroundType(t)", param: "'filled'|'empty'|'transparent'", return: "void", explain: "배경 스타일 설정." },

  { method: "getHeaderTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "헤더 수평 정렬 조회." },
  { method: "setHeaderTextAlign(v)", param: "'left'|'center'|'right'", return: "void", explain: "헤더 수평 정렬 설정." },
  { method: "getBodyTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "바디 수평 정렬 조회." },
  { method: "setBodyTextAlign(v)", param: "'left'|'center'|'right'", return: "void", explain: "바디 수평 정렬 설정." },
  { method: "getFooterTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "푸터 수평 정렬 조회." },
  { method: "setFooterTextAlign(v)", param: "'left'|'center'|'right'", return: "void", explain: "푸터 수평 정렬 설정." },

  { method: "getHeaderVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "헤더 수직 정렬 조회." },
  { method: "setHeaderVerticalAlign(v)", param: "'top'|'middle'|'bottom'", return: "void", explain: "헤더 수직 정렬 설정." },
  { method: "getBodyVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "바디 수직 정렬 조회." },
  { method: "setBodyVerticalAlign(v)", param: "'top'|'middle'|'bottom'", return: "void", explain: "바디 수직 정렬 설정." },
  { method: "getFooterVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "푸터 수직 정렬 조회." },
  { method: "setFooterVerticalAlign(v)", param: "'top'|'middle'|'bottom'", return: "void", explain: "푸터 수직 정렬 설정." },

  { method: "getRowCount()", param: "-", return: "number", explain: "<tbody>의 <tr> 개수." },
  { method: "getRowElement(index)", param: "number", return: "HTMLTableRowElement | null", explain: "0-기반 인덱스의 행 엘리먼트." },
  { method: "getHeadElement()", param: "-", return: "HTMLTableSectionElement | null", explain: "원시 <thead> 엘리먼트." },
  { method: "getBodyElement()", param: "-", return: "HTMLTableSectionElement | null", explain: "원시 <tbody> 엘리먼트." },
  { method: "getFootElement()", param: "-", return: "HTMLTableSectionElement | null", explain: "원시 <tfoot> 엘리먼트." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'table'", explain: "Component type literal." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Visibility state." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Show/hide table." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether outer border is shown." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Toggle outer border." },

  { method: "isHeaderBorderTop()", param: "-", return: "boolean", explain: "Header top border." },
  { method: "setHeaderBorderTop(v)", param: "boolean", return: "void", explain: "Toggle header top border." },
  { method: "isHeaderBorderBottom()", param: "-", return: "boolean", explain: "Header bottom border." },
  { method: "setHeaderBorderBottom(v)", param: "boolean", return: "void", explain: "Toggle header bottom border." },
  { method: "isHeaderBorderLeft()", param: "-", return: "boolean", explain: "Header left border." },
  { method: "setHeaderBorderLeft(v)", param: "boolean", return: "void", explain: "Toggle header left border." },
  { method: "isHeaderBorderRight()", param: "-", return: "boolean", explain: "Header right border." },
  { method: "setHeaderBorderRight(v)", param: "boolean", return: "void", explain: "Toggle header right border." },

  { method: "isBodyBorderTop()", param: "-", return: "boolean", explain: "Body top border." },
  { method: "setBodyBorderTop(v)", param: "boolean", return: "void", explain: "Toggle body top border." },
  { method: "isBodyBorderBottom()", param: "-", return: "boolean", explain: "Body bottom border." },
  { method: "setBodyBorderBottom(v)", param: "boolean", return: "void", explain: "Toggle body bottom border." },
  { method: "isBodyBorderLeft()", param: "-", return: "boolean", explain: "Body left border." },
  { method: "setBodyBorderLeft(v)", param: "boolean", return: "void", explain: "Toggle body left border." },
  { method: "isBodyBorderRight()", param: "-", return: "boolean", explain: "Body right border." },
  { method: "setBodyBorderRight(v)", param: "boolean", return: "void", explain: "Toggle body right border." },

  { method: "isFooterBorderTop()", param: "-", return: "boolean", explain: "Footer top border." },
  { method: "setFooterBorderTop(v)", param: "boolean", return: "void", explain: "Toggle footer top border." },
  { method: "isFooterBorderBottom()", param: "-", return: "boolean", explain: "Footer bottom border." },
  { method: "setFooterBorderBottom(v)", param: "boolean", return: "void", explain: "Toggle footer bottom border." },
  { method: "isFooterBorderLeft()", param: "-", return: "boolean", explain: "Footer left border." },
  { method: "setFooterBorderLeft(v)", param: "boolean", return: "void", explain: "Toggle footer left border." },
  { method: "isFooterBorderRight()", param: "-", return: "boolean", explain: "Footer right border." },
  { method: "setFooterBorderRight(v)", param: "boolean", return: "void", explain: "Toggle footer right border." },

  { method: "getStriped()", param: "-", return: "'row'|'col'|'none'", explain: "Get striped mode." },
  { method: "setStriped(v)", param: "'row'|'col'|'none'", return: "void", explain: "Set striped mode." },
  { method: "getHoverable()", param: "-", return: "'row'|'col'|'none'", explain: "Get hover mode." },
  { method: "setHoverable(v)", param: "'row'|'col'|'none'", return: "void", explain: "Set hover mode." },

  { method: "getCaption()", param: "-", return: "string", explain: "Get caption text (slot not affected)." },
  { method: "setCaption(text)", param: "string", return: "void", explain: "Set caption text." },

  { method: "getBackgroundType()", param: "-", return: "'filled'|'empty'|'transparent'", explain: "Get background type." },
  { method: "setBackgroundType(t)", param: "'filled'|'empty'|'transparent'", return: "void", explain: "Set background type." },

  { method: "getHeaderTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "Header horizontal align." },
  { method: "setHeaderTextAlign(v)", param: "'left'|'center'|'right'", return: "void", explain: "Set header horizontal align." },
  { method: "getBodyTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "Body horizontal align." },
  { method: "setBodyTextAlign(v)", param: "'left'|'center'|'right'", return: "void", explain: "Set body horizontal align." },
  { method: "getFooterTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "Footer horizontal align." },
  { method: "setFooterTextAlign(v)", param: "'left'|'center'|'right'", return: "void", explain: "Set footer horizontal align." },

  { method: "getHeaderVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "Header vertical align." },
  { method: "setHeaderVerticalAlign(v)", param: "'top'|'middle'|'bottom'", return: "void", explain: "Set header vertical align." },
  { method: "getBodyVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "Body vertical align." },
  { method: "setBodyVerticalAlign(v)", param: "'top'|'middle'|'bottom'", return: "void", explain: "Set body vertical align." },
  { method: "getFooterVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "Footer vertical align." },
  { method: "setFooterVerticalAlign(v)", param: "'top'|'middle'|'bottom'", return: "void", explain: "Set footer vertical align." },

  { method: "getRowCount()", param: "-", return: "number", explain: "Number of <tbody> rows." },
  { method: "getRowElement(index)", param: "number", return: "HTMLTableRowElement | null", explain: "Get row element by 0-based index." },
  { method: "getHeadElement()", param: "-", return: "HTMLTableSectionElement | null", explain: "Raw <thead> element." },
  { method: "getBodyElement()", param: "-", return: "HTMLTableSectionElement | null", explain: "Raw <tbody> element." },
  { method: "getFootElement()", param: "-", return: "HTMLTableSectionElement | null", explain: "Raw <tfoot> element." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'type', header: 'type', dataType: 'text', width: '35%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '25%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '35%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '25%' },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '25%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '25%' },
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
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>
    <HGap/>
    <HTable
      class="hison-col-6-pc hison-col-12-mb"
      :border="true"
      :caption="props.lang === 'en' ? 'Monthly Report' : '월간 리포트'"
      :headerTextAlign="'center'"
      :bodyTextAlign="'right'"
      :footerTextAlign="'right'"
    >
      <template #thead>
        <tr>
          <th>{{ props.lang === 'en' ? 'Month' : '월' }}</th>
          <th>{{ props.lang === 'en' ? 'Sales' : '매출' }}</th>
          <th>{{ props.lang === 'en' ? 'Profit' : '이익' }}</th>
        </tr>
      </template>

      <tr><td style="text-align: center;">Jan</td><td>100</td><td>50</td></tr>
      <tr><td style="text-align: center;">Feb</td><td>120</td><td>60</td></tr>
      <tr><td style="text-align: center;">Mar</td><td>90</td><td>40</td></tr>

      <template #tfoot>
        <tr><td>{{ props.lang === 'en' ? 'Total' : '합계' }}</td><td>310</td><td>150</td></tr>
      </template>
    </HTable>
    <HGap/>

    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>

    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="tableSlotGrid"
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
      id="tablePropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'800px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="tableEventGrid"
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
      id="tableMethodGrid"
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