'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <>
      {' '}
      <Link href="https://github.com/simonetimi" target="_blank">
        <Button
          variant="flat"
          className="w-28 transition-transform hover:scale-105"
        >
          GitHub
          <Image
            alt="GitHub logo"
            src="github-mark.svg"
            className="transition-transform hover:scale-105 dark:invert"
            width={24}
            height={24}
          />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/simonetimi" target="_blank">
        <Button
          variant="flat"
          className="w-28 transition-transform hover:scale-105"
        >
          Linkedin
          <Image
            alt="Linkedin logo"
            src="linkedin.svg"
            className="transition-transform hover:scale-105 dark:invert"
            width={24}
            height={24}
          />
        </Button>
      </Link>
    </>
  );
}
