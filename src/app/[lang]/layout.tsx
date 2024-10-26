import { getDictionary, Locale } from '@/app/helpers/dictionary';

import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function MainLayout(props: Props) {
  const params = await props.params;

  const { lang } = params;

  const { children } = props;

  const intl = await getDictionary(lang);

  return (
    <>
      <Header intl={intl} />
      <main className="mx-10 flex flex-col items-center justify-center gap-20 whitespace-pre-line md:mx-52">
        {children}
      </main>
      <Footer />
    </>
  );
}
