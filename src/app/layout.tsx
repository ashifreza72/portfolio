import type { Metadata } from 'next';

import './globals.css';
import { MainNav } from '@/components/nav/MainNav';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
