import ko from './ko';
import en from './en';
import type { Lang } from '@/store';

export const gettingStartedHisonvueContents: Record<Lang, typeof ko | typeof en> = {
  ko, en,
};