import { getDictionary, Locale } from '@/app/helpers/dictionary';

import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default async function MainLayout({
  params: { lang },
  children,
}: Props) {
  const intl = await getDictionary(lang);

  return (
    <>
      <Header intl={intl} />
      <main className="mx-10 my-14 flex flex-col items-center justify-center md:mx-52">
        {children}
      </main>
      <Footer />
    </>
  );
}
