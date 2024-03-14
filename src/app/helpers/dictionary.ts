import 'server-only';

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

// defines the type for the json dictionary. It's a nested objects (category) with strings
export interface Dictionary<T> {
  [key: string]: { [key: string]: T };
}
