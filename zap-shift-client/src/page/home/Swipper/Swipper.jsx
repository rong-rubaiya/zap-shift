import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../../assets/brands/amazon.png'
import img2 from '../../../assets/brands/amazon_vector.png'
import img3 from '../../../assets/brands/casio.png'
import img4 from '../../../assets/brands/moonstar.png'
import img5 from '../../../assets/brands/randstad.png'
import img6 from '../../../assets/brands/star.png'
import img7 from '../../../assets/brands/start_people.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swipper = () => {
  const brandLogo=[img1,img2,img3,img4,img5,img6,img7]
  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay:1000,
          disableOnInteraction: false
        }}
      
       
      >
        {brandLogo.map((logo,index)=><SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Swipper;
