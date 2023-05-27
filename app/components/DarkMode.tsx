'use client';
import { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export default function DarkTheme() {
  type themeType = 'Light Mode' | 'Dark Mode';

  const [dark, setDark] = useState<themeType>('Dark Mode'); // 다크모드 있는곳 텍스트 !

  const toggleDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      // 다크모드 -> 기본모드
      localStorage.removeItem('theme'); // 다크모드 삭제
      document.documentElement.classList.remove('dark'); // html class에서 dark클래스 삭제 !
      setDark('Dark Mode');
    } else {
      // 기본모드 -> 다크모드
      document.documentElement.classList.add('dark'); // html의 class에 dark 클래스 추가 !
      localStorage.setItem('theme', 'dark'); // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 !
      setDark('Light Mode');
    }
  };

  useEffect(() => {
    // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className='p-4 bg-zinc-900 border border-solid border-zinc-50 text-white dark:bg-white dark:border-zinc-900 dark:text-black rounded-lg transition duration-150'
    >
      {dark === 'Dark Mode' ? <BsMoonStars size={18} /> : <BsSun size={18} />}
    </button>
  );
}
