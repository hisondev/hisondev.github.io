import ko from './ko';
import en from './en';
import type { Lang } from '@/store';
import { hisonComponentGridDataEn, hisonComponentGridDataKo, hisonCssEventGridDataEn, hisonCssEventGridDataKo, hisonEtcGridDataEn, hisonEtcGridDataKo, hisonStyleGridDataEn, hisonStyleGridDataKo } from './gridDataHison';
import type { methodGridRow, propGridRow } from '@/types';
import { componentConfigGridDataEn, componentConfigGridDataKo, componentStyleConfigGridDataEn, componentStyleConfigGridDataKo, cssEventConfigGridDataEn, cssEventConfigGridDataKo, dataConfigGridDataEn, dataConfigGridDataKo, linkConfigGridDataEn, linkConfigGridDataKo, shieldConfigGridDataEn, shieldConfigGridDataKo, utilsConfigGridDataEn, utilsConfigGridDataKo } from './gridDataHisonConfig';

export const apiHisonvueContents: Record<Lang, typeof ko | typeof en> = {
  ko, en,
};

export const hisonComponentGridData: Record<Lang, methodGridRow[]> = {
  ko: hisonComponentGridDataKo,
  en: hisonComponentGridDataEn,
};

export const hisonStyleGridData: Record<Lang, methodGridRow[]> = {
  ko: hisonStyleGridDataKo,
  en: hisonStyleGridDataEn,
};

export const hisonCssEventGridData: Record<Lang, methodGridRow[]> = {
  ko: hisonCssEventGridDataKo,
  en: hisonCssEventGridDataEn,
};

export const hisonEtcGridData: Record<Lang, methodGridRow[]> = {
  ko: hisonEtcGridDataKo,
  en: hisonEtcGridDataEn,
};

export const utilsConfigGridData: Record<Lang, propGridRow[]> = {
  ko: utilsConfigGridDataKo,
  en: utilsConfigGridDataEn,
};

export const shieldConfigGridData: Record<Lang, propGridRow[]> = {
  ko: shieldConfigGridDataKo,
  en: shieldConfigGridDataEn,
};

export const dataConfigGridData: Record<Lang, propGridRow[]> = {
  ko: dataConfigGridDataKo,
  en: dataConfigGridDataEn,
};

export const linkConfigGridData: Record<Lang, propGridRow[]> = {
  ko: linkConfigGridDataKo,
  en: linkConfigGridDataEn,
};

export const componentConfigGridData: Record<Lang, propGridRow[]> = {
  ko: componentConfigGridDataKo,
  en: componentConfigGridDataEn,
};

export const componentStyleConfigGridData: Record<Lang, propGridRow[]> = {
  ko: componentStyleConfigGridDataKo,
  en: componentStyleConfigGridDataEn,
};

export const cssEventConfigGridData: Record<Lang, propGridRow[]> = {
  ko: cssEventConfigGridDataKo,
  en: cssEventConfigGridDataEn,
};