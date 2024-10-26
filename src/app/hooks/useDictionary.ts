import { useEffect, useState } from 'react';

import { Dictionary, getDictionary, Locale } from '@/app/helpers/dictionary';

export default function useDictionary(lang: Locale) {
  const [intl, setIntl] = useState<Dictionary | null>(null);

  useEffect(() => {
    // Add error handling with .catch
    getDictionary(lang)
      .then((data) => {
        setIntl(data);
      })
      .catch((error) => {
        throw new Error('Cannot fetch dictionary. ' + error);
      });
  }, [lang]);

  return { intl };
}
