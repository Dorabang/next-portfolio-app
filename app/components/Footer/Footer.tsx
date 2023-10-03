import Link from 'next/link';
import notoSerifKR from '../NotoSerif';

import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t border-solid bg-zinc-900 text-white border-black dark:border-zinc-500'>
      <div className='container mx-auto py-12 xl:px-0 px-4 relative'>
        <Link
          href='https://github.com/Dorabang'
          target='_blank'
          className='dark:text-zinc-400'
        >
          <FaGithubSquare size={36} />
        </Link>
        <address className={`${notoSerifKR.className} dark:text-zinc-400 pt-4`}>
          <span className='font-bold'>(FrontEnd Developer) Park su-a</span>
          <br />
          E-mail : pyj04149@gmail.com
        </address>
      </div>
    </footer>
  );
};

export default Footer;
