import Image from 'next/image';

import CodeSection from '@/app/components/CodeSection';
import SocialLinks from '@/app/components/SocialLinks';
import { Dictionary, getDictionary, Locale } from '@/app/helpers/dictionary';

import ProjectCard from '../components/Project-Card';
import Stack from '../components/Stack';

type Params = {
  lang: Locale;
};

type Props = {
  params: Promise<Params>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const intl: Dictionary = await getDictionary(lang);

  // create an array with the keys of all the projects in the dictonary
  const projectsArray: string[] = Object.keys(intl.projects);

  // removes the first key (title, non informative)
  projectsArray.shift();

  return (
    <>
      <section
        id="intro"
        lang={lang}
        className="mt-10 flex scroll-mt-20 flex-col items-center gap-16"
      >
        <h1 className="text-3xl">
          {intl.intro.title + ' '}
          <span className="inline-block animate-waving-hand">👋</span>
        </h1>
        <div className="flex w-full flex-wrap items-center justify-center gap-8">
          <div className="self-center">
            <Image
              alt="Simone's portrait"
              width={280}
              height={280}
              src="/simone.webp"
              className="h-[280px] w-[280px] rounded-full"
              priority
            />
          </div>
          <div className="flex w-4/5 flex-col gap-8 lg:w-2/5">
            <p className="hyphens-auto text-justify">{intl.intro.text}</p>
            <div className="flex justify-center gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>
        <CodeSection />
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
      <section
        id="stack"
        className="flex scroll-mt-20 flex-col items-center gap-14"
      >
        <h1 className="text-3xl underline decoration-amber-400 underline-offset-8">
          {intl.stack.title}
        </h1>
        <Stack />
      </section>
      <section
        id="projects"
        lang={lang}
        className="flex scroll-mt-20 flex-col items-center gap-14"
      >
        <h1 className="text-3xl underline decoration-amber-400 underline-offset-8">
          {intl.projects.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {projectsArray.map((projectName) => {
            const project = intl.projects[projectName];
            if (typeof project === 'object') {
              return (
                <ProjectCard
                  key={project.title}
                  lang={lang}
                  title={project.title}
                  text={project.text}
                  githubLink={project.github}
                  deployLink={project.deployment}
                />
              );
            }
          })}
        </div>
      </section>
      <section
        id="contact"
        lang={lang}
        className="flex scroll-mt-20 flex-col items-center gap-14"
      >
        <h1 className="text-3xl underline decoration-amber-400 underline-offset-8">
          {intl.contact.title}
        </h1>
        <p className="mb-4 hyphens-auto text-justify lg:w-3/5">
          {intl.contact.text}
        </p>
      </section>
    </>
  );
}
