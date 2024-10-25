import { useEffect, useState } from 'react';

import { Dictionary, getDictionary, Locale } from '@/app/helpers/dictionary';

export default function useDictionary(lang: Locale) {
  const [intl, setIntl] = useState<Dictionary | null>(null);

  useEffect(() => {
    getDictionary(lang).then((data) => {
      setIntl(data);
    });
  }, [lang]);

  return { intl };
}
