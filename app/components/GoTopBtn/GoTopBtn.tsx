'use client';
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

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
      className={`${isScrolled ? 'block' : 'hidden'}
        fixed right-10 bottom-14 transition-all ease-in-out p-2 bg-zinc-900 text-white cursor-pointer border border-zinc-50
      dark:bg-white dark:border-zinc-900 dark:text-black rounded-lg`}
      onClick={handleGoTop}
    >
      <AiOutlineArrowUp size={18} />
    </div>
  );
};

export default GoTopBtn;
