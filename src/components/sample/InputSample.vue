<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

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
  id="text"
  class="hison-col-9"
  :input-type="'text'"
  :model-value="props.lang==='en' ? 'This is text type input' : 'text 타입 input입니다.'"
/>
<HInput
  id="mask"
  class="hison-col-9"
  :input-type="'mask'"
  :model-value="'HR-123'"
  :format="'AA-999'"
/>
<HInput
  id="digit"
  class="hison-col-9"
  :input-type="'digit'"
  :model-value="'12345'"
/>
<HInput
  id="email"
  class="hison-col-9"
  :input-type="'email'"
  :model-value="'hison0319@gmail.com'"
/>
<HInput
  id="password"
  class="hison-col-9"
  :input-type="'password'"
  :model-value="'1234'"
/>
<HInput
  id="textarea"
  class="hison-col-9"
  :input-type="'textarea'"
  :model-value="props.lang==='en' ? 'This is textarea type input' : 'textarea 타입 input입니다.'"
/>
<HInput
  id="date"
  class="hison-col-9"
  :input-type="'date'"
  :model-value="'2025-12-31'"
/>
<HInput
  id="month"
  class="hison-col-9"
  :input-type="'month'"
  :model-value="'2025-12'"
/>
<HInput
  id="time"
  class="hison-col-9"
  :input-type="'time'"
  :model-value="'121212'"
/>
<HInput
  class="hison-col-9"
  :input-type="'number'"
  :model-value="1234.1234"
  :format="'#,##0.##'"
/>
<HInput
  id="checkbox"
  class="hison-col-9"
  :input-type="'checkbox'"
  :model-value="true"
/>
<HInput
  id="radio1"
  name="radio"
  class="hison-col-3"
  :input-type="'radio'"
  :model-value="true"
/>
<HInput
  id="radio2"
  name="radio"
  class="hison-col-3"
  :input-type="'radio'"
  :model-value="false"
/>
<HInput
  id="radio3"
  name="radio"
  class="hison-col-3"
  :input-type="'radio'"
  :model-value="false"
/>
<HInput
  id="range"
  class="hison-col-9"
  :input-type="'range'"
  :model-value="50"
/>
<HInput
  id="color"
  class="hison-col-9"
  :input-type="'color'"
  :model-value="'#128483'"
/>
<HInput
  id="select"
  class="hison-col-9"
  :input-type="'select'"
  :model-value="'v3'"
  :options="[
    { text: 'text1', value: 'v1' },
    { text: 'text2', value: 'v2' },
    { text: 'text3', value: 'v3' },
    { text: 'text4', value: 'v4' },
    { text: 'text5', value: 'v5' },
    { text: 'text6', value: 'v6' },
    { text: 'text7', value: 'v7' },
  ]"
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
  t1250: `input types`,
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
  id="textInput"
  class="hison-col-9"
  :input-type="'text'"
  :model-value="props.lang==='en' ? 'This is text type input' : 'text 타입 input입니다.'"
/>
<HInput
  id="maskInput"
  class="hison-col-9"
  :input-type="'mask'"
  :model-value="'HR-123'"
  :format="'AA-999'"
/>
<HInput
  id="digitInput"
  class="hison-col-9"
  :input-type="'digit'"
  :model-value="'12345'"
/>
<HInput
  id="emailInput"
  class="hison-col-9"
  :input-type="'email'"
  :model-value="'hison0319@gmail.com'"
/>
<HInput
  id="passwordInput"
  class="hison-col-9"
  :input-type="'password'"
  :model-value="'1234'"
/>
<HInput
  id="textareaInput"
  class="hison-col-9"
  :input-type="'textarea'"
  :model-value="props.lang==='en' ? 'This is textarea type input' : 'textarea 타입 input입니다.'"
/>
<HInput
  id="dateInput"
  class="hison-col-9"
  :input-type="'date'"
  :model-value="'2025-12-31'"
/>
<HInput
  id="monthInput"
  class="hison-col-9"
  :input-type="'month'"
  :model-value="'2025-12'"
/>
<HInput
  id="timeInput"
  class="hison-col-9"
  :input-type="'time'"
  :model-value="'121212'"
/>
<HInput
  class="hison-col-9"
  :input-type="'number'"
  :model-value="1234.1234"
  :format="'#,##0.##'"
/>
<HInput
  id="checkboxInput"
  class="hison-col-9"
  :input-type="'checkbox'"
  :model-value="true"
/>
<HInput
  id="radio1Input"
  name="radio"
  class="hison-col-3"
  :input-type="'radio'"
  :model-value="true"
/>
<HInput
  id="radio2Input"
  name="radio"
  class="hison-col-3"
  :input-type="'radio'"
  :model-value="false"
/>
<HInput
  id="radio3Input"
  name="radio"
  class="hison-col-3"
  :input-type="'radio'"
  :model-value="false"
/>
<HInput
  id="rangeInput"
  class="hison-col-9"
  :input-type="'range'"
  :model-value="50"
/>
<HInput
  id="colorInput"
  class="hison-col-9"
  :input-type="'color'"
  :model-value="'#128483'"
/>
<HInput
  id="selectInput"
  class="hison-col-9"
  :input-type="'select'"
  :model-value="'v3'"
  :options="[
    { text: 'text1', value: 'v1' },
    { text: 'text2', value: 'v2' },
    { text: 'text3', value: 'v3' },
    { text: 'text4', value: 'v4' },
    { text: 'text5', value: 'v5' },
    { text: 'text6', value: 'v6' },
    { text: 'text7', value: 'v7' },
  ]"
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
  t1250: `input types`,
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
  { prop: "inputType", type: "'text'|'mask'|'number'|'digit'|'date'\n|'month'|'time'|'email'|'password'\n|'checkbox'|'radio'|'range'|'color'\n|'textarea'|'select'", default: "'text'", explain: "입력 타입." },
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
  { prop: "toggleStyle", type: "'default' | 'switch'", default: "'default'", explain: "input이 checkbox 또는 radio 타입(toggle type)인 경우 적용할 style.\ndefault: 기본 모양, switch: 스위치 모양의 토글." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getInput(id)." },
  { prop: "name", type: "string", default: "same as id", explain: "HTML name. Group key for radios." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "hison-* responsive/color/size classes." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style." },
  { prop: "visible", type: "boolean", default: "true", explain: "Visibility." },
  { prop: "modelValue", type: "any", default: "-", explain: "v-model value." },
  { prop: "inputType", type: "'text'|'mask'|'number'|'digit'|'date'\n|'month'|'time'|'email'|'password'\n|'checkbox'|'radio'|'range'|'color'\n|'textarea'|'select'", default: "'text'", explain: "Input type." },
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
  { prop: "toggleStyle", type: "'default' | 'switch'", default: "'default'", explain: "Style to apply when input is checkbox or radio type (toggle type). \ndefault: default appearance, switch: toggle with switch appearance." },
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
  { method: "getToggleStyle()/setToggleStyle()", param: "string", return: "'default'|'switch'", explain: "radio, checkbox의 모양." },
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
  { method: "getToggleStyle()/setToggleStyle()", param: "string", return: "'default'|'switch'", explain: "radio, checkbox style" },
  { method: "getTabIndex()/setTabIndex()", param: "number|null", return: "number|null|void", explain: "Tab index." },
  { method: "focus()", param: "-", return: "void", explain: "Focus input." },
  { method: "getId()", param: "-", return: "string", explain: "Unique id." },
  { method: "reload()", param: "-", return: "void", explain: "Force re-render." },
]

const inputTypeGridDataKo = [
  { type: "text", format: "-", value: "string", explain: "일반 문자열을 받는 input" },
  { type: "mask", format: "문자: A/a 숫자: 9", value: "string", explain: "format의 형태로만 입력가능.\nA: 대문자만 입력가능\n a: 소문자만 입력가능\n9: 숫자만 입력가능\n그외: 동일한 문자만 입력가능\nEx) AA-999이면 HR-123" },
  { type: "digit", format: "[0-9]", value: "number", explain: "0에서 9까지 단순 숫자만 입력가능" },
  { type: "email", format: "사용자 커스텀 필요", value: "string", explain: "단순하게 html input type email을 활용함." },
  { type: "password", format: "'·'으로 표현", value: "string", explain: "html input type password를 활용하며, 보여주기시 모든 문자를 ·로 표기함" },
  { type: "textarea", format: "-", value: "string", explain: "html textarea를 활용함." },
  { type: "date", format: "hison DateFormat", value: "string", explain: "입력 시 html input date를 활용하며, 출력 시 설정된 날짜 포맷의 문자열로 출력함." },
  { type: "month", format: "hison YearMonthFormat", value: "string", explain: "입력 시 html input month를 활용하며, 출력 시 설정된 년월 포맷의 문자열로 출력함." },
  { type: "time", format: "hison TimeFormat", value: "string", explain: "입력 시 html input time을 활용하며, 출력 시 설정된 Time 포맷의 문자열로 출력함." },
  { type: "number", format: "integer: #,###/#,##0/#/0 \ndecimal: #/0 ", value: "number", explain: "입력 시 html input number를 활용함. format에 따라 문자열 출력함.\n정수부  #,###: 1,234\n#,##0: 1,234는 동일 하지만 1의 자리 숫자가 없어도 0으로 표기.\n소수부: #: 숫자가 있을 때만 표기\n0: 숫자가 없으면 '0'으로 표기\nEx) 1234.9876(#,###.##) => 1,234.99\nformat마지막에 '%'가 있으면 백분율 표기\n그외 앞뒤로 특정 문자는 문자와 함께 표기.\nhison.utils.getNumberFormat을 이용함." },
  { type: "checkbox", format: "-", value: "boolean", explain: "value는 boolean이지만 출력 텍스트는 checkedText, uncheckedText 활용" },
  { type: "radio", format: "-", value: "boolean", explain: "value는 boolean이지만 출력 텍스트는 checkedText, uncheckedText 활용\n name속성을 동일하게 지정하면 동일한 분류의 radio로 묶임." },
  { type: "range", format: "-", value: "number", explain: "html input type range활용." },
  { type: "color", format: "-", value: "string", explain: "html input type coler활용." },
  { type: "select", format: "-", value: "Array", explain: "html input type select활용.\noptions를 통해 select option지정\nmodel-value의 값은 options에 있는 value로 설정하면 됨." }
]
const inputTypeGridDataEn = [
  { type: "text", format: "-", value: "string", explain: "An input that receives a plain string." },
  { type: "mask", format: "Char: A/a  Number: 9", value: "string", explain: "Input is restricted to match the given format.\nA: uppercase only\n a: lowercase only\n9: numbers only\nOthers: must match the same literal character\nEx) AA-999 → HR-123" },
  { type: "digit", format: "[0-9]", value: "number", explain: "Allows only simple numeric input from 0 to 9." },
  { type: "email", format: "Custom required", value: "string", explain: "Uses the standard HTML input type 'email'." },
  { type: "password", format: "expressed as '·'", value: "string", explain: "Uses HTML input type 'password'; all characters are shown as · when visible." },
  { type: "textarea", format: "-", value: "string", explain: "Uses an HTML textarea element." },
  { type: "date", format: "hison DateFormat", value: "string", explain: "Uses HTML input type 'date' for entry and outputs a formatted date string according to the configured format." },
  { type: "month", format: "hison YearMonthFormat", value: "string", explain: "Uses HTML input type 'month' for entry and outputs a formatted year-month string according to the configured format." },
  { type: "time", format: "hison TimeFormat", value: "string", explain: "Uses HTML input type 'time' for entry and outputs a formatted time string according to the configured format." },
  { type: "number", format: "integer: #,###/#,##0/#/0 \ndecimal: #/0", value: "number", explain: "Uses HTML input type 'number'. Outputs formatted strings based on the given format.\nInteger part: #,### → 1,234\n#,##0 → same as above but shows 0 if the ones digit is missing.\nDecimal part: #: displays only when digits exist\n0: displays '0' when no digits exist\nEx) 1234.9876 (#,###.##) → 1,234.99\nIf the format ends with '%', it is shown as a percentage.\nOther characters before or after the format are shown together.\nUses hison.utils.getNumberFormat." },
  { type: "checkbox", format: "-", value: "boolean", explain: "The value is boolean, but the displayed text uses checkedText and uncheckedText." },
  { type: "radio", format: "-", value: "boolean", explain: "The value is boolean, but the displayed text uses checkedText and uncheckedText.\nWhen 'name' attributes are identical, they form a radio group." },
  { type: "range", format: "-", value: "number", explain: "Uses HTML input type 'range'." },
  { type: "color", format: "-", value: "string", explain: "Uses HTML input type 'color'." },
  { type: "select", format: "-", value: "Array", explain: "Uses HTML select element.\nOptions are defined via 'options'.\nThe model-value should correspond to one of the option values." }
]

// column defs & loaders
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '24%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '76%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'type', header: 'type', dataType: 'text', width: '25%' },
  { id: 'default', header: 'default', dataType: 'text', width: '12%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '43%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '35%' },
  { id: 'args', header: 'args', dataType: 'text', width: '45%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '25%' },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]
const inputTypeColumn: HGridColumn[] = [
  { id: 'type', header: 'type', dataType: 'text', width: '15%' },
  { id: 'format', header: 'format', dataType: 'text', width: '20%' },
  { id: 'value', header: 'value', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '50%' },
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
const mountInputTypeGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? inputTypeGridDataEn : inputTypeGridDataKo)
}
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>

    <HCaption :level="5" class="hison-col-12">{{ contents.t1010 }}</HCaption>
    <HInputGroup id="group1">
      <HLayout>
        <HLabel class="hison-col-3">Type: text</HLabel>
        <HInput
          id="textInput"
          class="hison-col-9"
          :input-type="'text'"
          :model-value="props.lang==='en' ? 'This is text type input' : 'text 타입 input입니다.'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: mask (format: AA-999)</HLabel>
        <HInput
          id="maskInput"
          class="hison-col-9"
          :input-type="'mask'"
          :model-value="'HR-123'"
          :format="'AA-999'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: digit</HLabel>
        <HInput
          id="digitInput"
          class="hison-col-9"
          :input-type="'digit'"
          :model-value="'12345'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: email</HLabel>
        <HInput
          id="emailInput"
          class="hison-col-9"
          :input-type="'email'"
          :model-value="'hison0319@gmail.com'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: password</HLabel>
        <HInput
          id="passwordInput"
          class="hison-col-9"
          :input-type="'password'"
          :model-value="'1234'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: textarea</HLabel>
        <HInput
          id="textareaInput"
          class="hison-col-9"
          :input-type="'textarea'"
          :model-value="props.lang==='en' ? 'This is textarea type input' : 'textarea 타입 input입니다.'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: date</HLabel>
        <HInput
          id="dateInput"
          class="hison-col-9"
          :input-type="'date'"
          :model-value="'2025-12-31'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: month</HLabel>
        <HInput
          id="monthInput"
          class="hison-col-9"
          :input-type="'month'"
          :model-value="'2025-12'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: time</HLabel>
        <HInput
          id="timeInput"
          class="hison-col-9"
          :input-type="'time'"
          :model-value="'121212'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: number (format: #,##0.##)</HLabel>
        <HInput
          class="hison-col-9"
          :input-type="'number'"
          :model-value="1234.1234"
          :format="'#,##0.##'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: checkbox</HLabel>
        <HInput
          id="checkboxInput"
          class="hison-col-9"
          :input-type="'checkbox'"
          :model-value="true"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: radio</HLabel>
        <HInput
          id="radio1Input"
          name="radio"
          class="hison-col-3"
          :input-type="'radio'"
          :model-value="true"
        />
        <HInput
          id="radio2Input"
          name="radio"
          class="hison-col-3"
          :input-type="'radio'"
          :model-value="false"
        />
        <HInput
          id="radio3Input"
          name="radio"
          class="hison-col-3"
          :input-type="'radio'"
          :model-value="false"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: range</HLabel>
        <HInput
          id="rangeInput"
          class="hison-col-9"
          :input-type="'range'"
          :model-value="50"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: color</HLabel>
        <HInput
          id="colorInput"
          class="hison-col-9"
          :input-type="'color'"
          :model-value="'#128483'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: select</HLabel>
        <HInput
          id="selectInput"
          class="hison-col-9"
          :input-type="'select'"
          :model-value="'v3'"
          :options="[
            { text: 'text1', value: 'v1' },
            { text: 'text2', value: 'v2' },
            { text: 'text3', value: 'v3' },
            { text: 'text4', value: 'v4' },
            { text: 'text5', value: 'v5' },
            { text: 'text6', value: 'v6' },
            { text: 'text7', value: 'v7' },
          ]"
        />
      </HLayout>
    </HInputGroup>

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1040 }}</HCaption>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1050 }}</HCaption>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1060 }}</HCaption>
    <CodeParagraph :code="contents.c1060" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="inputSlotGrid"
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
      id="inputPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'600px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1250 }}</HCaption>
    <HGrid
      id="inputTypeGrid"
      :columns="inputTypeColumn"
      class="hison-col-12 hison-size-m"
      :height="'800px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountInputTypeGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="inputEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'400px'"
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