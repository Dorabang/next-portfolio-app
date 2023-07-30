import Footer from './components/Footer/Footer';
import GoTopBtn from './components/GoTopBtn/GoTopBtn';
import Header from './components/Header/Header';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';
import { Metadata } from 'next';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Sem;Colon',
  description: 'Park Su-a Web Development Portfolio',
  openGraph: {
    title: 'Sem;Colon||Web Development Portfolio',
    images: [{ url: '/public/images/semicolon_openGraph.jpg' }],
    description: 'Park Su-a Web Development Portfolio',
  },
  keywords:
    'web development, web design, javascript, react, nextjs, node, html, css, 프론트엔드, 프론트엔드개발자, 개발자, 개발, 포트폴리오, 리액트, 넥스트, 자바스크립트',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='ko'>
      <Head>
        <link rel='shorcut icon' href='/favicon.ico' />
        <meta
          property='og:image'
          content='@/public/images/semicolon_openGraph.jpg'
        />
      </Head>
      <body
        className={`${notoSansKR.className} dark:bg-zinc-900 transition duration-500 h-full`}
      >
        <Header />
        {children}
        <Footer />
        <GoTopBtn />
      </body>
    </html>
  );
}
