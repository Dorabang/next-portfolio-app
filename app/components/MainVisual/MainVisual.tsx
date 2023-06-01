'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './MainVisual.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import mv_img1 from 'public/images/mv_undefined.jpg';
import mv_img2 from 'public/images/mv_todoSomething.jpg';
import Image from 'next/image';

const MainVisual = () => {
  return (
    <section>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={mv_img1} alt='Undefined 메인 배너 이미지' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mv_img2} alt='Todo Something 메인 배너 이미지' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainVisual;
