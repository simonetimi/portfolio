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
      <section id="intro" className="flex scroll-mt-20 flex-col items-center">
        <h1 className="mb-10 text-3xl">
          {intl.intro.title}{' '}
          <span className="animate-waving-hand inline-block">👋</span>
        </h1>
        <section className="flex w-6/12 gap-6">
          <p>{intl.intro.text}</p>
          <p>Immagine profilo</p>
        </section>
      </section>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{' '}
      <br></br> <br></br>
    </>
  );
}
