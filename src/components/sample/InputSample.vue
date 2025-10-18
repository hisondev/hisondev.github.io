<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* ----------------------------- Demo reactive states ----------------------------- */
const demoStatus = ref<'A' | 'I' | ''>('A')
const demoText = ref<string>('Hello Hisonvue')
const demoNumber = ref<number|''>(12345)
const demoRadioGroup = ref<{ [k: string]: string | null }>({ lang: 'r-ko', theme: null })

/* ----------------------------------- i18n text ---------------------------------- */
const ko = {
  t1000:
`하단은 HInput(다목적 입력) 컴포넌트의 샘플입니다.

HInput은 다양한 입력 타입(text/number/date/checkbox/radio/select 등)과 포맷팅, 유효성, 읽기전용 뷰(span) 전환,
그리고 hison.component.getInput(id)를 통한 런타임 제어를 제공합니다.`,
  t1010: `간단한 라이브 데모`,
  t1030:
`주요 특징

· 다양한 inputType(text, number, date, month, time, email, password, digit, mask, textarea, range, color, checkbox, radio, select)
· 숫자/날짜/마스크 포맷(format) 및 min/max/round 제약
· 길이 제한(maxLength/maxByte), 필수/가시성/편집 상태(editMode)
· 라디오 그룹(name) & HInputGroup과의 매핑 { [name]: selectedRadioId | null }
· 모든 DOM 이벤트에서 HInputMethods를 함께 전송
· 읽기전용일 때도 일관된 레이아웃(span + 숨은 input)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HInput
  id="userStatus"
  inputType="select"
  :options="[
    { text: 'Active', value: 'A' },
    { text: 'Inactive', value: 'I' }
  ]"
  v-model="status"
/>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const input = hison.component.getInput('userStatus')
input.setValue('A')
input.setVisible(true)
input.setEditMode('editable')

// Radio: r1을 "lang"에서 "locale" 그룹으로 이동
const r1 = hison.component.getInput('r1')
r1.setName('locale')`,
  t1060: `라디오 그룹 예시`,
  c1060:
`<HInputGroup id="prefForm" v-model="form">
  <HInput id="r-ko" inputType="radio" name="lang" :modelValue="true" />
  <HInput id="r-en" inputType="radio" name="lang" />
  <HInput id="r-theme-d" inputType="radio" name="theme" />
</HInputGroup>
<!-- 결과 예: { lang: "r-ko", theme: null } -->`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the sample for HInput (versatile input).

HInput supports many input types, formatting, constraints, a readonly span view,
and full runtime control via hison.component.getInput(id).`,
  t1010: `Live demo`,
  t1030:
`Main Features

· Multiple input types (text, number, date, month, time, email, password, digit, mask, textarea, range, color, checkbox, radio, select)
· Formatting (format) + numeric/date constraints (min/max/round)
· Length limit (maxLength/maxByte), required/visible/editMode
· Radio grouping via name + HInputGroup mapping { [name]: selectedRadioId | null }
· All DOM events emit HInputMethods
· Consistent readonly view (span + hidden input)`,
  t1040: `Template Example`,
  c1040:
`<HInput
  id="userStatus"
  inputType="select"
  :options="[
    { text: 'Active', value: 'A' },
    { text: 'Inactive', value: 'I' }
  ]"
  v-model="status"
/>`,
  t1050: `Runtime Example`,
  c1050:
`const input = hison.component.getInput('userStatus')
input.setValue('A')
input.setVisible(true)
input.setEditMode('editable')

// Radio: move r1 from "lang" to "locale"
const r1 = hison.component.getInput('r1')
r1.setName('locale')`,
  t1060: `Radio Group Example`,
  c1060:
`<HInputGroup id="prefForm" v-model="form">
  <HInput id="r-ko" inputType="radio" name="lang" :modelValue="true" />
  <HInput id="r-en" inputType="radio" name="lang" />
  <HInput id="r-theme-d" inputType="radio" name="theme" />
</HInputGroup>
<!-- Result e.g.: { lang: "r-ko", theme: null } -->`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const contents = props.lang === 'en' ? en : ko

/* ----------------------------------- tables ------------------------------------ */
// Slot (N/A)
const slotGridDataKo = [{ slot: '—', explain: '해당 컴포넌트는 사용자 슬롯을 제공하지 않습니다.' }]
const slotGridDataEn = [{ slot: '—', explain: 'This component does not provide user slots.' }]

// Props
const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getInput(id)로 접근." },
  { prop: "name", type: "string", default: "id와 동일", explain: "HTML name. radio의 그룹키로 사용." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "hison-* 반응형/색상/사이즈 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "컴포넌트 표시 여부." },
  { prop: "modelValue", type: "any", default: "-", explain: "v-model 바인딩 값." },
  { prop: "inputType", type: "'text'|'mask'|'number'|'digit'|'date'|'month'|'time'|'email'|'password'|'checkbox'|'radio'|'range'|'color'|'textarea'|'select'", default: "'text'", explain: "입력 타입." },
  { prop: "format", type: "string", default: "-", explain: "숫자/날짜/마스크 표시 포맷." },
  { prop: "nullText", type: "string", default: "-", explain: "읽기전용일 때 값이 없으면 표시할 텍스트." },
  { prop: "maxNumber / minNumber / roundNumber", type: "String|Number", default: "-", explain: "숫자 제약 및 반올림 자리수." },
  { prop: "maxLength / maxByte", type: "String|Number", default: "-", explain: "길이 제한(문자/바이트)." },
  { prop: "placeholder", type: "string", default: "-", explain: "빈 값일 때 placeholder." },
  { prop: "editMode", type: "'editable'|'disable'|'readonly'", default: "'editable'", explain: "편집 상태." },
  { prop: "required", type: "boolean", default: "false", explain: "필수 여부." },
  { prop: "fontBold / fontItalic / fontThruline / fontUnderline", type: "boolean", default: "각 false", explain: "읽기전용 텍스트 스타일." },
  { prop: "title", type: "string", default: "-", explain: "툴팁(HTML title)." },
  { prop: "options", type: "{ text:string; value:any }[]", default: "[]", explain: "select 타입의 옵션." },
  { prop: "border", type: "boolean", default: "true", explain: "보더(박스섀도) 표시." },
  { prop: "checkedText / uncheckedText", type: "string", default: "'Y' / 'N'", explain: "checkbox/radio의 읽기전용 표시 텍스트." },
  { prop: "inputTextdHandler", type: "(value:any)=>string", default: "-", explain: "읽기전용 span 텍스트 포매터." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getInput(id)." },
  { prop: "name", type: "string", default: "same as id", explain: "HTML name. Group key for radios." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "hison-* responsive/color/size classes." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style." },
  { prop: "visible", type: "boolean", default: "true", explain: "Visibility." },
  { prop: "modelValue", type: "any", default: "-", explain: "v-model value." },
  { prop: "inputType", type: "'text'|'mask'|'number'|'digit'|'date'|'month'|'time'|'email'|'password'|'checkbox'|'radio'|'range'|'color'|'textarea'|'select'", default: "'text'", explain: "Input type." },
  { prop: "format", type: "string", default: "-", explain: "Format for number/date/mask." },
  { prop: "nullText", type: "string", default: "-", explain: "Readonly empty text." },
  { prop: "maxNumber / minNumber / roundNumber", type: "String|Number", default: "-", explain: "Numeric constraints & rounding." },
  { prop: "maxLength / maxByte", type: "String|Number", default: "-", explain: "Length limits (char/byte)." },
  { prop: "placeholder", type: "string", default: "-", explain: "Placeholder when empty." },
  { prop: "editMode", type: "'editable'|'disable'|'readonly'", default: "'editable'", explain: "Edit state." },
  { prop: "required", type: "boolean", default: "false", explain: "Required or not." },
  { prop: "fontBold / fontItalic / fontThruline / fontUnderline", type: "boolean", default: "all false", explain: "Readonly text styles." },
  { prop: "title", type: "string", default: "-", explain: "Tooltip (title attr)." },
  { prop: "options", type: "{ text:string; value:any }[]", default: "[]", explain: "Options for select type." },
  { prop: "border", type: "boolean", default: "true", explain: "Border (box-shadow)." },
  { prop: "checkedText / uncheckedText", type: "string", default: "'Y' / 'N'", explain: "Readonly text for checkbox/radio." },
  { prop: "inputTextdHandler", type: "(value:any)=>string", default: "-", explain: "Custom span text formatter." },
]

// Events
const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 시", args: "(HInputMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "값 변경", args: "(any)" },
  { event: "input", trigger: "입력 중", args: "(Event, HInputMethods, value)" },
  { event: "change", trigger: "블러/체크 변경 등", args: "(oldValue, newValue, HInputMethods)" },
  { event: "focus / blur", trigger: "포커스/해제", args: "(FocusEvent|Event, HInputMethods)" },
  { event: "click / dblclick", trigger: "읽기전용(span) 클릭/더블클릭", args: "(MouseEvent, HInputMethods)" },
  { event: "mouse* / pointer* / touch*", trigger: "각종 포인터/터치 이벤트", args: "(Event, HInputMethods)" },
  { event: "keydown / keyup", trigger: "키보드 이벤트", args: "(KeyboardEvent, HInputMethods)" },
  { event: "composition*", trigger: "IME 조합 입력", args: "(CompositionEvent, HInputMethods)" },
  { event: "drag* / drop", trigger: "드래그앤드롭", args: "(DragEvent, HInputMethods)" },
  { event: "copy / cut / paste / wheel / contextmenu", trigger: "클립보드/휠/컨텍스트", args: "(Event, HInputMethods)" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount", args: "(HInputMethods)" },
  { event: "responsive-change", trigger: "Device class change", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "Value changed", args: "(any)" },
  { event: "input", trigger: "During input", args: "(Event, HInputMethods, value)" },
  { event: "change", trigger: "On blur/selection change", args: "(oldValue, newValue, HInputMethods)" },
  { event: "focus / blur", trigger: "Focus/Blur", args: "(FocusEvent|Event, HInputMethods)" },
  { event: "click / dblclick", trigger: "Readonly span click/dblclick", args: "(MouseEvent, HInputMethods)" },
  { event: "mouse* / pointer* / touch*", trigger: "Pointer/Touch events", args: "(Event, HInputMethods)" },
  { event: "keydown / keyup", trigger: "Keyboard events", args: "(KeyboardEvent, HInputMethods)" },
  { event: "composition*", trigger: "IME composition", args: "(CompositionEvent, HInputMethods)" },
  { event: "drag* / drop", trigger: "Drag & Drop", args: "(DragEvent, HInputMethods)" },
  { event: "copy / cut / paste / wheel / contextmenu", trigger: "Clipboard/Wheel/Contextmenu", args: "(Event, HInputMethods)" },
]

// Methods (요약본)
const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'input'", explain: "컴포넌트 타입." },
  { method: "getName()", param: "-", return: "string", explain: "현재 name 조회(라디오 그룹 키)." },
  { method: "setName(name)", param: "string", return: "void", explain: "name 설정(라디오 그룹 재등록)." },
  { method: "getText()", param: "-", return: "string", explain: "읽기전용 표시 텍스트." },
  { method: "getValue()", param: "-", return: "any", explain: "현재 값 조회." },
  { method: "setValue(v)", param: "any", return: "void", explain: "값 설정(포맷/검증 적용)." },
  { method: "getInputType()", param: "-", return: "InputTypeValue", explain: "입력 타입 조회." },
  { method: "setInputType(t)", param: "InputType", return: "void", explain: "입력 타입 설정." },
  { method: "getFormat()", param: "-", return: "string", explain: "포맷 문자열 조회." },
  { method: "setFormat(fmt)", param: "string", return: "void", explain: "포맷 설정." },
  { method: "getTitle() / setTitle()", param: "string", return: "string|void", explain: "툴팁(title) 제어." },
  { method: "getNullText() / setNullText()", param: "string", return: "string|void", explain: "nullText 제어." },
  { method: "getEditMode() / setEditMode()", param: "EditMode", return: "EditMode|void", explain: "편집 상태 제어." },
  { method: "getMaxNumber()/setMaxNumber()", param: "number", return: "number|null|void", explain: "최대값." },
  { method: "getMinNumber()/setMinNumber()", param: "number", return: "number|null|void", explain: "최소값." },
  { method: "getRoundNumber()/setRoundNumber()", param: "number", return: "number|null|void", explain: "반올림 자리수." },
  { method: "getMaxLength()/setMaxLength()", param: "number", return: "number|null|void", explain: "문자 길이 제한." },
  { method: "getMaxByte()/setMaxByte()", param: "number", return: "number|null|void", explain: "바이트 길이 제한(UTF-8)." },
  { method: "getRequired()/setRequired()", param: "boolean", return: "boolean|void", explain: "필수 여부." },
  { method: "getPlaceholder()/setPlaceholder()", param: "string", return: "string|void", explain: "placeholder 제어." },
  { method: "isFontBold()/setFontBold()", param: "boolean", return: "boolean|void", explain: "볼드 스타일." },
  { method: "isFontItalic()/setFontItalic()", param: "boolean", return: "boolean|void", explain: "이탤릭 스타일." },
  { method: "isFontThruline()/setFontThruline()", param: "boolean", return: "boolean|void", explain: "취소선 스타일." },
  { method: "isFontUnderline()/setFontUnderline()", param: "boolean", return: "boolean|void", explain: "밑줄 스타일." },
  { method: "getTextAlign()/setTextAlign()", param: "TextAlign", return: "TextAlignValue|void", explain: "정렬(left/center/right)." },
  { method: "isBorder()/setBorder()", param: "boolean", return: "boolean|void", explain: "보더(섀도) 토글." },
  { method: "isModified()/setModified()", param: "boolean", return: "boolean|void", explain: "수정 플래그." },
  { method: "getTabIndex()/setTabIndex()", param: "number|null", return: "number|null|void", explain: "포커스 순서." },
  { method: "focus()", param: "-", return: "void", explain: "입력 포커스." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트 고유 ID." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'input'", explain: "Component type." },
  { method: "getName()", param: "-", return: "string", explain: "Current name (radio group key)." },
  { method: "setName(name)", param: "string", return: "void", explain: "Set name (re-group radios)." },
  { method: "getText()", param: "-", return: "string", explain: "Readonly span text." },
  { method: "getValue()", param: "-", return: "any", explain: "Get value." },
  { method: "setValue(v)", param: "any", return: "void", explain: "Set value with formatting." },
  { method: "getInputType()", param: "-", return: "InputTypeValue", explain: "Get input type." },
  { method: "setInputType(t)", param: "InputType", return: "void", explain: "Set input type." },
  { method: "getFormat()", param: "-", return: "string", explain: "Get format string." },
  { method: "setFormat(fmt)", param: "string", return: "void", explain: "Set format." },
  { method: "getTitle() / setTitle()", param: "string", return: "string|void", explain: "Tooltip control." },
  { method: "getNullText() / setNullText()", param: "string", return: "string|void", explain: "Null-text control." },
  { method: "getEditMode() / setEditMode()", param: "EditMode", return: "EditMode|void", explain: "Edit state." },
  { method: "getMaxNumber()/setMaxNumber()", param: "number", return: "number|null|void", explain: "Max value." },
  { method: "getMinNumber()/setMinNumber()", param: "number", return: "number|null|void", explain: "Min value." },
  { method: "getRoundNumber()/setRoundNumber()", param: "number", return: "number|null|void", explain: "Rounding precision." },
  { method: "getMaxLength()/setMaxLength()", param: "number", return: "number|null|void", explain: "Char limit." },
  { method: "getMaxByte()/setMaxByte()", param: "number", return: "number|null|void", explain: "Byte limit (UTF-8)." },
  { method: "getRequired()/setRequired()", param: "boolean", return: "boolean|void", explain: "Required flag." },
  { method: "getPlaceholder()/setPlaceholder()", param: "string", return: "string|void", explain: "Placeholder." },
  { method: "isFontBold()/setFontBold()", param: "boolean", return: "boolean|void", explain: "Bold style." },
  { method: "isFontItalic()/setFontItalic()", param: "boolean", return: "boolean|void", explain: "Italic style." },
  { method: "isFontThruline()/setFontThruline()", param: "boolean", return: "boolean|void", explain: "Strikethrough style." },
  { method: "isFontUnderline()/setFontUnderline()", param: "boolean", return: "boolean|void", explain: "Underline style." },
  { method: "getTextAlign()/setTextAlign()", param: "TextAlign", return: "TextAlignValue|void", explain: "Alignment." },
  { method: "isBorder()/setBorder()", param: "boolean", return: "boolean|void", explain: "Border toggle." },
  { method: "isModified()/setModified()", param: "boolean", return: "boolean|void", explain: "Modified flag." },
  { method: "getTabIndex()/setTabIndex()", param: "number|null", return: "number|null|void", explain: "Tab index." },
  { method: "focus()", param: "-", return: "void", explain: "Focus input." },
  { method: "getId()", param: "-", return: "string", explain: "Unique id." },
  { method: "reload()", param: "-", return: "void", explain: "Force re-render." },
]

// column defs & loaders
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '24%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '76%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'type', header: 'type', dataType: 'text', width: '40%' },
  { id: 'default', header: 'default', dataType: 'text', width: '12%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '28%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '22%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '44%' },
  { id: 'args', header: 'args', dataType: 'text', width: '34%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '26%' },
  { id: 'param', header: 'param', dataType: 'text', width: '34%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '26%' },
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

    <HCaption :level="5" class="hison-col-12">{{ contents.t1010 }}</HCaption>
    <HLayout class="hison-col-12" style="gap: 8px;">
      <!-- text -->
      <HInput
        id="inp-demo-text"
        class="hison-col-12-mb hison-col-4-pc"
        inputType="text"
        v-model="demoText"
        :placeholder="props.lang==='en' ? 'Type here' : '여기에 입력'"
        :border="true"
      />
      <!-- number w/ format -->
      <HInput
        id="inp-demo-number"
        class="hison-col-12-mb hison-col-4-pc"
        inputType="number"
        :format="'#,##0'"
        :maxNumber="99999999"
        v-model="demoNumber"
        :title="props.lang==='en' ? 'Formatted number' : '숫자 포맷'"
      />
      <!-- select -->
      <HInput
        id="inp-demo-select"
        class="hison-col-12-mb hison-col-4-pc"
        inputType="select"
        v-model="demoStatus"
        :options="[
          { text: props.lang==='en' ? 'Active' : '활성', value: 'A' },
          { text: props.lang==='en' ? 'Inactive' : '비활성', value: 'I' }
        ]"
      />
    </HLayout>

    <HGap/>
    <!-- Radio group live -->
    <HCaption :level="6" class="hison-col-12">{{ props.lang==='en' ? 'Radio Group (by name)' : '라디오 그룹(name 기반)' }}</HCaption>
    <HInputGroup id="prefForm" v-model="demoRadioGroup" class="hison-col-12 hison-size-s">
      <HLayout class="hison-col-12" style="gap:10px; align-items:center;">
        <HCaption :level="6" class="hison-col-12-mb hison-col-2-pc">lang</HCaption>
        <HInput id="r-ko" inputType="radio" name="lang" :modelValue="true"/>
        <HInput id="r-en" inputType="radio" name="lang"/>
        <HCaption :level="6" class="hison-col-12-mb hison-col-2-pc">theme</HCaption>
        <HInput id="r-dark" inputType="radio" name="theme"/>
        <HInput id="r-light" inputType="radio" name="theme"/>
      </HLayout>
    </HInputGroup>

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1040 }}</HCaption>
    <CodeParagraph :code="contents.c1040"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1050 }}</HCaption>
    <CodeParagraph :code="contents.c1050"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1060 }}</HCaption>
    <CodeParagraph :code="contents.c1060"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="inputSlotGrid"
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
      id="inputPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-s"
      :height="'680px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="inputEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-s"
      :height="'560px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="inputMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-s"
      :height="'900px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>