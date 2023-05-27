import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/images/logo.png';
import Image from 'next/image';
import DarkTheme from '../DarkMode';
import notoSerifKR from '../NotoSerif';

const Header = () => {
  return (
    <header className='border-b-2 border-solid border-black dark:border-zinc-500'>
      <div className='container mx-auto flex justify-between items-center py-8 md:px-0 px-4'>
        <Link href='/'>
          <h1
            className={`${notoSerifKR.className} text-4xl font-bold dark:text-white`}
          >
            sem;-colon
          </h1>
        </Link>
        <DarkTheme />
      </div>
    </header>
  );
};

export default Header;
