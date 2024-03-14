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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{intl.header.title}</h1>
    </main>
  );
}
