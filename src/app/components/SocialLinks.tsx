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
            src="logos/github-mark.svg"
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
            src="logos/linkedin.svg"
            className="transition-transform hover:scale-105 dark:invert"
            width={24}
            height={24}
          />
        </Button>
      </Link>
      <Link href="mailto:simonetimi.dev@gmail.com">
        <Button
          variant="flat"
          className="w-28 transition-transform hover:scale-105"
        >
          Email
          <Image
            alt="Email logo"
            src="logos/email.svg"
            className="transition-transform hover:scale-105 dark:invert"
            width={24}
            height={24}
          />
        </Button>
      </Link>
    </>
  );
}
