import Link from 'next/link';
import React from 'react';
import Logo from '../../images/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='border-b-2 border-solid border-black'>
      <div className='container mx-auto flex py-8'>
        <Link href='/'>
          <Image src={Logo} alt='semicolon 로고 이미지' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
