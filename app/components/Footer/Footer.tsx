import Logo from '../../images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto flex justify-center flex-wrap'>
        <div className='w-full text-center'>
          <Image src={Logo} alt='semicolon 로고 이미지' className='mx-auto' />
        </div>
        <address className='text-gray-500'>Email : psa1195@naver.com</address>
      </div>
    </footer>
  );
};

export default Footer;
