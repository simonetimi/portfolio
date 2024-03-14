'use client';
import { User } from '@nextui-org/react';

import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import { Dictionary } from '@/app/helpers/dictionary';

import LanguageSwitcher from './LanguageSwitcher';

interface IntlProps {
  intl: Dictionary<string>;
}

export default function Header({ intl }: IntlProps) {
  return (
    <header
      className="sticky top-0 z-40 flex h-14 w-screen items-center border-b-1 border-gray-200 bg-white/20 p-6 backdrop-blur-md dark:border-white/20 
        dark:bg-gray-900/40 dark:backdrop-blur"
    >
      <div className="mr-auto mt-1 text-base md:text-lg">
        <User
          className=""
          name="Simone Timi"
          description={
            <div className="text-gray-500 dark:text-gray-300">
              Full Stack Developer
            </div>
          }
          avatarProps={{
            src: 'simone.jpg',
          }}
        />
      </div>
      <ul className="flex gap-2 text-sm md:gap-6 md:text-lg">
        <li>{intl.header.about}</li>
        <li>{intl.header.stack}</li>
        <li>{intl.header.projects}</li>
        <li>{intl.header.contact}</li>
      </ul>
      <div className="ml-auto flex items-center gap-4">
        <LanguageSwitcher className="flex gap-2" />
        <ThemeSwitcher className="mt-1 transition-transform hover:scale-125" />
      </div>
    </header>
  );
}
