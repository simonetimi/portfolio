'use client';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { User } from '@nextui-org/react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';
import Link from 'next/link';

import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import { Dictionary } from '@/app/helpers/dictionary';

import LanguageSwitcher from './LanguageSwitcher';

interface IntlProps {
  intl: Dictionary<string>;
}

function Menu({ intl }: IntlProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light" size="sm" aria-label="Open Menu">
          <Bars3Icon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Site navigator">
        <DropdownSection showDivider>
          <DropdownItem key="intro" href="#intro">
            {intl.header.about}
          </DropdownItem>
          <DropdownItem key="stack" href="#intro">
            {intl.header.stack}
          </DropdownItem>
          <DropdownItem key="projects" href="#intro">
            {intl.header.projects}
          </DropdownItem>
          <DropdownItem key="contact" href="#intro">
            {intl.header.contact}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="contact">
          <LanguageSwitcher className="" />
        </DropdownItem>
        <DropdownItem key="contact">
          <ThemeSwitcher className="" />
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
      <ul className="mr-10 hidden gap-6 text-lg md:flex">
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
      <div className="ml-auto hidden items-center gap-4 md:flex">
        <LanguageSwitcher className="gap-2 transition-transform hover:scale-110" />
        <ThemeSwitcher className="mt-1 transition-transform hover:scale-110" />
      </div>
      <div className="ml-auto flex md:hidden">
        <Menu intl={intl} />
      </div>
    </header>
  );
}
