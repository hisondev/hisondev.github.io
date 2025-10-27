<script setup lang="ts">
import { defineProps } from 'vue'
import type { HGridColumn, HGridMethods } from 'hisonvue'
import CodeParagraph from '../CodeParagraph.vue'

const props = defineProps<{ lang: string }>()

/* =========================================================
 * i18n copy
 * =======================================================*/
const ko = {
  t900:
`HGrid컴포넌트는 vanillagrid2의 정보를 참조하면 더 많은 세부 기능을 확인할 수 있습니다.`,
  t950:
`vanillagrid 바로가기`,
  t1000:
`하단은 HGrid(테이블/그리드) 컴포넌트입니다.

HGrid는 vanillagrid2 기반의 경량/고성능 그리드로, 컬럼 정의(HGridColumn[]),
정렬/필터/편집, 선택 정책, 고정 행/열, 되돌리기(redo) 등 다양한 기능을 제공합니다.
데이터는 v-model이 아닌 **런타임 메서드**로 제어하며,
hison.component.getGrid(id)로 GridMethods 인스턴스를 획득해 조작합니다.`,

  t1010: `이것은 HGrid 라이브 데모입니다.`,

  t1030:
`주요 특징

· 타입 컬럼 정의(HGridColumn[])와 풍부한 컬럼 옵션
· 편집/정렬/필터/선택 정책, 고정 행/열, 교차 색상(alternate row)
· 마우스/키보드 상호작용의 세밀한 훅(gridEventProps) 제공
· 헤더/바디/푸터/에디터 영역에 대한 스타일 세분화
· SSR 안전한 마운트 및 재로딩 API`,

  t1040: `템플릿 사용 예시`,
  c1040:
`<HGrid
  id="grid01"
  :columns="columns"
  :height="'220px'"
  :rownum-visible="true"
  :status-visible="false"
  :visible="true"
  :selection-policy="'range'"
  :sortable="true"
  :filterable="true"
  :beforeChange="beforeChange"
  :afterChange="afterChange"
  :beforeClickCell="beforeClickCell"
  @mounted="onMounted"
/>`,

  t1050: `런타임 사용 예시`,
  c1050:
`const grid = hison.component.getGrid('grid01')
grid.load([
  { id: 1, name: 'Alpha', qty: 10 },
  { id: 2, name: 'Beta',  qty: 20 },
]) //Record<string, any>[] 형태의 타입을 그리드 값으로 받습니다. hison.data.DataModel사용 가능
grid.setCellValue(0, 'qty', 11)
const r0 = grid.getRowData(0)
console.log(r0.name)  // 'Alpha'`,
  t1055: `연관 Interface`,
  c1055:
`/**
 * 컬럼에 대한 설정 정보를 정의합니다.
 */
export interface HGridColumn {
  /**
   * 필수값입니다. 컬럼의 id입니다.
   */
  id: string
  /**
   * 컬럼의 이름입니다. null인 경우, 그리드 Id가 자동으로 삽입됩니다.
   */
  name?: string
  /**
   * 헤더 텍스트 값입니다. 구분자는 ';'를 사용합니다.
   * 빈 값은 자동으로 병합됩니다.
   */
  header?: string
  /**
   * 푸터에 값을 삽입합니다. 구분자는 ';'를 사용합니다.
   * 일반 텍스트: 문자열을 그대로 푸터에 삽입합니다.
   * $$MAX: 최대값을 계산하여 푸터에 표시합니다.
   * $$MIN: 최소값을 계산하여 푸터에 표시합니다.
   * $$SUM: 합계를 계산하여 푸터에 표시합니다.
   * $$AVG: 평균값을 계산하여 푸터에 표시합니다(null 제외).
   */
  footer?: string
  /**
   * 컬럼의 타입을 설정합니다.
   * text: 텍스트 입력 타입. 더블클릭 시 textarea 입력창이 생성됩니다.
   * number: 숫자 입력 타입. 더블클릭 시 number 입력창이 생성됩니다.
   * date: 날짜 입력 타입. 더블클릭 시 date 입력창이 생성됩니다.
   * month: 월 입력 타입. 더블클릭 시 month 입력창이 생성됩니다.
   * mask: 포맷에 맞는 텍스트 입력 타입. 더블클릭 시 text 입력창이 생성되며 format 속성에 의해 제어됩니다.
   * select: 선택 입력 타입. 값 입력 시 옵션을 받습니다. 예) [{value:"val1", text:"text1", selected:true}, {value:"val2", text:"text2"}..]
   * checkbox: 체크박스 타입. grid info의 checkedValue와 일치하면 체크되고, 그렇지 않으면 해제됩니다.
   * button: 버튼 타입. 삽입된 값이 버튼의 innerText로 표시됩니다. 값이 없으면 버튼이 생성되지 않습니다.
   * link: a 태그 타입. {text:"text", value:"https://..", target:"_blank"} 형태의 객체를 삽입합니다.
   *       text는 innerText, value는 href, target은 target 속성으로 설정됩니다.
   * code: 지정된 코드 외의 값은 가질 수 없고 표시되지 않는 타입입니다.
   *       nullValue가 코드 목록에 없으면 허용되지 않으며, 빈 값은 default-code로 저장됩니다.
   */
  dataType?: string
  /**
   * untarget이 true이면, 이 컬럼의 셀은 선택할 수 없습니다.
   */
  untarget?: boolean
  /**
   * rowMerge가 true이면, 이 컬럼은 위의 셀과 값, 데이터 타입, 포맷이 동일할 경우 행을 병합합니다.
   */
  rowMerge?: boolean
  /**
   * colMerge가 true이면, 이 컬럼은 앞의 셀과 값, 데이터 타입, 포맷이 동일할 경우 열을 병합합니다.
   */
  colMerge?: boolean
  /**
   * visible이 false이면, 이 컬럼의 너비는 0이 되며 크기 변경이 불가능합니다(숨김 처리).
   */
  visible?: boolean
  /**
   * required가 true이면, checkRequired() 메서드를 통해 입력값을 검증할 수 있습니다.
   */
  required?: boolean
  /**
   * resizable이 false이면, 사용자가 이 컬럼의 너비를 변경할 수 없습니다.
   */
  resizable?: boolean
  /**
   * 사용자가 이 컬럼에 대해 정렬 기능을 사용할 수 있는지 여부를 설정합니다.
   */
  sortable?: boolean
  /**
   * 사용자가 이 컬럼에 대해 필터링 기능을 사용할 수 있는지 여부를 설정합니다.
   */
  filterable?: boolean
  /**
   * 컬럼의 너비를 설정합니다. cssText 형식으로 입력합니다.
   * 숫자만 입력할 경우 단위는 'px'입니다.
   */
  width?: string
  /**
   * 이 컬럼의 select 박스 너비를 설정합니다. cssText 형식으로 입력합니다.
   * 단위는 px 또는 %만 사용할 수 있습니다.
   */
  selectSize?: string
  /**
   * locked가 true이면, 이 컬럼의 셀은 변경할 수 없습니다.
   */
  locked?: boolean
  /**
   * lockedColor가 true이면, locked 상태일 때 해당 셀의 배경색이 표시됩니다.
   */
  lockedColor?: boolean
  /**
   * data-type이 mask, number인 컬럼의 포맷을 설정합니다.
   *
   * Mask 형식:
   * A: 대문자, a: 소문자, 9: 숫자, 그 외: 일치하는 문자.
   * 예) format: "AAA-991", value: "ABC-123456" => 결과: "ABC-12"
   *
   * 숫자 형식:
   * 정수부:
   * "#,###": 천 단위 구분 표시, 0은 null로 표시,
   * "#,##0": 천 단위 구분 표시, 0은 0으로 표시,
   * "#": 그대로 표시, 0은 null로 표시,
   * "0": 그대로 표시, 0은 0으로 표시.
   * 소수부:
   * "#": 값이 있을 때 표시,
   * "0": 값이 없을 때 0으로 표시.
   * 기타: 앞뒤 문자는 그대로 표시되며 마지막 문자가 "%"이면 백분율로 표시됩니다.
   *
   * 예1) format: "#,##0.## $", number: 1234.1234 => 결과: "1,234.12 $"
   * 예2) format: "0%", number: 0.12 => 결과: "12%"
   */
  format?: string
  /**
   * data-type이 code인 컬럼에만 유효합니다.
   * ';'로 구분된 코드를 설정합니다.
   * 이 컬럼은 지정된 코드 값만 가질 수 있습니다.
   * 예) "US;KR;JP" => "US", "KR", "JP"만 허용됩니다.
   */
  codes?: string
  /**
   * data-type이 code인 컬럼에만 유효합니다.
   * 값이 없을 경우, grid.info의 nullValue 대신 default-code가 기본값으로 사용됩니다.
   */
  defaultCode?: string
  /**
   * data-type이 text인 컬럼에만 유효합니다.
   * 입력 가능한 문자열의 최대 길이를 설정합니다. 양의 정수만 입력 가능합니다.
   */
  maxLength?: number
  /**
   * data-type이 text인 컬럼에만 유효합니다.
   * 입력 가능한 문자열의 최대 바이트 크기를 설정합니다. 양의 정수만 입력 가능합니다.
   *
   * 바이트 크기 기준은 다음과 같습니다.
   * vg.lessoreq0x7ffByte: charCode ≤ 0x7FF, 기본값 2 (영문 등 일반 기호, UTF-8 기준)
   * vg.lessoreq0xffffByte: charCode ≤ 0xFFFF, 기본값 3 (추가 라틴 문자 등, UTF-8 기준)
   * vg.greater0xffffByte: charCode > 0xFFFF, 기본값 4 (이모지, 한글, 한자, 일본어 등, UTF-8 기준)
   */
  maxByte?: number
  /**
   * data-type이 number인 컬럼에만 유효합니다.
   * 입력 가능한 최대값을 설정합니다. 초과 시 최대값으로 저장됩니다.
   * 숫자만 입력 가능합니다.
   */
  maxNumber?: number
  /**
   * data-type이 number인 컬럼에만 유효합니다.
   * 입력 가능한 최소값을 설정합니다. 미만 시 최소값으로 저장됩니다.
   * 숫자만 입력 가능합니다.
   */
  minNumber?: number
  /**
   * data-type이 number인 컬럼에만 유효합니다.
   * 반올림 위치를 지정합니다.
   * 양의 정수: 소수점 이하 반올림 자리 지정.
   * 음의 정수: 정수부 반올림 자리 지정.
   * 예) roundNumber: 2, number: 1234.1234 => 결과: 1234.12
   * 예) roundNumber: -2, number: 1234.1234 => 결과: 1200
   */
  roundNumber?: number
  /**
   * 컬럼의 수평 정렬을 설정합니다.
   * 'left', 'center', 'right' 중 하나를 선택합니다.
   * 지정하지 않으면 데이터 타입에 따라 기본 정렬이 결정됩니다.
   * text, mask: left / number: right / date, month, code, select, checkbox, button, link: center
   */
  align?: GridAlign | GridAlignValue
  /**
   * 컬럼의 수직 정렬을 설정합니다.
   * 'top', 'center', 'bottom' 중 하나를 선택합니다.
   * 지정하지 않으면 기본값은 center입니다.
   */
  verticalAlign?: GridVerticalAlign | GridVerticalAlignValue
  /**
   * 컬럼의 기본 overflow-wrap 속성을 설정합니다.
   * cssText 형식으로 입력합니다.
   */
  overflowWrap?: string
  /**
   * 컬럼의 기본 word-break 속성을 설정합니다.
   * cssText 형식으로 입력합니다.
   */
  wordBreak?: string
  /**
   * 컬럼의 기본 white-space 속성을 설정합니다.
   * cssText 형식으로 입력합니다.
   */
  whiteSpace?: string
  /**
   * 컬럼의 배경색을 설정합니다.
   * 16진수 색상 코드(cssText)를 입력합니다. 예) "#ffffff"
   */
  backColor?: string
  /**
   * 컬럼의 글자색을 설정합니다.
   * 16진수 색상 코드(cssText)를 입력합니다. 예) "#ffffff"
   */
  fontColor?: string
  /**
   * fontBold가 true이면, 이 컬럼 셀의 텍스트가 굵게 표시됩니다.
   */
  fontBold?: boolean
  /**
   * fontItalic이 true이면, 이 컬럼 셀의 텍스트가 이탤릭체로 표시됩니다.
   */
  fontItalic?: boolean
  /**
   * fontThruline이 true이면, 이 컬럼 셀의 텍스트에 취소선이 표시됩니다.
   */
  fontThruline?: boolean
  /**
   * fontUnderline이 true이면, 이 컬럼 셀의 텍스트에 밑줄이 표시됩니다.
   */
  fontUnderline?: boolean
}`,
  t1056: `※ 그리드는 컬럼을 지정해야 하며 HGridColumn interface type으로 삽입 가능합니다.`,
  // hisonConfig + VanillagridConfig
  t1060: `전역 설정: hisonConfig에 VanillagridConfig 커스터마이징`,
  c1060:
`// src/main.ts (예시)
import { createApp } from 'vue'
import App from './App.vue'
import { getDefaultHisonConfig } from 'hisonvue'
import { getVanillagridConfig } from 'vanillagrid2'

const app = createApp(App)

// 1) 기본 hison 설정 객체 생성
const hisonConfig = getDefaultHisonConfig()

// 2) vanillagrid 기본 설정 가져오기
const vanillagridConfig = getVanillagridConfig()

// 3) 사용자 커스터마이징 (예: 날짜 포맷, 색상, 바이트체크 등)
vanillagridConfig.attributes.defaultGridInfo.dateFormat = 'dd-mm-yyyy'
vanillagridConfig.attributes.defaultGridCssInfo.headerHeight = 32
vanillagridConfig.elements.sortAscSpan = null // 필요 시 커스텀 엘리먼트 주입

// 4) hisonConfig에 주입 (⚠️ ComponentConfig.grid는 VanillagridConfig)
hisonConfig.ComponentConfig.grid = vanillagridConfig

// 5) 플러그인/프로바이더로 등록 (프로젝트 설정에 맞춰 사용)
app.provide('hisonConfig', hisonConfig)

app.mount('#app')`,

  t1100: `slot`,
  t1200: `props (일반 속성)`,
  t1250: `props (gridEventProps - 상호작용 훅)`,
  t1300: `event emit`,
  t1400: `component methods`,

  // gridEventProps 동작 설명
  t1251:
`gridEventProps 동작 원리

· 각 콜백은 사용자 상호작용 시점에 호출됩니다.
· **boolean을 반환하는 콜백**은 \`false\`를 반환하면 해당 동작을 **취소**합니다.
  (예: beforeChange가 false를 반환하면 값 변경이 차단)
· 반환 타입이 \`void\`인 콜백은 동작을 막지 않고, 사이드 이펙트를 위한 알림 역할입니다.
· (row, colId)에서 row는 0-기반 인덱스, colId는 컬럼의 \`id\`입니다.
· \`...Node\` 파라미터는 해당 셀/헤더의 실제 DOM 노드 참조입니다.`,
}

const en = {
  t900:
`You can find more detailed features of the HGrid component by referring to the information in vanillagrid2.`,
  t950:
`go vanillagrid`,
  t1000:
`Below is the HGrid component.

HGrid is a vanillagrid2-powered, lightweight yet capable grid. Define columns with HGridColumn[],
enable editing/sorting/filtering, frozen rows/cols, redo history, and more.
Data is controlled via **runtime methods** (not v-model); obtain GridMethods by
calling hison.component.getGrid(id).`,

  t1010: `This is the HGrid live demo.`,

  t1030:
`Main Features

· Typed column definitions (HGridColumn[])
· Editing, sorting, filtering, selection policies, frozen rows/cols
· Rich interaction hooks via gridEventProps
· Region-level styling (header/body/footer/editor)
· SSR-safe mounting and reload APIs`,

  t1040: `Template Example`,
  c1040:
`<HGrid
  id="grid01"
  :columns="columns"
  :height="'220px'"
  :rownum-visible="true"
  :status-visible="false"
  :visible="true"
  :selection-policy="'range'"
  :sortable="true"
  :filterable="true"
  :beforeChange="beforeChange"
  :afterChange="afterChange"
  :beforeClickCell="beforeClickCell"
  @mounted="onMounted"
/>`,

  t1050: `Runtime Example`,
  c1050:
`const grid = hison.component.getGrid('grid01')
grid.load([
  { id: 1, name: 'Alpha', qty: 10 },
  { id: 2, name: 'Beta',  qty: 20 },
])//The grid value receives a type in the form of Record<string, any>[]. You can use hison.data.DataModel.
grid.setCellValue(0, 'qty', 11)
const r0 = grid.getRowData(0)
console.log(r0.name)  // 'Alpha'`,
  t1055: `Related Interface`,
  c1055:
`/**
 * This is config about the column.
 */
export interface HGridColumn {
  /**
   * Required value. It is the id of the column.
   */
  id: string
  /**
   * The name of the column. If null, the grid Id is inserted.
   */
  name?: string
  /**
   * Header text value. Use ';' as the delimiter. Empty values are automatically merged.
   */
  header?: string
  /**
   * Insert the footer using ';' as the delimiter. General text: Insert the string as text in the footer.
   * $$MAX: Calculate and display the maximum value in the footer.
   * $$MIN: Calculate and display the minimum value in the footer.
   * $$SUM: Calculate and display the sum in the footer.
   * $$AVG: Calculate and display the average in the footer (excluding null).
   */
  footer?: string
  /**
   * Sets the type of the column.
   * text: Text input type. A textarea input box is created on double click.
   * number: Number input type. An input number type is created on double click.
   * date: Date input type. An input date type is created on double click.
   * month: Month input type. An input month type is created on double click.
   * mask: Text input type that matches the format. An input text type is created on double click. Controlled by the format attribute.
   * select: Input select type. Options are received when inserting values. Ex) [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"}..]
   * checkbox: Input checkbox type. Checked if it matches the checkedValue of the grid info, unchecked otherwise.
   * button: Button type. The inserted value is displayed as the innerText of the button. If there is no value, the button is not created.
   * link: a tag. Insert the value as an object in the form {text:"text", value:"https://..", target:"_blank"}. The text is set as innerText, the value as href, and the target as target.
   * code: A type that cannot have or display values other than the specified codes. If nullValue is not in the codes, it is not allowed. Empty values are stored as default-code.
   */
  dataType?: string
  /**
   * If untarget is true, the cells in this column cannot be selected.
   */
  untarget?: boolean
  /**
   * If rowMerge is true, this column merges rows based on the cell above if the value, data-type, and format are the same.
   */
  rowMerge?: boolean
  /**
   * If colMerge is true, this column merges columns based on the cell in front if the value, data-type, and format are the same.
   */
  colMerge?: boolean
  /**
   * If visible is false, this column's width becomes 0 and size cannot be changed (hidden).
   */
  visible?: boolean
  /**
   * If required is true, this column can be checked for input using the checkRequired() method.
   */
  required?: boolean
  /**
   * If resizable is false, the user cannot change the width size of this column.
   */
  resizable?: boolean
  /**
   * Indicates whether the user can use the sorting feature for this column.
   */
  sortable?: boolean
  /**
   * Indicates whether the user can use the filtering feature for this column.
   */
  filterable?: boolean
  /**
   * The width of the column. Insert cssText. If only a number is entered, the unit is 'px'.
   */
  width?: string
  /**
   * Sets the select width size for this column. Insert cssText. The unit can only be px or %.
   */
  selectSize?: string
  /**
   * If locked is true, the cells in this column cannot be changed.
   */
  locked?: boolean
  /**
   * If lockedColor is true, the cells in this column will display a background color indicating the locked state when locked.
   */
  lockedColor?: boolean
  /**
   * Sets the format for data-type mask, number.
   * Mask format: A: Uppercase letter, a: Lowercase letter, 9: Number, others: Matching character.
   * Ex) format: "AAA-991", value: "ABC-123456" => result: "ABC-12"
   * 
   * Number format:
   * Integer part:
   * "#,###": Display with thousand separators, 0 is displayed as null, "#,##0": Display with thousand separators,
   * 0 is displayed as 0, "#": Display as is, 0 is displayed as null, "0": Display as is, 0 is displayed as 0.
   * Decimal part: "#": Display if present, "0": Display as 0 if not present.
   * Others: Characters before and after are displayed as is, and if the last character is "%", it is displayed as a percentage.
   * Ex1) format: "#,##0.## $", number: 1234.1234 => result: "1,234.12 $"
   * Ex2) format: "0%", number: 0.12 => result: "12%"
   */
  format?: string
  /**
   * Valid only for columns with data-type code. Sets codes separated by ";". This column can only have the specified code values.
   * Ex) "US;KR;JP" => Can only have the values "US", "KR", "JP"
   */
  codes?: string
  /**
   * Valid only for columns with data-type code. If a column with data-type code has no value, the default-code is used as the value instead of grid.info's nullValue.
   */
  defaultCode?: string
  /**
   * Valid only for columns with data-type text. Sets the maximum string length that can be inserted into the value. Enter only positive integers.
   */
  maxLength?: number
  /**
   * Valid only for columns with data-type text. Sets the maximum byte size of the string that can be inserted into the value. Enter only positive integers.
   * Byte size criteria are set with vg.lessoreq0x7ffByte, vg.lessoreq0xffffByte, vg.greater0xffffByte.
   * lessoreq0x7ffByte: Characters with charCode less than or equal to 0x7FF, default value is 2 (common symbols or English alphabet based on UTF-8).
   * lessoreq0xffffByte: Characters with charCode less than or equal to 0xFFFF, default value is 3 (additional alphabets such as Latin based on UTF-8).
   * greater0xffffByte: Characters with charCode greater than 0xFFFF, default value is 4 (emoji, Korean, Chinese, Japanese, etc. based on UTF-8).
   */
  maxByte?: number
  /**
   * Valid only for columns with data-type number. Sets the maximum value. If a value exceeding this is entered, it is stored as the maximum value. Enter only numbers.
   */
  maxNumber?: number
  /**
   * Valid only for columns with data-type number. Sets the minimum value. If a value below this is entered, it is stored as the minimum value. Enter only numbers.
   */
  minNumber?: number
  /**
   * Valid only for columns with data-type number. Specifies the rounding place.
   * roundNumber positive integer: Specifies the decimal place to round.
   * roundNumber negative integer: Specifies the integer place to round.
   * Ex) roundNumber: 2, number: 1234.1234 => result: 1234.12
   * Ex) roundNumber: -2, number: 1234.1234 => result: 1200
   */
  roundNumber?: number
  /**
   * Sets the align of the column. Choose from 'left', 'center', 'right'. If no value is specified, the default align follows the data-type.
   * text, mask: left, number: right, date, month, code, select, checkbox, button, link: center.
   */
  align?: GridAlign | GridAlignValue
  /**
   * Sets the default vertical-align of the column. Choose from 'top', 'center', 'bottom'. If no value is specified, it defaults to center.
   */
  verticalAlign?: GridVerticalAlign | GridVerticalAlignValue
  /**
   * Sets the default overflow-wrap of the column. Enter the overflow-wrap in cssText.
   */
  overflowWrap?: string
  /**
   * Sets the default word-break of the column. Enter the word-break in cssText.
   */
  wordBreak?: string
  /**
   * Sets the default white-space of the column. Enter the white-space in cssText.
   */
  whiteSpace?: string
  /**
   * Sets the background color of the column. Insert the 16-digit color code in cssText. Ex) "#ffffff"
   */
  backColor?: string
  /**
   * Sets the font color of the column. Insert the 16-digit color code in cssText. Ex) "#ffffff"
   */
  fontColor?: string
  /**
   * If fontBold is true, the innerText of the column's cells will be bold.
   */
  fontBold?: boolean
  /**
   * If fontItalic is true, the innerText of the column's cells will be italic.
   */
  fontItalic?: boolean
  /**
   * If fontThruline is true, the innerText of the column's cells will have a strikethrough.
   */
  fontThruline?: boolean
  /**
   * If fontUnderline is true, the innerText of the column's cells will be underlined.
   */
  fontUnderline?: boolean
}`,
  t1056: `※ The grid must specify columns and can be inserted with the HGridColumn interface type.`,
  t1060: `Global setup: customize VanillagridConfig in hisonConfig`,
  c1060:
`// src/main.ts (example)
import { createApp } from 'vue'
import App from './App.vue'
import { getDefaultHisonConfig } from 'hisonvue'
import { getVanillagridConfig } from 'vanillagrid2'

const app = createApp(App)

const hisonConfig = getDefaultHisonConfig()
const vanillagridConfig = getVanillagridConfig()

// Customize defaults
vanillagridConfig.attributes.defaultGridInfo.dateFormat = 'dd-mm-yyyy'
vanillagridConfig.attributes.defaultGridCssInfo.headerHeight = 32
vanillagridConfig.elements.sortAscSpan = null

// Inject into hisonConfig (⚠️ ComponentConfig.grid is VanillagridConfig)
hisonConfig.ComponentConfig.grid = vanillagridConfig

app.provide('hisonConfig', hisonConfig)
app.mount('#app')`,

  t1100: `slot`,
  t1200: `props (general)`,
  t1250: `props (gridEventProps - interaction hooks)`,
  t1300: `event emit`,
  t1400: `component methods`,

  t1251:
`How gridEventProps work

· Each callback fires on corresponding user interaction.
· **Callbacks returning boolean**: returning \`false\` **cancels** the action
  (e.g., beforeChange=false prevents value update).
· Callbacks returning \`void\` are notifications for side-effects and do not prevent actions.
· In (row, colId), row is zero-based index; colId is the column \`id\`.
· Parameters ending with \`...Node\` are the actual DOM nodes for the cell/header.`,
}

const contents = props.lang === 'en' ? en : ko

/* =========================================================
 * Demo grid setup
 * =======================================================*/
const columns: HGridColumn[] = [
  { id: 'id',   header: 'ID',    dataType: 'number', width: '80px', align: 'right' },
  { id: 'name', header: 'Name',  dataType: 'text',   width: '40%' },
  { id: 'qty',  header: 'Qty',   dataType: 'number', width: '100px', align: 'right' },
]

const onMounted = (grid: HGridMethods) => {
  grid.load([
    { id: 1, name: 'Alpha', qty: 10 },
    { id: 2, name: 'Beta',  qty: 20 },
    { id: 3, name: 'Gamma', qty: 15 },
  ])
}

const beforeChange = (row: number, colId: string, oldValue: any, newValue: any) => {
  // 숫자 음수 금지 예시
  void row; void oldValue;
  if (colId === 'qty' && typeof newValue === 'number' && newValue < 0) return false
  return true
}
const afterChange = (row: number, colId: string, oldValue: any, newValue: any) => {
  // 변경 로그
  // eslint-disable-next-line no-console
  console.log('[afterChange]', { row, colId, oldValue, newValue })
}
const beforeClickCell = (row: number, colId: string) => {
  // id 컬럼은 클릭 비활성 예시
  void row;
  if (colId === 'id') return false
  return true
}

/* =========================================================
 * API Grids (slot/props/events/methods)
 * =======================================================*/
// slots
const slotGridDataKo = [
  { slot: "-", explain: "HGrid는 슬롯을 사용하지 않습니다." },
]
const slotGridDataEn = [
  { slot: "-", explain: "HGrid does not provide slots." },
]

// props (general)
const propGridDataKo = [
  { prop: "id", type: "string", default: "-", explain: "필수. 고유 그리드 식별자." },
  { prop: "columns", type: "HGridColumn[]", default: "-", explain: "컬럼 정의 배열(id, header, dataType 등)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "hison-* 반응형 유틸 지원." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "루트 래퍼 인라인 스타일." },
  { prop: "name", type: "string", default: "id", explain: "옵션. 생략 시 id와 동일." },
  { prop: "locked", type: "boolean", default: "false", explain: "전체 편집 잠금." },
  { prop: "lockedColor", type: "boolean", default: "false", explain: "잠금 셀 배경 색상 표시." },
  { prop: "resizable", type: "boolean", default: "true", explain: "컬럼 리사이즈 허용." },
  { prop: "redoable", type: "boolean", default: "true", explain: "되돌리기/다시하기 사용." },
  { prop: "redoCount", type: "number", default: "50", explain: "되돌리기 단계 보관 개수." },
  { prop: "visible", type: "boolean", default: "true", explain: "표시/숨김." },
  { prop: "headerVisible", type: "boolean", default: "true", explain: "헤더 표시." },
  { prop: "rownumVisible", type: "boolean", default: "true", explain: "행번호 표시." },
  { prop: "rownumSize", type: "string", default: "auto", explain: "행번호 컬럼 너비." },
  { prop: "rownumLockedColor", type: "boolean", default: "false", explain: "행번호 컬럼 잠금색 표시." },
  { prop: "statusVisible", type: "boolean", default: "false", explain: "상태 컬럼 표시." },
  { prop: "statusLockedColor", type: "boolean", default: "false", explain: "상태 컬럼 잠금색 표시." },
  { prop: "selectionPolicy", type: "'single'|'range'|'none'", default: "'range'", explain: "사용자 선택 정책." },
  { prop: "nullValue", type: "string", default: "''", explain: "null 표시 텍스트." },
  { prop: "dateFormat", type: "enum", default: "yyyy-mm-dd", explain: "date 타입 컬럼 기본 포맷." },
  { prop: "monthFormat", type: "enum", default: "yyyy-mm", explain: "month 타입 컬럼 기본 포맷." },
  { prop: "alterRow", type: "boolean", default: "false", explain: "행 교차 배경 사용." },
  { prop: "frozenColCount", type: "number", default: "0", explain: "고정 컬럼 수." },
  { prop: "frozenRowCount", type: "number", default: "0", explain: "고정 행 수." },
  { prop: "sortable", type: "boolean", default: "true", explain: "정렬 허용." },
  { prop: "filterable", type: "boolean", default: "true", explain: "필터 허용." },
  { prop: "allCheckable", type: "boolean", default: "true", explain: "헤더 더블클릭으로 전체 체크 토글." },
  { prop: "checkedValue", type: "string", default: "'Y'", explain: "체크박스 체크 값." },
  { prop: "uncheckedValue", type: "string", default: "'N'", explain: "체크박스 언체크 값." },
  { prop: "width", type: "string", default: "auto", explain: "그리드 너비(CSS)." },
  { prop: "height", type: "string", default: "auto", explain: "그리드 높이(CSS)." },
  { prop: "margin", type: "string", default: "0", explain: "외여백." },
  { prop: "padding", type: "string", default: "0", explain: "내여백." },
  { prop: "sizeLevel", type: "number", default: "5", explain: "상대 사이즈 레벨." },
  { prop: "verticalAlign", type: "'top'|'center'|'bottom'", default: "'center'", explain: "셀 수직정렬 기본값." },
  { prop: "cellFontSize", type: "string", default: "inherit", explain: "셀 폰트 크기(px)." },
  { prop: "cellMinHeight", type: "string", default: "24px", explain: "셀 최소 높이(px)." },
  { prop: "horizenBorderSize", type: "number", default: "1", explain: "가로 보더 두께(px)." },
  { prop: "verticalBorderSize", type: "number", default: "1", explain: "세로 보더 두께(px)." },
  { prop: "gridFontFamily", type: "string", default: "inherit", explain: "그리드 폰트 패밀리." },
  { prop: "editorFontFamily", type: "string", default: "inherit", explain: "에디터 폰트 패밀리." },
  { prop: "overflowWrap", type: "string", default: "anywhere", explain: "셀 overflow-wrap." },
  { prop: "wordBreak", type: "string", default: "break-word", explain: "셀 word-break." },
  { prop: "whiteSpace", type: "string", default: "normal", explain: "셀 white-space." },
  { prop: "linkHasUnderLine", type: "boolean", default: "true", explain: "링크 밑줄 여부." },
  { prop: "invertColor", type: "boolean", default: "false", explain: "다크 모드 반전." },
  { prop: "color", type: "ColorSet | string", default: "'primary'", explain: "테마 컬러(키워드/HEX)." },
  { prop: "gridBorderColor", type: "string", default: "-", explain: "그리드 외곽선 색상." },
  { prop: "headerCellBackColor", type: "string", default: "-", explain: "헤더 배경색." },
  { prop: "headerCellBorderColor", type: "string", default: "-", explain: "헤더 보더색." },
  { prop: "headerCellFontColor", type: "string", default: "-", explain: "헤더 글자색." },
  { prop: "footerCellBackColor", type: "string", default: "-", explain: "푸터 배경색." },
  { prop: "footerCellBorderColor", type: "string", default: "-", explain: "푸터 보더색." },
  { prop: "footerCellFontColor", type: "string", default: "-", explain: "푸터 글자색." },
  { prop: "bodyBackColor", type: "string", default: "-", explain: "바디 배경색." },
  { prop: "bodyCellBackColor", type: "string", default: "-", explain: "셀 배경색." },
  { prop: "bodyCellBorderColor", type: "string", default: "-", explain: "셀 보더색." },
  { prop: "bodyCellFontColor", type: "string", default: "-", explain: "셀 글자색." },
  { prop: "editorBackColor", type: "string", default: "-", explain: "에디터 배경색." },
  { prop: "editorFontColor", type: "string", default: "-", explain: "에디터 글자색." },
  { prop: "selectCellBackColor", type: "string", default: "-", explain: "선택 셀 배경." },
  { prop: "selectCellFontColor", type: "string", default: "-", explain: "선택 셀 글자." },
  { prop: "selectColBackColor", type: "string", default: "-", explain: "선택 컬럼 헤더 배경." },
  { prop: "selectColFontColor", type: "string", default: "-", explain: "선택 컬럼 헤더 글자." },
  { prop: "selectRowBackColor", type: "string", default: "-", explain: "선택 행 배경." },
  { prop: "selectRowFontColor", type: "string", default: "-", explain: "선택 행 글자." },
  { prop: "mouseoverCellBackColor", type: "string", default: "-", explain: "호버 셀 배경." },
  { prop: "mouseoverCellFontColor", type: "string", default: "-", explain: "호버 셀 글자." },
  { prop: "lockCellBackColor", type: "string", default: "-", explain: "잠금 셀 배경." },
  { prop: "lockCellFontColor", type: "string", default: "-", explain: "잠금 셀 글자." },
  { prop: "alterRowBackColor", type: "string", default: "-", explain: "교차 행 배경." },
  { prop: "alterRowFontColor", type: "string", default: "-", explain: "교차 행 글자." },
  { prop: "buttonFontColor", type: "string", default: "-", explain: "버튼 셀 글자색." },
  { prop: "buttonBorderColor", type: "string", default: "-", explain: "버튼 셀 보더색." },
  { prop: "buttonBackColor", type: "string", default: "-", explain: "버튼 셀 배경." },
  { prop: "buttonHoverFontColor", type: "string", default: "-", explain: "버튼 호버 글자." },
  { prop: "buttonHoverBackColor", type: "string", default: "-", explain: "버튼 호버 배경." },
  { prop: "buttonActiveFontColor", type: "string", default: "-", explain: "버튼 활성 글자." },
  { prop: "buttonActiveBackColor", type: "string", default: "-", explain: "버튼 활성 배경." },
  { prop: "linkFontColor", type: "string", default: "-", explain: "링크 글자." },
  { prop: "linkHoverFontColor", type: "string", default: "-", explain: "링크 호버 글자." },
  { prop: "linkActiveFontColor", type: "string", default: "-", explain: "링크 활성 글자." },
  { prop: "linkVisitedFontColor", type: "string", default: "-", explain: "링크 방문 글자." },
  { prop: "linkFocusFontColor", type: "string", default: "-", explain: "링크 포커스 글자." },
]
const propGridDataEn = [
  { prop: "id", type: "string", default: "-", explain: "Required. Unique grid id." },
  { prop: "columns", type: "HGridColumn[]", default: "-", explain: "Column definition array (id, header, dataType, ...)." },
  { prop: "class", type: "string | string[] | Record<string, boolean>", default: "-", explain: "Responsive hison-* utilities." },
  { prop: "style", type: "string | CSSProperties | CSSProperties[]", default: "-", explain: "Inline styles for wrapper." },
  { prop: "name", type: "string", default: "id", explain: "Optional. Defaults to id." },
  { prop: "locked", type: "boolean", default: "false", explain: "Lock editing on all cells." },
  { prop: "lockedColor", type: "boolean", default: "false", explain: "Show locked color for locked cells." },
  { prop: "resizable", type: "boolean", default: "true", explain: "Allow column resizing." },
  { prop: "redoable", type: "boolean", default: "true", explain: "Enable undo/redo." },
  { prop: "redoCount", type: "number", default: "50", explain: "History size." },
  { prop: "visible", type: "boolean", default: "true", explain: "Show/hide." },
  { prop: "headerVisible", type: "boolean", default: "true", explain: "Show header." },
  { prop: "rownumVisible", type: "boolean", default: "true", explain: "Show row number column." },
  { prop: "rownumSize", type: "string", default: "auto", explain: "Row number column width." },
  { prop: "rownumLockedColor", type: "boolean", default: "false", explain: "Locked color on rownum." },
  { prop: "statusVisible", type: "boolean", default: "false", explain: "Show status column." },
  { prop: "statusLockedColor", type: "boolean", default: "false", explain: "Locked color on status col." },
  { prop: "selectionPolicy", type: "'single'|'range'|'none'", default: "'range'", explain: "User selection policy." },
  { prop: "nullValue", type: "string", default: "''", explain: "Text for null values." },
  { prop: "dateFormat", type: "enum", default: "yyyy-mm-dd", explain: "Default date format for date columns." },
  { prop: "monthFormat", type: "enum", default: "yyyy-mm", explain: "Default month format for month columns." },
  { prop: "alterRow", type: "boolean", default: "false", explain: "Alternate row background." },
  { prop: "frozenColCount", type: "number", default: "0", explain: "Frozen columns." },
  { prop: "frozenRowCount", type: "number", default: "0", explain: "Frozen rows." },
  { prop: "sortable", type: "boolean", default: "true", explain: "Enable sort." },
  { prop: "filterable", type: "boolean", default: "true", explain: "Enable filter." },
  { prop: "allCheckable", type: "boolean", default: "true", explain: "Toggle all on header dblclick." },
  { prop: "checkedValue", type: "string", default: "'Y'", explain: "Checkbox checked value." },
  { prop: "uncheckedValue", type: "string", default: "'N'", explain: "Checkbox unchecked value." },
  { prop: "width", type: "string", default: "auto", explain: "Grid width (CSS)." },
  { prop: "height", type: "string", default: "auto", explain: "Grid height (CSS)." },
  { prop: "margin", type: "string", default: "0", explain: "CSS margin." },
  { prop: "padding", type: "string", default: "0", explain: "CSS padding." },
  { prop: "sizeLevel", type: "number", default: "5", explain: "Relative size level." },
  { prop: "verticalAlign", type: "'top'|'center'|'bottom'", default: "'center'", explain: "Default vertical align." },
  { prop: "cellFontSize", type: "string", default: "inherit", explain: "Cell font-size." },
  { prop: "cellMinHeight", type: "string", default: "24px", explain: "Cell min-height." },
  { prop: "horizenBorderSize", type: "number", default: "1", explain: "Horizontal border size." },
  { prop: "verticalBorderSize", type: "number", default: "1", explain: "Vertical border size." },
  { prop: "gridFontFamily", type: "string", default: "inherit", explain: "Grid font family." },
  { prop: "editorFontFamily", type: "string", default: "inherit", explain: "Editor font family." },
  { prop: "overflowWrap", type: "string", default: "anywhere", explain: "CSS overflow-wrap." },
  { prop: "wordBreak", type: "string", default: "break-word", explain: "CSS word-break." },
  { prop: "whiteSpace", type: "string", default: "normal", explain: "CSS white-space." },
  { prop: "linkHasUnderLine", type: "boolean", default: "true", explain: "Underline for link cells." },
  { prop: "invertColor", type: "boolean", default: "false", explain: "Dark-mode invert." },
  { prop: "color", type: "ColorSet | string", default: "'primary'", explain: "Theme color (keyword/HEX)." },
  { prop: "gridBorderColor", type: "string", default: "-", explain: "Outer border color." },
  { prop: "headerCellBackColor", type: "string", default: "-", explain: "Header background." },
  { prop: "headerCellBorderColor", type: "string", default: "-", explain: "Header border color." },
  { prop: "headerCellFontColor", type: "string", default: "-", explain: "Header font color." },
  { prop: "footerCellBackColor", type: "string", default: "-", explain: "Footer background." },
  { prop: "footerCellBorderColor", type: "string", default: "-", explain: "Footer border color." },
  { prop: "footerCellFontColor", type: "string", default: "-", explain: "Footer font color." },
  { prop: "bodyBackColor", type: "string", default: "-", explain: "Grid body background." },
  { prop: "bodyCellBackColor", type: "string", default: "-", explain: "Cell background." },
  { prop: "bodyCellBorderColor", type: "string", default: "-", explain: "Cell border color." },
  { prop: "bodyCellFontColor", type: "string", default: "-", explain: "Cell font color." },
  { prop: "editorBackColor", type: "string", default: "-", explain: "Editor background." },
  { prop: "editorFontColor", type: "string", default: "-", explain: "Editor font color." },
  { prop: "selectCellBackColor", type: "string", default: "-", explain: "Selected cell background." },
  { prop: "selectCellFontColor", type: "string", default: "-", explain: "Selected cell font color." },
  { prop: "selectColBackColor", type: "string", default: "-", explain: "Selected column header background." },
  { prop: "selectColFontColor", type: "string", default: "-", explain: "Selected column header font." },
  { prop: "selectRowBackColor", type: "string", default: "-", explain: "Selected row background." },
  { prop: "selectRowFontColor", type: "string", default: "-", explain: "Selected row font." },
  { prop: "mouseoverCellBackColor", type: "string", default: "-", explain: "Hovered cell background." },
  { prop: "mouseoverCellFontColor", type: "string", default: "-", explain: "Hovered cell font." },
  { prop: "lockCellBackColor", type: "string", default: "-", explain: "Locked cell background." },
  { prop: "lockCellFontColor", type: "string", default: "-", explain: "Locked cell font." },
  { prop: "alterRowBackColor", type: "string", default: "-", explain: "Alternate row background." },
  { prop: "alterRowFontColor", type: "string", default: "-", explain: "Alternate row font." },
  { prop: "buttonFontColor", type: "string", default: "-", explain: "Button cell font." },
  { prop: "buttonBorderColor", type: "string", default: "-", explain: "Button cell border." },
  { prop: "buttonBackColor", type: "string", default: "-", explain: "Button cell background." },
  { prop: "buttonHoverFontColor", type: "string", default: "-", explain: "Button hover font." },
  { prop: "buttonHoverBackColor", type: "string", default: "-", explain: "Button hover background." },
  { prop: "buttonActiveFontColor", type: "string", default: "-", explain: "Button active font." },
  { prop: "buttonActiveBackColor", type: "string", default: "-", explain: "Button active background." },
  { prop: "linkFontColor", type: "string", default: "-", explain: "Link font." },
  { prop: "linkHoverFontColor", type: "string", default: "-", explain: "Link hover font." },
  { prop: "linkActiveFontColor", type: "string", default: "-", explain: "Link active font." },
  { prop: "linkVisitedFontColor", type: "string", default: "-", explain: "Link visited font." },
  { prop: "linkFocusFontColor", type: "string", default: "-", explain: "Link focus font." },
]

// props (gridEventProps)
const gridEventPropsKo = [
  { prop: "activeCell", type: "(row, colId) => boolean", default: "-", explain: "셀 활성(선택/편집) 가능 여부 반환." },
  { prop: "activeCells", type: "(startRow, startColId, endRow, endColId) => boolean", default: "-", explain: "범위 활성 여부." },
  { prop: "activeRow", type: "(row) => boolean", default: "-", explain: "행 활성 여부." },
  { prop: "activeRows", type: "(startRow, endRow) => boolean", default: "-", explain: "행 범위 활성 여부." },
  { prop: "activeCol", type: "(colId) => boolean", default: "-", explain: "컬럼 활성 여부." },
  { prop: "activeCols", type: "(startColId, endColId) => boolean", default: "-", explain: "컬럼 범위 활성 여부." },

  { prop: "beforeChange", type: "(row, colId, oldValue, newValue) => boolean", default: "-", explain: "값 변경 전. false → 변경 차단." },
  { prop: "afterChange", type: "(row, colId, oldValue, newValue) => void", default: "-", explain: "값 변경 후 알림." },

  { prop: "beforeClickCell", type: "(row, colId) => boolean", default: "-", explain: "셀 클릭 전. false → 취소." },
  { prop: "afterClickCell", type: "(row, colId) => void", default: "-", explain: "셀 클릭 후." },

  { prop: "clickSelect", type: "(row, colId, selectNode) => boolean", default: "-", explain: "셀렉트 클릭 전. false → 취소." },
  { prop: "clickCheckbox", type: "(row, colId, checkboxNode) => boolean", default: "-", explain: "체크박스 클릭 전. false → 취소." },
  { prop: "clickButton", type: "(row, colId, buttonNode) => boolean", default: "-", explain: "버튼 셀 클릭 전. false → 취소." },
  { prop: "clickLink", type: "(row, colId, linkNode) => boolean", default: "-", explain: "링크 셀 클릭 전. false → 취소." },

  { prop: "beforeDblClickCell", type: "(row, colId) => boolean", default: "-", explain: "셀 더블클릭 전. false → 취소." },
  { prop: "afterDblClickCell", type: "(row, colId) => void", default: "-", explain: "셀 더블클릭 후." },

  { prop: "beforeClickHeader", type: "(_, colId) => boolean", default: "-", explain: "헤더 클릭 전. false → 취소." },
  { prop: "afterClickHeader", type: "(_, colId) => void", default: "-", explain: "헤더 클릭 후." },
  { prop: "beforeDblClickHeader", type: "(_, colId) => boolean", default: "-", explain: "헤더 더블클릭 전. false → 취소." },
  { prop: "afterDblClickHeader", type: "(_, colId) => void", default: "-", explain: "헤더 더블클릭 후." },

  { prop: "beforeEditEnter", type: "(row, colId, editorNode) => boolean", default: "-", explain: "에디트 진입 전. false → 취소." },
  { prop: "afterEditEnter", type: "(row, colId, editorNode) => void", default: "-", explain: "에디트 진입 후." },
  { prop: "editEnding", type: "(row, colId, oldValue, newValue) => boolean", default: "-", explain: "에디트 종료 직전. false → 변경 취소." },

  { prop: "clickFilter", type: "(_, colId, filterNode) => boolean", default: "-", explain: "필터 아이콘 클릭 전. false → 취소." },
  { prop: "chooseFilter", type: "(_, colId, oldValue, newValue) => boolean", default: "-", explain: "필터 값 선택. false → 적용 취소." },

  { prop: "paste", type: "(startRow, startColId, clipboardText) => boolean", default: "-", explain: "붙여넣기 전. false → 취소." },
  { prop: "copy", type: "(startRow, startColId, endRow, endColId, copyText) => boolean", default: "-", explain: "복사 전. false → 취소." },

  { prop: "resize", type: "(colId) => boolean", default: "-", explain: "컬럼 리사이즈 중 호출. false → 리사이즈 차단." },

  { prop: "keydownEditor", type: "(event: KeyboardEvent) => boolean", default: "-", explain: "에디터 입력 중 키다운. false → 기본 취소." },
  { prop: "inputEditor", type: "(event: InputEvent) => boolean", default: "-", explain: "에디터 input 이벤트. false → 입력 취소." },
  { prop: "keydownGrid", type: "(event: KeyboardEvent) => boolean", default: "-", explain: "그리드 전체 키다운. false → 기본 취소." },
]
const gridEventPropsEn = [
  { prop: "activeCell", type: "(row, colId) => boolean", default: "-", explain: "Whether a cell can be active (select/edit)." },
  { prop: "activeCells", type: "(startRow, startColId, endRow, endColId) => boolean", default: "-", explain: "Whether a range can be active." },
  { prop: "activeRow", type: "(row) => boolean", default: "-", explain: "Whether a row is active." },
  { prop: "activeRows", type: "(startRow, endRow) => boolean", default: "-", explain: "Whether a row range is active." },
  { prop: "activeCol", type: "(colId) => boolean", default: "-", explain: "Whether a column is active." },
  { prop: "activeCols", type: "(startColId, endColId) => boolean", default: "-", explain: "Whether a column range is active." },

  { prop: "beforeChange", type: "(row, colId, oldValue, newValue) => boolean", default: "-", explain: "Before value change. false → block." },
  { prop: "afterChange", type: "(row, colId, oldValue, newValue) => void", default: "-", explain: "After value change." },

  { prop: "beforeClickCell", type: "(row, colId) => boolean", default: "-", explain: "Before cell click. false → cancel." },
  { prop: "afterClickCell", type: "(row, colId) => void", default: "-", explain: "After cell click." },

  { prop: "clickSelect", type: "(row, colId, selectNode) => boolean", default: "-", explain: "Before select-click. false → cancel." },
  { prop: "clickCheckbox", type: "(row, colId, checkboxNode) => boolean", default: "-", explain: "Before checkbox click. false → cancel." },
  { prop: "clickButton", type: "(row, colId, buttonNode) => boolean", default: "-", explain: "Before button click. false → cancel." },
  { prop: "clickLink", type: "(row, colId, linkNode) => boolean", default: "-", explain: "Before link click. false → cancel." },

  { prop: "beforeDblClickCell", type: "(row, colId) => boolean", default: "-", explain: "Before dblclick. false → cancel." },
  { prop: "afterDblClickCell", type: "(row, colId) => void", default: "-", explain: "After dblclick." },

  { prop: "beforeClickHeader", type: "(_, colId) => boolean", default: "-", explain: "Before header click. false → cancel." },
  { prop: "afterClickHeader", type: "(_, colId) => void", default: "-", explain: "After header click." },
  { prop: "beforeDblClickHeader", type: "(_, colId) => boolean", default: "-", explain: "Before header dblclick. false → cancel." },
  { prop: "afterDblClickHeader", type: "(_, colId) => void", default: "-", explain: "After header dblclick." },

  { prop: "beforeEditEnter", type: "(row, colId, editorNode) => boolean", default: "-", explain: "Before entering edit. false → cancel." },
  { prop: "afterEditEnter", type: "(row, colId, editorNode) => void", default: "-", explain: "After entering edit." },
  { prop: "editEnding", type: "(row, colId, oldValue, newValue) => boolean", default: "-", explain: "Right before edit commit. false → cancel." },

  { prop: "clickFilter", type: "(_, colId, filterNode) => boolean", default: "-", explain: "Before filter click. false → cancel." },
  { prop: "chooseFilter", type: "(_, colId, oldValue, newValue) => boolean", default: "-", explain: "On filter choose. false → cancel." },

  { prop: "paste", type: "(startRow, startColId, clipboardText) => boolean", default: "-", explain: "Before paste. false → cancel." },
  { prop: "copy", type: "(startRow, startColId, endRow, endColId, copyText) => boolean", default: "-", explain: "Before copy. false → cancel." },

  { prop: "resize", type: "(colId) => boolean", default: "-", explain: "While resizing column. false → block." },

  { prop: "keydownEditor", type: "(event: KeyboardEvent) => boolean", default: "-", explain: "Keydown in editor. false → prevent default." },
  { prop: "inputEditor", type: "(event: InputEvent) => boolean", default: "-", explain: "Input in editor. false → block input." },
  { prop: "keydownGrid", type: "(event: KeyboardEvent) => boolean", default: "-", explain: "Keydown on grid. false → prevent default." },
]

// component events
const eventGridDataKo = [
  { event: "mounted", trigger: "마운트 직후 GridMethods 전달", args: "(HGridMethods)" },
  { event: "responsive-change", trigger: "디바이스 클래스 변경 시", args: "('mb'|'tb'|'pc'|'wd')" },
]
const eventGridDataEn = [
  { event: "mounted", trigger: "On mount (GridMethods passed).", args: "(HGridMethods)" },
  { event: "responsive-change", trigger: "On device class change.", args: "('mb'|'tb'|'pc'|'wd')" },
]

const methodGridDataKo = [
  { related: "-", method: "getId()", param: "-", return: "string", explain: "컴포넌트의 고유 ID를 반환. `id` prop과 동일(미지정 시 자동 생성된 값)." },
  { related: "-", method: "getType()", param: "-", return: "string", explain: "컴포넌트 타입 문자열을 반환." },
  { related: "body", method: "isVisible()", param: "-", return: "boolean", explain: "현재 보임 여부를 반환. `false`면 `display: none` 적용 상태." },
  { related: "body", method: "setVisible(visible)", param: "boolean", return: "void", explain: "컴포넌트를 표시/비표시로 전환한다." },
  { related: "-", method: "reload()", param: "-", return: "void", explain: "내부 언마운트/리마운트를 통해 강제 리렌더한다." },
  { related: "-", method: "getType()", param: "-", return: "'grid'", explain: "컴포넌트 타입 리터럴." },
  { related: "body", method: "getDataModel()", param: "-", return: "DataModel<Record<string, any>>", explain: "현재 그리드 내용을 DataModel로 추출(모든 행을 레코드로 변환, 컬럼은 구조/값에서 유추)." },
  { related: "body", method: "setDataModel(dataModel)", param: "InterfaceDataModel<Record<string, any>>", return: "void", explain: "DataModel을 그리드에 로드(그리드 clear 후 모델의 첫 행부터 삽입)." },
  { related: "body", method: "load(keyValueOrDatas)", param: "Record<string, any> | Record<string, any>[] | InterfaceDataModel<T>", return: "boolean", explain: "그리드에 데이터 로드(자동 clear). 세 형식 지원: Key-Value / Datas(셀 객체 2차원) / DataModel." },
];

const methodGridDataEn = [
  { related: "-", method: "getId()", param: "-", return: "string", explain: "Returns the unique component ID. Same as `id` prop (auto-generated if omitted)." },
  { related: "-", method: "getType()", param: "-", return: "string", explain: "Returns the component type string." },
  { related: "body", method: "isVisible()", param: "-", return: "boolean", explain: "Returns current visibility. `false` means `display: none` is applied." },
  { related: "body", method: "setVisible(visible)", param: "boolean", return: "void", explain: "Shows or hides the component." },
  { related: "-", method: "reload()", param: "-", return: "void", explain: "Forces re-render via internal unmount/remount." },
  { related: "-", method: "getType()", param: "-", return: "'grid'", explain: "Component type literal." },
  { related: "body", method: "getDataModel()", param: "-", return: "DataModel<Record<string, any>>", explain: "Extracts current grid as a DataModel (rows → records; columns inferred from structure/values)." },
  { related: "body", method: "setDataModel(dataModel)", param: "InterfaceDataModel<Record<string, any>>", return: "void", explain: "Loads a DataModel into the grid (clears grid, then inserts from the model)." },
  { related: "body", method: "load(keyValueOrDatas)", param: "Record<string, any> | Record<string, any>[] | InterfaceDataModel<T>", return: "boolean", explain: "Loads data into the grid (auto clear). Supports Key-Value / Datas(cell 2D objects) / DataModel." },
];

const METHODS = [
    {
        "related": "header",
        "name": "getHeaderRowCount",
        "param": "",
        "return": "Number",
        "remarkKor": "헤더 행의 개수를 반환한다.",
        "remarkEng": "Returns the number of header rows."
    },
    {
        "related": "header",
        "name": "getHeaderText",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 헤더를 ';'로 join한 문자열을 반환한다.",
        "remarkEng": "Returns a string joined by ';' of the header of the colId or colIndex column."
    },
    {
        "related": "header",
        "name": "setHeaderText",
        "param": "colId(String) or colIndex(Number), headerValue(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 헤더를 ';'로 구분된 문자열인 headerValue로 설정한다. 정상 동작 시 true 반환.\n"
                    + "Ex) gridId.setHeaderText(colId,'test1;test2;test3') => colId열의 헤더가 1행은 'test1' 2행은 'test2' 3행은 'test3' 으로 설정됨.",
        "remarkEng": "Sets the header of the colId or colIndex column to headerValue, a string separated by ';'. Returns true if it operates normally.\n"
                    + "Ex) gridId.setHeaderText(colId,'test1;test2;test3') => The header of the colId column is set to 'test1' for row 1, 'test2' for row 2, and 'test3' for row 3.",
    },
    {
        "related": "header",
        "name": "reloadFilterValue",
        "param": "",
        "return": "Boolean",
        "remarkKor": "전체 filter를 갱신한다. 강제로 값을 변경하는 등의 처리 후 사용한다. 정상 동작 시 true 반환.",
        "remarkEng": "Refreshes all filters. Used after forcibly changing values. Returns true if it operates normally."
    },
    {
        "related": "header",
        "name": "reloadColFilter",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 filter를 갱신한다. 강제로 값을 변경하는 등의 처리 후 사용한다. 정상 동작 시 true 반환.",
        "remarkEng": "Refreshes the filter of the colId or colIndex column. Used after forcibly changing values. Returns true if it operates normally."
    },
    {
        "related": "footer",
        "name": "getFooterRowCount",
        "param": "",
        "return": "Number",
        "remarkKor": "풋터 행의 개수를 반환한다.",
        "remarkEng": "Returns the number of footer rows."
    },
    {
        "related": "footer",
        "name": "reloadFooterValue",
        "param": "",
        "return": "Boolean",
        "remarkKor": "전체 footer를 갱신한다. 강제로 값을 변경하는 등의 처리 후 사용한다. 정상 동작 시 true 반환.",
        "remarkEng": "Refreshes all footers. Used after forcibly changing values. Returns true if it operates normally."
    },
    {
        "related": "footer",
        "name": "setFooterValue",
        "param": "rowIndex(Number), colId(String) or colIndex(Number), footerValue(String)",
        "return": "Boolean",
        "remarkKor": "rowIndex 행, colId or colIndex 열의 footer의 보여지는 값을 설정한다. 정상 동작 시 true 반환. ※ footer가 갱신되면 다시 값이 변경 될 수 있다.",
        "remarkEng": "Sets the footer visible value of the rowIndex row and colId or colIndex column. Returns true if it operates normally. ※ The value may rechange when the footer is refreshed."
    },
    {
        "related": "footer",
        "name": "getFooterValue",
        "param": "rowIndex(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "rowIndex 행, colId or colIndex 열의 footer의 값을 반환한다.",
        "remarkEng": "Returns the footer value of the rowIndex row and colId or colIndex column."
    },
    {
        "related": "footer",
        "name": "setFooterFormula",
        "param": "colId(String) or colIndex(Number), formula(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex열의 footer의 formula값을 ';'로 구분된 문자열인 formula로 설정한다. 정상 동작 시 true 반환.\n"
                    + "Ex) gridId.setFooterFormula(colId '$$MAX;$$MIN;$$SUM;$$AVG')",
        "remarkEng": "Sets the footer formula of the colId or colIndex column to formula, a string separated by ';'. Returns true if it operates normally.\n"
                    + "Ex) gridId.setFooterFormula(colId '$$MAX;$$MIN;$$SUM;$$AVG')"
    },
    {
        "related": "footer",
        "name": "getFooterFormula",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex열에 정의된 formula의 값을 ';'로 구분된 문자열로 반환한다.",
        "remarkEng": "Returns the formula value defined in the colId or colIndex column as a string separated by ';'."
    },
    {
        "related": "footer",
        "name": "setFooterFunction",
        "param": "rowIndex(Number), colId(String) or colIndex(Number),  userFunction(function)",
        "return": "Boolean",
        "remarkKor": "rowIndex 행, colId or colIndex 열의 footer에 function을 정의한다. 정상 동작 시 true 반환. 해당 function은 파라메터로 grid의 getValues()의 결과값이 주어진다.\n"
                    + "Ex) gridId.setFooterFunction(colId, function(values) {return '1'})",
        "remarkEng": "Defines a function in the footer of the rowIndex row and colId or colIndex column. Returns true if it operates normally. The function is given the result of the grid's getValues() as a parameter.\n"
                    + "Ex) gridId.setFooterFunction(colId, function(values) {return '1'})",
    },
    {
        "related": "body",
        "name": "getGridInfo",
        "param": "",
        "return": "Object",
        "remarkKor": "해당 grid의 정보를 반환한다.",
        "remarkEng": "Returns the information of the grid."
    },
    {
        "related": "body",
        "name": "load",
        "param": "keyValueOrDatas ([{},{}...] or [[{},{}...]...])",
        "return": "Boolean",
        "remarkKor": "grid에 데이터를 load한다. 정상 동작 시 true 반환.\n"
                    + "keyValue의 형식은 [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}]\n"
                    + "Datas의 형식은 [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]",
        "remarkEng": "Loads data into the grid. Returns true if it operates normally.\n"
                    + "The format of keyValue is [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}]\n"
                    + "The format of Datas is [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]"
    },
    {
        "related": "body",
        "name": "clear",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid에 모든 데이터를 clear한다. 정상 동작 시 true 반환.",
        "remarkEng": "Clears all data in the grid. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "clearStatus",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 모든 상태 변경 컬럼(v-g-status)을 초기화 한다. 정상 동작 시 true 반환.",
        "remarkEng": "Resets all status change columns (v-g-status) of the grid. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getRowCount",
        "param": "",
        "return": "Number",
        "remarkKor": "grid 데이터 행의 개수를 반환한다.",
        "remarkEng": "Returns the number of grid data rows."
    },
    {
        "related": "body",
        "name": "getColCount",
        "param": "",
        "return": "Number",
        "remarkKor": "grid 컬럼의 개수를 반환한다.",
        "remarkEng": "Returns the number of grid columns."
    },
    {
        "related": "body",
        "name": "getValues",
        "param": "",
        "return": "Array",
        "remarkKor": "keyValue의 형식으로 데이터를 반환한다. 키와 값만 정의된 객체를 요소로 하는 배열\n"
                    + "Ex) [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}]",
        "remarkEng": "Returns data in keyValue format. An array of objects defined only by keys and values.\n"
                    + "Ex) [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}]"
    },
    {
        "related": "body",
        "name": "getDatas",
        "param": "",
        "return": "Array",
        "remarkKor": "Datas의 형식으로 데이터를 반환한다. 각 cell의 값과 정보까지 정의된 객체의 배열(column)의 배열(row)\n"
                    + "Ex) [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]",
        "remarkEng": "Returns data in Datas format. An array of arrays (rows) of objects (columns) defined by each cell's value and information.\n"
                    + "Ex) [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]"
    },
    {
        "related": "body",
        "name": "sort",
        "param": "colId(String) or colIndex(Number), isAsc(Boolean) = true,  isNumSort(Boolean) = false",
        "return": "Boolean",
        "remarkKor": "colId or colIndex열을 정렬한다. 정상 동작 시 true 반환. isAsc가 true이면 오름차순 정렬 아니면 내림차순정렬, isNumSort가 true이면 문자열 타입도 숫자형식으로 정렬한다.\n"
                    + "Ex) gridId.sort(colId, false, true) => gridId의 colId를 desc로 정렬하고 정렬 기준을 숫자 형식으로 한다.",
        "remarkEng": "Sorts the colId or colIndex column. Returns true if it operates normally. Ascending order if isAsc is true, otherwise descending order. Sorts string types as numeric if isNumSort is true.\n"
                    + "Ex) gridId.sort(colId, false, true) => Sort the colId of gridId by desc and set the sorting standard in numeric format.",
    },
    {
        "related": "body",
        "name": "checkRequired",
        "param": "userFunction(function)",
        "return": "Boolean",
        "remarkKor": "각 cell을 순회하며 required가 true인데 null인 cell이 조회되면 해당 cell의 getCellData()된 정보를 파라메터로 userFunction을 호출한다.\n"
                    + "userFunction이 없으면 자동 적용된 이벤트를 발생한다.(오류 메시지 후 해당 cell을 editCell로 전환)\n"
                    + "하나라도 필수 cell에 값이 없으면 false를 반환한다.\n"
                    + "Ex) gridId.checkRequired(function(cellData) {alert(cellData.row + '행의, ' + cellData.name + '의 정보를 입력해주세요.');})",
        "remarkEng": "Iterates over each cell and calls userFunction with getCellData() information of any cell where required is true and the cell is null.\n"
                    + "If userFunction is not provided, an automatically applied event occurs (error message followed by switching the cell to editCell).\n"
                    + "Returns false if any required cell is null.\n"
                    + "Ex) gridId.checkRequired(function(cellData) {alert(cellData.row + 'For the row, please enter the information for ' + cellData.name + '.');})",
    },
    {
        "related": "body",
        "name": "setGridMount",
        "param": "isGridMount(Boolean)",
        "return": "Boolean",
        "remarkKor": "isGridMount가 false이면 해당 grid를 재 mount 하지않는다. 정상 동작 시 true 반환.\n"
                    + "addRow등 메소드를 호출할 때마다 grid를 다시 그리는 기능이 많아 시스템 부하가 발생 할 수 있다.\n"
                    + "grid조작 기능 진행 전 setGridMount(false) 처리 후 모든 grid조작 기능을 완료 후 setGridMount(true) 처리를 하면 시스템 부하를 줄일 수 있다.\n"
                    + "setGridMount(true) 호출 시 변경된 사항이 적용된 그리드를 한번에 다시 로드한다.",
        "remarkEng": "If isGridMount is false, the grid is not remounted. Returns true if it operates normally.\n"
                    + "Frequent redrawing of the grid when calling methods like addRow can cause system load.\n"
                    + "Set setGridMount(false) before performing grid operations and set setGridMount(true) after all grid operations are completed to reduce system load.\n"
                    + "When setGridMount(true) is called, the grid with the applied changes is reloaded at once."
    },
    {
        "related": "body",
        "name": "getGridFilter",
        "param": "",
        "return": "Array",
        "remarkKor": "현재 filter로 설정된 값을 반환한다.",
        "remarkEng": "Returns the current filter settings."
    },
    {
        "related": "body",
        "name": "setGridWidth",
        "param": "cssTextWidth(String)",
        "return": "Boolean",
        "remarkKor": "grid의 width를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '100%'",
        "remarkEng": "Sets the width of the grid. Returns true if it operates normally. CSS text must be entered. Ex) '100%'"
    },
    {
        "related": "body",
        "name": "setGridHeight",
        "param": "cssTextHeight(String)",
        "return": "Boolean",
        "remarkKor": "grid의 height를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '900px'",
        "remarkEng": "Sets the height of the grid. Returns true if it operates normally. CSS text must be entered. Ex) '900px'"
    },
    {
        "related": "body",
        "name": "setGridSizeLevel",
        "param": "sizeLevel(Number)",
        "return": "Boolean",
        "remarkKor": "grid의 size level을 지정한다. 양의 정수를 입력. 5가 정비율이다. 정상 동작 시 true 반환.",
        "remarkEng": "Specifies the size level of the grid. Enter a positive integer. 5 is the standard ratio. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setGridVerticalAlign",
        "param": "verticalAlign(String)",
        "return": "Boolean",
        "remarkKor": "grid cell의 기본 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the default vertical-align of the grid cell. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setCellFontSize",
        "param": "cssTextFontSize(String)",
        "return": "Boolean",
        "remarkKor": "grid cell의 기본 font-size를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '1.2em'",
        "remarkEng": "Specifies the default font-size of the grid cell. Returns true if it operates normally. CSS text must be entered. Ex) '1.2em'"
    },
    {
        "related": "body",
        "name": "setCellMinHeight",
        "param": "cssTextMinHeight(String)",
        "return": "Boolean",
        "remarkKor": "grid cell의 min-height를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '18px'",
        "remarkEng": "Specifies the min-height of the grid cell. Returns true if it operates normally. CSS text must be entered. Ex) '18px'"
    },
    {
        "related": "body",
        "name": "setHorizenBorderSize",
        "param": "pxHorizenBorderSize(Number)",
        "return": "Boolean",
        "remarkKor": "grid cell의 horizen border size를 설정한다. px단위이며 0과 양의 정수를 넣는다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the horizontal border size of the grid cell. The unit is px, and 0 and positive integers can be entered. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setVerticalBorderSize",
        "param": "pxVerticalBorderSize(Number)",
        "return": "Boolean",
        "remarkKor": "grid cell의 vertical border size를 설정한다. px단위이며 0과 양의 정수를 넣는다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the vertical border size of the grid cell. The unit is px, and 0 and positive integers can be entered. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setGridColor",
        "param": "cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "grid의 색상을 변경한다. 메인색상 지정 시 해당 색상에 따른 그리드를 그린다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Changes the color of the grid. When specifying the main color, the grid is drawn according to the color. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "body",
        "name": "setGridColorSet",
        "param": "colorName(String)",
        "return": "Boolean",
        "remarkKor": "grid의 색상을 변경한다. 이미 설정된 Color set의 색상을 삽입할 수 있다. 정상 동작 시 true 반환. 'skyblue', 'blue', 'light-red', 'red', 'light-green', 'green', 'orange', 'yellow', 'purple', 'brown', 'black'",
        "remarkEng": "Changes the color of the grid. You can insert the color of an already set color set. Returns true if it operates normally. 'skyblue', 'blue', 'light-red', 'red', 'light-green', 'green', 'orange', 'yellow', 'purple', 'brown', 'black'"
    },
    {
        "related": "body",
        "name": "invertColor",
        "param": "doInvert(Boolean) = false",
        "return": "Boolean",
        "remarkKor": "grid의 색상을 반전한다. Dark mode등으로 활용할 수 있다. 정상 동작 시 true 반환.",
        "remarkEng": "Inverts the color of the grid. Can be used for dark mode. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setGridName",
        "param": "gridName(String)",
        "return": "Boolean",
        "remarkKor": "grid의 name을 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the name of the grid. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridName",
        "param": "",
        "return": "String",
        "remarkKor": "grid의 name을 반환한다.",
        "remarkEng": "Returns the name of the grid."
    },
    {
        "related": "body",
        "name": "setGridLocked",
        "param": "isLocked(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 locked를 설정한다. Locked가 true이면 grid 변경 불가. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's locked status. If locked is true, the grid cannot be changed. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridLocked",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 locked상태를 반환한다.",
        "remarkEng": "Returns the locked status of the grid."
    },
    {
        "related": "body",
        "name": "setGridLockedColor",
        "param": "isLockedColor(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 lockedColor를 설정한다. locked-color가 true이면 locked인 cell은 색상이 lockedColor로 표현됨. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's lockedColor. If lockedColor is true, locked cells are displayed in the lockedColor. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridResizable",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 lockedColor상태를 반환한다.",
        "remarkEng": "Returns the lockedColor status of the grid."
    },
    {
        "related": "body",
        "name": "setGridResizable",
        "param": "isResizable(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 resizable을 설정한다. Resizable이 true면 column사이즈 조정이 가능하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's resizable status. If resizable is true, column size adjustment is possible. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setGridRecodeCount",
        "param": "recodeCount(Number)",
        "return": "Boolean",
        "remarkKor": "grid의 redo(되돌리기) undo(재실행) 기록할 횟수인 recode count를 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the recode count, the number of redo (undo) records for the grid. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridRecodeCount",
        "param": "",
        "return": "Number",
        "remarkKor": "grid의 recode count를 반환한다.",
        "remarkEng": "Returns the recode count of the grid."
    },
    {
        "related": "body",
        "name": "setGridRedoable",
        "param": "isRedoable(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid가 redo(되돌리기) undo(재실행)를 사용할 수 있는지를 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets whether the grid can use redo (undo). Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridRedoable",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 redoable을 반환한다.",
        "remarkEng": "Returns the redoable status of the grid."
    },
    {
        "related": "body",
        "name": "setGridVisible",
        "param": "isVisible(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 visible을 설정한다. Visible true시 그리드가 화면에 보인다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's visibility. If visible is true, the grid is displayed on the screen. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridVisible",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 visible을 반환한다.",
        "remarkEng": "Returns the visibility of the grid."
    },
    {
        "related": "body",
        "name": "setHeaderVisible",
        "param": "isVisible(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid header의 visible을 설정한다. Visible true시 그리드가 화면에 보인다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the visibility of the grid header. If visible is true, the grid header is displayed on the screen. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isHeaderVisible",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid header의 visible을 반환한다.",
        "remarkEng": "Returns the visibility of the grid header."
    },
    {
        "related": "body",
        "name": "setGridRownumLockedColor",
        "param": "isRownumLockedColor(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 rownum column의 lockedColor를 표기할지 여부를 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets whether to display the lockedColor for the grid's rownum column. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridRownumLockedColor",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 rownumLockedColor를 반환한다.",
        "remarkEng": "Returns the lockedColor status of the grid's rownum column."
    },
    {
        "related": "body",
        "name": "setGridRownumSize",
        "param": "rownumSize(Number)",
        "return": "Boolean",
        "remarkKor": "grid의 rownum Size를 설정한다. 단위는 px이며 양의 정수만 삽인한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the rownum size of the grid. The unit is px and only positive integers are entered. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridRownumSize",
        "param": "",
        "return": "String",
        "remarkKor": "grid의 기존에 설정된 rownumSize를 반환한다.",
        "remarkEng": "Returns the previously set rownum size of the grid."
    },
    {
        "related": "body",
        "name": "setGridStatusLockedColor",
        "param": "isStatusLockedColor(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 status column의 lockedColor를 표기할지 여부를 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets whether to display the lockedColor for the grid's status column. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridStatusLockedColor",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 statusLockedColor를 반환한다.",
        "remarkEng": "Returns the lockedColor status of the grid's status column."
    },
    {
        "related": "body",
        "name": "setGridSelectionPolicy",
        "param": "selectionPolicy(String)",
        "return": "Boolean",
        "remarkKor": "grid의 선택범위 정책을 설정한다. 정상 동작 시 true 반환. 'range' : 범위 선택, 'single' : 단일 셀 선택, 'none': 선택 불가.",
        "remarkEng": "Sets the grid's selection range policy. Returns true if it operates normally. 'range': Range selection, 'single': Single cell selection, 'none': No selection."
    },
    {
        "related": "body",
        "name": "getGridSelectionPolicy",
        "param": "",
        "return": "String",
        "remarkKor": "grid에 설정된 selectionPolicy를 반환한다.",
        "remarkEng": "Returns the selection policy set for the grid."
    },
    {
        "related": "body",
        "name": "setGridNullValue",
        "param": "nullValue(var)",
        "return": "Boolean",
        "remarkKor": "grid의 null값 저장값을 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the null value storage value of the grid. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridNullValue",
        "param": "",
        "return": "var",
        "remarkKor": "grid의 nullValue를 반환한다.",
        "remarkEng": "Returns the null value of the grid."
    },
    {
        "related": "body",
        "name": "setGridDateFormat",
        "param": "dateFormat(String)",
        "return": "Boolean",
        "remarkKor": "grid의 dateFormat을 설정한다. 정상 동작 시 true 반환.\n"
                    + "'yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy. mm. dd', 'yyyymmdd'\n"
                    + "'mm-dd-yyyy', 'mm/dd/yyyy', 'mm. dd. yyyy', 'mmddyyyy'\n"
                    + "'dd-mm-yyyy', 'dd/mm/yyyy', 'dd. mm. yyyy', 'ddmmyyyy'\n",
        "remarkEng": "Sets the date format of the grid. Returns true if it operates normally.\n"
                    + "'yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy. mm. dd', 'yyyymmdd'\n"
                    + "'mm-dd-yyyy', 'mm/dd/yyyy', 'mm. dd. yyyy', 'mmddyyyy'\n"
                    + "'dd-mm-yyyy', 'dd/mm/yyyy', 'dd. mm. yyyy', 'ddmmyyyy'\n",
    },
    {
        "related": "body",
        "name": "getGridDateFormat",
        "param": "",
        "return": "String",
        "remarkKor": "grid의 dateFormat을 반환한다.",
        "remarkEng": "Returns the date format of the grid."
    },
    {
        "related": "body",
        "name": "setGridMonthFormat",
        "param": "monthFormat(String)",
        "return": "Boolean",
        "remarkKor": "grid의 monthFormat을 설정한다. 정상 동작 시 true 반환.\n"
                    + "'yyyymm', 'yyyy-mm', 'yyyy/mm', 'yyyy. mm'\n"
                    + "'mmyyyy', 'mm-yyyy', 'mm/yyyy', 'mm. yyyy'",
        "remarkEng": "Sets the month format of the grid. Returns true if it operates normally.\n"
                    + "'yyyymm', 'yyyy-mm', 'yyyy/mm', 'yyyy. mm'\n"
                    + "'mmyyyy', 'mm-yyyy', 'mm/yyyy', 'mm. yyyy'",
    },
    {
        "related": "body",
        "name": "getGridMonthFormat",
        "param": "",
        "return": "String",
        "remarkKor": "grid의 monthFormat을 반환한다.",
        "remarkEng": "Returns the month format of the grid."
    },
    {
        "related": "body",
        "name": "setGridAlterRow",
        "param": "isAlterRow(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 alterRow(한 행씩 번갈아가며 색상을 다르게 표현하는 기능)을 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's alterRow (function that alternates row colors). Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "setGridFrozenColCount",
        "param": "frozenColCount(Number)",
        "return": "Boolean",
        "remarkKor": "grid의 고정 열을 설정한다. 0포함 양의 정수만 입력 가능. frozenRowCount와 함께 사용할 수 없다. 정상 동작 시 true 반환.\n"
                    + "frozenColCount는 각 Column의 width가 '%'단위로 지정된 Column이 있으면 사용할 수 없다. 'px'단위일때만 사용 가능하다.",
        "remarkEng": "Sets the fixed columns of the grid. Only positive integers including 0 can be entered. Cannot be used with frozenRowCount. Returns true if it operates normally.\n"
                    + "FrozenColCount cannot be used if any column width is specified in '%'. Can only be used when the unit is 'px'."
    },
    {
        "related": "body",
        "name": "getGridFrozenColCount",
        "param": "",
        "return": "Number",
        "remarkKor": "grid의 frozenColCount를 반환한다.",
        "remarkEng": "Returns the frozenColCount of the grid."
    },
    {
        "related": "body",
        "name": "setGridFrozenRowCount",
        "param": "frozenRowCount(Number)",
        "return": "Boolean",
        "remarkKor": "grid의 고정 행을 설정한다. 0포함 양의 정수만 입력 가능. frozenColCount와 함께 사용할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fixed rows of the grid. Only positive integers including 0 can be entered. Cannot be used with frozenColCount. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridFrozenRowCount",
        "param": "",
        "return": "Number",
        "remarkKor": "grid의 frozenRowCount를 반환한다.",
        "remarkEng": "Returns the frozenRowCount of the grid."
    },
    {
        "related": "body",
        "name": "setGridSortable",
        "param": "isSortable(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 sortable을 설정한다. Sortable이 true이면 정렬기능을 사용할 수 있다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's sortable status. If sortable is true, sorting functionality can be used. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridSortalbe",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 sortable을 반환한다.",
        "remarkEng": "Returns the sortable status of the grid."
    },
    {
        "related": "body",
        "name": "setGridFilterable",
        "param": "isFilterable(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 filterable을 설정한다. filterable이 true이면 필터기능을 사용할 수 있다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the grid's filterable status. If filterable is true, filtering functionality can be used. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridFilterable",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 filterable을 반환한다.",
        "remarkEng": "Returns the filterable status of the grid."
    },
    {
        "related": "body",
        "name": "setGridAllCheckable",
        "param": "isAllCheckable(Boolean)",
        "return": "Boolean",
        "remarkKor": "grid의 column이 checkbox 타입일 때 header 더블 클릭 시 한번에 모든 check값을 토글 하는 기능을 사용할지에 대한 여부를 설정한다. 정상 동작 시 true반환.",
        "remarkEng": "Sets whether to toggle all check values at once when double-clicking the header if the grid's column type is checkbox. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "isGridAllCheckable",
        "param": "",
        "return": "Boolean",
        "remarkKor": "grid의 allCheckable을 반환한다.",
        "remarkEng": "Returns the allCheckable status of the grid."
    },
    {
        "related": "body",
        "name": "setGridCheckedValue",
        "param": "checkeValue(String)",
        "return": "Boolean",
        "remarkKor": "grid의 cell이 checkbox 타입일 경우 체크된 값의 정의. 정상 동작 시 true 반환.",
        "remarkEng": "Defines the checked value if the grid's cell type is checkbox. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridCheckedValue",
        "param": "",
        "return": "String",
        "remarkKor": "grid의 checkedValue를 반환한다.",
        "remarkEng": "Returns the checked value of the grid."
    },
    {
        "related": "body",
        "name": "setGridUncheckedValue",
        "param": "unCheckedValue(String)",
        "return": "Boolean",
        "remarkKor": "grid의 cell이 checkbox 타입일 경우 체크되지 않은 값의 정의. 정상 동작 시 true 반환.",
        "remarkEng": "Defines the unchecked value if the grid's cell type is checkbox. Returns true if it operates normally."
    },
    {
        "related": "body",
        "name": "getGridUncheckedValue",
        "param": "",
        "return": "String",
        "remarkKor": "grid의 uncheckedValue를 반환한다.",
        "remarkEng": "Returns the unchecked value of the grid."
    },
    {
        "related": "column",
        "name": "addCol",
        "param": "colId(String) or colIndex(Number), colInfo(Object)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 뒤에 colInfo 객체의 정보로 column을 추가한다. 정상 동작 시 true 반환.\n"
                    + "Ex) gridId.addCol(2,{id:'dpet', header: '부서', name:'부서', data-type:'mask', format:'AAA99'})",
        "remarkEng": "Adds a column with the information of the colInfo object after the colId or colIndex column. Returns true if it operates normally.\n"
                    + "Ex) gridId.addCol(2,{id:'dpet', header: 'department', name:'department', data-type:'mask', format:'AAA99'})",
    },
    {
        "related": "column",
        "name": "removeCol",
        "param": "colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "해당 colId or colIndex 열을 삭제한다. 삭제 후 해당 column의 getColValues() 값을 반환한다.",
        "remarkEng": "Deletes the specified colId or colIndex column. Returns the getColValues() values of the deleted column."
    },
    {
        "related": "column",
        "name": "setColInfo",
        "param": "colInfo(Object)",
        "return": "Boolean",
        "remarkKor": "colInfo의 정보를 갱신한다. 변경될 column은 colInfo.id로 정한다. 정상 동작 시 true 반환.\n"
                    + "Ex) gridId.setColInfo({id:'dpet', header: '부서', name:'부서', data-type:'text', format:'AAA99'})",
        "remarkEng": "Updates the information of colInfo. The column to be changed is determined by colInfo.id. Returns true if it operates normally."
                    + "Ex) gridId.setColInfo({id:'dpet', header: '부서', name:'부서', data-type:'text', format:'AAA99'})",
    },
    {
        "related": "column",
        "name": "getColInfo",
        "param": "colId(String) or colIndex(Number)",
        "return": "Object",
        "remarkKor": "colId or colIndex 열의 정보를 객체로 반환한다.",
        "remarkEng": "Returns the information of the colId or colIndex column as an object."
    },
    {
        "related": "column",
        "name": "getColDatas",
        "param": "colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "colId or colIndex 열의 각 cell의 데이터를 [{cell data}, {cell data}…] 형식으로 반환한다.",
        "remarkEng": "Returns the data of each cell in the colId or colIndex column in the format [{cell data}, {cell data}…]."
    },
    {
        "related": "column",
        "name": "setColSameValue",
        "param": "colId(String) or colIndex(Number), value(var), doRecode(Boolean) = false",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 모든 cell에 동일한 value를 삽입한다. doRecode가 true일 시 사용자가 실행취소, 재실행을 할 수 있다. 정상 동작 시 true 반환.",
        "remarkEng": "Inserts the same value into all cells in the colId or colIndex column. If doRecode is true, the user can undo or redo. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColValues",
        "param": "colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "colId or colIndex 열의 각 cell의 value를 [value, value...] 형식으로 반환한다.",
        "remarkEng": "Returns the value of each cell in the colId or colIndex column in the format [value, value...]."
    },
    {
        "related": "column",
        "name": "getColTexts",
        "param": "colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "colId or colIndex 열의 각 cell의 text를 [text, text...] 형식으로 반환한다.",
        "remarkEng": "Returns the text of each cell in the colId or colIndex column in the format [text, text...]."
    },
    {
        "related": "column",
        "name": "isColUnique",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 cell value가 중복된 값이 있으면 false, 없으면 true를 반환한다.",
        "remarkEng": "Returns false if the cell value of the colId or colIndex column has duplicate values, otherwise returns true."
    },
    {
        "related": "column",
        "name": "getColId",
        "param": "colIndex(Number)",
        "return": "String",
        "remarkKor": "colIndex번째 열의 colId를 반환한다.",
        "remarkEng": "Returns the colId of the colIndex-th column."
    },
    {
        "related": "column",
        "name": "getColIndex",
        "param": "colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "colId 열의 colIndex를 반환한다.",
        "remarkEng": "Returns the colIndex of the colId column."
    },
    {
        "related": "column",
        "name": "setColName",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 colName을 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the colName of the colId or colIndex column. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColName",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 colName을 반환한다.",
        "remarkEng": "Returns the colName of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "openFilter",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 filter을 오픈한다. 정상 동작 시 true 반환.",
        "remarkEng": "Opens the filter of the colId or colIndex column. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "closeFilter",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 filter을 닫는다. 정상 동작 시 true 반환.",
        "remarkEng": "Closes the filter of the colId or colIndex column. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "setColFilterValue",
        "param": "colId(String) or colIndex(Number), filterValue(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 filter의 option을 filterValue의 값으로 지정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the option of the filter of the colId or colIndex column to the value of filterValue. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColFilterValues",
        "param": "colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "colId or colIndex 열의 filter 값들을 가져온다.",
        "remarkEng": "Gets the filter values of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "getColFilterValue",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 filter 현재 설정된 값을 가져온다.",
        "remarkEng": "Gets the current filter value set for the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColUntarget",
        "param": "colId(String) or colIndex(Number), isUntarget(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 untarget을 설정한다. Untarget이 true 시 해당 col을 선택할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the untarget of the colId or colIndex column. If untarget is true, the column cannot be selected. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "setColRowMerge",
        "param": "colId(String) or colIndex(Number), isRowMerge(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의. row-merge를 설정한다. row-merge가 true 시 해당 col은 행으로 merge한다. 정상 동작 시 true 반환.\n"
                    + "Merge는 만나는 각 cell의 data-type, format, value가 동일할 시에 merge된다.",
        "remarkEng": "Sets the row-merge of the colId or colIndex column. If row-merge is true, the column merges by row. Returns true if it operates normally.\n"
                    + "Merge occurs when the data-type, format, and value of each cell encountered are the same."
    },
    {
        "related": "column",
        "name": "isColRowMerge",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 isRowMerge를 반환한다.",
        "remarkEng": "Returns the isRowMerge status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColColMerge",
        "param": "colId(String) or colIndex(Number), isColMerge(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의. col-merge를 설정한다. col-merge가 true 시 해당 col은 행으로 merge한다. 정상 동작 시 true 반환.\n"
                    + "Merge는 만나는 각 cell의 data-type, format, value가 동일할 시에 merge된다. col-merge는 col-merge가 true인 행을 기준으로 앞의 행과 col merge한다.",
        "remarkEng": "Sets the col-merge of the colId or colIndex column. If col-merge is true, the column merges by column. Returns true if it operates normally.\n"
                    + "Merge occurs when the data-type, format, and value of each cell encountered are the same. col-merge merges with the previous row based on the row with col-merge set to true."
    },
    {
        "related": "column",
        "name": "isColColMerge",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 isColMerge를 반환한다.",
        "remarkEng": "Returns the isColMerge status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColVisible",
        "param": "colId(String) or colIndex(Number), isVisible(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 visible을 설정한다. Visble이 false이면 해당 column은 display none처리 됨. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the visible status of the colId or colIndex column. If visible is false, the column is displayed as none. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColVisible",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 visible을 반환한다.",
        "remarkEng": "Returns the visible status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColRequired",
        "param": "colId(String) or colIndex(Number), isRequired(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 required를 설정한다. Required가 true일 시 checkRequired()를 통해 필수 입력 체크할 수 있다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the required status of the colId or colIndex column. If required is true, mandatory input can be checked through checkRequired(). Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColRequired",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 required를 반환한다.",
        "remarkEng": "Returns the required status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColResizable",
        "param": "colId(String) or colIndex(Number), isResizable(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 resizable을 설정한다. Resizble이 false이면 column width를 사용자가 조작할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the resizable status of the colId or colIndex column. If resizable is false, the user cannot adjust the column width. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColResizable",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 resizable을 반환한다.",
        "remarkEng": "Returns the resizable status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColSortable",
        "param": "colId(String) or colIndex(Number), isSorable(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 sortable을 설정한다. Sortable이 false이면 해당 column은 정렬기능을 사용할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the sortable status of the colId or colIndex column. If sortable is false, the column cannot use the sorting function. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColSortable",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 sortable을 반환한다.",
        "remarkEng": "Returns the sortable status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFilterable",
        "param": "colId(String) or colIndex(Number), isFilterable(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 filterable을 설정한다. filterable이 false이면 해당 column은 필터기능을 사용할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the filterable status of the colId or colIndex column. If filterable is false, the column cannot use the filter function. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColFilterable",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 filterable을 반환한다.",
        "remarkEng": "Returns the filterable status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColOriginWidth",
        "param": "colId(String) or colIndex(Number), cssTextOriginWidth(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 originWidth를 설정한다. 'px'또는 '%'만 가능한 cssText이다. 설정 시 크기도 변경한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the originWidth of the colId or colIndex column. CSS text can only be 'px' or '%'. Changes the size when set. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColOriginWidth",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 originWidth를 반환한다.",
        "remarkEng": "Returns the originWidth of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColDataType",
        "param": "colId(String) or colIndex(Number), dataType(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 data-type을 설정한다. 정상 동작 시 true 반환. data-type : 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'",
        "remarkEng": "Sets the data-type of the colId or colIndex column. Returns true if it operates normally. data-type: 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'"
    },
    {
        "related": "column",
        "name": "getColDataType",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 data-type을 반환한다.",
        "remarkEng": "Returns the data-type of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColSelectSize",
        "param": "colId(String) or colIndex(Number), cssTextSelectWidth(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 select-size를 cssText SelectWidth로 설정한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the select-size of the colId or colIndex column to cssText SelectWidth. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColSelectSize",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 select-size를 반환한다.",
        "remarkEng": "Returns the select-size of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColLocked",
        "param": "colId(String) or colIndex(Number), isLocked(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 locked를 설정한다. Locked가 true시 column의 cell값을 변경할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the locked status of the colId or colIndex column. If locked is true, the cell value of the column cannot be changed. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColLocked",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 locked를 반환한다.",
        "remarkEng": "Returns the locked status of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColLockedColor",
        "param": "colId(String) or colIndex(Number), isLockedColor(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 locked-color를 설정한다. locked-color가 true시 locked된 cell에 대해 배경색을 표현한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the locked-color of the colId or colIndex column. If locked-color is true, the background color is displayed for locked cells. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColLockedColor",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 locked-color를 반환한다.",
        "remarkEng": "Returns the locked-color of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFormat",
        "param": "colId(String) or colIndex(Number), format(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 format을 설정한다. Format은 cell의 data-type이 'mask'와 'number'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the format of the colId or colIndex column. Format is valid when the cell's data-type is 'mask' and 'number'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColFormat",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 format을 반환한다.",
        "remarkEng": "Returns the format of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColCodes",
        "param": "colId(String) or colIndex(Number), codes(Array)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 codes를 설정한다. Codes는 cell의 data-type이 'code'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the codes of the colId or colIndex column. Codes are valid when the cell's data-type is 'code'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColCodes",
        "param": "colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "colId or colIndex 열의 codes를 반환한다.",
        "remarkEng": "Returns the codes of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColDefaultCode",
        "param": "colId(String) or colIndex(Number), defaultCode(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 default-code를 설정한다. default-code는 cell의 data-type이 'code'일 때 유효하다. 값이 없을 경우 default값. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the default-code of the colId or colIndex column. default-code is valid when the cell's data-type is 'code'. If there is no value, it is the default value. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColDefaultCode",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 default-code를 반환한다.",
        "remarkEng": "Returns the default-Code of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColMaxLength",
        "param": "colId(String) or colIndex(Number), maxLength(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 maxLength를 설정한다. maxLength는 cell의 data-type이 'text'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the maxLength of the colId or colIndex column. MaxLength is valid when the cell's data-type is 'text'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColMaxLength",
        "param": "colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "colId or colIndex 열의 maxLength를 반환한다.",
        "remarkEng": "Returns the maxLength of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColMaxByte",
        "param": "colId(String) or colIndex(Number), maxByte(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 maxByte를 설정한다. maxByte는 cell의 data-type이 'text'일 때 유효하다. 정상 동작 시 true 반환.\n"
                    + "특수기호 등의 byte 산정을 어떻게 할 지는 vg.lessoreq0x7ffByte(charCode <= 0x7FF), vg.lessoreq0xffffByte(charCode <= 0xFFFF), vg.greater0xffffByte(charCode > 0xFFFF)으로 설정할 수 있다. 기본값은 2, 3, 4.",
        "remarkEng": "Sets the maxByte of the colId or colIndex column. MaxByte is valid when the cell's data-type is 'text'. Returns true if it operates normally.\n"
                    + "How to calculate the byte of special symbols can be set to vg.lessoreq0x7ffByte (charCode <= 0x7FF), vg.lessoreq0xffffByte (charCode <= 0xFFFF), vg.greater0xffffByte (charCode > 0xFFFF). The default values are 2, 3, 4."
    },
    {
        "related": "column",
        "name": "getColMaxByte",
        "param": "colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "colId or colIndex 열의 maxByte를 반환한다.",
        "remarkEng": "Returns the maxByte of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColMaxNumber",
        "param": "colId(String) or colIndex(Number), maxNumber(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 maxNumber를 설정한다. maxNumber는 cell의 data-type이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the maxNumber of the colId or colIndex column. MaxNumber is valid when the cell's data-type is 'number'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColMaxNumber",
        "param": "colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "colId or colIndex 열의 maxNumber를 반환한다.",
        "remarkEng": "Returns the maxNumber of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColMinNumber",
        "param": "colId(String) or colIndex(Number), minNumber(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 minNumber를 설정한다. minNumber는 cell의 data-type이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the minNumber of the colId or colIndex column. MinNumber is valid when the cell's data-type is 'number'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColMinNumber",
        "param": "colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "colId or colIndex 열의 minNumber를 반환한다.",
        "remarkEng": "Returns the minNumber of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColRoundNumber",
        "param": "colId(String) or colIndex(Number), roundNumber(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 roundNumber를 설정한다. roundNumber는 cell의 data-type이 'number'일 때 유효하다. 정상 동작 시 true 반환.\n"
                    + "roundNumber 양의 정수 : 반올림 할 소수점 자리 지정. roundNumber 음의 정수 : 반올림 할 정수부 자리 지정.",
        "remarkEng": "Sets the roundNumber of the colId or colIndex column. RoundNumber is valid when the cell's data-type is 'number'. Returns true if it operates normally.\n"
                    + "roundNumber positive integer: specifies the decimal place to be rounded. roundNumber negative integer: specifies the integer place to be rounded."
    },
    {
        "related": "column",
        "name": "getColRoundNumber",
        "param": "colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "colId or colIndex 열의 roundNumber를 반환한다.",
        "remarkEng": "Returns the roundNumber of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColAlign",
        "param": "colId(String) or colIndex(Number), align(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 align을 설정한다. 'left', 'center', 'right'중 하나. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the align of the colId or colIndex column. Choose from 'left', 'center', 'right'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColAlign",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 align을 반환한다.",
        "remarkEng": "Returns the align of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColVerticalAlign",
        "param": "colId(String) or colIndex(Number), verticalAlign(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the vertical-align of the colId or colIndex column. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColVerticalAlign",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 vertical_align을 반환한다.",
        "remarkEng": "Returns the vertical_align of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColOverflowWrap",
        "param": "colId(String) or colIndex(Number), overflowWrap(String)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 overflow-wrap을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the overflow-wrap of the colId or colIndex column. Inserts CSS text strings. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColOverflowWrap",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 overflow-wrap을 반환한다.",
        "remarkEng": "Returns the overflow-wrap of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColWordBreak",
        "param": "colId(String) or colIndex(Number), wordBreak(String)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 word-braek을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the word-break of the colId or colIndex column. Inserts CSS text strings. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColWordBreak",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 word-braek을 반환한다.",
        "remarkEng": "Returns the word-break of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColWhiteSpace",
        "param": "colId(String) or colIndex(Number), whiteSpace(String)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 white-space를 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the white-space of the colId or colIndex column. Inserts CSS text strings. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "getColWhiteSpace",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 white-space를반환한다.",
        "remarkEng": "Returns the white-space of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColBackColor",
        "param": "colId(String) or colIndex(Number), cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 background-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Sets the background color of the colId or colIndex column. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "column",
        "name": "getColBackColor",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 background-color를 반환한다.",
        "remarkEng": "Returns the background color of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFontColor",
        "param": "colId(String) or colIndex(Number), cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Sets the font color of the colId or colIndex column. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "column",
        "name": "getColFontColor",
        "param": "colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "colId or colIndex 열의 font-color를 반환한다.",
        "remarkEng": "Returns the font color of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFontBold",
        "param": "colId(String) or colIndex(Number), isFontBold(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-bold를 설정한다. font-bold가 true이면 굵은 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontBold of the colId or colIndex column. If fontBold is true, the text is displayed in bold. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColFontBold",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-bold를 반환한다.",
        "remarkEng": "Returns the fontBold of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFontItalic",
        "param": "colId(String) or colIndex(Number), isFontItalic(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-italic를 설정한다. font-italic가 true이면 기울게 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontItalic of the colId or colIndex column. If fontItalic is true, the text is displayed in italics. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColFontItalic",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-italic를 반환한다.",
        "remarkEng": "Returns the fontItalic of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFontThruline",
        "param": "colId(String) or colIndex(Number), isFontThruline(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-thruline를 설정한다. font-thruline가 true이면 취소선 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontThruline of the colId or colIndex column. If fontThruline is true, the text is displayed with a strikethrough. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColFontThruline",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-thruline를 반환한다.",
        "remarkEng": "Returns the fontThruline of the colId or colIndex column."
    },
    {
        "related": "column",
        "name": "setColFontUnderline",
        "param": "colId(String) or colIndex(Number), isFontUnderline(Boolean)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-underline를 설정한다. font-underline가 true이면 밑줄 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontUnderline of the colId or colIndex column. If fontUnderline is true, the text is displayed with an underline. Returns true if it operates normally."
    },
    {
        "related": "column",
        "name": "isColFontUnderline",
        "param": "colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "colId or colIndex 열의 font-underline를 반환한다.",
        "remarkEng": "Returns the fontUnderline of the colId or colIndex column."
    },
    {
        "related": "row",
        "name": "addRow",
        "param": "",
        "return": "Boolean",
        "remarkKor": "colInfo를 참조하여 1행을 마지막 행 뒤에 추가한다. 값은 모두 null삽입. 정상 동작 시 true 반환.\n"
                    + "Ex) gridId.addRow();",
        "remarkEng": "Adds one row after the last row referencing colInfo. All values are inserted as null. Returns true if it operates normally.\n"
                    + "Ex) gridId.addRow();",
    },
    {
        "related": "row",
        "name": "addRow",
        "param": "keyValueOrDatas(1row) ({} or [{},{}...])",
        "return": "Boolean",
        "remarkKor": "1행 형태의 KeyValue 입력 시 colInfo를 참조하여 1행을 마지막 행 뒤에 추가하고. keyValue의 값을 삽입한다. 정상동작 시 true 반환.\n"
                    + "1행 형태의 Datas 입력 시 Datas의 값과 cell정보를 참조하여 1행을 마지막 행 뒤에 추가한다. 정상동작 시 true 반환.\n"
                    + "Ex1) gridId.addRow({colId1:'value1', colId2:'value2', colId3:'value3'});\n"
                    + "Ex2) gridId.addRow([{id:'colId1', value:'value1'}, id:'colId2', value:'value2'}, id:'colId3', value:'value3'}]);",
        "remarkEng": "When inputting one row in KeyValue form, it adds one row after the last row referencing colInfo and inserts the values of keyValue. Returns true if it operates normally.\n"
                    + "When inputting one row in Datas form, it adds one row after the last row referencing the values and cell information of Datas. Returns true if it operates normally.\n"
                    + "Ex1) gridId.addRow({colId1:'value1', colId2:'value2', colId3:'value3'});\n"
                    + "Ex2) gridId.addRow([{id:'colId1', value:'value1'}, id:'colId2', value:'value2'}, id:'colId3', value:'value3'}]);",
    },
    {
        "related": "row",
        "name": "addRow",
        "param": "row(Number), keyValueOrDatas(1row) ({} or [{},{}...])",
        "return": "Boolean",
        "remarkKor": "row번째 1행 형태의 KeyValue 입력 시 colInfo를 참조하여 1행을 추가한다. 정상동작 시 true 반환.\n"
                    + "row번째 1행 형태의 Datas 입력 시 Datas의 값과 cell정보를 참조하여 1행을 추가한다. 정상동작 시 true 반환.\n"
                    + "Ex1) gridId.addRow(1, {colId1:'value1', colId2:'value2', colId3:'value3'});\n"
                    + "Ex2) gridId.addRow(1, [{id:'colId1', value:'value1'}, id:'colId2', value:'value2'}, id:'colId3', value:'value3'}]);",
        "remarkEng": "Adds one row referencing keyValueOrDatas in one row form behind the row-th row. Returns true if it operates normally.\n"
                    + "Adds one row referencing the values and cell information of Datas in one row form behind the row-th row. Returns true if it operates normally.\n"
                    + "Ex1) gridId.addRow(1, {colId1:'value1', colId2:'value2', colId3:'value3'});\n"
                    + "Ex2) gridId.addRow(1, [{id:'colId1', value:'value1'}, id:'colId2', value:'value2'}, id:'colId3', value:'value3'}]);",
    },
    {
        "related": "row",
        "name": "removeRow",
        "param": "row(Number)",
        "return": "Object",
        "remarkKor": "row번째 행을 삭제한다. 삭제한 행의 값을 객체 형태로 반환한다. getRowValue()형태.",
        "remarkEng": "Deletes the row-th row. Returns the values of the deleted row in object form. In the form of getRowValue()."
    },
    {
        "related": "row",
        "name": "setRowStatus",
        "param": "row(Number), status(String)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 v-g-status컬럼의 값을 변경한다. 'C', 'U', 'D' 값만 가능. 정상동작 시 true 반환.",
        "remarkEng": "Changes the value of the v-g-status column of the row-th row. Only 'C', 'U', 'D' values are possible. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "getRowStatus",
        "param": "row(Number)",
        "return": "",
        "remarkKor": "row번째 행의 v-g-status컬럼의 값을 반환한다.",
        "remarkEng": "Returns the value of the v-g-status column of the row-th row."
    },
    {
        "related": "row",
        "name": "setRowDatas",
        "param": "row(Number), cellDatas([{},{}...])",
        "return": "Boolean",
        "remarkKor": "row번째 행을 cellDatas(각 cell에 대한 값과 정보가 담긴 배열)로 변경한다. 정상동작 시 true 반환.\n"
                    + "Ex) gridId.setRowDatas(1, [{id:'colId1', value:'value1'}, id:'colId2', value:'value2'}, id:'colId3', value:'value3'}]);",
        "remarkEng": "Changes the row-th row to cellDatas (an array containing values and information for each cell). Returns true if it operates normally.\n"
                    + "Ex) gridId.setRowDatas(1, [{id:'colId1', value:'value1'}, id:'colId2', value:'value2'}, id:'colId3', value:'value3'}]);",
    },
    {
        "related": "row",
        "name": "getRowDatas",
        "param": "row(Number)",
        "return": "",
        "remarkKor": "row번째 행의 cellDatas(각 cell에 대한 값과 정보가 담긴 배열)를 반환한다.",
        "remarkEng": "Returns the cellDatas (an array containing values and information for each cell) of the row-th row."
    },
    {
        "related": "row",
        "name": "setRowValues",
        "param": "row(Number) values({}), doRecode(Boolean) = false",
        "return": "Boolean",
        "remarkKor": "row번째 행의 cell에 values({colId:value, colId:value…})를 통해 값을 삽입한다.\n"
                    + "doRecode가 true일 시 사용자가 실행취소, 재실행을 할 수 있다. 정상 동작 시 true 반환.\n"
                    + "Ex) gridId.setRowValues(1, {colId1:'value1', colId2:'value2', colId3:'value3'});",
        "remarkEng": "Inserts values into the cells of the row-th row through values({colId:value, colId:value…}).\n"
                    + "If doRecode is true, the user can undo or redo. Returns true if it operates normally.\n"
                    + "Ex) gridId.setRowValues(1, {colId1:'value1', colId2:'value2', colId3:'value3'});",
    },
    {
        "related": "row",
        "name": "getRowValues",
        "param": "row(Number)",
        "return": "",
        "remarkKor": "row번째 행의 cell의 values({colId:value, colId:value…})를 반환한다. 각 getCellValue()의 값이다.",
        "remarkEng": "Returns the values({colId:value, colId:value…}) of the cells of the row-th row. It is the value of each getCellValue()."
    },
    {
        "related": "row",
        "name": "getRowTexts",
        "param": "row(Number)",
        "return": "",
        "remarkKor": "row번째 행의 cell의 texts({colId:text, colId:text…})를 반환한다. 각 getCellText()의 값이다.",
        "remarkEng": "Returns the texts({colId:text, colId:text…}) of the cells of the row-th row. It is the value of each getCellText()."
    },
    {
        "related": "row",
        "name": "setRowVisible",
        "param": "row(Number), isVisible(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 visible을 설정한다. visible이 false일 때 해당 행이 숨김처리 된다. 정상동작 시 true 반환.",
        "remarkEng": "Sets the visible status of the row-th row. If visible is false, the row is hidden. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "isRowVisible",
        "param": "row(Number)",
        "return": "",
        "remarkKor": "row번째 행의 visible을 반환한다.",
        "remarkEng": "Returns the visible status of the row-th row."
    },
    {
        "related": "row",
        "name": "setRowDataType",
        "param": "row(Number), dataType(String)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 data-type을 설정한다. 정상동작 시 true 반환. data-type : 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'",
        "remarkEng": "Sets the data-type of the row-th row. Returns true if it operates normally. data-type: 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'"
    },
    {
        "related": "row",
        "name": "setRowLocked",
        "param": "row(Number), isRowLocked(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 locked를 설정한다. Locked가 true시 column의 cell값을 변경할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the locked status of the row-th row. If locked is true, the cell value of the column cannot be changed. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowLockedColor",
        "param": "row(Number), isRowLockedColor(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 lockedColor를 설정한다. locked-color가 true시 locked된 cell에 대해 배경색을 표현한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the lockedColor of the row-th row. If lockedColor is true, the background color is displayed for locked cells. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowAlign",
        "param": "row(Number), align(String)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 align을 설정한다. 'left', 'center', 'right'중 하나. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the align of the row-th row. Choose from 'left', 'center', 'right'. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowVerticalAlign",
        "param": "row(Number), verticalAlign(String)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상동작 시 true 반환.",
        "remarkEng": "Sets the vertical-align of the row-th row. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowBackColor",
        "param": "row(Number), cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 background-color를 설정한다. 정상동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Sets the background color of the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "row",
        "name": "setRowFontColor",
        "param": "row(Number), cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 font-color를 설정한다. 정상동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Sets the font color of the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "row",
        "name": "setRowFontBold",
        "param": "row(Number), isFontBold(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 fontBold를 설정한다. fontBold가 true이면 굵은 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontBold of the row-th row. If fontBold is true, the text is displayed in bold. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowFontItalic",
        "param": "row(Number), isFontItalic(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 fontItalic를 설정한다. fontItalic가 true이면 기울게 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontItalic of the row-th row. If fontItalic is true, the text is displayed in italics. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowFontThruline",
        "param": "row(Number), isFontThruline(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 fontThruline를 설정한다. fontThruline가 true이면 취소선 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontThruline of the row-th row. If fontThruline is true, the text is displayed with a strikethrough. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "setRowFontUnderline",
        "param": "row(Number), isFontUnderline(Boolean)",
        "return": "Boolean",
        "remarkKor": "row번째 행의 fontUnderline를 설정한다. fontUnderline가 true이면 밑줄 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontUnderline of the row-th row. If fontUnderline is true, the text is displayed with an underline. Returns true if it operates normally."
    },
    {
        "related": "row",
        "name": "searchRowsWithMatched",
        "param": "matches(Object)",
        "return": "Array",
        "remarkKor": "matches객체의 {colId:value, colId:value..} 조건을 통해 colId와 값이 일치하는 행을 반환한다. 조건이 모두 일치해야 반환한다. 행의 번호를 배열로 반환한다.\n"
                    + "Ex) gridId.searchRowsWithMatched({dept:'인사팀',salary:'5000'})",
        "remarkEng": "Returns rows that match the colId and value based on the conditions of the matches object {colId:value, colId:value..}. All conditions must match to be returned. Returns the row numbers as an array.\n"
                    + "Ex) gridId.searchRowsWithMatched({dept:'Human Resources Team',salary:'5000'})",
    },
    {
        "related": "row",
        "name": "searchRowDatasWithMatched",
        "param": "matches(Object)",
        "return": "Array",
        "remarkKor": "matches객체의 {colId:value, colId:value..} 조건을 통해 colId와 값이 일치하는 행을 반환한다. 조건이 모두 일치해야 반환한다. 행을 Datas [[{},{}..],[{},{}..]...] 형태로 반환한다.\n"
                    + "Ex) gridId.searchRowsWithMatched({dept:'인사팀',salary:'5000'})",
        "remarkEng": "Returns rows that match the colId and value based on the conditions of the matches object {colId:value, colId:value..}. All conditions must match to be returned. Returns the rows as Datas [[{},{}..],[{},{}..]...].\n"
                    + "Ex) gridId.searchRowsWithMatched({dept:'Human Resources Team',salary:'5000'})",
    },
    {
        "related": "row",
        "name": "searchRowValuesWithMatched",
        "param": "matches(Object)",
        "return": "Array",
        "remarkKor": "matches객체의 {colId:value, colId:value..} 조건을 통해 colId와 값이 일치하는 행을 반환한다. 조건이 모두 일치해야 반환한다. 행을 keyValues [{},{}...] 형태로 반환한다.\n"
                    + "Ex) gridId.searchRowsWithMatched({dept:'인사팀',salary:'5000'})",
        "remarkEng": "Returns rows that match the colId and value based on the conditions of the matches object {colId:value, colId:value..}. All conditions must match to be returned. Returns the rows as keyValues [{},{}... ].\n"
                    + "Ex) gridId.searchRowsWithMatched({dept:'Human Resources Team',salary:'5000'})",
    },
    {
        "related": "row",
        "name": "searchRowsWithFunction",
        "param": "matchFunction(function)",
        "return": "Array",
        "remarkKor": "사용자가 삽입하는 matchFunction을 통해 반환값이 true인 행을 반환한다. matchFunction에는 파라메터로 getRowDatas(row)결과 값이 전달된다. 행의 번호를 배열로 반환한다.\n"
                    + "Ex) gridId.searchRowsWithFunction(function (rowDatas) {if(rowDatas[3].value === '인사팀' && rowDatas[4].value >= 5000) return true})",
        "remarkEng": "Returns rows for which the return value is true through the matchFunction inserted by the user. The result value of getRowDatas(row) is passed as a parameter to matchFunction. Returns the row numbers as an array.\n"
                    + "Ex) gridId.searchRowsWithFunction(function (rowDatas) {if(rowDatas[3].value === 'Human Resources Team' && rowDatas[4].value >= 5000) return true})",
    },
    {
        "related": "row",
        "name": "searchRowDatasWithFunction",
        "param": "matchFunction(function)",
        "return": "Array",
        "remarkKor": "사용자가 삽입하는 matchFunction을 통해 반환값이 true인 행을 반환한다. matchFunction에는 파라메터로 getRowDatas(row)결과 값이 전달된다. 행을 Datas [[{},{}..],[{},{}..]...] 형태로 반환한다.\n"
                    + "Ex) gridId.searchRowsWithFunction(function (rowDatas) {if(rowDatas[3].value === '인사팀' && rowDatas[4].value >= 5000) return true})",
        "remarkEng": "Returns rows for which the return value is true through the matchFunction inserted by the user. The result value of getRowDatas(row) is passed as a parameter to matchFunction. Returns the rows as Datas [[{},{}..],[{},{}..]...].\n"
                    + "Ex) gridId.searchRowsWithFunction(function (rowDatas) {if(rowDatas[3].value === 'Human Resources Team' && rowDatas[4].value >= 5000) return true})",
    },
    {
        "related": "row",
        "name": "searchRowValuesWithFunction",
        "param": "matchFunction(function)",
        "return": "Array",
        "remarkKor": "사용자가 삽입하는 matchFunction을 통해 반환값이 true인 행을 반환한다. matchFunction에는 파라메터로 getRowDatas(row)결과 값이 전달된다. 행을 keyValues [{},{}...] 형태로 반환한다.\n"
                    + "Ex) gridId.searchRowsWithFunction(function (rowDatas) {if(rowDatas[3].value === '인사팀' && rowDatas[4].value >= 5000) return true})",
        "remarkEng": "Returns rows for which the return value is true through the matchFunction inserted by the user. The result value of getRowDatas(row) is passed as a parameter to matchFunction. Returns the rows as keyValues [{},{}... ].\n"
                    + "Ex) gridId.searchRowsWithFunction(function (rowDatas) {if(rowDatas[3].value === 'Human Resources Team' && rowDatas[4].value >= 5000) return true})",
    },
    {
        "related": "cell",
        "name": "setCellData",
        "param": "row(Number), colId(String) or colIndex(Number), cellData(Object)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 정보를 변경한다. cellData는 {id:'colId',value:'value'..}인 객체형태이다. 정상 동작 시 true 반환.",
        "remarkEng": "Changes the information of the cell in the colId or colIndex column in the row-th row. cellData is an object in the form {id:'colId', value:'value'..}. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellData",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Object",
        "remarkKor": "row행 colId or colIndex 열 cell의 정보를 반환한다. cellData는 {id:'colId',value:'value'..}인 객체형태이다.",
        "remarkEng": "Returns the information of the cell in the colId or colIndex column in the row-th row. cellData is an object in the form {id:'colId', value:'value'..}."
    },
    {
        "related": "cell",
        "name": "setCellValue",
        "param": "row(Number), colId(String) or colIndex(Number), value(var), doRecode(Boolean) = false",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 value를 변경한다. 정상 동작 시 true 반환.",
        "remarkEng": "Changes the value of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellValue",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "var",
        "remarkKor": "row행 colId or colIndex 열 cell의 value를 반환한다.",
        "remarkEng": "Returns the value of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "getCellText",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 text를(format등이 적용된 값) 반환한다.",
        "remarkEng": "Returns the text of the cell in the colId or colIndex column in the row-th row (values applied with format, etc.)."
    },
    {
        "related": "cell",
        "name": "setCellRequired",
        "param": "row(Number), colId(String) or colIndex(Number), isRequired(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 required를 설정한다. Required가 true시 checkRequired()를 통해 필수 체크할 수 있다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the required status of the cell in the colId or colIndex column in the row-th row. If required is true, it can be checked through checkRequired(). Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellRequired",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 required를 반환한다.",
        "remarkEng": "Returns the required status of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellDataType",
        "param": "row(Number), colId(String) or colIndex(Number), dataType(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 data-type을 설정한다. 정상 동작 시 true 반환.\n"
                    + "data-type : 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'",
        "remarkEng": "Sets the data-type of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally.\n"
                    + "data-type: 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'"
    },
    {
        "related": "cell",
        "name": "getCellDataType",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 data-type을 반환한다.",
        "remarkEng": "Returns the data-type of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellLocked",
        "param": "row(Number), colId(String) or colIndex(Number), isLocked(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 locked를 설정한다. Locked가 true시 column의 cell값을 변경할 수 없다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the locked status of the cell in the colId or colIndex column in the row-th row. If locked is true, the cell value of the column cannot be changed. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellLocked",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 locked를 반환한다.",
        "remarkEng": "Returns the locked status of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellLockedColor",
        "param": "row(Number), colId(String) or colIndex(Number), isLockedColor(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 lockedColor를 설정한다. locked-color가 true시 locked된 cell에 대해 배경색을 표현한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the lockedColor of the cell in the colId or colIndex column in the row-th row. If lockedColor is true, the background color is displayed for locked cells. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellLockedColor",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 lockedColor를 반환한다.",
        "remarkEng": "Returns the lockedColor of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellFormat",
        "param": "row(Number), colId(String) or colIndex(Number), format(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 format을 설정한다. Format은 cell의 data-type이 'mask'와 'number'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the format of the cell in the colId or colIndex column in the row-th row. Format is valid when the cell's data-type is 'mask' and 'number'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellFormat",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 format을 반환한다.",
        "remarkEng": "Returns the format of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellCodes",
        "param": "row(Number), colId(String) or colIndex(Number), codes(Array)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 codes를 설정한다. Codes는 cell의 data-type이 'code'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the codes of the cell in the colId or colIndex column in the row-th row. Codes are valid when the cell's data-type is 'code'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellCodes",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Array",
        "remarkKor": "row행 colId or colIndex 열 cell의 codes를 반환한다.",
        "remarkEng": "Returns the codes of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellDefaultCode",
        "param": "row(Number), colId(String) or colIndex(Number), defaultCode(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 default-code를 설정한다. default-code는 cell의 data-type이 'code'일 때 유효하다. 값이 없을 경우 default값은 빈값이다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the default-code of the cell in the colId or colIndex column in the row-th row. default-code is valid when the cell's data-type is 'code'. If there is no value, it uses the default value null. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellDefaultCode",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 default-code를 반환한다.",
        "remarkEng": "Returns the default-code of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellMaxLength",
        "param": "row(Number), colId(String) or colIndex(Number), maxLength(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 maxLength를 설정한다. maxLength는 cell의 data-type이 'text'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the maxLength of the cell in the colId or colIndex column in the row-th row. maxLength is valid when the cell's data-type is 'text'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellMaxLength",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "row행 colId or colIndex 열 cell의 maxLength를 반환한다.",
        "remarkEng": "Returns the maxLength of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellMaxByte",
        "param": "row(Number), colId(String) or colIndex(Number), maxByte(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 maxByte를 설정한다. maxByte는 cell의 data-type이 'text'일 때 유효하다. 정상 동작 시 true 반환.\n"
                    + "특수기호 등의 byte 산정을 어떻게 할 지는 vg.lessoreq0x7ffByte(charCode <= 0x7FF), vg.lessoreq0xffffByte(charCode <= 0xFFFF), vg.greater0xffffByte(charCode > 0xFFFF)으로 설정할 수 있다. 기본값은 2, 3, 4.",
        "remarkEng": "Sets the maxByte of the cell in the colId or colIndex column in the row-th row. maxByte is valid when the cell's data-type is 'text'. Returns true if it operates normally.\n"
                    + "How to calculate the byte of special characters can be set with vg.lessoreq0x7ffByte(charCode <= 0x7FF), vg.lessoreq0xffffByte(charCode <= 0xFFFF), vg.greater0xffffByte(charCode > 0xFFFF). Default values are 2, 3, 4."
    },
    {
        "related": "cell",
        "name": "getCellMaxByte",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "row행 colId or colIndex 열 cell의 maxByte를 반환한다.",
        "remarkEng": "Returns the maxByte of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellMaxNumber",
        "param": "row(Number), colId(String) or colIndex(Number), maxNumber(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 maxNumber를 설정한다. maxNumber는 cell의 data-type이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the maxNumber of the cell in the colId or colIndex column in the row-th row. maxNumber is valid when the cell's data-type is 'number'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellMaxNumber",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "row행 colId or colIndex 열 cell의 maxNumber를 반환한다.",
        "remarkEng": "Returns the maxNumber of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellMinNumber",
        "param": "row(Number), colId(String) or colIndex(Number), minNumber(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 minNumber를 설정한다. minNumber는 cell의 data-type이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the minNumber of the cell in the colId or colIndex column in the row-th row. minNumber is valid when the cell's data-type is 'number'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellMinNumber",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "row행 colId or colIndex 열 cell의 minNumber를 반환한다.",
        "remarkEng": "Returns the minNumber of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellRoundNumber",
        "param": "row(Number), colId(String) or colIndex(Number), roundNumber(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 roundNumber를 설정한다. roundNumber는 cell의 data-type이 'number'일 때 유효하다. 정상 동작 시 true 반환.\n"
                    + "roundNumber 양의 정수 : 반올림 할 소수점 자리 지정. roundNumber 음의 정수 : 반올림 할 정수부 자리 지정.",
        "remarkEng": "Sets the roundNumber of the cell in the colId or colIndex column in the row-th row. roundNumber is valid when the cell's data-type is 'number'. Returns true if it operates normally.\n"
                    + "roundNumber positive integer: specifies the decimal place to be rounded. roundNumber negative integer: specifies the integer place to be rounded."
    },
    {
        "related": "cell",
        "name": "getCellRoundNumber",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Number",
        "remarkKor": "row행 colId or colIndex 열 cell의 roundNumber를 반환한다.",
        "remarkEng": "Returns the roundNumber of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellAign",
        "param": "row(Number), colId(String) or colIndex(Number), align(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 align을 설정한다. 'left', 'center', 'right'중 하나. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the align of the cell in the colId or colIndex column in the row-th row. Choose from 'left', 'center', 'right'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellAign",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 align을 반환한다.",
        "remarkEng": "Returns the align of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellverticalAlign",
        "param": "row(Number), colId(String) or colIndex(Number), verticalAlign(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the vertical-align of the cell in the colId or colIndex column in the row-th row. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellverticalAlign",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 vertical_align을 반환한다.",
        "remarkEng": "Returns the vertical_align of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellOverflowWrap",
        "param": "row(Number), colId(String) or colIndex(Number), overflowWrap(String)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열의 overflow-wrap을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the overflow-wrap of the cell in the colId or colIndex column in the row-th row. Inserts a cssText string. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellOverflowWrap",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열의 overflow-wrap을 반환한다.",
        "remarkEng": "Returns the overflow-wrap of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellWordBreak",
        "param": "row(Number), colId(String) or colIndex(Number), wordBreak(String)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열의 word-braek을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the word-break of the cell in the colId or colIndex column in the row-th row. Inserts a cssText string. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellWordBreak",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열의 word-braek을 반환한다.",
        "remarkEng": "Returns the word-break of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellWhiteSpace",
        "param": "row(Number), colId(String) or colIndex(Number), whiteSpace(String)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열의 white-space를 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the white-space of the cell in the colId or colIndex column in the row-th row. Inserts a cssText string. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "getCellWhiteSpace",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열의 white-space를 반환한다.",
        "remarkEng": "Returns the white-space of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellVisible",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열의 visible을 설정한다. 정확히는 cell의 자식 node의 visible. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the visible of the cell in the colId or colIndex column in the row-th row. Specifically, it sets the visible of the child node of the cell. Inserts a cssText string. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellVisible",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열의 visible을 반환한다. 정확히는 cell의 자식 node의 visible.",
        "remarkEng": "Returns the visible of the cell in the colId or colIndex column in the row-th row. Specifically, it returns the visible of the child node of the cell."
    },
    {
        "related": "cell",
        "name": "setCellBackColor",
        "param": "row(Number), colId(String) or colIndex(Number), cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 background-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Sets the background-color of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "cell",
        "name": "getCellBackColor",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 background-color를 반환한다.",
        "remarkEng": "Returns the background-color of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellFontColor",
        "param": "row(Number), colId(String) or colIndex(Number), cssTextHexColor(String)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 font-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
        "remarkEng": "Sets the font-color of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
    },
    {
        "related": "cell",
        "name": "getCellFontColor",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "String",
        "remarkKor": "row행 colId or colIndex 열 cell의 font-color를 반환한다.",
        "remarkEng": "Returns the font-color of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellFontBold",
        "param": "row(Number), colId(String) or colIndex(Number), isFontBold(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontBold를 설정한다. fontBold가 true이면 굵은 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontBold of the cell in the colId or colIndex column in the row-th row. If fontBold is true, the text is displayed in bold. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellFontBold",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontBold를 반환한다.",
        "remarkEng": "Returns the fontBold of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellFontItalic",
        "param": "row(Number), colId(String) or colIndex(Number), isFontItalic(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontItalic를 설정한다. fontItalic가 true이면 기울게 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontItalic of the cell in the colId or colIndex column in the row-th row. If fontItalic is true, the text is displayed in italics. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellFontItalic",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontItalic를 반환한다.",
        "remarkEng": "Returns the fontItalic of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellFontThruline",
        "param": "row(Number), colId(String) or colIndex(Number), isFontThruline(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontThruline를 설정한다. fontThruline가 true이면 취소선 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontThruline of the cell in the colId or colIndex column in the row-th row. If fontThruline is true, the text is displayed with a strikethrough. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellFontThruline",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontThruline를 반환한다.",
        "remarkEng": "Returns the fontThruline of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "cell",
        "name": "setCellFontUnderline",
        "param": "row(Number), colId(String) or colIndex(Number), isFontUnderline(Boolean)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontUnderline를 설정한다. fontUnderline가 true이면 밑줄 글씨 표현. 정상 동작 시 true 반환.",
        "remarkEng": "Sets the fontUnderline of the cell in the colId or colIndex column in the row-th row. If fontUnderline is true, the text is displayed with an underline. Returns true if it operates normally."
    },
    {
        "related": "cell",
        "name": "isCellFontUnderline",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 fontUnderline를 반환한다.",
        "remarkEng": "Returns the fontUnderline of the cell in the colId or colIndex column in the row-th row."
    },
    {
        "related": "active",
        "name": "setTargetCell",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "grid의 row행 colId or colIndex 열 cell을 선택한다. 해당 cell이 visible false처리 되어 있으면 동작하지 않는다. 정상 동작 시 true 반환.",
        "remarkEng": "Selects the cell in the colId or colIndex column in the row-th row. If the cell is set to visible false, it does not operate. Returns true if it operates normally."
    },
    {
        "related": "active",
        "name": "getTargetRow",
        "param": "",
        "return": "Number",
        "remarkKor": "현재 선택된 메인 타겟의 cell의 row 번호를 반환한다.",
        "remarkEng": "Returns the row number of the currently selected main target cell."
    },
    {
        "related": "active",
        "name": "getTargetCol",
        "param": "",
        "return": "String",
        "remarkKor": "현재 선택된 메인 타겟의 cell의 colId를 반환한다.",
        "remarkEng": "Returns the colId of the currently selected main target cell."
    },
    {
        "related": "active",
        "name": "setActiveCells",
        "param": "startRow(Number), startColId(String) or startColIndex(Number), endRow(Number), endColId(String) or endColIndex(Number)",
        "return": "Boolean",
        "remarkKor": "start row, start colId or colIndex ~ end row, end colId or colIndex 범위까지 cell을 선택한다. 정상 동작 시 true 반환. 초과한 범위를 선택하려 하면 에러 발생.",
        "remarkEng": "Selects the cells in the range from start row, start colId or colIndex to end row, end colId or colIndex. Returns true if it operates normally. An error occurs if an out-of-bounds range is selected."
    },
    {
        "related": "active",
        "name": "getActiveRows",
        "param": "",
        "return": "Array",
        "remarkKor": "현재 선택된 cell들의 row 번호들을 반환한다. [1,2..]",
        "remarkEng": "Returns the row numbers of the currently selected cells. [1,2..]"
    },
    {
        "related": "active",
        "name": "getActiveCols",
        "param": "",
        "return": "Array",
        "remarkKor": "현재 선택된 cell들의 colId들을 반환한다. ['col1','col2'..]",
        "remarkEng": "Returns the colIds of the currently selected cells. ['col1','col2'..]"
    },
    {
        "related": "active",
        "name": "getActiveRange",
        "param": "",
        "return": "Object",
        "remarkKor": "현재 선택된 cell 범위 정보를 객체로 반환한다. {startRow:1,startColId:'col1',endRow:2,endColId:'col2'}",
        "remarkEng": "Returns the information of the currently selected cell range as an object. {startRow:1, startColId:'col1', endRow:2, endColId:'col2'}"
    },
    {
        "related": "active",
        "name": "editCell",
        "param": "row(Number), colId(String) or colIndex(Number)",
        "return": "Boolean",
        "remarkKor": "row행 colId or colIndex 열 cell의 editor를 연다. Cell이 locked상태이면 동작 안함. 정상 동작 시 true 반환.",
        "remarkEng": "Opens the editor of the cell in the colId or colIndex column in the row-th row. If the cell is locked, it does not operate. Returns true if it operates normally."
    },
    {
        "related": "active",
        "name": "redo",
        "param": "",
        "return": "Boolean",
        "remarkKor": "현재 활성화 grid의 변경 사항(recode에 기록된 순서로)을 실행 취소한다. 정상 동작 시 true 반환.",
        "remarkEng": "Undoes the changes of the currently active grid in the order recorded in the recode. Returns true if it operates normally."
    },
    {
        "related": "active",
        "name": "undo",
        "param": "",
        "return": "Boolean",
        "remarkKor": "현재 활성화 grid의 직전 실행 취소(recode에 기록된 순서로)를 원복한다. 정상 동작 시 true 반환.",
        "remarkEng": "Restores the last undo of the currently active grid in the order recorded in the recode. Returns true if it operates normally."
    },
    {
        "related": "etc",
        "name": "removeGridMethod",
        "param": "",
        "return": "",
        "remarkKor": "grid id를 통해 호출하는 모든 함수를 삭제한다. 해킹 방지용 기능.(완벽한 보안은 아님) Vnilla-grid에서는 window[gridId]를 전역 변수로 선언하고 해당 변수를 통해 모든 method를 접근한다.\n"
                    + "removeGridMethod를 사용하면 window[gridId]를 삭제하여 method 접근이 불가하다. 예로 document에서 'F12'를 통해 개발자 모드 접근 시 removeGridMethod를 호출한다.",
        "remarkEng": "Deletes all functions called through the grid id. This is an anti-hacking feature (not complete security). In Vnilla-grid, window[gridId] is declared as a global variable and all methods are accessed through this variable.\n"
                    + "If removeGridMethod is used, window[gridId] is deleted and method access is not possible. For example, removeGridMethod is called when accessing developer mode through 'F12' in the document."
    }
];

METHODS.forEach((method) => {
  if(method.name !== 'isGridVisible' && method.name !== 'setGridVisible') {
    const addKo = {
      related: method.related,
      method: method.name,
      param: method.param,
      return: method.return,
      explain: method.remarkKor,
    }
    methodGridDataKo.push(addKo)
    const addEn = {
      related: method.related,
      method: method.name,
      param: method.param,
      return: method.return,
      explain: method.remarkEng,
    }
    methodGridDataEn.push(addEn)
  }
})

// grid column definitions for API tables
const slotColumn: HGridColumn[] = [
  { id: 'slot', header: 'slot', dataType: 'text', width: '22%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '78%' },
]
const propColumn: HGridColumn[] = [
  { id: 'prop', header: 'prop', dataType: 'text', width: '15%' },
  { id: 'type', header: 'type', dataType: 'text', width: '30%' },
  { id: 'default', header: 'default', dataType: 'text', width: '10%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]
const eventColumn: HGridColumn[] = [
  { id: 'event', header: 'event', dataType: 'text', width: '30%' },
  { id: 'trigger', header: 'trigger', dataType: 'text', width: '40%' },
  { id: 'args', header: 'args', dataType: 'text', width: '30%' },
]
const methodColumn: HGridColumn[] = [
  { id: 'method', header: 'method', dataType: 'text', width: '15%', rowMerge: true },
  { id: 'param', header: 'param', dataType: 'text', width: '25%' },
  { id: 'return', header: 'return', dataType: 'text', width: '15%' },
  { id: 'explain', header: 'explain', dataType: 'text', width: '45%' },
]

// mount loaders
const mountSlotGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? slotGridDataEn : slotGridDataKo)
}
const mountPropGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? propGridDataEn : propGridDataKo)
}
const mountGridEventProps = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? gridEventPropsEn : gridEventPropsKo)
}
const mountEventGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? eventGridDataEn : eventGridDataKo)
}
const mountMethodGrid = async (grid: HGridMethods) => {
  grid.load(props.lang === 'en' ? methodGridDataEn : methodGridDataKo)
}
</script>

<template>
  <HLayout :border="true" style="padding: 20px;">
    <HLabel>{{ contents.t900 }}</HLabel>
    <HLabel
        href="https://vanilla-grid.github.io/"
        :anchor-attrs="{target: '_blank'}"
        :border="true"
    >{{ contents.t950 }}</HLabel>
    <HParagraph class="hison-col-12">{{ contents.t1000 }}</HParagraph>
    <HGap/>
    <!-- Live Demo -->
    <HParagraph class="hison-col-12">{{ contents.t1010 }}</HParagraph>
    <HGrid
      id="grid-demo"
      :columns="columns"
      class="hison-col-12 hison-size-l"
      :height="'220px'"
      :rownum-visible="true"
      :status-visible="false"
      :visible="true"
      :selection-policy="'range'"
      :sortable="true"
      :filterable="true"
      :beforeChange="beforeChange"
      :afterChange="afterChange"
      :beforeClickCell="beforeClickCell"
      @mounted="onMounted"
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
    <HParagraph class="hison-col-12">{{ contents.t1056 }}</HParagraph>
    <HGap/>
    <!-- hisonConfig + VanillagridConfig -->
    <HParagraph class="hison-col-12">{{ contents.t1060 }}</HParagraph>
    <CodeParagraph :code="contents.c1060" :dynamicWidth="false"/>
    <HGap/>
    <HCaption :level="6" class="hison-col-12">{{ contents.t1100 }}</HCaption>
    <HGrid
      id="gridSlotGrid"
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

    <!-- props (general) -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1200 }}</HCaption>
    <HGrid
      id="gridPropGrid"
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

    <!-- props (gridEventProps) -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1250 }}</HCaption>
    <HParagraph class="hison-col-12">{{ (props.lang === 'en') ? en.t1251 : ko.t1251 }}</HParagraph>
    <HGrid
      id="gridEventPropGrid"
      :columns="propColumn"
      class="hison-col-12 hison-size-m"
      :height="'800px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountGridEventProps"
    />
    <HGap/>

    <!-- component events -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1300 }}</HCaption>
    <HGrid
      id="gridEventGrid"
      :columns="eventColumn"
      class="hison-col-12 hison-size-m"
      :height="'100px'"
      :rownum-visible="false"
      :status-visible="false"
      :locked="true"
      :locked-color="false"
      @mounted="mountEventGrid"
    />
    <HGap/>

    <!-- methods -->
    <HCaption :level="6" class="hison-col-12">{{ contents.t1400 }}</HCaption>
    <HGrid
      id="gridMethodGrid"
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