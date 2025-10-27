<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { HGridColumn, HGridMethods, NoteData } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* =========================================================
 * i18n copy
 * =======================================================*/
const ko = {
  t900:
`HNote컴포넌트는 vanillanote2의 정보를 참조하면 더 많은 세부 기능을 확인할 수 있습니다.`,
  t950:
`vanillanote 바로가기`,
  t1000:
`하단은 HNote(WYSIWYG 에디터) 컴포넌트입니다.

HNote는 vanillanote2 기반의 리치 텍스트 에디터로, 파일/이미지/비디오 첨부,
되돌리기/다시하기, 툴바 커스터마이징, 다양한 before/after 상호작용 훅(noteEventProps)을 제공합니다.
양방향 바인딩은 \`v-model\` 을 사용하며, 런타임 인스턴스는 hison.component.getNote(id) 로 접근합니다.`,

  t1010: `라이브 데모`,
  t1030:
`주요 특징

· \`v-model\` 로 NoteData 바인딩 (html/attachments 등)
· 파일/이미지/비디오 첨부 및 용량/타입 제한
· 에디터/툴바/플레이스홀더/폰트/사이즈/색상 커스터마이징
· 거의 모든 UI 조작에 대한 before/after 이벤트 훅(noteEventProps)
· 다중 인스턴스 및 SSR 안전한 마운트`,

  t1040: `템플릿 사용 예시`,
  c1040:
`<HNote
  v-model="noteData"
  id="note1"
  textarea-height="300px"
  :boldBeforeClick="(e) => { return false }"
  @mounted="onMounted"
/>`,

  t1050: `런타임 접근 (인스턴스)`,
  c1050:
`const note = hison.component.getNote('note1')
note.setNoteData({ html: '<p>Hello World</p>' })
note.focus()`,
  t1055: `연관 Interface`,
  c1055:
`/**
 * 단일 Vanillanote 에디터 인스턴스의 전체 데이터 스냅샷입니다.
 *
 * - 'VanillanoteElement.getNoteData()'에 의해 반환됩니다.
 * - 'VanillanoteElement.setNoteData()'를 통해 에디터 내용을 복원할 수 있습니다.
 *
 * 포함 항목:
 * - HTML 구조 ('html')
 * - 서식이 제거된 일반 텍스트 ('plainText')
 * - 첨부된 링크, 파일, 이미지, 비디오 목록
 * - 업로드 중 사용되는 파일 및 이미지의 활성 'File' 객체
 *
 * @example
 * const note = vn.getNote('myEditorId');
 * const data = note?.getNoteData();
 *
 * // 서버에 저장 또는 전송
 * saveNoteData(data);
 *
 * // 이후 복원
 * note?.setNoteData(savedData);
 */
export interface NoteData {
    /** 에디터의 직렬화된 HTML 콘텐츠 */
    html: string;
    /** HTML 태그가 제거된 일반 텍스트 표현 */
    plainText: string;
    /** 삽입된 하이퍼링크 목록 */
    links: NoteLinkData[];
    /** 첨부된 파일 목록 */
    files: NoteFileData[];
    /** 첨부된 이미지 목록 */
    images: NoteImageData[];
    /** 첨부된 비디오 목록 */
    videos: NoteVideoData[];
    /** 첨부된 파일의 실제 'File' 객체 (UUID를 키로 사용) */
    fileObjects: Record<string, File>;
    /** 첨부된 이미지의 실제 'File' 객체 (UUID를 키로 사용) */
    imageObjects: Record<string, File>;
}`,
  // 전역 설정: VanillanoteConfig
  t1060: `전역 설정: hisonConfig에 VanillanoteConfig 커스터마이징`,
  c1060:
`// src/main.ts (예시)
import { createApp } from 'vue'
import App from './App.vue'
import { getDefaultHisonConfig } from 'hisonvue'
// 아래 함수/타입은 라이브러리 제공 유틸 또는 프로젝트 헬퍼를 사용하세요.
import { getVanillanoteConfig } from 'vanillanote2' // (사용 환경에 맞게)

const app = createApp(App)

// 1) 기본 hison 설정
const hisonConfig = getDefaultHisonConfig()

// 2) VanillanoteConfig 생성/가져오기
const vanillanoteConfig = getVanillanoteConfig()

// 3) 사용자 커스터마이징 예시
// 색상/언어/아이콘/알럿 후킹 등 원하는 전역 기본값 적용
vanillanoteConfig.useGoogleIcon = true
vanillanoteConfig.beforeAlert = (msg) => {
  // 커스텀 알럿/토스트 사용 시 false 반환
  // showToast(msg); 
  return true
}
vanillanoteConfig.languageSet.KOR.boldTooltip = '굵게(B)'

// FontAwesome 아이콘 변경
function getFontAwesome(oldEl, iconType, iconId, cssText) {
  let newEl = document.createElement('i');
  for (let i = 0; i < oldEl.attributes.length; i++) {
    const attr = oldEl.attributes[i];
    newEl.setAttribute(attr.name, attr.value);
  }
  newEl.classList.remove('material-symbols-rounded');
  newEl.classList.add(iconType);
  newEl.classList.add(iconId);
  if(cssText) {
    newEl.setAttribute('style', cssText)
  }
  return newEl;
};
vn.elements.paragraphStyleSelects[0].replaceChild(
  getFontAwesome(vn.elements.paragraphStyleSelects[0].firstChild, 'fas', 'fa-paragraph'),
  vn.elements.paragraphStyleSelects[0].firstChild,
);

//....logic

// 4) hisonConfig에 주입 (⚠️ ComponentConfig.note는 VanillanoteConfig)
hisonConfig.ComponentConfig.note = vanillanoteConfig

// 5) 앱에 주입
app.provide('hisonConfig', hisonConfig)
app.mount('#app')`,

  t1100: `슬롯`,
  t1200: `props (일반 속성)`,
  t1250: `props (noteEventProps - 상호작용 훅)`,
  t1251:
`noteEventProps 동작 원리

· 각 콜백은 해당 UI 조작 시점에 호출됩니다.
· **boolean을 반환하는 콜백**에서 \`false\`를 반환하면 해당 동작이 **취소**됩니다.
  (예: \`boldBeforeClick\`이 false를 반환하면 굵게 토글 동작을 막음)
· 반환 타입이 \`void\`인 콜백은 동작을 막지 않고, 상태 변경 후 알림/사이드 이펙트를 위한 용도입니다.
· 대부분 \`(event: Event)\` 시그니처이며, 필요 시 내부 타겟에 접근해 추가 제어가 가능합니다.`,
  t1300: `컴포넌트 이벤트`,
  t1400: `핵심 메서드(HNoteElement)`,
}

const en = {
  t900:
`You can find more detailed features of the HNote component by referring to the information in vanillanote2.`,
  t950:
`go vanillanote`,
  t1000:
`Below is the HNote (WYSIWYG) editor component.

HNote is powered by vanillanote2, supports file/image/video attachments,
undo/redo, toolbar customization, and rich before/after interaction hooks (noteEventProps).
Use \`v-model\` for two-way binding and access runtime instance via hison.component.getNote(id).`,

  t1010: `Live Demo`,
  t1030:
`Main Features

· Two-way bind NoteData via v-model (html/attachments, etc.)
· Attach files/images/videos with type/size limits
· Customize editor/toolbar/placeholder/fonts/sizes/colors
· Fine-grained before/after hooks for nearly all UI actions (noteEventProps)
· Multiple instances & SSR-safe mounting`,

  t1040: `Template Example`,
  c1040:
`<HNote
  v-model="noteData"
  id="note1"
  textarea-height="300px"
  :boldBeforeClick="(e) => { return false }"
  @mounted="onMounted"
/>`,

  t1050: `Runtime Access`,
  c1050:
`const note = hison.component.getNote('note1')
note.setNoteData({ html: '<p>Hello World</p>' })
note.focus()`,
  t1055: `Related Interface`,
  c1055:
`/**
 * Full data snapshot of a single Vanillanote editor instance.
 *
 * - Returned by 'VanillanoteElement.getNoteData()'.
 * - Can be used with 'VanillanoteElement.setNoteData()' to restore the editor's content.
 *
 * Includes:
 * - HTML structure ('html').
 * - Plain text without formatting ('plainText').
 * - Lists of attached links, files, images, and videos.
 * - Active 'File' objects for files and images (used during uploads).
 *
 * @example
 * const note = vn.getNote('myEditorId');
 * const data = note?.getNoteData();
 *
 * // Save or send to server
 * saveNoteData(data);
 *
 * // Later...
 * note?.setNoteData(savedData);
 */
export interface NoteData {
    /** Serialized HTML content of the editor. */
    html: string;
    /** Plain text representation without any HTML tags. */
    plainText: string;
    /** List of embedded hyperlinks. */
    links: NoteLinkData[];
    /** List of attached files. */
    files: NoteFileData[];
    /** List of attached images. */
    images: NoteImageData[];
    /** List of attached videos. */
    videos: NoteVideoData[];
    /** Actual 'File' objects for attached files, keyed by UUID. */
    fileObjects: Record<string, File>;
    /** Actual 'File' objects for attached images, keyed by UUID. */
    imageObjects: Record<string, File>;
}`,
  t1060: `Global setup: customize VanillanoteConfig in hisonConfig`,
  c1060:
`// src/main.ts (example)
import { createApp } from 'vue'
import App from './App.vue'
import { getDefaultHisonConfig } from 'hisonvue'
import { getVanillanoteConfig } from 'vanillanote2' // or your project helper

const app = createApp(App)

const hisonConfig = getDefaultHisonConfig()
const vanillanoteConfig = getVanillanoteConfig()

// Customize defaults
vanillanoteConfig.useGoogleIcon = true
vanillanoteConfig.beforeAlert = (msg) => { return true }
vanillanoteConfig.languageSet.ENG.boldTooltip = 'Bold'

// change FontAwesome icon
function getFontAwesome(oldEl, iconType, iconId, cssText) {
  let newEl = document.createElement('i');
  for (let i = 0; i < oldEl.attributes.length; i++) {
    const attr = oldEl.attributes[i];
    newEl.setAttribute(attr.name, attr.value);
  }
  newEl.classList.remove('material-symbols-rounded');
  newEl.classList.add(iconType);
  newEl.classList.add(iconId);
  if(cssText) {
    newEl.setAttribute('style', cssText)
  }
  return newEl;
};
vn.elements.paragraphStyleSelects[0].replaceChild(
  getFontAwesome(vn.elements.paragraphStyleSelects[0].firstChild, 'fas', 'fa-paragraph'),
  vn.elements.paragraphStyleSelects[0].firstChild,
);

//....logic

// Inject into hisonConfig (⚠️ ComponentConfig.note is VanillanoteConfig)
hisonConfig.ComponentConfig.note = vanillanoteConfig

app.provide('hisonConfig', hisonConfig)
app.mount('#app')`,

  t1100: `slot`,
  t1200: `props (general)`,
  t1250: `props (noteEventProps - interaction hooks)`,
  t1251:
`How noteEventProps work

· Each callback fires on the corresponding UI action.
· **Boolean-returning callbacks**: returning \`false\` **cancels** the action
  (e.g., boldBeforeClick=false prevents bold toggle).
· \`void\` callbacks do not prevent actions; they are for side-effects/notifications.
· Most signatures are \`(event: Event)\`; you can inspect targets for deeper control.`,
  t1300: `component events`,
  t1400: `key methods(HNoteElement)`,
}

const contents = props.lang === 'en' ? en : ko

const noteData = ref<NoteData>()

const slotGridDataKo = [{ slot: '-', explain: 'HNote는 공개 슬록(템플릿 슬롯)을 제공하지 않습니다.' }]
const slotGridDataEn = [{ slot: '-', explain: 'HNote does not expose template slots.' }]

// props (일반)
const propGridDataKo = [
  { prop: "v-model", type: "NoteData", default: "-", explain: "에디터 내용/첨부를 포함하는 데이터 바인딩." },
  { prop: "id", type: "string", default: "-", explain: "필수. 에디터 인스턴스 식별자." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형 hison-* 유틸 지원." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 래퍼 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시/숨김." },
  { prop: "editMode", type: "'editable'|'disable'|'readonly'", default: "'editable'", explain: "편집/읽기 전용/비활성." },

  { prop: "noteModeByDevice", type: "'ADAPTIVE'|'MOBILE'|'DESKTOP'", default: "'ADAPTIVE'", explain: "디바이스 강제 모드." },
  { prop: "toolPosition", type: "'TOP'|'BOTTOM'", default: "'TOP'", explain: "툴바 위치." },
  { prop: "toolDefaultLine", type: "number", default: "1", explain: "툴바 기본 라인 수." },
  { prop: "toolToggle", type: "boolean", default: "true", explain: "툴바 접기/펼치기 사용." },

  { prop: "textareaWidth", type: "string", default: "auto", explain: "에디터 너비." },
  { prop: "textareaHeight", type: "string", default: "auto", explain: "에디터 높이." },
  { prop: "textareaMaxWidth", type: "string", default: "-", explain: "최대 너비." },
  { prop: "textareaMaxHeight", type: "string", default: "-", explain: "최대 높이." },
  { prop: "textareaHeightIsModify", type: "boolean", default: "false", explain: "사용자 높이 조절 허용." },

  { prop: "placeholderIsVisible", type: "boolean", default: "true", explain: "플레이스홀더 표시." },
  { prop: "placeholderAddTop", type: "number", default: "0", explain: "플레이스홀더 Y 오프셋(px)." },
  { prop: "placeholderAddLeft", type: "number", default: "0", explain: "플레이스홀더 X 오프셋(px)." },
  { prop: "placeholderWidth", type: "string", default: "-", explain: "플레이스홀더 너비." },
  { prop: "placeholderColor", type: "string", default: "-", explain: "플레이스홀더 글자색." },
  { prop: "placeholderBackgroundColor", type: "string", default: "-", explain: "플레이스홀더 배경." },
  { prop: "placeholderTitle", type: "string", default: "-", explain: "플레이스홀더 타이틀." },
  { prop: "placeholderTextContent", type: "string", default: "-", explain: "플레이스홀더 설명." },

  { prop: "attFilePreventTypes", type: "string", default: "-", explain: "파일 첨부 금지 MIME (CSV)." },
  { prop: "attFileAcceptTypes", type: "string", default: "-", explain: "파일 첨부 허용 MIME (CSV)." },
  { prop: "attFileMaxSize", type: "number", default: "-", explain: "파일 첨부 최대 용량(bytes)." },

  { prop: "attImagePreventTypes", type: "string", default: "-", explain: "이미지 첨부 금지 MIME (CSV)." },
  { prop: "attImageAcceptTypes", type: "string", default: "-", explain: "이미지 첨부 허용 MIME (CSV)." },
  { prop: "attImageMaxSize", type: "number", default: "-", explain: "이미지 첨부 최대 용량(bytes)." },

  { prop: "defaultFontSize", type: "number", default: "-", explain: "기본 폰트 크기(px)." },
  { prop: "defaultLineHeight", type: "number", default: "-", explain: "기본 줄간격." },
  { prop: "defaultFontFamily", type: "string", default: "-", explain: "기본 폰트 패밀리." },
  { prop: "defaultToolFontFamily", type: "string", default: "-", explain: "툴바 폰트 패밀리." },
  { prop: "addFontFamily", type: "string", default: "-", explain: "추가 허용 폰트 (CSV)." },
  { prop: "removeFontFamily", type: "string", default: "-", explain: "제외 폰트 (CSV)." },

  { prop: "language", type: "string", default: "ENG", explain: "언어 키 (예: 'KOR','ENG')." },
  { prop: "recodeLimit", type: "string", default: "-", explain: "undo/redo 스택 제한." },
  { prop: "sizeLevelDesktop", type: "number", default: "5", explain: "데스크톱 크기 레벨(1–9)." },
  { prop: "sizeLevelMobile", type: "number", default: "5", explain: "모바일 크기 레벨(1–9)." },
  { prop: "color", type: "Color | string", default: "'primary'", explain: "테마 컬러." },
  { prop: "invertColor", type: "boolean", default: "false", explain: "다크 모드 반전." },

  { prop: "usingParagraphStyle", type: "boolean", default: "true", explain: "문단 스타일 사용." },
  { prop: "usingBold", type: "boolean", default: "true", explain: "굵게 버튼 노출." },
  { prop: "usingUnderline", type: "boolean", default: "true", explain: "밑줄 버튼 노출." },
  { prop: "usingItalic", type: "boolean", default: "true", explain: "이탤릭 버튼 노출." },
  { prop: "usingUl", type: "boolean", default: "true", explain: "순서없는 목록 버튼 노출." },
  { prop: "usingOl", type: "boolean", default: "true", explain: "순서있는 목록 버튼 노출." },
  { prop: "usingTextAlign", type: "boolean", default: "true", explain: "정렬 버튼 노출." },
  { prop: "usingFontSize", type: "boolean", default: "true", explain: "폰트 크기 제어 노출." },
  { prop: "usingLetterSpacing", type: "boolean", default: "true", explain: "자간 제어 노출." },
  { prop: "usingLineHeight", type: "boolean", default: "true", explain: "행간 제어 노출." },
  { prop: "usingFontFamily", type: "boolean", default: "true", explain: "폰트 패밀리 선택 노출." },
  { prop: "usingColorText", type: "boolean", default: "true", explain: "텍스트 색상 제어 노출." },
  { prop: "usingColorBack", type: "boolean", default: "true", explain: "배경 색상 제어 노출." },
  { prop: "usingAttLink", type: "boolean", default: "true", explain: "링크 첨부 노출." },
  { prop: "usingAttFile", type: "boolean", default: "true", explain: "파일 첨부 노출." },
  { prop: "usingAttImage", type: "boolean", default: "true", explain: "이미지 첨부 노출." },
  { prop: "usingAttVideo", type: "boolean", default: "true", explain: "비디오 첨부 노출." },
  { prop: "usingFormatClear", type: "boolean", default: "true", explain: "서식 지우기 노출." },
  { prop: "usingUndo", type: "boolean", default: "true", explain: "되돌리기 노출." },
  { prop: "usingRedo", type: "boolean", default: "true", explain: "다시하기 노출." },
  { prop: "usingHelp", type: "boolean", default: "true", explain: "도움말/단축키 노출." },
  { prop: "usingParagraphAllStyle", type: "boolean", default: "false", explain: "문단 관련 전체 컨트롤 일괄 노출." },
  { prop: "usingCharacterStyle", type: "boolean", default: "false", explain: "문자 효과 관련 전체 버튼 일괄 노출." },
  { prop: "usingCharacterSize", type: "boolean", default: "false", explain: "폰트 크기/자간/행간 일괄 노출." },
  { prop: "usingAttachFile", type: "boolean", default: "false", explain: "첨부(링크/파일/이미지/비디오) 일괄 노출." },
  { prop: "usingDo", type: "boolean", default: "true", explain: "되돌리기/다시하기 모두 노출." },
]
const propGridDataEn = [
  { prop: "v-model", type: "NoteData", default: "-", explain: "Two-way bind for content/attachments." },
  { prop: "id", type: "string", default: "-", explain: "Required editor id." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive hison-* utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline styles for wrapper." },
  { prop: "visible", type: "boolean", default: "true", explain: "Show/hide." },
  { prop: "editMode", type: "'editable'|'disable'|'readonly'", default: "'editable'", explain: "Edit/disable/readonly." },

  { prop: "noteModeByDevice", type: "'ADAPTIVE'|'MOBILE'|'DESKTOP'", default: "'ADAPTIVE'", explain: "Force device mode." },
  { prop: "toolPosition", type: "'TOP'|'BOTTOM'", default: "'TOP'", explain: "Toolbar position." },
  { prop: "toolDefaultLine", type: "number", default: "1", explain: "Default toolbar lines." },
  { prop: "toolToggle", type: "boolean", default: "true", explain: "Allow toolbar fold/unfold." },

  { prop: "textareaWidth", type: "string", default: "auto", explain: "Editor width." },
  { prop: "textareaHeight", type: "string", default: "auto", explain: "Editor height." },
  { prop: "textareaMaxWidth", type: "string", default: "-", explain: "Max width." },
  { prop: "textareaMaxHeight", type: "string", default: "-", explain: "Max height." },
  { prop: "textareaHeightIsModify", type: "boolean", default: "false", explain: "Allow user to resize height." },

  { prop: "placeholderIsVisible", type: "boolean", default: "true", explain: "Show placeholder." },
  { prop: "placeholderAddTop", type: "number", default: "0", explain: "Placeholder Y offset." },
  { prop: "placeholderAddLeft", type: "number", default: "0", explain: "Placeholder X offset." },
  { prop: "placeholderWidth", type: "string", default: "-", explain: "Placeholder width." },
  { prop: "placeholderColor", type: "string", default: "-", explain: "Placeholder color." },
  { prop: "placeholderBackgroundColor", type: "string", default: "-", explain: "Placeholder background." },
  { prop: "placeholderTitle", type: "string", default: "-", explain: "Placeholder title." },
  { prop: "placeholderTextContent", type: "string", default: "-", explain: "Placeholder text." },

  { prop: "attFilePreventTypes", type: "string", default: "-", explain: "Blocked MIME for file attach (CSV)." },
  { prop: "attFileAcceptTypes", type: "string", default: "-", explain: "Allowed MIME for file attach (CSV)." },
  { prop: "attFileMaxSize", type: "number", default: "-", explain: "Max file size (bytes)." },

  { prop: "attImagePreventTypes", type: "string", default: "-", explain: "Blocked MIME for image attach (CSV)." },
  { prop: "attImageAcceptTypes", type: "string", default: "-", explain: "Allowed MIME for image attach (CSV)." },
  { prop: "attImageMaxSize", type: "number", default: "-", explain: "Max image size (bytes)." },

  { prop: "defaultFontSize", type: "number", default: "-", explain: "Default font size(px)." },
  { prop: "defaultLineHeight", type: "number", default: "-", explain: "Default line-height." },
  { prop: "defaultFontFamily", type: "string", default: "-", explain: "Default font family." },
  { prop: "defaultToolFontFamily", type: "string", default: "-", explain: "Toolbar font family." },
  { prop: "addFontFamily", type: "string", default: "-", explain: "Extra allowed fonts (CSV)." },
  { prop: "removeFontFamily", type: "string", default: "-", explain: "Excluded fonts (CSV)." },

  { prop: "language", type: "string", default: "ENG", explain: "Language key (e.g., 'KOR','ENG')." },
  { prop: "recodeLimit", type: "string", default: "-", explain: "Undo/redo stack limit." },
  { prop: "sizeLevelDesktop", type: "number", default: "5", explain: "Desktop size level (1–9)." },
  { prop: "sizeLevelMobile", type: "number", default: "5", explain: "Mobile size level (1–9)." },
  { prop: "color", type: "Color | string", default: "'primary'", explain: "Theme color." },
  { prop: "invertColor", type: "boolean", default: "false", explain: "Dark mode invert." },

  { prop: "usingParagraphStyle", type: "boolean", default: "true", explain: "Show paragraph style." },
  { prop: "usingBold", type: "boolean", default: "true", explain: "Show bold." },
  { prop: "usingUnderline", type: "boolean", default: "true", explain: "Show underline." },
  { prop: "usingItalic", type: "boolean", default: "true", explain: "Show italic." },
  { prop: "usingUl", type: "boolean", default: "true", explain: "Show unordered list." },
  { prop: "usingOl", type: "boolean", default: "true", explain: "Show ordered list." },
  { prop: "usingTextAlign", type: "boolean", default: "true", explain: "Show text align." },
  { prop: "usingFontSize", type: "boolean", default: "true", explain: "Show font size control." },
  { prop: "usingLetterSpacing", type: "boolean", default: "true", explain: "Show letter spacing." },
  { prop: "usingLineHeight", type: "boolean", default: "true", explain: "Show line height." },
  { prop: "usingFontFamily", type: "boolean", default: "true", explain: "Show font family selector." },
  { prop: "usingColorText", type: "boolean", default: "true", explain: "Show text color panel." },
  { prop: "usingColorBack", type: "boolean", default: "true", explain: "Show background color panel." },
  { prop: "usingAttLink", type: "boolean", default: "true", explain: "Show attach link." },
  { prop: "usingAttFile", type: "boolean", default: "true", explain: "Show attach file." },
  { prop: "usingAttImage", type: "boolean", default: "true", explain: "Show attach image." },
  { prop: "usingAttVideo", type: "boolean", default: "true", explain: "Show attach video." },
  { prop: "usingFormatClear", type: "boolean", default: "true", explain: "Show clear formatting." },
  { prop: "usingUndo", type: "boolean", default: "true", explain: "Show undo." },
  { prop: "usingRedo", type: "boolean", default: "true", explain: "Show redo." },
  { prop: "usingHelp", type: "boolean", default: "true", explain: "Show help/shortcuts." },
  { prop: "usingParagraphAllStyle", type: "boolean", default: "false", explain: "Expose all paragraph controls." },
  { prop: "usingCharacterStyle", type: "boolean", default: "false", explain: "Expose all character style buttons." },
  { prop: "usingCharacterSize", type: "boolean", default: "false", explain: "Expose font size/spacing/line-height." },
  { prop: "usingAttachFile", type: "boolean", default: "false", explain: "Expose all attachment buttons." },
  { prop: "usingDo", type: "boolean", default: "true", explain: "Show both undo and redo." },
]

// props (noteEventProps) — 요약 테이블 (대표 이벤트 위주, 필요 시 확장)
const noteEventPropsKo = [
  { prop: "textareaBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "텍스트 영역 클릭 전." },
  { prop: "textareaAfterClick", type: "(e: Event) => void", returns: "-", explain: "텍스트 영역 클릭 후." },
  { prop: "textareaBeforeFocus", type: "(e: Event) => boolean", returns: "false→취소", explain: "포커스 전." },
  { prop: "textareaAfterFocus", type: "(e: Event) => void", returns: "-", explain: "포커스 후." },
  { prop: "textareaBeforeBlur", type: "(e: Event) => boolean", returns: "false→취소", explain: "블러 전." },
  { prop: "textareaAfterBlur", type: "(e: Event) => void", returns: "-", explain: "블러 후." },

  { prop: "paragraphStyleSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "문단 스타일 셀렉트 전." },
  { prop: "paragraphStyleSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "문단 스타일 셀렉트 후." },
  { prop: "toolToggleBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "툴 토글 전." },
  { prop: "toolToggleAfterClick", type: "(e: Event) => void", returns: "-", explain: "툴 토글 후." },

  { prop: "styleNomalBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "일반 스타일 전." },
  { prop: "styleNomalAfterClick", type: "(e: Event) => void", returns: "-", explain: "일반 스타일 후." },
  { prop: "styleHeader1BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "H1 전." },
  { prop: "styleHeader1AfterClick", type: "(e: Event) => void", returns: "-", explain: "H1 후." },
  { prop: "styleHeader2BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "H2 전." },
  { prop: "styleHeader2AfterClick", type: "(e: Event) => void", returns: "-", explain: "H2 후." },
  { prop: "styleHeader3BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "H3 전." },
  { prop: "styleHeader3AfterClick", type: "(e: Event) => void", returns: "-", explain: "H3 후." },
  { prop: "styleHeader4BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "H4 전." },
  { prop: "styleHeader4AfterClick", type: "(e: Event) => void", returns: "-", explain: "H4 후." },
  { prop: "styleHeader5BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "H5 전." },
  { prop: "styleHeader5AfterClick", type: "(e: Event) => void", returns: "-", explain: "H5 후." },
  { prop: "styleHeader6BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "H6 전." },
  { prop: "styleHeader6AfterClick", type: "(e: Event) => void", returns: "-", explain: "H6 후." },

  { prop: "boldBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "굵게 전." },
  { prop: "boldAfterClick", type: "(e: Event) => void", returns: "-", explain: "굵게 후." },
  { prop: "underlineBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "밑줄 전." },
  { prop: "underlineAfterClick", type: "(e: Event) => void", returns: "-", explain: "밑줄 후." },
  { prop: "italicBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "이탤릭 전." },
  { prop: "italicAfterClick", type: "(e: Event) => void", returns: "-", explain: "이탤릭 후." },

  { prop: "ulBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "UL 전." },
  { prop: "ulAfterClick", type: "(e: Event) => void", returns: "-", explain: "UL 후." },
  { prop: "olBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "OL 전." },
  { prop: "olAfterClick", type: "(e: Event) => void", returns: "-", explain: "OL 후." },

  { prop: "textAlignSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "정렬 셀렉트 전." },
  { prop: "textAlignSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "정렬 셀렉트 후." },
  { prop: "textAlignLeftBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "좌정렬 전." },
  { prop: "textAlignLeftAfterClick", type: "(e: Event) => void", returns: "-", explain: "좌정렬 후." },
  { prop: "textAlignCenterBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "중앙정렬 전." },
  { prop: "textAlignCenterAfterClick", type: "(e: Event) => void", returns: "-", explain: "중앙정렬 후." },
  { prop: "textAlignRightBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "우정렬 전." },
  { prop: "textAlignRightAfterClick", type: "(e: Event) => void", returns: "-", explain: "우정렬 후." },

  { prop: "attLinkBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "링크 첨부 전." },
  { prop: "attLinkAfterClick", type: "(e: Event) => void", returns: "-", explain: "링크 첨부 후." },
  { prop: "attFileBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "파일 첨부 전." },
  { prop: "attFileAfterClick", type: "(e: Event) => void", returns: "-", explain: "파일 첨부 후." },
  { prop: "attImageBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "이미지 첨부 전." },
  { prop: "attImageAfterClick", type: "(e: Event) => void", returns: "-", explain: "이미지 첨부 후." },
  { prop: "attVideoBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "비디오 첨부 전." },
  { prop: "attVideoAfterClick", type: "(e: Event) => void", returns: "-", explain: "비디오 첨부 후." },

  { prop: "fontSizeBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "폰트 크기 박스 전." },
  { prop: "fontSizeBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "폰트 크기 박스 후." },
  { prop: "fontSizeBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "폰트 크기 선택 전." },
  { prop: "fontSizeAfterClick", type: "(e: Event) => void", returns: "-", explain: "폰트 크기 선택 후." },
  { prop: "fontSizeBeforeInput", type: "(e: Event) => boolean", returns: "false→취소", explain: "폰트 크기 입력 전." },
  { prop: "fontSizeAfterInput", type: "(e: Event) => void", returns: "-", explain: "폰트 크기 입력 후." },
  { prop: "fontSizeBeforeBlur", type: "(e: Event) => boolean", returns: "false→취소", explain: "폰트 크기 블러 전." },
  { prop: "fontSizeAfterBlur", type: "(e: Event) => void", returns: "-", explain: "폰트 크기 블러 후." },

  { prop: "letterSpacingBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "자간 박스 전." },
  { prop: "letterSpacingBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "자간 박스 후." },
  { prop: "letterSpacingBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "자간 선택 전." },
  { prop: "letterSpacingAfterClick", type: "(e: Event) => void", returns: "-", explain: "자간 선택 후." },
  { prop: "letterSpacingBeforeInput", type: "(e: Event) => boolean", returns: "false→취소", explain: "자간 입력 전." },
  { prop: "letterSpacingAfterInput", type: "(e: Event) => void", returns: "-", explain: "자간 입력 후." },
  { prop: "letterSpacingBeforeBlur", type: "(e: Event) => boolean", returns: "false→취소", explain: "자간 블러 전." },
  { prop: "letterSpacingAfterBlur", type: "(e: Event) => void", returns: "-", explain: "자간 블러 후." },

  { prop: "lineHeightBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "행간 박스 전." },
  { prop: "lineHeightBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "행간 박스 후." },
  { prop: "lineHeightBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "행간 선택 전." },
  { prop: "lineHeightAfterClick", type: "(e: Event) => void", returns: "-", explain: "행간 선택 후." },
  { prop: "lineHeightBeforeInput", type: "(e: Event) => boolean", returns: "false→취소", explain: "행간 입력 전." },
  { prop: "lineHeightAfterInput", type: "(e: Event) => void", returns: "-", explain: "행간 입력 후." },
  { prop: "lineHeightBeforeBlur", type: "(e: Event) => boolean", returns: "false→취소", explain: "행간 블러 전." },
  { prop: "lineHeightAfterBlur", type: "(e: Event) => void", returns: "-", explain: "행간 블러 후." },

  { prop: "fontFamilySelectBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "폰트 셀렉트 전." },
  { prop: "fontFamilySelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "폰트 셀렉트 후." },

  { prop: "colorTextSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "텍스트 색상 셀렉트 전." },
  { prop: "colorTextSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "텍스트 색상 셀렉트 후." },
  { prop: "colorTextSelectBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "텍스트 색상 박스 전." },
  { prop: "colorTextSelectBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "텍스트 색상 박스 후." },

  // 대표 색상 인풋/클릭 샘플(0~7, RGB, opacity)
  { prop: "colorText0BeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "텍스트 색상 0 전." },
  { prop: "colorText0AfterClick", type: "(e: Event) => void", returns: "-", explain: "텍스트 색상 0 후." },
  { prop: "colorTextRBeforeInput", type: "(e: Event) => boolean", returns: "false→취소", explain: "R 입력 전." },
  { prop: "colorTextRAfterInput", type: "(e: Event) => void", returns: "-", explain: "R 입력 후." },
  { prop: "colorTextOpacityBeforeBlur", type: "(e: Event) => boolean", returns: "false→취소", explain: "투명도 블러 전." },
  { prop: "colorTextOpacityAfterBlur", type: "(e: Event) => void", returns: "-", explain: "투명도 블러 후." },

  { prop: "colorBackSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "배경 색상 셀렉트 전." },
  { prop: "colorBackSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "배경 색상 셀렉트 후." },

  { prop: "formatClearBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "서식 초기화 전." },
  { prop: "formatClearAfterClick", type: "(e: Event) => void", returns: "-", explain: "서식 초기화 후." },
  { prop: "undoBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "되돌리기 전." },
  { prop: "undoAfterClick", type: "(e: Event) => void", returns: "-", explain: "되돌리기 후." },
  { prop: "redoBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "다시하기 전." },
  { prop: "redoAfterClick", type: "(e: Event) => void", returns: "-", explain: "다시하기 후." },
  { prop: "helpBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "도움말 전." },
  { prop: "helpAfterClick", type: "(e: Event) => void", returns: "-", explain: "도움말 후." },

  { prop: "modalBackBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "모달 배경 클릭 전." },
  { prop: "modalBackAfterClick", type: "(e: Event) => void", returns: "-", explain: "모달 배경 클릭 후." },
  { prop: "helpModalBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "도움말 모달 전." },
  { prop: "helpModalAfterClick", type: "(e: Event) => void", returns: "-", explain: "도움말 모달 후." },

  { prop: "placeholderBeforeClick", type: "(e: Event) => boolean", returns: "false→취소", explain: "플레이스홀더 클릭 전." },
  { prop: "placeholderAfterClick", type: "(e: Event) => void", returns: "-", explain: "플레이스홀더 클릭 후." },
]
const noteEventPropsEn = [
  { prop: "textareaBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before textarea click." },
  { prop: "textareaAfterClick", type: "(e: Event) => void", returns: "-", explain: "After textarea click." },
  { prop: "textareaBeforeFocus", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before focus." },
  { prop: "textareaAfterFocus", type: "(e: Event) => void", returns: "-", explain: "After focus." },
  { prop: "textareaBeforeBlur", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before blur." },
  { prop: "textareaAfterBlur", type: "(e: Event) => void", returns: "-", explain: "After blur." },

  { prop: "paragraphStyleSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before paragraph style select." },
  { prop: "paragraphStyleSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "After paragraph style select." },
  { prop: "toolToggleBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before toolbar toggle." },
  { prop: "toolToggleAfterClick", type: "(e: Event) => void", returns: "-", explain: "After toolbar toggle." },

  { prop: "styleNomalBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before Normal style." },
  { prop: "styleNomalAfterClick", type: "(e: Event) => void", returns: "-", explain: "After Normal style." },
  { prop: "styleHeader1BeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before H1." },
  { prop: "styleHeader1AfterClick", type: "(e: Event) => void", returns: "-", explain: "After H1." },
  { prop: "styleHeader2BeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before H2." },
  { prop: "styleHeader2AfterClick", type: "(e: Event) => void", returns: "-", explain: "After H2." },
  { prop: "styleHeader3BeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before H3." },
  { prop: "styleHeader3AfterClick", type: "(e: Event) => void", returns: "-", explain: "After H3." },
  { prop: "styleHeader4BeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before H4." },
  { prop: "styleHeader4AfterClick", type: "(e: Event) => void", returns: "-", explain: "After H4." },
  { prop: "styleHeader5BeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before H5." },
  { prop: "styleHeader5AfterClick", type: "(e: Event) => void", returns: "-", explain: "After H5." },
  { prop: "styleHeader6BeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before H6." },
  { prop: "styleHeader6AfterClick", type: "(e: Event) => void", returns: "-", explain: "After H6." },

  { prop: "boldBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before bold." },
  { prop: "boldAfterClick", type: "(e: Event) => void", returns: "-", explain: "After bold." },
  { prop: "underlineBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before underline." },
  { prop: "underlineAfterClick", type: "(e: Event) => void", returns: "-", explain: "After underline." },
  { prop: "italicBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before italic." },
  { prop: "italicAfterClick", type: "(e: Event) => void", returns: "-", explain: "After italic." },

  { prop: "ulBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before unordered list." },
  { prop: "ulAfterClick", type: "(e: Event) => void", returns: "-", explain: "After unordered list." },
  { prop: "olBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before ordered list." },
  { prop: "olAfterClick", type: "(e: Event) => void", returns: "-", explain: "After ordered list." },

  { prop: "textAlignSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before align select." },
  { prop: "textAlignSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "After align select." },
  { prop: "textAlignLeftBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before align-left." },
  { prop: "textAlignLeftAfterClick", type: "(e: Event) => void", returns: "-", explain: "After align-left." },
  { prop: "textAlignCenterBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before align-center." },
  { prop: "textAlignCenterAfterClick", type: "(e: Event) => void", returns: "-", explain: "After align-center." },
  { prop: "textAlignRightBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before align-right." },
  { prop: "textAlignRightAfterClick", type: "(e: Event) => void", returns: "-", explain: "After align-right." },

  { prop: "attLinkBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before attach link." },
  { prop: "attLinkAfterClick", type: "(e: Event) => void", returns: "-", explain: "After attach link." },
  { prop: "attFileBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before attach file." },
  { prop: "attFileAfterClick", type: "(e: Event) => void", returns: "-", explain: "After attach file." },
  { prop: "attImageBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before attach image." },
  { prop: "attImageAfterClick", type: "(e: Event) => void", returns: "-", explain: "After attach image." },
  { prop: "attVideoBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before attach video." },
  { prop: "attVideoAfterClick", type: "(e: Event) => void", returns: "-", explain: "After attach video." },

  { prop: "fontSizeBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before font-size box." },
  { prop: "fontSizeBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "After font-size box." },
  { prop: "fontSizeBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before font-size choose." },
  { prop: "fontSizeAfterClick", type: "(e: Event) => void", returns: "-", explain: "After font-size choose." },
  { prop: "fontSizeBeforeInput", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before font-size input." },
  { prop: "fontSizeAfterInput", type: "(e: Event) => void", returns: "-", explain: "After font-size input." },
  { prop: "fontSizeBeforeBlur", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before font-size blur." },
  { prop: "fontSizeAfterBlur", type: "(e: Event) => void", returns: "-", explain: "After font-size blur." },

  { prop: "letterSpacingBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before letter-spacing box." },
  { prop: "letterSpacingBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "After letter-spacing box." },
  { prop: "letterSpacingBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before letter-spacing choose." },
  { prop: "letterSpacingAfterClick", type: "(e: Event) => void", returns: "-", explain: "After letter-spacing choose." },
  { prop: "letterSpacingBeforeInput", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before letter-spacing input." },
  { prop: "letterSpacingAfterInput", type: "(e: Event) => void", returns: "-", explain: "After letter-spacing input." },
  { prop: "letterSpacingBeforeBlur", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before letter-spacing blur." },
  { prop: "letterSpacingAfterBlur", type: "(e: Event) => void", returns: "-", explain: "After letter-spacing blur." },

  { prop: "lineHeightBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before line-height box." },
  { prop: "lineHeightBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "After line-height box." },
  { prop: "lineHeightBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before line-height choose." },
  { prop: "lineHeightAfterClick", type: "(e: Event) => void", returns: "-", explain: "After line-height choose." },
  { prop: "lineHeightBeforeInput", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before line-height input." },
  { prop: "lineHeightAfterInput", type: "(e: Event) => void", returns: "-", explain: "After line-height input." },
  { prop: "lineHeightBeforeBlur", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before line-height blur." },
  { prop: "lineHeightAfterBlur", type: "(e: Event) => void", returns: "-", explain: "After line-height blur." },

  { prop: "fontFamilySelectBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before font family select." },
  { prop: "fontFamilySelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "After font family select." },

  { prop: "colorTextSelectBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before text color select." },
  { prop: "colorTextSelectAfterClick", type: "(e: Event) => void", returns: "-", explain: "After text color select." },
  { prop: "colorTextSelectBoxBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before text color box." },
  { prop: "colorTextSelectBoxAfterClick", type: "(e: Event) => void", returns: "-", explain: "After text color box." },

  { prop: "formatClearBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before clear formatting." },
  { prop: "formatClearAfterClick", type: "(e: Event) => void", returns: "-", explain: "After clear formatting." },
  { prop: "undoBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before undo." },
  { prop: "undoAfterClick", type: "(e: Event) => void", returns: "-", explain: "After undo." },
  { prop: "redoBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before redo." },
  { prop: "redoAfterClick", type: "(e: Event) => void", returns: "-", explain: "After redo." },
  { prop: "helpBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before help." },
  { prop: "helpAfterClick", type: "(e: Event) => void", returns: "-", explain: "After help." },

  { prop: "modalBackBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before modal background click." },
  { prop: "modalBackAfterClick", type: "(e: Event) => void", returns: "-", explain: "After modal background click." },
  { prop: "helpModalBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before help modal." },
  { prop: "helpModalAfterClick", type: "(e: Event) => void", returns: "-", explain: "After help modal." },

  { prop: "placeholderBeforeClick", type: "(e: Event) => boolean", returns: "false→cancel", explain: "Before placeholder click." },
  { prop: "placeholderAfterClick", type: "(e: Event) => void", returns: "-", explain: "After placeholder click." },
]

// component-level emits
const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 직후 에디터 인스턴스 전달", args: "(HNoteElement)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount (editor instance passed).", args: "(HNoteElement)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트의 고유 ID를 반환. `id` prop과 동일(미지정 시 자동 생성)." },
  { method: "getType()", param: "-", return: "string", explain: "컴포넌트의 타입 문자열을 반환." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "현재 컴포넌트가 표시 중인지 여부를 반환. `false`이면 `display:none` 상태." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "컴포넌트를 표시(true)/비표시(false)로 전환한다." },
  { method: "reload()", param: "-", return: "void", explain: "내부적으로 언마운트 후 리마운트하여 강제 리렌더링을 수행한다." },
  { method: "getType()", param: "-", return: "'note'", explain: "컴포넌트 타입 리터럴." },
  { method: "getRequired()", param: "-", return: "boolean", explain: "노트가 필수(required) 상태인지 반환한다." },
  { method: "setRequired(required)", param: "boolean", return: "void", explain: "노트의 필수 상태를 설정한다." },
  { method: "getEditMode()", param: "-", return: "'editable'|'readonly'|'disable'", explain: "현재 편집 모드를 반환한다." },
  { method: "setEditMode(mode)", param: "'editable'|'readonly'|'disable'", return: "void", explain: "노트의 편집 모드를 설정한다." },
  { method: "isModified()", param: "-", return: "boolean", explain: "사용자 상호작용으로 노트가 수정되었는지 여부를 반환한다." },
  { method: "initModified()", param: "-", return: "void", explain: "수정 플래그를 초기화한다(저장 후 또는 로드 후 호출 권장)." },
  { method: "getTabIndex()", param: "-", return: "number|null", explain: "현재 tabIndex 값을 반환. 없으면 null." },
  { method: "setTabIndex(v)", param: "number|null", return: "void", explain: "tabIndex를 설정하거나(null이면 제거)한다." },
  { method: "focus()", param: "-", return: "void", explain: "에디터에 포커스를 이동시킨다." },
  { method: "getDataModel()", param: "-", return: "DataModel<NoteData>", explain: "현재 노트 내용을 DataModel로 변환하여 반환한다." },
  { method: "setDataModel(dm)", param: "DataModel<NoteData>", return: "void", explain: "DataModel의 첫 번째 행을 기준으로 노트 내용을 복원한다." },
  { method: "load(data)", param: "NoteData|Record<string,any>|DataModel", return: "void", explain: "NoteData 또는 DataModel을 사용해 노트 내용을 로드한다." },
  { method: "getNoteData()", param: "-", return: "NoteData", explain: "현재 에디터의 HTML, 텍스트, 링크, 파일, 이미지, 비디오 등의 데이터를 NoteData 객체로 반환한다." },
  { method: "setNoteData(data)", param: "NoteData", return: "void", explain: "NoteData를 기반으로 HTML 및 첨부 파일 상태를 복원한다." },
];

const methodGridDataEn = [
  { method: "getId()", param: "-", return: "string", explain: "Returns the unique component ID. Same as `id` prop (auto-generated if omitted)." },
  { method: "getType()", param: "-", return: "string", explain: "Returns the component type string." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Returns whether the component is currently visible. `false` means `display:none`." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "Shows or hides the component." },
  { method: "reload()", param: "-", return: "void", explain: "Forces re-render by unmounting and remounting internally." },
  { method: "getType()", param: "-", return: "'note'", explain: "Component type literal." },
  { method: "getRequired()", param: "-", return: "boolean", explain: "Returns whether the note is marked as required." },
  { method: "setRequired(required)", param: "boolean", return: "void", explain: "Sets the required state of the note." },
  { method: "getEditMode()", param: "-", return: "'editable'|'readonly'|'disable'", explain: "Returns the current edit mode of the note." },
  { method: "setEditMode(mode)", param: "'editable'|'readonly'|'disable'", return: "void", explain: "Sets the edit mode of the note." },
  { method: "isModified()", param: "-", return: "boolean", explain: "Returns whether the note content has been modified by user actions." },
  { method: "initModified()", param: "-", return: "void", explain: "Resets the modified flag (useful after save or reload)." },
  { method: "getTabIndex()", param: "-", return: "number|null", explain: "Returns the current tabIndex, or null if not focusable." },
  { method: "setTabIndex(v)", param: "number|null", return: "void", explain: "Sets or removes the tabIndex attribute." },
  { method: "focus()", param: "-", return: "void", explain: "Focuses the editor." },
  { method: "getDataModel()", param: "-", return: "DataModel<NoteData>", explain: "Converts the current note content into a DataModel." },
  { method: "setDataModel(dm)", param: "DataModel<NoteData>", return: "void", explain: "Restores the editor content from a DataModel (first row used)." },
  { method: "load(data)", param: "NoteData|Record<string,any>|DataModel", return: "void", explain: "Loads note content from a NoteData object or DataModel." },
  { method: "getNoteData()", param: "-", return: "NoteData", explain: "Exports the editor’s content (HTML, text, links, files, images, videos) as a NoteData object." },
  { method: "setNoteData(data)", param: "NoteData", return: "void", explain: "Restores editor content and attachments from a NoteData object." },
];

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '78%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]
const eventPropColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '30%' },
  { id: 'type', header: 'type', dataType: 'text', width: '25%' },
  { id: 'returns', header: 'returns', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '30%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '30%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '20%' },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]

const mountSlotGrid = (grid: HGridMethods) =>
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)

const mountPropGrid = (grid: HGridMethods) =>
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)

const mountNoteEventPropsGrid = (grid: HGridMethods) =>
  grid.load(props.lang === 'en' ? noteEventPropsEn : noteEventPropsKo)

const mountEventGrid = (grid: HGridMethods) =>
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)

const mountMethodGrid = (grid: HGridMethods) =>
  grid.load(props.lang === 'en' ? methodGridDataEn : methodGridDataKo)
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HLabel>{{ contents.t900 }}</HLabel>
    <HLabel
        href="https://vanilla-note.github.io/"
        :anchor-attrs="{target: '_blank'}"
        :border="true"
    >{{ contents.t950 }}</HLabel>
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>
    <HGap/>

    <!-- Live Demo -->
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HNote
      :model-value="noteData"
      id="note1"
      class="hison-col-12"
      textarea-height="260px"
    />
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1055 }}</HParagraph>
    <CodeParagraph :code="contents.c1055" :dynamicWidth="false"/>
    <!-- hisonConfig + VanillanoteConfig -->
     <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1060 }}</HParagraph>
    <CodeParagraph :code="contents.c1060" :dynamicWidth="false"/>
    <!-- Slots -->
     <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="noteSlotGrid"
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

    <!-- props (general) -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="notePropGrid"
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

    <!-- props (noteEventProps) -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1250 }}</HCaption>
    <HParagraph class="hison-col-12">{{ contents.t1251 }}</HParagraph>
    <HGrid
      id="noteEventPropsGrid"
      :columns="eventPropColumn"
      class="hison-col-12 hison-size-m"
      :height="'800px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountNoteEventPropsGrid"
    />
    <HGap/>

    <!-- component events -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="noteEventGrid"
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

    <!-- methods -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="noteMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'550px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>