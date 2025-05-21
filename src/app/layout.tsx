import type { Metadata } from 'next';
import {
  Inder,
  DM_Serif_Text,
  Merriweather,
  Gilda_Display,
  WindSong,
} from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inderSans = Inder({
  variable: '--font-inder-sans',
  weight: '400',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

const dmSerifDisplay = DM_Serif_Text({
  variable: '--font-dm-serif-display',
  weight: '400',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  weight: '700',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

const gildaDisplay = Gilda_Display({
  variable: '--font-gilda-display',
  weight: '400',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

const windSong = WindSong({
  variable: '--font-windsong',
  weight: '400',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jake & Louise Wedding',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inderSans.variable} ${dmSerifDisplay.variable} ${merriweather.variable} ${gildaDisplay.variable} ${windSong.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
