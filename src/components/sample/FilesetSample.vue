<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HFileset(파일 첨부) 컴포넌트입니다.

HFileset은 멀티 파일 업로드/관리, 드래그&드롭, 고급 검증, 완전한 런타임 API를 제공하는 엔터프라이즈급 파일 컴포넌트입니다.
아이콘/버튼/다운로드 로직을 자유롭게 커스터마이징할 수 있으며, hison.vue.getInput(id)로 프로그래매틱 제어가 가능합니다.`,
  t1010: `이것은 HFileset 라이브 데모입니다.`,
  t1030:
`주요 특징

· 멀티/싱글 파일 업로드, 프리뷰/제거, v-model 동기화
· 드래그&드롭 지원 및 제한/가이드 표시
· 파일당/전체 용량 제한, 허용/차단 확장자 및 MIME
· 커스텀 UI(라벨/플레이스홀더/버튼/아이콘)와 다운로드 핸들러
· 반응형 레이아웃(hison-*)과 런타임 API(HFilesetMethods)
· 내장 Add 버튼 id: hison_fileset_add_button_\${id} → hison.component.getButton(...)으로 접근`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HFileset
  id="fileset"
  class="hison-col-12 hison-size-l-mb hison-size-s-pc hison-pos-right hison-color-primary-mb hison-color-success-pc"
  v-model="files"
  :multiCols="true"
  :placeholder="'No files.'"
  :addButtonText="'UPLOAD'"
  :removeButtonText="'DELETE'"
  :enableDrop="true"
  :visible="true"
  :editMode="EditMode.editable"
  :multiple="true"
  :maxFileCount="3"
  :allowedTypes="['.pdf', '.jpg', '.png']"
  style="height: 200px; margin-bottom: 5px;"
>
  <template #file-icon="{ file }">
    <span v-if="file.extension === 'pdf'">📕</span>
    <span v-else-if="file.extension === 'jpg'">🖼️</span>
    <span v-else>📄</span>
  </template>
  <template #add-button="{ add, disable }">
    <span>📁 Add files</span>
  </template>
</HFileset>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const fileset = hison.vue.getInput('fileset')
fileset.setEditMode('readonly')
fileset.setAllowedTypes(['.pdf'])
fileset.setMaxFileCount(2)
fileset.setValue([{ fileName: 'final.pdf', fileSize: 1024, extension: 'pdf', isNew: false }])
fileset.focus()

const addBtn = hison.component.getButton(\`hison_fileset_add_button_\${'fileset'}\`)
addBtn.setDisable(true)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HFileset (file attachment) component.

HFileset is an enterprise-grade file upload/management UI with multi-file handling, drag-and-drop,
advanced validation, and a complete runtime API. You can customize icons/buttons/download logic,
and control it programmatically via hison.vue.getInput(id).`,
  t1010: `This is the HFileset live demo.`,
  t1030:
`Main Features

· Multi/single file upload, preview/remove, v-model sync
· Drag-and-drop with visual feedback and restriction control
· Per-file/total size limits, allowed/disallowed MIME/extension
· Customizable UI (labels/placeholders/buttons/icons) and download handler
· Responsive hison-* classes and full runtime API (HFilesetMethods)
· Built-in Add button id: hison_fileset_add_button_\${id} (accessible via hison.component.getButton)`,
  t1040: `Template Example`,
  c1040:
`<HFileset
  id="fileset"
  class="hison-col-12 hison-size-l-mb hison-size-s-pc hison-pos-right hison-color-primary-mb hison-color-success-pc"
  v-model="files"
  :multiCols="true"
  :placeholder="'No files.'"
  :addButtonText="'UPLOAD'"
  :removeButtonText="'DELETE'"
  :enableDrop="true"
  :visible="true"
  :editMode="EditMode.editable"
  :multiple="true"
  :maxFileCount="3"
  :allowedTypes="['.pdf', '.jpg', '.png']"
  style="height: 200px; margin-bottom: 5px;"
>
  <template #file-icon="{ file }">
    <span v-if="file.extension === 'pdf'">📕</span>
    <span v-else-if="file.extension === 'jpg'">🖼️</span>
    <span v-else>📄</span>
  </template>
  <template #add-button="{ add, disable }">
    <span>📁 Add files</span>
  </template>
</HFileset>`,
  t1050: `Runtime Example`,
  c1050:
`const fileset = hison.vue.getInput('fileset')
fileset.setEditMode('readonly')
fileset.setAllowedTypes(['.pdf'])
fileset.setMaxFileCount(2)
fileset.setValue([{ fileName: 'final.pdf', fileSize: 1024, extension: 'pdf', isNew: false }])
fileset.focus()

const addBtn = hison.component.getButton(\`hison_fileset_add_button_\${'fileset'}\`)
addBtn.setDisable(true)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "file-icon", explain: "각 파일명 앞에 표시할 아이콘/마크업. Scoped prop: { file }" },
  { slot: "remove-button", explain: "파일별 제거 버튼 커스터마이즈. { file, index, remove, disable } 제공." },
  { slot: "add-button", explain: "내장 HButton의 콘텐츠만 교체. { add, disable } 제공." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.vue.getInput(id)로 접근. 중복 ID는 에러." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/컬러/사이즈 등 hison-* 클래스 지원." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "컨테이너 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "컴포넌트 표시 여부." },
  { prop: "editMode", type: "'editable'|'readonly'|'disable'", default: "'editable'", explain: "편집 상태." },
  { prop: "modelValue", type: "AttachedFileItem[]", default: "[]", explain: "파일 리스트(v-model)." },
  { prop: "attId", type: "string", default: "''", explain: "백엔드 파일 그룹 ID." },
  { prop: "addButtonText", type: "string", default: "'Add'", explain: "추가 버튼 라벨(슬롯 사용 시 무시)." },
  { prop: "removeButtonText", type: "string", default: "'x'", explain: "제거 버튼 라벨(슬롯 사용 시 무시)." },
  { prop: "placeholder", type: "string", default: "'drop your files.'", explain: "파일이 없을 때 표시되는 문구." },
  { prop: "enableDrop", type: "boolean", default: "true", explain: "드래그&드롭 업로드 허용." },
  { prop: "downloadHandler", type: "(file: AttachedFileItem) => void", default: "-", explain: "커스텀 다운로드 핸들러." },
  { prop: "multiCols", type: "boolean", default: "false", explain: "파일을 다단(2열)로 표시." },
  { prop: "multiple", type: "boolean", default: "true", explain: "다중 선택 허용." },
  { prop: "allowedTypes", type: "string | string[]", default: "-", explain: "허용 MIME/확장자(배열/CSV)." },
  { prop: "disallowedTypes", type: "string | string[]", default: "-", explain: "차단 MIME/확장자(배열/CSV)." },
  { prop: "maxFileSize", type: "number", default: "Infinity", explain: "파일 당 최대 용량(bytes)." },
  { prop: "maxTotalFileSize", type: "number", default: "Infinity", explain: "전체 파일 최대 용량(bytes)." },
  { prop: "maxFileCount", type: "number", default: "0", explain: "최대 파일 수(0은 무제한)." },
  { prop: "onDisallowedType", type: "(file, allowed, disallowed) => void", default: "-", explain: "허용되지 않은 타입인 경우 콜백." },
  { prop: "onMaxFileSizeExceeded", type: "(file, size, max) => void", default: "-", explain: "개별 파일 용량 초과 콜백." },
  { prop: "onMaxTotalSizeExceeded", type: "(file, total, max) => void", default: "-", explain: "총 용량 초과 콜백." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트가 마운트될 때", args: "(HFilesetMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "파일 리스트 변경(추가/제거/삭제 등)", args: "(AttachedFileItem[])" },
  { event: "add", trigger: "파일이 추가될 때", args: "(file: AttachedFileItem, methods: HFilesetMethods)" },
  { event: "remove", trigger: "파일이 제거될 때", args: "(file: AttachedFileItem, methods: HFilesetMethods)" },
  { event: "change", trigger: "파일 리스트가 변경될 때마다", args: "(newList: AttachedFileItem[], oldList: AttachedFileItem[], methods: HFilesetMethods)" },
  { event: "download", trigger: "다운로드 트리거 시", args: "(file: AttachedFileItem, methods: HFilesetMethods)" },
  { event: "focus", trigger: "파일 입력 또는 추가 버튼 포커스", args: "-" },
  { event: "blur", trigger: "포커스 해제", args: "-" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'fileset'", explain: "컴포넌트 타입 리터럴('fileset')." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "현재 편집 상태 조회." },
  { method: "setEditMode(mode)", param: "EditMode | EditModeValue", return: "void", explain: "편집 상태 설정." },
  { method: "getValue()", param: "-", return: "AttachedFileItem[] | null", explain: "현재 파일 목록(삭제 표시 제외) 조회." },
  { method: "setValue(list)", param: "AttachedFileItem[]", return: "void", explain: "파일 목록 교체 및 즉시 반영." },
  { method: "getDataModel()", param: "-", return: "InterfaceDataModel<AttachedFileItem> | null", explain: "현재 내용을 DataModel로 변환." },
  { method: "setDataModel(dm)", param: "InterfaceDataModel<T>", return: "void", explain: "DataModel 첫 행값으로 내용 복원." },
  { method: "load(data)", param: "AttachedFileItem | Record | DataModel", return: "void", explain: "다양한 형태의 데이터로 로드." },
  { method: "getAttId()", param: "-", return: "string", explain: "첨부 그룹 ID 조회." },
  { method: "setAttId(attId)", param: "string", return: "void", explain: "첨부 그룹 ID 설정." },
  { method: "getAddButtonText()", param: "-", return: "string", explain: "추가 버튼 라벨 조회." },
  { method: "setAddButtonText(text)", param: "string", return: "void", explain: "추가 버튼 라벨 설정(슬롯 사용 시 무효)." },
  { method: "getRemoveButtonText()", param: "-", return: "string", explain: "제거 버튼 라벨 조회." },
  { method: "setRemoveButtonText(text)", param: "string", return: "void", explain: "제거 버튼 라벨 설정(슬롯 사용 시 무효)." },
  { method: "getPlaceholder()", param: "-", return: "string", explain: "빈 상태 문구 조회." },
  { method: "setPlaceholder(text)", param: "string", return: "void", explain: "빈 상태 문구 설정." },
  { method: "isEnableDrop()", param: "-", return: "boolean", explain: "드래그&드롭 허용 여부." },
  { method: "setEnableDrop(v)", param: "boolean", return: "void", explain: "드래그&드롭 허용/차단." },
  { method: "setDownloadHandler(fn)", param: "(file) => void", return: "void", explain: "커스텀 다운로드 핸들러 지정." },
  { method: "isMultiCols()", param: "-", return: "boolean", explain: "다단 표시 여부." },
  { method: "setMultiCols(v)", param: "boolean", return: "void", explain: "다단 표시 설정." },
  { method: "isMultiple()", param: "-", return: "boolean", explain: "다중 선택 허용 여부." },
  { method: "setMultiple(v)", param: "boolean", return: "void", explain: "다중 선택 허용/단일로 전환." },
  { method: "getAllowedTypes()", param: "-", return: "string[]", explain: "허용 타입/확장자 조회." },
  { method: "setAllowedTypes(list)", param: "string[]", return: "void", explain: "허용 타입/확장자 설정." },
  { method: "getDisallowedTypes()", param: "-", return: "string[]", explain: "차단 타입/확장자 조회." },
  { method: "setDisallowedTypes(list)", param: "string[]", return: "void", explain: "차단 타입/확장자 설정." },
  { method: "getMaxFileSize()", param: "-", return: "number", explain: "파일당 용량 제한 조회(bytes)." },
  { method: "setMaxFileSize(n)", param: "number", return: "void", explain: "파일당 용량 제한 설정." },
  { method: "getMaxTotalFileSize()", param: "-", return: "number", explain: "전체 용량 제한 조회(bytes)." },
  { method: "setMaxTotalFileSize(n)", param: "number", return: "void", explain: "전체 용량 제한 설정." },
  { method: "getMaxFileCount()", param: "-", return: "number", explain: "최대 파일 수 조회(0 무제한)." },
  { method: "setMaxFileCount(n)", param: "number", return: "void", explain: "최대 파일 수 설정." },
  { method: "setOnDisallowedType(fn)", param: "(file, allowed, disallowed) => void", return: "void", explain: "비허용 타입 콜백 지정." },
  { method: "setOnMaxFileSizeExceeded(fn)", param: "(file, size, max) => void", return: "void", explain: "개별 용량 초과 콜백 지정." },
  { method: "setOnMaxTotalSizeExceeded(fn)", param: "(file, total, max) => void", return: "void", explain: "총 용량 초과 콜백 지정." },
  { method: "isModified()", param: "-", return: "boolean", explain: "마지막 set/reset 이후 수정 여부." },
  { method: "setModified(v)", param: "boolean", return: "void", explain: "수정 플래그 수동 설정/리셋." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "tabIndex 조회(null이면 포커스 불가)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "tabIndex 설정(null은 제거)." },
  { method: "focus()", param: "-", return: "void", explain: "추가 버튼에 포커스." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "공통: 표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "공통: 표시/숨김." },
  { method: "getId()", param: "-", return: "string", explain: "공통: 고유 ID." },
  { method: "reload()", param: "-", return: "void", explain: "공통: 강제 리렌더." },
]

const slotGridDataEn = [
  { slot: "file-icon", explain: "Custom icon/markup before each file name. Scoped: { file }." },
  { slot: "remove-button", explain: "Customize the per-file remove button. Scoped: { file, index, remove, disable }." },
  { slot: "add-button", explain: "Replace contents inside built-in HButton. Scoped: { add, disable }." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.vue.getInput(id). Duplicate ids throw." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "All hison-* responsive/color/size utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Container inline style." },
  { prop: "visible", type: "boolean", default: "true", explain: "Component visibility." },
  { prop: "editMode", type: "'editable'|'readonly'|'disable'", default: "'editable'", explain: "Edit state." },
  { prop: "modelValue", type: "AttachedFileItem[]", default: "[]", explain: "File list via v-model." },
  { prop: "attId", type: "string", default: "''", explain: "Attachment group id for backend." },
  { prop: "addButtonText", type: "string", default: "'Add'", explain: "Add button label (ignored if slot used)." },
  { prop: "removeButtonText", type: "string", default: "'x'", explain: "Remove button label (ignored if slot used)." },
  { prop: "placeholder", type: "string", default: "'drop your files.'", explain: "Empty state message." },
  { prop: "enableDrop", type: "boolean", default: "true", explain: "Enable drag-and-drop uploading." },
  { prop: "downloadHandler", type: "(file: AttachedFileItem) => void", default: "-", explain: "Custom download handler." },
  { prop: "multiCols", type: "boolean", default: "false", explain: "Display files in multiple columns." },
  { prop: "multiple", type: "boolean", default: "true", explain: "Allow selecting multiple files." },
  { prop: "allowedTypes", type: "string | string[]", default: "-", explain: "Allowed MIME or extensions." },
  { prop: "disallowedTypes", type: "string | string[]", default: "-", explain: "Disallowed MIME or extensions." },
  { prop: "maxFileSize", type: "number", default: "Infinity", explain: "Per-file size limit (bytes)." },
  { prop: "maxTotalFileSize", type: "number", default: "Infinity", explain: "Total size limit (bytes)." },
  { prop: "maxFileCount", type: "number", default: "0", explain: "Max files allowed (0 = unlimited)." },
  { prop: "onDisallowedType", type: "(file, allowed, disallowed) => void", default: "-", explain: "Callback when type is not allowed." },
  { prop: "onMaxFileSizeExceeded", type: "(file, size, max) => void", default: "-", explain: "Callback for per-file size overflow." },
  { prop: "onMaxTotalSizeExceeded", type: "(file, total, max) => void", default: "-", explain: "Callback for total size overflow." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HFilesetMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "When file list changes.", args: "(AttachedFileItem[])" },
  { event: "add", trigger: "When a file is added.", args: "(file: AttachedFileItem, methods: HFilesetMethods)" },
  { event: "remove", trigger: "When a file is removed.", args: "(file: AttachedFileItem, methods: HFilesetMethods)" },
  { event: "change", trigger: "Whenever the list changes.", args: "(newList: AttachedFileItem[], oldList: AttachedFileItem[], methods: HFilesetMethods)" },
  { event: "download", trigger: "When a download is triggered.", args: "(file: AttachedFileItem, methods: HFilesetMethods)" },
  { event: "focus", trigger: "When add button or input gets focus.", args: "-" },
  { event: "blur", trigger: "When input or set loses focus.", args: "-" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'fileset'", explain: "Returns the component type literal ('fileset')." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "Gets current edit mode." },
  { method: "setEditMode(mode)", param: "EditMode | EditModeValue", return: "void", explain: "Sets edit mode." },
  { method: "getValue()", param: "-", return: "AttachedFileItem[] | null", explain: "Gets current file list (excluding deleted)." },
  { method: "setValue(list)", param: "AttachedFileItem[]", return: "void", explain: "Replaces the file list immediately." },
  { method: "getDataModel()", param: "-", return: "InterfaceDataModel<AttachedFileItem> | null", explain: "Converts to DataModel." },
  { method: "setDataModel(dm)", param: "InterfaceDataModel<T>", return: "void", explain: "Restores from DataModel first row." },
  { method: "load(data)", param: "AttachedFileItem | Record | DataModel", return: "void", explain: "Loads editor content from various forms." },
  { method: "getAttId()", param: "-", return: "string", explain: "Gets attachment group id." },
  { method: "setAttId(attId)", param: "string", return: "void", explain: "Sets attachment group id." },
  { method: "getAddButtonText()", param: "-", return: "string", explain: "Gets add button label." },
  { method: "setAddButtonText(text)", param: "string", return: "void", explain: "Sets add button label (ignored if slot used)." },
  { method: "getRemoveButtonText()", param: "-", return: "string", explain: "Gets remove button label." },
  { method: "setRemoveButtonText(text)", param: "string", return: "void", explain: "Sets remove button label (ignored if slot used)." },
  { method: "getPlaceholder()", param: "-", return: "string", explain: "Gets empty state message." },
  { method: "setPlaceholder(text)", param: "string", return: "void", explain: "Sets empty state message." },
  { method: "isEnableDrop()", param: "-", return: "boolean", explain: "Whether drag-and-drop is enabled." },
  { method: "setEnableDrop(v)", param: "boolean", return: "void", explain: "Enable/disable drag-and-drop." },
  { method: "setDownloadHandler(fn)", param: "(file) => void", return: "void", explain: "Assign a custom download handler." },
  { method: "isMultiCols()", param: "-", return: "boolean", explain: "Whether multi-column layout is on." },
  { method: "setMultiCols(v)", param: "boolean", return: "void", explain: "Enable/disable multi-column display." },
  { method: "isMultiple()", param: "-", return: "boolean", explain: "Whether multiple selection is allowed." },
  { method: "setMultiple(v)", param: "boolean", return: "void", explain: "Toggle multiple vs single file mode." },
  { method: "getAllowedTypes()", param: "-", return: "string[]", explain: "Gets allowed MIME/extensions." },
  { method: "setAllowedTypes(list)", param: "string[]", return: "void", explain: "Sets allowed MIME/extensions." },
  { method: "getDisallowedTypes()", param: "-", return: "string[]", explain: "Gets disallowed MIME/extensions." },
  { method: "setDisallowedTypes(list)", param: "string[]", return: "void", explain: "Sets disallowed MIME/extensions." },
  { method: "getMaxFileSize()", param: "-", return: "number", explain: "Per-file size limit (bytes)." },
  { method: "setMaxFileSize(n)", param: "number", return: "void", explain: "Set per-file size limit." },
  { method: "getMaxTotalFileSize()", param: "-", return: "number", explain: "Total size limit (bytes)." },
  { method: "setMaxTotalFileSize(n)", param: "number", return: "void", explain: "Set total size limit." },
  { method: "getMaxFileCount()", param: "-", return: "number", explain: "Max number of files (0 = unlimited)." },
  { method: "setMaxFileCount(n)", param: "number", return: "void", explain: "Set max number of files." },
  { method: "setOnDisallowedType(fn)", param: "(file, allowed, disallowed) => void", return: "void", explain: "Set callback for disallowed type." },
  { method: "setOnMaxFileSizeExceeded(fn)", param: "(file, size, max) => void", return: "void", explain: "Set callback for per-file size overflow." },
  { method: "setOnMaxTotalSizeExceeded(fn)", param: "(file, total, max) => void", return: "void", explain: "Set callback for total size overflow." },
  { method: "isModified()", param: "-", return: "boolean", explain: "Whether list was modified since last set/reset." },
  { method: "setModified(v)", param: "boolean", return: "void", explain: "Manually set/reset modified flag." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Gets tabIndex (null = unfocusable)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Sets tabIndex (null removes)." },
  { method: "focus()", param: "-", return: "void", explain: "Focuses the add button." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Common: visibility." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Common: show/hide." },
  { method: "getId()", param: "-", return: "string", explain: "Common: unique id." },
  { method: "reload()", param: "-", return: "void", explain: "Common: force re-render." },
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
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '38%' },
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
    <!-- Live Demo -->
    <HFileset
      id="fileset-demo"
      class="hison-col-12 hison-size-m"
      :multiCols="true"
      :placeholder="props.lang === 'en' ? 'Drop files here.' : '여기에 파일을 드롭하세요.'"
      :addButtonText="props.lang === 'en' ? 'UPLOAD' : '업로드'"
      :removeButtonText="props.lang === 'en' ? 'DELETE' : '삭제'"
      :enableDrop="true"
      :visible="true"
      :editMode="'editable'"
      :multiple="true"
      :maxFileCount="3"
      :allowedTypes="['.pdf','.jpg','.png']"
      style="height: 180px; margin-bottom: 6px;"
    >
      <template #file-icon="{ file }">
        <span v-if="file.extension === 'pdf'">📕</span>
        <span v-else-if="file.extension === 'jpg' || file.extension === 'jpeg' || file.extension === 'png'">🖼️</span>
        <span v-else>📄</span>
      </template>
      <template #add-button="{}">
        <span>📁 {{ props.lang === 'en' ? 'Add files' : '파일 추가' }}</span>
      </template>
    </HFileset>

    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="filesetSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'120px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="filesetPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'540px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="filesetEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'260px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="filesetMethodGrid"
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