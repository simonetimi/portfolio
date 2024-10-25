'use client';
import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react';

export default function ProjectCard({
  lang,
  title,
  text,
  githubLink,
  deployLink,
}: {
  [key: string]: string;
}) {
  return (
    <Card className="max-w-[400px] hover:animate-pop dark:bg-gray-800">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col justify-center">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{text}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex">
        <Link isExternal showAnchorIcon href={githubLink}>
          {lang === 'en'
            ? 'See source code on GitHub'
            : 'Codice sorgente su GitHub'}
        </Link>
        {deployLink !== '' && (
          <Link isExternal showAnchorIcon className="ml-auto" href={deployLink}>
            Live
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
