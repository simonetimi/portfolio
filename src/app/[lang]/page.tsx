import { Button, Code } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

import { getDictionary, Locale } from '@/app/helpers/dictionary';

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  return (
    <>
      <section
        id="intro"
        lang={lang}
        className="mt-10 flex scroll-mt-20 flex-col items-center gap-16"
      >
        <h1 className="text-3xl">
          {intl.intro.title}{' '}
          <span className="inline-block animate-waving-hand">👋</span>
        </h1>
        <div className="flex w-full flex-wrap items-center justify-center gap-8">
          <div className="self-center">
            <Image
              alt="Simone's portrait"
              width={300}
              height={300}
              src="/simone.jpg"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-8 lg:w-2/5">
            <p className="hyphens-auto text-justify">{intl.intro.text}</p>
            <div className="flex justify-center gap-4">
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
              <Link href="https://linkedin.com/in/simonetimi" target="_blank">
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
            </div>
          </div>
        </div>
        <Code className="w-[99.5%] md:w-auto" color="primary">
          <div className="mx-2 w-[99.5%] text-[0.75rem] text-rose-500 [word-spacing:-0.1rem] dark:text-rose-600 md:w-auto md:text-sm md:[word-spacing:0;]">
            <span className="text-sky-500 dark:text-sky-300">function </span>
            <span className="text-green-500 dark:text-green-400">
              {' '}
              transformToWebDeveloper
            </span>
            (<span className="text-orange-400">speechPathologist</span>) &#123;
            <br />
            &nbsp;&nbsp;if <span className="text-orange-400">(</span>
            <span className="text-pink-400">speechPathologist</span> ===
            <span className="text-amber-500 dark:text-amber-400">
              {' '}
              &quot;Simone&quot;
            </span>
            <span className="text-orange-400">)</span>{' '}
            <span className="text-orange-400">&#123;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return{' '}
            <span className="text-amber-500 dark:text-amber-400">
              &quot;Congratulations! You&apos;re now a web developer.&quot;
            </span>
            <br />
            &nbsp;&nbsp;<span className="text-orange-400">
              &#125;
            </span> else <span className="text-orange-400">&#123;</span> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return{' '}
            <span className="text-amber-500 dark:text-amber-400">
              &quot;Oops! Bad request.&quot;
            </span>{' '}
            <br />
            &nbsp;&nbsp;<span className="text-orange-400">&#125;</span>
            <br />
            &#125;
          </div>
        </Code>
      </section>

      <section
        id="about"
        lang={lang}
        className="flex scroll-mt-20 flex-col items-center gap-14"
      >
        <h1 className="text-3xl underline decoration-amber-400 underline-offset-8">
          {intl.about.title}
        </h1>
        <p className="hyphens-auto text-justify lg:w-3/5">{intl.about.text}</p>
      </section>
    </>
  );
}
