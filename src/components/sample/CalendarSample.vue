<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

const ko = {
  t1000:
`하단은 HCalendar(캘린더) 컴포넌트입니다. (vue-cal@^4.10.2 기반)

HCalendar는 vue-cal 위에 구축된 풀기능 캘린더로, 여러 뷰(day/week/month/year/years), 이벤트 스케줄링, 특수 시간대 하이라이트, 로케일, 동적 런타임 제어(HCalendarMethods)를 지원합니다.
문서에 없는 vue-cal의 프롭/이벤트도 그대로 전달되어 사용할 수 있습니다(패스스루).`,
  t1010: `이것은 HCalendar 라이브 데모입니다.`,
  t1030:
`주요 특징

· 뷰: 'day' | 'week' | 'month' | 'year' | 'years'
· 런타임 제어: hison.component.getCalendar(id)
· 반응형 클래스(hison-col-*, hison-size-*, …)
· 주말 색상/특수 시간대/선택 색상 등 시각 커스텀
· 이벤트 렌더링 및 편집(resizable/deletable 등)
· vue-cal 프롭/이벤트 패스스루(문서에 없더라도 그대로 사용 가능)`,
  t1040: `템플릿 사용 예시`,
  c1040:
`<HCalendar
  id="calendar1"
  class="hison-col-12"
  :selectedDate="today"
  :events="myEvents"
  :specialTime="highlightedRanges"
  weekendColor="#f55"
  :weekendDays="[0, 6]"
  :showTodayColor="true"
  :hideWeekdays="[2]"
  :disableDays="['2025-06-30']"
  :visible="true"
  :disable="false"
  :startWeekOnSunday="false"
  :locale="'ko'"
  activeView="month"
  :disableViews="['year', 'years']"
  @day-click="handleDayClick"
/>`,
  t1050: `런타임 사용 예시`,
  c1050:
`const calendar = hison.component.getCalendar('calendar1')
calendar.setVisible(false)
calendar.setDisable(true)
calendar.setSelectedDate('2025-07-01')
calendar.setEvents([{ start: '2025-07-02', end: '2025-07-02', title: 'Meeting' }])
calendar.setTimeFormat('HH:mm')
calendar.setActiveView('week')`,
  t1055: `관련 Interface`,
  c1055:
`/**
 * 특정 요일의 특별한 시간 구간을 정의합니다.
 * 점심시간, 점검 시간 등 특정 시간대를 강조 표시할 때 사용되며,
 * 해당 구간에 사용자 정의 배경색이나 클래스를 적용할 수 있습니다.
 *
 * - 시간 단위는 자정(0분) 기준 **분 단위(0–1440)** 입니다.
 * - 'className'을 사용하여 해당 시간 구간에 특정 CSS 스타일을 적용할 수 있습니다.
 *
 * @example
 * {
 *   from: 12 * 60,     // 12:00 PM
 *   to: 13 * 60,       // 1:00 PM
 *   className: 'lunch-time'
 * }
 */
export type HCalendarSpecialTime = {
  from: number
  to: number
  className?: string
}

/**
 * 요일별로 특별한 시간 구간을 매핑합니다.
 * 각 요일에 대해 사용자 정의 시간대(스타일 포함)를 지정할 수 있습니다.
 *
 * - 키 값은 0(일요일)부터 6(토요일)까지입니다.
 * - 값은 'HCalendarSpecialTime' 객체 배열입니다.
 *
 * @example
 * {
 *   1: [ { from: 720, to: 780, className: 'meeting-block' } ],  // 월요일 12:00–13:00
 *   5: [ { from: 1080, to: 1140 } ]                             // 금요일 18:00–19:00
 * }
 */
export type HCalendarSpecialTimeMap =  { [key in DayOfWeek]?: HCalendarSpecialTime[] }

/**
 * 달력에 표시되는 이벤트(일정)를 정의합니다.
 *
 * 'start'와 'end' 필드는 날짜 문자열(예: '2025-06-16 10:00') 또는 JavaScript 'Date' 객체를 모두 지원합니다.
 *
 * 선택적 필드를 통해 이벤트의 표시 방식이나 상호작용을 제어할 수 있습니다.
 * 이는 'vue-cal'의 동작과 직접적으로 매핑됩니다.
 *
 * @example
 * {
 *   start: '2025-07-01 09:00',
 *   end: '2025-07-01 10:30',
 *   title: '팀 미팅',
 *   background: true,
 *   deletable: true,
 *   class: 'event-blue'
 * }
 */
export type HCalendarEvent = {
  start: Date | string;
  end: Date | string;
  title?: string;
  content?: string;
  class?: string;
  /**
   * true일 경우, 이벤트는 배경 강조 영역으로 처리됩니다.
   * 블록 형태로 표시되지 않으며, 배경 영역의 색상만 변경됩니다.
   */
  background?: boolean;
  /**
   * 'vue-cal'의 스케줄 그룹핑 또는 외부 일정 로직과 연결할 때 사용하는 선택적 속성입니다.
   */
  schedule?: number;
  /**
   * true일 경우, 이벤트는 특정 시간이 아닌 하루 종일 지속되는 일정으로 표시됩니다.
   */
  allDay?: boolean;
  /**
   * true일 경우, 사용자가 이 이벤트를 삭제할 수 있습니다.
   */
  deletable?: boolean;
  /**
   * true일 경우, 사용자가 이 이벤트의 크기를 조절할 수 없습니다.
   */
  resizable?: boolean;
}`,
  t1060:
`호환성 안내

· 문서에 기재되지 않은 vue-cal 프롭/이벤트도 그대로 전달되어 동작합니다.
· 전체 옵션은 vue-cal 공식 문서(antoniandre.github.io/vue-cal)를 참고하세요.`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const en = {
  t1000:
`Below is the HCalendar component (built on vue-cal@^4.10.2).

HCalendar is a fully-featured calendar on top of vue-cal, supporting multiple views (day/week/month/year/years), event scheduling, special time ranges, localization, and runtime control via HCalendarMethods.
Any vue-cal props/events not listed here are transparently passed through.`,
  t1010: `This is the HCalendar live demo.`,
  t1030:
`Main Features

· Views: 'day' | 'week' | 'month' | 'year' | 'years'
· Runtime control: hison.component.getCalendar(id)
· Responsive classes (hison-col-*, hison-size-*, …)
· Weekend colors / special time / selected color customization
· Event rendering & editing (resizable/deletable, etc.)
· Pass-through for vue-cal props/events`,
  t1040: `Template Example`,
  c1040:
`<HCalendar
  id="calendar1"
  class="hison-col-12"
  :selectedDate="today"
  :events="myEvents"
  :specialTime="highlightedRanges"
  weekendColor="#f55"
  :weekendDays="[0, 6]"
  :showTodayColor="true"
  :hideWeekdays="[2]"
  :disableDays="['2025-06-30']"
  :visible="true"
  :disable="false"
  :startWeekOnSunday="false"
  :locale="'en'"
  activeView="month"
  :disableViews="['year', 'years']"
  @day-click="handleDayClick"
/>`,
  t1050: `Runtime Example`,
  c1050:
`const calendar = hison.component.getCalendar('calendar1')
calendar.setVisible(false)
calendar.setDisable(true)
calendar.setSelectedDate('2025-07-01')
calendar.setEvents([{ start: '2025-07-02', end: '2025-07-02', title: 'Meeting' }])
calendar.setTimeFormat('HH:mm')
calendar.setActiveView('week')`,
  t1055: `Related Interface`,
  c1055:
`/**
 * Defines a special time block on a specific day.
 * This can be used to highlight time ranges (e.g., lunch breaks, maintenance periods)
 * with a custom background color or class.
 *
 * - Time units are in **minutes** from midnight (0–1440).
 * - Use 'className' to apply specific CSS styling to that time range.
 *
 * @example
 * {
 *   from: 12 * 60,     // 12:00 PM
 *   to: 13 * 60,       // 1:00 PM
 *   className: 'lunch-time'
 * }
 */
export type HCalendarSpecialTime = {
  from: number
  to: number
  className?: string
}

/**
 * Maps days of the week to arrays of special time blocks.
 * Allows you to specify custom time ranges (with styles) for each day.
 *
 * - Keys are 0 (Sunday) through 6 (Saturday).
 * - Values are arrays of 'HCalendarSpecialTime' entries.
 *
 * @example
 * {
 *   1: [ { from: 720, to: 780, className: 'meeting-block' } ],  // Monday 12:00–13:00
 *   5: [ { from: 1080, to: 1140 } ]                             // Friday 18:00–19:00
 * }
 */
export type HCalendarSpecialTimeMap =  { [key in DayOfWeek]?: HCalendarSpecialTime[] }

/**
 * Defines a calendar event shown on the calendar.
 *
 * Supports both formatted date strings (e.g., '2025-06-16 10:00')
 * and JavaScript 'Date' objects for 'start' and 'end' fields.
 *
 * Optional fields can control how the event is rendered or interacted with.
 * These map directly to 'vue-cal' behavior.
 *
 * @example
 * {
 *   start: '2025-07-01 09:00',
 *   end: '2025-07-01 10:30',
 *   title: 'Team Meeting',
 *   background: true,
 *   deletable: true,
 *   class: 'event-blue'
 * }
 */
export type HCalendarEvent = {
  start: Date | string;
  end: Date | string;
  title?: string;
  content?: string;
  class?: string;
  /**
   * If true, the event is treated as a background highlight.
   * Does not display as a block, but colors the background area.
   */
  background?: boolean;
  /**
   * Optional 'vue-cal' property to group events or apply external schedule logic.
   */
  schedule?: number;
  /**
   * If true, the event spans the whole day without a specific time.
   */
  allDay?: boolean;
  /**
   * If true, the user can delete this event.
   */
  deletable?: boolean;
  /**
   * If true, the user cannot resize this event.
   */
  resizable?: boolean;
}`,
  t1060:
`Compatibility

· vue-cal props/events not listed here are passed through and will work as-is.
· See the official vue-cal docs (antoniandre.github.io/vue-cal) for complete options.`,
  t1100: `slot`,
  t1200: `props`,
  t1300: `event emit`,
  t1400: `component methods`,
}

const slotGridDataKo = [
  { slot: "default", explain: "vue-cal 영역. (필요 시 vue-cal 슬롯도 패스스루 가능)" },
]

const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "고유 식별자. hison.component.getCalendar(id)로 런타임 접근." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "추가/반응형 클래스(hison-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "인라인 스타일." },

  { prop: "visible", type: "boolean", default: "true", explain: "캘린더 표시 여부." },
  { prop: "disable", type: "boolean", default: "false", explain: "캘린더 비활성 여부." },
  { prop: "selectedDate", type: "string | Date", default: "undefined", explain: "초기 선택 날짜." },
  { prop: "events", type: "HCalendarEvent[]", default: "[]", explain: "표시할 이벤트 목록." },
  { prop: "weekendColor", type: "string", default: "undefined", explain: "주말 배경 색상." },
  { prop: "weekendDays", type: "number[]", default: "undefined", explain: "주말로 간주할 요일 인덱스(0~6)." },
  { prop: "showTodayColor", type: "boolean", default: "true", explain: "오늘 배경 하이라이트 표시." },
  { prop: "selectedColor", type: "string", default: "undefined", explain: "선택일 배경 색상." },
  { prop: "specialTime", type: "HCalendarSpecialTimeMap", default: "undefined", explain: "요일별 특수 시간대 맵." },
  { prop: "dateCellMinHeight", type: "number", default: "undefined", explain: "월 뷰 날짜 셀 최소 높이(px)." },
  { prop: "dateCellMaxHeight", type: "number", default: "undefined", explain: "월 뷰 날짜 셀 최대 높이(px)." },
  { prop: "disableDays", type: "string[]", default: "undefined", explain: "선택 불가 날짜 목록." },
  { prop: "eventsOnMonthView", type: "string | boolean", default: "false", explain: "월 뷰 이벤트 표시 방식(false/'short'/기타)." },
  { prop: "hideWeekdays", type: "number[]", default: "undefined", explain: "숨길 요일 인덱스 배열(0=일…6=토)." },
  { prop: "hideWeekends", type: "boolean", default: "false", explain: "주말 숨김 여부." },
  { prop: "locale", type: "string", default: "'en'", explain: "로케일." },
  { prop: "maxDate", type: "string | Date", default: "undefined", explain: "선택 가능한 최대 날짜." },
  { prop: "minDate", type: "string | Date", default: "undefined", explain: "선택 가능한 최소 날짜." },
  { prop: "startWeekOnSunday", type: "boolean", default: "false", explain: "주 시작 요일(일요일 시작 여부)." },
  { prop: "time", type: "boolean", default: "true", explain: "day/week 뷰에서 시간 셀 표시." },
  { prop: "timeCellHeight", type: "number", default: "undefined", explain: "시간 셀 높이(px)." },
  { prop: "timeFormat", type: "HCalendarTimeFormat", default: "undefined", explain: "시간 포맷." },
  { prop: "timeFrom", type: "number", default: "undefined", explain: "시작 시간(분 단위, 0~1440)." },
  { prop: "timeStep", type: "number", default: "undefined", explain: "시간 간격(분)." },
  { prop: "timeTo", type: "number", default: "undefined", explain: "끝 시간(분 단위, 0~1440)." },
  { prop: "hideTitleBar", type: "boolean", default: "false", explain: "타이틀 바 숨김." },
  { prop: "twelveHour", type: "boolean", default: "false", explain: "12시간제(AM/PM) 사용 여부." },
  { prop: "activeView", type: "'day'|'week'|'month'|'year'|'years'", default: "undefined", explain: "초기 뷰." },
  { prop: "disableViews", type: "Array<'day'|'week'|'month'|'year'|'years'>", default: "undefined", explain: "네비게이션에서 제외할 뷰 목록." },
]

const eventGridDataKo = [
  { event: "ready", trigger: "초기 렌더 후 1회", args: "{ view, startDate, endDate, week? }" },
  { event: "mounted", trigger: "캘린더 마운트 시", args: "-" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경", args: "-" },
  { event: "cell-click", trigger: "셀 클릭", args: "-" },
  { event: "view-change", trigger: "뷰 변경", args: "-" },
  { event: "nav-click", trigger: "네비게이션 화살표 클릭", args: "{ direction: 'prev'|'next' }" },
  { event: "title-click", trigger: "헤더 타이틀 클릭", args: "{ date, view }" },
  { event: "hour-click", trigger: "day/week 시간 슬롯 클릭", args: "{ date, view, hour }" },
  { event: "time-range-select", trigger: "드래그로 시간 범위 선택", args: "{ startDate, endDate }" },
  { event: "event-click", trigger: "이벤트 클릭", args: "(event)" },
  { event: "event-dblclick", trigger: "이벤트 더블클릭", args: "(event)" },
  { event: "event-create", trigger: "이벤트 생성 이후", args: "(event, action='click'|'drag')" },
  { event: "event-delete", trigger: "이벤트 삭제", args: "(event)" },
  { event: "event-update", trigger: "이벤트 이동/리사이즈 이후", args: "(event, domEvent?)" },
  { event: "event-drag-start", trigger: "이벤트 드래그 시작", args: "(event)" },
  { event: "event-drag", trigger: "이벤트 드래그 중", args: "(event)" },
  { event: "event-drag-end", trigger: "이벤트 드래그 종료", args: "(event)" },
  { event: "event-resize-start", trigger: "이벤트 리사이즈 시작", args: "(event)" },
  { event: "event-resize", trigger: "이벤트 리사이즈 중", args: "(event)" },
  { event: "event-resize-end", trigger: "이벤트 리사이즈 종료", args: "(event)" },
  { event: "event-mouse-enter", trigger: "이벤트 블록 hover-in", args: "(event, mouseEvent)" },
  { event: "event-mouse-leave", trigger: "이벤트 블록 hover-out", args: "(event, mouseEvent)" },
  { event: "cell-drag-start", trigger: "빈 셀 드래그 시작", args: "{ startDate, endDate, view }" },
  { event: "cell-drag", trigger: "빈 셀 드래그 중", args: "{ startDate, endDate, view }" },
  { event: "cell-drag-end", trigger: "빈 셀 드래그 종료", args: "{ startDate, endDate, view }" },
  { event: "cell-hover-in", trigger: "셀 hover-in", args: "{ date, view }" },
  { event: "cell-hover-out", trigger: "셀 hover-out", args: "{ date, view }" },
]

const methodGridDataKo = [
  { method: "getType()", param: "-", return: "'calendar'", explain: "컴포넌트 타입 리터럴('calendar')." },
  { method: "isDisable()", param: "-", return: "boolean", explain: "비활성 여부." },
  { method: "setDisable(disable)", param: "boolean", return: "void", explain: "비활성/활성 전환." },
  { method: "getSelectedDate(getDateType?, format?)", param: "boolean, string", return: "string | Date", explain: "현재 선택 날짜 조회." },
  { method: "setSelectedDate(selectedDate)", param: "string | Date", return: "void", explain: "선택 날짜 설정." },
  { method: "getEvents()", param: "-", return: "HCalendarEvent[]", explain: "이벤트 배열 조회." },
  { method: "setEvents(events)", param: "HCalendarEvent[]", return: "void", explain: "이벤트 배열 설정." },
  { method: "getSpecialTime()", param: "-", return: "HCalendarSpecialTimeMap", explain: "특수 시간대 맵 조회." },
  { method: "setSpecialTime(map)", param: "HCalendarSpecialTimeMap", return: "void", explain: "특수 시간대 설정." },
  { method: "getWeekendColor()", param: "-", return: "string | undefined", explain: "주말 배경색 조회." },
  { method: "setWeekendColor(css)", param: "string", return: "void", explain: "주말 배경색 설정." },
  { method: "getWeekendDays()", param: "-", return: "number[] | undefined", explain: "주말 요일 인덱스 조회." },
  { method: "setWeekendDays(days)", param: "number[]", return: "void", explain: "주말 요일 인덱스 설정." },
  { method: "isShowTodayColor()", param: "-", return: "boolean", explain: "오늘색 표시 여부." },
  { method: "setShowTodayColor(v)", param: "boolean", return: "void", explain: "오늘색 표시/숨김." },
  { method: "getSelectedColor()", param: "-", return: "string | undefined", explain: "선택일 배경색 조회." },
  { method: "setSelectedColor(css)", param: "string", return: "void", explain: "선택일 배경색 설정." },
  { method: "getDateCellMinHeight()", param: "-", return: "number | undefined", explain: "월 뷰 날짜 셀 최소 높이." },
  { method: "setDateCellMinHeight(px)", param: "number", return: "void", explain: "월 뷰 날짜 셀 최소 높이 설정." },
  { method: "getDateCellMaxHeight()", param: "-", return: "number | undefined", explain: "월 뷰 날짜 셀 최대 높이." },
  { method: "setDateCellMaxHeight(px)", param: "number", return: "void", explain: "월 뷰 날짜 셀 최대 높이 설정." },
  { method: "getDisableDays()", param: "-", return: "string[] | undefined", explain: "선택 불가 날짜 목록 조회." },
  { method: "setDisableDays(list)", param: "string[]", return: "void", explain: "선택 불가 날짜 목록 설정." },
  { method: "getEventsOnMonthView()", param: "-", return: "string | boolean | undefined", explain: "월 뷰 이벤트 표시 방식 조회." },
  { method: "setEventsOnMonthView(v)", param: "string | boolean", return: "void", explain: "월 뷰 이벤트 표시 방식 설정." },
  { method: "getHideWeekdays()", param: "-", return: "number[] | undefined", explain: "숨김 요일 조회." },
  { method: "setHideWeekdays(days)", param: "number[]", return: "void", explain: "숨김 요일 설정." },
  { method: "getHideWeekends()", param: "-", return: "boolean", explain: "주말 숨김 여부 조회." },
  { method: "setHideWeekends(v)", param: "boolean", return: "void", explain: "주말 숨김 설정." },
  { method: "getLocale()", param: "-", return: "string", explain: "현재 로케일." },
  { method: "setLocale(locale)", param: "string", return: "void", explain: "로케일 변경." },
  { method: "getMaxDate(getDateType?)", param: "boolean", return: "string | Date | undefined | null", explain: "최대 선택일 조회." },
  { method: "setMaxDate(date)", param: "string | Date", return: "void", explain: "최대 선택일 설정." },
  { method: "getMinDate(getDateType?)", param: "boolean", return: "string | Date | undefined | null", explain: "최소 선택일 조회." },
  { method: "setMinDate(date)", param: "string | Date", return: "void", explain: "최소 선택일 설정." },
  { method: "isStartWeekOnSunday()", param: "-", return: "boolean", explain: "일요일 시작 여부." },
  { method: "setStartWeekOnSunday(v)", param: "boolean", return: "void", explain: "주 시작 요일 설정." },
  { method: "isShowTimeCell()", param: "-", return: "boolean", explain: "시간 셀 표시 여부." },
  { method: "setShowTimeCell(v)", param: "boolean", return: "void", explain: "시간 셀 표시/숨김." },
  { method: "getTimeCellHeight()", param: "-", return: "number | undefined", explain: "시간 셀 높이 조회." },
  { method: "setTimeCellHeight(px)", param: "number", return: "void", explain: "시간 셀 높이 설정." },
  { method: "getTimeFormat()", param: "-", return: "HCalendarTimeFormat | HCalendarTimeFormatValue | undefined", explain: "시간 포맷 조회." },
  { method: "setTimeFormat(fmt)", param: "HCalendarTimeFormat", return: "void", explain: "시간 포맷 설정." },
  { method: "getTimeFrom()", param: "-", return: "number | undefined", explain: "시작 시간(분)." },
  { method: "setTimeFrom(min)", param: "number", return: "void", explain: "시작 시간 설정." },
  { method: "getTimeStep()", param: "-", return: "number | undefined", explain: "시간 간격(분)." },
  { method: "setTimeStep(min)", param: "number", return: "void", explain: "시간 간격 설정." },
  { method: "getTimeTo()", param: "-", return: "number | undefined", explain: "종료 시간(분)." },
  { method: "setTimeTo(min)", param: "number", return: "void", explain: "종료 시간 설정." },
  { method: "isHideTitleBar()", param: "-", return: "boolean", explain: "타이틀 바 숨김 여부." },
  { method: "setHideTitleBar(v)", param: "boolean", return: "void", explain: "타이틀 바 표시/숨김." },
  { method: "isTwelveHour()", param: "-", return: "boolean", explain: "12시간제 사용 여부." },
  { method: "setTwelveHour(v)", param: "boolean", return: "void", explain: "12시간제 설정." },
  { method: "getActiveView()", param: "-", return: "HCalendarViewValue", explain: "현재 활성 뷰." },
  { method: "setActiveView(view)", param: "HCalendarView | HCalendarViewValue", return: "void", explain: "활성 뷰 변경." },
  { method: "getDisableViews()", param: "-", return: "HCalendarView[] | HCalendarViewValue[] | undefined", explain: "비활성화된 뷰 목록." },
  { method: "setDisableViews(views)", param: "HCalendarView[]", return: "void", explain: "비활성화할 뷰 설정." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "표시 여부(공통)." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "표시/숨김(공통)." },
  { method: "getId()", param: "-", return: "string", explain: "고유 ID(공통)." },
  { method: "reload()", param: "-", return: "void", explain: "강제 리렌더(공통)." },
]

const slotGridDataEn = [
  { slot: "default", explain: "vue-cal render area. (You can pass vue-cal slots through if needed.)" },
]

const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Unique identifier. Access via hison.component.getCalendar(id)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Additional/responsive classes (hison-*)." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline CSS style." },

  { prop: "visible", type: "boolean", default: "true", explain: "Whether the calendar is shown." },
  { prop: "disable", type: "boolean", default: "false", explain: "Whether the calendar is disabled." },
  { prop: "selectedDate", type: "string | Date", default: "undefined", explain: "Initially selected date." },
  { prop: "events", type: "HCalendarEvent[]", default: "[]", explain: "Events to display." },
  { prop: "weekendColor", type: "string", default: "undefined", explain: "Weekend background color." },
  { prop: "weekendDays", type: "number[]", default: "undefined", explain: "Day indexes (0–6) treated as weekend." },
  { prop: "showTodayColor", type: "boolean", default: "true", explain: "Highlight today’s date." },
  { prop: "selectedColor", type: "string", default: "undefined", explain: "Selected date background color." },
  { prop: "specialTime", type: "HCalendarSpecialTimeMap", default: "undefined", explain: "Special time ranges by weekday." },
  { prop: "dateCellMinHeight", type: "number", default: "undefined", explain: "Min height (px) of month date cell." },
  { prop: "dateCellMaxHeight", type: "number", default: "undefined", explain: "Max height (px) of month date cell." },
  { prop: "disableDays", type: "string[]", default: "undefined", explain: "Disable selection for specific dates." },
  { prop: "eventsOnMonthView", type: "string | boolean", default: "false", explain: "Month view event rendering mode (false/'short'/others)." },
  { prop: "hideWeekdays", type: "number[]", default: "undefined", explain: "Weekday indexes to hide (0=Sun…6=Sat)." },
  { prop: "hideWeekends", type: "boolean", default: "false", explain: "Hide weekends." },
  { prop: "locale", type: "string", default: "'en'", explain: "Calendar language." },
  { prop: "maxDate", type: "string | Date", default: "undefined", explain: "Maximum selectable date." },
  { prop: "minDate", type: "string | Date", default: "undefined", explain: "Minimum selectable date." },
  { prop: "startWeekOnSunday", type: "boolean", default: "false", explain: "Start week on Sunday." },
  { prop: "time", type: "boolean", default: "true", explain: "Show time cells in day/week views." },
  { prop: "timeCellHeight", type: "number", default: "undefined", explain: "Height of time cell (px)." },
  { prop: "timeFormat", type: "HCalendarTimeFormat", default: "undefined", explain: "Time format pattern." },
  { prop: "timeFrom", type: "number", default: "undefined", explain: "Time axis start (minutes)." },
  { prop: "timeStep", type: "number", default: "undefined", explain: "Time slot interval (minutes)." },
  { prop: "timeTo", type: "number", default: "undefined", explain: "Time axis end (minutes)." },
  { prop: "hideTitleBar", type: "boolean", default: "false", explain: "Hide title bar." },
  { prop: "twelveHour", type: "boolean", default: "false", explain: "12-hour AM/PM format." },
  { prop: "activeView", type: "'day'|'week'|'month'|'year'|'years'", default: "undefined", explain: "Initial calendar view." },
  { prop: "disableViews", type: "Array<'day'|'week'|'month'|'year'|'years'>", default: "undefined", explain: "Views to disable from navigation." },
]

const eventGridDataEn = [
  { event: "ready", trigger: "After first render (once).", args: "{ view, startDate, endDate, week? }" },
  { event: "mounted", trigger: "When component mounts.", args: "-" },
  { event: "responsive-change", trigger: "On responsive device change.", args: "-" },
  { event: "cell-click", trigger: "On cell click.", args: "-" },
  { event: "view-change", trigger: "When view changes.", args: "-" },
  { event: "nav-click", trigger: "On nav arrow click.", args: "{ direction: 'prev'|'next' }" },
  { event: "title-click", trigger: "On header title click.", args: "{ date, view }" },
  { event: "hour-click", trigger: "On hour slot click.", args: "{ date, view, hour }" },
  { event: "time-range-select", trigger: "Drag to select time range.", args: "{ startDate, endDate }" },
  { event: "event-click", trigger: "On event click.", args: "(event)" },
  { event: "event-dblclick", trigger: "On event double click.", args: "(event)" },
  { event: "event-create", trigger: "After creating an event.", args: "(event, action='click'|'drag')" },
  { event: "event-delete", trigger: "When event deleted.", args: "(event)" },
  { event: "event-update", trigger: "After move/resize.", args: "(event, domEvent?)" },
  { event: "event-drag-start", trigger: "Event drag starts.", args: "(event)" },
  { event: "event-drag", trigger: "Event dragging.", args: "(event)" },
  { event: "event-drag-end", trigger: "Event drag ends.", args: "(event)" },
  { event: "event-resize-start", trigger: "Resize starts.", args: "(event)" },
  { event: "event-resize", trigger: "Resizing.", args: "(event)" },
  { event: "event-resize-end", trigger: "Resize ends.", args: "(event)" },
  { event: "event-mouse-enter", trigger: "Mouse enters event block.", args: "(event, mouseEvent)" },
  { event: "event-mouse-leave", trigger: "Mouse leaves event block.", args: "(event, mouseEvent)" },
  { event: "cell-drag-start", trigger: "Start dragging over empty cell.", args: "{ startDate, endDate, view }" },
  { event: "cell-drag", trigger: "Dragging over empty cells.", args: "{ startDate, endDate, view }" },
  { event: "cell-drag-end", trigger: "Finish dragging over cells.", args: "{ startDate, endDate, view }" },
  { event: "cell-hover-in", trigger: "Mouse enters a cell.", args: "{ date, view }" },
  { event: "cell-hover-out", trigger: "Mouse leaves a cell.", args: "{ date, view }" },
]

const methodGridDataEn = [
  { method: "getType()", param: "-", return: "'calendar'", explain: "Returns the component type literal ('calendar')." },
  { method: "isDisable()", param: "-", return: "boolean", explain: "Whether calendar is disabled." },
  { method: "setDisable(disable)", param: "boolean", return: "void", explain: "Enable/disable the calendar." },
  { method: "getSelectedDate(getDateType?, format?)", param: "boolean, string", return: "string | Date", explain: "Get selected date." },
  { method: "setSelectedDate(selectedDate)", param: "string | Date", return: "void", explain: "Set selected date." },
  { method: "getEvents()", param: "-", return: "HCalendarEvent[]", explain: "Get events array." },
  { method: "setEvents(events)", param: "HCalendarEvent[]", return: "void", explain: "Set events array." },
  { method: "getSpecialTime()", param: "-", return: "HCalendarSpecialTimeMap", explain: "Get special time map." },
  { method: "setSpecialTime(map)", param: "HCalendarSpecialTimeMap", return: "void", explain: "Set special time map." },
  { method: "getWeekendColor()", param: "-", return: "string | undefined", explain: "Get weekend color." },
  { method: "setWeekendColor(css)", param: "string", return: "void", explain: "Set weekend color." },
  { method: "getWeekendDays()", param: "-", return: "number[] | undefined", explain: "Get weekend day indexes." },
  { method: "setWeekendDays(days)", param: "number[]", return: "void", explain: "Set weekend day indexes." },
  { method: "isShowTodayColor()", param: "-", return: "boolean", explain: "Whether today is highlighted." },
  { method: "setShowTodayColor(v)", param: "boolean", return: "void", explain: "Show/hide today background." },
  { method: "getSelectedColor()", param: "-", return: "string | undefined", explain: "Get selected date color." },
  { method: "setSelectedColor(css)", param: "string", return: "void", explain: "Set selected date color." },
  { method: "getDateCellMinHeight()", param: "-", return: "number | undefined", explain: "Get month cell min height." },
  { method: "setDateCellMinHeight(px)", param: "number", return: "void", explain: "Set month cell min height." },
  { method: "getDateCellMaxHeight()", param: "-", return: "number | undefined", explain: "Get month cell max height." },
  { method: "setDateCellMaxHeight(px)", param: "number", return: "void", explain: "Set month cell max height." },
  { method: "getDisableDays()", param: "-", return: "string[] | undefined", explain: "Get disabled dates." },
  { method: "setDisableDays(list)", param: "string[]", return: "void", explain: "Set disabled dates." },
  { method: "getEventsOnMonthView()", param: "-", return: "string | boolean | undefined", explain: "Get month view event mode." },
  { method: "setEventsOnMonthView(v)", param: "string | boolean", return: "void", explain: "Set month view event mode." },
  { method: "getHideWeekdays()", param: "-", return: "number[] | undefined", explain: "Get hidden weekdays." },
  { method: "setHideWeekdays(days)", param: "number[]", return: "void", explain: "Set hidden weekdays." },
  { method: "getHideWeekends()", param: "-", return: "boolean", explain: "Get hide weekends state." },
  { method: "setHideWeekends(v)", param: "boolean", return: "void", explain: "Toggle hide weekends." },
  { method: "getLocale()", param: "-", return: "string", explain: "Get current locale." },
  { method: "setLocale(locale)", param: "string", return: "void", explain: "Set locale." },
  { method: "getMaxDate(getDateType?)", param: "boolean", return: "string | Date | undefined | null", explain: "Get max date." },
  { method: "setMaxDate(date)", param: "string | Date", return: "void", explain: "Set max date." },
  { method: "getMinDate(getDateType?)", param: "boolean", return: "string | Date | undefined | null", explain: "Get min date." },
  { method: "setMinDate(date)", param: "string | Date", return: "void", explain: "Set min date." },
  { method: "isStartWeekOnSunday()", param: "-", return: "boolean", explain: "Is week starting on Sunday." },
  { method: "setStartWeekOnSunday(v)", param: "boolean", return: "void", explain: "Set week start." },
  { method: "isShowTimeCell()", param: "-", return: "boolean", explain: "Show time cells." },
  { method: "setShowTimeCell(v)", param: "boolean", return: "void", explain: "Toggle time cells." },
  { method: "getTimeCellHeight()", param: "-", return: "number | undefined", explain: "Get time cell height." },
  { method: "setTimeCellHeight(px)", param: "number", return: "void", explain: "Set time cell height." },
  { method: "getTimeFormat()", param: "-", return: "HCalendarTimeFormat | HCalendarTimeFormatValue | undefined", explain: "Get time format." },
  { method: "setTimeFormat(fmt)", param: "HCalendarTimeFormat", return: "void", explain: "Set time format." },
  { method: "getTimeFrom()", param: "-", return: "number | undefined", explain: "Get time from (minutes)." },
  { method: "setTimeFrom(min)", param: "number", return: "void", explain: "Set time from (minutes)." },
  { method: "getTimeStep()", param: "-", return: "number | undefined", explain: "Get time step." },
  { method: "setTimeStep(min)", param: "number", return: "void", explain: "Set time step." },
  { method: "getTimeTo()", param: "-", return: "number | undefined", explain: "Get time to (minutes)." },
  { method: "setTimeTo(min)", param: "number", return: "void", explain: "Set time to (minutes)." },
  { method: "isHideTitleBar()", param: "-", return: "boolean", explain: "Hide title bar state." },
  { method: "setHideTitleBar(v)", param: "boolean", return: "void", explain: "Toggle title bar." },
  { method: "isTwelveHour()", param: "-", return: "boolean", explain: "Is 12-hour mode." },
  { method: "setTwelveHour(v)", param: "boolean", return: "void", explain: "Toggle 12-hour mode." },
  { method: "getActiveView()", param: "-", return: "HCalendarViewValue", explain: "Get active view." },
  { method: "setActiveView(view)", param: "HCalendarView | HCalendarViewValue", return: "void", explain: "Set active view." },
  { method: "getDisableViews()", param: "-", return: "HCalendarView[] | HCalendarViewValue[] | undefined", explain: "Get disabled views." },
  { method: "setDisableViews(views)", param: "HCalendarView[]", return: "void", explain: "Set disabled views." },
  { method: "isVisible()", param: "-", return: "boolean", explain: "Whether the component is visible (common)." },
  { method: "setVisible(v)", param: "boolean", return: "void", explain: "Show/hide the component (common)." },
  { method: "getId()", param: "-", return: "string", explain: "Return unique ID (common)." },
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
  { id: 'prop', header: 'prop', dataType: 'text', width: '12%' },
  { id: 'type', header: 'type', dataType: 'text', width: '36%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '42%' },
]
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}

const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '15%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '35%' },
  { id: 'args', header: 'args', dataType: 'text', width: '50%' },
]
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}

const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '22%' },
  { id: 'param', header: 'param', dataType: 'text', width: '23%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '40%' },
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
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HCalendar
      id="cal-demo"
      class="hison-col-12 hison-size-m"
      :visible="true"
      :disable="false"
      :selectedDate="new Date()"
      activeView="month"
      :showTodayColor="true"
      :time="true"
      :startWeekOnSunday="false"
      style="margin-bottom: 10px;"
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
    <HGap/>
    <HParagraph class="hison-col-12">{{ contents.t1060 }}</HParagraph>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="calendarSlotGrid"
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
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="calendarPropGrid"
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
      id="calendarEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'800px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="calendarMethodGrid"
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