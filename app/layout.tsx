import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

import './styles/globals.css';
const vietnami = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Single Page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${vietnami.className} container`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
