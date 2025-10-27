<!-- PopupSample.vue -->
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
`오픈된 창은 HPopup(경량 팝업) 컴포넌트입니다.

HPopup은 오버레이 옵션/드래그 가능한 상단바/프리셋·절대 좌표 배치와
런타임 제어 API를 제공하는 고정 위치 팝업입니다.`,
  t1030:
`주요 특징

· 프리셋 화면 위치('top-left' ~ 'bottom-right') 또는 left/top 절대 좌표
· 뷰포트 경계 내 드래그(절대 모드)
· 오버레이 표시/클릭-닫기, 스크롤 락(참조 카운트)
· 닫기 버튼 슬롯(전체 교체 또는 아이콘/라벨만 교체)
· hison-* 반응형 클래스 및 런타임 API(HPopupMethods)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HPopup
  id="popup01"
  class="hison-col-6 hison-size-s"
  :visible="false"
  :border="true"
  :zIndex="1200"
  position="middle-center"
  :left="null"
  :top="null"
  :width="480"
  :height="360"
  :draggable="true"
  :closeClickOverlay="true"
  :showOverlay="true"
  :overlayStyle="{ background: 'rgba(0,0,0,0.35)' }"
  :scrollLock="true"
  enterAnimationClass="hison-popup-enter"
  leaveAnimationClass="hison-popup-leave"
  @open="onOpen"
  @close="onClose"
  @responsive-change="onDevice"
>
  <template #default>
    popup content...
  </template>

  <!-- replace whole close button -->
  <template #close-button="{ onClick, text, title }">
    <MyCustomClose :label="text" :title="title" @click="onClick" />
  </template>

  <!-- or override parts only -->
  <template #close-icon>❌</template>
  <template #close-label>Close</template>
</HPopup>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const popup = hison.component.getPopup('popup01')
popup.open()
popup.setDraggable(false)
popup.setLeft(40); popup.setTop(30)    // 절대 모드 전환
popup.setPosition('top-right')         // 프리셋 위치(절대 모드가 아니면 적용)
popup.setZIndex(1400)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Opened popup is the HPopup (lightweight popup) component.

HPopup is a fixed-position popup with optional overlay, draggable topbar,
preset or absolute positioning, and a complete runtime API.`,
  t1030:
`Main Features

· Preset positions ('top-left' .. 'bottom-right') or absolute left/top
· Viewport-clamped dragging (absolute mode)
· Overlay with click-to-close, scroll lock (reference-counted)
· Close button slots (replace whole button or only icon/label)
· Responsive hison-* utilities and full runtime API (HPopupMethods)`,
  t1040: `Template Example`,
  c1040:
`<HPopup
  id="popup01"
  class="hison-col-6 hison-size-s"
  :visible="false"
  :border="true"
  :zIndex="1200"
  position="middle-center"
  :left="null"
  :top="null"
  :width="480"
  :height="360"
  :draggable="true"
  :closeClickOverlay="true"
  :showOverlay="true"
  :overlayStyle="{ background: 'rgba(0,0,0,0.35)' }"
  :scrollLock="true"
  enterAnimationClass="hison-popup-enter"
  leaveAnimationClass="hison-popup-leave"
  @open="onOpen"
  @close="onClose"
  @responsive-change="onDevice"
>
  <template #default>
    popup content...
  </template>

  <!-- replace whole close button -->
  <template #close-button="{ onClick, text, title }">
    <MyCustomClose :label="text" :title="title" @click="onClick" />
  </template>

  <!-- or override parts only -->
  <template #close-icon>❌</template>
  <template #close-label>Close</template>
</HPopup>`,
  t1050: `Runtime Example`,
  c1050:
`const popup = hison.component.getPopup('popup01')
popup.open()
popup.setDraggable(false)
popup.setLeft(40); popup.setTop(30)    // switch to absolute mode
popup.setPosition('top-right')         // used when not in absolute mode
popup.setZIndex(1400)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "팝업 본문 콘텐츠." },
  { slot: "close-button", explain: "닫기 버튼 전체 교체. { onClick, text, title } 제공." },
  { slot: "close-icon", explain: "기본 닫기 버튼의 아이콘 영역만 교체." },
  { slot: "close-label", explain: "기본 닫기 버튼의 라벨만 교체." },
]
const slotGridDataEn = [
  { slot: "default", explain: "Popup body content." },
  { slot: "close-button", explain: "Replace the entire close button. Props: { onClick, text, title }." },
  { slot: "close-icon", explain: "Replace only the icon of the default close button." },
  { slot: "close-label", explain: "Replace only the label of the default close button." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 ID. hison.component.getPopup(id)로 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/컬러/사이즈 등 hison-* 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "컨테이너 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "false", explain: "초기 표시 여부(이후는 메서드로만 제어)." },
  { prop: "border", type: "boolean", default: "true", explain: "박스 섀도우 보더." },
  { prop: "zIndex", type: "number", default: "1200", explain: "팝업 z-index(오버레이는 zIndex-1)." },
  { prop: "position", type: "'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'", default: "'middle-center'", explain: "프리셋 화면 위치(절대 모드에서는 무시)." },
  { prop: "left", type: "number|null", default: "null", explain: "절대 X(px). 설정 시 절대 모드." },
  { prop: "top", type: "number|null", default: "null", explain: "절대 Y(px). 설정 시 절대 모드." },
  { prop: "width", type: "number|null", default: "null", explain: "가로(px)." },
  { prop: "height", type: "number|null", default: "null", explain: "세로(px)." },
  { prop: "draggable", type: "boolean", default: "true", explain: "상단바 드래그 허용." },
  { prop: "closeClickOverlay", type: "boolean", default: "true", explain: "오버레이 클릭 시 닫기." },
  { prop: "showOverlay", type: "boolean", default: "true", explain: "오버레이 표시." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "오버레이 인라인 스타일(zIndex-1 병합)." },
  { prop: "scrollLock", type: "boolean", default: "true", explain: "표시 중 페이지 스크롤 잠금(참조 카운트)." },
  { prop: "enterAnimationClass", type: "string", default: "-", explain: "등장 애니메이션 클래스." },
  { prop: "leaveAnimationClass", type: "string", default: "-", explain: "퇴장 애니메이션 클래스." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getPopup(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive hison-* utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Container inline style." },
  { prop: "visible", type: "boolean", default: "false", explain: "Initial visibility (later controlled by methods only)." },
  { prop: "border", type: "boolean", default: "true", explain: "Box-shadow border." },
  { prop: "zIndex", type: "number", default: "1200", explain: "Popup z-index (overlay uses zIndex - 1)." },
  { prop: "position", type: "'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'", default: "'middle-center'", explain: "Preset screen position (ignored in absolute mode)." },
  { prop: "left", type: "number|null", default: "null", explain: "Absolute X (px). Enables absolute mode." },
  { prop: "top", type: "number|null", default: "null", explain: "Absolute Y (px). Enables absolute mode." },
  { prop: "width", type: "number|null", default: "null", explain: "Width in px." },
  { prop: "height", type: "number|null", default: "null", explain: "Height in px." },
  { prop: "draggable", type: "boolean", default: "true", explain: "Enable dragging via topbar." },
  { prop: "closeClickOverlay", type: "boolean", default: "true", explain: "Close on overlay click." },
  { prop: "showOverlay", type: "boolean", default: "true", explain: "Show overlay." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Overlay inline style (merged with zIndex-1)." },
  { prop: "scrollLock", type: "boolean", default: "true", explain: "Lock page scroll while visible (reference-counted)." },
  { prop: "enterAnimationClass", type: "string", default: "-", explain: "Enter animation class." },
  { prop: "leaveAnimationClass", type: "string", default: "-", explain: "Leave animation class." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 시", args: "(HPopupMethods)" },
  { event: "open", trigger: "열릴 때(enter 시작 후)", args: "-" },
  { event: "close", trigger: "닫힐 때(leave 종료 후)", args: "-" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HPopupMethods)" },
  { event: "open", trigger: "When popup opens (after enter starts).", args: "-" },
  { event: "close", trigger: "When popup closes (after leave finishes).", args: "-" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'popup'", explain: "컴포넌트 타입 리터럴." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "열기." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "닫기." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "토글." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "표시/숨김 설정." },
  { method: "getZIndex()", param: "-", return: "number", explain: "z-index 조회." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "z-index 설정." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "프리셋 위치 조회." },
  { method: "setPosition(v)", param: "ScreenPosition", return: "void", explain: "프리셋 위치 설정." },
  { method: "getLeft()", param: "-", return: "number | null", explain: "절대 X(px) 조회." },
  { method: "setLeft(v)", param: "number | null", return: "void", explain: "절대 X(px) 설정(절대 모드)." },
  { method: "getTop()", param: "-", return: "number | null", explain: "절대 Y(px) 조회." },
  { method: "setTop(v)", param: "number | null", return: "void", explain: "절대 Y(px) 설정(절대 모드)." },
  { method: "getWidth()", param: "-", return: "number | null", explain: "너비(px) 조회." },
  { method: "setWidth(v)", param: "number | null", return: "void", explain: "너비(px) 설정." },
  { method: "getHeight()", param: "-", return: "number | null", explain: "높이(px) 조회." },
  { method: "setHeight(v)", param: "number | null", return: "void", explain: "높이(px) 설정." },
  { method: "isDraggable()", param: "-", return: "boolean", explain: "드래그 가능 여부." },
  { method: "setDraggable(v)", param: "boolean", return: "void", explain: "드래그 허용/차단." },
  { method: "isOverlayShown()", param: "-", return: "boolean", explain: "오버레이 표시 여부." },
  { method: "setOverlayShown(v)", param: "boolean", return: "void", explain: "오버레이 표시/숨김." },
  { method: "isCloseClickOverlay()", param: "-", return: "boolean", explain: "오버레이 클릭 시 닫기 여부." },
  { method: "setCloseClickOverlay(v)", param: "boolean", return: "void", explain: "오버레이 클릭 닫기 설정." },
  { method: "isScrollLocked()", param: "-", return: "boolean", explain: "스크롤 락 여부." },
  { method: "setScrollLock(v)", param: "boolean", return: "void", explain: "스크롤 락 설정." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "보더 표시 토글." },
  { method: "getAnimationClasses()", param: "-", return: "{ enter: string, leave: string }", explain: "애니메이션 클래스 조회." },
  { method: "setAnimationClasses(opt)", param: "Partial<{ enter: string, leave: string }>", return: "void", explain: "애니메이션 클래스 설정." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'popup'", explain: "Component type literal." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Visibility state." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "Open." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "Close." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "Toggle open/close." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "Set visibility." },
  { method: "getZIndex()", param: "-", return: "number", explain: "Get z-index." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "Set z-index." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "Get preset position." },
  { method: "setPosition(v)", param: "ScreenPosition", return: "void", explain: "Set preset position." },
  { method: "getLeft()", param: "-", return: "number | null", explain: "Get absolute X (px)." },
  { method: "setLeft(v)", param: "number | null", return: "void", explain: "Set absolute X (px)." },
  { method: "getTop()", param: "-", return: "number | null", explain: "Get absolute Y (px)." },
  { method: "setTop(v)", param: "number | null", return: "void", explain: "Set absolute Y (px)." },
  { method: "getWidth()", param: "-", return: "number | null", explain: "Get width (px)." },
  { method: "setWidth(v)", param: "number | null", return: "void", explain: "Set width (px)." },
  { method: "getHeight()", param: "-", return: "number | null", explain: "Get height (px)." },
  { method: "setHeight(v)", param: "number | null", return: "void", explain: "Set height (px)." },
  { method: "isDraggable()", param: "-", return: "boolean", explain: "Whether draggable." },
  { method: "setDraggable(v)", param: "boolean", return: "void", explain: "Enable/disable dragging." },
  { method: "isOverlayShown()", param: "-", return: "boolean", explain: "Overlay visibility." },
  { method: "setOverlayShown(v)", param: "boolean", return: "void", explain: "Show/hide overlay." },
  { method: "isCloseClickOverlay()", param: "-", return: "boolean", explain: "Overlay click closes." },
  { method: "setCloseClickOverlay(v)", param: "boolean", return: "void", explain: "Toggle overlay click close." },
  { method: "isScrollLocked()", param: "-", return: "boolean", explain: "Scroll lock state." },
  { method: "setScrollLock(v)", param: "boolean", return: "void", explain: "Enable/disable scroll lock." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Border state." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Toggle border." },
  { method: "getAnimationClasses()", param: "-", return: "{ enter: string, leave: string }", explain: "Get animation classes." },
  { method: "setAnimationClasses(opt)", param: "Partial<{ enter: string, leave: string }>", return: "void", explain: "Set animation classes." },
]

/* columns & loaders */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '45%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '20%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '20%' },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '20%' },
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

const contents = props.lang === 'en' ? en : ko
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>
    <HPopup
      id="popup-demo"
      class="hison-col-6 hison-size-s"
      :visible="true"
      :border="true"
      :zIndex="1200"
      position="middle-center"
      :left="null"
      :top="null"
      :width="420"
      :height="220"
      :draggable="true"
      :closeClickOverlay="true"
      :showOverlay="false"
      :scrollLock="false"
      style="margin-bottom: 8px;"
    >
      <template #default>
        <div style="padding: 10px;">
          <HCaption :level="6" class="hison-color-primary">
            {{ props.lang === 'en' ? 'Popup Demo' : '팝업 데모' }}
          </HCaption>
          <HParagraph class="hison-size-s">
            {{ props.lang === 'en'
              ? 'This popup is shown without overlay for demonstration.'
              : '데모를 위해 오버레이 없이 표시됩니다.' }}
          </HParagraph>
        </div>
      </template>
      <template #close-icon>✖</template>
      <template #close-label>{{ props.lang === 'en' ? 'Close' : '닫기' }}</template>
    </HPopup>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="popupSlotGrid"
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
      id="popupPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'500px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="popupEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'140px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="popupMethodGrid"
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