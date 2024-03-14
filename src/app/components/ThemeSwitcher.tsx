'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
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
      {currentTheme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <Image
            className="dark:invert"
            alt="Light Mode"
            width={22}
            height={22}
            src="./light.svg"
          />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <Image
            className="dark:invert"
            alt="Dark Mode"
            width={22}
            height={22}
            src="./dark.svg"
          />
        </button>
      )}
    </div>
  );
}
