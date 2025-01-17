'use client';
import { Code } from '@heroui/react';

export default function CodeSection() {
  return (
    <Code className="w-[99.5%] md:w-auto" color="primary">
      <div className="mx-2 w-[95%] text-[0.65rem] text-rose-500 [word-spacing:-0.3rem] dark:text-rose-600 md:w-auto md:text-sm md:[word-spacing:0;]">
        <span className="text-sky-500 dark:text-sky-300">function </span>
        <span className="text-green-500 dark:text-green-400">
          {' '}
          transformToWebDeveloper
        </span>
        (<span className="text-orange-400">speechPathologist</span>) &#123;
        <br />
        &nbsp;&nbsp;if <span className="text-orange-400">(</span>
        <span className="text-pink-400">speechPathologist.name</span> ===
        <span className="text-amber-500 dark:text-amber-400">
          {' '}
          &apos;Simone&apos;
        </span>
        <span className="text-orange-400">)</span>{' '}
        <span className="text-orange-400">&#123;</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;return{' '}
        <span className="text-amber-500 dark:text-amber-400">
          &apos;Congratulations! You&apos;re now a web developer.&apos;
        </span>
        <br />
        &nbsp;&nbsp;<span className="text-orange-400">&#125;</span> else{' '}
        <span className="text-orange-400">&#123;</span> <br />
        &nbsp;&nbsp;&nbsp;&nbsp;throw new Error(
        <span className="text-amber-500 dark:text-amber-400">
          &apos;Oops! Bad request.&apos;
        </span>
        ) <br />
        &nbsp;&nbsp;<span className="text-orange-400">&#125;</span>
        <br />
        &#125;
      </div>
    </Code>
  );
}
