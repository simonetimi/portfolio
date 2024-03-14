import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import { Dictionary } from '@/app/helpers/dictionary';

interface IntlProps {
  intl: Dictionary<string>;
}

export default function Header({ intl }: IntlProps) {
  return (
    <header
      className="border-b-1 sticky top-0 z-40 flex h-14 w-screen items-center border-gray-200 bg-white/20 p-6 text-black backdrop-blur-md dark:border-white/20 
        dark:bg-gray-900/40 dark:text-white dark:backdrop-blur"
    >
      <p className="mr-auto text-base md:text-lg">Simone Timi</p>
      <ul className="flex gap-2 text-sm md:gap-6 md:text-lg">
        <li>{intl.header.about}</li>
        <li>{intl.header.stack}</li>
        <li>{intl.header.projects}</li>
        <li>{intl.header.contact}</li>
      </ul>
      <ThemeSwitcher className="ml-auto transition-transform hover:scale-125" />
    </header>
  );
}
