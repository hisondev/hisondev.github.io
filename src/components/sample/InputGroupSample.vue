<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* -------------------------------- demo states -------------------------------- */
const form = ref<Record<string, any>>({
  userid: 'hison',
  email: 'a@b.com',
  agree: null as string | null,
})
const liveRequiredFail = ref<string>('')

/* ----------------------------------- i18n ------------------------------------ */
const ko = {
  t1000:
`하단은 HInputGroup(그룹 입력 컨트롤러) 컴포넌트의 샘플입니다.

HInputGroup은 여러 HInput을 감싸고, 데이터 로드/초기화/수정여부/필수검증/일괄 편집모드 적용 등을
런타임 메서드로 제공합니다. 라디오 타입은 name을 그룹키로 묶어 { [name]: 선택된 라디오 id|null } 형태로 관리합니다.`,
  t1010: '라이브 데모',
  t1020: '데모 동작',
  c1020:
`const grp = hison.component.getInputGroup('group1')
grp.load({ userid: 'abc', email: 'test@example.com', agree: 'agreeY' })
const data = grp.getDataObject()     // { userid, email, agree }
grp.setEditMode('readonly')          // 전체 읽기전용
grp.clear(true)                      // 값 초기화 + status 'C'
const firstInvalid = grp.checkRequired()
if (firstInvalid) firstInvalid.focus()`,
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
  btnReadonly: '전체 읽기전용',
  btnEditable: '전체 편집가능',
  btnCheckReq: '검증(필수)',
  reqFail: '필수값이 비어 있습니다 → ',
}

const en = {
  t1000:
`Below is the sample for HInputGroup (grouped input controller).

HInputGroup wraps multiple HInput components and provides runtime APIs for loading/clearing data,
tracking modification, validating required fields, and applying group-wide edit mode. Radios are grouped by 'name'
and represented as { [groupName]: selectedRadioId | null }.`,
  t1010: 'Live Demo',
  t1020: 'Runtime usage example',
  c1020:
`const grp = hison.component.getInputGroup('group1')
grp.load({ userid: 'abc', email: 'test@example.com', agree: 'agreeY' })
const data = grp.getDataObject()     // { userid, email, agree }
grp.setEditMode('readonly')          // make all readonly
grp.clear(true)                      // reset and set status 'C'
const firstInvalid = grp.checkRequired()
if (firstInvalid) firstInvalid.focus()`,
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
  btnReadonly: 'Readonly all',
  btnEditable: 'Editable all',
  btnCheckReq: 'Validate (required)',
  reqFail: 'Required field is empty → ',
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
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'type', header: 'type', dataType: 'text', width: '40%' },
  { id: 'default', header: 'default', dataType: 'text', width: '12%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '28%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '26%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '34%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '28%' },
  { id: 'param', header: 'param', dataType: 'text', width: '32%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '26%' },
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
  const grp = (window as any).hison?.component?.getInputGroup?.('group1')
  grp?.load({
    userid: 'abc',
    email: 'test@example.com',
    agree: 'agreeY',
  })
}
function onClear() {
  const grp = (window as any).hison?.component?.getInputGroup?.('group1')
  grp?.clear(true)
}
function onReadonly() {
  const grp = (window as any).hison?.component?.getInputGroup?.('group1')
  grp?.setEditMode('readonly')
}
function onEditable() {
  const grp = (window as any).hison?.component?.getInputGroup?.('group1')
  grp?.setEditMode('editable')
}
function onCheckRequired() {
  const grp = (window as any).hison?.component?.getInputGroup?.('group1')
  const fail = grp?.checkRequired()
  if (fail) {
    liveRequiredFail.value = `${T.reqFail}${fail.getId?.() ?? ''}`
    fail.focus?.()
  } else {
    liveRequiredFail.value = ''
  }
}
</script>

<template>
  <HLayout :border="true" style="padding:20px;">
    <HParagraph class="hison-col-12">{{ T.t1000 }}</HParagraph>

    <HCaption :level="5" class="hison-col-12">{{ T.t1010 }}</HCaption>

    <HInputGroup id="group1" v-model="form" class="hison-col-12">
      <HLayout class="hison-col-12" style="gap:10px; align-items:flex-end;">
        <HInput id="userid" inputType="text" class="hison-col-12-mb hison-col-3-pc" :required="true" :placeholder="props.lang==='en' ? 'User ID (required)' : '사용자ID(필수)'" />
        <HInput id="email" inputType="email" class="hison-col-12-mb hison-col-4-pc" :placeholder="props.lang==='en' ? 'Email' : '이메일'" />
        <HLayout class="hison-col-12-mb hison-col-5-pc" style="display:flex; gap:10px; align-items:center;">
          <HCaption :level="6" class="hison-col-12-mb hison-col-3-pc">agree</HCaption>
          <HInput id="agreeY" inputType="radio" name="agree" :title="'Yes'"/>
          <HInput id="agreeN" inputType="radio" name="agree" :title="'No'"/>
        </HLayout>
      </HLayout>
    </HInputGroup>

    <HLayout class="hison-col-12" style="gap:8px; margin-top:10px;">
      <HButton :text="T.btnLoad" @click="onLoadSample" />
      <HButton :text="T.btnClear" @click="onClear" />
      <HButton :text="T.btnReadonly" @click="onReadonly" />
      <HButton :text="T.btnEditable" @click="onEditable" />
      <HButton :text="T.btnCheckReq" @click="onCheckRequired" />
    </HLayout>

    <HParagraph v-if="liveRequiredFail" class="hison-col-12 hison-color-danger">{{ liveRequiredFail }}</HParagraph>

    <HGap/>
    <HParagraph class="hison-col-12">{{ T.demoExplain }}</HParagraph>

    <HCaption :level="6" class="hison-col-12">{{ T.t1020 }}</HCaption>
    <CodeParagraph :code="T.c1020" />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1100 }}</HCaption>
    <HGrid
      id="igSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-s"
      :height="'130px'"
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
      class="hison-col-12 hison-size-s"
      :height="'340px'"
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
      class="hison-col-12 hison-size-s"
      :height="'200px'"
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