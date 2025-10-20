<!-- ModalSample.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'
import { hison, type HGridColumn, type HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/** =========================
 *  i18n texts
 * ======================= */
const ko = {
  t1000:
`하단은 HModal(모달) 컴포넌트입니다.

HModal은 오버레이/캡션/닫기 버튼을 갖춘 고정 위치 다이얼로그를 렌더링합니다.
정확한 화면 배치, 스티키 헤더/푸터, 반응형 클래스, 그리고 런타임 API(HModalMethods)를 제공합니다.`,
  t1010: `이것은 HModal 라이브 데모입니다.`,
  t1030:
`주요 특징

· 고정 위치 배치(position: 'top-left' ~ 'bottom-right')
· 스크롤 가능한 본문 + 스티키 헤더/푸터
· 오버레이 표시 및 바깥 클릭 닫기 옵션
· 캡션/닫기 버튼을 헤더/푸터·좌/중/우 위치로 배치
· 아이콘/라벨 슬롯으로 닫기 버튼 커스터마이즈
· 반응형 hison-* 클래스 및 런타임 API(HModalMethods)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HModal
  id="modal01"
  class="hison-col-10-mb hison-col-6-pc"
  :border="true"
  backgroundType="empty"
  :zIndex="1500"
  position="middle-center"
  :headerVisible="true"
  :footerVisible="false"
  caption="Hello"
  captionPlacement="header-center"
  :closeButtonVisible="true"
  closeButtonPlacement="header-right"
  :closeClickOverlay="true"
  :showOverlay="true"
  :overlayStyle="{ background: 'rgba(0,0,0,0.35)' }"
  :scrollLock="true"
  @open="onOpen"
  @close="onClose"
>
  <template #default>
    <div style="padding: 16px;">
      여기에 모달 콘텐츠를 넣으세요.
    </div>
  </template>
  <template #close-icon>❌</template>
  <template #close-label>Close</template>
</HModal>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const modal = hison.component.getModal('modal01')
modal.open()
modal.setCaption('Updated title')
modal.setButtonPlacement('footer-right')
modal.setCaptionPlacement('footer-left')
modal.setPosition('top-right')
modal.setZIndex(2200)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HModal component.

HModal renders a fixed-position dialog with overlay, caption, and close button.
It offers precise screen placements, sticky header/footer, responsive classes,
and a runtime API (HModalMethods).`,
  t1010: `This is the HModal live demo.`,
  t1030:
`Main Features

· Fixed screen placements (position: 'top-left' ~ 'bottom-right')
· Scrollable body with sticky header/footer
· Overlay with optional click-to-close
· Caption/Close button placeable to header/footer & left/center/right
· Close button customization via slots (icon/label/whole button)
· Responsive hison-* classes and full runtime API (HModalMethods)`,
  t1040: `Template Example`,
  c1040:
`<HModal
    id="modal01"
    class="hison-col-10-mb hison-col-6-pc"
    :border="true"
    backgroundType="empty"
    :zIndex="1500"
    position="middle-center"
    :visible="false"
>
  <template #default>
    <div style="padding: 16px;">
      Put your modal content here.
    </div>
  </template>
</HModal>`,
  t1050: `Runtime Example`,
  c1050:
`const modal = hison.component.getModal('modal01')
modal.open()
modal.setCaption('Updated title')
modal.setButtonPlacement('footer-right')
modal.setCaptionPlacement('footer-left')
modal.setPosition('top-right')
modal.setZIndex(2200)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const contents = props.lang === 'en' ? en : ko

/** =========================
 *  grids: slot/prop/event/method
 * ======================= */
const slotGridDataKo = [
  { slot: "default", explain: "모달 본문 콘텐츠." },
  { slot: "close-button", explain: "닫기 버튼 전체를 교체. Scoped: { onClick, text, title, placement }" },
  { slot: "close-icon", explain: "닫기 버튼 아이콘 영역만 교체." },
  { slot: "close-label", explain: "닫기 버튼 라벨 영역만 교체." },
]
const slotGridDataEn = [
  { slot: "default", explain: "Modal body content." },
  { slot: "close-button", explain: "Replace whole close button. Scoped: { onClick, text, title, placement }" },
  { slot: "close-icon", explain: "Replace only the icon area of close button." },
  { slot: "close-label", explain: "Replace only the label area of close button." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getModal(id)로 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/컬러/사이즈 등 hison-* 클래스." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "모달 컨테이너 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "false", explain: "초기 표시 여부(이후에는 메서드로 제어)." },
  { prop: "border", type: "boolean", default: "true", explain: "테두리(박스섀도) 표시." },
  { prop: "backgroundType", type: "'empty'|'filled'|'transparent'", default: "'empty'", explain: "모달 배경 모드." },
  { prop: "zIndex", type: "number", default: "1300", explain: "모달 z-index(오버레이는 zIndex-1)." },
  { prop: "position", type: "ScreenPosition", default: "'middle-center'", explain: "화면 고정 위치(top/ middle/ bottom × left/ center/ right)." },
  { prop: "headerVisible", type: "boolean", default: "true", explain: "헤더 영역 표시." },
  { prop: "footerVisible", type: "boolean", default: "true", explain: "푸터 영역 표시." },
  { prop: "caption", type: "string|null", default: "null", explain: "캡션 텍스트(없으면 비표시)." },
  { prop: "captionBorder", type: "boolean", default: "false", explain: "캡션 테두리." },
  { prop: "captionBackgroundType", type: "'empty'|'filled'|'transparent'", default: "'filled'", explain: "캡션 배경 타입." },
  { prop: "captionPlacement", type: "ModalPlacement", default: "'header-center'", explain: "캡션 위치(헤더/푸터 × 좌/중/우)." },
  { prop: "closeButtonVisible", type: "boolean", default: "true", explain: "닫기 버튼 표시." },
  { prop: "closeButtonText", type: "string", default: "'X'", explain: "닫기 버튼 라벨." },
  { prop: "closeButtonTitle", type: "string", default: "'close'", explain: "닫기 버튼 title 속성." },
  { prop: "closeButtonBorder", type: "boolean", default: "true", explain: "닫기 버튼 테두리." },
  { prop: "closeButtonBackgroundType", type: "'empty'|'filled'|'transparent'", default: "'empty'", explain: "닫기 버튼 배경 타입." },
  { prop: "closeButtonPlacement", type: "ModalPlacement", default: "'footer-right'", explain: "닫기 버튼 위치." },
  { prop: "closeClickOverlay", type: "boolean", default: "true", explain: "오버레이 클릭 시 닫기." },
  { prop: "showOverlay", type: "boolean", default: "true", explain: "오버레이 표시." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "오버레이 인라인 스타일(zIndex-1과 병합)." },
  { prop: "scrollLock", type: "boolean", default: "true", explain: "표시 중 스크롤 잠금(참조 카운팅)." },
  { prop: "enterAnimationClass", type: "string", default: "-", explain: "진입 애니메이션 클래스." },
  { prop: "leaveAnimationClass", type: "string", default: "-", explain: "퇴장 애니메이션 클래스." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique id. Access via hison.component.getModal(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive/color/size utilities (hison-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for container." },
  { prop: "visible", type: "boolean", default: "false", explain: "Initial visibility (later controlled by methods)." },
  { prop: "border", type: "boolean", default: "true", explain: "Show border (box-shadow)." },
  { prop: "backgroundType", type: "'empty'|'filled'|'transparent'", default: "'empty'", explain: "Modal background mode." },
  { prop: "zIndex", type: "number", default: "1300", explain: "Wrapper z-index (overlay uses zIndex - 1)." },
  { prop: "position", type: "ScreenPosition", default: "'middle-center'", explain: "Fixed screen placement." },
  { prop: "headerVisible", type: "boolean", default: "true", explain: "Show header section." },
  { prop: "footerVisible", type: "boolean", default: "true", explain: "Show footer section." },
  { prop: "caption", type: "string|null", default: "null", explain: "Caption text (falsy hides)." },
  { prop: "captionBorder", type: "boolean", default: "false", explain: "Caption border style." },
  { prop: "captionBackgroundType", type: "'empty'|'filled'|'transparent'", default: "'filled'", explain: "Caption background type." },
  { prop: "captionPlacement", type: "ModalPlacement", default: "'header-center'", explain: "Caption placement (header/footer + side)." },
  { prop: "closeButtonVisible", type: "boolean", default: "true", explain: "Show close button." },
  { prop: "closeButtonText", type: "string", default: "'X'", explain: "Close button label." },
  { prop: "closeButtonTitle", type: "string", default: "'close'", explain: "Close button title attribute." },
  { prop: "closeButtonBorder", type: "boolean", default: "true", explain: "Close button border." },
  { prop: "closeButtonBackgroundType", type: "'empty'|'filled'|'transparent'", default: "'empty'", explain: "Close button background type." },
  { prop: "closeButtonPlacement", type: "ModalPlacement", default: "'footer-right'", explain: "Close button placement." },
  { prop: "closeClickOverlay", type: "boolean", default: "true", explain: "Clicking overlay closes the modal." },
  { prop: "showOverlay", type: "boolean", default: "true", explain: "Show overlay (backdrop)." },
  { prop: "overlayStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for overlay (merged with zIndex-1)." },
  { prop: "scrollLock", type: "boolean", default: "true", explain: "Lock page scroll while visible (ref-counted)." },
  { prop: "enterAnimationClass", type: "string", default: "-", explain: "Enter animation class." },
  { prop: "leaveAnimationClass", type: "string", default: "-", explain: "Leave animation class." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 시", args: "(HModalMethods)" },
  { event: "open", trigger: "모달이 열릴 때(애니메이션 시작 후)", args: "-" },
  { event: "close", trigger: "모달이 닫힐 때(애니메이션 종료 후)", args: "-" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HModalMethods)" },
  { event: "open", trigger: "When modal opens (after enter begins).", args: "-" },
  { event: "close", trigger: "When modal closes (after leave finishes).", args: "-" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'modal'", explain: "컴포넌트 타입 리터럴('modal')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "현재 표시 여부." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "모달 열기." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "모달 닫기." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "열림/닫힘 토글." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "표시 상태 설정." },
  { method: "getZIndex()", param: "-", return: "number", explain: "z-index 조회." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "z-index 설정." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "현재 위치 조회." },
  { method: "setPosition(v)", param: "ScreenPosition", return: "void", explain: "화면 위치 설정." },
  { method: "isHeaderVisible()", param: "-", return: "boolean", explain: "헤더 표시 여부." },
  { method: "setHeaderVisible(v)", param: "boolean", return: "void", explain: "헤더 표시 설정." },
  { method: "isFooterVisible()", param: "-", return: "boolean", explain: "푸터 표시 여부." },
  { method: "setFooterVisible(v)", param: "boolean", return: "void", explain: "푸터 표시 설정." },
  { method: "getCaption()", param: "-", return: "string", explain: "캡션 텍스트 조회." },
  { method: "setCaption(text)", param: "string | null", return: "void", explain: "캡션 텍스트 설정(없으면 숨김)." },
  { method: "isCaptionBorder()", param: "-", return: "boolean", explain: "캡션 테두리 여부." },
  { method: "setCaptionBorder(v)", param: "boolean", return: "void", explain: "캡션 테두리 설정." },
  { method: "getCaptionBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "캡션 배경 타입 조회." },
  { method: "setCaptionBackgroundType(t)", param: "BackgroundType", return: "void", explain: "캡션 배경 타입 설정." },
  { method: "getCaptionPlacement()", param: "-", return: "ModalPlacementValue", explain: "캡션 위치 조회." },
  { method: "setCaptionPlacement(p)", param: "ModalPlacement", return: "void", explain: "캡션 위치 설정." },
  { method: "isCloseButtonVisible()", param: "-", return: "boolean", explain: "닫기 버튼 표시 여부." },
  { method: "setCloseButtonVisible(v)", param: "boolean", return: "void", explain: "닫기 버튼 표시 설정." },
  { method: "isCloseButtonBorder()", param: "-", return: "boolean", explain: "닫기 버튼 테두리 여부." },
  { method: "setCloseButtonBorder(v)", param: "boolean", return: "void", explain: "닫기 버튼 테두리 설정." },
  { method: "getCloseButtonBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "닫기 버튼 배경 타입." },
  { method: "setCloseButtonBackgroundType(t)", param: "BackgroundType", return: "void", explain: "닫기 버튼 배경 타입 설정." },
  { method: "getButtonPlacement()", param: "-", return: "ModalPlacementValue", explain: "닫기 버튼 위치 조회." },
  { method: "setButtonPlacement(p)", param: "ModalPlacement", return: "void", explain: "닫기 버튼 위치 설정." },
  { method: "isCloseClickOverlay()", param: "-", return: "boolean", explain: "오버레이 클릭 닫기 여부." },
  { method: "setCloseClickOverlay(v)", param: "boolean", return: "void", explain: "오버레이 클릭 닫기 설정." },
  { method: "isOverlayShown()", param: "-", return: "boolean", explain: "오버레이 표시 여부." },
  { method: "setOverlayShown(v)", param: "boolean", return: "void", explain: "오버레이 표시 설정." },
  { method: "isScrollLocked()", param: "-", return: "boolean", explain: "스크롤 잠금 여부." },
  { method: "setScrollLock(v)", param: "boolean", return: "void", explain: "스크롤 잠금 설정." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "모달 테두리 표시 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "모달 테두리 설정." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "모달 배경 타입 조회." },
  { method: "setBackgroundType(t)", param: "BackgroundType", return: "void", explain: "모달 배경 타입 설정." },
  { method: "getAnimationClasses()", param: "-", return: "{ enter: string, leave: string }", explain: "애니메이션 클래스 조회." },
  { method: "setAnimationClasses(opt)", param: "Partial<{ enter: string; leave: string }>", return: "void", explain: "애니메이션 클래스 설정." },
]
const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'modal'", explain: "Returns component type literal ('modal')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether modal is visible." },
  { method: "open()", param: "-", return: "void | Promise<void>", explain: "Open modal." },
  { method: "close()", param: "-", return: "void | Promise<void>", explain: "Close modal." },
  { method: "toggle()", param: "-", return: "void | Promise<void>", explain: "Toggle open/close." },
  { method: "setVisible(v)", param: "boolean", return: "void | Promise<void>", explain: "Set visibility." },
  { method: "getZIndex()", param: "-", return: "number", explain: "Get z-index." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "Set z-index." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "Get placement." },
  { method: "setPosition(v)", param: "ScreenPosition", return: "void", explain: "Set placement." },
  { method: "isHeaderVisible()", param: "-", return: "boolean", explain: "Header visibility." },
  { method: "setHeaderVisible(v)", param: "boolean", return: "void", explain: "Set header visibility." },
  { method: "isFooterVisible()", param: "-", return: "boolean", explain: "Footer visibility." },
  { method: "setFooterVisible(v)", param: "boolean", return: "void", explain: "Set footer visibility." },
  { method: "getCaption()", param: "-", return: "string", explain: "Get caption text." },
  { method: "setCaption(text)", param: "string | null", return: "void", explain: "Set caption (falsy hides)." },
  { method: "isCaptionBorder()", param: "-", return: "boolean", explain: "Caption border flag." },
  { method: "setCaptionBorder(v)", param: "boolean", return: "void", explain: "Set caption border." },
  { method: "getCaptionBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Caption background type." },
  { method: "setCaptionBackgroundType(t)", param: "BackgroundType", return: "void", explain: "Set caption background type." },
  { method: "getCaptionPlacement()", param: "-", return: "ModalPlacementValue", explain: "Get caption placement." },
  { method: "setCaptionPlacement(p)", param: "ModalPlacement", return: "void", explain: "Set caption placement." },
  { method: "isCloseButtonVisible()", param: "-", return: "boolean", explain: "Close button visibility." },
  { method: "setCloseButtonVisible(v)", param: "boolean", return: "void", explain: "Set close button visibility." },
  { method: "isCloseButtonBorder()", param: "-", return: "boolean", explain: "Close button border flag." },
  { method: "setCloseButtonBorder(v)", param: "boolean", return: "void", explain: "Set close button border." },
  { method: "getCloseButtonBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Close button background type." },
  { method: "setCloseButtonBackgroundType(t)", param: "BackgroundType", return: "void", explain: "Set close button background type." },
  { method: "getButtonPlacement()", param: "-", return: "ModalPlacementValue", explain: "Get close button placement." },
  { method: "setButtonPlacement(p)", param: "ModalPlacement", return: "void", explain: "Set close button placement." },
  { method: "isCloseClickOverlay()", param: "-", return: "boolean", explain: "Overlay click-to-close flag." },
  { method: "setCloseClickOverlay(v)", param: "boolean", return: "void", explain: "Set overlay click-to-close." },
  { method: "isOverlayShown()", param: "-", return: "boolean", explain: "Overlay visibility." },
  { method: "setOverlayShown(v)", param: "boolean", return: "void", explain: "Set overlay visibility." },
  { method: "isScrollLocked()", param: "-", return: "boolean", explain: "Scroll lock state." },
  { method: "setScrollLock(v)", param: "boolean", return: "void", explain: "Enable/disable scroll lock." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether modal shows border." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Set border visibility." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Modal background type." },
  { method: "setBackgroundType(t)", param: "BackgroundType", return: "void", explain: "Set modal background type." },
  { method: "getAnimationClasses()", param: "-", return: "{ enter: string, leave: string }", explain: "Get animation classes." },
  { method: "setAnimationClasses(opt)", param: "Partial<{ enter: string; leave: string }>", return: "void", explain: "Set animation classes." },
]

/** grid columns & loaders */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '18%' },
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '36%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '22%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '48%' },
  { id: 'args', header: 'args', dataType: 'text', width: '30%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '26%' },
  { id: 'param', header: 'param', dataType: 'text', width: '30%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
]
const mountMethodGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? methodGridDataEn : methodGridDataKo)
}

/** demo helpers (very small) */
function openDemo() {
  const api = hison.component.getModal('modal-demo')!
  api.open()
}
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>

    <HGap/>
    <!-- Live Demo -->
    <div class="hison-col-12" style="display:flex; gap:8px; align-items:center;">
      <HButton :text="props.lang === 'en' ? 'Open Modal' : '모달 열기'" @click="openDemo" />
      <HParagraph style="margin:0;">{{ contents.t1010 }}</HParagraph>
    </div>
    <HModal
      id="modal-demo"
      class="hison-col-10-mb hison-col-6-pc"
      :border="true"
      backgroundType="empty"
      :zIndex="1500"
      position="middle-center"
      :visible="false"
      :caption="props.lang === 'en' ? 'Sample Modal' : '샘플 모달'"
    >
      <template #default>
        <div style="padding: 16px;">
          <p style="margin: 0 0 10px;">
            {{ props.lang === 'en'
                ? 'This is a simple HModal demo. Click close or outside overlay.'
                : '간단한 HModal 데모입니다. 닫기 버튼 또는 바깥 오버레이를 클릭하세요.' }}
          </p>
          <HLabel class="hison-color-muted">
            {{ props.lang === 'en' ? 'Body area with your content.' : '여기에 본문 콘텐츠를 넣으세요.' }}
          </HLabel>
        </div>
      </template>
    </HModal>

    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>

    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>

    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="modalSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'160px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="modalPropGrid"
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
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="modalEventGrid"
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
      id="modalMethodGrid"
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