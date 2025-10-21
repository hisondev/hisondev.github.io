<script setup lang="ts">
import { defineProps } from 'vue'
import { hison, type HGridColumn, type HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'
const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HInputGroup(그룹 입력 컨트롤러) 컴포넌트의 샘플입니다.

HInputGroup은 여러 HInput을 감싸고, 데이터 로드/초기화/수정여부/필수검증/일괄 편집모드 적용 등을
런타임 메서드로 제공합니다. 라디오 타입은 name을 그룹키로 묶어 { [name]: 선택된 라디오 id|null } 형태로 관리합니다.`,
  t1010: '라이브 데모',
  t1015: '데모 컴포넌트',
  c1015:
`<HInputGroup id="group1">
  <HLayout>
    <HLabel class="hison-col-3">Type: text</HLabel>
    <HInput
      id="text"
      class="hison-col-9"
      :input-type="'text'"
      :model-value="props.lang==='en' ? 'This is text type input' : 'text 타입 input입니다.'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: mask (format: AA-999)</HLabel>
    <HInput
      id="mask"
      class="hison-col-9"
      :input-type="'mask'"
      :model-value="'HR-123'"
      :format="'AA-999'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: digit</HLabel>
    <HInput
      id="digit"
      class="hison-col-9"
      :input-type="'digit'"
      :model-value="12345"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: email</HLabel>
    <HInput
      id="email"
      class="hison-col-9"
      :input-type="'email'"
      :model-value="'hison0319@gmail.com'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: password</HLabel>
    <HInput
      id="password"
      class="hison-col-9"
      :input-type="'password'"
      :model-value="'1234'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: textarea</HLabel>
    <HInput
      id="textarea"
      class="hison-col-9"
      :input-type="'textarea'"
      :model-value="props.lang==='en' ? 'This is textarea type input' : 'textarea 타입 input입니다.'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: date</HLabel>
    <HInput
      id="date"
      class="hison-col-9"
      :input-type="'date'"
      :model-value="'2025-12-31'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: month</HLabel>
    <HInput
      id="month"
      class="hison-col-9"
      :input-type="'month'"
      :model-value="'2025-12'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: time</HLabel>
    <HInput
      id="time"
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
      id="checkbox"
      class="hison-col-9"
      :input-type="'checkbox'"
      :model-value="true"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: radio</HLabel>
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
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: range</HLabel>
    <HInput
      id="range"
      class="hison-col-9"
      :input-type="'range'"
      :model-value="50"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: color</HLabel>
    <HInput
      id="color"
      class="hison-col-9"
      :input-type="'color'"
      :model-value="'#128483'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: select</HLabel>
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
    />
  </HLayout>
</HInputGroup>`,
  t1020: '데모 동작',
  c1020:
`//샘플 로드
function onLoadSample() {
  const grp = hison.component.getInputGroup('group1')!
  grp.load({
    text: 'load text',
    mask: 'FA-123',
    digit: '98765',
    email: 'test@example.com',
    password: '43214321',
    textarea: 'load textarea\\nload textarea',
    date: '2010-01-01',
    month: '2010-01',
    time: '212121',
    number: 4321.4321,
    checkbox: false,
    radio3: true,
    range: 25,
    color: '#123123',
    select: 'v7',
  })
}
//초기화
function onClear() {
  const grp = hison.component.getInputGroup('group1')!
  grp.clear(true)
}
//전체 비활성화
function onDisable() {
  const grp = hison.component.getInputGroup('group1')!
  grp.setEditMode('disable')
}
//전체 읽기전용
function onReadonly() {
  const grp = hison.component.getInputGroup('group1')!
  grp.setEditMode('readonly')
}
//전체 편집가능
function onEditable() {
  const grp = hison.component.getInputGroup('group1')!
  grp?.setEditMode('editable')
}`,
  t1100: 'slot',
  t1200: 'props',
  t1300: 'events',
  t1400: 'methods',
  demoExplain:
`· userid/email은 입력 id로 매핑됩니다.
· radio(name='agree')는 그룹으로 묶여 선택된 라디오의 id가 form.agree에 저장됩니다.
· [검증] 버튼은 필수값 체크(checkRequired)를 수행합니다.`,
  btnLoad: '샘플 로드',
  btnClear: '초기화',
  btnDisable: '전체 비활성화',
  btnReadonly: '전체 읽기전용',
  btnEditable: '전체 편집가능',
}

const en = {
  t1000:
`Below is the sample for HInputGroup (grouped input controller).

HInputGroup wraps multiple HInput components and provides runtime APIs for loading/clearing data,
tracking modification, validating required fields, and applying group-wide edit mode. Radios are grouped by 'name'
and represented as { [groupName]: selectedRadioId | null }.`,
  t1010: 'Live Demo',
  t1015: 'Component Demo',
  c1015:
`<HInputGroup id="group1">
  <HLayout>
    <HLabel class="hison-col-3">Type: text</HLabel>
    <HInput
      id="text"
      class="hison-col-9"
      :input-type="'text'"
      :model-value="props.lang==='en' ? 'This is text type input' : 'text 타입 input입니다.'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: mask (format: AA-999)</HLabel>
    <HInput
      id="mask"
      class="hison-col-9"
      :input-type="'mask'"
      :model-value="'HR-123'"
      :format="'AA-999'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: digit</HLabel>
    <HInput
      id="digit"
      class="hison-col-9"
      :input-type="'digit'"
      :model-value="12345"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: email</HLabel>
    <HInput
      id="email"
      class="hison-col-9"
      :input-type="'email'"
      :model-value="'hison0319@gmail.com'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: password</HLabel>
    <HInput
      id="password"
      class="hison-col-9"
      :input-type="'password'"
      :model-value="'1234'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: textarea</HLabel>
    <HInput
      id="textarea"
      class="hison-col-9"
      :input-type="'textarea'"
      :model-value="props.lang==='en' ? 'This is textarea type input' : 'textarea 타입 input입니다.'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: date</HLabel>
    <HInput
      id="date"
      class="hison-col-9"
      :input-type="'date'"
      :model-value="'2025-12-31'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: month</HLabel>
    <HInput
      id="month"
      class="hison-col-9"
      :input-type="'month'"
      :model-value="'2025-12'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: time</HLabel>
    <HInput
      id="time"
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
      id="checkbox"
      class="hison-col-9"
      :input-type="'checkbox'"
      :model-value="true"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: radio</HLabel>
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
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: range</HLabel>
    <HInput
      id="range"
      class="hison-col-9"
      :input-type="'range'"
      :model-value="50"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: color</HLabel>
    <HInput
      id="color"
      class="hison-col-9"
      :input-type="'color'"
      :model-value="'#128483'"
    />
  </HLayout>
  <HLayout>
    <HLabel class="hison-col-3">Type: select</HLabel>
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
    />
  </HLayout>
</HInputGroup>`,
  t1020: 'Runtime usage example',
  c1020:
`//Load sample
function onLoadSample() {
  const grp = hison.component.getInputGroup('group1')!
  grp.load({
    text: 'load text',
    mask: 'FA-123',
    digit: '98765',
    email: 'test@example.com',
    password: '43214321',
    textarea: 'load textarea\\nload textarea',
    date: '2010-01-01',
    month: '2010-01',
    time: '212121',
    number: 4321.4321,
    checkbox: false,
    radio3: true,
    range: 25,
    color: '#123123',
    select: 'v7',
  })
}
//Clear
function onClear() {
  const grp = hison.component.getInputGroup('group1')!
  grp.clear(true)
}
//Disable all
function onDisable() {
  const grp = hison.component.getInputGroup('group1')!
  grp.setEditMode('disable')
}
//Readonly all
function onReadonly() {
  const grp = hison.component.getInputGroup('group1')!
  grp.setEditMode('readonly')
}
//Editable all
function onEditable() {
  const grp = hison.component.getInputGroup('group1')!
  grp?.setEditMode('editable')
}`,
  t1100: 'slot',
  t1200: 'props',
  t1300: 'events',
  t1400: 'methods',
  demoExplain:
`· userid/email map by input id.
· Radio (name='agree') is grouped; the selected radio id goes to form.agree.
· [Validate] triggers checkRequired().`,
  btnLoad: 'Load sample',
  btnClear: 'Clear',
  btnDisable: 'Disable all',
  btnReadonly: 'Readonly all',
  btnEditable: 'Editable all',
}

const T = props.lang === 'en' ? en : ko

/* ---------------------------------- tables ----------------------------------- */
// Slot: default only
const slotGridDataKo = [
  { slot: 'default', explain: '그룹에 포함될 <HInput>들을 배치합니다. 라디오는 name으로 그룹화됩니다.' },
]
const slotGridDataEn = [
  { slot: 'default', explain: 'Place child <HInput> components. Radios are grouped by their HTML name.' },
]

// Props
const propGridDataKo = [
  { prop: 'id', type: 'string', default: '-', explain: '고유 그룹 ID. hison.component.getInputGroup(id)로 접근.' },
  { prop: 'editMode', type: "'editable' | 'disable' | 'readonly'", default: "'editable'", explain: '그룹 전체 편집 상태.' },
  { prop: 'status', type: "'C' | 'R' | 'U' | 'D'", default: "'R'", explain: '데이터 상태. 메서드로 get/set 가능.' },
  { prop: 'modelValue', type: 'Record<string, any>', default: '-', explain: '양방향 바인딩. { inputId: value, radioName: selectedRadioId|null }' },
]
const propGridDataEn = [
  { prop: 'id', type: 'string', default: '-', explain: 'Unique group ID. Access via hison.component.getInputGroup(id).' },
  { prop: 'editMode', type: "'editable' | 'disable' | 'readonly'", default: "'editable'", explain: 'Group-wide edit mode.' },
  { prop: 'status', type: "'C' | 'R' | 'U' | 'D'", default: "'R'", explain: 'Data status. Get/Set via methods.' },
  { prop: 'modelValue', type: 'Record<string, any>', default: '-', explain: 'Two-way binding. { inputId: value, radioName: selectedRadioId|null }' },
]

// Events
const eventGridDataKo = [
  { event: 'mounted', trigger: '마운트 완료', args: '(HInputGroupMethods)' },
  { event: 'update:modelValue', trigger: '자식 입력 변경 시', args: '(Record<string, any>)' },
]
const eventGridDataEn = [
  { event: 'mounted', trigger: 'After mount', args: '(HInputGroupMethods)' },
  { event: 'update:modelValue', trigger: 'When any child input changes', args: '(Record<string, any>)' },
]

// Methods
const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'inputGroup'", explain: "컴포넌트 타입 리터럴." },
  { method: "clear(autoSetStatus?)", param: "boolean", return: "void", explain: "모든 자식 값 초기화(옵션: status를 'C'로)." },
  { method: "getDataModel()", param: "-", return: "DataModel", explain: "현재 값을 DataModel(1행)로 반환." },
  { method: "setDataModel(dataModel)", param: "DataModel", return: "void", explain: "첫 번째 행을 사용해 값 로드." },
  { method: "getDataObject()", param: "-", return: "Record<string, any>", explain: "평범한 객체로 값 반환." },
  { method: "setDataObject(obj)", param: "Record<string, any>", return: "void", explain: "객체 값을 일괄 적용." },
  { method: "load(data)", param: "Record | DataModel", return: "void", explain: "데이터 로드(객체/모델)." },
  { method: "getStatus()", param: "-", return: "'C'|'R'|'U'|'D'", explain: "현재 상태 반환." },
  { method: "setStatus(status)", param: "'C'|'R'|'U'|'D'", return: "void", explain: "상태 설정." },
  { method: "isModified()", param: "-", return: "boolean", explain: "자식 중 사용자 변경 여부." },
  { method: "initModified()", param: "-", return: "void", explain: "수정 플래그 초기화." },
  { method: "checkRequired()", param: "-", return: "HInputMethods|null", explain: "필수 항목 검사. 실패 시 첫 컴포넌트 반환." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "그룹 편집 상태 조회." },
  { method: "setEditMode(mode)", param: "EditMode", return: "void", explain: "그룹 편집 상태 일괄 적용." },
  { method: "focus(inputId?)", param: "string?", return: "void", explain: "특정/첫 번째 편집 가능 입력 포커스." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'inputGroup'", explain: "Type literal." },
  { method: "clear(autoSetStatus?)", param: "boolean", return: "void", explain: "Clear all values (optionally set status 'C')." },
  { method: "getDataModel()", param: "-", return: "DataModel", explain: "Return current values as DataModel (1 row)." },
  { method: "setDataModel(dataModel)", param: "DataModel", return: "void", explain: "Load using the first row of DataModel." },
  { method: "getDataObject()", param: "-", return: "Record<string, any>", explain: "Return values as plain object." },
  { method: "setDataObject(obj)", param: "Record<string, any>", return: "void", explain: "Apply object values." },
  { method: "load(data)", param: "Record | DataModel", return: "void", explain: "Load from object/model." },
  { method: "getStatus()", param: "-", return: "'C'|'R'|'U'|'D'", explain: "Get current status." },
  { method: "setStatus(status)", param: "'C'|'R'|'U'|'D'", return: "void", explain: "Set status." },
  { method: "isModified()", param: "-", return: "boolean", explain: "Whether any child was modified by user." },
  { method: "initModified()", param: "-", return: "void", explain: "Reset modification flags." },
  { method: "checkRequired()", param: "-", return: "HInputMethods|null", explain: "Validate required. Returns first invalid input." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "Get group edit mode." },
  { method: "setEditMode(mode)", param: "EditMode", return: "void", explain: "Apply edit mode to all children." },
  { method: "focus(inputId?)", param: "string?", return: "void", explain: "Focus specific or first editable input." },
]

/* ------------------------------ grid definitions ------------------------------ */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '24%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '76%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '10%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '25%' },
  { id: 'param', header: 'param', dataType: 'text', width: '20%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]

/* ------------------------------ grid data loaders ----------------------------- */
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

/* -------------------------------- demo actions -------------------------------- */
function onLoadSample() {
  const grp = hison.component.getInputGroup('group1')!
  grp.load({
    text: 'load text',
    mask: 'FA-123',
    digit: '98765',
    email: 'test@example.com',
    password: '43214321',
    textarea: 'load textarea\nload textarea',
    date: '2010-01-01',
    month: '2010-01',
    time: '212121',
    number: 4321.4321,
    checkbox: false,
    radio3: true,
    range: 25,
    color: '#123123',
    select: 'v7',
  })
}
function onClear() {
  const grp = hison.component.getInputGroup('group1')!
  grp.clear(true)
}
function onDisable() {
  const grp = hison.component.getInputGroup('group1')!
  grp.setEditMode('disable')
}
function onReadonly() {
  const grp = hison.component.getInputGroup('group1')!
  grp.setEditMode('readonly')
}
function onEditable() {
  const grp = hison.component.getInputGroup('group1')!
  grp?.setEditMode('editable')
}
</script>

<template>
  <HLayout :border="true" style="padding:20px;">
    <HParagraph class="hison-col-12">{{ T.t1000 }}</HParagraph>

    <HCaption :level="5" class="hison-col-12">{{ T.t1010 }}</HCaption>

    <HLayout class="hison-col-12" style="gap:8px; margin-top:10px;">
      <HButton :text="T.btnLoad" @click="onLoadSample" />
      <HButton :text="T.btnClear" @click="onClear" />
      <HButton :text="T.btnDisable" @click="onDisable" />
      <HButton :text="T.btnReadonly" @click="onReadonly" />
      <HButton :text="T.btnEditable" @click="onEditable" />
    </HLayout>
    <HGap class="hison-size-s"/>
    <HInputGroup id="group1">
      <HLayout>
        <HLabel class="hison-col-3">Type: text</HLabel>
        <HInput
          id="text"
          class="hison-col-9"
          :input-type="'text'"
          :model-value="props.lang==='en' ? 'This is text type input' : 'text 타입 input입니다.'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: mask (format: AA-999)</HLabel>
        <HInput
          id="mask"
          class="hison-col-9"
          :input-type="'mask'"
          :model-value="'HR-123'"
          :format="'AA-999'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: digit</HLabel>
        <HInput
          id="digit"
          class="hison-col-9"
          :input-type="'digit'"
          :model-value="12345"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: email</HLabel>
        <HInput
          id="email"
          class="hison-col-9"
          :input-type="'email'"
          :model-value="'hison0319@gmail.com'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: password</HLabel>
        <HInput
          id="password"
          class="hison-col-9"
          :input-type="'password'"
          :model-value="'1234'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: textarea</HLabel>
        <HInput
          id="textarea"
          class="hison-col-9"
          style="height: 60px;"
          :input-type="'textarea'"
          :model-value="props.lang==='en' ? 'This is textarea type input' : 'textarea 타입 input입니다.'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: date</HLabel>
        <HInput
          id="date"
          class="hison-col-9"
          :input-type="'date'"
          :model-value="'2025-12-31'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: month</HLabel>
        <HInput
          id="month"
          class="hison-col-9"
          :input-type="'month'"
          :model-value="'2025-12'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: time</HLabel>
        <HInput
          id="time"
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
          id="checkbox"
          class="hison-col-9"
          :input-type="'checkbox'"
          :model-value="true"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: radio</HLabel>
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
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: range</HLabel>
        <HInput
          id="range"
          class="hison-col-9"
          :input-type="'range'"
          :model-value="50"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: color</HLabel>
        <HInput
          id="color"
          class="hison-col-9"
          :input-type="'color'"
          :model-value="'#128483'"
        />
      </HLayout>
      <HLayout>
        <HLabel class="hison-col-3">Type: select</HLabel>
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
        />
      </HLayout>
    </HInputGroup>

    <HGap/>
    <HParagraph class="hison-col-12">{{ T.demoExplain }}</HParagraph>

    <HCaption :level="6" class="hison-col-12">{{ T.t1015 }}</HCaption>
    <CodeParagraph :code="T.c1015" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ T.t1020 }}</HCaption>
    <CodeParagraph :code="T.c1020" :dynamicWidth="false"/>

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1100 }}</HCaption>
    <HGrid
      id="igSlotGrid"
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
    <HCaption :level="6" class="hison-col-12">{{ T.t1200 }}</HCaption>
    <HGrid
      id="igPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'160px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1300 }}</HCaption>
    <HGrid
      id="igEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'100px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1400 }}</HCaption>
    <HGrid
      id="igMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'400px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>