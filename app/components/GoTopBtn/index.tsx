'use client';
import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const GoTopBtn = () => {
  const [isScrolled, setisScrolled] = useState<boolean>(false);
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isScrolled ? 'fixed' : 'hidden'} lg:p-3 p-2 bg-zinc-900
      2xl:right-[9.64%] xl:right-[7.8%] lg:right-3 md:right-[9.6%] right-4 bottom-14
      transition-all ease-in-out 
  text-white cursor-pointer border-solid border border-zinc-50
dark:bg-white dark:border-zinc-900 dark:text-black rounded-lg`}
      onClick={handleGoTop}
    >
      <BsArrowUp size={22} className='scale-[0.82]' />
    </div>
  );
};

export default GoTopBtn;
