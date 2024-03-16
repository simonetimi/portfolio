'use client';
import {
  Bars3Icon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import { User } from '@nextui-org/react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import Link from 'next/link';

import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import { Dictionary } from '@/app/helpers/dictionary';

import LanguageSwitcher from './LanguageSwitcher';

interface IntlProps {
  intl: Dictionary;
}

function Menu({ intl }: IntlProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light" size="sm" aria-label="Open Menu">
          <Bars3Icon width={24} height={24} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Site navigator">
        <DropdownItem key="about" href="#about">
          <div className="flex gap-2">
            <UserIcon className="h-6 w-6" />
            <p className="text-base">{intl.header.about}</p>
          </div>
        </DropdownItem>
        <DropdownItem key="stack" href="#stack">
          <div className="flex gap-2">
            <RectangleStackIcon className="h-6 w-6" />
            <p className="text-base">{intl.header.stack}</p>
          </div>
        </DropdownItem>
        <DropdownItem key="projects" href="#projects">
          <div className="flex gap-2">
            <CommandLineIcon className="h-6 w-6" />
            <p className="text-base">{intl.header.projects}</p>
          </div>
        </DropdownItem>
        <DropdownItem key="contact" href="#contact">
          <div className="flex gap-2">
            <AtSymbolIcon className="h-6 w-6" />
            <p className="text-base">{intl.header.contacts}</p>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default function Header({ intl }: IntlProps) {
  return (
    <header
      className="sticky top-0 z-40 flex h-14 w-screen items-center border-b-1 border-gray-200 bg-white/20 p-6 backdrop-blur-md dark:border-white/20 
        dark:bg-gray-900/40 dark:backdrop-blur"
    >
      <div className="mr-auto mt-1 text-lg">
        <Link href="#intro">
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
        </Link>
      </div>
      <ul className="mr-20 hidden gap-6 text-lg md:flex">
        <li className="transition-transform hover:scale-110">
          <Link href="#about">{intl.header.about}</Link>
        </li>
        <li className="transition-transform hover:scale-110">
          <Link href="#stack">{intl.header.stack}</Link>
        </li>
        <li className="transition-transform hover:scale-110">
          <Link href="#projects">{intl.header.projects}</Link>
        </li>
        <li className="transition-transform hover:scale-110">
          <Link href="#contacts">{intl.header.contacts}</Link>
        </li>
      </ul>
      <div className="ml-auto flex items-center gap-2">
        <LanguageSwitcher className="flex h-7 w-7 items-center justify-center gap-2 rounded-full transition-transform hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700" />
        <ThemeSwitcher className=" mt-1" />
        <div className="ml-auto flex md:hidden">
          <Menu intl={intl} />
        </div>
      </div>
    </header>
  );
}
