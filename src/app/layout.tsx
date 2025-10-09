import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'PRABHA Agritech | Empowering Farmers. Inspiring Futures.',
  description:
    'PRABHA blends technology with traditional farming wisdom to create sustainable, profitable systems. Empowering farmers, youth, and agri-entrepreneurs across India.',
  keywords: [
    'agritech India',
    'hydroponics',
    'sustainable farming',
    'mushroom cultivation',
    'urban farming',
    'PRABHA',
    'greenhouse technology',
    'agri training'
  ],
  openGraph: {
    title: 'PRABHA Agritech | Empowering Farmers. Inspiring Futures.',
    description: 'Blending technology with tradition for sustainable Indian agriculture.',
    type: 'website',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}