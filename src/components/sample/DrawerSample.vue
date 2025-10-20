<script setup lang="ts">
import { defineProps } from 'vue'
import { hison, type HGridColumn, type HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HDrawer(드로어) 컴포넌트입니다.

HDrawer는 화면의 네 가장자리(top/bottom/left/right)에 고정되어 슬라이딩으로 열리고 닫히는 패널입니다.
오버레이, 스와이프-클로즈, 엣지별 애니메이션, 크기/포지션 런타임 제어를 지원하며
고유 id로 등록되어 hison.component.getDrawer(id)로 제어할 수 있습니다.`,
  t1010: `이것은 HDrawer 라이브 데모입니다. (하단에서 열림)`,
  t1030:
`주요 특징

· position: 'top'|'bottom'|'left'|'right' 엣지 고정
· 엣지별 기본 사이징(상/하: 가로 100vw, 좌/우: 세로 100vh)
· 엣지 방향 진입/퇴장 애니메이션
· 오버레이(클릭-투-클로즈), 스와이프-클로즈 지원
· close 버튼 표시 및 슬롯 교체
· 스크롤 락(레퍼런스 카운팅)
· 런타임 제어: hison.component.getDrawer(id)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HDrawer
  id="drawer01"
  class="hison-col-12"
  :visible="false"
  :border="true"
  :zIndex="1100"
  position="bottom"
  :height="150"
  :closeButtonVisible="true"
  closeButtonText="X"
  closeButtonTitle="Close"
  :swipeClose="true"
  :closeClickOverlay="true"
  :showOverlay="true"
  :overlayStyle="{ background: 'rgba(0,0,0,0.35)' }"
  :scrollLock="true"
  enterAnimationClass="hison-drawer-enter-bottom"
  leaveAnimationClass="hison-drawer-leave-bottom"
  @open="onOpen"
  @close="onClose"
  @responsive-change="onDevice"
>
  <template #default>drawer content...</template>

  <!-- replace whole close button -->
  <template #close-button="{ onClick, text, title }">
    <MyCustomClose :label="text" :title="title" @click="onClick" />
  </template>

  <!-- or override parts only -->
  <template #close-icon>❌</template>
  <template #close-label>Close</template>
</HDrawer>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const drawer = hison.component.getDrawer('drawer01')
drawer.open()
drawer.setPosition('right')
drawer.setWidth(400, true)   // animate
drawer.setZIndex(1500)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HDrawer component.

HDrawer is a fixed-position sliding panel anchored to any screen edge (top/bottom/left/right).
It supports overlay, swipe-to-close, edge-specific animations, and full runtime control
via hison.component.getDrawer(id).`,
  t1010: `This is the HDrawer live demo. (opens from bottom)`,
  t1030:
`Main Features

· position: 'top'|'bottom'|'left'|'right' edge anchoring
· Edge-based default sizing (top/bottom: 100vw wide, left/right: 100vh tall)
· Enter/leave animations by edge
· Overlay with click-to-close, swipe-to-close gestures
· Close button visibility + slots to replace parts or whole button
· Scroll lock with reference counting
· Runtime API: hison.component.getDrawer(id)`,
  t1040: `Template Example`,
  c1040:
`<HDrawer
  id="drawer01"
  class="hison-col-12"
  :visible="false"
  :border="true"
  :zIndex="1100"
  position="bottom"
  :height="150"
  :closeButtonVisible="true"
  closeButtonText="X"
  closeButtonTitle="Close"
  :swipeClose="true"
  :closeClickOverlay="true"
  :showOverlay="true"
  :overlayStyle="{ background: 'rgba(0,0,0,0.35)' }"
  :scrollLock="true"
  enterAnimationClass="hison-drawer-enter-bottom"
  leaveAnimationClass="hison-drawer-leave-bottom"
  @open="onOpen"
  @close="onClose"
  @responsive-change="onDevice"
>
  <template #default>drawer content...</template>

  <!-- replace whole close button -->
  <template #close-button="{ onClick, text, title }">
    <MyCustomClose :label="text" :title="title" @click="onClick" />
  </template>

  <!-- or override parts only -->
  <template #close-icon>❌</template>
  <template #close-label>Close</template>
</HDrawer>`,
  t1050: `Runtime Example`,
  c1050:
`const drawer = hison.component.getDrawer('drawer01')
drawer.open()
drawer.setPosition('right')
drawer.setWidth(400, true)   // animate
drawer.setZIndex(1500)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default",       explain: "드로어 내부 콘텐츠 영역." },
  { slot: "#close-button", explain: "기본 닫기 버튼 전체를 교체합니다. 슬롯 바인딩: { onClick, text, title }" },
  { slot: "#close-icon",   explain: "기본 닫기 버튼의 아이콘 영역만 교체합니다." },
  { slot: "#close-label",  explain: "기본 닫기 버튼의 레이블 영역만 교체합니다." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getDrawer(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/커스텀 클래스(hison-col-*, hison-size-*, hison-color-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "드로어 컨테이너 인라인 스타일." },

  { prop: "visible", type: "boolean", default: "false", explain: "초기 표시 상태(이후에는 메서드로만 제어)." },
  { prop: "border", type: "boolean", default: "true", explain: "보더(박스 섀도) 표시." },

  { prop: "zIndex", type: "number", default: "1100", explain: "드로어 z-index. 오버레이는 zIndex - 1 로 렌더링." },
  { prop: "position", type: "'top'|'bottom'|'left'|'right'", default: "'bottom'", explain: "드로어가 고정될 화면 엣지." },

  { prop: "width", type: "number | null", default: "null", explain: "드로어 너비(px). 엣지에 따라 기본값 다름." },
  { prop: "height", type: "number | null", default: "null", explain: "드로어 높이(px). 엣지에 따라 기본값 다름." },

  { prop: "closeButtonVisible", type: "boolean", default: "true", explain: "닫기 버튼 표시 여부." },
  { prop: "closeButtonText", type: "string", default: "'X'", explain: "닫기 버튼 라벨." },
  { prop: "closeButtonTitle", type: "string", default: "'close'", explain: "닫기 버튼 title 속성." },

  { prop: "swipeClose", type: "boolean", default: "true", explain: "스와이프-클로즈 활성화." },

  { prop: "closeClickOverlay", type: "boolean", default: "true", explain: "오버레이 클릭 시 닫기." },
  { prop: "showOverlay", type: "boolean", default: "true", explain: "오버레이 표시 여부." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "undefined", explain: "오버레이 인라인 스타일(zIndex - 1과 병합)." },

  { prop: "scrollLock", type: "boolean", default: "true", explain: "표시 중 페이지 스크롤 잠금(레퍼런스 카운팅 방식)." },

  { prop: "enterAnimationClass", type: "string", default: "undefined", explain: "진입 애니메이션 클래스." },
  { prop: "leaveAnimationClass", type: "string", default: "undefined", explain: "퇴장 애니메이션 클래스." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 시", args: "(HDrawerMethods)" },
  { event: "open", trigger: "드로어 열림(애니메이션 시작 이후)", args: "(HDrawerMethods)" },
  { event: "close", trigger: "드로어 닫힘(애니메이션 종료 이후)", args: "(HDrawerMethods)" },
  { event: "responsive-change", trigger: "디바이스 타입 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'drawer'", explain: "컴포넌트 타입 리터럴('drawer')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "현재 표시 상태." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "드로어 열기." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "드로어 닫기." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "표시/숨김 전환." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "표시 상태 설정." },
  { method: "getZIndex()", param: "-", return: "number", explain: "z-index 조회." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "z-index 설정(오버레이는 zIndex-1)." },
  { method: "getPosition()", param: "-", return: "'top'|'bottom'|'left'|'right'", explain: "엣지 위치 조회." },
  { method: "setPosition(p)", param: "'top'|'bottom'|'left'|'right'", return: "void", explain: "엣지 위치 설정(기본 애니메이션 갱신)." },
  { method: "getWidth()", param: "-", return: "number | null", explain: "너비(px) 조회." },
  { method: "setWidth(v, animate)", param: "number | null, boolean", return: "void | Promise<void>", explain: "너비(px) 설정(+애니메이션)." },
  { method: "getHeight()", param: "-", return: "number | null", explain: "높이(px) 조회." },
  { method: "setHeight(v, animate)", param: "number | null, boolean", return: "void | Promise<void>", explain: "높이(px) 설정(+애니메이션)." },
  { method: "isSwipeCloseEnabled()", param: "-", return: "boolean", explain: "스와이프-클로즈 활성 여부." },
  { method: "setSwipeCloseEnabled(v)", param: "boolean", return: "void", explain: "스와이프-클로즈 활성/비활성." },
  { method: "isCloseButtonVisible()", param: "-", return: "boolean", explain: "닫기 버튼 표시 여부." },
  { method: "setCloseButtonVisible(v)", param: "boolean", return: "void", explain: "닫기 버튼 표시/숨김." },
  { method: "isOverlayShown()", param: "-", return: "boolean", explain: "오버레이 표시 여부." },
  { method: "setOverlayShown(v)", param: "boolean", return: "void", explain: "오버레이 표시/숨김." },
  { method: "isCloseClickOverlay()", param: "-", return: "boolean", explain: "오버레이 클릭 닫기 허용 여부." },
  { method: "setCloseClickOverlay(v)", param: "boolean", return: "void", explain: "오버레이 클릭 닫기 허용/차단." },
  { method: "isScrollLocked()", param: "-", return: "boolean", explain: "스크롤 락 활성 여부." },
  { method: "setScrollLock(v)", param: "boolean", return: "void", explain: "스크롤 락 활성/비활성." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더 스타일 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "보더 스타일 표시/숨김." },
  { method: "getAnimationClasses()", param: "-", return: "{ enter: string, leave: string }", explain: "진입/퇴장 애니메이션 클래스 조회." },
  { method: "setAnimationClasses(opt)", param: "Partial<{ enter: string, leave: string }>", return: "void", explain: "애니메이션 클래스 설정." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트 고유 ID(공통)." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리로드(공통)." },
]

const slotGridDataEn = [
  { slot: "default",       explain: "Content area inside the drawer." },
  { slot: "#close-button", explain: "Replaces the whole close button. Slot bindings: { onClick, text, title }" },
  { slot: "#close-icon",   explain: "Overrides only the icon area of the default close button." },
  { slot: "#close-label",  explain: "Overrides only the label area of the default close button." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getDrawer(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive/custom classes (hison-col-*, hison-size-*, hison-color-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for drawer container." },

  { prop: "visible", type: "boolean", default: "false", explain: "Initial visibility (subsequent control via methods only)." },
  { prop: "border", type: "boolean", default: "true", explain: "Show border/box-shadow." },

  { prop: "zIndex", type: "number", default: "1100", explain: "Drawer z-index; overlay renders at zIndex - 1." },
  { prop: "position", type: "'top'|'bottom'|'left'|'right'", default: "'bottom'", explain: "Screen edge to anchor the drawer." },

  { prop: "width", type: "number | null", default: "null", explain: "Drawer width in px (defaults vary by edge)." },
  { prop: "height", type: "number | null", default: "null", explain: "Drawer height in px (defaults vary by edge)." },

  { prop: "closeButtonVisible", type: "boolean", default: "true", explain: "Close button visibility." },
  { prop: "closeButtonText", type: "string", default: "'X'", explain: "Close button label text." },
  { prop: "closeButtonTitle", type: "string", default: "'close'", explain: "Close button title attribute." },

  { prop: "swipeClose", type: "boolean", default: "true", explain: "Enable swipe-to-close gestures." },

  { prop: "closeClickOverlay", type: "boolean", default: "true", explain: "Clicking overlay closes the drawer." },
  { prop: "showOverlay", type: "boolean", default: "true", explain: "Whether to show overlay (backdrop)." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "undefined", explain: "Inline style for overlay (merged with zIndex - 1)." },

  { prop: "scrollLock", type: "boolean", default: "true", explain: "Lock page scroll while visible (reference-counted)." },

  { prop: "enterAnimationClass", type: "string", default: "undefined", explain: "CSS class for enter animation." },
  { prop: "leaveAnimationClass", type: "string", default: "undefined", explain: "CSS class for leave animation." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "When component is mounted.", args: "(HDrawerMethods)" },
  { event: "open", trigger: "When drawer opens (after enter animation starts).", args: "(HDrawerMethods)" },
  { event: "close", trigger: "When drawer closes (after leave animation ends).", args: "(HDrawerMethods)" },
  { event: "responsive-change", trigger: "When device type changes.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'drawer'", explain: "Returns the component type literal ('drawer')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether the drawer is visible." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "Opens the drawer." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "Closes the drawer." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "Toggles visibility." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "Sets visibility." },
  { method: "getZIndex()", param: "-", return: "number", explain: "Gets z-index." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "Sets z-index (overlay uses zIndex-1)." },
  { method: "getPosition()", param: "-", return: "'top'|'bottom'|'left'|'right'", explain: "Gets edge position." },
  { method: "setPosition(p)", param: "'top'|'bottom'|'left'|'right'", return: "void", explain: "Sets edge position (updates default animations)." },
  { method: "getWidth()", param: "-", return: "number | null", explain: "Gets width in px." },
  { method: "setWidth(v, animate)", param: "number | null, boolean", return: "void | Promise<void>", explain: "Sets width in px (optionally animated)." },
  { method: "getHeight()", param: "-", return: "number | null", explain: "Gets height in px." },
  { method: "setHeight(v, animate)", param: "number | null, boolean", return: "void | Promise<void>", explain: "Sets height in px (optionally animated)." },
  { method: "isSwipeCloseEnabled()", param: "-", return: "boolean", explain: "Whether swipe-to-close is enabled." },
  { method: "setSwipeCloseEnabled(v)", param: "boolean", return: "void", explain: "Enable/disable swipe-to-close." },
  { method: "isCloseButtonVisible()", param: "-", return: "boolean", explain: "Close button visibility." },
  { method: "setCloseButtonVisible(v)", param: "boolean", return: "void", explain: "Show/hide close button." },
  { method: "isOverlayShown()", param: "-", return: "boolean", explain: "Overlay visibility." },
  { method: "setOverlayShown(v)", param: "boolean", return: "void", explain: "Show/hide overlay." },
  { method: "isCloseClickOverlay()", param: "-", return: "boolean", explain: "Whether clicking overlay closes drawer." },
  { method: "setCloseClickOverlay(v)", param: "boolean", return: "void", explain: "Allow/deny closing by overlay click." },
  { method: "isScrollLocked()", param: "-", return: "boolean", explain: "Scroll lock enabled." },
  { method: "setScrollLock(v)", param: "boolean", return: "void", explain: "Enable/disable scroll lock." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Border style visibility." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Show/hide border style." },
  { method: "getAnimationClasses()", param: "-", return: "{ enter: string, leave: string }", explain: "Get animation classes." },
  { method: "setAnimationClasses(opt)", param: "Partial<{ enter: string, leave: string }>", return: "void", explain: "Set animation classes." },
  { method: "getId()", param: "-", return: "string", explain: "Returns unique ID (common)." },
  { method: "reload()", param: "-", return: "void", explain: "Force reload (common)." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '22%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '78%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '16%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '44%' },
  { id: 'args', header: 'args', dataType: 'text', width: '40%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '24%' },
  { id: 'param', header: 'param', dataType: 'text', width: '28%' },
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
    <HButton
      id="btn-open-drawer"
      class="hison-col-12 hison-size-s hison-color-primary"
      text="Open Drawer"
      @click="(_, btn) => {
        void btn;
        const d = hison.component.getDrawer('drawer-demo')
        d?.open()
      }"
      style="margin-bottom: 10px;"
    />
    <HDrawer
      id="drawer-demo"
      class="hison-col-12"
      :visible="false"
      :border="true"
      :zIndex="1100"
      :position="'bottom'"
      :height="150"
      :closeButtonVisible="true"
      closeButtonText="X"
      closeButtonTitle="Close"
      :swipeClose="true"
      :closeClickOverlay="true"
      :showOverlay="true"
      :overlayStyle="{ background: 'rgba(0,0,0,0.35)' }"
      :scrollLock="true"
      enterAnimationClass="hison-drawer-enter-bottom"
      leaveAnimationClass="hison-drawer-leave-bottom"
      style="padding: 10px;"
    >
      <template #default>
        <HParagraph>{{ contents.t1010 }}</HParagraph>
      </template>
    </HDrawer>

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="drawerSlotGrid"
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
      id="drawerPropGrid"
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
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="drawerEventGrid"
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
      id="drawerMethodGrid"
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