'use client';

import { useEffect, useState } from 'react';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className={className}>
      <Switch
        isSelected={currentTheme === 'dark' ? false : true}
        size="md"
        color="default"
        thumbIcon={({ isSelected }) =>
          isSelected ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4 text-gray-600" />
          )
        }
        onChange={
          currentTheme === 'light'
            ? () => setTheme('dark')
            : () => setTheme('light')
        }
      ></Switch>
    </div>
  );
}
