import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
});

const body = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://le-capadocce-nogent.epic-mesa-8959.chatgpt.site'),
  title: 'Le Capadocce — Kebab & restaurant turc à Nogent-le-Rotrou',
  description: 'Kebab, köfte, assiettes, tacos et douceurs turques au 3B rue Tochon à Nogent-le-Rotrou. Consultez la carte et les horaires du Capadocce.',
  openGraph: {
    title: 'Le Capadocce — Les saveurs s’élèvent',
    description: 'Kebab, köfte, assiettes et douceurs turques à Nogent-le-Rotrou.',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Le Capadocce — Les saveurs s’élèvent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Capadocce — Les saveurs s’élèvent',
    description: 'Kebab, köfte, assiettes et douceurs turques à Nogent-le-Rotrou.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
