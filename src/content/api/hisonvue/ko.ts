const ko = {
  caption: 'HISONVUE API',
  subhead1:
`확장된 hison`,
  t1000:
`hison.component`,
  t1100:
`hison.style`,
  t1200:
`hison.cssEvent`,
  t1300:
`그외 hison에 대한 기능 정보는 hisonjs API문서를 참조하기 바랍니다.`,

  subhead2:
`hisonConfig`,
  t2000:
`hisonConfig.기본`,
  t2100:
`hisonConfig.component`,
  t2200:
`hisonConfig.componentStyle`,
  t2300:
`hisonConfig.event.cssEvnet`,

  subhead3:
`hisonvue css`,
  t3000:
`클래스에 접두어, 접미어를 통해 반응형 웹을 지원합니다.`,
  t3010:
`지원하는 클래스 접미어는 아래와 같습니다.`,
  t3020:
`-mb (모바일)`,
  t3030:
`디바이스 너비가 768px 미만`,
  t3040:
`-tb (테블릿)`,
  t3050:
`디바이스 너비가 1200px 미만`,
  t3060:
`-pc (일반 PC)`,
  t3070:
`디바이스 너비가 1980px 미만`,
  t3080:
`-wd (Wide PC)`,
  t3090:
`디바이스 너비가 1980px 이상`,
  t3100:
`디바이스 너비에 따라 해당 class가 반영됩니다.`,
  t3110:
`예를들어 현재 Label 컴포넌트는 hison-color-primary-pc hison-color-muted-mb를 기입하였습니다. 브라우저 너비를 변화하여 보세요.`,

  t3200:
`지원하는 클래스 접두어는 아래와 같습니다.`,
  t3300:
`hison-col-*`,
  t3310:
`가로 너비를 지정합니다. 12분할 방식을 사용합니다.
hison-col또한 hison-col-6-pc, hison-col-12-mb와 같은 방식으로 사용할 수 있습니다.
(화면의 너비가 1200이상이면 가로 너비 50%, 미만이면 가로 너비 100%)`,

  t3400:
`hison-size-*`,
  t3410:
`size는 xl, l, m, s이 있습니다. 기본 설정을 별도로 hisonConfig.componentStyle등을 통해 사용자 커스텀 가능합니다.
hison-size-m-pc, hison-size-xl-mb(화면의 너비가 1200이상이면 요소 'm' 사이즈 50%, 미만이면 요소 'xl' 사이즈로 출력)`,

  t3500:
`hison-color-*`,
  t3510:
`color의 종류는 아래와 같습니다. 기본 설정을 별도로 hisonConfig.componentStyle등을 통해 사용자 커스텀 가능합니다. 커스텀시 메인 색상만 지정하면 그림자, 텍스트 색상 등은 시스템 내부에서 자동으로 조정합니다.`,

  t3600:
`hison-pos-*`,
  t3610:
`HLayout 내부에서 요소의 수직적 위치를 지정하는 class접두어입니다. (요소의 순서를 변경하지는 못합니다.)`,
  c3610:
`.hison-pos-left { margin-right: auto; }
.hison-pos-center { margin-left: auto; margin-right: auto; }
.hison-pos-right { margin-left: auto; }`,

  t3700:
`hison-pos-vertical-*`,
  t3710:
`HLayout 내부에서 요소의 수평적 위치를 지정하는 class접두어입니다. (요소의 순서를 변경하지는 못합니다.)`,
  c3710:
`.hison-pos-vertical-top { margin-bottom: auto; }
.hison-pos-vertical-center { margin-top: auto; margin-bottom: auto; }
.hison-pos-vertical-bottom { margin-top: auto; }`,

  t4000:
`css변수를 사용하며 hison.style, hisonConfig.componentStyle, 직접 변경 등을 통해 제어할 수 있습니다.`,
  c4000:
`:root {
    --hison-filledColor: '';
    --hison-emptyColor: '';
    --hison-filledTextColor: '';
    --hison-emptyTextColor: '';

    --hison-primary-buttonColor: '';
    --hison-primary-borderColor: '';
    --hison-primary-shadowColor: '';
    --hison-primary-hoverColor: '';
    --hison-primary-activeColor: '';
    --hison-primary-rowHoverColor: '';
    --hison-primary-stripeColor: '';
    --hison-primary-emptyTextColor: '';
    --hison-primary-filledTextColor: '';

    --hison-muted-buttonColor: '';
    --hison-muted-borderColor: '';
    --hison-muted-shadowColor: '';
    --hison-muted-hoverColor: '';
    --hison-muted-activeColor: '';
    --hison-muted-rowHoverColor: '';
    --hison-muted-stripeColor: '';
    --hison-muted-emptyTextColor: '';
    --hison-muted-filledTextColor: '';

    --hison-info-buttonColor: '';
    --hison-info-borderColor: '';
    --hison-info-shadowColor: '';
    --hison-info-hoverColor: '';
    --hison-info-activeColor: '';
    --hison-info-rowHoverColor: '';
    --hison-info-stripeColor: '';
    --hison-info-emptyTextColor: '';
    --hison-info-filledTextColor: '';

    --hison-success-buttonColor: '';
    --hison-success-borderColor: '';
    --hison-success-shadowColor: '';
    --hison-success-hoverColor: '';
    --hison-success-activeColor: '';
    --hison-success-rowHoverColor: '';
    --hison-success-stripeColor: '';
    --hison-success-emptyTextColor: '';
    --hison-success-filledTextColor: '';

    --hison-danger-buttonColor: '';
    --hison-danger-borderColor: '';
    --hison-danger-shadowColor: '';
    --hison-danger-hoverColor: '';
    --hison-danger-activeColor: '';
    --hison-danger-rowHoverColor: '';
    --hison-danger-stripeColor: '';
    --hison-danger-emptyTextColor: '';
    --hison-danger-filledTextColor: '';

    --hison-warning-buttonColor: '';
    --hison-warning-borderColor: '';
    --hison-warning-shadowColor: '';
    --hison-warning-hoverColor: '';
    --hison-warning-activeColor: '';
    --hison-warning-rowHoverColor: '';
    --hison-warning-stripeColor: '';
    --hison-warning-emptyTextColor: '';
    --hison-warning-filledTextColor: '';

    --hison-font-family: 'Arial, sans-serif';
    --hison-s-min-height: '';
    --hison-m-min-height: '';
    --hison-l-min-height: '';
    --hison-xl-min-height: '';
    --hison-s-font-size: '';
    --hison-m-font-size: '';
    --hison-l-font-size: '';
    --hison-xl-font-size: '';
}`,

  t5000:
`기본적으로 지원하고 있는 css선언은 아래와 같습니다.`,
  c5000:
`.hison-font-bold-important { font-weight: bold !important; } /* for header tag in HCaption */
.hison-font-bold { font-weight: bold; }
.hison-font-italic { font-style: italic; }
.hison-font-thruline-important { text-decoration: line-through !important; } /* for a tag in HLabel */
.hison-font-thruline { text-decoration: line-through; }
.hison-font-underline-important { text-decoration: underline !important; } /* for a tag in HLabel */
.hison-font-underline { text-decoration: underline; }

.hison-display-none { display: none !important; }
.hison-disable { opacity: 0.5; cursor: not-allowed !important; }

.hison-color-primary-bg-filled { background: var(--hison-primary-buttonColor); color: var(--hison-primary-filledTextColor); }
.hison-color-muted-bg-filled { background: var(--hison-muted-buttonColor); color: var(--hison-muted-filledTextColor); }
.hison-color-info-bg-filled { background: var(--hison-info-buttonColor); color: var(--hison-info-filledTextColor); }
.hison-color-success-bg-filled { background: var(--hison-success-buttonColor); color: var(--hison-success-filledTextColor); }
.hison-color-danger-bg-filled { background: var(--hison-danger-buttonColor); color: var(--hison-danger-filledTextColor); }
.hison-color-warning-bg-filled { background: var(--hison-warning-buttonColor); color: var(--hison-warning-filledTextColor); }

.hison-color-primary-bg-empty { background: var(--hison-emptyColor); color: var(--hison-primary-buttonColor); }
.hison-color-muted-bg-empty { background: var(--hison-emptyColor); color: var(--hison-muted-buttonColor); }
.hison-color-info-bg-empty { background: var(--hison-emptyColor); color: var(--hison-info-buttonColor); }
.hison-color-success-bg-empty { background: var(--hison-emptyColor); color: var(--hison-success-buttonColor); }
.hison-color-danger-bg-empty { background: var(--hison-emptyColor); color: var(--hison-danger-buttonColor); }
.hison-color-warning-bg-empty { background: var(--hison-emptyColor); color: var(--hison-warning-buttonColor); }

.hison-color-primary-bg-transparent { background: transparent; color: var(--hison-primary-buttonColor); }
.hison-color-muted-bg-transparent { background: transparent; color: var(--hison-muted-buttonColor); }
.hison-color-info-bg-transparent { background: transparent; color: var(--hison-info-buttonColor); }
.hison-color-success-bg-transparent { background: transparent; color: var(--hison-success-buttonColor); }
.hison-color-danger-bg-transparent { background: transparent; color: var(--hison-danger-buttonColor); }
.hison-color-warning-bg-transparent { background: transparent; color: var(--hison-warning-buttonColor); }

.hison-color-primary-border { box-shadow: 0 1px 2px 0 var(--hison-primary-shadowColor); }
.hison-color-muted-border { box-shadow: 0 1px 2px 0 var(--hison-muted-shadowColor); }
.hison-color-info-border { box-shadow: 0 1px 2px 0 var(--hison-info-shadowColor); }
.hison-color-success-border { box-shadow: 0 1px 2px 0 var(--hison-success-shadowColor); }
.hison-color-danger-border { box-shadow: 0 1px 2px 0 var(--hison-danger-shadowColor); }
.hison-color-warning-border { box-shadow: 0 1px 2px 0 var(--hison-warning-shadowColor); }

.hison-color-primary-bg-filled-important { background: var(--hison-primary-buttonColor) !important; color: var(--hison-primary-filledTextColor) !important; }
.hison-color-muted-bg-filled-important { background: var(--hison-muted-buttonColor) !important; color: var(--hison-muted-filledTextColor) !important; }
.hison-color-info-bg-filled-important { background: var(--hison-info-buttonColor) !important; color: var(--hison-info-filledTextColor) !important; }
.hison-color-success-bg-filled-important { background: var(--hison-success-buttonColor) !important; color: var(--hison-success-filledTextColor) !important; }
.hison-color-danger-bg-filled-important { background: var(--hison-danger-buttonColor) !important; color: var(--hison-danger-filledTextColor) !important; }
.hison-color-warning-bg-filled-important { background: var(--hison-warning-buttonColor) !important; color: var(--hison-warning-filledTextColor) !important; }

.hison-color-primary-bg-empty-important { background: var(--hison-emptyColor) !important; color: var(--hison-primary-buttonColor) !important; }
.hison-color-muted-bg-empty-important { background: var(--hison-emptyColor) !important; color: var(--hison-muted-buttonColor) !important; }
.hison-color-info-bg-empty-important { background: var(--hison-emptyColor) !important; color: var(--hison-info-buttonColor) !important; }
.hison-color-success-bg-empty-important { background: var(--hison-emptyColor) !important; color: var(--hison-success-buttonColor) !important; }
.hison-color-danger-bg-empty-important { background: var(--hison-emptyColor) !important; color: var(--hison-danger-buttonColor) !important; }
.hison-color-warning-bg-empty-important { background: var(--hison-emptyColor) !important; color: var(--hison-warning-buttonColor) !important; }

.hison-color-primary-bg-transparent-important { background: transparent; color: var(--hison-primary-buttonColor) !important; }
.hison-color-muted-bg-transparent-important { background: transparent; color: var(--hison-muted-buttonColor) !important; }
.hison-color-info-bg-transparent-important { background: transparent; color: var(--hison-info-buttonColor) !important; }
.hison-color-success-bg-transparent-important { background: transparent; color: var(--hison-success-buttonColor) !important; }
.hison-color-danger-bg-transparent-important { background: transparent; color: var(--hison-danger-buttonColor) !important; }
.hison-color-warning-bg-transparent-important { background: transparent; color: var(--hison-warning-buttonColor) !important; }

.hison-color-primary-border-important { box-shadow: 0 1px 2px 0 var(--hison-primary-shadowColor) !important; }
.hison-color-muted-border-important { box-shadow: 0 1px 2px 0 var(--hison-muted-shadowColor) !important; }
.hison-color-info-border-important { box-shadow: 0 1px 2px 0 var(--hison-info-shadowColor) !important; }
.hison-color-success-border-important { box-shadow: 0 1px 2px 0 var(--hison-success-shadowColor) !important; }
.hison-color-danger-border-important { box-shadow: 0 1px 2px 0 var(--hison-danger-shadowColor) !important; }
.hison-color-warning-border-important { box-shadow: 0 1px 2px 0 var(--hison-warning-shadowColor) !important; }`,

  subhead4:
`hisonvue Components`,
  t6000:
`HAccordion`,
  t6100:
`HBaggie`,
  t6200:
`HBanner`,
  t6300:
`HButton`,
  t6400:
`HCalendar`,
  t6500:
`HCaption`,
  t6600:
`HChart`,
  t6700:
`HDrawer`,
  t6800:
`HDropdown`,
  t6900:
`HFileset`,
  t7000:
`HGap`,
  t7100:
`HGrid`,
  t7200:
`HImagebox`,
  t7300:
`HInput`,
  t7400:
`HInputGroup`,
  t7500:
`HLabel`,
  t7600:
`HLayout`,
  t7700:
`HList`,
  t7800:
`HModal`,
  t7900:
`HNote`,
  t8000:
`HPagination`,
  t8100:
`HParagraph`,
  t8200:
`HPopup`,
  t8300:
`HSpinner`,
  t8400:
`HTable`,
} as const;

export default ko;