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
      <h1>{intl.header.title}</h1>
      <p>
        HEllo hello hello hello hello hello hello hello hello hello hello hello{' '}
        hello hellohello hello hello hello hello hello hello hello hello hello
        hello hello hellohello hello hello hello hello hello hello hello hello
        hello hello hello hellohello hello hello hello hello hello hello hello
        hello hello hello hello hellohello hello hello hello hello hello hello
        hello hello hello hello hello hellohello hello hello hello hello hello
        hello hello hello hello hello hello hellohello hello hello hello hello
        hello hello hello hello hello hello hello hellohello hello hello hello
        hello hello hello hello hello hello hello hello hellohello hello hello
        hello hello hello hello hello hello hello hello hello hellohello hello
        hello hello hello hello hello hello hello hello hello hello hellohello
        hello hello hello hello hello hello hello hello hello hello hello
        hellohello hello hello hello hello hello hello hello hello hello hello{' '}
        hello hello{' '}
      </p>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
      <br /> <br />
    </>
  );
}
