import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Reviwes = ({ reviewsPromise }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsPromise.then(data => setReviews(data));
  }, [reviewsPromise]);

  return (
    <div>
      <div >
        <h1 className='font-bold text-3xl text-center text-secondary py-6'>Review</h1>
        <p className='text-center py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est hic tempore, fugiat accusamus ipsam porro modi natus rem aspernatur distinctio!</p>
      </div>

      <Swiper
  loop={true}
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 30,
    stretch: '50%',
    depth: 200,
    scale: 0.75,
    modifier: 1,
    slideShadows: true,
  }}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
>
  {reviews.map(review => (
    <SwiperSlide key={review.id}>
      <Card review={review} />
    </SwiperSlide>
  ))}
</Swiper>
    
    </div>
  );
};

export default Reviwes;
