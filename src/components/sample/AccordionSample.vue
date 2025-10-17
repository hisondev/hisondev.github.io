<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue';
import CodeParagraph from '../CodeParagraph.vue';

const props = defineProps<{
    lang: string
}>()

const ko = {
  t1000:
`하단은 HAccordion 컴포넌트입니다.

HAccordion은 고정된 헤더와 확장/축소 가능한 본문(body)을 가진 경량형 아코디언 컴포넌트입니다.
헤더 제목은 title prop 또는 #title 슬롯을 통해 렌더링되며, 본문은 기본 슬롯(default slot)을 사용하여 자유롭게 다른 컴포넌트(HLayout, HInput, HButton, HDropdown 등)를 배치할 수 있습니다.
확장/축소 애니메이션은 순수 CSS(0fr ↔ 1fr)로 구현되며, 각 인스턴스별로 지속 시간(duration)과 이징(easing)을 제어할 수 있습니다.`,
  t1010:
`이것은 HAccordion 입니다.`,
  t1020:
`여기는 HAccordion layout 영역입니다.`,
  t1030:
`주요 특징

· 고정 헤더 + 확장/축소 본문
· 어떤 레이아웃이나 컴포넌트든 자유롭게 포함할 수 있는 유연한 콘텐츠 슬롯
· 헤더 텍스트 정렬 지원 (left / center / right)
· 순수 CSS 전환 애니메이션 (기본: 0.5초 / ease)
  → 인스턴스별로 duration, easing 설정 가능
· 런타임 제어 API 제공: hison.component.getAccordion(id)
· 기본 토글 아이콘(▾) 포함, #toggle 슬롯으로 교체 가능
· 반응형 클래스 시스템(hison-*) 및 자동 색상/사이즈 테마 접미사(-accordion) 지원`,
  t1040:
`템플렛 사용 예시`,
  c1040:
`<HAccordion id="acc" title="Advanced" :defaultOpen="true">
  <template #toggle>
    <HButton class="hison-color-success" text="Toggle" />
  </template>
  <div>여기에 어떤 콘텐츠든 배치할 수 있습니다…</div>
</HAccordion>`,
  t1050:
`런타임 사용 예시`,
  c1050:
`const acc = hison.component.getAccordion('acc')
acc.open()
acc.setTitle('Advanced Filters')
acc.setTextAlign('right')
acc.setDuration(800)
acc.setEasing('ease-in-out')`,
  t1100:
`slot`,
  t1200:
`props`,
  t1300:
`event emit`,
  t1400:
`component methods`,
}

const en = {
  t1000:
`Below is the HAccordion component.

HAccordion is a lightweight accordion component with a fixed header and an expandable/collapsible body.
The header title is rendered via the \`title\` prop or the \`#title\` slot, while the body uses the default slot to freely include other components such as HLayout, HInput, HButton, or HDropdown.
The expand/collapse animation is implemented purely in CSS (0fr ↔ 1fr), and each instance can control its own duration and easing.`,
  t1010:
`This is HAccordion.`,
  t1020:
`This is the HAccordion layout area.`,
  t1030:
`Main Features

· Fixed header + expandable/collapsible body  
· Flexible content slot allowing any layout or component  
· Header text alignment options (left / center / right)  
· Pure CSS transition animation (default: 0.5s / ease)  
  → Per-instance control of duration and easing  
· Runtime control API: hison.component.getAccordion(id)  
· Includes default toggle icon (▾), replaceable via #toggle slot  
· Supports responsive class system (hison-*) and automatic color/size theme suffix (-accordion)`,
  t1040:
`Template Example`,
  c1040:
`<HAccordion id="acc" title="Advanced" :defaultOpen="true">
  <template #toggle>
    <HButton class="hison-color-success" text="Toggle" />
  </template>
  <div>You can place any content here…</div>
</HAccordion>`,
  t1050:
`Runtime Example`,
  c1050:
`const acc = hison.component.getAccordion('acc')
acc.open()
acc.setTitle('Advanced Filters')
acc.setTextAlign('right')
acc.setDuration(800)
acc.setEasing('ease-in-out')`,
  t1100:
`slot`,
  t1200:
`props`,
  t1300:
`event emit`,
  t1400:
`component methods`,
}

const slotGridDataKo = [
  {
    slot: "#title",
    explain: "헤더 제목 영역 전체를 교체합니다. 제공되지 않으면 title prop을 사용합니다."
  },
  {
    slot: "#toggle",
    explain: "오른쪽의 토글 UI를 교체합니다. 기본값은 HDropdown과 동일한 클래스의 꺾쇠(▾)입니다."
  },
  {
    slot: "default",
    explain: "본문 내용 영역입니다. 어떤 컴포넌트든 배치할 수 있습니다."
  }
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. 런타임에서 hison.component.getAccordion(id)로 접근합니다." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "추가 클래스. hison-* 반응형 시스템을 지원합니다." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 컨테이너 스타일. CSS 변수 --hacc-duration, --hacc-easing 사용." },
  { prop: "headerStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "헤더 영역 인라인 스타일." },
  { prop: "contentStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "본문 영역 인라인 스타일." },
  { prop: "visible", type: "boolean", default: "true", explain: "컴포넌트의 표시 여부." },
  { prop: "defaultOpen", type: "boolean", default: "false", explain: "초기 열린 상태 여부." },
  { prop: "title", type: "string", default: "''", explain: "#title 슬롯이 없을 때 사용되는 헤더 제목." },
  { prop: "textAlign", type: "'left' | 'center' | 'right'", default: "'left'", explain: "헤더 제목 정렬 방향." },
  { prop: "animate", type: "boolean", default: "true", explain: "확장/축소 애니메이션 사용 여부." },
  { prop: "duration", type: "number", default: "500", explain: "애니메이션 지속 시간(ms). CSS 변수 --hacc-duration에 반영됨." },
  { prop: "easing", type: "string", default: "'ease'", explain: "CSS 타이밍 함수. CSS 변수 --hacc-easing에 반영됨." }
]

const eventGridDataKo = [
  { event: "mounted", trigger: "컴포넌트가 마운트될 때", args: "(HAccordionMethods)" },
  { event: "responsive-change", trigger: "디바이스 브레이크포인트 변경 시", args: "('mb' | 'tb' | 'pc' | 'wd')" },
  { event: "open", trigger: "본문이 펼쳐질 때", args: "(Event | null, HAccordionMethods)" },
  { event: "close", trigger: "본문이 닫힐 때", args: "(Event | null, HAccordionMethods)" },
  { event: "toggle", trigger: "헤더 클릭/Enter/Space 키로 토글 시", args: "(MouseEvent | KeyboardEvent, HAccordionMethods)" }
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'accordion'", explain: "컴포넌트 타입 리터럴('accordion')을 반환합니다." },
  { method: "isOpen()", param: "-", return: "boolean", explain: "아코디언이 현재 열려 있는지 여부를 반환합니다." },
  { method: "open(e?)", param: "Event | null", return: "void", explain: "아코디언 본문을 애니메이션과 함께 펼칩니다." },
  { method: "close(e?)", param: "Event | null", return: "void", explain: "아코디언 본문을 애니메이션과 함께 닫습니다." },
  { method: "toggle(e?)", param: "Event | null", return: "void", explain: "본문의 열림/닫힘 상태를 전환합니다." },
  { method: "getTitle()", param: "-", return: "string", explain: "현재 헤더 제목(`title` 상태)을 반환합니다." },
  { method: "setTitle(text)", param: "string", return: "void", explain: "헤더 제목을 변경합니다. 단, `#title` 슬롯이 있으면 화면에는 반영되지 않습니다." },
  { method: "getTextAlign()", param: "-", return: "'left' | 'center' | 'right'", explain: "현재 헤더 텍스트 정렬 상태를 반환합니다." },
  { method: "setTextAlign(v)", param: "'left' | 'center' | 'right'", return: "void", explain: "헤더 텍스트 정렬 방향을 설정합니다." },
  { method: "getAnimate()", param: "-", return: "boolean", explain: "애니메이션 활성화 여부를 반환합니다." },
  { method: "setAnimate(v)", param: "boolean", return: "void", explain: "확장/축소 애니메이션을 활성화하거나 비활성화합니다." },
  { method: "getDuration()", param: "-", return: "number", explain: "애니메이션 지속 시간(ms)을 반환합니다." },
  { method: "setDuration(ms)", param: "number", return: "void", explain: "애니메이션 지속 시간(ms)을 설정합니다." },
  { method: "getEasing()", param: "-", return: "string", explain: "현재 애니메이션의 CSS 타이밍 함수를 반환합니다." },
  { method: "setEasing(fn)", param: "string", return: "void", explain: "애니메이션에 사용할 CSS 타이밍 함수를 설정합니다. (예: 'ease', 'linear')" },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "현재 요소의 tabIndex를 반환합니다. (null이면 포커스 불가)" },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "요소의 tabIndex를 설정합니다. null이면 제거됩니다." },
  { method: "focus()", param: "-", return: "void", explain: "아코디언 헤더에 키보드 포커스를 이동시킵니다." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "컴포넌트가 현재 표시되고 있는지 여부를 반환합니다." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "컴포넌트를 표시하거나 숨깁니다." },
  { method: "getId()", param: "-", return: "string", explain: "컴포넌트의 고유 ID를 반환합니다." },
  { method: "reload()", param: "-", return: "void", explain: "컴포넌트를 강제로 재렌더링(언마운트 후 리마운트)합니다." }
]


const slotGridDataEn = [
  {
    slot: "#title",
    explain: "Replaces the entire header title area. Falls back to the title prop if not provided."
  },
  {
    slot: "#toggle",
    explain: "Replaces the toggle UI on the right. Defaults to a caret (▾) with the same class as HDropdown."
  },
  {
    slot: "default",
    explain: "The main body area where any components can be placed."
  }
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Accessible at runtime via hison.component.getAccordion(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Additional CSS classes. Supports the hison-* responsive system." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Root container style. Uses CSS variables --hacc-duration and --hacc-easing." },
  { prop: "headerStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for the header area." },
  { prop: "contentStyle", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline style for the body (content) area." },
  { prop: "visible", type: "boolean", default: "true", explain: "Controls whether the component is visible." },
  { prop: "defaultOpen", type: "boolean", default: "false", explain: "Sets the initial open state." },
  { prop: "title", type: "string", default: "''", explain: "Header title text, used when the #title slot is not provided." },
  { prop: "textAlign", type: "'left' | 'center' | 'right'", default: "'left'", explain: "Header title text alignment." },
  { prop: "animate", type: "boolean", default: "true", explain: "Enables or disables the expand/collapse animation." },
  { prop: "duration", type: "number", default: "500", explain: "Animation duration in milliseconds. Applied via CSS variable --hacc-duration." },
  { prop: "easing", type: "string", default: "'ease'", explain: "CSS timing function. Applied via CSS variable --hacc-easing." }
]

const eventGridDataEn = [
  { event: "mounted", trigger: "When the component is mounted.", args: "(HAccordionMethods)" },
  { event: "responsive-change", trigger: "When the device breakpoint changes.", args: "('mb' | 'tb' | 'pc' | 'wd')" },
  { event: "open", trigger: "When the accordion body is expanded.", args: "(Event | null, HAccordionMethods)" },
  { event: "close", trigger: "When the accordion body is collapsed.", args: "(Event | null, HAccordionMethods)" },
  { event: "toggle", trigger: "When toggled via header click or Enter/Space key.", args: "(MouseEvent | KeyboardEvent, HAccordionMethods)" }
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'accordion'", explain: "Returns the component type literal ('accordion')." },
  { method: "isOpen()", param: "-", return: "boolean", explain: "Returns whether the accordion body is currently expanded." },
  { method: "open(e?)", param: "Event | null", return: "void", explain: "Expands the accordion body with animation (if enabled)." },
  { method: "close(e?)", param: "Event | null", return: "void", explain: "Collapses the accordion body with animation (if enabled)." },
  { method: "toggle(e?)", param: "Event | null", return: "void", explain: "Toggles the accordion body between expanded and collapsed." },
  { method: "getTitle()", param: "-", return: "string", explain: "Returns the current header title from the internal state." },
  { method: "setTitle(text)", param: "string", return: "void", explain: "Updates the header title text. If a #title slot is used, this will not affect the visible header." },
  { method: "getTextAlign()", param: "-", return: "'left' | 'center' | 'right'", explain: "Returns the current header text alignment." },
  { method: "setTextAlign(v)", param: "'left' | 'center' | 'right'", return: "void", explain: "Sets the header text alignment direction." },
  { method: "getAnimate()", param: "-", return: "boolean", explain: "Returns whether the expand/collapse animation is enabled." },
  { method: "setAnimate(v)", param: "boolean", return: "void", explain: "Enables or disables expand/collapse animation." },
  { method: "getDuration()", param: "-", return: "number", explain: "Returns the animation duration in milliseconds." },
  { method: "setDuration(ms)", param: "number", return: "void", explain: "Sets the animation duration in milliseconds." },
  { method: "getEasing()", param: "-", return: "string", explain: "Returns the current CSS timing function used for animation." },
  { method: "setEasing(fn)", param: "string", return: "void", explain: "Sets the CSS timing function for animation (e.g., 'ease', 'linear')." },
  { method: "getTabIndex()", param: "-", return: "number | null", explain: "Returns the current tabIndex. Null means the element is not focusable." },
  { method: "setTabIndex(v)", param: "number | null", return: "void", explain: "Sets the tabIndex for the element. Null removes the attribute." },
  { method: "focus()", param: "-", return: "void", explain: "Moves focus to the accordion header for accessibility/keyboard use." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Returns whether the component is currently visible." },
  { method: "setVisible(visible)", param: "boolean", return: "void", explain: "Shows or hides the component." },
  { method: "getId()", param: "-", return: "string", explain: "Returns the unique ID of the component." },
  { method: "reload()", param: "-", return: "void", explain: "Forces the component to re-render (unmount and remount internally)." }
]

const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '20%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '80%' },
];
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
};

const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '10%' },
  { id: 'type', header: 'type', dataType: 'text', width: '25%' },
  { id: 'default', header: 'default', dataType: 'text', width: '5%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '60%' },
];
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
};

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '10%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '35%' },
  { id: 'args', header: 'args', dataType: 'text', width: '55%' },
];
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
};

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '15%' },
  { id: 'param', header: 'param', dataType: 'text', width: '15%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '55%' },
];
const mountMethodGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? methodGridDataEn : methodGridDataKo)
};

const contents = props.lang === 'en' ? en : ko
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>
    <HGap/>
    <HAccordion
        :title="contents.t1010"
    >
        <HLayout class="hison-col-12" style="height: 100px; padding-top: 0;">
            <HParagraph>{{ contents.t1020 }}</HParagraph>
        </HLayout>
    </HAccordion>
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1030 }}</HParagraph>
    <HParagraph class="hison-col-12">{{ contents.t1040 }}</HParagraph>
    <CodeParagraph :code="contents.c1040"/>
    <HParagraph class="hison-col-12">{{ contents.t1050 }}</HParagraph>
    <CodeParagraph :code="contents.c1050"/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
        id="accordionSlotGrid"
        :columns="slotColumn"
        class="hison-col-12 hison-size-s"
        :height="'150px'"
        :rownum-visible="false"
        :status-visible="false"
        :locked="true"
        :locked-color="false"
        @mounted="mountSlotGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
        id="accordionPropGrid"
        :columns="propColumn"
        class="hison-col-12 hison-size-s"
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
        id="accordionEventGrid"
        :columns="eventColumn"
        class="hison-col-12 hison-size-s"
        :height="'200px'"
        :rownum-visible="false"
        :status-visible="false"
        :locked="true"
        :locked-color="false"
        @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
        id="accordionMethodGrid"
        :columns="methodColumn"
        class="hison-col-12 hison-size-s"
        :height="'350px'"
        :rownum-visible="false"
        :status-visible="false"
        :locked="true"
        :locked-color="false"
        @mounted="mountMethodGrid"
    />
  </HLayout>
</template>

<style scoped>
</style>