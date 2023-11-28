import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './_styles/main.scss';
import { Navbar } from './_components/layout/NavBar';
import Footer from './_components/layout/Footer';
import CookiesApproval from './_components/layout/CookiesApproval';
import BackToTop from './_components/layout/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Money Matters',
  description:
    'Financial Calculators for retirement, mortgage, annuities and lump sum payments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/home/triquetra.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <CookiesApproval />
        <BackToTop />
      </body>
    </html>
  );
}
