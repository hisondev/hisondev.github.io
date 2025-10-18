<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HImagebox(단일 이미지 업로드/미리보기) 컴포넌트입니다.

HImagebox는 단일 이미지 업로드와 미리보기, 드래그앤드롭, 검증, 런타임 제어를 제공하며
hison.vue.getInput(id)로 완전한 프로그램 제어가 가능합니다.`,
  t1010: `간단한 라이브 데모`,
  t1030:
`주요 특징

· 단일 이미지 업로드(+ 미리보기/삭제)
· 드래그앤드롭(enableDrop)
· 타입/용량 검증 및 콜백
· 버튼/플레이스홀더/슬롯 기반 UI 커스터마이즈
· 런타임 API(hison.vue.getInput) 완전 지원
· DataModel 연동 및 v-model 동기화`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HImagebox
  id="profileImage"
  class="hison-col-6-pc hison-col-12-mb hison-size-l-mb"
  v-model="image"
  :attId="'P001'"
  :addButtonText="'UPLOAD'"
  :removeButtonText="'DELETE'"
  :placeholder="'Drag or upload your image.'"
  :enableDrop="true"
  :visible="true"
  :editMode="EditMode.editable"
  :allowedTypes="['.jpg', '.png', 'image/*']"
  :imgStyle="{ borderRadius: '12px', border: '1px solid #e0e0e0' }"
  style="height: 250px;"
  @add="onAdd"
  @remove="onRemove"
>
  <template #empty>
    <div class="custom-empty"><span>Drag an image here or click 'Add'</span></div>
  </template>
  <template #add-button="{ add }">
    <span><i class="fa fa-plus"></i> Add Image</span>
  </template>
  <template #remove-button="{ remove }">
    <span><i class="fa fa-trash"></i> Delete</span>
  </template>
</HImagebox>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const imagebox = hison.vue.getInput('profileImage')
imagebox.setEditMode('readonly')
imagebox.setAllowedTypes(['.jpg'])
imagebox.setMaxFileSize(1024 * 1024)
imagebox.setValue({ fileName: 'avatar.jpg', ... })
imagebox.focus()

const addBtn = hison.component.getButton(\`hison_imagebox_add_button_\${'profileImage'}\`)
const rmBtn  = hison.component.getButton(\`hison_imagebox_remove_button_\${'profileImage'}\`)
addBtn.setDisable(true)
rmBtn.setDisable(true)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HImagebox (single image upload/preview) component.

HImagebox offers single-image upload with preview, drag-and-drop, validation, and full runtime control via hison.vue.getInput(id).`,
  t1010: `Live demo`,
  t1030:
`Main Features

· Single image upload + preview/remove
· Drag-and-drop (enableDrop)
· Type/size validation + callbacks
· Fully customizable UI via slots and labels
· Full runtime API (hison.vue.getInput)
· DataModel integration & v-model sync`,
  t1040: `Template Example`,
  c1040:
`<HImagebox
  id="profileImage"
  class="hison-col-6-pc hison-col-12-mb hison-size-l-mb"
  v-model="image"
  :attId="'P001'"
  :addButtonText="'UPLOAD'"
  :removeButtonText="'DELETE'"
  :placeholder="'Drag or upload your image.'"
  :enableDrop="true"
  :visible="true"
  :editMode="EditMode.editable"
  :allowedTypes="['.jpg', '.png', 'image/*']"
  :imgStyle="{ borderRadius: '12px', border: '1px solid #e0e0e0' }"
  style="height: 250px;"
  @add="onAdd"
  @remove="onRemove"
>
  <template #empty>
    <div class="custom-empty"><span>Drag an image here or click 'Add'</span></div>
  </template>
  <template #add-button="{ add }">
    <span><i class="fa fa-plus"></i> Add Image</span>
  </template>
  <template #remove-button="{ remove }">
    <span><i class="fa fa-trash"></i> Delete</span>
  </template>
</HImagebox>`,
  t1050: `Runtime Example`,
  c1050:
`const imagebox = hison.vue.getInput('profileImage')
imagebox.setEditMode('readonly')
imagebox.setAllowedTypes(['.jpg'])
imagebox.setMaxFileSize(1024 * 1024)
imagebox.setValue({ fileName: 'avatar.jpg', ... })
imagebox.focus()

const addBtn = hison.component.getButton(\`hison_imagebox_add_button_\${'profileImage'}\`)
const rmBtn  = hison.component.getButton(\`hison_imagebox_remove_button_\${'profileImage'}\`)
addBtn.setDisable(true)
rmBtn.setDisable(true)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "empty", explain: "이미지가 없을 때의 플레이스홀더 UI를 커스터마이즈." },
  { slot: "add-button", explain: "추가 버튼(HButton) 내부 콘텐츠만 교체. scoped: { add }" },
  { slot: "remove-button", explain: "삭제 버튼(HButton) 내부 콘텐츠만 교체. scoped: { remove }" },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.vue.getInput(id)로 런타임 접근. 중복 시 오류." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "모든 hisonvue 반응형/컬러/사이즈 클래스 지원." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "컨테이너 인라인 스타일." },
  { prop: "imgStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "<img> 미리보기 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시 여부." },
  { prop: "editMode", type: "'editable'|'disable'|'readonly'", default: "'editable'", explain: "편집 상태." },
  { prop: "modelValue", type: "AttachedFileItem | null", default: "null", explain: "현재 이미지 객체(v-model)." },
  { prop: "attId", type: "string", default: "''", explain: "백엔드 연계를 위한 그룹 ID." },
  { prop: "addButtonText", type: "string", default: "'Add'", explain: "추가 버튼 라벨(슬롯 사용 시 무시)." },
  { prop: "removeButtonText", type: "string", default: "'Remove'", explain: "삭제 버튼 라벨(슬롯 사용 시 무시)." },
  { prop: "placeholder", type: "string", default: "'There is no image'", explain: "이미지 없음 상태 메시지." },
  { prop: "enableDrop", type: "boolean", default: "true", explain: "드래그앤드롭 업로드 허용." },
  { prop: "allowedTypes", type: "string | string[]", default: "-", explain: "허용 타입/확장자(배열 또는 CSV)." },
  { prop: "disallowedTypes", type: "string | string[]", default: "-", explain: "비허용 타입/확장자(배열 또는 CSV)." },
  { prop: "maxFileSize", type: "number", default: "Infinity", explain: "단일 파일 최대 용량(bytes)." },
  { prop: "border", type: "boolean", default: "false", explain: "보더(박스섀도) 표시." },
  { prop: "onDisallowedType", type: "(file, allowed, disallowed)=>void", default: "-", explain: "비허용 타입 업로드 시 콜백." },
  { prop: "onMaxFileSizeExceeded", type: "(file, size, max)=>void", default: "-", explain: "최대 용량 초과 시 콜백." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 시", args: "(HImageboxMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "이미지 변경(추가/삭제/교체)", args: "(AttachedFileItem|null)" },
  { event: "add", trigger: "이미지 추가", args: "(file: AttachedFileItem, methods: HImageboxMethods)" },
  { event: "remove", trigger: "이미지 제거", args: "(file: AttachedFileItem, methods: HImageboxMethods)" },
  { event: "change", trigger: "이미지 변경 발생", args: "(newValue: AttachedFileItem|null, methods: HImageboxMethods)" },
  { event: "focus", trigger: "파일 입력/추가 버튼 포커스", args: "-" },
  { event: "blur", trigger: "컴포넌트 포커스 해제", args: "-" },
  { event: "preview-click", trigger: "미리보기 클릭", args: "({ event: MouseEvent, api: HImageboxMethods })" },
  { event: "preview-dblclick", trigger: "미리보기 더블클릭", args: "({ event: MouseEvent, api: HImageboxMethods })" },
  { event: "preview-contextmenu", trigger: "미리보기 컨텍스트 메뉴", args: "({ event: MouseEvent, api: HImageboxMethods })" },
  { event: "preview-pointerenter", trigger: "미리보기 hover 시작", args: "({ event: PointerEvent, api: HImageboxMethods })" },
  { event: "preview-pointerleave", trigger: "미리보기 hover 종료", args: "({ event: PointerEvent, api: HImageboxMethods })" },
  { event: "preview-pointerdown", trigger: "미리보기 pointerdown", args: "({ event: PointerEvent, api: HImageboxMethods })" },
  { event: "preview-pointerup", trigger: "미리보기 pointerup", args: "({ event: PointerEvent, api: HImageboxMethods })" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'imagebox'", explain: "컴포넌트 타입 리터럴('imagebox')." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "편집 모드 조회(editable/readonly/disable)." },
  { method: "setEditMode(mode)", param: "EditMode | EditModeValue", return: "void", explain: "편집 모드 설정." },
  { method: "getValue()", param: "-", return: "AttachedFileItem | null", explain: "현재 이미지 값 조회." },
  { method: "setValue(item)", param: "AttachedFileItem", return: "void", explain: "이미지 값 설정(v-model 반영)." },
  { method: "getDataModel()", param: "-", return: "InterfaceDataModel<AttachedFileItem> | null", explain: "현재 상태를 DataModel로 변환." },
  { method: "setDataModel(model)", param: "InterfaceDataModel<T>", return: "void", explain: "DataModel로부터 상태 복원." },
  { method: "load(data)", param: "AttachedFileItem | Record<string, any> | InterfaceDataModel<T>", return: "void", explain: "객체/데이터모델로 로드." },
  { method: "getAttId()", param: "-", return: "string", explain: "현재 attId 조회." },
  { method: "setAttId(id)", param: "string", return: "void", explain: "attId 설정." },
  { method: "getAddButtonText()", param: "-", return: "string", explain: "추가 버튼 라벨 조회." },
  { method: "setAddButtonText(text)", param: "string", return: "void", explain: "추가 버튼 라벨 설정." },
  { method: "getRemoveButtonText()", param: "-", return: "string", explain: "삭제 버튼 라벨 조회." },
  { method: "setRemoveButtonText(text)", param: "string", return: "void", explain: "삭제 버튼 라벨 설정." },
  { method: "getPlaceholder()", param: "-", return: "string", explain: "플레이스홀더 조회." },
  { method: "setPlaceholder(text)", param: "string", return: "void", explain: "플레이스홀더 설정." },
  { method: "isEnableDrop()", param: "-", return: "boolean", explain: "드래그앤드롭 허용 여부." },
  { method: "setEnableDrop(v)", param: "boolean", return: "void", explain: "드래그앤드롭 허용/차단." },
  { method: "getAllowedTypes()", param: "-", return: "string[]", explain: "허용 타입 목록." },
  { method: "setAllowedTypes(list)", param: "string[]", return: "void", explain: "허용 타입 설정." },
  { method: "getDisallowedTypes()", param: "-", return: "string[]", explain: "비허용 타입 목록." },
  { method: "setDisallowedTypes(list)", param: "string[]", return: "void", explain: "비허용 타입 설정." },
  { method: "getMaxFileSize()", param: "-", return: "number", explain: "최대 파일 크기(bytes)." },
  { method: "setMaxFileSize(n)", param: "number", return: "void", explain: "최대 파일 크기 설정." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "보더 표시/해제." },
  { method: "setOnDisallowedType(cb)", param: "(file, allowed, disallowed)=>void", return: "void", explain: "비허용 타입 콜백 등록." },
  { method: "setOnMaxFileSizeExceeded(cb)", param: "(file, size, max)=>void", return: "void", explain: "최대 용량 초과 콜백 등록." },
  { method: "isModified()", param: "-", return: "boolean", explain: "수정 여부 플래그." },
  { method: "setModified(v)", param: "boolean", return: "void", explain: "수정 플래그 설정." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "tabIndex 조회." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "tabIndex 설정/제거." },
  { method: "focus()", param: "-", return: "void", explain: "추가 버튼에 포커스 이동." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트 고유 ID." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더." },
]

const slotGridDataEn = [
  { slot: "empty", explain: "Customize placeholder when no image is present." },
  { slot: "add-button", explain: "Replace only the inside of add button. scoped: { add }" },
  { slot: "remove-button", explain: "Replace only the inside of remove button. scoped: { remove }" },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Runtime via hison.vue.getInput(id). Duplicate IDs throw." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "All hisonvue responsive/color/size classes." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Container inline style." },
  { prop: "imgStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Preview <img> style." },
  { prop: "visible", type: "boolean", default: "true", explain: "Visibility." },
  { prop: "editMode", type: "'editable'|'disable'|'readonly'", default: "'editable'", explain: "Edit mode." },
  { prop: "modelValue", type: "AttachedFileItem | null", default: "null", explain: "Current image object (v-model)." },
  { prop: "attId", type: "string", default: "''", explain: "Attachment group ID." },
  { prop: "addButtonText", type: "string", default: "'Add'", explain: "Label for add button (ignored if slot used)." },
  { prop: "removeButtonText", type: "string", default: "'Remove'", explain: "Label for remove button (ignored if slot used)." },
  { prop: "placeholder", type: "string", default: "'There is no image'", explain: "Empty state text." },
  { prop: "enableDrop", type: "boolean", default: "true", explain: "Allow drag-and-drop uploads." },
  { prop: "allowedTypes", type: "string | string[]", default: "-", explain: "Allowed MIME/types or extensions." },
  { prop: "disallowedTypes", type: "string | string[]", default: "-", explain: "Disallowed MIME/types or extensions." },
  { prop: "maxFileSize", type: "number", default: "Infinity", explain: "Max file size (bytes)." },
  { prop: "border", type: "boolean", default: "false", explain: "Show border (box-shadow)." },
  { prop: "onDisallowedType", type: "(file, allowed, disallowed)=>void", default: "-", explain: "Callback on disallowed type." },
  { prop: "onMaxFileSizeExceeded", type: "(file, size, max)=>void", default: "-", explain: "Callback on max size exceeded." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HImageboxMethods)" },
  { event: "responsive-change", trigger: "On device breakpoint change.", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "When image changes.", args: "(AttachedFileItem|null)" },
  { event: "add", trigger: "On image added.", args: "(file: AttachedFileItem, methods: HImageboxMethods)" },
  { event: "remove", trigger: "On image removed.", args: "(file: AttachedFileItem, methods: HImageboxMethods)" },
  { event: "change", trigger: "Whenever the value changes.", args: "(newValue: AttachedFileItem|null, methods: HImageboxMethods)" },
  { event: "focus", trigger: "When add button/input focused.", args: "-" },
  { event: "blur", trigger: "When component loses focus.", args: "-" },
  { event: "preview-click", trigger: "Click on preview image.", args: "({ event: MouseEvent, api: HImageboxMethods })" },
  { event: "preview-dblclick", trigger: "Double click on preview image.", args: "({ event: MouseEvent, api: HImageboxMethods })" },
  { event: "preview-contextmenu", trigger: "Context menu on preview image.", args: "({ event: MouseEvent, api: HImageboxMethods })" },
  { event: "preview-pointerenter", trigger: "Pointer enters preview image.", args: "({ event: PointerEvent, api: HImageboxMethods })" },
  { event: "preview-pointerleave", trigger: "Pointer leaves preview image.", args: "({ event: PointerEvent, api: HImageboxMethods })" },
  { event: "preview-pointerdown", trigger: "Pointer down over preview.", args: "({ event: PointerEvent, api: HImageboxMethods })" },
  { event: "preview-pointerup", trigger: "Pointer up over preview.", args: "({ event: PointerEvent, api: HImageboxMethods })" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'imagebox'", explain: "Returns component type literal." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "Get edit mode (editable/readonly/disable)." },
  { method: "setEditMode(mode)", param: "EditMode | EditModeValue", return: "void", explain: "Set edit mode." },
  { method: "getValue()", param: "-", return: "AttachedFileItem | null", explain: "Get current image value." },
  { method: "setValue(item)", param: "AttachedFileItem", return: "void", explain: "Set image value (updates v-model)." },
  { method: "getDataModel()", param: "-", return: "InterfaceDataModel<AttachedFileItem> | null", explain: "Convert current state to DataModel." },
  { method: "setDataModel(model)", param: "InterfaceDataModel<T>", return: "void", explain: "Restore from DataModel." },
  { method: "load(data)", param: "AttachedFileItem | Record<string, any> | InterfaceDataModel<T>", return: "void", explain: "Load by object/DataModel." },
  { method: "getAttId()", param: "-", return: "string", explain: "Get current attId." },
  { method: "setAttId(id)", param: "string", return: "void", explain: "Set attId." },
  { method: "getAddButtonText()", param: "-", return: "string", explain: "Get add button label." },
  { method: "setAddButtonText(text)", param: "string", return: "void", explain: "Set add button label." },
  { method: "getRemoveButtonText()", param: "-", return: "string", explain: "Get remove button label." },
  { method: "setRemoveButtonText(text)", param: "string", return: "void", explain: "Set remove button label." },
  { method: "getPlaceholder()", param: "-", return: "string", explain: "Get placeholder text." },
  { method: "setPlaceholder(text)", param: "string", return: "void", explain: "Set placeholder text." },
  { method: "isEnableDrop()", param: "-", return: "boolean", explain: "Whether drag-drop is enabled." },
  { method: "setEnableDrop(v)", param: "boolean", return: "void", explain: "Enable/disable drag-drop." },
  { method: "getAllowedTypes()", param: "-", return: "string[]", explain: "Get allowed types." },
  { method: "setAllowedTypes(list)", param: "string[]", return: "void", explain: "Set allowed types." },
  { method: "getDisallowedTypes()", param: "-", return: "string[]", explain: "Get disallowed types." },
  { method: "setDisallowedTypes(list)", param: "string[]", return: "void", explain: "Set disallowed types." },
  { method: "getMaxFileSize()", param: "-", return: "number", explain: "Get max file size (bytes)." },
  { method: "setMaxFileSize(n)", param: "number", return: "void", explain: "Set max file size." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether border is shown." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Enable/disable border." },
  { method: "setOnDisallowedType(cb)", param: "(file, allowed, disallowed)=>void", return: "void", explain: "Register disallowed-type callback." },
  { method: "setOnMaxFileSizeExceeded(cb)", param: "(file, size, max)=>void", return: "void", explain: "Register max-size callback." },
  { method: "isModified()", param: "-", return: "boolean", explain: "Modified flag." },
  { method: "setModified(v)", param: "boolean", return: "void", explain: "Set modified flag." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Get tabIndex." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Set/remove tabIndex." },
  { method: "focus()", param: "-", return: "void", explain: "Focus add button." },
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
  { id: 'prop', header: 'prop', dataType: 'text', width: '16%' },
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '12%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '36%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '18%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '42%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '24%' },
  { id: 'param', header: 'param', dataType: 'text', width: '32%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
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
    <HImagebox
      id="imagebox-demo"
      class="hison-col-12 hison-size-m"
      :enableDrop="true"
      :placeholder="props.lang==='en' ? 'Drop or click Add' : '드래그하거나 추가 버튼을 클릭하세요'"
      :imgStyle="{ maxHeight: '220px', objectFit: 'cover', borderRadius: '8px' }"
      style="height: 240px;"
    />
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="imageboxSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-s"
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
      id="imageboxPropGrid"
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
      id="imageboxEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-s"
      :height="'520px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="imageboxMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-s"
      :height="'720px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>