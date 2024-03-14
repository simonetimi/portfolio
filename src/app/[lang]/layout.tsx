import { getDictionary, Locale } from '@/app/helpers/dictionary';

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
      {children}
    </>
  );
}
