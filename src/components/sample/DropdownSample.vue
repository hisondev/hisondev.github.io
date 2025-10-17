<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HDropdown(드롭다운/셀렉트) 컴포넌트입니다.

HDropdown은 HInput과 톤/스타일을 공유하는 경량 드롭다운입니다. 클릭/호버 트리거, 옵션 선택,
텍스트 정렬, 편집 상태(editable/readonly/disable), 내부 스크롤 maxHeight를 지원합니다.
또한 HAccordion과 동일한 0fr↔1fr CSS Grid 전환 및 캐럿 회전 애니메이션을 제공합니다.`,
  t1010: `이것은 HDropdown 라이브 데모입니다.`,
  t1030:
`주요 특징

· 입력창과 유사한 클린 톤(보더 대신 테마 섀도 틴트)
· 트리거: click | hover
· 편집 상태: editable | readonly | disable
· 텍스트 정렬: left | center | right
· CSS Grid 0fr↔1fr 확장/축소 + 캐럿 회전(인스턴스별 duration/easing 제어)
· 내부 스크롤 maxHeight, zIndex 제어
· 런타임 API: hison.component.getDropdown(id)
· #caret 슬롯으로 캐럿 교체`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HDropdown
  id="country"
  :modelValue="{ value: 'KR', options: [
    { label: 'Korea', value: 'KR' },
    { label: 'Japan', value: 'JP' }
  ]}"
  placeholder="Select country"
  trigger="click"
  :maxHeight="240"
  :animate="true"
  :duration="500"
  easing="ease"
/>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const dd = hison.component.getDropdown('country')
dd.open()
dd.setOptions([{ label: 'Korea', value: 'KR' }])
dd.setValue('KR')
dd.setEditMode('readonly')
dd.setTextAlign('center')
dd.setCloseOnSelect(false)
dd.setMaxHeight(180)
dd.setAnimate(true)
dd.setDuration(500)
dd.setEasing('ease-in-out')`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HDropdown (select) component.

HDropdown is a lightweight dropdown that shares the tone/style with HInput. It supports click/hover triggers,
option selection, text alignment, edit states (editable/readonly/disable), internal scroll maxHeight,
and the same Accordion-style animation (CSS Grid 0fr↔1fr + caret rotation).`,
  t1010: `This is the HDropdown live demo.`,
  t1030:
`Main Features

· Input-like clean tone (no border; themed shadow tint)
· Trigger: click | hover
· Edit modes: editable | readonly | disable
· Text alignment: left | center | right
· CSS Grid 0fr↔1fr expand/collapse + caret rotation (per-instance duration/easing)
· Scrollable maxHeight, zIndex control
· Runtime API: hison.component.getDropdown(id)
· Custom caret via #caret slot`,
  t1040: `Template Example`,
  c1040:
`<HDropdown
  id="country"
  :modelValue="{ value: 'KR', options: [
    { label: 'Korea', value: 'KR' },
    { label: 'Japan', value: 'JP' }
  ]}"
  placeholder="Select country"
  trigger="click"
  :maxHeight="240"
  :animate="true"
  :duration="500"
  easing="ease"
/>`,
  t1050: `Runtime Example`,
  c1050:
`const dd = hison.component.getDropdown('country')
dd.open()
dd.setOptions([{ label: 'Korea', value: 'KR' }])
dd.setValue('KR')
dd.setEditMode('readonly')
dd.setTextAlign('center')
dd.setCloseOnSelect(false)
dd.setMaxHeight(180)
dd.setAnimate(true)
dd.setDuration(500)
dd.setEasing('ease-in-out')`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "토글/메뉴 텍스트는 모델 값과 옵션으로 렌더링됩니다. 기본 슬롯은 보통 사용하지 않습니다." },
  { slot: "#caret",  explain: "캐럿 UI를 교체합니다. 제공되지 않으면 ▾ 아이콘을 사용합니다." },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getDropdown(id)로 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "반응형/커스텀 클래스(hison-* 시스템)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 컨테이너 인라인 스타일." },
  { prop: "toggleStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "토글 영역 스타일." },
  { prop: "menuStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "메뉴 컨테이너 스타일." },
  { prop: "itemStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "각 메뉴 아이템 스타일." },

  { prop: "visible", type: "boolean", default: "true", explain: "컴포넌트 표시 여부." },
  { prop: "editMode", type: "'editable' | 'disable' | 'readonly'", default: "'editable'", explain: "편집 상태." },
  { prop: "placeholder", type: "string", default: "''", explain: "선택값이 없을 때 표시되는 플레이스홀더." },
  { prop: "trigger", type: "'click' | 'hover'", default: "'click'", explain: "메뉴를 여는 방식." },

  { prop: "modelValue", type: "HDropdownModel", default: "-", explain: "v-model 객체 { value, options }." },
  { prop: "maxHeight", type: "number", default: "240", explain: "메뉴 최대 높이(px). 넘치면 스크롤." },
  { prop: "closeOnSelect", type: "boolean", default: "true", explain: "선택 후 메뉴 자동 닫힘." },
  { prop: "textAlign", type: "'left' | 'center' | 'right'", default: "'left'", explain: "토글/메뉴 텍스트 정렬." },
  { prop: "zIndex", type: "number", default: "1050", explain: "메뉴의 z-index." },

  { prop: "animate", type: "boolean", default: "true", explain: "확장/축소 및 캐럿 회전 애니메이션 사용." },
  { prop: "duration", type: "number", default: "500", explain: "애니메이션 지속 시간(ms). --hdd-duration에 반영." },
  { prop: "easing", type: "string", default: "'ease'", explain: "CSS 타이밍 함수. --hdd-easing에 반영." },
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트 마운트 시", args: "(HDropdownMethods)" },
  { event: "responsive-change", trigger: "디바이스 브레이크포인트 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "선택값이 변경될 때", args: "(HDropdownModel)" },
  { event: "open", trigger: "메뉴가 열릴 때", args: "(Event | null, HDropdownMethods)" },
  { event: "close", trigger: "메뉴가 닫힐 때", args: "(Event | null, HDropdownMethods)" },
  { event: "toggle-click", trigger: "토글 클릭/키보드 활성화 시", args: "(MouseEvent | KeyboardEvent, HDropdownMethods)" },
  { event: "item-click", trigger: "아이템 클릭 시", args: "(MouseEvent, HDropdownMethods, HDropdownOption)" },
  { event: "change", trigger: "선택 변경 후", args: "(oldValue: any, newValue: any, HDropdownMethods)" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'dropdown'", explain: "컴포넌트 타입 리터럴('dropdown')." },
  { method: "isOpen()", param: "-", return: "boolean", explain: "메뉴가 열려 있는지 여부." },
  { method: "open()", param: "-", return: "void", explain: "메뉴 열기." },
  { method: "close()", param: "-", return: "void", explain: "메뉴 닫기." },
  { method: "toggle()", param: "-", return: "void", explain: "열림/닫힘 전환." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "편집 상태 조회." },
  { method: "setEditMode(v)", param: "EditMode | EditModeValue", return: "void", explain: "편집 상태 설정." },
  { method: "getValue()", param: "-", return: "any", explain: "현재 선택 값 조회." },
  { method: "setValue(val)", param: "any", return: "void", explain: "선택 값 설정(사용자 이벤트 미발행)." },
  { method: "getText()", param: "-", return: "string", explain: "현재 선택 옵션의 라벨 텍스트." },
  { method: "getOptions()", param: "-", return: "HDropdownOption[]", explain: "옵션 목록 조회." },
  { method: "setOptions(options)", param: "HDropdownOption[]", return: "void", explain: "옵션 목록 교체." },
  { method: "setTriggerType(trigger)", param: "DropdownTrigger", return: "void", explain: "메뉴 오픈 방식 설정(click/hover)." },
  { method: "getMaxHeight()", param: "-", return: "number", explain: "메뉴 최대 높이 조회." },
  { method: "setMaxHeight(px)", param: "number", return: "void", explain: "메뉴 최대 높이 설정." },
  { method: "isCloseOnSelect()", param: "-", return: "boolean", explain: "선택 후 자동 닫힘 여부." },
  { method: "setCloseOnSelect(v)", param: "boolean", return: "void", explain: "선택 후 자동 닫힘 설정." },
  { method: "getTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "텍스트 정렬 조회." },
  { method: "setTextAlign(v)", param: "TextAlign | TextAlignValue", return: "void", explain: "텍스트 정렬 설정." },
  { method: "getAnimate()", param: "-", return: "boolean", explain: "애니메이션 사용 여부." },
  { method: "setAnimate(v)", param: "boolean", return: "void", explain: "애니메이션 활성/비활성." },
  { method: "getDuration()", param: "-", return: "number", explain: "애니메이션 지속(ms) 조회." },
  { method: "setDuration(ms)", param: "number", return: "void", explain: "애니메이션 지속(ms) 설정." },
  { method: "getEasing()", param: "-", return: "string", explain: "타이밍 함수 조회." },
  { method: "setEasing(fn)", param: "string", return: "void", explain: "타이밍 함수 설정." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "tabIndex 조회(null이면 포커스 불가)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "tabIndex 설정(null은 제거)." },
  { method: "getZIndex()", param: "-", return: "number", explain: "드롭다운 래퍼의 z-index 조회." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "드롭다운 래퍼의 z-index 설정." },
  { method: "focus()", param: "-", return: "void", explain: "토글 요소에 포커스 이동." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "컴포넌트 표시 여부(공통)." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김 설정(공통)." },
  { method: "getId()", param: "-", return: "string", explain: "고유 ID 반환(공통)." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더(공통)." },
]

const slotGridDataEn = [
  { slot: "default", explain: "Toggle/menu text is rendered from the model; default slot is typically unused." },
  { slot: "#caret",  explain: "Override the caret UI. Defaults to ▾." },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getDropdown(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive/custom classes (hison-* system)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Root container inline style." },
  { prop: "toggleStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Toggle area inline style." },
  { prop: "menuStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Menu container inline style." },
  { prop: "itemStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Each menu item inline style." },

  { prop: "visible", type: "boolean", default: "true", explain: "Whether the component is visible." },
  { prop: "editMode", type: "'editable' | 'disable' | 'readonly'", default: "'editable'", explain: "Edit state." },
  { prop: "placeholder", type: "string", default: "''", explain: "Placeholder shown when no value is selected." },
  { prop: "trigger", type: "'click' | 'hover'", default: "'click'", explain: "How the menu opens." },

  { prop: "modelValue", type: "HDropdownModel", default: "-", explain: "v-model object { value, options }." },
  { prop: "maxHeight", type: "number", default: "240", explain: "Max menu height (px); overflow scrolls." },
  { prop: "closeOnSelect", type: "boolean", default: "true", explain: "Close menu after selecting an option." },
  { prop: "textAlign", type: "'left' | 'center' | 'right'", default: "'left'", explain: "Text alignment for toggle and menu." },
  { prop: "zIndex", type: "number", default: "1050", explain: "Stacking context for the dropdown menu." },

  { prop: "animate", type: "boolean", default: "true", explain: "Enable expand/collapse + caret rotation animations." },
  { prop: "duration", type: "number", default: "500", explain: "Animation duration(ms). Reflected in --hdd-duration." },
  { prop: "easing", type: "string", default: "'ease'", explain: "CSS timing function. Reflected in --hdd-easing." },
]

const eventGridDataEn = [
  { event: "mounted", trigger: "On mount.", args: "(HDropdownMethods)" },
  { event: "responsive-change", trigger: "When device breakpoint changes.", args: "('mb'|'tb'|'pc'|'wd')" },
  { event: "update:modelValue", trigger: "When the selection changes.", args: "(HDropdownModel)" },
  { event: "open", trigger: "When the menu opens.", args: "(Event | null, HDropdownMethods)" },
  { event: "close", trigger: "When the menu closes.", args: "(Event | null, HDropdownMethods)" },
  { event: "toggle-click", trigger: "When toggle is clicked/keyboard-activated.", args: "(MouseEvent | KeyboardEvent, HDropdownMethods)" },
  { event: "item-click", trigger: "When a menu item is clicked.", args: "(MouseEvent, HDropdownMethods, HDropdownOption)" },
  { event: "change", trigger: "After the selection changes.", args: "(oldValue: any, newValue: any, HDropdownMethods)" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'dropdown'", explain: "Returns the component type literal ('dropdown')." },
  { method: "isOpen()", param: "-", return: "boolean", explain: "Whether the menu is open." },
  { method: "open()", param: "-", return: "void", explain: "Opens the menu." },
  { method: "close()", param: "-", return: "void", explain: "Closes the menu." },
  { method: "toggle()", param: "-", return: "void", explain: "Toggles open/close." },
  { method: "getEditMode()", param: "-", return: "EditModeValue", explain: "Gets edit mode." },
  { method: "setEditMode(v)", param: "EditMode | EditModeValue", return: "void", explain: "Sets edit mode." },
  { method: "getValue()", param: "-", return: "any", explain: "Gets current value." },
  { method: "setValue(val)", param: "any", return: "void", explain: "Sets value (no user events)." },
  { method: "getText()", param: "-", return: "string", explain: "Label of the current selection." },
  { method: "getOptions()", param: "-", return: "HDropdownOption[]", explain: "Gets options." },
  { method: "setOptions(options)", param: "HDropdownOption[]", return: "void", explain: "Replaces options." },
  { method: "setTriggerType(trigger)", param: "DropdownTrigger", return: "void", explain: "Sets trigger type (click/hover)." },
  { method: "getMaxHeight()", param: "-", return: "number", explain: "Gets max menu height." },
  { method: "setMaxHeight(px)", param: "number", return: "void", explain: "Sets max menu height." },
  { method: "isCloseOnSelect()", param: "-", return: "boolean", explain: "Whether it closes after select." },
  { method: "setCloseOnSelect(v)", param: "boolean", return: "void", explain: "Enable/disable close-on-select." },
  { method: "getTextAlign()", param: "-", return: "'left'|'center'|'right'", explain: "Gets text alignment." },
  { method: "setTextAlign(v)", param: "TextAlign | TextAlignValue", return: "void", explain: "Sets text alignment." },
  { method: "getAnimate()", param: "-", return: "boolean", explain: "Animation enabled." },
  { method: "setAnimate(v)", param: "boolean", return: "void", explain: "Enable/disable animation." },
  { method: "getDuration()", param: "-", return: "number", explain: "Animation duration(ms)." },
  { method: "setDuration(ms)", param: "number", return: "void", explain: "Set duration(ms)." },
  { method: "getEasing()", param: "-", return: "string", explain: "Timing function." },
  { method: "setEasing(fn)", param: "string", return: "void", explain: "Set timing function." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Gets tabIndex (null = unfocusable)." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Sets tabIndex (null removes attr)." },
  { method: "getZIndex()", param: "-", return: "number", explain: "Gets wrapper z-index." },
  { method: "setZIndex(v)", param: "number", return: "void", explain: "Sets wrapper z-index." },
  { method: "focus()", param: "-", return: "void", explain: "Focuses the toggle element." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Visibility (common)." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Show/hide (common)." },
  { method: "getId()", param: "-", return: "string", explain: "Unique ID (common)." },
  { method: "reload()", param: "-", return: "void", explain: "Force re-render (common)." },
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '14%' },
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
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
  { id: 'param', header: 'param', dataType: 'text', width: '26%' },
  { id: 'return', header: 'return', dataType: 'text', width: '14%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '36%' },
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
    <HDropdown
      id="dropdown-demo"
      class="hison-col-12 hison-size-s"
      :modelValue="{ value: 'KR', options: [
        { label: 'Korea', value: 'KR' },
        { label: 'Japan', value: 'JP' },
        { label: 'USA', value: 'US' }
      ]}"
      placeholder="Select"
      trigger="click"
      :maxHeight="180"
      :animate="true"
      :duration="400"
      easing="ease"
      :zIndex="1050"
      style="margin-bottom: 10px;"
    >
      <template #caret>▾</template>
    </HDropdown>

    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050"/>

    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="dropdownSlotGrid"
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
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="dropdownPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-s"
      :height="'560px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="dropdownEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-s"
      :height="'240px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="dropdownMethodGrid"
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