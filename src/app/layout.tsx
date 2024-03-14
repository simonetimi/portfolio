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
  title: 'Simone Timi - Full Stack Developer',
  description: 'Portfolio',
  icons: [
    { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon' },
    {
      rel: 'icon',
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
};

// body has the background tailwind styling so that there's no need for an additional wrapper
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${quicksand.className} bg-background text-foreground bg-gradient-to-b from-gray-100 to-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
