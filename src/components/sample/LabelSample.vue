<script setup lang="ts">
import { defineProps} from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()
const ko = {
  t1000:
`아래는 HLabel(커스텀 라벨) 컴포넌트 샘플입니다.

HLabel은 텍스트/슬롯/하이퍼링크(<a>) 렌더링을 모두 지원하며,
런타임 메서드로 텍스트, 링크, 폰트/배경/보더, 정렬 등을 제어할 수 있습니다.
기본 슬롯이 '텍스트 노드만'일 때는 내부 텍스트로 흡수되어 getText/setText로 제어됩니다.`,
  t1010: `템플릿 사용 예시`,
  c1010:
`<HLabel
  class="hison-col-12 hison-color-primary"
  :text="'hison-color-primary'"
  title="hison-color-primary"
/>`,
  t1020: '런타임 사용 예',
  c1020:
`const lb = hison.component.getLabel('lb-demo')
//[텍스트 바꾸기]는 setText()를 호출합니다. (요소 슬롯일 경우에는 적용되지 않습니다)
lb.setText('Updated')
//[링크 토글]은 href를 설정/초기화합니다. target rel 등은 anchorAttrs로 제어합니다.
lb.setHref('https://naver.com')
lb.mergeAnchorAttrs({ target: '_blank' })
//[굵게/밑줄/보더/배경] 버튼으로 스타일을 토글할 수 있습니다.
lb.setFontBold(true)
lb.setBackgroundType('transparent')`,
  t1100: 'slot',
  t1200: 'props',
  t1300: 'events',
  t1400: 'methods',
}
const en = {
  t1000:
`Below is the sample for HLabel (custom label).

HLabel supports rendering as text, slot HTML, or an anchor (<a>) when 'href' is set.
You can control text, link, font/background/border, and alignment at runtime.
When the default slot is text-only, it is absorbed as internal text and is controllable via getText/setText.`,
  t1010: `Template Example`,
  c1010:
`<HLabel
  class="hison-col-12 hison-color-primary"
  :text="'hison-color-primary'"
  title="hison-color-primary"
/>`,
  t1020: 'Runtime usage example',
  c1020:
`const lb = hison.component.getLabel('lb-demo')
//[Change Text] calls setText() (no effect if the slot renders elements).
lb.setText('Updated')
//[Toggle Link] sets/clears href. Use anchorAttrs to control target/rel, etc.
lb.setHref('https://naver.com')
lb.mergeAnchorAttrs({ target: '_blank' })
//Toggle bold/underline/border/background with the style buttons.
lb.setFontBold(true)
lb.setBackgroundType('transparent')`,
  t1100: 'slot',
  t1200: 'props',
  t1300: 'events',
  t1400: 'methods',
}
const T = props.lang === 'en' ? en : ko

/* ---------------------------------- tables ----------------------------------- */
// Slots
const slotGridDataKo = [
  { slot: 'default', explain: '라벨 내부 콘텐츠. 텍스트만이면 getText/setText로 제어, 요소가 있으면 슬롯 우선.' },
]
const slotGridDataEn = [
  { slot: 'default', explain: 'Inner content. If text-only, it is controllable via getText/setText; element slot takes precedence.' },
]

// Props
const propGridDataKo = [
  { prop: 'id', type: 'string', default: '-', explain: '컴포넌트 고유 ID. hison.component.getLabel(id)로 접근.' },
  { prop: 'class', type: 'string | string[] | Record<string, boolean>', default: '-', explain: '반응형/테마 클래스 (hison-size-*, hison-color-* 등).' },
  { prop: 'style', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: '루트 스타일.' },
  { prop: 'visible', type: 'boolean', default: 'true', explain: '표시 여부.' },
  { prop: 'text', type: 'string', default: '-', explain: '슬롯이 없거나 텍스트 슬롯일 때 사용되는 텍스트.' },
  { prop: 'title', type: 'string', default: '-', explain: '툴팁 텍스트.' },
  { prop: 'href', type: 'string | null', default: 'null', explain: '설정 시 <a>로 렌더링.' },
  { prop: 'anchorAttrs', type: 'Record<string, unknown>', default: '{}', explain: 'a 태그 속성 (target, rel, download 등).' },
  { prop: 'fontBold/fontItalic/fontThruline/fontUnderline', type: 'boolean', default: 'false', explain: '폰트 스타일 토글.' },
  { prop: 'textAlign', type: "'left'|'center'|'right'", default: 'left', explain: '텍스트 정렬.' },
  { prop: 'border', type: 'boolean', default: 'false', explain: '박스-섀도우 보더 표시.' },
  { prop: 'backgroundType', type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: '배경 스타일.' },
  { prop: 'toggleTarget', type: "string", default: "-", explain: '타켓으로 하고싶은 radio, checkbox HInput의 id 속성값.\n지정하면 HLable클릭 시 해당 HInput의 값 토글됨.' },
]
const propGridDataEn = [
  { prop: 'id', type: 'string', default: '-', explain: 'Unique ID. Access via hison.component.getLabel(id).' },
  { prop: 'class', type: 'string | string[] | Record<string, boolean>', default: '-', explain: 'Responsive/themed classes (hison-size-*, hison-color-*, ...).' },
  { prop: 'style', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: 'Root inline style.' },
  { prop: 'visible', type: 'boolean', default: 'true', explain: 'Visibility.' },
  { prop: 'text', type: 'string', default: '-', explain: 'Text used when no element-slot.' },
  { prop: 'title', type: 'string', default: '-', explain: 'Tooltip text.' },
  { prop: 'href', type: 'string | null', default: 'null', explain: 'If set, renders as <a>.' },
  { prop: 'anchorAttrs', type: 'Record<string, unknown>', default: '{}', explain: 'Extra anchor attributes (target, rel, download...).' },
  { prop: 'fontBold/fontItalic/fontThruline/fontUnderline', type: 'boolean', default: 'false', explain: 'Font style toggles.' },
  { prop: 'textAlign', type: "'left'|'center'|'right'", default: 'left', explain: 'Text alignment.' },
  { prop: 'border', type: 'boolean', default: 'false', explain: 'Border (box-shadow).' },
  { prop: 'backgroundType', type: "'filled'|'empty'|'transparent'", default: "'empty'", explain: 'Background style.' },
  { prop: 'toggleTarget', type: "string", default: "-", explain: 'The id attribute value of the radio or checkbox HInput you want to target.\nIf specified, the value of the corresponding HInput will be\ntoggled when the HLable is clicked.' },
]

// Events
const eventGridDataKo = [
  { event: 'mounted', trigger: '마운트 완료', args: '(HLabelMethods)' },
  { event: 'click', trigger: '<a> 클릭 시', args: '(MouseEvent, HLabelMethods)' },
  { event: 'mousedown/mouseup/mouseover/mouseout', trigger: '<a> 상호작용', args: '(MouseEvent, HLabelMethods)' },
  { event: 'responsive-change', trigger: '디바이스 클래스 변경', args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: 'mounted', trigger: 'After mount', args: '(HLabelMethods)' },
  { event: 'click', trigger: 'When rendered as <a> and clicked', args: '(MouseEvent, HLabelMethods)' },
  { event: 'mousedown/mouseup/mouseover/mouseout', trigger: '<a> interactions', args: '(MouseEvent, HLabelMethods)' },
  { event: 'responsive-change', trigger: 'Device class changed', args: "('mb'|'tb'|'pc'|'wd')" },
]

// Methods
const methodGridDataKo = [
  { method: 'getType()', param: '-', return: "'label'", explain: '타입 리터럴.' },
  { method: 'setVisible(v)', param: 'boolean', return: 'void', explain: '표시/숨김.' },
  { method: 'getTitle()/setTitle(t)', param: 'string', return: 'string|void', explain: '툴팁 읽기/설정.' },
  { method: 'getText()/setText(t)', param: 'string', return: 'string|void', explain: '텍스트 제어(요소 슬롯이면 무효).' },
  { method: 'getHref()/setHref(href?)', param: 'string|null', return: 'string|void', explain: '링크 주소 읽기/설정.' },
  { method: 'getAnchorAttrs()/replaceAnchorAttrs()/mergeAnchorAttrs()/setAnchorAttr()/removeAnchorAttr()', param: 'Record/Key/Value', return: 'various', explain: 'a 태그 속성 제어.' },
  { method: 'isFontBold()/setFontBold()', param: 'boolean', return: 'boolean|void', explain: '볼드 토글.' },
  { method: 'isFontItalic()/setFontItalic()', param: 'boolean', return: 'boolean|void', explain: '이탤릭 토글.' },
  { method: 'isFontThruline()/setFontThruline()', param: 'boolean', return: 'boolean|void', explain: '취소선 토글.' },
  { method: 'isFontUnderline()/setFontUnderline()', param: 'boolean', return: 'boolean|void', explain: '밑줄 토글.' },
  { method: 'getTextAlign()/setTextAlign()', param: "TextAlign", return: 'TextAlign|void', explain: '정렬 조회/설정.' },
  { method: 'isBorder()/setBorder()', param: 'boolean', return: 'boolean|void', explain: '보더 토글.' },
  { method: 'getBackgroundType()/setBackgroundType()', param: "BackgroundType", return: 'type|void', explain: '배경 타입.' },
  { method: 'getToggleTarget()/setToggleTarget()', param: 'string', return: 'string', explain: '타겟이될 checkbox 또는 radio 타입의 HInput의 id속성 값.' },
  { method: 'getTabIndex()/setTabIndex()', param: 'number|null', return: 'number|null|void', explain: 'tabindex 조회/설정.' },
  { method: 'focus()', param: '-', return: 'void', explain: '<a>일 때 포커스.' },
]
const methodGridDataEn = [
  { method: 'getType()', param: '-', return: "'label'", explain: 'Type literal.' },
  { method: 'setVisible(v)', param: 'boolean', return: 'void', explain: 'Show/Hide.' },
  { method: 'getTitle()/setTitle(t)', param: 'string', return: 'string|void', explain: 'Tooltip get/set.' },
  { method: 'getText()/setText(t)', param: 'string', return: 'string|void', explain: 'Text control (no effect for element-slot).' },
  { method: 'getHref()/setHref(href?)', param: 'string|null', return: 'string|void', explain: 'Read/Set link.' },
  { method: 'getAnchorAttrs()/replaceAnchorAttrs()/mergeAnchorAttrs()/setAnchorAttr()/removeAnchorAttr()', param: 'Record/Key/Value', return: 'various', explain: 'Anchor attribute control.' },
  { method: 'isFontBold()/setFontBold()', param: 'boolean', return: 'boolean|void', explain: 'Bold toggle.' },
  { method: 'isFontItalic()/setFontItalic()', param: 'boolean', return: 'boolean|void', explain: 'Italic toggle.' },
  { method: 'isFontThruline()/setFontThruline()', param: 'boolean', return: 'boolean|void', explain: 'Strikethrough toggle.' },
  { method: 'isFontUnderline()/setFontUnderline()', param: 'boolean', return: 'boolean|void', explain: 'Underline toggle.' },
  { method: 'getTextAlign()/setTextAlign()', param: "TextAlign", return: 'TextAlign|void', explain: 'Alignment get/set.' },
  { method: 'isBorder()/setBorder()', param: 'boolean', return: 'boolean|void', explain: 'Border toggle.' },
  { method: 'getBackgroundType()/setBackgroundType()', param: "BackgroundType", return: 'type|void', explain: 'Background type.' },
  { method: 'getToggleTarget()/setToggleTarget()', param: 'string', return: 'string', explain: 'The id attribute value of the HInput of the checkbox or radio type to be targeted' },
  { method: 'getTabIndex()/setTabIndex()', param: 'number|null', return: 'number|null|void', explain: 'tabindex get/set.' },
  { method: 'focus()', param: '-', return: 'void', explain: 'Focus when anchor.' },
]

/* ------------------------------ grid definitions ------------------------------ */
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '25%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '35%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '30%' },
  { id: 'args', header: 'args', dataType: 'text', width: '35%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '40%' },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '25%' },
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
</script>

<template>
  <HLayout :border="true" style="padding:20px;">
    <HParagraph class="hison-col-12">{{ T.t1000 }}</HParagraph>
    <HGap/>
    <HLayout class="hison-col-12">
      <HLabel
        class="hison-col-12 hison-color-primary"
        :text="'hison-color-primary'"
        title="hison-color-primary"
      />
      <HLabel
        class="hison-col-12 hison-color-muted"
        :text="'hison-color-muted'"
        title="hison-color-muted"
      />
      <HLabel
        class="hison-col-12 hison-color-info"
        :text="'hison-color-info'"
        title="hison-color-info"
      />
      <HLabel
        class="hison-col-12 hison-color-success"
        :text="'hison-color-success'"
        title="hison-color-success"
      />
      <HLabel
        class="hison-col-12 hison-color-danger"
        :text="'hison-color-danger'"
        title="hison-color-danger"
      />
      <HLabel
        class="hison-col-12 hison-color-warning"
        :text="'hison-color-warning'"
        title="hison-color-warning"
      />
    </HLayout>

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1010 }}</HCaption>
    <CodeParagraph :code="T.c1010" :dynamicWidth="false"/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1020 }}</HCaption>
    <CodeParagraph :code="T.c1020" :dynamicWidth="false"/>

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1100 }}</HCaption>
    <HGrid
      id="lbSlotGrid"
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
    <HCaption :level="6" class="hison-col-12">{{ T.t1200 }}</HCaption>
    <HGrid
      id="lbPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'320px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1300 }}</HCaption>
    <HGrid
      id="lbEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'160px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ T.t1400 }}</HCaption>
    <HGrid
      id="lbMethodGrid"
      :columns="methodColumn"
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