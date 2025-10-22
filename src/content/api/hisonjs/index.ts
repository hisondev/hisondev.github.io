import ko from './ko';
import en from './en';
import type { Lang } from '@/store';
import type { configPropGridRow, methodNoteGridRow, propGridRow, propSimpleGridRow } from '@/types';
import { utilsConfigJsGridDataEn, utilsConfigJsGridDataKo, utilsGridDataEn, utilsGridDataKo } from './gridDataUtils';
import { sheildMethodAndPropGridDataEn, sheildMethodAndPropGridDataKo } from './gridDataShield';
import { dataConfigGridDataEn, dataConfigGridDataKo, dataModelGridDataEn, dataModelGridDataKo, dataWrapperGridDataEn, dataWrapperGridDataKo } from './gridDataDataModel';
import { apiLinkGridDataEn, apiLinkGridDataKo, apiLinkPropGridDataEn, apiLinkPropGridDataKo, cachingModuleGridDataEn, cachingModuleGridDataKo, cachingModulePropGridDataEn, cachingModulePropGridDataKo } from './gridDataApiLink';

export const apiHisonjsContents: Record<Lang, typeof ko | typeof en> = {
  ko, en,
};

export const utilsGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: utilsGridDataKo,
  en: utilsGridDataEn,
};

export const utilsConfigJsGridData: Record<Lang, configPropGridRow[]> = {
  ko: utilsConfigJsGridDataKo,
  en: utilsConfigJsGridDataEn,
};

export const sheildMethodAndPropGridData: Record<Lang, propSimpleGridRow[]> = {
  ko: sheildMethodAndPropGridDataKo,
  en: sheildMethodAndPropGridDataEn,
};

export const dataWrapperGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: dataWrapperGridDataKo,
  en: dataWrapperGridDataEn,
};

export const dataModelGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: dataModelGridDataKo,
  en: dataModelGridDataEn,
};

export const dataConfigGridData: Record<Lang, propGridRow[]> = {
  ko: dataConfigGridDataKo,
  en: dataConfigGridDataEn,
};

export const apiLinkGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: apiLinkGridDataKo,
  en: apiLinkGridDataEn,
};

export const apiLinkPropGridData: Record<Lang, propSimpleGridRow[]> = {
  ko: apiLinkPropGridDataKo,
  en: apiLinkPropGridDataEn,
};

export const cachingModuleGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: cachingModuleGridDataKo,
  en: cachingModuleGridDataEn,
};

export const cachingModulePropGridData: Record<Lang, propSimpleGridRow[]> = {
  ko: cachingModulePropGridDataKo,
  en: cachingModulePropGridDataEn,
};