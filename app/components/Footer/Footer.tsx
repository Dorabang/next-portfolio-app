import Link from 'next/link';
import notoSerifKR from '../NotoSerif';

import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t-2 border-solid border-black dark:border-zinc-500'>
      <div className='container mx-auto py-12 flex justify-between items-center md:px-0 px-4'>
        <address className={`${notoSerifKR.className} dark:text-zinc-400`}>
          <span className='font-bold'>(FrontEnd Developer) Park su-a</span>
          <br />
          <span className='pt-5 pb-2.5 inline-block'>Tel : 010.8930.1195</span>
          <br />
          E-mail : psa1195@naver.com
        </address>
        <div>
          <Link
            href='https://github.com/Dorabang'
            target='_blank'
            className='dark:text-zinc-400'
          >
            <FaGithubSquare size={36} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
