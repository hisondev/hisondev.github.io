import ko from './ko';
import en from './en';
import type { Lang } from '@/store';

export const apiHisonjsContents: Record<Lang, typeof ko | typeof en> = {
  ko, en,
};