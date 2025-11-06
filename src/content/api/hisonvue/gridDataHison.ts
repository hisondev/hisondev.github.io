import type { methodGridRow } from "@/types";

export const hisonComponentGridDataKo: methodGridRow[] = [
  { method: 'getAccordion', param: 'accordionId: string', return: 'HAccordionMethods | null', explain: 'HAccordion의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getBaggie', param: 'baggieId: string', return: 'HBaggieMethods | null', explain: 'HBaggie의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getBanner', param: 'bannerId: string', return: 'HBannerMethods | null', explain: 'HBanner의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getButton', param: 'buttonId: string', return: 'HButtonMethods | null', explain: 'HButton의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getCalendar', param: 'calendarId: string', return: 'HCalendarMethods | null', explain: 'HCalendar의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getCaption', param: 'calendarId: string', return: 'HCaptionMethods | null', explain: 'HCaption의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getChart', param: 'chartId: string', return: 'HChartInstance | null', explain: '차트 인스턴스 핸들을 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getDrawer', param: 'drawerId: string', return: 'HDrawerMethods | null', explain: 'HDrawer의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getDropdown', param: 'dropdownId: string', return: 'HDropdownMethods | null', explain: 'HDropdown의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getFileset', param: 'filesetId: string', return: 'HFilesetMethods | null', explain: 'HFileSet의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getGap', param: 'gapId: string', return: 'HGapMethods | null', explain: 'HGap의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getGrid', param: 'gridId: string', return: 'HGridMethods | null', explain: 'HGrid의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getImagebox', param: 'imageboxId: string', return: 'HImageboxMethods | null', explain: 'HImageBox의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getInput', param: 'inputId: string', return: 'HInputMethods | null', explain: 'HInput의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getInputGroup', param: 'inputGroupId: string', return: 'HInputGroupMethods | null', explain: 'HInputGroup의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getLabel', param: 'labelId: string', return: 'HLabelMethods | null', explain: 'HLabel의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getLayout', param: 'layoutId: string', return: 'HLayoutMethods | null', explain: 'HLayout의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getList', param: 'listtId: string', return: 'HListMethods | null', explain: 'HList의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다. (매개변수명 오타: listtId)' },
  { method: 'getModal', param: 'listtId: string', return: 'HModalMethods | null', explain: 'HModal의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다. (매개변수명 오타: listtId)' },
  { method: 'getNote', param: 'noteId: string', return: 'HNoteElement | null', explain: 'DOM 유사 Note 핸들을 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getPagination', param: 'paginationId: string', return: 'HPaginationMethods | null', explain: 'HPagination의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getParagraph', param: 'paragraphId: string', return: 'HParagraphMethods | null', explain: 'HParagraph의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getPopup', param: 'popupId: string', return: 'HPopupMethods | null', explain: 'HPopup의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getSpinner', param: 'spinnerId: string', return: 'HSpinnerMethods | null', explain: 'HSpinner의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' },
  { method: 'getTable', param: 'tableId: string', return: 'HTableMethods | null', explain: 'HTable의 런타임 메서드를 반환하거나, 없으면 `null`을 반환합니다.' }
];

export const hisonStyleGridDataKo: methodGridRow[] = [
  { method: 'setSize', param: 'size: Size.s | Size.m | Size.l | Size.xl', return: '-', explain: '전역 크기 배율을 설정합니다. 패딩, 반경 및 컨트롤 높이에 영향을 줍니다.' },
  { method: 'setFilledColor', param: 'filledColor: string', return: '-', explain: '구성 요소에서 사용하는 기본 “채워진” 표면 색상을 설정합니다.' },
  { method: 'setEmptyColor', param: 'emptyColor: string', return: '-', explain: '구성 요소에서 사용하는 기본 “빈/아웃라인” 표면 색상을 설정합니다.' },
  { method: 'setFilledTextColor', param: 'filledTextColor: string', return: '-', explain: '채워진 표면에서의 기본 텍스트 색상을 설정합니다.' },
  { method: 'setEmptyTextColor', param: 'emptyTextColor: string', return: '-', explain: '빈/아웃라인 표면에서의 기본 텍스트 색상을 설정합니다.' },
  { method: 'setPrimaryColor', param: 'primaryColor: string', return: '-', explain: '브랜드/주요 포인트에 사용되는 기본 Primary 색상을 설정합니다.' },
  { method: 'setMutedColor', param: 'mutedColor: string', return: '-', explain: '중립/보조용 Muted 색상을 설정합니다.' },
  { method: 'setInfoColor', param: 'infoColor: string', return: '-', explain: '정보(Info) 상태 색상을 설정합니다.' },
  { method: 'setSuccessColor', param: 'successColor: string', return: '-', explain: '성공(Success) 상태 색상을 설정합니다.' },
  { method: 'setDangerColor', param: 'dangerColor: string', return: '-', explain: '위험(Danger) 상태 색상을 설정합니다.' },
  { method: 'setWarningColor', param: 'warningColor: string', return: '-', explain: '경고(Warning) 상태 색상을 설정합니다.' },
  { method: 'setInvertColor', param: 'invert: boolean', return: '-', explain: '색상 반전을 활성/비활성화합니다. 활성화 시 배경/전경 대비를 보존하도록 파생 색상이 갱신됩니다.' },

  { method: 'getDeviceType', param: '-', return: '"mb" | "tb" | "pc" | "wd"', explain: '클라이언트 뷰포트 너비에 따라 현재 장치 유형을 반환합니다. - SSR-safe: 서버에서 실행하면(window없을 시) 기본적으로 "pc"를 반환합니다.' },

  { method: 'getFilledColor', param: '-', return: 'string', explain: '기본 “채워진” 표면 색상을 반환합니다.' },
  { method: 'getEmptyColor', param: '-', return: 'string', explain: '기본 “빈/아웃라인” 표면 색상을 반환합니다.' },
  { method: 'getFilledTextColor', param: '-', return: 'string', explain: '채워진 표면에서의 텍스트 색상을 반환합니다.' },
  { method: 'getEmptyTextColor', param: '-', return: 'string', explain: '빈/아웃라인 표면에서의 텍스트 색상을 반환합니다.' },

  { method: 'getPrimaryColor', param: '-', return: 'string', explain: 'Primary 기본 색상을 반환합니다.' },
  { method: 'getPrimaryButtonColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 버튼 색상(파생값)을 반환합니다.' },
  { method: 'getPrimaryBorderColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 보더 색상(파생값)을 반환합니다.' },
  { method: 'getPrimaryShadowColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 그림자 색상(파생값)을 반환합니다.' },
  { method: 'getPrimaryHoverColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 hover 색상(파생값)을 반환합니다.' },
  { method: 'getPrimaryActiveColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 active 색상(파생값)을 반환합니다.' },
  { method: 'getPrimaryRowHoverColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 행 hover 색상(표/그리드 등)을 반환합니다.' },
  { method: 'getPrimaryStripeColor', param: '-', return: 'string', explain: 'Primary 팔레트에 대한 줄무늬(스트라이프) 색상(표시 테이블 등)을 반환합니다.' },

  { method: 'getMutedColor', param: '-', return: 'string', explain: 'Muted 기본 색상을 반환합니다.' },
  { method: 'getMutedButtonColor', param: '-', return: 'string', explain: 'Muted 팔레트의 버튼 색상(파생값)을 반환합니다.' },
  { method: 'getMutedBorderColor', param: '-', return: 'string', explain: 'Muted 팔레트의 보더 색상(파생값)을 반환합니다.' },
  { method: 'getMutedShadowColor', param: '-', return: 'string', explain: 'Muted 팔레트의 그림자 색상(파생값)을 반환합니다.' },
  { method: 'getMutedHoverColor', param: '-', return: 'string', explain: 'Muted 팔레트의 hover 색상(파생값)을 반환합니다.' },
  { method: 'getMutedActiveColor', param: '-', return: 'string', explain: 'Muted 팔레트의 active 색상(파생값)을 반환합니다.' },
  { method: 'getMutedRowHoverColor', param: '-', return: 'string', explain: 'Muted 팔레트의 행 hover 색상(파생값)을 반환합니다.' },
  { method: 'getMutedStripeColor', param: '-', return: 'string', explain: 'Muted 팔레트의 스트라이프 색상(파생값)을 반환합니다.' },

  { method: 'getInfoColor', param: '-', return: 'string', explain: 'Info 기본 색상을 반환합니다.' },
  { method: 'getInfoButtonColor', param: '-', return: 'string', explain: 'Info 팔레트의 버튼 색상(파생값)을 반환합니다.' },
  { method: 'getInfoBorderColor', param: '-', return: 'string', explain: 'Info 팔레트의 보더 색상(파생값)을 반환합니다.' },
  { method: 'getInfoShadowColor', param: '-', return: 'string', explain: 'Info 팔레트의 그림자 색상(파생값)을 반환합니다.' },
  { method: 'getInfoHoverColor', param: '-', return: 'string', explain: 'Info 팔레트의 hover 색상(파생값)을 반환합니다.' },
  { method: 'getInfoActiveColor', param: '-', return: 'string', explain: 'Info 팔레트의 active 색상(파생값)을 반환합니다.' },
  { method: 'getInfoRowHoverColor', param: '-', return: 'string', explain: 'Info 팔레트의 행 hover 색상(파생값)을 반환합니다.' },
  { method: 'getInfoStripeColor', param: '-', return: 'string', explain: 'Info 팔레트의 스트라이프 색상(파생값)을 반환합니다.' },

  { method: 'getSuccessColor', param: '-', return: 'string', explain: 'Success 기본 색상을 반환합니다.' },
  { method: 'getSuccessButtonColor', param: '-', return: 'string', explain: 'Success 팔레트의 버튼 색상(파생값)을 반환합니다.' },
  { method: 'getSuccessBorderColor', param: '-', return: 'string', explain: 'Success 팔레트의 보더 색상(파생값)을 반환합니다.' },
  { method: 'getSuccessShadowColor', param: '-', return: 'string', explain: 'Success 팔레트의 그림자 색상(파생값)을 반환합니다.' },
  { method: 'getSuccessHoverColor', param: '-', return: 'string', explain: 'Success 팔레트의 hover 색상(파생값)을 반환합니다.' },
  { method: 'getSuccessActiveColor', param: '-', return: 'string', explain: 'Success 팔레트의 active 색상(파생값)을 반환합니다.' },
  { method: 'getSuccessRowHoverColor', param: '-', return: 'string', explain: 'Success 팔레트의 행 hover 색상(파생값)을 반환합니다.' },
  { method: 'getSuccessStripeColor', param: '-', return: 'string', explain: 'Success 팔레트의 스트라이프 색상(파생값)을 반환합니다.' },

  { method: 'getDangerColor', param: '-', return: 'string', explain: 'Danger 기본 색상을 반환합니다.' },
  { method: 'getDangerButtonColor', param: '-', return: 'string', explain: 'Danger 팔레트의 버튼 색상(파생값)을 반환합니다.' },
  { method: 'getDangerBorderColor', param: '-', return: 'string', explain: 'Danger 팔레트의 보더 색상(파생값)을 반환합니다.' },
  { method: 'getDangerShadowColor', param: '-', return: 'string', explain: 'Danger 팔레트의 그림자 색상(파생값)을 반환합니다.' },
  { method: 'getDangerHoverColor', param: '-', return: 'string', explain: 'Danger 팔레트의 hover 색상(파생값)을 반환합니다.' },
  { method: 'getDangerActiveColor', param: '-', return: 'string', explain: 'Danger 팔레트의 active 색상(파생값)을 반환합니다.' },
  { method: 'getDangerRowHoverColor', param: '-', return: 'string', explain: 'Danger 팔레트의 행 hover 색상(파생값)을 반환합니다.' },
  { method: 'getDangerStripeColor', param: '-', return: 'string', explain: 'Danger 팔레트의 스트라이프 색상(파생값)을 반환합니다.' },

  { method: 'getWarningColor', param: '-', return: 'string', explain: 'Warning 기본 색상을 반환합니다.' },
  { method: 'getWarningButtonColor', param: '-', return: 'string', explain: 'Warning 팔레트의 버튼 색상(파생값)을 반환합니다.' },
  { method: 'getWarningBorderColor', param: '-', return: 'string', explain: 'Warning 팔레트의 보더 색상(파생값)을 반환합니다.' },
  { method: 'getWarningShadowColor', param: '-', return: 'string', explain: 'Warning 팔레트의 그림자 색상(파생값)을 반환합니다.' },
  { method: 'getWarningHoverColor', param: '-', return: 'string', explain: 'Warning 팔레트의 hover 색상(파생값)을 반환합니다.' },
  { method: 'getWarningActiveColor', param: '-', return: 'string', explain: 'Warning 팔레트의 active 색상(파생값)을 반환합니다.' },
  { method: 'getWarningRowHoverColor', param: '-', return: 'string', explain: 'Warning 팔레트의 행 hover 색상(파생값)을 반환합니다.' },
  { method: 'getWarningStripeColor', param: '-', return: 'string', explain: 'Warning 팔레트의 스트라이프 색상(파생값)을 반환합니다.' },

  { method: 'isInvertColor', param: '-', return: 'boolean', explain: '현재 테마 반전(다크/라이트 의도) 활성화 여부를 반환합니다.' }
];

export const hisonCssEventGridDataKo: methodGridRow[] = [
  {
    method: 'setButtonOnBefoerFocus',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-포커스 핸들러를 등록합니다(취소하려면 `false` 반환). (typo: Befoer)'
  },
  {
    method: 'setButtonOnAfterFocus',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-포커스 핸들러를 등록합니다.'
  },
  {
    method: 'setButtonOnBefoerBlur',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-블러 핸들러를 등록합니다(취소하려면 `false` 반환). (typo: Befoer)'
  },
  {
    method: 'setButtonOnAfterBlur',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-블러 핸들러를 등록합니다.'
  },
  {
    method: 'setButtonOnBefoerClick',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-클릭 핸들러를 등록합니다(취소하려면 `false` 반환). (typo: Befoer)'
  },
  {
    method: 'setButtonOnAfterClick',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-클릭 핸들러를 등록합니다.'
  },
  {
    method: 'setButtonOnBeforeMouseover',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-마우스오버 핸들러를 등록합니다(취소하려면 `false` 반환).'
  },
  {
    method: 'setButtonOnAfterMouseover',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-마우스오버 핸들러를 등록합니다.'
  },
  {
    method: 'setButtonOnBeforeMouseout',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-마우스아웃 핸들러를 등록합니다(취소하려면 `false` 반환).'
  },
  {
    method: 'setButtonOnAfterMouseout',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-마우스아웃 핸들러를 등록합니다.'
  },
  {
    method: 'setButtonOnBeforeTouchstart',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-touchstart 핸들러를 등록합니다(취소하려면 `false` 반환).'
  },
  {
    method: 'setButtonOnAfterTouchstart',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-touchstart 핸들러를 등록합니다.'
  },
  {
    method: 'setButtonOnBeforeTouchend',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: 'HButton에 대한 글로벌 BEFORE-touchend 핸들러를 등록합니다(취소하려면 `false` 반환).'
  },
  {
    method: 'setButtonOnAfterTouchend',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: 'HButton에 대한 글로벌 AFTER-touchend 핸들러를 등록합니다.'
  },

  {
    method: 'setInputOnBefoerFocus',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 BEFORE-포커스 핸들러(취소하려면 `false` 반환). (typo: Befoer)'
  },
  {
    method: 'setInputOnAfterFocus',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 AFTER-포커스 핸들러.'
  },
  {
    method: 'setInputOnBefoerBlur',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 BEFORE-블러 핸들러(취소하려면 `false` 반환). (typo: Befoer)'
  },
  {
    method: 'setInputOnAfterBlur',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 AFTER-블러 핸들러.'
  },
  {
    method: 'setInputOnBeforeMouseover',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 BEFORE-마우스오버 핸들러(취소하려면 `false` 반환).'
  },
  {
    method: 'setInputOnAfterMouseover',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 AFTER-마우스오버 핸들러.'
  },
  {
    method: 'setInputOnBeforeMouseout',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 BEFORE-마우스아웃 핸들러(취소하려면 `false` 반환).'
  },
  {
    method: 'setInputOnAfterMouseout',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 AFTER-마우스아웃 핸들러.'
  },
  {
    method: 'setInputOnBeforeTouchstart',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 BEFORE-touchstart 핸들러(취소하려면 `false` 반환).'
  },
  {
    method: 'setInputOnAfterTouchstart',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 AFTER-touchstart 핸들러.'
  },
  {
    method: 'setInputOnBeforeTouchend',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 BEFORE-touchend 핸들러(취소하려면 `false` 반환).'
  },
  {
    method: 'setInputOnAfterTouchend',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: '입력형 컴포넌트에 대한 글로벌 AFTER-touchend 핸들러.'
  }
];

export const hisonEtcGridDataKo: methodGridRow[] = [
  {
    method: 'setMaxFilesetTotalSize',
    param: 'fileSize: number',
    return: '-',
    explain: 'HFileSet 구성 요소 전체에서 허용되는 **최대 총 업로드 크기(바이트)**를 설정합니다.\n단일 위젯에서 선택된 모든 파일의 *합계*를 제한합니다.'
  },
  {
    method: 'setMaxFilesetSize',
    param: 'fileTotalSize: number',
    return: '-',
    explain: 'HFileSet에 대한 **파일당 최대 업로드 크기(바이트)**를 설정합니다.\n사용자가 선택하는 **각 개별 파일**의 크기를 제한합니다.'
  },
  {
    method: 'getMaxFilesetTotalSize',
    param: '-',
    return: 'number',
    explain: 'HFileSet의 현재 **최대 총 업로드 크기(바이트)**를 반환합니다. (무제한일 경우 `Infinity`)'
  },
  {
    method: 'getMaxFilesetSize',
    param: '-',
    return: 'number',
    explain: 'HFileSet의 현재 **파일당 최대 업로드 크기(바이트)**를 반환합니다. (무제한일 경우 `Infinity`)'
  }
];

export const hisonComponentGridDataEn: methodGridRow[] = [
  { method: 'getAccordion', param: 'accordionId: string', return: 'HAccordionMethods | null', explain: 'Returns the runtime methods for an HAccordion, or `null` if not found.' },
  { method: 'getBaggie', param: 'baggieId: string', return: 'HBaggieMethods | null', explain: 'Returns the runtime methods for an HBaggie, or `null` if not found.' },
  { method: 'getBanner', param: 'bannerId: string', return: 'HBannerMethods | null', explain: 'Returns the runtime methods for an HBanner, or `null` if not found.' },
  { method: 'getButton', param: 'buttonId: string', return: 'HButtonMethods | null', explain: 'Returns the runtime methods for an HButton, or `null` if not found.' },
  { method: 'getCalendar', param: 'calendarId: string', return: 'HCalendarMethods | null', explain: 'Returns the runtime methods for an HCalendar, or `null` if not found.' },
  { method: 'getCaption', param: 'calendarId: string', return: 'HCaptionMethods | null', explain: 'Returns the runtime methods for an HCaption, or `null` if not found.' },
  { method: 'getChart', param: 'chartId: string', return: 'HChartInstance | null', explain: 'Returns the chart instance handle, or `null` if not found.' },
  { method: 'getDrawer', param: 'drawerId: string', return: 'HDrawerMethods | null', explain: 'Returns the runtime methods for an HDrawer, or `null` if not found.' },
  { method: 'getDropdown', param: 'dropdownId: string', return: 'HDropdownMethods | null', explain: 'Returns the runtime methods for an HDropdown, or `null` if not found.' },
  { method: 'getFileset', param: 'filesetId: string', return: 'HFilesetMethods | null', explain: 'Returns the runtime methods for an HFileSet, or `null` if not found.' },
  { method: 'getGap', param: 'gapId: string', return: 'HGapMethods | null', explain: 'Returns the runtime methods for an HGap, or `null` if not found.' },
  { method: 'getGrid', param: 'gridId: string', return: 'HGridMethods | null', explain: 'Returns the runtime methods for an HGrid, or `null` if not found.' },
  { method: 'getImagebox', param: 'imageboxId: string', return: 'HImageboxMethods | null', explain: 'Returns the runtime methods for an HImageBox, or `null` if not found.' },
  { method: 'getInput', param: 'inputId: string', return: 'HInputMethods | null', explain: 'Returns the runtime methods for an HInput, or `null` if not found.' },
  { method: 'getInputGroup', param: 'inputGroupId: string', return: 'HInputGroupMethods | null', explain: 'Returns the runtime methods for an HInputGroup, or `null` if not found.' },
  { method: 'getLabel', param: 'labelId: string', return: 'HLabelMethods | null', explain: 'Returns the runtime methods for an HLabel, or `null` if not found.' },
  { method: 'getLayout', param: 'layoutId: string', return: 'HLayoutMethods | null', explain: 'Returns the runtime methods for an HLayout, or `null` if not found.' },
  { method: 'getList', param: 'listtId: string', return: 'HListMethods | null', explain: 'Returns the runtime methods for an HList, or `null` if not found. (param name typo: listtId)' },
  { method: 'getModal', param: 'listtId: string', return: 'HModalMethods | null', explain: 'Returns the runtime methods for an HModal, or `null` if not found. (param name typo: listtId)' },
  { method: 'getNote', param: 'noteId: string', return: 'HNoteElement | null', explain: 'Returns the DOM-like note element handle, or `null` if not found.' },
  { method: 'getPagination', param: 'paginationId: string', return: 'HPaginationMethods | null', explain: 'Returns the runtime methods for an HPagination, or `null` if not found.' },
  { method: 'getParagraph', param: 'paragraphId: string', return: 'HParagraphMethods | null', explain: 'Returns the runtime methods for an HParagraph, or `null` if not found.' },
  { method: 'getPopup', param: 'popupId: string', return: 'HPopupMethods | null', explain: 'Returns the runtime methods for an HPopup, or `null` if not found.' },
  { method: 'getSpinner', param: 'spinnerId: string', return: 'HSpinnerMethods | null', explain: 'Returns the runtime methods for an HSpinner, or `null` if not found.' },
  { method: 'getTable', param: 'tableId: string', return: 'HTableMethods | null', explain: 'Returns the runtime methods for an HTable, or `null` if not found.' }
];

export const hisonStyleGridDataEn: methodGridRow[] = [
  { method: 'setSize', param: 'size: Size.s | Size.m | Size.l | Size.xl', return: '-', explain: 'Sets the global size scale. Affects paddings, radii, and control heights.' },
  { method: 'setFilledColor', param: 'filledColor: string', return: '-', explain: 'Sets the base “filled” surface color used by components.' },
  { method: 'setEmptyColor', param: 'emptyColor: string', return: '-', explain: 'Sets the base “empty/outline” surface color used by components.' },
  { method: 'setFilledTextColor', param: 'filledTextColor: string', return: '-', explain: 'Sets the default text color on filled surfaces.' },
  { method: 'setEmptyTextColor', param: 'emptyTextColor: string', return: '-', explain: 'Sets the default text color on empty/outline surfaces.' },
  { method: 'setPrimaryColor', param: 'primaryColor: string', return: '-', explain: 'Sets the primary (brand) color.' },
  { method: 'setMutedColor', param: 'mutedColor: string', return: '-', explain: 'Sets the muted/neutral color.' },
  { method: 'setInfoColor', param: 'infoColor: string', return: '-', explain: 'Sets the informational (status) color.' },
  { method: 'setSuccessColor', param: 'successColor: string', return: '-', explain: 'Sets the success (status) color.' },
  { method: 'setDangerColor', param: 'dangerColor: string', return: '-', explain: 'Sets the danger (status) color.' },
  { method: 'setWarningColor', param: 'warningColor: string', return: '-', explain: 'Sets the warning (status) color.' },
  { method: 'setInvertColor', param: 'invert: boolean', return: '-', explain: 'Enables/disables color inversion (dark/light intent); derived tokens flip to preserve contrast.' },

  { method: 'getDeviceType', param: '-', return: '"mb" | "tb" | "pc" | "wd"', explain: 'Returns the current device type based on the client viewport width. - SSR-safe: returns "pc" by default when executed on the server.' },

  { method: 'getFilledColor', param: '-', return: 'string', explain: 'Returns the base filled surface color.' },
  { method: 'getEmptyColor', param: '-', return: 'string', explain: 'Returns the base empty/outline surface color.' },
  { method: 'getFilledTextColor', param: '-', return: 'string', explain: 'Returns the default text color on filled surfaces.' },
  { method: 'getEmptyTextColor', param: '-', return: 'string', explain: 'Returns the default text color on empty/outline surfaces.' },

  { method: 'getPrimaryColor', param: '-', return: 'string', explain: 'Returns the primary base color.' },
  { method: 'getPrimaryButtonColor', param: '-', return: 'string', explain: 'Returns the computed button color for the primary palette.' },
  { method: 'getPrimaryBorderColor', param: '-', return: 'string', explain: 'Returns the computed border color for the primary palette.' },
  { method: 'getPrimaryShadowColor', param: '-', return: 'string', explain: 'Returns the computed shadow color for the primary palette.' },
  { method: 'getPrimaryHoverColor', param: '-', return: 'string', explain: 'Returns the computed hover color for the primary palette.' },
  { method: 'getPrimaryActiveColor', param: '-', return: 'string', explain: 'Returns the computed active color for the primary palette.' },
  { method: 'getPrimaryRowHoverColor', param: '-', return: 'string', explain: 'Returns the computed row-hover color (e.g., tables) for the primary palette.' },
  { method: 'getPrimaryStripeColor', param: '-', return: 'string', explain: 'Returns the computed stripe color (e.g., zebra rows) for the primary palette.' },

  { method: 'getMutedColor', param: '-', return: 'string', explain: 'Returns the muted base color.' },
  { method: 'getMutedButtonColor', param: '-', return: 'string', explain: 'Returns the computed button color for the muted palette.' },
  { method: 'getMutedBorderColor', param: '-', return: 'string', explain: 'Returns the computed border color for the muted palette.' },
  { method: 'getMutedShadowColor', param: '-', return: 'string', explain: 'Returns the computed shadow color for the muted palette.' },
  { method: 'getMutedHoverColor', param: '-', return: 'string', explain: 'Returns the computed hover color for the muted palette.' },
  { method: 'getMutedActiveColor', param: '-', return: 'string', explain: 'Returns the computed active color for the muted palette.' },
  { method: 'getMutedRowHoverColor', param: '-', return: 'string', explain: 'Returns the computed row-hover color for the muted palette.' },
  { method: 'getMutedStripeColor', param: '-', return: 'string', explain: 'Returns the computed stripe color for the muted palette.' },

  { method: 'getInfoColor', param: '-', return: 'string', explain: 'Returns the info base color.' },
  { method: 'getInfoButtonColor', param: '-', return: 'string', explain: 'Returns the computed button color for the info palette.' },
  { method: 'getInfoBorderColor', param: '-', return: 'string', explain: 'Returns the computed border color for the info palette.' },
  { method: 'getInfoShadowColor', param: '-', return: 'string', explain: 'Returns the computed shadow color for the info palette.' },
  { method: 'getInfoHoverColor', param: '-', return: 'string', explain: 'Returns the computed hover color for the info palette.' },
  { method: 'getInfoActiveColor', param: '-', return: 'string', explain: 'Returns the computed active color for the info palette.' },
  { method: 'getInfoRowHoverColor', param: '-', return: 'string', explain: 'Returns the computed row-hover color for the info palette.' },
  { method: 'getInfoStripeColor', param: '-', return: 'string', explain: 'Returns the computed stripe color for the info palette.' },

  { method: 'getSuccessColor', param: '-', return: 'string', explain: 'Returns the success base color.' },
  { method: 'getSuccessButtonColor', param: '-', return: 'string', explain: 'Returns the computed button color for the success palette.' },
  { method: 'getSuccessBorderColor', param: '-', return: 'string', explain: 'Returns the computed border color for the success palette.' },
  { method: 'getSuccessShadowColor', param: '-', return: 'string', explain: 'Returns the computed shadow color for the success palette.' },
  { method: 'getSuccessHoverColor', param: '-', return: 'string', explain: 'Returns the computed hover color for the success palette.' },
  { method: 'getSuccessActiveColor', param: '-', return: 'string', explain: 'Returns the computed active color for the success palette.' },
  { method: 'getSuccessRowHoverColor', param: '-', return: 'string', explain: 'Returns the computed row-hover color for the success palette.' },
  { method: 'getSuccessStripeColor', param: '-', return: 'string', explain: 'Returns the computed stripe color for the success palette.' },

  { method: 'getDangerColor', param: '-', return: 'string', explain: 'Returns the danger base color.' },
  { method: 'getDangerButtonColor', param: '-', return: 'string', explain: 'Returns the computed button color for the danger palette.' },
  { method: 'getDangerBorderColor', param: '-', return: 'string', explain: 'Returns the computed border color for the danger palette.' },
  { method: 'getDangerShadowColor', param: '-', return: 'string', explain: 'Returns the computed shadow color for the danger palette.' },
  { method: 'getDangerHoverColor', param: '-', return: 'string', explain: 'Returns the computed hover color for the danger palette.' },
  { method: 'getDangerActiveColor', param: '-', return: 'string', explain: 'Returns the computed active color for the danger palette.' },
  { method: 'getDangerRowHoverColor', param: '-', return: 'string', explain: 'Returns the computed row-hover color for the danger palette.' },
  { method: 'getDangerStripeColor', param: '-', return: 'string', explain: 'Returns the computed stripe color for the danger palette.' },

  { method: 'getWarningColor', param: '-', return: 'string', explain: 'Returns the warning base color.' },
  { method: 'getWarningButtonColor', param: '-', return: 'string', explain: 'Returns the computed button color for the warning palette.' },
  { method: 'getWarningBorderColor', param: '-', return: 'string', explain: 'Returns the computed border color for the warning palette.' },
  { method: 'getWarningShadowColor', param: '-', return: 'string', explain: 'Returns the computed shadow color for the warning palette.' },
  { method: 'getWarningHoverColor', param: '-', return: 'string', explain: 'Returns the computed hover color for the warning palette.' },
  { method: 'getWarningActiveColor', param: '-', return: 'string', explain: 'Returns the computed active color for the warning palette.' },
  { method: 'getWarningRowHoverColor', param: '-', return: 'string', explain: 'Returns the computed row-hover color for the warning palette.' },
  { method: 'getWarningStripeColor', param: '-', return: 'string', explain: 'Returns the computed stripe color for the warning palette.' },

  { method: 'isInvertColor', param: '-', return: 'boolean', explain: 'Returns whether color inversion (dark/light intent) is currently enabled.' }
];

export const hisonCssEventGridDataEn: methodGridRow[] = [
  {
    method: 'setButtonOnBefoerFocus',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-focus handler for HButton (return `false` to cancel). (typo: Befoer)'
  },
  {
    method: 'setButtonOnAfterFocus',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-focus handler for HButton.'
  },
  {
    method: 'setButtonOnBefoerBlur',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-blur handler for HButton (return `false` to cancel). (typo: Befoer)'
  },
  {
    method: 'setButtonOnAfterBlur',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-blur handler for HButton.'
  },
  {
    method: 'setButtonOnBefoerClick',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-click handler for HButton (return `false` to cancel). (typo: Befoer)'
  },
  {
    method: 'setButtonOnAfterClick',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-click handler for HButton.'
  },
  {
    method: 'setButtonOnBeforeMouseover',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-mouseover handler for HButton (return `false` to cancel).'
  },
  {
    method: 'setButtonOnAfterMouseover',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-mouseover handler for HButton.'
  },
  {
    method: 'setButtonOnBeforeMouseout',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-mouseout handler for HButton (return `false` to cancel).'
  },
  {
    method: 'setButtonOnAfterMouseout',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-mouseout handler for HButton.'
  },
  {
    method: 'setButtonOnBeforeTouchstart',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-touchstart handler for HButton (return `false` to cancel).'
  },
  {
    method: 'setButtonOnAfterTouchstart',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-touchstart handler for HButton.'
  },
  {
    method: 'setButtonOnBeforeTouchend',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-touchend handler for HButton (return `false` to cancel).'
  },
  {
    method: 'setButtonOnAfterTouchend',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-touchend handler for HButton.'
  },

  {
    method: 'setInputOnBefoerFocus',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-focus handler for input-like components (return `false` to cancel). (typo: Befoer)'
  },
  {
    method: 'setInputOnAfterFocus',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-focus handler for input-like components.'
  },
  {
    method: 'setInputOnBefoerBlur',
    param: 'func: (e: FocusEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-blur handler for input-like components (return `false` to cancel). (typo: Befoer)'
  },
  {
    method: 'setInputOnAfterBlur',
    param: 'func: (e: FocusEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-blur handler for input-like components.'
  },
  {
    method: 'setInputOnBeforeMouseover',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-mouseover handler for input-like components (return `false` to cancel).'
  },
  {
    method: 'setInputOnAfterMouseover',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-mouseover handler for input-like components.'
  },
  {
    method: 'setInputOnBeforeMouseout',
    param: 'func: (e: MouseEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-mouseout handler for input-like components (return `false` to cancel).'
  },
  {
    method: 'setInputOnAfterMouseout',
    param: 'func: (e: MouseEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-mouseout handler for input-like components.'
  },
  {
    method: 'setInputOnBeforeTouchstart',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-touchstart handler for input-like components (return `false` to cancel).'
  },
  {
    method: 'setInputOnAfterTouchstart',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-touchstart handler for input-like components.'
  },
  {
    method: 'setInputOnBeforeTouchend',
    param: 'func: (e: TouchEvent) => boolean',
    return: '-',
    explain: 'Registers a global BEFORE-touchend handler for input-like components (return `false` to cancel).'
  },
  {
    method: 'setInputOnAfterTouchend',
    param: 'func: (e: TouchEvent) => void',
    return: '-',
    explain: 'Registers a global AFTER-touchend handler for input-like components.'
  }
];

export const hisonEtcGridDataEn: methodGridRow[] = [
  {
    method: 'setMaxFilesetTotalSize',
    param: 'fileSize: number',
    return: '-',
    explain: 'Sets the **maximum total upload size (bytes)** allowed across an entire HFileSet component.\nThis limits the *sum* of all files selected within a single widget.'
  },
  {
    method: 'setMaxFilesetSize',
    param: 'fileTotalSize: number',
    return: '-',
    explain: 'Sets the **maximum per-file upload size (bytes)** for HFileSet.\nThis limits the size of **each individual** file a user selects.'
  },
  {
    method: 'getMaxFilesetTotalSize',
    param: '-',
    return: 'number',
    explain: 'Returns the current **maximum total upload size (bytes)** for HFileSet. (`Infinity` if unlimited)'
  },
  {
    method: 'getMaxFilesetSize',
    param: '-',
    return: 'number',
    explain: 'Returns the current **maximum per-file upload size (bytes)** for HFileSet. (`Infinity` if unlimited)'
  }
];