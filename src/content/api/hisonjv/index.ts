import ko from './ko';
import en from './en';
import type { Lang } from '@/store';
import type { methodNoteGridRow, propJavaGridRow } from '@/types';
import { utilsConfigGridDataEn, utilsConfigGridDataKo, utilsGridDataEn, utilsGridDataKo } from './gridDataUtils';
import { conditionGridDataEn, conditionGridDataKo, dataModelConverterGridDataEn, dataModelConverterGridDataKo, dataModelGridDataEn, dataModelGridDataKo, dataWrapperGridDataEn, dataWrapperGridDataKo } from './gridDataDataModel';
import { apiHandlerDefaultGridDataEn, apiHandlerDefaultGridDataKo, apiLinkGridDataEn, apiLinkGridDataKo, cachingHandlerDefaultGridDataEn, cachingHandlerDefaultGridDataKo, serviceRuntimeExceptionGridDataEn, serviceRuntimeExceptionGridDataKo } from './gridDataApiLink';

export const apiHisonjvContents: Record<Lang, typeof ko | typeof en> = {
  ko, en,
};

export const utilsGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: utilsGridDataKo,
  en: utilsGridDataEn,
};

export const utilsConfigGridData: Record<Lang, propJavaGridRow[]> = {
  ko: utilsConfigGridDataKo,
  en: utilsConfigGridDataEn,
};

export const dataWrapperGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: dataWrapperGridDataKo,
  en: dataWrapperGridDataEn,
};

export const dataModelGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: dataModelGridDataKo,
  en: dataModelGridDataEn,
};

export const dataModelConverterGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: dataModelConverterGridDataKo,
  en: dataModelConverterGridDataEn,
};

export const conditionGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: conditionGridDataKo,
  en: conditionGridDataEn,
};

export const apiLinkGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: apiLinkGridDataKo,
  en: apiLinkGridDataEn,
};

export const apiHandlerDefaultGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: apiHandlerDefaultGridDataKo,
  en: apiHandlerDefaultGridDataEn,
};

export const serviceRuntimeExceptionGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: serviceRuntimeExceptionGridDataKo,
  en: serviceRuntimeExceptionGridDataEn,
};

export const cachingHandlerDefaultGridData: Record<Lang, methodNoteGridRow[]> = {
  ko: cachingHandlerDefaultGridDataKo,
  en: cachingHandlerDefaultGridDataEn,
};