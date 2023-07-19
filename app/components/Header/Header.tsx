'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../../../public/images/logo.png';
import Image from 'next/image';
import DarkTheme from '../DarkMode';
import notoSerifKR from '../NotoSerif';

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`bg-white/90 dark:bg-zinc-900/80 border-b border-solid border-black
      dark:border-zinc-500 transition-all ${
        isScroll ? 'fixed' : 'static'
      } z-10 w-full`}
      style={{ backdropFilter: isScroll ? 'blur(12px)' : 'none' }}
    >
      <div className='container mx-auto flex justify-between items-center md:py-6 py-4 xl:px-0 px-4'>
        <Link href='/'>
          <h1
            className={`${notoSerifKR.className} text-xl font-bold dark:text-white sm:text-3xl`}
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
