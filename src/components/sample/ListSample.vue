<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: 'ko' | 'en' }>()

/* ------------------------------- demo states -------------------------------- */
const textList = ref<Array<string | number>>(['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G'])

/* ----------------------------------- i18n ----------------------------------- */
const ko = {
  intro:
`아래는 HList(목록) 컴포넌트 샘플입니다.

· textList 기반 자동 렌더링 또는 슬롯 기반 커스텀 렌더링을 지원합니다.
· 마커(불릿/번호), 배경/보더, 포커스 가능(tabIndex), 이벤트 바인딩(addEvent)을 런타임으로 제어할 수 있습니다.`,
  live: '라이브 데모',
  controls: '컨트롤',
  code1Title: '템플릿 사용 예',
  code1:
`<HList
  id="list-demo"
  class="hison-col-12 hison-size-m hison-color-primary"
  :text-list="['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G']"
  :list-border="true"
>
</HList>`,
  code2Title: '런타임 사용 예',
  code2:
`const list = hison.component.getList('list-demo')
list.setListType('ol')
list.setShowMarker(true)
list.setBulletChar('★')
list.setTextList(['Alpha','Beta','Gamma'])
list.setListBackgroundType('filled')
list.setTabIndex(0)
list.focus()`,
  slots: 'slot',
  props: 'props',
  events: 'events',
  methods: 'methods',
}
const en = {
  intro:
`Below is the sample for HList.

· Supports data-driven textList or fully custom slot rendering.
· Control marker (bullet/index), background/borders, focusability (tabIndex), and event binding (addEvent) at runtime.`,
  live: 'Live Demo',
  controls: 'Controls',
  code1Title: 'Template Example',
  code1:
`<HList
  id="list-demo"
  class="hison-col-12 hison-size-m hison-color-primary"
  :text-list="['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G']"
  :list-border="true"
>
</HList>`,
  code2Title: 'Runtime usage example',
  code2:
`const list = hison.component.getList('list-demo')
list.setListType('ol')
list.setShowMarker(true)
list.setBulletChar('★')
list.setTextList(['Alpha','Beta','Gamma'])
list.setListBackgroundType('filled')
list.setTabIndex(0)
list.focus()`,
  slots: 'slot',
  props: 'props',
  events: 'events',
  methods: 'methods',
}
const T = props.lang === 'en' ? en : ko

// Slots
const slotDataKo = [
  { slot: 'default', explain: '사용자 정의 항목을 직접 렌더링. 제공 시 textList는 무시됩니다.' },
  { slot: 'item', explain: 'textList를 스코프 슬롯으로 커스터마이즈 ({ item, index }).' },
]
const slotDataEn = [
  { slot: 'default', explain: 'Render custom elements yourself. Overrides textList.' },
  { slot: 'item', explain: 'Customize textList items via scoped slot ({ item, index }).' },
]

// Props
const propCommon = [
  { prop: 'id', type: 'string', default: '-', explain: 'Access via hison.component.getList(id).' },
  { prop: 'class', type: 'string | string[] | Record<string, boolean>', default: '-', explain: 'Responsive/custom classes.' },
  { prop: 'style', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: 'Inline style for container.' },
  { prop: 'listItemStyle', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: 'Inline style for each <li>.' },
  { prop: 'listItemInnerStyle', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: 'Inner wrapper style of each item.' },
  { prop: 'visible', type: 'boolean', default: 'true', explain: 'Show/Hide.' },
  { prop: 'border', type: 'boolean', default: 'false', explain: 'Container border (box-shadow).' },
  { prop: 'listBorder', type: 'boolean', default: 'false', explain: 'Per-item border.' },
  { prop: 'backgroundType', type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: 'Container background type.' },
  { prop: 'listBackgroundType', type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: 'Per-item background type.' },
  { prop: 'listType', type: "'ul'|'ol'", default: "'ul'", explain: 'List tag type.' },
  { prop: 'bulletChar', type: 'string', default: "'•'", explain: 'Bullet char for ul.' },
  { prop: 'showMarker', type: 'boolean', default: 'true', explain: 'Render bullet/index marker.' },
  { prop: 'textList', type: 'Array<string|number>', default: '-', explain: 'Data-driven items (ignored when slot elements exist).' },
  { prop: 'addEvent', type: 'boolean', default: 'false', explain: 'Bind textbox-like events to items.' },
  { prop: 'tabIndex', type: 'number|string|null', default: 'null', explain: 'tabindex for each <li> (0 to focusable).' },
]
const propDataKo = propCommon
const propDataEn = propCommon

// Events
const eventDataKo = [
  { event: 'mounted', trigger: '마운트 완료', args: '(HListMethods)' },
  { event: 'click', trigger: '아이템 클릭', args: '(MouseEvent, HListMethods)' },
  { event: 'mousedown / mouseup / mouseover / mouseout', trigger: '아이템 마우스 상호작용', args: '(MouseEvent, HListMethods)' },
  { event: 'responsive-change', trigger: '디바이스 클래스 변경', args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventDataEn = [
  { event: 'mounted', trigger: 'After mount', args: '(HListMethods)' },
  { event: 'click', trigger: 'Item click', args: '(MouseEvent, HListMethods)' },
  { event: 'mousedown / mouseup / mouseover / mouseout', trigger: 'Mouse interactions on items', args: '(MouseEvent, HListMethods)' },
  { event: 'responsive-change', trigger: 'Device class changed', args: "('mb'|'tb'|'pc'|'wd')" },
]

// Methods
const methodDataKo = [
  { method: 'getType()', param: '-', return: "'list'", explain: '타입 리터럴.' },
  { method: 'isVisible()/setVisible(v)', param: 'boolean', return: 'boolean|void', explain: '표시/숨김.' },
  { method: 'getListType()/setListType(type)', param: "'ul'|'ol'", return: 'string|void', explain: '리스트 태그 전환.' },
  { method: 'isShowMarker()/setShowMarker(v)', param: 'boolean', return: 'boolean|void', explain: '마커 표시 토글.' },
  { method: 'getBulletChar()/setBulletChar(ch)', param: 'string', return: 'string|void', explain: 'ul 불릿 문자 설정.' },
  { method: 'isBorder()/setBorder(v)', param: 'boolean', return: 'boolean|void', explain: '컨테이너 보더.' },
  { method: 'isListBorder()/setListBorder(v)', param: 'boolean', return: 'boolean|void', explain: '아이템 보더.' },
  { method: 'getBackgroundType()/setBackgroundType(t)', param: "'filled'|'empty'|'transparent'", return: 'string|void', explain: '컨테이너 배경 타입.' },
  { method: 'getListBackgroundType()/setListBackgroundType(t)', param: "'filled'|'empty'|'transparent'", return: 'string|void', explain: '아이템 배경 타입.' },
  { method: 'getTextList()/setTextList(list)', param: 'Array<string|number>', return: 'Array|void', explain: '데이터 기반 항목.' },
  { method: 'isAddEvent()/setAddEvent(v)', param: 'boolean', return: 'boolean|void', explain: '이벤트 바인딩 토글.' },
  { method: 'getTabIndex()/setTabIndex(v)', param: 'number|null', return: 'number|null|void', explain: '항목 포커스 여부.' },
  { method: 'getListRowCount()', param: '-', return: 'number', explain: 'li 개수.' },
  { method: 'getListItem(index)', param: 'number', return: 'HTMLElement|null', explain: 'li DOM 노드.' },
  { method: 'focus(index?)', param: 'number?', return: 'void', explain: '해당 인덱스 항목 포커스(조건 충족 시).' },
]
const methodDataEn = [
  { method: 'getType()', param: '-', return: "'list'", explain: 'Type literal.' },
  { method: 'isVisible()/setVisible(v)', param: 'boolean', return: 'boolean|void', explain: 'Show/Hide.' },
  { method: 'getListType()/setListType(type)', param: "'ul'|'ol'", return: 'string|void', explain: 'Switch list tag.' },
  { method: 'isShowMarker()/setShowMarker(v)', param: 'boolean', return: 'boolean|void', explain: 'Toggle marker.' },
  { method: 'getBulletChar()/setBulletChar(ch)', param: 'string', return: 'string|void', explain: 'Bullet char for ul.' },
  { method: 'isBorder()/setBorder(v)', param: 'boolean', return: 'boolean|void', explain: 'Container border.' },
  { method: 'isListBorder()/setListBorder(v)', param: 'boolean', return: 'boolean|void', explain: 'Item border.' },
  { method: 'getBackgroundType()/setBackgroundType(t)', param: "'filled'|'empty'|'transparent'", return: 'string|void', explain: 'Container background type.' },
  { method: 'getListBackgroundType()/setListBackgroundType(t)', param: "'filled'|'empty'|'transparent'", return: 'string|void', explain: 'Item background type.' },
  { method: 'getTextList()/setTextList(list)', param: 'Array<string|number>', return: 'Array|void', explain: 'Data-driven items.' },
  { method: 'isAddEvent()/setAddEvent(v)', param: 'boolean', return: 'boolean|void', explain: 'Bind/unbind events.' },
  { method: 'getTabIndex()/setTabIndex(v)', param: 'number|null', return: 'number|null|void', explain: 'Focusability.' },
  { method: 'getListRowCount()', param: '-', return: 'number', explain: 'li count.' },
  { method: 'getListItem(index)', param: 'number', return: 'HTMLElement|null', explain: 'li DOM node.' },
  { method: 'focus(index?)', param: 'number?', return: 'void', explain: 'Focus item (when possible).' },
]

const colSlot: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '22%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '78%' },
]
const colProp: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '35%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
]
const colEvent: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '35%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '30%' },
  { id: 'args', header: 'args', dataType: 'text', width: '35%' },
]
const colMethod: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '30%' },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '30%' },
]

const mountSlotGrid = (g: HGridMethods) => g.load(props.lang === 'en' ? slotDataEn : slotDataKo)
const mountPropGrid = (g: HGridMethods) => g.load(props.lang === 'en' ? propDataEn : propDataKo)
const mountEventGrid = (g: HGridMethods) => g.load(props.lang === 'en' ? eventDataEn : eventDataKo)
const mountMethodGrid = (g: HGridMethods) => g.load(props.lang === 'en' ? methodDataEn : methodDataKo)

</script>

<template>
  <HLayout :border="true" style="padding:20px;">
    <HParagraph class="hison-col-12">{{ T.intro }}</HParagraph>

    <HCaption :level="5" class="hison-col-12">{{ T.live }}</HCaption>

    <!-- Demo List -->
    <HList
      id="list-demo"
      class="hison-col-12 hison-size-m hison-color-primary"
      :text-list="textList"
      :list-border="true"
    >
    </HList>

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.code1Title }}</HCaption>
    <CodeParagraph :code="T.code1" :dynamicWidth="false"/>

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.code2Title }}</HCaption>
    <CodeParagraph :code="T.code2" :dynamicWidth="false"/>

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.slots }}</HCaption>
    <HGrid
      id="listSlotGrid"
      :columns="colSlot"
      class="hison-col-12 hison-size-m"
      :height="'100px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.props }}</HCaption>
    <HGrid
      id="listPropGrid"
      :columns="colProp"
      class="hison-col-12 hison-size-m"
      :height="'420px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.events }}</HCaption>
    <HGrid
      id="listEventGrid"
      :columns="colEvent"
      class="hison-col-12 hison-size-m"
      :height="'160px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.methods }}</HCaption>
    <HGrid
      id="listMethodGrid"
      :columns="colMethod"
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