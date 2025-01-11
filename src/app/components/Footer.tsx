import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-6 flex h-14 w-screen items-center justify-center gap-3 border-t-1 border-gray-200 dark:border-white/20">
      <Link href="https://github.com/simonetimi" target="_blank">
        <Image
          alt="GitHub logo"
          src="logos/github-mark.svg"
          className="transition-transform hover:scale-105 dark:invert"
          width={24}
          height={24}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/simonetimi" target="_blank">
        <Image
          alt="Linkedin logo"
          src="logos/linkedin.svg"
          className="transition-transform hover:scale-105 dark:invert"
          width={24}
          height={24}
        />
      </Link>
      <Link href="mailto:simonetimi.dev@gmail.com">
        <Image
          alt="Email logo"
          src="logos/email.svg"
          className="transition-transform hover:scale-105 dark:invert"
          width={24}
          height={24}
        />
      </Link>
    </footer>
  );
}
