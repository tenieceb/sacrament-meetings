import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavLinks from '@/components/NavLinks';

const roboto = Roboto({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Roosevelt 10th Ward Sacrament Meeting Archive',
    template: '%s | Roosevelt 10th Ward',
  },
  description:
    'A searchable archive of Roosevelt 10th Ward sacrament meetings, including meeting dates, speakers, hymns, prayers, and ward business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <NavLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}