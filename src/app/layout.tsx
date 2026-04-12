import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manimukundeshwor.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Manimukundeshwor | Vulture conservation in the Kaligandaki corridor',
    template: '%s | Manimukundeshwor',
  },
  description:
    'Manimukundeshwor protects Nepal’s critically endangered vultures in the Kaligandaki River Corridor through a cow shelter, vulture safe feeding site, and school of nature and spiritual studies.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Manimukundeshwor',
    'vulture conservation Nepal',
    'Kaligandaki corridor',
    'vulture safe feeding site',
    'VSFS',
    'Asian vultures',
    'Syangja',
    'Chapakot',
    'gaushala',
    'diclofenac',
    'wildlife conservation',
    'community education',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Manimukundeshwor | Guardians of the Sky',
    description:
      'Holistic vulture conservation: cow shelter, safe carrion, habitat protection, and community stewardship in Syangja, Nepal.',
    url: '/',
    type: 'website',
    siteName: 'Manimukundeshwor',
    locale: 'en_NP',
    images: [
      {
        url: '/vulture2.jpg',
        width: 1200,
        height: 630,
        alt: 'Vultures — Manimukundeshwor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manimukundeshwor | Guardians of the Sky',
    description:
      'Holistic vulture conservation in the Kaligandaki River Corridor, Syangja, Nepal.',
    images: ['/vulture2.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
          <ScrollToTop />
          <Header />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
