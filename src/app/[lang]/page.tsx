import { Code } from '@nextui-org/react';
import Image from 'next/image';

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
      <Code className="my-10" color="primary">
        <div className="mx-2 text-rose-500 dark:text-rose-600">
          <span className="text-sky-500 dark:text-sky-300">function </span>
          <span className="text-green-500 dark:text-green-400">
            {' '}
            transformToWebDeveloper
          </span>
          (<span className="text-orange-400">speechPathologist</span>) &#123;
          <br />
          &nbsp;&nbsp;if <span className="text-orange-400">(</span>
          <span className="text-white">speechPathologist</span> ===
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
          &nbsp;&nbsp;<span className="text-orange-400">&#125;</span> else{' '}
          <span className="text-orange-400">&#123;</span> <br />
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
      <section
        id="intro"
        lang={lang}
        className="flex scroll-mt-20 flex-col items-center"
      >
        <h1 className="mb-10 text-3xl">
          {intl.intro.title}{' '}
          <span className="inline-block animate-waving-hand">👋</span>
        </h1>
        <section className="flex w-full flex-wrap items-center justify-center gap-8">
          <div className="flex flex-col lg:w-2/5">
            <p className="hyphens-auto text-justify">{intl.intro.text}</p>
          </div>
          <div className="self-center">
            <Image
              alt="Simone's portrait"
              width={300}
              height={300}
              src="/simone.jpg"
              className="rounded-full"
            />
          </div>
        </section>
      </section>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br>
    </>
  );
}
