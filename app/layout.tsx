import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const pretendard = localFont({
  src: [
    {
      path: './assets/fonts/woff2/Pretendard-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/woff2/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/woff2/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/woff2/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DevQuiz',
  description: 'Dev Quiz Show~ ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
