'use client';
import { useParams, useRouter } from 'next/navigation';

function LanguageSwitcher({ className }: { className: string }) {
  const router = useRouter();
  const params = useParams<{ lang: string }>();

  const switchLang = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <div className={className}>
      {params.lang === 'it' ? (
        <button onClick={() => switchLang('en')}>EN</button>
      ) : (
        <button onClick={() => switchLang('it')}>IT</button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
