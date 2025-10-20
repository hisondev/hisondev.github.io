<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue';

const props = defineProps<{
  lang: string
}>()

const ko = {
  t1000:
`하단은 HBaggie(배지) 컴포넌트입니다.

HBaggie는 어떤 타깃 요소(기본 슬롯)에 작은 배지를 오버레이하는 컴포넌트입니다.
반응형 클래스, 8방향 포지셔닝, 모양/배경/보더 커스터마이징을 지원하며,
런타임 API(HBaggieMethods)를 통해 표시 여부, zIndex, 위치, 텍스트 등 다양한 속성을 제어할 수 있습니다.`,
  t1010: `이것은 HBaggie 타겟 입니다.(slot)`,
  t1030:
`주요 특징

· 슬롯 기반 타깃 요소(소비자가 아무 컴포넌트/엘리먼트나 배치 가능)
· 8방향 위치 지정 (top-left / top-center / top-right / middle-left / middle-center / middle-right / bottom-left / bottom-center / bottom-right)
· 앵커 전체 표시(visible)와 배지 전용 표시(baggieVisible) 분리
· 모양(shape): square / rounded / circle
· 배경(backgroundType): filled / empty / transparent
· 선택적 보더/섀도우, 버튼 인터랙션(buttonEnabled) 지원
· 고유 id로 런타임 등록: hison.component.getBaggie(id)
· 반응형 클래스 시스템(hison-col-*, hison-size-*, hison-color-*)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HBaggie
  id="bag01"
  class="hison-color-danger"
  position="top-right"
  text="9+"
  shape="circle"
  :border="true"
  :buttonEnabled="true"
  :visible="true"
  :baggieVisible="true"
  :zIndex="1200"
  @click="onBadgeClick"
  @mounted="onMounted"
>
  <!-- target element -->
  <HButton
    id="btn01"
    class="hison-size-m"
    text="Inbox"
  />

  <!-- replace badge content -->
  <template #badge>
    <IconBell />
  </template>
</HBaggie>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const baggie = hison.component.getBaggie('bag01')
baggie.setText('99+')
baggie.setShape('circle')
baggie.setPosition('bottom-left')
baggie.setButtonEnabled(true)
baggie.setZIndex(2000)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HBaggie (badge) component.

HBaggie overlays a small badge on top of any target element (default slot).
It supports responsive classes, 8-way positioning, shape/background/border customization,
and full runtime control via HBaggieMethods for visibility, z-index, position, text, and more.`,
  t1010: `This is an HBaggie target (slot)`,
  t1030:
`Main Features

· Slot-based target element (consumer can place any component/element)
· 8-way positioning (top-left / top-center / top-right / middle-left / middle-center / middle-right / bottom-left / bottom-center / bottom-right)
· Separate visibility: anchor (visible) vs. badge-only (baggieVisible)
· Shape: square / rounded / circle
· Background: filled / empty / transparent
· Optional border/shadow and button-like interaction (buttonEnabled)
· Runtime registration by unique id: hison.component.getBaggie(id)
· Responsive class system (hison-col-*, hison-size-*, hison-color-*)`,
  t1040: `Template Example`,
  c1040:
`<HBaggie
  id="bag01"
  class="hison-color-danger"
  position="top-right"
  text="9+"
  shape="circle"
  :border="true"
  :buttonEnabled="true"
  :visible="true"
  :baggieVisible="true"
  :zIndex="1200"
  @click="onBadgeClick"
  @mounted="onMounted"
>
  <!-- target element -->
  <HButton
    id="btn01"
    class="hison-size-m"
    text="Inbox"
  />

  <!-- replace badge content -->
  <template #badge>
    <IconBell />
  </template>
</HBaggie>`,
  t1050: `Runtime Example`,
  c1050:
`const baggie = hison.component.getBaggie('bag01')
baggie.setText('99+')
baggie.setShape('circle')
baggie.setPosition('bottom-left')
baggie.setButtonEnabled(true)
baggie.setZIndex(2000)`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "타깃 요소를 배치하는 기본 슬롯입니다. 배지는 이 요소를 기준으로 오버레이됩니다." },
  { slot: "#badge",  explain: "배지 콘텐츠를 교체합니다. 제공되면 text prop은 무시됩니다." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getBaggie(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/커스텀 클래스. (hison-col-*, hison-size-*, hison-color-*)" },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "배지 엘리먼트 인라인 스타일." },

  { prop: "visible", type: "boolean", default: "true", explain: "앵커(타깃+배지) 전체 표시 여부." },
  { prop: "baggieVisible", type: "boolean", default: "true", explain: "배지 전용 표시 여부(타깃은 항상 표시)." },

  { prop: "zIndex", type: "number", default: "1000", explain: "앵커에 적용되는 기본 z-index. 배지는 zIndex+1로 렌더링." },
  { prop: "position", type: "'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'", default: "'top-right'", explain: "타깃 대비 배지 위치." },

  { prop: "text", type: "string", default: "undefined", explain: "배지에 표시할 텍스트. #badge 슬롯이 있으면 무시." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'filled'", explain: "배지 배경 스타일." },
  { prop: "border", type: "boolean", default: "true", explain: "배지 보더/섀도우 사용 여부." },
  { prop: "shape", type: "'square'|'rounded'|'circle'", default: "'rounded'", explain: "배지 모양." },

  { prop: "tabIndex", type: "number | string | null", default: "null", explain: "탭 순서. null이면 포커스 불가." },
  { prop: "buttonEnabled", type: "boolean", default: "false", explain: "버튼 유사 인터랙션(hover/active 등) 활성화." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 시", args: "(HBaggieMethods)" },
  { event: "click", trigger: "배지를 클릭했을 때 (buttonEnabled=true 일 때 주 사용)", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mousedown", trigger: "배지 mousedown", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mouseup", trigger: "배지 mouseup", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mouseover", trigger: "배지 mouseover", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mouseout", trigger: "배지 mouseout", args: "(MouseEvent, HBaggieMethods)" },
  { event: "responsive-change", trigger: "디바이스 타입 변경 시", args: "('mb' | 'tb' | 'pc' | 'wd')" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'baggie'", explain: "컴포넌트 타입 리터럴('baggie')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "앵커(타깃+배지) 전체 표시 여부." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "앵커(타깃+배지) 전체 표시/비표시." },
  { method: "isBaggieVisible()", param: "-", return: "boolean", explain: "배지 자체의 표시 여부." },
  { method: "setBaggieVisible(v)", param: "boolean", return: "void", explain: "배지 자체의 표시/비표시." },
  { method: "getZIndex()", param: "-", return: "number", explain: "앵커에 적용되는 기본 z-index." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "앵커 z-index 설정(배지는 자동으로 +1)." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "현재 배지 위치." },
  { method: "setPosition(v)", param: "ScreenPosition | ScreenPositionValue", return: "void", explain: "배지 위치 설정." },
  { method: "getText()", param: "-", return: "string", explain: "배지 텍스트(설정되지 않으면 빈 문자열)." },
  { method: "setText(t)", param: "string", return: "void", explain: "배지 텍스트 설정. #badge 슬롯이 있으면 무시." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "보더/섀도우 사용 여부." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "보더/섀도우 사용 여부 설정." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "배경 타입 조회." },
  { method: "setBackgroundType(t)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "배경 타입 설정('filled'|'empty'|'transparent')." },
  { method: "getShape()", param: "-", return: "'square'|'rounded'|'circle'", explain: "배지 모양 조회." },
  { method: "setShape(s)", param: "'square'|'rounded'|'circle'", return: "void", explain: "배지 모양 설정." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "배지의 tabindex 값(null이면 포커스 불가)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "배지의 tabindex 설정(null이면 제거)." },
  { method: "isButtonEnabled()", param: "-", return: "boolean", explain: "버튼 유사 인터랙션 활성 여부." },
  { method: "setButtonEnabled(v)", param: "boolean", return: "void", explain: "버튼 유사 인터랙션 활성/비활성." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리로드(스타일/상태 재적용)." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트의 고유 ID." },
]

const slotGridDataEn = [
  { slot: "default", explain: "The target element slot. The badge overlays relative to this element." },
  { slot: "#badge",  explain: "Replaces the badge content. If provided, the text prop is ignored." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Accessible via hison.component.getBaggie(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive/custom classes (hison-col-*, hison-size-*, hison-color-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for the badge element." },

  { prop: "visible", type: "boolean", default: "true", explain: "Controls visibility of the anchor (target + badge)." },
  { prop: "baggieVisible", type: "boolean", default: "true", explain: "Badge-only visibility (target remains visible)." },

  { prop: "zIndex", type: "number", default: "1000", explain: "Base z-index applied to the anchor; the badge renders at zIndex + 1." },
  { prop: "position", type: "'top-left'|'top-center'|'top-right'|'middle-left'|'middle-center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'", default: "'top-right'", explain: "Badge position relative to the target." },

  { prop: "text", type: "string", default: "undefined", explain: "Text displayed in the badge. Ignored if #badge slot is used." },
  { prop: "backgroundType", type: "'filled'|'empty'|'transparent'", default: "'filled'", explain: "Background style of the badge." },
  { prop: "border", type: "boolean", default: "true", explain: "Whether to show border/shadow styling." },
  { prop: "shape", type: "'square'|'rounded'|'circle'", default: "'rounded'", explain: "Shape of the badge." },

  { prop: "tabIndex", type: "number | string | null", default: "null", explain: "Tab order; null removes focusability." },
  { prop: "buttonEnabled", type: "boolean", default: "false", explain: "Enables button-like interaction states." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "When the component is mounted.", args: "(HBaggieMethods)" },
  { event: "click", trigger: "When the badge is clicked (often with buttonEnabled=true).", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mousedown", trigger: "On badge mousedown.", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mouseup", trigger: "On badge mouseup.", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mouseover", trigger: "On badge mouseover.", args: "(MouseEvent, HBaggieMethods)" },
  { event: "mouseout", trigger: "On badge mouseout.", args: "(MouseEvent, HBaggieMethods)" },
  { event: "responsive-change", trigger: "When device type changes.", args: "('mb' | 'tb' | 'pc' | 'wd')" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'baggie'", explain: "Returns the component type literal ('baggie')." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether the anchor (target + badge) is visible." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Shows/hides the anchor (target + badge)." },
  { method: "isBaggieVisible()", param: "-", return: "boolean", explain: "Whether the badge itself is visible." },
  { method: "setBaggieVisible(v)", param: "boolean", return: "void", explain: "Shows/hides the badge itself." },
  { method: "getZIndex()", param: "-", return: "number", explain: "Gets the base z-index (applied to the anchor)." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "Sets the base z-index for the anchor (badge renders at +1)." },
  { method: "getPosition()", param: "-", return: "ScreenPositionValue", explain: "Gets the current badge position." },
  { method: "setPosition(v)", param: "ScreenPosition | ScreenPositionValue", return: "void", explain: "Sets the badge position." },
  { method: "getText()", param: "-", return: "string", explain: "Gets the badge text; empty string if not set." },
  { method: "setText(t)", param: "string", return: "void", explain: "Sets the badge text. Ignored if #badge slot is used." },
  { method: "isBorder()", param: "-", return: "boolean", explain: "Whether border/shadow styling is enabled." },
  { method: "setBorder(v)", param: "boolean", return: "void", explain: "Enables/disables border/shadow styling." },
  { method: "getBackgroundType()", param: "-", return: "BackgroundTypeValue", explain: "Gets the background type." },
  { method: "setBackgroundType(t)", param: "BackgroundType | BackgroundTypeValue", return: "void", explain: "Sets the background type ('filled'|'empty'|'transparent')." },
  { method: "getShape()", param: "-", return: "'square'|'rounded'|'circle'", explain: "Gets the badge shape." },
  { method: "setShape(s)", param: "'square'|'rounded'|'circle'", return: "void", explain: "Sets the badge shape." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Gets the tabindex value (null means not focusable)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Sets the tabindex (use null to remove focusability)." },
  { method: "isButtonEnabled()", param: "-", return: "boolean", explain: "Whether button-like interaction is enabled." },
  { method: "setButtonEnabled(v)", param: "boolean", return: "void", explain: "Enables/disables button-like interaction." },
  { method: "reload()", param: "-", return: "void", explain: "Reloads the component instance (re-applies props/state)." },
  { method: "getId()", param: "-", return: "string", explain: "Returns the component's unique ID." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '10%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '50%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '12%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '38%' },
  { id: 'args', header: 'args', dataType: 'text', width: '50%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '18%' },
  { id: 'param', header: 'param', dataType: 'text', width: '18%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '50%' },
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
    <HBaggie
      :shape="'circle'"
      :text="'10'"
      style="font-size: 0.8rem;"
    >
        <HParagraph>{{ contents.t1010 }}</HParagraph>
    </HBaggie>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040" :dynamicWidth="false"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050" :dynamicWidth="false"/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="baggieSlotGrid"
      :columns="slotColumn"
      class="hison-col-12 hison-size-m"
      :height="'100px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="baggiePropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'350px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="baggieEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'220px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="baggieMethodGrid"
      :columns="methodColumn"
      class="hison-col-12 hison-size-m"
      :height="'600px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>