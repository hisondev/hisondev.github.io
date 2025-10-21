<!-- ParagraphSample.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* =======================
 * i18n contents
 * ===================== */
const ko = {
  t1000:
`하단은 HParagraph(문단/텍스트) 컴포넌트입니다.

HParagraph는 안전한 텍스트 렌더링(기본), 리치 슬롯, 복사 버튼, 공백 정책(기본 'pre-wrap'),
폰트 토글/정렬, 배경/보더를 지원하는 경량 텍스트 컴포넌트입니다.`,
  t1010: `이것은 HParagraph 라이브 데모입니다.`,
  t1030:
`주요 특징

· hison-* 반응형/테마 클래스
· 공백 정책(whiteSpace): 'pre-wrap' 기본, runtime 변경 가능
· 폰트 스타일 토글: Bold / Italic / Thruline / Underline
· 수평/수직 정렬, 배경/보더
· 복사 기능(단축키/버튼) 및 이벤트(copied, copy-click, copy-error)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<!-- 1) 기본 사용: 텍스트 슬롯(순수 텍스트면 내부 text로 흡수) -->
<HParagraph id="p0" class="hison-col-12 hison-size-m hison-color-primary" :border="true">
Line 1
  Line 2
Line 3
</HParagraph>

<!-- 2) 모노스페이스 & 복사 버튼 표시 -->
<HParagraph
  id="p1"
  class="hison-col-6-pc hison-col-6-mb"
  :border="true"
  :copyEnabled="true"
  :showCopyButton="true"
  style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace"
>
{{
\`test1
    test2
test3\`
}}
</HParagraph>

<!-- 3) 복사 버튼 전체 커스터마이즈 -->
<HParagraph id="p2" :copyEnabled="true" :showCopyButton="true" copyButtonText="Copy">
  <template #copy-button="{ onClick }">
    <HButton class="hison-size-s" background-type="transparent" :border="true" @click="onClick" title="Copy content">
      <template #icon>📋</template>
      Custom Copy
    </HButton>
  </template>
  Some text to copy
</HParagraph>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const p = hison.component.getParagraph('p1')
p.setText('Line 1\\n  Line 2\\nLine 3')
p.setWhiteSpace('pre-wrap')
p.setFontBold(true)
p.setTextAlign('right')
p.setCopyEnabled(true)
p.setShowCopyButton(true)
await p.copy()`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HParagraph (paragraph/text) component.

HParagraph renders safe plain text by default (or rich slot content), supports a copy button,
whitespace policy ('pre-wrap' by default), font toggles, alignment, and background/border styling.`,
  t1010: `This is the HParagraph live demo.`,
  t1030:
`Main Features

· Theme & responsive hison-* classes
· Whitespace policy (whiteSpace) with 'pre-wrap' default
· Font toggles: Bold / Italic / Thruline / Underline
· Horizontal/vertical alignment, background/border
· Copy support (keyboard/button) with copied/copy-click/copy-error events`,
  t1040: `Template Example`,
  c1040:
`<!-- 1) Plain usage: text-only slot is absorbed -->
<HParagraph id="p0" class="hison-col-12 hison-size-m hison-color-primary" :border="true">
Line 1
  Line 2
Line 3
</HParagraph>

<!-- 2) Monospace & show copy button -->
<HParagraph
  id="p1"
  class="hison-col-6-pc hison-col-6-mb"
  :border="true"
  :copyEnabled="true"
  :showCopyButton="true"
  style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace"
>
{{
\`test1
    test2
test3\`
}}
</HParagraph>

<!-- 3) Fully custom copy button -->
<HParagraph id="p2" :copyEnabled="true" :showCopyButton="true" copyButtonText="Copy">
  <template #copy-button="{ onClick }">
    <HButton class="hison-size-s" background-type="transparent" :border="true" @click="onClick" title="Copy content">
      <template #icon>📋</template>
      Custom Copy
    </HButton>
  </template>
  Some text to copy
</HParagraph>`,
  t1050: `Runtime Example`,
  c1050:
`const p = hison.component.getParagraph('p1')
p.setText('Line 1\\n  Line 2\\nLine 3')
p.setWhiteSpace('pre-wrap')
p.setFontBold(true)
p.setTextAlign('right')
p.setCopyEnabled(true)
p.setShowCopyButton(true)
await p.copy()`,
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
  { slot: "default", explain: "기본 콘텐츠. 순수 텍스트만 있으면 내부 text로 흡수. 요소가 있으면 슬롯 그대로 렌더." },
  { slot: "copy-button", explain: "내장 복사 버튼 전체 교체. { onClick, text } 제공." },
  { slot: "copy-icon", explain: "기본 복사 버튼의 아이콘 영역만 교체(내부 HButton #icon)." },
  { slot: "copy-label", explain: "기본 복사 버튼의 라벨만 교체." },
]
const slotGridDataEn = [
  { slot: "default", explain: "Main content. Pure text only → absorbed as internal text; elements → rendered as-is." },
  { slot: "copy-button", explain: "Replace the built-in copy button entirely. Props: { onClick, text }." },
  { slot: "copy-icon", explain: "Replace only the icon of the default copy button (forwarded to <HButton #icon>)." },
  { slot: "copy-label", explain: "Replace only the label of the default copy button." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 ID. hison.component.getParagraph(id) 사용." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형 hison-* 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 <p> 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시 여부." },
  { prop: "title", type: "string", default: "-", explain: "툴팁(title) 텍스트." },
  { prop: "text", type: "string", default: "-", explain: "요소 없는 경우 사용되는 텍스트(순수 텍스트 슬롯도 흡수)." },
  { prop: "fontBold", type: "boolean", default: "false", explain: "굵게." },
  { prop: "fontItalic", type: "boolean", default: "false", explain: "이탤릭." },
  { prop: "fontThruline", type: "boolean", default: "false", explain: "취소선." },
  { prop: "fontUnderline", type: "boolean", default: "false", explain: "밑줄." },
  { prop: "textAlign", type: "'left'|'center'|'right'", default: "-", explain: "가로 정렬." },
  { prop: "verticalAlign", type: "'top'|'middle'|'bottom'", default: "'top'", explain: "세로 정렬(컨테이너 높이 있을 때)." },
  { prop: "border", type: "boolean", default: "false", explain: "보더(섀도) 표시." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "배경 스타일." },
  { prop: "whiteSpace", type: "'normal'|'pre'|'pre-wrap'|'pre-line'|'break-spaces'|null", default: "null", explain: "공백 정책(null이면 기본 'pre-wrap')." },
  { prop: "copyEnabled", type: "boolean", default: "false", explain: "복사(단축키/버튼) 활성화." },
  { prop: "showCopyButton", type: "boolean", default: "false", explain: "내장 복사 버튼 표시." },
  { prop: "copyButtonText", type: "string", default: "'copy'", explain: "내장 복사 버튼 라벨." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Use hison.component.getParagraph(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive hison-* utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Root <p> inline style." },
  { prop: "visible", type: "boolean", default: "true", explain: "Visibility." },
  { prop: "title", type: "string", default: "-", explain: "Tooltip (title attribute)." },
  { prop: "text", type: "string", default: "-", explain: "Text when no element slot is used (pure text slot is absorbed)." },
  { prop: "fontBold", type: "boolean", default: "false", explain: "Bold toggle." },
  { prop: "fontItalic", type: "boolean", default: "false", explain: "Italic toggle." },
  { prop: "fontThruline", type: "boolean", default: "false", explain: "Strikethrough toggle." },
  { prop: "fontUnderline", type: "boolean", default: "false", explain: "Underline toggle." },
  { prop: "textAlign", type: "'left'|'center'|'right'", default: "-", explain: "Horizontal alignment." },
  { prop: "verticalAlign", type: "'top'|'middle'|'bottom'", default: "'top'", explain: "Vertical alignment (when container has height)." },
  { prop: "border", type: "boolean", default: "false", explain: "Show subtle border." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: "Background style." },
  { prop: "whiteSpace", type: "'normal'|'pre'|'pre-wrap'|'pre-line'|'break-spaces'|null", default: "null", explain: "Whitespace policy (null = 'pre-wrap')." },
  { prop: "copyEnabled", type: "boolean", default: "false", explain: "Enable copy (keyboard/button)." },
  { prop: "showCopyButton", type: "boolean", default: "false", explain: "Show built-in copy button." },
  { prop: "copyButtonText", type: "string", default: "'copy'", explain: "Built-in copy button label." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 완료 시", args: "(HParagraphMethods)" },
  { event: "copied", trigger: "복사 시도 이후", args: "(ok: boolean, api: HParagraphMethods)" },
  { event: "copy-click", trigger: "복사 의도 발생(버튼/키보드/네이티브)", args: "({ src, event, api })" },
  { event: "copy-error", trigger: "복사 중 예외 발생", args: "(error: unknown, api: HParagraphMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HParagraphMethods)" },
  { event: "copied", trigger: "After copy attempt.", args: "(ok: boolean, api: HParagraphMethods)" },
  { event: "copy-click", trigger: "When a copy intent occurs.", args: "({ src, event, api })" },
  { event: "copy-error", trigger: "If copy throws.", args: "(error: unknown, api: HParagraphMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'paragraph'", explain: "컴포넌트 타입 리터럴." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김." },
  { method: "getTitle()", param: "-", return: "string", explain: "툴팁 텍스트." },
  { method: "setTitle(t)", param: "string", return: "void", explain: "툴팁 텍스트 설정." },
  { method: "getText()", param: "-", return: "string", explain: "내부 텍스트(요소 슬롯이면 '')." },
  { method: "setText(t)", param: "string", return: "void", explain: "내부 텍스트 설정(요소 슬롯이면 무시)." },
  { method: "getTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "가로 정렬." },
  { method: "setTextAlign(a)", param: "TextAlign", return: "void", explain: "가로 정렬 설정." },
  { method: "getVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "세로 정렬." },
  { method: "setVerticalAlign(a)", param: "'top'|'middle'|'bottom'", return: "void", explain: "세로 정렬 설정." },
  { method: "isFontBold()", param: "-", return: "boolean", explain: "Bold 여부." },
  { method: "setFontBold(v)", param: "boolean", return: "void", explain: "Bold 토글." },
  { method: "isFontItalic()", param: "-", return: "boolean", explain: "Italic 여부." },
  { method: "setFontItalic(v)", param: "boolean", return: "void", explain: "Italic 토글." },
  { method: "isFontThruline()", param: "-", return: "boolean", explain: "취소선 여부." },
  { method: "setFontThruline(v)", param: "boolean", return: "void", explain: "취소선 토글." },
  { method: "isFontUnderline()", param: "-", return: "boolean", explain: "밑줄 여부." },
  { method: "setFontUnderline(v)", param: "boolean", return: "void", explain: "밑줄 토글." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "보더 표시 토글." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "배경 타입." },
  { method: "setBackgroundType(t)", param: "BackgroundType", return: "void", explain: "배경 타입 설정." },
  { method: "getWhiteSpace()", param: "-", return: "'normal'|'pre'|'pre-wrap'|'pre-line'|'break-spaces'|null", explain: "공백 정책." },
  { method: "setWhiteSpace(ws)", param: "같은 타입", return: "void", explain: "공백 정책 설정(null=기본)." },
  { method: "getCopyButtonText()", param: "-", return: "string", explain: "복사 버튼 라벨." },
  { method: "setCopyButtonText(t)", param: "string", return: "void", explain: "복사 버튼 라벨 설정." },
  { method: "isCopyEnabled()", param: "-", return: "boolean", explain: "복사 기능 활성 여부." },
  { method: "setCopyEnabled(v)", param: "boolean", return: "void", explain: "복사 기능 활성/비활성." },
  { method: "isShowCopyButton()", param: "-", return: "boolean", explain: "복사 버튼 표시 여부." },
  { method: "setShowCopyButton(v)", param: "boolean", return: "void", explain: "복사 버튼 표시 토글." },
  { method: "copy()", param: "-", return: "Promise<boolean>", explain: "렌더된 텍스트 복사." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'paragraph'", explain: "Component type literal." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Visibility state." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Show/hide." },
  { method: "getTitle()", param: "-", return: "string", explain: "Tooltip text." },
  { method: "setTitle(t)", param: "string", return: "void", explain: "Set tooltip." },
  { method: "getText()", param: "-", return: "string", explain: "Internal text ('' when slot has elements)." },
  { method: "setText(t)", param: "string", return: "void", explain: "Set internal text (ignored if element slot)." },
  { method: "getTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "Horizontal alignment." },
  { method: "setTextAlign(a)", param: "TextAlign", return: "void", explain: "Set horizontal alignment." },
  { method: "getVerticalAlign()", param: "-", return: "'top'|'middle'|'bottom'", explain: "Vertical alignment." },
  { method: "setVerticalAlign(a)", param: "'top'|'middle'|'bottom'", return: "void", explain: "Set vertical alignment." },
  { method: "isFontBold()", param: "-", return: "boolean", explain: "Bold state." },
  { method: "setFontBold(v)", param: "boolean", return: "void", explain: "Toggle bold." },
  { method: "isFontItalic()", param: "-", return: "boolean", explain: "Italic state." },
  { method: "setFontItalic(v)", param: "boolean", return: "void", explain: "Toggle italic." },
  { method: "isFontThruline()", param: "-", return: "boolean", explain: "Strikethrough state." },
  { method: "setFontThruline(v)", param: "boolean", return: "void", explain: "Toggle strikethrough." },
  { method: "isFontUnderline()", param: "-", return: "boolean", explain: "Underline state." },
  { method: "setFontUnderline(v)", param: "boolean", return: "void", explain: "Toggle underline." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Border state." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Toggle border." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Background type." },
  { method: "setBackgroundType(t)", param: "BackgroundType", return: "void", explain: "Set background type." },
  { method: "getWhiteSpace()", param: "-", return: "'normal'|'pre'|'pre-wrap'|'pre-line'|'break-spaces'|null", explain: "Whitespace policy." },
  { method: "setWhiteSpace(ws)", param: "same type", return: "void", explain: "Set whitespace (null=default)." },
  { method: "getCopyButtonText()", param: "-", return: "string", explain: "Copy button label." },
  { method: "setCopyButtonText(t)", param: "string", return: "void", explain: "Set copy button label." },
  { method: "isCopyEnabled()", param: "-", return: "boolean", explain: "Copy enabled state." },
  { method: "setCopyEnabled(v)", param: "boolean", return: "void", explain: "Enable/disable copy." },
  { method: "isShowCopyButton()", param: "-", return: "boolean", explain: "Show copy button." },
  { method: "setShowCopyButton(v)", param: "boolean", return: "void", explain: "Toggle copy button." },
  { method: "copy()", param: "-", return: "Promise<boolean>", explain: "Copy rendered text." },
]

/* columns & loaders */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '35%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '20%' },
  { id: 'param', header: 'param', dataType: 'text', width: '20%' },
  { id: 'return', header: 'return', dataType: 'text', width: '25%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
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
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>

    <HParagraph
      id="paragraph-demo"
      class="hison-col-6-pc hison-col-6-mb"
      :border="true"
      :copyEnabled="true"
      :showCopyButton="true"
      :whiteSpace="'pre-wrap'"
      style="min-height: 100px;"
      title="Demo paragraph"
    >
{{
props.lang === 'en'
  ? `Hello world
This is a demo paragraph.
Try the copy button →`
  : `안녕하세요
이 문단은 데모입니다.
복사 버튼을 눌러보세요 →`
}}
    </HParagraph>

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>

    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>

    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="paragraphSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'140px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="paragraphPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'480px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="paragraphEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'180px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="paragraphMethodGrid"
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