import Link from 'next/link';
import React from 'react';
import Logo from '../../images/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='border-solid border-b border-gray-400'>
      <div className='container mx-auto flex justify-center p-3'>
        <Link href='/'>
          <Image src={Logo} alt='semicolon 로고 이미지' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
