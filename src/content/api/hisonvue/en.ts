const en = {
  caption: 'HISONVUE API',

  subhead1: `Extended hison`,

  t1000: `hison.component`,
  t1010:
    `For other features of hison, please refer to the hisonjs API documentation. ` +
    `All components are registered with a unique id, which can be used to access their methods.`,

  t1100: `hison.style`,
  t1110: `Allows dynamic control of the overall client-side style.`,

  t1200: `hison.cssEvent`,
  t1250: `hison. (etc)`,
  t1210: `Allows dynamic control of CSS-related events triggered when an element becomes active.`,

  t1300:
    `For other hison features, please refer to the hisonjs API documentation.`,

  subhead2: `hisonConfig`,

  t2000: `hisonConfig (base)`,
  t2010: `hisonConfig (utils)`,
  t2020: `hisonConfig (shield)`,
  t2030: `hisonConfig (data)`,
  t2040: `hisonConfig (link)`,
  t2100: `hisonConfig.component`,
  t2200: `hisonConfig.componentStyle`,
  t2300: `hisonConfig.event.cssEvent`,

  subhead3: `hisonvue css`,

  t3000:
    `Supports responsive design using class prefixes and suffixes.`,
  t3010:
    `The following class suffixes are supported:`,
  t3020: `-mb (Mobile)`,
  t3030: `Device width below 768px`,
  t3040: `-tb (Tablet)`,
  t3050: `Device width below 1200px`,
  t3060: `-pc (Desktop PC)`,
  t3070: `Device width below 1980px`,
  t3080: `-wd (Wide PC)`,
  t3090: `Device width above 1980px`,
  t3100:
    `The appropriate class is applied automatically based on the device width.`,
  t3110:
    `For example, the current Label component uses "hison-color-primary-pc" and "hison-color-muted-mb". ` +
    `Try resizing the browser to see the effect.`,

  t3200: `The following class prefixes are supported:`,
  t3300: `hison-col-*`,
  t3310:
    `Defines horizontal width using a 12-column grid system. ` +
    `You can use responsive forms like hison-col-6-pc or hison-col-12-mb. ` +
    `(When the screen width is 1200px or greater, width is 50%; below that, 100%.)`,

  t3400: `hison-size-*`,
  t3410:
    `Available sizes are xl, l, m, and s. The default configuration can be customized via hisonConfig.componentStyle. ` +
    `Example: hison-size-m-pc or hison-size-xl-mb — when the screen width is above 1200px, size “m” is applied; otherwise, “xl” is used.`,

  t3500: `hison-color-*`,
  t3510:
    `The available color types are listed below. These can be customized via hisonConfig.componentStyle. ` +
    `When customizing, defining only the main color is enough — related shades, text, and shadow colors are automatically adjusted internally.`,

  t3600: `hison-pos-*`,
  t3610:
    `A class prefix used inside HLayout to specify the horizontal alignment of elements. ` +
    `(This does not change the order of the elements.)`,
  c3610:
`.hison-pos-left { margin-right: auto; }
.hison-pos-center { margin-left: auto; margin-right: auto; }
.hison-pos-right { margin-left: auto; }`,

  t4000:
    `Uses CSS variables that can be controlled through hison.style, hisonConfig.componentStyle, or direct modification.`,
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

export default en;