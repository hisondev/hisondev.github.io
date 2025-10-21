<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: 'ko' | 'en' }>()

const ko = {
  intro:
`아래는 HLayout(레이아웃) 컴포넌트 샘플입니다.

HLayout은 표시/배경/보더/높이/배경이미지를 런타임 메서드로 제어할 수 있는
컨테이너입니다. hison-col-*, hison-pos-* 클래스와 함께 반응형 그리드를 구성합니다.`,
  live: '라이브 데모',
  codeTitle: '런타임 사용 예',
  code:
`const layout = hison.component.getLayout('layout-demo')
layout.setVisible(true)
layout.setBackColor('#f7f7f7')       // 또는 'primary' 같은 테마 키
layout.setHeight('40vh')
layout.setBackImageSrc('/assets/bg.jpg')
layout.setBackImageRepeat('cover')
layout.setBackImageAlign('center')
layout.setBackImageVerticalAlign('bottom')
layout.setBorder(true)`,
  slots: 'slot',
  props: 'props',
  events: 'events',
  methods: 'methods',
  btnToggle: '표시 토글',
  btnBorder: '보더 토글',
  btnApply: '적용',
  labelColor: '배경색/키',
  labelHeight: '높이',
  labelImg: '배경이미지',
  labelSrc: 'src',
  labelRepeat: 'repeat/size',
  labelAlignX: '정렬 X',
  labelAlignY: '정렬 Y',
  hint:
`· 배경색은 CSS 색상(#fff, rgba, var) 또는 테마 키(primary, danger ...)를 모두 지원합니다.
· repeat에 'cover' | 'contain'을 주면 내부적으로 background-size로 적용됩니다.`,
}
const en = {
  intro:
`Below is the sample for HLayout (layout container).

HLayout lets you control visibility, background, border, height and background image
via runtime methods. Works with hison-col-* / hison-pos-* responsive classes.`,
  live: 'Live Demo',
  codeTitle: 'Runtime usage example',
  code:
`const layout = hison.component.getLayout('layout-demo')
layout.setVisible(true)
layout.setBackColor('#f7f7f7')       // or theme key like 'primary'
layout.setHeight('40vh')
layout.setBackImageSrc('/assets/bg.jpg')
layout.setBackImageRepeat('cover')
layout.setBackImageAlign('center')
layout.setBackImageVerticalAlign('bottom')
layout.setBorder(true)`,
  slots: 'slot',
  props: 'props',
  events: 'events',
  methods: 'methods',
  btnToggle: 'Toggle Visible',
  btnBorder: 'Toggle Border',
  btnApply: 'Apply',
  labelColor: 'Back color/key',
  labelHeight: 'Height',
  labelImg: 'Background image',
  labelSrc: 'src',
  labelRepeat: 'repeat/size',
  labelAlignX: 'Align X',
  labelAlignY: 'Align Y',
  hint:
`· Back color accepts CSS colors (#fff, rgba, var) or theme keys (primary, danger ...).
· If repeat is 'cover' | 'contain', it is applied via background-size.`,
}
const T = props.lang === 'en' ? en : ko

// Slots
const slotDataKo = [{ slot: 'default', explain: '레이아웃 내부 콘텐츠 영역.' }]
const slotDataEn = [{ slot: 'default', explain: 'Content area of the layout.' }]

// Props
const propDataKo = [
  { prop: 'id', type: 'string', default: '-', explain: '고유 ID. hison.component.getLayout(id)로 접근.' },
  { prop: 'class', type: 'string | string[] | Record<string, boolean>', default: '-', explain: '반응형/커스텀 클래스(hison-col-*, hison-pos-* 등).' },
  { prop: 'style', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: '인라인 스타일.' },
  { prop: 'visible', type: 'boolean', default: 'true', explain: '표시 여부.' },
  { prop: 'backImageSrc', type: 'string', default: "''", explain: '배경 이미지 URL.' },
  { prop: 'backImageRepeat', type: "'repeat'|'no-repeat'|'cover'|'contain'", default: "'no-repeat'", explain: '반복/사이즈 모드.' },
  { prop: 'backImageWidth', type: 'string', default: "''", explain: '배경 이미지 width (background-size).' },
  { prop: 'backImageAlign', type: "'left'|'center'|'right'", default: "'center'", explain: '수평 정렬.' },
  { prop: 'backImageVerticalAlign', type: "'top'|'center'|'bottom'", default: "'center'", explain: '수직 정렬.' },
  { prop: 'backColor', type: 'string', default: "''", explain: '배경색 또는 테마 키(primary 등).' },
  { prop: 'border', type: 'boolean', default: 'false', explain: '보더(박스 섀도우) 표시.' },
  { prop: 'height', type: 'string', default: "''", explain: '높이(예: 100px, 50%, 100vh).' },
]
const propDataEn = [
  { prop: 'id', type: 'string', default: '-', explain: 'Unique ID. Access via hison.component.getLayout(id).' },
  { prop: 'class', type: 'string | string[] | Record<string, boolean>', default: '-', explain: 'Responsive/custom classes (hison-col-*, hison-pos-* ...).' },
  { prop: 'style', type: 'string | CSSProperties | CSSProperties[]', default: '-', explain: 'Inline styles.' },
  { prop: 'visible', type: 'boolean', default: 'true', explain: 'Visibility.' },
  { prop: 'backImageSrc', type: 'string', default: "''", explain: 'Background image URL.' },
  { prop: 'backImageRepeat', type: "'repeat'|'no-repeat'|'cover'|'contain'", default: "'no-repeat'", explain: 'Repeat/size mode.' },
  { prop: 'backImageWidth', type: 'string', default: "''", explain: 'Background image width (background-size).' },
  { prop: 'backImageAlign', type: "'left'|'center'|'right'", default: "'center'", explain: 'Horizontal alignment.' },
  { prop: 'backImageVerticalAlign', type: "'top'|'center'|'bottom'", default: "'center'", explain: 'Vertical alignment.' },
  { prop: 'backColor', type: 'string', default: "''", explain: 'Background color or theme key (primary, ...).' },
  { prop: 'border', type: 'boolean', default: 'false', explain: 'Border (box-shadow).' },
  { prop: 'height', type: 'string', default: "''", explain: 'Height (e.g., 100px, 50%, 100vh).' },
]

// Events
const eventDataKo = [
  { event: 'mounted', trigger: '마운트 완료', args: '(HLayoutMethods)' },
  { event: 'click', trigger: '클릭', args: '(MouseEvent)' },
  { event: 'mousedown/mouseup/mouseover/mouseout', trigger: '마우스 상호작용', args: '(MouseEvent)' },
  { event: 'responsive-change', trigger: '디바이스 클래스 변경', args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventDataEn = [
  { event: 'mounted', trigger: 'After mount', args: '(HLayoutMethods)' },
  { event: 'click', trigger: 'Mouse click', args: '(MouseEvent)' },
  { event: 'mousedown/mouseup/mouseover/mouseout', trigger: 'Mouse interactions', args: '(MouseEvent)' },
  { event: 'responsive-change', trigger: 'Device class changed', args: "('mb'|'tb'|'pc'|'wd')" },
]

// Methods
const methodDataKo = [
  { method: 'getType()', param: '-', return: "'layout'", explain: '타입 리터럴.' },
  { method: 'setVisible(v)', param: 'boolean', return: 'void', explain: '표시/숨김.' },
  { method: 'getBackImageSrc()/setBackImageSrc(src)', param: 'string', return: 'string|void', explain: '배경 이미지 URL.' },
  { method: 'getBackImageRepeat()/setBackImageRepeat(cssText)', param: "'repeat'|'no-repeat'|'cover'|'contain'", return: 'string|void', explain: '반복/사이즈 모드.' },
  { method: 'getBackImageWidth()/setBackImageWidth(css)', param: 'string', return: 'string|void', explain: 'background-size 너비.' },
  { method: 'getBackImageAlign()/setBackImageAlign(x)', param: "'left'|'center'|'right'", return: 'string|void', explain: '수평정렬.' },
  { method: 'getBackImageVerticalAlign()/setBackImageVerticalAlign(y)', param: "'top'|'center'|'bottom'", return: 'string|void', explain: '수직정렬.' },
  { method: 'getBackColor()/setBackColor(color)', param: 'string', return: 'string|void', explain: '배경색/테마 키.' },
  { method: 'isBorder()/setBorder(v)', param: 'boolean', return: 'boolean|void', explain: '보더 표시 토글.' },
  { method: 'getHeight()/setHeight(css)', param: 'string', return: 'string|void', explain: '컨테이너 높이.' },
]
const methodDataEn = [
  { method: 'getType()', param: '-', return: "'layout'", explain: 'Type literal.' },
  { method: 'setVisible(v)', param: 'boolean', return: 'void', explain: 'Show/Hide.' },
  { method: 'getBackImageSrc()/setBackImageSrc(src)', param: 'string', return: 'string|void', explain: 'Background image URL.' },
  { method: 'getBackImageRepeat()/setBackImageRepeat(cssText)', param: "'repeat'|'no-repeat'|'cover'|'contain'", return: 'string|void', explain: 'Repeat/size mode.' },
  { method: 'getBackImageWidth()/setBackImageWidth(css)', param: 'string', return: 'string|void', explain: 'background-size width.' },
  { method: 'getBackImageAlign()/setBackImageAlign(x)', param: "'left'|'center'|'right'", return: 'string|void', explain: 'Horizontal align.' },
  { method: 'getBackImageVerticalAlign()/setBackImageVerticalAlign(y)', param: "'top'|'center'|'bottom'", return: 'string|void', explain: 'Vertical align.' },
  { method: 'getBackColor()/setBackColor(color)', param: 'string', return: 'string|void', explain: 'Background color / theme key.' },
  { method: 'isBorder()/setBorder(v)', param: 'boolean', return: 'boolean|void', explain: 'Border toggle.' },
  { method: 'getHeight()/setHeight(css)', param: 'string', return: 'string|void', explain: 'Container height.' },
]

const colSlot: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '25%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '75%' },
]
const colProp: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '20%' },
  { id: 'type', header: 'type', dataType: 'text', width: '35%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '35%' },
]
const colEvent: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '35%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '30%' },
  { id: 'args', header: 'args', dataType: 'text', width: '35%' },
]
const colMethod: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '35%' },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '25%' },
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

    <!-- Demo layout -->
    <HLayout
      class="hison-col-6"
      back-color="primary"
      style="height: 150px;"
    >
      <HLabel
        class=" hison-pos-center hison-pos-vertical-center"
        :background-type="'filled'"
      >hison-col-6, backColor primary Layout</HLabel>
    </HLayout>
    <HLayout
      class="hison-col-6"
      back-color="muted"
      style="height: 150px;"
    >
      <HLabel
        class="hison-color-muted hison-pos-center hison-pos-vertical-center"
        :background-type="'filled'"
      >hison-col-6, backColor muted Layout</HLabel>
    </HLayout>
    <HLayout
      class="hison-col-6"
      back-color="info"
      style="height: 150px;"
    >
      <HLabel
        class="hison-color-info hison-pos-center hison-pos-vertical-center"
        :background-type="'filled'"
      >hison-col-6, backColor info Layout</HLabel>
    </HLayout>
    <HLayout
      class="hison-col-6"
      back-color="success"
      style="height: 150px;"
    >
      <HLabel
        class="hison-color-success hison-pos-center hison-pos-vertical-center"
        :background-type="'filled'"
      >hison-col-6, backColor success Layout</HLabel>
    </HLayout>
    <HLayout
      class="hison-col-6"
      back-color="danger"
      style="height: 150px;"
    >
      <HLabel
        class="hison-color-danger hison-pos-center hison-pos-vertical-center"
        :background-type="'filled'"
      >hison-col-6, backColor danger Layout</HLabel>
    </HLayout>
    <HLayout
      class="hison-col-6"
      back-color="warning"
      style="height: 150px;"
    >
      <HLabel
        class="hison-color-warning hison-pos-center hison-pos-vertical-center"
        :background-type="'filled'"
      >hison-col-6, backColor warning Layout</HLabel>
    </HLayout>

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.codeTitle }}</HCaption>
    <CodeParagraph :code="T.code" :dynamicWidth="false"/>

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.slots }}</HCaption>
    <HGrid
      id="layoutSlotGrid"
      :columns="colSlot"
      class="hison-col-12 hison-size-m"
      :height="'80px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountSlotGrid"
    />

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.props }}</HCaption>
    <HGrid
      id="layoutPropGrid"
      :columns="colProp"
      class="hison-col-12 hison-size-m"
      :height="'320px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountPropGrid"
    />

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.events }}</HCaption>
    <HGrid
      id="layoutEventGrid"
      :columns="colEvent"
      class="hison-col-12 hison-size-m"
      :height="'140px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />

    <HGap />
    <HCaption :level="6" class="hison-col-12">{{ T.methods }}</HCaption>
    <HGrid
      id="layoutMethodGrid"
      :columns="colMethod"
      class="hison-col-12 hison-size-m"
      :height="'300px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped></style>