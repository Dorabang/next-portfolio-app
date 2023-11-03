'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import './MainVisual.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

// import mv img
import mv_img1 from '@/assets/images/mv_undefined.jpg';
import mv_img2 from '@/assets/images/mv_todoSomething.jpg';
import mv_img3 from '@/assets/images/mv_disney.jpg';

import mv_img1_tablet from '@/assets/images/mv_undefined_tablet.jpg';
import mv_img2_tablet from '@/assets/images/mv_todoSomething_tablet.jpg';
import mv_img3_tablet from '@/assets/images/mv_disney_tablet.jpg';

import mv_img1_mobile from '@/assets/images/mv_undefined_mobile.jpg';
import mv_img2_mobile from '@/assets/images/mv_todoSomething_mobile.jpg';
import mv_img3_mobile from '@/assets/images/mv_disney_mobile.jpg';

const MainVisual = () => {
  return (
    <section>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Link href={'/portfolio/0'}>
            <Image
              src={mv_img1}
              alt='Undefined 메인 배너 이미지'
              className='lg:block hidden'
              sizes='100%'
              priority
            />
            <Image
              src={mv_img1_tablet}
              alt='Undefined 메인 배너 이미지'
              className='hidden sm:block lg:hidden'
              sizes='100%'
              priority
            />
            <Image
              src={mv_img1_mobile}
              alt='Undefined 메인 배너 이미지'
              className='block sm:hidden'
              sizes='100%'
              priority
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/portfolio/3'}>
            <Image
              src={mv_img2}
              alt='Todo Something 메인 배너 이미지'
              className='lg:block hidden'
            />
            <Image
              src={mv_img2_tablet}
              alt='Todo Something 메인 배너 이미지'
              className='hidden sm:block lg:hidden'
            />
            <Image
              src={mv_img2_mobile}
              alt='Todo Something 메인 배너 이미지'
              className='block sm:hidden'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/portfolio/2'}>
            <Image
              src={mv_img3}
              alt='Disney Plus 메인 배너 이미지'
              className='lg:block hidden'
            />
            <Image
              src={mv_img3_tablet}
              alt='Disney Plus 메인 배너 이미지'
              className='hidden sm:block lg:hidden'
            />
            <Image
              src={mv_img3_mobile}
              alt='Disney Plus 메인 배너 이미지'
              className='block sm:hidden'
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainVisual;
