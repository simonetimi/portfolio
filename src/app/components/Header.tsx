'use client';
import { User } from '@nextui-org/react';
import Link from 'next/link';

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
      <ul className="mr-10 flex gap-2 text-sm md:gap-6 md:text-lg">
        <li className="transition-transform hover:scale-110">
          <Link href="#intro">{intl.header.about}</Link>
        </li>
        <li className="transition-transform hover:scale-110">
          <Link href="#intro">{intl.header.stack}</Link>
        </li>
        <li className="transition-transform hover:scale-110">
          <Link href="#intro">{intl.header.projects}</Link>
        </li>
        <li className="transition-transform hover:scale-110">
          <Link href="#intro">{intl.header.contact}</Link>
        </li>
      </ul>
      <div className="ml-auto flex items-center gap-4">
        <LanguageSwitcher className="flex gap-2 transition-transform hover:scale-110" />
        <ThemeSwitcher className="mt-1 transition-transform hover:scale-110" />
      </div>
    </header>
  );
}
