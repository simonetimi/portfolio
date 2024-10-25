import type { Metadata } from 'next';
import { Inter, Quicksand } from 'next/font/google';

import { Providers } from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Simone Timi - Full stack developer',
  description: 'Portfolio',
  icons: [
    { rel: 'icon', url: 'icons/favicon.ico', type: 'image/x-icon' },
    {
      rel: 'icon',
      url: 'icons/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: 'icons/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    { rel: 'apple-touch-icon', url: 'icons/apple-touch-icon.png' },
  ],
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'it' }];
}

// body has the background tailwind styling so that there's no need for an additional wrapper
export default async function RootLayout(
  props: Readonly<{
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
  }>,
) {
  const params = await props.params;

  const { children } = props;

  return (
    <html
      lang={params.lang}
      className="scroll-smooth text-black dark:text-white"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} ${quicksand.className} bg-background bg-gradient-to-b from-gray-100 to-white text-foreground dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
