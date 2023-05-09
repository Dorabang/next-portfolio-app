import Link from 'next/link';
import { Noto_Serif_KR } from 'next/font/google';
import Github from '../../images/Github_logo.png';
import Image from 'next/image';

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className='border-t-2 border-solid border-black'>
      <div className='container mx-auto py-12 flex justify-between items-center sm:px-1'>
        <address className={`${notoSerifKR.className}`}>
          <span className='font-bold'>(FrontEnd Developer) Park su-a</span>
          <br />
          <span className='pt-5 pb-2.5 inline-block'>Tel : 010.8930.1195</span>
          <br />
          E-mail : psa1195@naver.com
        </address>
        <div>
          <Link href='https://github.com/Dorabang'>
            <Image src={Github} alt='Github 로고 이미지' width={36} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
