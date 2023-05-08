import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='ko'>
      <Head>
        <link rel='shorcut icon' href='/favicon.ico' />
      </Head>
      <body className={notoSansKR.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
