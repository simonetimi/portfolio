import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex h-14 w-screen items-center justify-center border-t-1 border-gray-200 dark:border-white/20">
      <Link href="https://github.com/simonetimi" target="_blank">
        <Image
          alt="GitHub logo"
          src="github-mark.svg"
          className="transition-transform hover:scale-105 dark:invert"
          width={24}
          height={24}
        />
      </Link>
    </footer>
  );
}
