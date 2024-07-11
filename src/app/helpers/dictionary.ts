'use server';

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

// defines the type for the json dictionary. It's a nested objects (category) with strings
export interface Dic {
  [key: string]: Dic | string;
}

export interface Dictionary {
  header: {
    about: string;
    stack: string;
    projects: string;
    contact: string;
  };
  intro: {
    title: string;
    text: string;
  };
  about: {
    title: string;
    text: string;
  };
  stack: {
    title: string;
  };
  projects: {
    title: string;
    [key: string]: Project | string;
  };
  contact: {
    title: string;
    text: string;
  };
}

interface Project {
  title: string;
  text: string;
  github: string;
  deployment: string;
}
